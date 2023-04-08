import { Button, useColorMode } from "@chakra-ui/react";

export default function SidebarDocs() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      variant={"outline"}
      borderColor={colorMode === "light" ? "black" : "white"}
      _hover={{ bg: "navy.800.200" }}
      mb={{ sm: "16px", xl: "24px" }}
      color={colorMode === "light" ? "black" : "white"}
      fontWeight="regular"
      fontSize="sm"
      minW="185px"
      mx="auto"
      onClick={toggleColorMode}
    >
      Dark Mode
    </Button>
  );
}
