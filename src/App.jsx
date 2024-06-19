import { useState } from 'react';
import React from 'react';
import { AgChartsReact } from 'ag-charts-react';


function App() {
  const [ chartOptions, setChartOptions] = useState ({
    height: 1000,
    width: 1000,
    title: {
      text: "Ice cream Sales and Avg Temp"
    },
    subtitle: {
      text: "2022 data"
    },
    legend: {
      position: "right"
    },

    data: [
      { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000},
      { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000},
      { month: "May", avgTemp: 16.2, iceCreamSales: 800000},
      { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000},
      { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000},
      { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000},
    ],
    series: [
      {
        type: "bar",
        xKey: "month",
        yKey: "iceCreamSales",
        yName: "Ice Cream Sales"
      },
      {
        type: "line",
        xKey: "month",
        yKey: "avgTemp",
        yName: "Average Temprature"
      }
    ],
    axes: [
      {
        position: "bottom",
        type: "category"
      },
      {
        position: "left",
        type: "number",
        keys: ['iceCreamSales'],
        label: {
          formatter: (params) => {
            return params.value.toLocaleString();
          }
        }
      },
      {
        position: "right",
        type: "number",
        keys: ['avgTemp'],
        label: {
          formatter: (params) => {
            return params.value + "°C";
          }
        }
      }
    ]

  });

  return (
    <>
       <AgChartsReact options={chartOptions} />
    </>
  )
}

export default App 