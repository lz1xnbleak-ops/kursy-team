import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 KursyTeam. Все права защищены. Развернуто на Netlify с поддержкой CI/CD.</p>
        <div className="footer-nav">
          <Link to="/">Главная</Link>
          <Link to="/login">Вход</Link>
          <Link to="/register">Регистрация</Link>
        </div>
      </div>
    </footer>
  )
}
