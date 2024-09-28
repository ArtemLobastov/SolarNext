'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

export const description = 'A donut chart with text';

const chartData = [
  { installer: 'artem', installations: 200, fill: 'var(--color-artem)' },
  { installer: 'mike', installations: 120, fill: 'var(--color-mike)' },
  { installer: 'idris', installations: 85, fill: 'var(--color-idris)' },
  { installer: 'wayne', installations: 30, fill: 'var(--color-wayne)' },
  { installer: 'other', installations: 10, fill: 'var(--color-other)' },
];

const chartConfig = {
  installations: {
    label: 'Installations',
  },
  artem: {
    label: 'Artem',
    color: 'hsl(var(--chart-1))',
  },
  mike: {
    label: 'Mike',
    color: 'hsl(var(--chart-2))',
  },
  idris: {
    label: 'Idris',
    color: 'hsl(var(--chart-3))',
  },
  wayne: {
    label: 'Wayne',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function InstallationsDonePieChart() {
  const totalInstallations = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.installations, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Installations</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="installations"
              nameKey="installer"
              innerRadius={50}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalInstallations.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          installations
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="installer" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total installations for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
