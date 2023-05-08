import "./App.css";
import DonutChart from "./Components/DashboardPage_Components/DonutChart.jsx";
import { NutritionChart } from "./Components/DashboardPage_Components/NutritionChart";

function App() {
  const donut = [
    {
      name: "kcal consumed",
      color: "#05103b",
      value: 70,
    },
    {
      name: "excercise done",
      color: "#2facff",
      value: 65,
    },
    {
      name: "kcal _left",
      color: "#ffcf04",
      value: 33,
    },
    {
      name: "daily goal",
      color: "#ff8900",
      value: 88,
    },
    {
      name: "excercise left",
      color: "#ff3838",
      value: 92,
    },
  ];
  const data = {
    protien: 2,
    kcal: 300,
    vitaminA: 4,
    vitaminC: 3,
  };
  const bgc = ["#ff3838", "#ff8900", "#2facff"];

  return (
    <div className="App">
      <h1>Running Frontend CaloFit App : </h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <NutritionChart
          datas={data}
          bgc={bgc}
          sz={{ base: "100px", md: "100px" }}
          size={"85"}
          cal={data.kcal}
        />
        <NutritionChart
          datas={data}
          bgc={bgc}
          sz={{ base: "100px", md: "100px" }}
          size={"35"}
          cal={data.kcal}
        />
        <NutritionChart
          datas={data}
          bgc={bgc}
          sz={{ base: "100px", md: "100px" }}
          size={"35"}
          cal={data.kcal}
        />
      </div>
      <DonutChart data={donut} />
    </div>
  );
}

export default App;
