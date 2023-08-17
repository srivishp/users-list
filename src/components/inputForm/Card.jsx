import "./Card.css";

const Card = (props) => {
  // Card Wrappers don't work without {props.children}
  return <div className={`${"card"} ${props.className}`}>{props.children}</div>;
};

export default Card;
