import React from "react";
import "./charts.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Charts() {
  const data = [
    {
      name: "Jan",
      "Active Sales": 4000,
    },
    {
      name: "Feb",
      "Active Sales": 3000,
    },
    {
      name: "Mar",
      "Active Sales": 2000,
    },
    {
      name: "Apr",
      "Active Sales": 2780,
    },
    {
      name: "May",
      "Active Sales": 1890,
    },
    {
      name: "Jun",
      "Active Sales": 2390,
    },
    {
      name: "Jul",
      "Active Sales": 3490,
    },
    {
      name: "Aug",
      "Active Sales": 3290,
    },
    {
      name: "Sep",
      "Active Sales": 2800,
    },
    {
      name: "Oct",
      "Active Sales": 3800,
    },
    {
      name: "Nov",
      "Active Sales": 2800,
    },
    {
      name: "Dec",
      "Active Sales": 4200,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#000000" />
          <Line type="monotone" dataKey="Active Sales" stroke="#FF0000" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
