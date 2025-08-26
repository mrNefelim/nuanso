export interface PersonaCard {
  id: string;
  name: string;
  age: number;
  job: string;
  goals: string[];
  pains: string[];
  quote: string;
  avatarUrl: string;
  createdAt: string;
  questionsMeta: Record<string, string>;
  characteristics: Characteristic[];
  style: 'minimalism' | 'fantasy' | 'business' | 'sci-fi';
  description: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  category: string;
}

export interface User {
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: string;
}

export interface GameSettings {
  questions: Question[];
}

export interface Characteristic {
  name: string;
  value: string;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  description: string;
  avatarUrl: string;
  characteristics: Characteristic[];
  style: 'minimalism' | 'fantasy' | 'business' | 'sci-fi';
}

export interface Avatar {
  id: string;
  url: string;
  description?: string;
} 