import { Line } from 'react-chartjs-2';
import '../../lib/chartjs';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      grid: {
        color: '#f3f4f6',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [4000, 3000, 5000, 4500, 6000, 5500],
      borderColor: '#4F46E5',
      tension: 0.4,
      fill: false,
      pointBackgroundColor: '#4F46E5',
    },
  ],
};

export function BalanceHistory() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Balance History</h2>
      <div style={{ height: '300px' }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}