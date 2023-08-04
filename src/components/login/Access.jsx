import imgLogo from "../../assets/logo_liceo.png";
import Form from "./Form";

const Access = () => {
  return (
    <section className="main">
      <div className="main__login">
        <img className="login__logo" src={imgLogo} alt={"logo del liceo"} />

        <p className="login__title">Bienvenidos !</p>
        <div className="login__separator"></div>
        <p className="login__message">Ingresa una cuenta de usuario válida.</p>

        <Form />
      </div>
    </section>
  );
};

export default Access;
