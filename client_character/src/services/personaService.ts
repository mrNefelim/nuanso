import { PersonaCard } from '../types/index';

const STORAGE_KEY = 'personas';

export const createPersona = async (persona: Omit<PersonaCard, 'id'>): Promise<string> => {
  const personas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const newPersona = {
    ...persona,
    id: Date.now().toString(),
  };
  personas.push(newPersona);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(personas));
  return newPersona.id;
};

export const getPersonasByUser = async (): Promise<PersonaCard[]> => {
  const personas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  return personas;
};

export const updatePersona = async (id: string, updates: Partial<PersonaCard>): Promise<void> => {
  const personas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const index = personas.findIndex((p: PersonaCard) => p.id === id);
  if (index !== -1) {
    personas[index] = { ...personas[index], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(personas));
  }
};

export const deletePersona = async (id: string): Promise<void> => {
  const personas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const filteredPersonas = personas.filter((p: PersonaCard) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredPersonas));
}; 