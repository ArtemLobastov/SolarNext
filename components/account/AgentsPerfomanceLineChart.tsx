'use client';

import * as React from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'An interactive line chart';

const chartData = [
  { date: '2024-04-01', brendan: 3, christabel: 2 },
  { date: '2024-04-02', brendan: 1, christabel: 2 },
  { date: '2024-04-03', brendan: 2, christabel: 3 },
  { date: '2024-04-04', brendan: 4, christabel: 1 },
  { date: '2024-04-05', brendan: 5, christabel: 2 },
  { date: '2024-04-06', brendan: 3, christabel: 4 },
  { date: '2024-04-07', brendan: 2, christabel: 1 },
  { date: '2024-04-08', brendan: 4, christabel: 3 },
  { date: '2024-04-09', brendan: 1, christabel: 2 },
  { date: '2024-04-10', brendan: 3, christabel: 1 },
  { date: '2024-04-11', brendan: 5, christabel: 3 },
  { date: '2024-04-12', brendan: 2, christabel: 4 },
  { date: '2024-04-13', brendan: 4, christabel: 2 },
  { date: '2024-04-14', brendan: 1, christabel: 3 },
  { date: '2024-04-15', brendan: 3, christabel: 1 },
  { date: '2024-04-16', brendan: 2, christabel: 2 },
  { date: '2024-04-17', brendan: 5, christabel: 4 },
  { date: '2024-04-18', brendan: 4, christabel: 3 },
  { date: '2024-04-19', brendan: 2, christabel: 1 },
  { date: '2024-04-20', brendan: 1, christabel: 2 },
  { date: '2024-04-21', brendan: 3, christabel: 4 },
  { date: '2024-04-22', brendan: 4, christabel: 1 },
  { date: '2024-04-23', brendan: 2, christabel: 3 },
  { date: '2024-04-24', brendan: 5, christabel: 2 },
  { date: '2024-04-25', brendan: 3, christabel: 4 },
  { date: '2024-04-26', brendan: 1, christabel: 2 },
  { date: '2024-04-27', brendan: 4, christabel: 5 },
  { date: '2024-04-28', brendan: 2, christabel: 1 },
  { date: '2024-04-29', brendan: 5, christabel: 3 },
  { date: '2024-04-30', brendan: 3, christabel: 4 },
  { date: '2024-05-01', brendan: 2, christabel: 2 },
  { date: '2024-05-02', brendan: 4, christabel: 3 },
  { date: '2024-05-03', brendan: 3, christabel: 1 },
  { date: '2024-05-04', brendan: 5, christabel: 4 },
  { date: '2024-05-05', brendan: 4, christabel: 2 },
  { date: '2024-05-06', brendan: 5, christabel: 5 },
  { date: '2024-05-07', brendan: 3, christabel: 3 },
  { date: '2024-05-08', brendan: 2, christabel: 1 },
  { date: '2024-05-09', brendan: 4, christabel: 2 },
  { date: '2024-05-10', brendan: 3, christabel: 4 },
  { date: '2024-05-11', brendan: 5, christabel: 2 },
  { date: '2024-05-12', brendan: 2, christabel: 3 },
  { date: '2024-05-13', brendan: 1, christabel: 1 },
  { date: '2024-05-14', brendan: 4, christabel: 5 },
  { date: '2024-05-15', brendan: 3, christabel: 2 },
  { date: '2024-05-16', brendan: 5, christabel: 4 },
  { date: '2024-05-17', brendan: 4, christabel: 3 },
  { date: '2024-05-18', brendan: 2, christabel: 5 },
  { date: '2024-05-19', brendan: 3, christabel: 1 },
  { date: '2024-05-20', brendan: 1, christabel: 2 },
  { date: '2024-05-21', brendan: 2, christabel: 3 },
  { date: '2024-05-22', brendan: 1, christabel: 1 },
  { date: '2024-05-23', brendan: 3, christabel: 4 },
  { date: '2024-05-24', brendan: 4, christabel: 2 },
  { date: '2024-05-25', brendan: 2, christabel: 3 },
  { date: '2024-05-26', brendan: 3, christabel: 1 },
  { date: '2024-05-27', brendan: 5, christabel: 4 },
  { date: '2024-05-28', brendan: 2, christabel: 2 },
  { date: '2024-05-29', brendan: 1, christabel: 3 },
  { date: '2024-05-30', brendan: 4, christabel: 1 },
  { date: '2024-05-31', brendan: 3, christabel: 2 },
  { date: '2024-06-01', brendan: 2, christabel: 4 },
  { date: '2024-06-02', brendan: 5, christabel: 3 },
  { date: '2024-06-03', brendan: 1, christabel: 2 },
  { date: '2024-06-04', brendan: 4, christabel: 5 },
  { date: '2024-06-05', brendan: 2, christabel: 1 },
  { date: '2024-06-06', brendan: 3, christabel: 3 },
  { date: '2024-06-07', brendan: 5, christabel: 2 },
  { date: '2024-06-08', brendan: 4, christabel: 4 },
  { date: '2024-06-09', brendan: 3, christabel: 5 },
  { date: '2024-06-10', brendan: 2, christabel: 1 },
  { date: '2024-06-11', brendan: 1, christabel: 2 },
  { date: '2024-06-12', brendan: 5, christabel: 3 },
  { date: '2024-06-13', brendan: 2, christabel: 4 },
  { date: '2024-06-14', brendan: 4, christabel: 1 },
  { date: '2024-06-15', brendan: 3, christabel: 5 },
  { date: '2024-06-16', brendan: 5, christabel: 2 },
  { date: '2024-06-17', brendan: 4, christabel: 3 },
  { date: '2024-06-18', brendan: 1, christabel: 4 },
  { date: '2024-06-19', brendan: 3, christabel: 2 },
  { date: '2024-06-20', brendan: 5, christabel: 1 },
  { date: '2024-06-21', brendan: 2, christabel: 3 },
  { date: '2024-06-22', brendan: 4, christabel: 5 },
  { date: '2024-06-23', brendan: 3, christabel: 2 },
  { date: '2024-06-24', brendan: 1, christabel: 4 },
  { date: '2024-06-25', brendan: 2, christabel: 1 },
  { date: '2024-06-26', brendan: 5, christabel: 3 },
  { date: '2024-06-27', brendan: 4, christabel: 5 },
  { date: '2024-06-28', brendan: 3, christabel: 2 },
  { date: '2024-06-29', brendan: 1, christabel: 3 },
  { date: '2024-06-30', brendan: 5, christabel: 4 },
];

const chartConfig = {
  views: {
    label: 'Sales done',
  },
  brendan: {
    label: 'Brendan',
    color: 'hsl(var(--chart-1))',
  },
  christabel: {
    label: 'Christabel',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function AgentsPerfomanceLineChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('brendan');

  const total = React.useMemo(
    () => ({
      brendan: chartData.reduce((acc, curr) => acc + curr.brendan, 0),
      christabel: chartData.reduce((acc, curr) => acc + curr.christabel, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Agents perfomance - Interactive</CardTitle>
          <CardDescription>
            Showing total sales for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {['brendan', 'christabel'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
