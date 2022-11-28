import React from 'react'
import { ApexOptions } from "apexcharts";

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { Flex } from '@chakra-ui/react';

type Props = {
  data: {
    labels: string[];
    series: Array<{
      value: number;
      data: number[];
    }>;
    subtitle: string;
    title: string;
  }
}


const Temperature = ({ data }: Props) => {

  const options: ApexOptions = {
    chart: {
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
    }
    ,
    xaxis: {
      position: "top"
    }
    ,
    labels: data.labels,
    dataLabels: {
      enabled: true,
      formatter: function (value: number) {
        return value + "%";
      },
      style: {
        fontSize: '10px',
        colors: ["#808080"]
      },
    },
    colors: ["#387AE7"],
  }

  const series =
    [{
      name: `R$ ${data.series[0].value.toLocaleString()}`,
      data: data.series[0].data
    },
    {
      name: `R$ ${data.series[1].value.toLocaleString()}`,
      data: data.series[1].data
    },
    {
      name: `R$ ${data.series[2].value.toLocaleString()}`,
      data: data.series[2].data
    },
    {
      name: `R$ ${data.series[3].value.toLocaleString()}`,
      data: data.series[3].data
    },
    {
      name: `R$ ${data.series[4].value.toLocaleString()}`,
      data: data.series[4].data
    },
    ]

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
        <Chart options={options} series={series} type="heatmap" width={1000} height={250} />
      </Flex>
    </Flex>
  )
}

export default Temperature