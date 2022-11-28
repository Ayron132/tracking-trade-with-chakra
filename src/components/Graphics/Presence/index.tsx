import React, { useState } from 'react'

import { ApexOptions } from "apexcharts";

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { Flex } from '@chakra-ui/react';

type Props = {}

const Presence = (props: Props) => {
  const series = [{
    name: 'Share Custumer',
    data: [25, 56, 44, 63, 63, 44, 13, 0, 25, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
  }, {
    name: 'Share Hour',
    data: [100, 100, 100, 100, 100, 100, 100, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
  }]
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: "Presence",
      offsetX: 40,
      align: "left",
      style: {
        fontSize: "16px",
        color: "#4f565c "
      }
    },
    subtitle: {
      text: "Spot price",
      offsetY: 20,
      offsetX: 40,
      align: "left",
      style: {
        fontSize: "12px",
        color: "#4f565c"
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top',
          orientation: 'vertical',
          hideOverflowingLabels: true,
        },
      }
    },
    dataLabels: {
      enabled: true,

      formatter: function (value: number) {
        return value + " %";
      },
      offsetY: 10,
      style: {
        fontSize: '10px',
        colors: ["#808080"]
      },
    },

    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    legend: {
      position: 'left',
      fontSize: '10px',
      offsetY: 20,
      markers: {
        width: 10,
        height: 10,
        radius: 5,
      }
    },
    grid: {
      borderColor: "#f7f7f7"
    },
    colors: ["#387AE7", "#f3be6a"],
    xaxis: {
      categories: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00",
        "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00",
        "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function (y: number) {
          return y + "%";
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return "$ " + val + " thousands"
        }
      }
    }
  }
  return (
    <Flex
      borderRadius="8px"
      padding="1.5rem"
      bg="#ffffff"
      width="100%"
      overflow="auto"
      overflowY="hidden"
    >
      <Flex
        width="100%"
        overflow="auto"
        overflowY="hidden"
        sx={{
          "::-webkit-scrollbar": {
            height: "5px"
          },
          "::-webkit-scrollbar-thumb": {
            bg: "#76798E",
            borderRadius: "20px"
          }
        }}
      >
        <Chart options={options} series={series} type="bar" width={1000} height={250} />
      </Flex>
    </Flex>
  )
}

export default Presence;