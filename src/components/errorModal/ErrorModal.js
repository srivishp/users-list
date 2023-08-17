import "../errorModal/ErrorModal.css";
import Card from "../inputForm/Card";
import Button from "../inputForm/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onDismiss} />
      <Card className="modal">
        <header className="header">
          <h2 className="h2">{props.title}</h2>
        </header>
        <div>
          <p className="content">{props.message}</p>
        </div>
        <footer className="actions">
          <Button type="submit" text="Ok" onClick={props.onDismiss} />
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
