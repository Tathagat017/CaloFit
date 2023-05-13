import React from "react";
import DashboardPage from "./DashboardPage";
import DairyBox from "../Components/Modal_Components/DairyBox";
import CalendarBox from "../Components/Modal_Components/Calendar";
import { Box, Grid } from "@chakra-ui/react";
import NutritionChart from "./../Components/DashboardPage_Components/NutritionChart";
import DonutChart from "./../Components/DashboardPage_Components/DonutChart";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import DairyShow from "../Components/DashboardPage_Components/DairyToShow";
const DairyPage = () => {
  const donut = [
    {
      name: "kcal",
      color: "#05103b",
      value: 143,
    },
    {
      name: "carb",
      color: "#2facff",
      value: 65,
    },
    {
      name: "protein",
      color: "#ffcf04",
      value: 34,
    },
    {
      name: "vitA",
      color: "#ff8900",
      value: 87,
    },
    {
      name: "vitD",
      color: "#ff3838",
      value: 21,
    },
    {
      name: "vitC",
      color: "rgb(225, 93, 170)",
      value: 84,
    },
    {
      name: "vitE",
      color: "rgb(216, 132, 48)",
      value: 87,
    },
    {
      name: "mineral",
      color: "rgb(48, 129, 216)",
      value: 8,
    },
    {
      name: "fat",
      color: "rgb(48, 216, 160)",
      value: 8,
    },
    {
      name: "potassium",
      color: "rgb(112, 236, 29)",
      value: 8,
    },
  ];

  const food_value_dummy = {
    _id: "6453d2d9f509f48fa36d55ff",
    name: "Apple",
    kcal: 52,
    carb: 14,
    protein: 0.3,
    vitA: 1,
    vitD: 0,
    vitC: 7,
    vitE: 0.2,
    mineral: 0.1,
    fat: 0.2,
    potassium: 107,
  };
  return (
    <DashboardPage>
      <Grid
        templateColumns={{ base: "1fr", md: "2fr 1fr", lg: "3fr 1fr" }}
        gap={4}
      >
        <DairyBox />
        <Box boxShadow="base" p="6" rounded="md" bg="white">
          <CalendarBox />
        </Box>
      </Grid>
      <Box>
        {/* <Wrap spacing="10px" justify="center">
          <WrapItem>
            <DonutChart data={donut} />
          </WrapItem>
          <WrapItem>
            <DonutChart data={donut} />
          </WrapItem>
          <WrapItem>
            <DonutChart data={donut} />
          </WrapItem>
        </Wrap> */}
      </Box>
      <DairyShow/>
    </DashboardPage>
  );
};

export default DairyPage;
