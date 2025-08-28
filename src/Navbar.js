import React from "react";
import { Menu, Input } from "semantic-ui-react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import useAuth from "./hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };

  return (
    <Menu>
      <Menu.Item header>DEV@Deakin</Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search..." />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/" name="Post" />
        {user ? (
          <Menu.Item name="Logout" onClick={handleLogout} />
        ) : (
          <Menu.Item as={NavLink} to="/login" name="Login" />
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
