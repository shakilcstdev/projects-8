import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0EA106', '#176AE5'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Custom tooltip for mobile-friendly display
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-md shadow-md">
        <p className="font-semibold text-gray-800">{label}</p>
        <p className="text-[#0EA106]">
          Fee: <span className="font-bold">{payload[0].value} Taka</span>
        </p>
      </div>
    );
  }
  return null;
};

const BookingChart = ({ bookings }) => {
  // Transform the bookings data for the chart
  const chartData = bookings.map(booking => ({
    name: booking.name.split(' ')[0], // Use first name for readability
    fee: booking.consultation_fee,
    type: booking.type
  }));

  return (
    <div className="w-full mb-8 md:mb-12 border border-gray-200 p-3 md:p-4 rounded-xl bg-white shadow-sm">
      <h2 className="text-lg md:text-xl font-semibold text-center mb-2 md:mb-4">Appointment Fees</h2>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[300px] md:min-w-full" style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="fee" 
                name="Consultation Fee" 
                fill="#8884d8" 
                shape={<TriangleBar />} 
                label={{ position: 'top', fontSize: 10, display: 'none' }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BookingChart; 