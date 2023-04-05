import { Button } from "@chakra-ui/react";

export default function SidebarDocs() {
  return (
    <Button
      variant={"outline"}
      borderColor={"black"}
      _hover={{ bg: "navy.800.200" }}
      mb={{ sm: "16px", xl: "24px" }}
      color={"black"}
      fontWeight="regular"
      fontSize="sm"
      minW="185px"
      mx="auto"
    >
      Dark Mode
    </Button>
  );
}
