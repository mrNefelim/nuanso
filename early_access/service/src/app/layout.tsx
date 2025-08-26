import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Ранний Доступ - Открой для себя новые видео',
  description: 'Находите редкие и перспективные видео на VK до того, как они станут популярными',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <script src="https://unpkg.com/@vkid/sdk@2.5.2/dist-sdk/umd/index.js" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
} 