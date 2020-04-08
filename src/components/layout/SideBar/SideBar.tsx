import React, { useState } from 'react'
import { Card, Icon, Image, Menu, MenuItem as Item, Segment, Sidebar } from 'semantic-ui-react'

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
      
    {/*<Menu.Item as={Link} to="/admin">*/}
    <Item >
      <Card centered className="bg-transparent shadow-none" >

      <Card.Content>
      <Image
       
       size={"tiny"} 
       src='https://cdn.iconscout.com/icon/premium/png-256-thumb/panda-1834062-1555821.png'
       floated="left"
       className="d-inline"
       />
        <Card.Header className="mt-2 text-white"><h3>Sandra Casero</h3></Card.Header>
        <Card.Meta className="mt-1 mr-3 text-muted"><h4>Administrador</h4></Card.Meta>
        <Card.Meta className="mt-2 text-muted mr-5">
          
            <span className="mr-4">
              <Icon 
              size="small"
              name="circle"
              color={"green"}
              />
              Online
            </span>
              
          
          </Card.Meta>
       
        

      </Card.Content>      

      </Card>
    </Item>
    <Menu.Item>
       <Icon name='building' />
       Researchers
    </Menu.Item>
    <Menu.Item as='a'>
       <Icon name='user' />
       Anomalies
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='user' />
      Incidents
    </Menu.Item>

  </Sidebar>
  )
}

