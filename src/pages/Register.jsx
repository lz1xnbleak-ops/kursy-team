import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
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
          <h2>Регистрация</h2>
          <p>Создайте аккаунт и начните обучение прямо сейчас</p>
        </div>

        {submitted ? (
          <div className="auth-success">
            <span className="success-icon">🎉</span>
            <h3>Регистрация завершена!</h3>
            <p>Добро пожаловать, {name}! На почту {email} отправлено подтверждение.</p>
            <Link to="/" className="btn-primary" style={{ marginTop: '16px' }}>
              Перейти к курсам
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                id="name"
                type="text"
                placeholder="Иван Иванов"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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
                placeholder="Минимум 6 символов"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            <button type="submit" className="btn-primary btn-block">
              Зарегистрироваться
            </button>

            <p className="auth-switch">
              Уже есть аккаунт? <Link to="/login">Войти</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
