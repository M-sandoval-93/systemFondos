import { useRef, useState } from "react";

// trabajar la lógica del formulario con formularios controlados
// trabajar con los eventos onSubmit y onChange
// ver validaciones de formulario y evitar la injeccion de SQL
// pasar protección al back además del front

const Form = () => {
  const inputUserName = useRef(null);
  const inputPassword = useRef(null);
  const form = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleFocus = (ref) => {
    ref.current.classList.add("focus");
    ref.current.nextElementSibling.classList.add("focus");
  };

  const handleBlur = (ref) => {
    if (ref.current.value === "") {
      ref.current.classList.remove("focus");
      ref.current.nextElementSibling.classList.remove("focus");
    }
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // data control
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const data = new FormData(form.current);
    const { UserName, Password } = Object.fromEntries([...data.entries()]);

    // data validation
    if (!UserName.trim() || !Password)
      return setError("Todos los campos son obligatorios");

    // sending data
    console.log(UserName);
    console.log(Password);
  };

  return (
    <form className="login__form" onSubmit={handleSubmit} ref={form}>
      <div className="form__control">
        <input
          ref={inputUserName}
          type="text"
          className="input"
          placeholder="Username"
          onFocus={() => handleFocus(inputUserName)}
          onBlur={() => handleBlur(inputUserName)}
          name="UserName"
        />
        <span className="material-icons-round">person</span>
      </div>

      <div className="form__control">
        <input
          ref={inputPassword}
          type={showPassword ? "text" : "password"}
          className="input"
          placeholder="Password"
          onFocus={() => handleFocus(inputPassword)}
          onBlur={() => handleBlur(inputPassword)}
          name="Password"
        />
        <span className="material-icons-round">lock</span>
        <span
          className={`material-icons-round showPassword ${
            showPassword ? "show" : ""
          }`}
          onClick={handleShowPassword}
        >
          visibility
        </span>
      </div>

      <a className="form__recoverPassword">Recuperar contraseña</a>
      <button type="submit" className="form__button">
        login
      </button>
      {error != "" && error}
    </form>
  );
};

export default Form;
