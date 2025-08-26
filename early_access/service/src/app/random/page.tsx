'use client';

import { useState } from 'react';
import { VideoCard } from '@/components/VideoCard';
import { VKVideo } from '@/types/video';
import { VKApi } from '@/lib/vk-api';

export default function RandomPage() {
  const [video, setVideo] = useState<VKVideo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRandomVideo = async () => {
    setLoading(true);
    setError(null);

    try {
      const api = new VKApi();
      const randomVideo = await api.getRandomVideo();
      setVideo(randomVideo);
    } catch (err) {
      if (err instanceof Error && err.message === 'Требуется авторизация через VK') {
        setError('Пожалуйста, войдите через VK для получения случайного видео');
      } else {
        setError('Произошла ошибка при получении случайного видео');
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Случайное видео</h1>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={handleGetRandomVideo}
          disabled={loading}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-lg"
        >
          {loading ? 'Загрузка...' : '🎲 Крутить рулетку'}
        </button>
      </div>

      {error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      {video && (
        <div className="max-w-2xl mx-auto">
          <VideoCard
            video={video}
            onOpen={(video) => window.open(video.player, '_blank')}
          />
        </div>
      )}

      {!video && !loading && !error && (
        <div className="text-center text-gray-500 dark:text-gray-400">
          Нажмите кнопку, чтобы получить случайное видео
        </div>
      )}
    </div>
  );
} 