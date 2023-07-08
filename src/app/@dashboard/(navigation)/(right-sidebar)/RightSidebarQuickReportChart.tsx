import { useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  RadarController,
  Filler,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useTheme } from '@/lib/theme/ThemeCtx';

interface IProps {
  chartData: {
    labels: string[];
    data: number[];
    maxCount: number;
  };
  favoriteSubject: string;
}

ChartJS.register(
  Filler,
  RadialLinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  RadarController,
);

export default function RightSidebarQuickReportChart({
  chartData,
  favoriteSubject,
}: IProps) {
  // Theme for dark mode
  const { theme } = useTheme();

  // Colors
  const colorGradients: { [key: string]: string } = {
    MATHEMATICS: '#2563EB',
    ENGLISH: '#7C3AED',
    SCIENCE: '#059669',
    SOCIAL_STUDIES: '#F59E0B',
    COMPUTER_SCIENCE: '#FB923C',
    PHYSICAL_EDUCATION: '#EF4444',
    ART: '#14B8A6',
    MUSIC: '#6366F1',
    SOCIAL_EMOTIONAL_LEARNING: '#D946EF',
    HEALTH: '#06B6D4',
    DEFAULT: '#374151',
  };

  // Define colors based on favorite subject or use default
  const subjectColor =
    colorGradients[favoriteSubject.toUpperCase().split(' ').join('_')] ||
    colorGradients['DEFAULT'];

  const backgroundColor = `${subjectColor}30`;
  const borderColor = subjectColor;
  const pointBackgroundColor = subjectColor;
  const pointHoverBorderColor = subjectColor;
  const textColor = theme === 'dark' ? '#FFFFFF' : '#000000';

  // Chart Data
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Lessons',
        data: chartData.data,
        fill: true,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        pointBackgroundColor: pointBackgroundColor,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: pointHoverBorderColor,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          color: theme === 'dark' ? '#FFFFFF20' : '#00000020',
        },
        pointLabels: {
          color: textColor, // controls the labels like "Math", "Art" etc
        },
        grid: {
          color: theme === 'dark' ? '#FFFFFF20' : '#00000020',
        },
        beginAtZero: true,
        ticks: {
          color: textColor,
          backdropColor: 'transparent',
          callback: function (value: any) {
            if (Number.isInteger(value)) {
              return value;
            }
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: textColor,
          fontSize: 18,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  };

  return (
    <>
      {/* Chart */}
      <Chart type="radar" options={options} data={data} />
    </>
  );
}
