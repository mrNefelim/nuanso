import { PersonaCard } from '../types/index';

const STORAGE_KEY = 'personas';

export const getPersona = async (id: string): Promise<PersonaCard> => {
  const personas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const persona = personas.find((p: PersonaCard) => p.id === id);
  
  if (!persona) {
    throw new Error('Persona not found');
  }
  
  if (persona.avatarUrl && !persona.avatarUrl.startsWith('avatar')) {
    persona.avatarUrl = `avatar${persona.avatarUrl}`;
  }
  
  return {
    ...persona,
    characteristics: persona.characteristics || []
  };
};

export const updatePersona = async (id: string, persona: PersonaCard): Promise<PersonaCard> => {
  const personas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const index = personas.findIndex((p: PersonaCard) => p.id === id);
  
  if (index === -1) {
    throw new Error('Persona not found');
  }
  
  if (persona.avatarUrl && !persona.avatarUrl.startsWith('avatar')) {
    persona.avatarUrl = `avatar${persona.avatarUrl}`;
  }
  
  const updatedPersona = {
    ...persona,
    characteristics: persona.characteristics || []
  };
  
  personas[index] = updatedPersona;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(personas));
  
  return updatedPersona;
}; 