import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const chartSetting = {
  yAxis: [
    // {
    //   label: 'rainfall (mm)',
    // },
  ],
  width: 900,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const monthlyDataset  = [
  {
    checkIn: 86,
    checkOut: 21,
    month: 'Jan',
  },
  {
    checkIn: 78,
    checkOut: 28,
    month: 'Feb',
  },
  {
    checkIn: 106,
    checkOut: 41,
    month: 'Mar',
  },
  {
    checkIn: 92,
    checkOut: 73,
    month: 'Apr',
  },
  {
    checkIn: 92,
    checkOut: 99,
    month: 'May',
  },
  {
    checkIn: 103,
    checkOut: 144,
    month: 'June',
  },
  {
    checkIn: 105,
    checkOut: 319,
    month: 'July',
  },
  {
    checkIn: 106,
    checkOut: 249,
    month: 'Aug',
  },
  {
    checkIn: 95,
    checkOut: 131,
    month: 'Sept',
  },
  {
    checkIn: 97,
    checkOut: 55,
    month: 'Oct',
  },
  {
    checkIn: 76,
    checkOut: 48,
    month: 'Nov',
  },
  {
    checkIn: 103,
    checkOut: 25,
    month: 'Dec',
  },
];

const weeklyDataset = [
  { checkIn: 15, checkOut: 5, week: 'Week 1' },
  {  checkIn: 10, checkOut: 3, week: 'Week 2' },
  {  checkIn: 14, checkOut: 7, week: 'Week 3' },
  {  checkIn: 20, checkOut: 10, week: 'Week 4' },
];

const dailyDataset = [
  { checkIn: 3, checkOut: 1, day: 'Monday' },
  { checkIn: 4, checkOut: 2, day: 'Tuesday' },
  { checkIn: 5, checkOut: 3, day: 'Wednesday' },
  { checkIn: 6, checkOut: 4, day: 'Thursday' },
  { checkIn: 7, checkOut: 5, day: 'Friday' },
  { checkIn: 8, checkOut: 6, day: 'Saturday' },
  { checkIn: 9, checkOut: 7, day: 'Sunday' },
];

const valueFormatter = (value) => `${value}`;

function Reservation() {
  const [view, setView] = React.useState('daily');
  

  const handleViewChange = (newView) => {
    setView(newView);
  };

  let dataset;
  let dataKey;

  switch (view) {
    case 'daily':
      dataset = dailyDataset;
      dataKey = 'day';
      break;
    case 'weekly':
      dataset = weeklyDataset;
      dataKey = 'week';
      break;
    case 'monthly':
    default:
      dataset = monthlyDataset;
      dataKey = 'month';
      break;
  }
  

  return (
    <>
    <div className='border m-[25px] rounded-md bg-white'>
        <div className='flex justify-between items-center'>
            <h1 className='text-xl font-medium mx-5 my-2'>Reservation Status</h1>
            <div >
                <ul className='flex text-sm font-medium cursor-pointer mx-2 gap-1 border px-3 rounded-full'>
                    <li className={`px-1 py-1 border-b-2 ${view === 'daily' ? 'border-[#4e0b77]' : 'border-none'}`}  onClick={() => handleViewChange('daily')}>Week</li>
                    <li className={`px-1 py-1 border-b-2 ${view === 'weekly' ? 'border-[#4e0b77]' : 'border-none'}`} onClick={() => handleViewChange('weekly')}>Month</li>
                    <li className={`px-1 py-1 border-b-2 ${view === 'monthly' ? 'border-[#4e0b77]' : 'border-none'}`} onClick={() => handleViewChange('monthly')}>Year</li>
                </ul>
            </div>
        </div>

        <div className='w-full'>
        <BarChart
      dataset={dataset}
      sx={{margin:'20px'}}
      xAxis={[{ scaleType: 'band', dataKey: dataKey }]}
      series={[
        { dataKey: 'checkIn', label: 'Check in', valueFormatter },
        { dataKey: 'checkOut', label: 'Check out', valueFormatter },
      ]}
      {...chartSetting}
    />
        </div>
        
    </div>
    </>
  )
}

export default Reservation