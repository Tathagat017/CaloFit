import React from "react";
import { useDispatch } from "react-redux";
import { editUser, updateUser } from "../../Redux/AdminUserReducer/action";
import './adminUsers.css';

function UserForm({ user }) {
  const dispatch = useDispatch();

  const [name, setName] = React.useState(user.name);

  const handleSubmit = () => {
    console.log(name);
    dispatch(updateUser({ ...user, name }));
  };

  const handleCancel = () => {
    dispatch(editUser(user._id));
  };

  return (
    <div className="single">
      <p>{user._id}</p>
      <div>
        <input
          defaultValue={user.name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="btn2">
        <button  onClick={handleCancel}>
          <i>Cancel</i>
        </button>
        <button
          onClick={handleSubmit}
        >
          <i>save</i>
        </button>
      </div>
    </div>
  );
}

export default UserForm;
