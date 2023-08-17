import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type}
      id="add-user"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
