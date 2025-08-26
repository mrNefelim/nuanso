export interface Avatar {
  id: string;
  url: string;
  description?: string;
}

export const avatars: Avatar[] = [
  {
    id: 'avatar1',
    url: '/avatars/avatar1.png',
    description: 'Молодой мужчина'
  },
  {
    id: 'avatar2',
    url: '/avatars/avatar2.png',
    description: 'Молодая женщина'
  },
  {
    id: 'avatar3',
    url: '/avatars/avatar3.png',
    description: 'Мужчина средних лет'
  },
  {
    id: 'avatar4',
    url: '/avatars/avatar4.png',
    description: 'Женщина средних лет'
  },
  {
    id: 'avatar5',
    url: '/avatars/avatar5.png',
    description: 'Пожилой мужчина'
  },
  {
    id: 'avatar6',
    url: '/avatars/avatar6.png',
    description: 'Пожилая женщина'
  }
]; 