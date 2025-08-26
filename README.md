# Нуансо - Операционный аудит для стартапов

Лендинг для сервиса операционного аудита стартапов.

## Технологии

- Next.js
- React
- TypeScript
- Tailwind CSS

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/mrnefelim/nuanso.git
cd nuanso
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект в режиме разработки:
```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере.

## Сборка для продакшена

```bash
npm run build
npm start
```

## Структура проекта

```
src/
  ├── app/              # Next.js App Router
  ├── components/       # React компоненты
  │   ├── sections/    # Секции лендинга
  │   └── ui/          # UI компоненты
  └── lib/             # Утилиты и хелперы
``` 