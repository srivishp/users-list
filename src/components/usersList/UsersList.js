import Card from "../inputForm/Card";
import "../usersList/UsersList.css";

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul className="ul">
        {props.users.map((user) => (
          <li key={user.id} className="li">
            {user.name} ({user.age}years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
