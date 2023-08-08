import { useRef, useState } from "react";

// trabajar la lógica del formulario con formularios controlados
// trabajar con los eventos onSubmit y onChange
// ver validaciones de formulario y evitar la injeccion de SQL
// pasar protección al back además del front

const Form = () => {
  // visual contron form style ------------>
  const inputUserName = useRef(null);
  const inputPassword = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // manage input style
  const handleStyle = (ref, state) => {
    const isEmpty = ref.current.value.trim() === "";
    const classAction = !state && isEmpty ? "remove" : "add";

    ref.current.classList[classAction]("focus");
    ref.current.nextElementSibling.classList[classAction]("focus");
  }

  // functino to control password visibility
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };



  // data for login
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const {userName, password} = data;

  const handleChangeData = (e) => {
    const { name, value } = e.target;

    setData(() => ({ ...data, [name]: value }));
  }


  // control data
  const handleSubmit = (e) => {
    e.preventDefault();
    // setError("");
    console.log(userName, password);


    // const data = new FormData(form.current);
    // const { UserName, Password } = Object.fromEntries([...data.entries()]);

    // data validation
    // if (!UserName.trim() || !Password)
    //   return setError("Todos los campos son obligatorios");

    // sending data
    // console.log(UserName);
    // console.log(Password);
  };



  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <div className="form__control">
        <input
          ref={inputUserName}
          type="text"
          className="input"
          placeholder="Username"
          onFocus={() => handleStyle(inputUserName, true)}
          onBlur={() => handleStyle(inputUserName, false)}
          name="userName"
          onChange={handleChangeData}
        />
        <span className="material-icons-round">person</span>
      </div>

      <div className="form__control">
        <input
          ref={inputPassword}
          type={showPassword ? "text" : "password"}
          className="input"
          placeholder="Password"
          onFocus={() => handleStyle(inputPassword, true)}
          onBlur={() => handleStyle(inputPassword, false)}
          name="password"
          onChange={handleChangeData}
        />
        <span className="material-icons-round">lock</span>
        <span
          className={`material-icons-round showPassword ${showPassword ? "show" : ""
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
      {/* {error != "" && error} */}
    </form>
  );

};

export default Form;
