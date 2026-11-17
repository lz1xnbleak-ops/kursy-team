import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🚀</span> Kursy<span>Team</span>
        </Link>
        <nav className="navbar-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
            Главная
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Вход
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => (isActive ? 'btn-nav active' : 'btn-nav')}>
            Регистрация
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
