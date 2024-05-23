import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';


function Piechart() {
    const data = [
        { label: 'Single', value: 400 },
        { label: 'Double', value: 300 },
        { label: 'Delux', value: 300 },
        { label: 'Suite', value: 200 },
      ];
  return (
    <>
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 0,
            innerRadius: 45,
            outerRadius: 92,
            data,
          },
        ]}
        margin={{ right:  3}}
        width={200}
        height={200}
        legend={{ hidden: true }}
      />
    </Stack>
    </>
  )
}

export default Piechart