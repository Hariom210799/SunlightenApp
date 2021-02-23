import React from "react";
import { Button, Icon, Image, Modal } from "semantic-ui-react";
import DisplayDistrict from "./DisplayDistrict";

const DistrictModal = (props) => {
  const [open, setOpen] = React.useState(props.modal);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Scrolling Content Modal</Button>}
    >
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        <Image size="medium" src="/images/wireframe/image.png" wrapped />

        <Modal.Description>
          <DisplayDistrict data={props.districtData} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DistrictModal;
