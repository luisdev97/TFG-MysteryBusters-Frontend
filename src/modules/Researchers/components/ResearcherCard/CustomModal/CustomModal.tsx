import React from "react";
import { Button, Icon, Modal, List, Segment } from "semantic-ui-react";
import { modalType, ModalLayouts } from "./modal.layouts";
import "./CustomModal.css";

function CustomModal({ modalType, data }: ResearcherModalProps) {
  const {
    buttonText,
    buttonIcon,
    modalHeader,
    dataKey,
    valueKey
  } = ModalLayouts[modalType];

  const items: [] = data[dataKey];
  return (
    <Modal
      trigger={
        <Button color={"teal"} className="modal-button" disabled={ items.length === 0 }>
          <Icon name={buttonIcon} />
          {buttonText} {data[dataKey].length}
        </Button>
      }
      basic
      className="researcher-modal"
    >
      <Modal.Header
        icon="archive"
        content={modalHeader}
        className="text-center modal-header"
      />
      <Modal.Content>
        <Segment inverted className="modal-items-list text-center">
          <List divided inverted relaxed className="modal-items-list">
            {data[dataKey].map((i: any) => (
              <List.Item style={{ width: "60%", margin: "0 auto" }}>
                <List.Content>
                  <List.Header className="modal-item">
                    {i[valueKey]}
                  </List.Header>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Segment>
      </Modal.Content>
    </Modal>
  );
}

type ResearcherModalProps = {
  modalType: modalType;
  data: any;
};

export default CustomModal;
