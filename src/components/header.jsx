import React, { useState } from 'react';
import { Menu } from 'antd';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [current, setCurrent] = useState(window.location.pathname.replace('/', ''))
  const handleClick = (e) => {
    setCurrent(e.key);
  }
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="">
          <NavLink exact activeClassName="active" className="nav-link" to="/">
            Page 1
          </NavLink>
        </Menu.Item>
        <Menu.Item key="page2">
          <NavLink exact activeClassName="active" className="nav-link" to="/page2">
            Page 2
          </NavLink>
        </Menu.Item>

      </Menu>
    </div>

  );
};

export default Header;