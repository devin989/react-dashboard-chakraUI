import { useQuery } from "@tanstack/react-query";
// Chakra imports
import { Box, Center, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";

// Custom components
import Banner from "components/molecules/dashboard/Banner";

import HighestPriceBarChart from "components/molecules/dashboard/HighestPriceBarChart";
import DonutCard from "components/molecules/dashboard/DonutCard";
import WeeklyRevenue from "components/molecules/dashboard/WeeklyRevenue";

import MiniStatistics from "components/molecules/card/MiniStatistics";
import LineChart from "components/molecules/charts/LineChart";
import Card from "components/molecules/card/Card";

import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import { useState } from "react";

export default function Dashboard() {
  const [highestPrice, setHighestPrice] = useState<number[]>([]);
  const [lowestPrice, setLowestPrice] = useState<number[]>([]);

  const openClose = () => {
    return fetch(
      "https://api.polygon.io/v1/open-close/AAPL/2023-01-09?adjusted=true",
      {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => err.json());
  };
  const groupedDaily = () => {
    return fetch(
      "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true",
      {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      }
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

      setHighestPrice(highestPrices);
      setLowestPrice(lowestPrices);

      return slicedData;
    },
  });
  const HighestPricebarChartDataHandler = (highestPrice: any) => {
    const newChartData: ChartData[] = [{ data: [] }];
    newChartData[0].data = highestPrice;
    console.log(newChartData);
    return newChartData;
  };

  const stackedBarChartDataHandler = (highestPrice: any, lowestPrice: any) => {
    const newStackedBarChartData: ChartData[] = [{ data: [] }, { data: [] }];
    newStackedBarChartData[0].data = highestPrice;
    newStackedBarChartData[1].data = lowestPrice;

    return newStackedBarChartData;
  };

  const donutChartDataHandler = (openCloseData: {
    open: any;
    low: any;
    high: any;
  }) => {
    const newDonutChartData = [];
    newDonutChartData.push(openCloseData.open);
    newDonutChartData.push(openCloseData.low);
    newDonutChartData.push(openCloseData.high);
    return newDonutChartData;
  };

  if (isLoading || groupedDailyData.isLoading)
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <Center h="100vh">
        <Text fontWeight="bold" fontSize="xl">
          Loading !!!
        </Text>
      </Center>
    );

  if (error instanceof Error || groupedDailyData.error instanceof Error)
    return (
      console.log(error),
      (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <Center h="100vh">
          <Text fontWeight="bold" fontSize="xl">
            An error has occurred
          </Text>
        </Center>
      )
    );

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
          growth="+23%"
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
          growth="+23%"
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
          <WeeklyRevenue
            barChartData={stackedBarChartDataHandler(highestPrice, lowestPrice)}
          />
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card px="0px" mb="20px" h="100%">
            <DonutCard donutChartData={donutChartDataHandler(openCloseData)} />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}
