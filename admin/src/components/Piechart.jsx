import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';


function Piechart() {
    const data = [
        { label: 'Group A', value: 400 },
        { label: 'Group B', value: 300 },
        { label: 'Group C', value: 300 },
        { label: 'Group D', value: 200 },
      ];
  return (
    <>
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 0,
            innerRadius: 100,
            outerRadius: 20,
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