'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VKIDSDK: any;
  }
}

interface VKOneTapProps {
  onSuccess: (token: string) => void;
  onError: (error: any) => void;
}

export function VKOneTap({ onSuccess, onError }: VKOneTapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.VKIDSDK && containerRef.current) {
      const VKID = window.VKIDSDK;

      VKID.Config.init({
        app: Number(process.env.NEXT_PUBLIC_VK_APP_ID),
        redirectUrl: `${window.location.origin}/auth`,
        responseMode: VKID.ConfigResponseMode.Callback,
        source: VKID.ConfigSource.LOWCODE,
        scope: 'video',
      });

      const oneTap = new VKID.OneTap();

      oneTap
        .render({
          container: containerRef.current,
          showAlternativeLogin: false,
        })
        .on(VKID.WidgetEvents.ERROR, (error: any) => {
          console.error('One Tap error:', error);
          onError(error);
        })
        .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload: any) {
          const code = payload.code;
          const deviceId = payload.device_id;

          VKID.Auth.exchangeCode(code, deviceId)
            .then((data: any) => {
              if (data.access_token) {
                onSuccess(data.access_token);
              }
            })
            .catch(onError);
        });
    }
  }, [onSuccess, onError]);

  return (
    <div ref={containerRef} className="vk-one-tap-container" />
  );
} 