import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background-color: #f5ba13;
  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 92px;
  margin-bottom: 45px;
`;

const Link = styled(NavLink)`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  margin-top: 7px;
  font-size: 28px;
  font-weight: bold;
`;

const H1 = styled("h1")`
  margin-right: 79px;
`;

export const Heading = (props) => {
  return (
    <Header position="static">
      <Toolbar>
        <H1>Notes App</H1>
        <Link to="/add">Add Notes</Link>
        <Link to="/get">My Notes</Link>
      </Toolbar>
    </Header>
  );
};
