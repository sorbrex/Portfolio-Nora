import { Box } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Localization", "Audiodescription", "SDH Subtitling", "Translation", "Subtitling", "Review"],
  datasets: [
    {
      label: '# of Votes',
      data: [5, 10, 15, 20, 25, 25],
      backgroundColor: [
        '#D93C49',
        '#B1CA7B',
        '#E3AAB3',
        '#E7E7C0',
        '#67BDDA',
        '#CA7DF9',
      ],
      borderColor: 'white',
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: 'white',
      },
      display: true,
      position: 'top' as const,
      align: 'center' as const,
      onClick: () => { },
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false
    }
  },
};


const Chart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxHeight: "300px",
      }}
    >
      <Doughnut data={data} options={options} />
    </Box>
  )

}

export default Chart