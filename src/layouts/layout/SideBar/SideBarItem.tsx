import React from 'react';
import { MenuItem as Item, Icon } from "semantic-ui-react";
import { SideBarItemType } from './SideBar.items';
import { NavLink } from 'react-router-dom';


function SideBarItem({ item }: SideBarItemProps) {
    const { title, icon, to } = item;

    return (
        <Item>
            <NavLink to={to}>
                <Icon name={icon} />
                {title}
            </NavLink>   
        </Item>
    );
};


type SideBarItemProps = {
    item: SideBarItemType
}

export default SideBarItem;