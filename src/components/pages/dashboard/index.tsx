import { useQuery } from "@tanstack/react-query";
// Chakra imports
import { Box, Flex, Grid, SimpleGrid } from "@chakra-ui/react";

// Custom components
import Banner from "components/molecules/dashboard/Banner";

import HighestPriceBarChart from "components/molecules/dashboard/HighestPriceBarChart";
import DonutCard from "components/molecules/dashboard/DonutCard";
import WeeklyRevenue from "components/molecules/dashboard/WeeklyRevenue";

import MiniStatistics from "components/molecules/card/MiniStatistics";
import LineChart from "components/molecules/charts/LineChart";
import Card from "components/molecules/card/Card";

import {
  barChartData,
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import { useState } from "react";

export default function UserReports() {
  const [highestPrice, setHighestPrice] = useState<number[]>([]);
  const [lowestPrice, setLowestPrice] = useState([]);
  const [openPrice, setOpenPrice] = useState([]);

  const openClose = () => {
    return fetch(
      "https://api.polygon.io/v1/open-close/AAPL/2023-01-09?adjusted=true&apiKey=NlJrZu6Xpj1nY7rUrMC5CpUVwvRtve5q"
    ).then((res) => res.json());
  };
  const groupedDaily = () => {
    return fetch(
      "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=NlJrZu6Xpj1nY7rUrMC5CpUVwvRtve5q"
    ).then((res) => res.json());
  };

  const {
    isLoading,
    error,
    data: openCloseData,
  } = useQuery({
    queryKey: ["openClose"],
    queryFn: openClose,
  });
  const groupedDailyData = useQuery({
    queryKey: ["groupedDaily"],
    queryFn: async () => {
      const data = await groupedDaily();
      const slicedData = data.results.slice(0, 7);
      const highestPrices = slicedData.map((element: { h: any }) => element.h);
      const lowestPrices = slicedData.map((element: { l: any }) => element.l);
      const openPrices = slicedData.map((element: { o: any }) => element.o);
      setHighestPrice(highestPrices);
      setLowestPrice(lowestPrices);
      setOpenPrice(openPrices);

      return slicedData;
    },
  });
  const HighestPricebarChartDataHandler = (highestPrice: any) => {
    const newChartData = [...barChartData];
    newChartData[0].data.push(...highestPrice);
    return newChartData;
  };

  if (isLoading) return "Loading...";

  if (error instanceof Error) return "An error has occurred: " + error.message;

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Banner />
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card px="0px" mb="20px">
            <HighestPriceBarChart
              barChartData={HighestPricebarChartDataHandler(highestPrice)}
            />
          </Card>
        </Flex>
      </Grid>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="20px" mb="20px">
        <MiniStatistics
          endContent={
            <LineChart
              chartData={lineChartDataTotalSpent}
              chartOptions={lineChartOptionsTotalSpent}
            />
          }
          name="High"
          value={openCloseData.high}
        />
        <MiniStatistics
          endContent={
            <LineChart
              chartData={lineChartDataTotalSpent}
              chartOptions={lineChartOptionsTotalSpent}
            />
          }
          name="Low"
          value={openCloseData.low}
        />
        <MiniStatistics
          endContent={
            <LineChart
              chartData={lineChartDataTotalSpent}
              chartOptions={lineChartOptionsTotalSpent}
            />
          }
          growth="+23%"
          name="Open"
          value={openCloseData.open}
        />
      </SimpleGrid>
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "3fr 2fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <WeeklyRevenue />
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card px="0px" mb="20px" h="100%">
            <DonutCard growth="+20%" />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}
