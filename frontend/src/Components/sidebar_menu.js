import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function SidebarMenu() {

    return (
      <DropdownButton id="dropdownMenu" title="Sorteren">
        <Dropdown.Item href="#">Categorie</Dropdown.Item>
        <Dropdown.Item href="#">Niveau</Dropdown.Item>
        <Dropdown.Item href="#">Locatie</Dropdown.Item>
        <Dropdown.Item href="#">Sorteren op</Dropdown.Item>
      </DropdownButton>
    )
};
export default SidebarMenu;
