import React, { useState } from 'react'
import {  Icon, Menu, MenuItem as Item, Sidebar } from 'semantic-ui-react'
import ResearcherCard from './SideBarResearcherCard';
import { SideBarItems } from './SideBar.items';
import SideBarItem from './SideBarItem';

export const SideBar = () => {
  const [visible, setVisible] = useState(true)

  return (
    <Sidebar as={Menu} 
    animation='overlay' 
    icon='labeled' 
    inverted 
    vertical 
    visible 
    width='wide'
    className="bg-dark"
    >
      <Item >
        <ResearcherCard/>
      </Item>

      { SideBarItems.map(item => <SideBarItem item={item}/>)}
      
      <Item>
        <Icon name='detective' />
        Researchers
      </Item>
      <Item as='a'>
        <Icon name='snapchat ghost' />
        Anomalies
      </Item>
      <Item as='a'>
        <Icon name='newspaper outline' />
        Incidents
      </Item>

  </Sidebar>
  )
}

