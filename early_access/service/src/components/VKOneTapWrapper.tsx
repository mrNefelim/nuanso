'use client';

import { VKOneTap } from './VKOneTap';
import { useAuth } from '@/contexts/AuthContext';

export function VKOneTapWrapper() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return null;
  }

  return (
    <VKOneTap 
      onSuccess={(token) => {
        localStorage.setItem('vk_token', token);
        window.location.reload();
      }}
      onError={(error) => {
        console.error('VK One Tap error:', error);
      }}
    />
  );
} 