import Chart from 'react-apexcharts';

export const Charts = (props: { data:number[], labels:number[] }) => {

    const series = [
        {
            name: 'Posts based on comments',
            type: 'column',
            data: props.data,
        },
    ];

    const options = {
        chart: {
            height: 350,
            type: 'line',
            fontFamily: 'Helvetica, Arial, sans-serif',
        },
        stroke: {
            width: [0, 10],
            height: [0, 10],
        },
        plotOptions: {
            bar: {
                columnWidth: '27%',
                // barHeight: '80%',
                startingShape: 'rounded',
                endingShape: 'rounded',
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    {
                        offset: 0,
                        color: '#109BF8',
                        opacity: 1,
                    },
                    {
                        offset: 10,
                        color: '#1F91F8',
                        opacity: 1,
                    },
                    {
                        offset: 30,
                        color: '#3384F8',
                        opacity: 1,
                    },
                    {
                        offset: 40,
                        color: '#546EF7',
                        opacity: 1,
                    },
                    
                    {
                        offset: 50,
                        color: '#8150F6',
                        opacity: 1,
                    },
                    {
                        offset: 70,
                        color: '#9A40F5',
                        opacity: 1,
                    },
                    {
                        offset: 80,
                        color: '#BB2BF5',
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: '#E211F4',
                        opacity: 1,
                    },
                    
                ],
            },
        },

        dataLabels: {
            name: {
                show: false
             },
            enabled: true,
            enabledOnSeries: [1],
        },
        labels: props.labels,
        xaxis: {
            type: 'string',
            labels: {
                show:true
            },
            title: {
                text: 'Post Ids',
            },
        },
        yaxis: [
            { 
                title: {
                    text: 'Number of comments',
                },
                min: 0,
                max: 10
                
            },
        ],
    };
    return (
        <div className="donut">
            <Chart options={options} series={series} type="line" height="350" />
        </div>
    );
};