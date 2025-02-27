import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../../store';
import { ThemeOptions } from '../../types';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
);

function getColor(theme: ThemeOptions): string {
    return theme === ThemeOptions.light ? 'black' : 'white'
}


interface ExpensesGraphProps {
    labels: string[];
    datasets: Array<any>;
    titleText: string
}

export default function ExpensesGraph({ labels, datasets, titleText }: ExpensesGraphProps) {

    const theme = useTheme(state => state.theme)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                color: getColor(theme),
                text: titleText
            },
        },

        scales: {
            x: {
                grid: { display: false }, // Remove X-axis grid
                ticks: {
                    color: getColor(theme)
                }
            },
            y: {
                grid: { display: false }, // Remove Y-axis grid
                ticks: {
                    color: getColor(theme)
                }
            },
        },

    };

    const data = {

        labels,
        datasets
        // datasets: [
        //     {
        //         fill: true,
        //         label: 'Dataset 2',
        //         data: [100, 200, 300, 900, 500, 700, 600],
        //         borderColor: 'rgb(53, 162, 235)',
        //         backgroundColor: 'rgba(53, 162, 235, 0.5)',
        //         borderWidth: 2,
        //         pointRadius: 5,
        //         tension: 0.4, // for curving the line
        //     },
        // ],
    };

    return <Line options={options} data={data} />;
}
