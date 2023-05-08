import React from "react";
import DashboardPage from "./DashboardPage";
import DairyBox from "../Components/UmaSahni/DairyBox";
import CalendarBox from "../Components/UmaSahni/Calendar";
import { Box, Grid } from "@chakra-ui/react";

const DairyPage = () => {
  return (
    <DashboardPage>
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr", lg:"3fr 1fr" }} gap={4}>
        <DairyBox />
      <Box boxShadow="base" p="6" rounded="md" bg="white"  >
        <CalendarBox />
        </Box>
      </Grid>
    </DashboardPage>
  );
};

export default DairyPage;
