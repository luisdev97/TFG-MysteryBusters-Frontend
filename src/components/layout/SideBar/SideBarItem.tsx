import React from 'react';
import { MenuItem as Item, Icon } from "semantic-ui-react";
import { SideBarItemType } from './SideBar.items';


function SideBarItem({ item }: SideBarItemProps) {
    const { title, icon, to } = item;

    return (
        <Item>
            <Icon name={icon} />
            {title}
        </Item>
    );
};


type SideBarItemProps = {
    item: SideBarItemType
}

export default SideBarItem;