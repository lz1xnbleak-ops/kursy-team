# Сайт для продажи курсов

Фронтенд-приложение на React + Vite с настроенным CI/CD на платформе Netlify.

## Ссылка на проект
- **Production сайт:** https://kursy-team.netlify.app

---

## Страницы
- Главная: `/`
- Регистрация: `/register`
- Вход: `/login`

## Локальный запуск

1. Клонировать репозиторий:
```bash
git clone https://github.com/lz1xnbleak-ops/kursy-team.git
cd kursy-team
```

2. Установить зависимости:
```bash
npm install
```

3. Запустить dev-сервер:
```bash
npm run dev
```

4. Собрать production-билд:
```bash
npm run build
```

## Как устроен деплой (CI/CD)

1. Защита ветки main: Прямой пуш запрещён. Все изменения попадают только через Pull Request.
2. Deploy Preview: При открытии Pull Request Netlify автоматически собирает проект и генерирует уникальную ссылку для предварительного тестирования изменений.
3. Автодеплой: После одобрения и слияния (merge) Pull Request в ветку main, Netlify автоматически выполняет команду npm run build и публикует содержимое папки dist на Netlify.
