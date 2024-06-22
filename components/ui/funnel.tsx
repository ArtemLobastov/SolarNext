'use client';
import { ResponsiveFunnel } from '@nivo/funnel';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const MyResponsiveFunnel = (props: any) => {
  return (
    <ResponsiveFunnel
      data={props.data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      colors={{ scheme: 'greens' }}
      theme={{
        background: '#f1f1f1',
        tooltip: {
          chip: {
            borderRadius: '9999px',
          },
          container: {
            background: '#f0f0f0',
            color: '#272727',
            fontSize: 12,
          },
        },
        grid: {
          line: {
            stroke: '#181818',
          },
        },
      }}
      borderWidth={2}
      borderColor="#757575"
      borderOpacity={1}
      labelColor={'black'}
      beforeSeparatorLength={5}
      beforeSeparatorOffset={20}
      afterSeparatorLength={5}
      afterSeparatorOffset={20}
      currentPartSizeExtension={10}
      currentBorderWidth={40}
      motionConfig="wobbly"
      layers={['separators', 'parts', 'labels', 'annotations']}
    />
  );
};

export default function FunnelCard() {
  const data = [
    {
      id: 'step_lead',
      value: 200,
      label: 'Lead',
    },
    {
      id: 'step_meating',
      value: 150,
      label: 'Meating',
    },
    {
      id: 'step_contract',
      value: 100,
      label: 'Contract',
    },
    {
      id: 'step_deposit',
      value: 50,
      label: 'Deposit collected',
    },
  ];

  return (
    <Card
      className="
     w-full h-full flex flex-col items-start justify-normal"
    >
      <CardHeader>
        <CardTitle>Conversion Funnel</CardTitle>
        <CardDescription>Lead to Deposit for last 3 months</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full grow ">
        <MyResponsiveFunnel data={data} className="" />
      </CardContent>
    </Card>
  );
}
