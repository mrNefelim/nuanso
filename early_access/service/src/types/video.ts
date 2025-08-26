export interface VKVideo {
  id: number;
  owner_id: number;
  title: string;
  description: string;
  duration: number;
  image: {
    height: number;
    url: string;
    width: number;
  }[];
  first_frame: {
    height: number;
    url: string;
    width: number;
  }[];
  date: number;
  views: number;
  comments: number;
  player: string;
  platform: string;
  can_add: number;
  is_private: number;
  access_key: string;
  processing: number;
  is_favorite: boolean;
  can_comment: number;
  can_edit: number;
  can_like: number;
  can_repost: number;
  can_subscribe: number;
  can_add_to_faves: number;
  can_attach_link: number;
  width: number;
  height: number;
  user_id: number;
  converting: number;
  added: number;
  is_subscribed: number;
  repeat: number;
  type: string;
  balance: number;
  live_status: string;
  live: number;
  upcoming: number;
  spectators: number;
  likes: {
    count: number;
    user_likes: number;
  };
  reposts: {
    count: number;
    user_reposted: number;
  };
}

export interface VideoSearchParams {
  q?: string;
  sort?: '0' | '1' | '2'; // 0 - по дате, 1 - по длительности, 2 - по релевантности
  hd?: '0' | '1';
  adult?: '0' | '1';
  filters?: 'youtube' | 'vk' | 'vimeo';
  search_own?: '0' | '1';
  offset?: number;
  count?: number;
  longer?: number;
  shorter?: number;
} 