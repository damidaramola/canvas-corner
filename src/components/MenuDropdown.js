import React from 'react';
import styles from '../styles/MenuDropdown.module.css';
import Dropdown from "react-bootstrap/Dropdown";

const ThreeDots = React.forwardRef(({onClick }, ref) => (
    <i
      className='fa-solid fa-ellipsis'
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
   ));
  
export const MenuDropdown = () =>{
    
    return  render(
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            Custom toggle
          </Dropdown.Toggle>
      
          <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Orange
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>,
        )
};

 