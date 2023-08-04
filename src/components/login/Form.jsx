import { useRef, useState } from "react";

const Form = () => {
  const inputUserName = useRef();
  const inputPassword = useRef();
  const [showPassword, setShowPassword] = useState(false);

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

  return (
    <form className="login__form" method={"post"}>
      <div className="form__control">
        <input
          ref={inputUserName}
          type="text"
          className="input"
          placeholder="Username"
          onFocus={() => handleFocus(inputUserName)}
          onBlur={() => handleBlur(inputUserName)}
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
      <button className="form__button">login</button>
    </form>
  );
};

export default Form;
