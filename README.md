# Сайт для продажи курсов (KursyTeam)

Фронтенд-приложение на **React + Vite** с маршрутизацией через **React Router** и автоматическим деплоем на **Netlify**.

## 🌐 Ссылки на проект

- **Рабочий сайт (Production):** [https://kursy-team.netlify.app](https://kursy-team.netlify.app)
- **GitHub репозиторий:** [https://github.com/lz1xnbleak-ops/kursy-team](https://github.com/lz1xnbleak-ops/kursy-team)

---

## 📄 Страницы проекта

1. **Главная страница (`/`):** [https://kursy-team.netlify.app/](https://kursy-team.netlify.app/) — каталог курсов с описанием, ценами и кнопками записи.
2. **Вход (`/login`):** [https://kursy-team.netlify.app/login](https://kursy-team.netlify.app/login) — форма входа в личный кабинет.
3. **Регистрация (`/register`):** [https://kursy-team.netlify.app/register](https://kursy-team.netlify.app/register) — форма создания нового аккаунта.

> **Примечание по роутингу:** Все 3 страницы открываются как по навигации внутри сайта, так и по **прямой ссылке** (при обновлении страницы через `F5` ошибка `404 Not Found` не возникает благодаря файлу `public/_redirects`).

---

## 🚀 Локальный запуск проекта

### Требования
- **Node.js** (версия 18+ или 20+)
- **npm** (версия 9+)

### Шаги запуска:

1. **Клонировать репозиторий:**
   ```bash
   git clone https://github.com/lz1xnbleak-ops/kursy-team.git
   cd kursy-team
   ```

2. **Установить зависимости:**
   ```bash
   npm install
   ```

3. **Запустить локальный сервер для разработки:**
   ```bash
   npm run dev
   ```
   Сервер запустится по адресу: `http://localhost:5173`.

4. **Собрать проект для production:**
   ```bash
   npm run build
   ```
   Собранные статические файлы будут сохранены в папку `dist/`.

---

## ⚙️ Как работает деплой (CI/CD на Netlify)

1. **Интеграция с GitHub:**
   - Репозиторий подключен к платформе Netlify.
   - Базовая ветка деплоя — `main`.

2. **Настройки сборки (Build settings):**
   - **Base directory:** корень проекта (`.`)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

3. **Автодеплой (Continuous Deployment):**
   - При слиянии (merge) любого Pull Request в ветку `main` Netlify автоматически запускает сборку и выкатывает свежую версию на [https://kursy-team.netlify.app](https://kursy-team.netlify.app).

4. **Deploy Previews:**
   - Для каждого созданного Pull Request Netlify автоматически генерирует отдельную тестовую ссылку (Deploy Preview) для предварительного тестирования изменений до их попадания в продакшн.

5. **SPA-маршрутизация (Single Page Application):**
   - В папке `public/` размещен конфигурационный файл `_redirects` со следующим содержимым:
     ```text
     /*    /index.html   200
     ```
   - Это правило перенаправляет все запросы к несуществующим статическим файлам на `index.html`, позволяя `react-router-dom` обрабатывать маршруты на стороне клиента без ошибки `404 Not Found`.

---

## 👥 Команда разработки
- **KursyTeam DevOps & Frontend**
