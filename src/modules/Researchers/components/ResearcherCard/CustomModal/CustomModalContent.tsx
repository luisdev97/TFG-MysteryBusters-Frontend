import React from "react";
import { ModalContent, List, Segment } from "semantic-ui-react";

function CustomModalContent({ items, valueKey }: CustomModalContentProps) {
  
  return (
    <ModalContent>
      <Segment inverted className="modal-items-list text-center">
        <List
          divided
          inverted
          relaxed
          className="modal-items-list"
          animated={true}
          selection={true}
        >
          {items.map((i: any, index: number) => (
            <List.Item key={index} style={{ width: "60%", margin: "0 auto" }}>
              <List.Content>
                <List.Header className="modal-item">{i[valueKey]}</List.Header>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>
    </ModalContent>
  );
}

type CustomModalContentProps = {
  items: [];
  valueKey: string;
};

export default CustomModalContent;
