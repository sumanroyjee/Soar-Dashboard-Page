import { Pie } from 'react-chartjs-2';
import '../../lib/chartjs';

const data = {
  labels: ['Entertainment', 'Bills', 'Investment', 'Others'],
  datasets: [
    {
      data: [30, 35, 20, 15],
      backgroundColor: ['#4F46E5', '#818CF8', '#C7D2FE', '#E0E7FF'],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        usePointStyle: true,
        padding: 20,
      },
    },
  },
};

export function ExpenseStatistics() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Expense Statistics</h2>
      <div style={{ height: '300px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}