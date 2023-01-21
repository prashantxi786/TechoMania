// import "./styles.css";
import { Text } from "@chakra-ui/react";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    estimate: 8000,
    revenue: 8400,
    loss: 8400,
  },
  {
    name: "Tuesday",
    estimate: 3000,
    revenue: 1398,
    loss: 2210,
  },
  {
    name: "Wednesday",
    estimate: 2000,
    revenue: 9800,
    loss: 2290,
  },
  {
    name: "Thusday",
    estimate: 2780,
    revenue: 3908,
    loss: 2000,
  },
  {
    name: "Friday",
    estimate: 1890,
    revenue: 4800,
    loss: 2181,
  },
  {
    name: "Saturday",
    estimate: 2390,
    revenue: 3800,
    loss: 2500,
  },
  {
    name: "Sunday",
    estimate: 3490,
    revenue: 4300,
    loss: 2100,
  },
];

export default function Graph_BarChart() {
  return (
    <>
      <ResponsiveContainer height="100%" width="100%">
        <BarChart
          // width={750}
          // height={300}
          data={data}
          border="2px solid blue"
          margin={{
            top: 5,
            right: 50,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 40, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Bar dataKey="loss" fill="red"  />
          <Bar dataKey="revenue" fill="#8884d8" b/>
          <Bar dataKey="estimate" fill="green" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
