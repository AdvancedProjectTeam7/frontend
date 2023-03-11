import "./charts.css";
import { GiProgression, GiProfit } from "react-icons/gi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function Charts(props) {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <h1>Charts</h1>
      <div className="home-container">
        <div className="box">
          <div className="box-icon">
            <GiProgression />
          </div>
          <div className="box-data">
            <span>Incomes</span>
            <h1>+28%</h1>
          </div>
        </div>

        <div className="box">
          <div className="box-icon">
            <HiUsers />
          </div>
          <div className="box-data">
            <span>Outcomes</span>
            <h1>+24</h1>
          </div>
        </div>
        <div className="box">
          <div className="box-icon">
            <GiProfit />
          </div>
          <div className="box-data">
            <span>Profit</span>
            <h1>+56%</h1>
          </div>
        </div>
        <div className="box">
          <div className="box-icon">
            <BsFillCartCheckFill />
          </div>
          <div className="box-data">
            <span>expenses  </span>
            <h1>+23</h1>
          </div>
        </div>
      </div>

      <div className="home-container-2">
        <div className="card">
          <div style={{ width: 250, height: 250 }}>
            <CircularProgressbar
              value={75}
              circleRatio={0.75}
              maxValue={100}
              text={`50%`}
              styles={{
                trail: {
                  transform: "rotate(-135deg)",
                  transformOrigin: "center center",
                  strokeWidth: 3,
                },

                path: {
                  transform: "rotate(-135deg)",
                  transformOrigin: "center center",
                  stroke: "#34ccfc",
                  strokeWidth: 4.5,
                },
              }}
            />

            <h1>Progress</h1>
          </div>
        </div>
        <div className="card">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Charts;
