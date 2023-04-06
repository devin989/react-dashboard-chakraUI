// Chakra imports
import { Flex } from "@chakra-ui/react";

// Custom components
import { DashboardLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  return (
    <Flex alignItems="center" flexDirection="column">
      <DashboardLogo h="26px" w="175px" my="32px" />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
