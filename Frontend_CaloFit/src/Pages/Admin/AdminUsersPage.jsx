import React, { useEffect } from "react";
import './adminUsers.css';
import UserForm from "./AdminUserForm";
import { deleteUser, editUser, fetchUsers } from "../../Redux/AdminUserReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../Components/Admin SideBar Section/Sidebar";

function AdminUsersPage() {
  const dispatch = useDispatch()
  const { loading, // for loading spinner
    users, error, editing } = useSelector(store => store.users)
  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers]);

  // console.log(users)

  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <Sidebar />
      <div id="outeradmin">
        <h2 id="heading">Users List</h2>
        <div>
          <div id="users">
            <div>
              <div className="userHead">
                <h3>Id</h3>
                <h3>Name</h3>
                <h3>Action</h3>
              </div>
            </div>
            <div>
              {users &&
                users.map(user => (
                  <div className="userbody">
                    {user.editing ? (
                      <UserForm user={user} key={user._id} />
                    ) : (
                      <div className="single">
                        <p>{user._id}</p>
                        <p>{user.name}</p>
                        <div className="btn1">
                          <button
                            onClick={() => dispatch(deleteUser(user._id))}
                          >
                            <i>delete</i>
                          </button>
                          <button
                            onClick={() => dispatch(editUser(user._id))}
                          >
                            <i>edit</i>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default AdminUsersPage;
