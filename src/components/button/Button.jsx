import "./Button.scss";

const Button = ({ text = "LISTEN HERE", address }) => {
  return (
    <>
      <button className="btn">{text}</button>
    </>
  );
};

export default Button;
