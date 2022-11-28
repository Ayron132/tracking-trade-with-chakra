import React, { useState } from 'react'
import { ApexOptions } from "apexcharts";

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { Flex } from '@chakra-ui/react';

type Props = {
  data: {
    labels: string[];
    series: Array<{
      name: string;
      data: number[];
    }>;
    subtitle: string;
    title: string;
  }
}

const Price = ({ data }: Props) => {

  const series = [{
    name: data.series[0].name,
    type: 'column',
    data: data.series[0].data
  },
  {
    name: data.series[1].name,
    type: 'line',
    data: data.series[1].data
  },
  {
    name: data.series[2].name,
    type: 'line',
    data: data.series[2].data
  },
  {
    name: data.series[3].name,
    type: 'line',
    data: data.series[3].data
  },
  {
    name: data.series[4].name,
    type: 'line',
    data: data.series[4].data
  }]

  const options: ApexOptions = {
    chart: {
      height: "100%",
      zoom: {
        enabled: false
      },
      toolbar: {
        show: true

      }
    },
    title: {
      text: data.title,
      offsetX: 40,
      align: "left",
      style: {
        fontSize: "16px",
        color: "#4f565c "
      }
    },
    subtitle: {
      text: data.subtitle,
      offsetY: 20,
      offsetX: 40,
      align: "left",
      style: {
        fontSize: "12px",
        color: "#4f565c"
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (legendName: number, opts: any) {
        if (opts.seriesIndex === 0) {
          return legendName > 1 ? legendName + '%' : "";
        }
        if (opts.seriesIndex !== 1) {
          return legendName.toLocaleString();
        }
        return "";
      },
      offsetY: -8,
      style: {
        fontSize: '10px',
        colors: ["#808080"]
      },
      background: {
        enabled: false,
      }
    },
    stroke: {
      width: [0, 2, 2, 2, 2],
      curve: 'straight',
      dashArray: [0, 5, 0, 0, 0]
    },
    markers: {
      size: 4,
      hover: {
        size: 5
      }
    },
    legend: {
      position: 'left',
      fontSize: '10px',
      offsetY: 20,
      markers: {
        width: 10,
        height: 10
      }
    },
    grid: {
      borderColor: "#f7f7f7"
    },
    colors: ["#335898", "#75788d", "#7fa8e9", "#2a73e8", "#f1b44b"],
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },

    labels: data.labels,
    xaxis: {
      tickPlacement: 'on',
    },
    yaxis: [
      {
        min: 0,
        max: 100,

        labels: {
          show: false
        }
      },
      {
        min: 0,
        max: 6000,

        labels: {
          show: false
        }
      },
      {
        min: 0,
        max: 6000,
        opposite: true,
        labels: {
          show: false
        }
      },
      {
        min: 0,
        max: 6000,
        opposite: true,
        labels: {
          show: false
        }
      },
      {
        min: 0,
        max: 6000,
        opposite: true,
        labels: {
          show: false
        }
      }
    ],
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
        <Chart options={options} series={series} width={1000} height={250} />
      </Flex>
    </Flex>
  )
}

export default Price