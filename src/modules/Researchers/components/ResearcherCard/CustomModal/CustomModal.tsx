import React from "react";
import Content from "./CustomModalContent";
import { Button, Icon, Modal } from "semantic-ui-react";
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
        <Button
          color={"teal"}
          className="modal-button"
          disabled={items.length === 0}
        >
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
      <Content items={items} valueKey={valueKey} />
    </Modal>
  );
}

type ResearcherModalProps = {
  modalType: modalType;
  data: any;
};

export default CustomModal;
