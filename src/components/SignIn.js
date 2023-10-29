import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <>
      <div className="form_placer">
        <div className="form-wrapper">
          <form className="form">
            <h1 style={{ textAlign: "center" }}>Вход</h1>

            <input
              name="email"
              type="text"
              placeholder="Введите ваш адрес почты...."
            />

            <input
              name="password"
              type="password"
              placeholder="Введите ваш пароль...."
            />

            <button type="submit" className="enterbtn">
              Войти
            </button>
            <Link className="link">Забыли пароль?</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
