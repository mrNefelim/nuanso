export interface Persona {
  id: string;
  name: string;
  role: string;
  description: string;
  style: string;
  avatarUrl: string;
  characteristics: Characteristic[];
}

export interface Characteristic {
  name: string;
  value: string;
}

export interface Avatar {
  id: string;
  url: string;
  description?: string;
} 