import * as React from 'react';
import { Calendar } from "@/ui/calendar"


function Calanders() {
  const [date, setDate] = React.useState(new Date())
  return (
    <div className='bg-white rounded-lg'>
        <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
    </div>
  )
}

export default Calanders;