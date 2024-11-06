import React, { useContext } from "react";
import { AuthContext } from "../context/Auth"

const SideBar = () => {

    const {logout} = useContext(AuthContext)

  return (
    <div className="card shadow border-0">
      <div className="card-body p-4 sidebar">
        <h4>Sidebar</h4>

        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Projects</a></li>
            <li>
                <button onClick={logout} className="btn btn-primary mt-3">Logout</button>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;