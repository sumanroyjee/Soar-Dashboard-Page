import { Bar } from 'react-chartjs-2';
import '../../lib/chartjs';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
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
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Deposits',
      data: [300, 450, 320, 500, 420, 350, 400],
      backgroundColor: '#4F46E5',
      borderRadius: 4,
    },
    {
      label: 'Withdrawals',
      data: [200, 300, 250, 350, 280, 250, 300],
      backgroundColor: '#818CF8',
      borderRadius: 4,
    },
  ],
};

export function WeeklyActivity() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
      <div style={{ height: '300px' }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}