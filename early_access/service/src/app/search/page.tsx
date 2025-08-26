'use client';

import { useState } from 'react';
import { VideoCard } from '@/components/VideoCard';
import { VKVideo } from '@/types/video';
import { VKApi } from '@/lib/vk-api';

export default function SearchPage() {
  const [videos, setVideos] = useState<VKVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const query = formData.get('query') as string;
    const maxViews = parseInt(formData.get('maxViews') as string) || 1000;

    try {
      const api = new VKApi();
      const response = await api.searchVideos({
        q: query,
        count: 20,
        sort: '0',
      });

      const filteredVideos = response.items.filter(video => video.views <= maxViews);
      setVideos(filteredVideos);
    } catch (err) {
      if (err instanceof Error && err.message === 'Требуется авторизация через VK') {
        setError('Пожалуйста, войдите через VK для поиска видео');
      } else {
        setError('Произошла ошибка при поиске видео');
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Поиск видео</h1>
      </div>

      <form onSubmit={handleSearch} className="mb-8 space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="query"
            placeholder="Введите поисковый запрос"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <input
            type="number"
            name="maxViews"
            placeholder="Макс. просмотров"
            defaultValue={1000}
            className="w-32 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Поиск...' : 'Найти'}
          </button>
        </div>
      </form>

      {error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={`${video.owner_id}_${video.id}`}
            video={video}
            onOpen={(video) => window.open(video.player, '_blank')}
          />
        ))}
      </div>

      {videos.length === 0 && !loading && !error && (
        <div className="text-center text-gray-500 dark:text-gray-400">
          Введите поисковый запрос, чтобы найти видео
        </div>
      )}
    </div>
  );
} 