import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
        <div className="login">
            <h1>Đăng nhập</h1>
            <form id="login-form">
                <div className="login-form__username">
                    <label htmlFor="username">Tên đăng nhập:</label>
                    <input type="text" id="username" name="username"  />
                </div>
                <div className="login-form__password">
                    <label htmlFor="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password"  />
                </div>
                <button  className="button">Đăng nhập</button>
                <br />
                <br />
                <Link to="/register">Bạn chưa có tài khoản? Đăng kí</Link>
            </form>
        </div>
        // <div id="user-welcome" /> 
  )
}
