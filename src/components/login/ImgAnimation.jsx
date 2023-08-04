import imgLogin from "../../assets/img_login.png";

const ImgAnimation = () => {
  return (
    <section className="image">
      <img src={imgLogin} alt={"imagen de cuentas"} />
      <span className="image__circle"></span>
      <span className="image__edgeOne"></span>
      <span className="image__edgeTwo"></span>
    </section>
  );
};

export default ImgAnimation;
