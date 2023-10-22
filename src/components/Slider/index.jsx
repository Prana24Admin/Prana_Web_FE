import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

const Slider = ({ isOpen, onClose, btnRef, drawerBody, header }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size={"sm"}
    >
      <DrawerOverlay />
      <DrawerContent>
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
