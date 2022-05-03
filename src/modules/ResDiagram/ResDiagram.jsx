import React from "react";
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from "recharts";
import s from "./ResDiagram.module.css";


function ResDiagram({results: {correct, incorrect}}) {

    const data = [
        {name: "Correct", value: correct},
        {name: "Incorrect", value: incorrect},
    ];
    const COLORS = ["#FF6B09", "#D7D7D7"];

    const Style = {
        width: 110,
        height: 50,
        top: 50,
        right: -15,
        lineHeight: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index,}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <g>
                <text x={x} y={y} fill="bleak" textAnchor={x > cy ? "start" : "end"} dominantBaseline="central"
                >
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            </g>
        );
    };

    return (
        <div className={s.containerPie}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        labelLine={false}
                        dataKey="value"
                        data={data}
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Legend
                        iconSize={20}
                        layout="vertical"
                        verticalAlign="middle"
                        wrapperStyle={Style}
                    />
                </PieChart>

            </ResponsiveContainer>
        </div>
    );
}

export default ResDiagram;
