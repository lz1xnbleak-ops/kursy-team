import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Вход в аккаунт</h2>
          <p>Введите свои данные для доступа к курсам</p>
        </div>

        {submitted ? (
          <div className="auth-success">
            <span className="success-icon">✅</span>
            <h3>Вы успешно вошли!</h3>
            <p>Добро пожаловать в учебный кабинет: {email}</p>
            <Link to="/" className="btn-primary" style={{ marginTop: '16px' }}>
              Перейти к курсам
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Электронная почта</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary btn-block">
              Войти
            </button>

            <p className="auth-switch">
              Нет учётной записи? <Link to="/register">Зарегистрироваться</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
