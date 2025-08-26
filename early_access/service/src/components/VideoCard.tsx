import { VKVideo } from '@/types/video';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

interface VideoCardProps {
  video: VKVideo;
  onOpen?: (video: VKVideo) => void;
}

export function VideoCard({ video, onOpen }: VideoCardProps) {
  const thumbnailUrl = video.image?.[0]?.url || video.first_frame?.[0]?.url;
  const date = new Date(video.date * 1000);
  const formattedDate = formatDistanceToNow(date, { addSuffix: true, locale: ru });

  return (
    <div 
      className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
      onClick={() => onOpen?.(video)}
    >
      <div className="aspect-video relative">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={video.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400">Нет превью</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center gap-2 text-white text-sm">
            <span>👁️ {video.views}</span>
            <span>❤️ {video.likes.count}</span>
            <span>🔄 {video.reposts.count}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2 mb-2">
          {video.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">
          {video.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{formattedDate}</span>
          <span>{Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
} 