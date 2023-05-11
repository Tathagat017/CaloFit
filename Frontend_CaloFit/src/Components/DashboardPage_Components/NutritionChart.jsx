import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Flex, Text } from "@chakra-ui/react";
Chart.register(ArcElement, Tooltip, Legend);

const NutritionChart = ({ datas, bgc, sz, size, cal }) => {
  const data = {
    labels: ["Protien", "Kcal", "Vitamin A", "Vitamin C"],
    datasets: [
      {
        label: "Nutritional Information",
        data: [2, 3, 4, 3],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#636dff", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 15,
          },
        },
      },
    },
  };
  return (
    <Box w={sz} h={sz} position="relative">
      <Doughnut data={data} options={options} />
      <Flex
        position="absolute"
        top="5px"
        zIndex="1"
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        fontSize="12px"
      >
        <Text>{cal}</Text>
        <Text>kcal</Text>
      </Flex>
    </Box>
  );
};

export default NutritionChart;
