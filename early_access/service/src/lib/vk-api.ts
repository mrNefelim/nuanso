import axios from 'axios';
import { VKVideo, VideoSearchParams } from '@/types/video';

const VK_API_VERSION = '5.131';
const VK_API_BASE_URL = 'https://api.vk.com/method';

export class VKApi {
  private getToken(): string {
    if (typeof window === 'undefined') {
      return '';
    }
    return localStorage.getItem('vk_token') || '';
  }

  private async request<T>(method: string, params: Record<string, any>): Promise<T> {
    const token = this.getToken();
    if (!token) {
      throw new Error('Требуется авторизация через VK');
    }

    try {
      const response = await axios.get(`${VK_API_BASE_URL}/${method}`, {
        params: {
          ...params,
          access_token: token,
          v: VK_API_VERSION,
        },
      });

      if (response.data.error) {
        throw new Error(`VK API Error: ${response.data.error.error_msg}`);
      }

      return response.data.response;
    } catch (error) {
      console.error('VK API request failed:', error);
      throw error;
    }
  }

  async searchVideos(params: VideoSearchParams): Promise<{
    count: number;
    items: VKVideo[];
  }> {
    return this.request('video.search', params);
  }

  async getVideoById(ownerId: number, videoId: number, accessKey?: string): Promise<VKVideo[]> {
    const params: Record<string, any> = {
      videos: `${ownerId}_${videoId}${accessKey ? `_${accessKey}` : ''}`,
    };

    return this.request('video.get', params);
  }

  async getRandomVideo(maxViews: number = 1000): Promise<VKVideo | null> {
    // Получаем случайное видео с ограничением по просмотрам
    const response = await this.searchVideos({
      count: 1,
      offset: Math.floor(Math.random() * 1000), // Случайное смещение
      sort: '0', // Сортировка по дате
    });

    if (response.items.length === 0) {
      return null;
    }

    const video = response.items[0];
    return video.views <= maxViews ? video : null;
  }
} 