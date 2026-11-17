import { Link } from 'react-router-dom'

const courses = [
  {
    id: 1,
    title: 'DevOps & Cloud Engineering',
    category: 'Инфраструктура',
    desc: 'Освойте Docker, Kubernetes, GitHub Actions, Netlify и современные практики CI/CD с нуля до Production.',
    duration: '4 месяца',
    level: 'Для начинающих',
    price: '49 900 ₸',
    badge: 'Хит',
  },
  {
    id: 2,
    title: 'Frontend на React & Vite',
    category: 'Веб-разработка',
    desc: 'Создание современных реактивных веб-приложений с React 19, Vite, хуками, SPA-маршрутизацией и адаптивной версткой.',
    duration: '3 месяца',
    level: 'С нуля',
    price: '42 000 ₸',
    badge: 'Популярно',
  },
  {
    id: 3,
    title: 'Backend на Node.js & Go',
    category: 'Серверная разработка',
    desc: 'Проектирование REST API, микросервисов, работа с PostgreSQL, Redis и оптимизация высоконагруженных систем.',
    duration: '4 месяца',
    level: 'Средний уровень',
    price: '45 000 ₸',
    badge: 'Новинка',
  },
  {
    id: 4,
    title: 'QA & Автоматизация тестирования',
    category: 'Тестирование',
    desc: 'Ручное и автоматизированное тестирование ПО, тест-кейсы, Postman, Playwright и интеграция в CI/CD пайплайны.',
    duration: '2.5 месяца',
    level: 'Для начинающих',
    price: '38 000 ₸',
    badge: 'Быстрый старт',
  },
]

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <span className="hero-tag">🎓 Онлайн-платформа нового поколения</span>
        <h1 className="hero-title">Прокачай карьеру в IT с практикой на реальных проектах</h1>
        <p className="hero-subtitle">
          Актуальные курсы по DevOps, Frontend и Backend разработке. Обучение с наставниками, командная разработка в Git и автодеплой на Netlify.
        </p>
        <div className="hero-actions">
          <a href="#courses" className="btn-primary">
            Смотреть курсы
          </a>
          <Link to="/register" className="btn-secondary">
            Начать бесплатно
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stat-card">
          <span className="stat-number">1 500+</span>
          <span className="stat-label">Студентов обучено</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">94%</span>
          <span className="stat-label">Трудоустройство</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Поддержка менторов</span>
        </div>
      </section>

      {/* Catalog */}
      <section id="courses" className="catalog-section">
        <div className="section-header">
          <h2>Популярные курсы</h2>
          <p>Выберите направление и начните обучение прямо сейчас</p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <span className="category-pill">{course.category}</span>
                <span className="badge-pill">{course.badge}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.desc}</p>
              <div className="course-meta">
                <span>⏱ {course.duration}</span>
                <span>📈 {course.level}</span>
              </div>
              <div className="course-footer">
                <span className="course-price">{course.price}</span>
                <Link to="/register" className="btn-enroll">
                  Записаться
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
