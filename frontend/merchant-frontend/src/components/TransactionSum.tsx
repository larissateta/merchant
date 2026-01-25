import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const TransactionSummary = () => {

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Transaction Activity',
                data: [4200, 5600, 4000, 6500, 7200, 5800, 4800],
                fill: true,
                borderColor: 'rgb(34, 197, 94)',
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                tension: 0.4,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    return (
        <div className="h-auto border border-gray-300 rounded-2xl mx-7 p-6 mt-6 lg:w-[50%]">
            <h1 className="text-sm font-medium">Transaction Summary</h1>
            <h1 className="text-sm font-light text-gray-400 mt-1">Last 7 days activity</h1>

            <div className="lg:h-84 mt-3" >
                <Line data={data} options={options} />
            </div>
        </div>
    )
}