'use client';
import { ResponsivePie } from '@nivo/pie';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const MyResponsivePie = (props: any) => {
  return (
    <ResponsivePie
      data={props.data}
      margin={{ top: 20, right: 50, bottom: 30, left: 50 }}
      innerRadius={0.5}
      sortByValue={true}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: 'category10' }}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsOffset={-20}
      arcLinkLabelsDiagonalLength={30}
      arcLinkLabelsStraightLength={8}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsTextOffset={3}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 0,
          itemWidth: 50,
          itemHeight: 20,
          itemsSpacing: 0,
          symbolSize: 20,
          itemDirection: 'top-to-bottom',
        },
      ]}
    />
  );
};

export default function InstallersPieChartVidget() {
  const data = [
    {
      id: 'Artem',
      label: 'Artem',
      value: 25,
    },
    {
      id: 'Wayne',
      label: 'Wayne',
      value: 18,
    },
    {
      id: 'Alex',
      label: 'Alex',
      value: 10,
    },
    {
      id: 'Manwell',
      label: 'Manwell',
      value: 5,
    },
    {
      id: 'Savio',
      label: 'Savio',
      value: 3,
    },
  ];
  return (
    <Card
      className="
     w-full h-full flex flex-col items-start justify-normal"
    >
      <CardHeader>
        <CardTitle>Installers</CardTitle>
        <CardDescription>Monthly perfomance</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full grow ">
        <MyResponsivePie data={data} />
      </CardContent>
    </Card>
  );
}
