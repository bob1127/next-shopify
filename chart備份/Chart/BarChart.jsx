import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    annotationPlugin
);

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const initializeChart = async () => {
            // Dynamically import and register the zoom plugin
            // const { default: zoomPlugin } = await import('chartjs-plugin-zoom');
            // ChartJS.register(zoomPlugin);

            const fetchData = async () => {
                try {
                    // const response = await fetch('https://ultraehp.com/next/data.json');
                    // const data = await response.json();

                    // Assume the fetched data is an array of objects with 'DateTime', 'Current_A', and 'Temperature_C' keys
                    const labels = data.map(item => new Date(item.DateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
                    const data1 = data.map(item => item.Current_A);
                    const data2 = data.map(item => item.Temperature_C); // Example for additional dataset

                    setChartData({
                        labels,
                        datasets: [
                            {
                                label: 'Current (A)',
                                data: data1,
                                borderColor: 'rgb(53, 162, 235)',
                                borderWidth: 1.5,
                                backgroundColor: function (context) {
                                    const value = context.raw;
                                    return value > 200 ? 'rgba(255, 0, 0, 0.4)' : 'rgba(53, 162, 235, 0.4)';
                                },
                                borderCapStyle: 'round',
                                borderJoinStyle: 'round',
                                yAxisID: 'y',
                            },
                            {
                                label: 'Temperature (C)',
                                data: data2,
                                borderWidth:1.5,
                                borderColor: 'rgb(255, 99, 132)',
                                backgroundColor: 'rgba(255, 99, 132, 0.4)',
                                borderCapStyle: 'round',
                                borderJoinStyle: 'round',
                                yAxisID: 'y1',
                            },
                        ],
                    });

                    setChartOptions({
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: '生物血糖檢測',
                            },
                            zoom: {
                                pan: {
                                    enabled: true,
                                    mode: 'x',
                                },
                                zoom: {
                                    wheel: {
                                        enabled: true,
                                    },
                                    pinch: {
                                        enabled: true,
                                    },
                                    mode: 'x',
                                    animation: {
                                        duration: 1000, // Duration in milliseconds
                                    },
                                },
                            },
                            annotation: {
                                annotations: {
                                    line1: {
                                        type: 'line',
                                        yMin: 300,
                                        yMax: 300,
                                        borderColor: 'rgb(0,0,0)',
                                        borderWidth: 1.5,
                                        borderDash: [6, 6], // Dotted line
                                        label: {
                                            enabled: true,
                                            content: 'Threshold: 200',
                                            position: 'end',
                                            backgroundColor: 'rgba(255, 99, 132, 0.7)',
                                            color: 'white',
                                            font: {
                                                style: 'bold',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        maintainAspectRatio: false,
                        responsive: true,
                        animation: {
                            duration: 1500, // General animation duration
                        },
                        scales: {
                            y: {
                                max: 400,
                                ticks: {
                                    stepSize: 80, // Set interval to 40 units
                                },
                            },
                            y1: {
                                position: 'right',
                                max: 120,
                                ticks: {
                                    stepSize: 20, // Set interval to 20 units
                                },
                            },
                        },
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();

            // Set interval to fetch data every second
            // const interval = setInterval(() => {
            //     fetchData();
            // }, 1000000);

            // Cleanup interval on unmount
            return () => clearInterval(interval);
        };

        initializeChart();
    }, []);

    return (
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default BarChart;
