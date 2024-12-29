import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export function WeeklyActivityChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Deposits',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#4F46E5',
      },
      {
        label: 'Withdrawals',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: '#818CF8',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export function ExpenseChart() {
  const data = {
    labels: ['Entertainment', 'Bills', 'Investment', 'Others'],
    datasets: [
      {
        data: [30, 35, 20, 15],
        backgroundColor: ['#4F46E5', '#818CF8', '#C7D2FE', '#E0E7FF'],
      },
    ],
  };

  return <Pie data={data} />;
}

export function BalanceHistoryChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
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
      },
    ],
  };

  return <Line options={options} data={data} />;
}