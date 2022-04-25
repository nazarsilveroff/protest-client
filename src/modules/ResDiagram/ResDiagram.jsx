import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import s from "./ResDiagram.module.css";

const data = [
  { name: "Correct", value: 80 },
  { name: "Incorrect", value: 20 },
  // { name: "Incorrect2", value: 3 },
];
const COLORS = ["#FF6B09", "#D7D7D7"];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    // innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    // percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        // innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 20}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        // stroke={fill}
        stroke="#000000"
        fill="none"
      />
      <rect
        width="12"
        height="12"
        x={ex + (cos >= 0 ? 0.5 : -1) * 22}
        y={ey + (cos >= 1 ? 1 : -1) * 6}
        dy={5}
        stroke={fill}
        fill={fill}
      />
      <circle cx={sx} cy={sy} r={2} fill="#ffffff" stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 32}
        y={ey}
        dy={4}
        textAnchor={textAnchor}
        fill="#000000"
      >
        {`${value}% ${payload.name}`}
      </text>
    </g>
  );
};

function ResDiagram(props) {
  return (
    <div className={s.containerPie}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            // fill="#FF751D"
            label={renderActiveShape}
            // outerRadius={50}
            // activeShape
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ResDiagram;
