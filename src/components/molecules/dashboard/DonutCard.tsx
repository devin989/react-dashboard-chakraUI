// Chakra imports
import { Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/molecules/card/Card";
import DonutChart from "components/molecules/charts/DonutChart";
import { pieChartOptions } from "variables/charts";

export default function Conversion(props: { donutChartData: any }) {
  const { donutChartData } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card p="12px" alignItems="center" flexDirection="column" w="100%" h="100%">
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text
          color={textColor}
          fontSize="md"
          fontWeight="600"
          mt="4px"
          mb="10px"
        >
          Highest Price + Lowest Price + Open Price
        </Text>
      </Flex>

      <DonutChart chartData={donutChartData} chartOptions={pieChartOptions} />
    </Card>
  );
}
