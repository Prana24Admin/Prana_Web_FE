import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Slider = ({ isOpen, onClose, btnRef, drawerBody, header, css }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size={"sm"}
    >
      <DrawerOverlay />
      <DrawerContent {...css}>
        <DrawerCloseButton />
        <DrawerHeader
          borderBottom={"1px"}
          borderColor={"var(--cloudGray)"}
          backgroundColor={"var(--powderWhite)"}
        >
          {header}
        </DrawerHeader>

        <DrawerBody backgroundColor={"var(--powderWhite)"}>
          {drawerBody}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Slider;
