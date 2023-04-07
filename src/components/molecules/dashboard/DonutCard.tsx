// Chakra imports
import { Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/molecules/card/Card";
import DonutChart from "components/molecules/charts/DonutChart";
import { pieChartData, pieChartOptions } from "variables/charts";

export default function Conversion(props: {
  [x: string]: any;
  growth?: string | number;
}) {
  const { growth, ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card
      p="20px"
      alignItems="center"
      flexDirection="column"
      w="100%"
      h="100%"
      {...rest}
    >
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          Your Pie Chart
        </Text>
        <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
          {growth}
        </Text>
      </Flex>

      <DonutChart chartData={pieChartData} chartOptions={pieChartOptions} />
    </Card>
  );
}
