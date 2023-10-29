import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="form_placer">
        <div className="form-wrapper">
          <form className="form">
            <h1 style={{ textAlign: "center" }}>Регистрация</h1>

            <input
              name="firstName"
              type="text"
              placeholder="Введите ваше имя...."
            />

            <input
              name="secondName"
              type="text"
              placeholder="Введите вашу фамилию...."
            />

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
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
