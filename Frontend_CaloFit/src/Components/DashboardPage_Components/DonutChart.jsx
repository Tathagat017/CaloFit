import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
const DonutChart = (props) => {
  const cx = 50;
  const cy = 50;
  const strokeWidth = 20;
  const radius = 30;
  const dashArray = 2 * Math.PI * radius;
  const startAngle = -90;
  const donut = [
    {
      name: "Porta",
      color: "#05103b",
      value: 70,
    },
    {
      name: "Curabitur",
      color: "#2facff",
      value: 65,
    },
    {
      name: "Fusce",
      color: "#ffcf04",
      value: 33,
    },
    {
      name: "Morbi",
      color: "#ff8900",
      value: 88,
    },
    {
      name: "Donec",
      color: "#ff3838",
      value: 92,
    },
  ];

  let filled = 0;

  const sum = donut.reduce((sum, item) => {
    return sum + item.value;
  }, 0);

  const ratio = 100 / sum;

  props.data.forEach((obj) => {
    const itemRatio = ratio * obj.value;

    obj.itemRatio = itemRatio;
    obj.angle = (filled * 360) / 100 + startAngle;
    obj.offset = dashArray - (dashArray * itemRatio) / 100;
    obj.filled = filled;

    filled += itemRatio;
  });

  return (
    <DIV>
      <div className="donut-chart">
        <svg width="300px" height="300px" viewBox="0 0 100 100">
          {props.data.map((item, index) => (
            <circle
              key={index}
              cx={cx}
              cy={cy}
              r={radius}
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={item.color}
              strokeDasharray={dashArray}
              strokeDashoffset={item.offset}
              transform={`rotate(${item.angle} ${cx} ${cy})`}
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from={`${startAngle} ${cx} ${cy}`}
                to={`${item.angle} ${cx} ${cy}`}
                dur="1s"
              />

              <title>
                {item.name}: {item.value}
              </title>
            </circle>
          ))}
        </svg>
        <ul className="items-names">
          {props.data.map((item, index) => (
            <li
              key={index++}
              className="item-name"
              style={{
                background: `linear-gradient(90deg, ${item.color} 0, ${item.color} 20px, transparent 20px, transparent 100%)`,
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  $light: #fff;
  $base: #05103b;
  $accent: #ff3838;

  .donut-chart {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      circle {
        transition: stroke-width 0.3s;

        &:hover {
          stroke-width: 22;
        }
      }
    }

    .items-names {
      max-width: 250px;

      display: flex;
      flex-wrap: wrap;

      padding: 0;

      list-style: none;

      .item-name {
        min-width: 70px;

        margin-right: 10px;
        margin-bottom: 5px;

        padding-left: 25px;

        font-size: 18px;
        font-weight: 600;
      }
    }
  }

  //////////////////////////////////
  body {
    display: flex;
    justify-content: center;

    padding-top: 70px;

    font-family: "Montserrat", sans-serif;

    color: $base;
    background: $base;

    .card {
      width: 400px;

      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 20px;

      background: $light;

      h1 {
        margin-top: 10px;
      }
    }
  }

  .fa-instagram {
    position: absolute;
    top: 3%;
    right: 2%;

    color: $light;
    font-size: 38px;

    cursor: pointer;

    transition: all 0.1s;
    &:hover {
      color: $accent;
      font-size: 42px;
    }
  }
`;

export default DonutChart;
