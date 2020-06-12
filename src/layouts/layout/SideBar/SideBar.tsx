import React, { useState } from "react";
import { Menu, MenuItem as Item, Sidebar } from "semantic-ui-react";
import ResearcherCard from "./SideBarResearcherCard";
import { SideBarItems } from "./SideBar.items";
import SideBarItem from "./SideBarItem";

export const SideBar = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={true}
      width="wide"
      className="bg-dark"
    >
      <Item onClick={() => setVisible(!visible)}>
        <ResearcherCard />
      </Item>

      {SideBarItems.map((item, index) => (
        <SideBarItem item={item} key={index} />
      ))}
    </Sidebar>
  );
};
