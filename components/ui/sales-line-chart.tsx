'use client';
import { ResponsiveLine } from '@nivo/line';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
const MyResponsiveLine = (props: any) => (
  <ResponsiveLine
    animate
    axisBottom={{
      format: '%b ',

      tickValues: 'every 1 month',
    }}
    axisLeft={{
      tickSize: 7,
      tickPadding: 6,
      legend: 'Sales',
      legendOffset: -45,

      legendPosition: 'middle',
    }}
    curve="monotoneX"
    data={props.data}
    colors={{ scheme: 'category10' }}
    enablePointLabel
    enableTouchCrosshair
    margin={{
      bottom: 30,
      left: 50,
      right: 90,
      top: 20,
    }}
    pointBorderColor={{
      from: 'color',
      modifiers: [['darker', 0.3]],
    }}
    pointBorderWidth={1}
    pointSize={16}
    useMesh
    xFormat="time:%Y-%m"
    xScale={{
      format: '%Y-%m',
      precision: 'month',
      type: 'time',
      useUTC: false,
    }}
    yScale={{
      type: 'linear',
    }}
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default function SalesLineChart() {
  const data = [
    {
      id: 'Brendon',
      data: [
        {
          x: '2024-01',
          y: 7,
        },
        {
          x: '2024-02',
          y: 5,
        },
        {
          x: '2024-03',
          y: 11,
        },
        {
          x: '2024-04',
          y: 9,
        },
        {
          x: '2024-05',
          y: 12,
        },
        {
          x: '2024-06',
          y: 16,
        },
        {
          x: '2024-07',
          y: 13,
        },
        {
          x: '2024-08',
          y: 13,
        },
        {
          x: '2024-09',
          y: 15,
        },
        {
          x: '2024-10',
          y: 20,
        },
        {
          x: '2024-11',
          y: 25,
        },
        {
          x: '2024-12',
          y: 4,
        },
      ],
    },
    {
      id: 'Adrian',
      data: [
        {
          x: '2024-01',
          y: 14,
        },
        {
          x: '2024-02',
          y: 14,
        },
        {
          x: '2024-03',
          y: 15,
        },
        {
          x: '2024-04',
          y: 11,
        },
        {
          x: '2024-05',
          y: 10,
        },
        {
          x: '2024-06',
          y: 12,
        },
        {
          x: '2024-07',
          y: 9,
        },
        {
          x: '2024-08',
          y: 7,
        },
        {
          x: '2024-09',
          y: 10,
        },
        {
          x: '2024-10',
          y: 12,
        },
        {
          x: '2024-11',
          y: 5,
        },
        {
          x: '2024-12',
          y: 12,
        },
      ],
    },
    {
      id: 'Christabel',
      color: 'hsl(199, 70%, 50%)',
      data: [
        {
          x: '2024-01',
          y: 2,
        },
        {
          x: '2024-02',
          y: 5,
        },
        {
          x: '2024-03',
          y: 5,
        },
        {
          x: '2024-04',
          y: 17,
        },
        {
          x: '2024-05',
          y: 3,
        },
        {
          x: '2024-06',
          y: 6,
        },
        {
          x: '2024-07',
          y: 4,
        },
        {
          x: '2024-08',
          y: 14,
        },
        {
          x: '2024-09',
          y: 10,
        },
        {
          x: '2024-10',
          y: 1,
        },
        {
          x: '2024-11',
          y: 15,
        },
        {
          x: '2024-12',
          y: 2,
        },
      ],
    },
  ];
  return (
    <Card
      className="col-span-2
     w-full h-[500px] flex flex-col items-start justify-normal"
    >
      <CardHeader>
        <CardTitle>Sales</CardTitle>
        <CardDescription>Annually analytics</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full grow ">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  );
}
