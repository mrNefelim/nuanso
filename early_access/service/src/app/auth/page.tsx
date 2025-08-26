'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Проверяем наличие кода авторизации в URL
    const code = searchParams.get('code');
    const deviceId = searchParams.get('device_id');

    if (code && deviceId && typeof window !== 'undefined' && window.VKIDSDK) {
      const VKID = window.VKIDSDK;
      
      VKID.Auth.exchangeCode(code, deviceId)
        .then((data: any) => {
          if (data.access_token) {
            localStorage.setItem('vk_token', data.access_token);
            router.push('/');
          }
        })
        .catch((error: any) => {
          console.error('Auth error:', error);
          router.push('/?error=auth_failed');
        });
    } else {
      // Если нет кода, перенаправляем на главную
      router.push('/');
    }
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Авторизация...</h1>
        <p>Пожалуйста, подождите, пока мы завершим процесс авторизации.</p>
      </div>
    </div>
  );
} 