document.addEventListener('DOMContentLoaded', function () {
    fetchDataAndBuildChart();
});

async function fetchDataAndBuildChart() {
    try {
        // Dummy data (replace with actual API data)
        const populationData = {
            'Kedungkandang': 209375,
            'Sukun': 196860,
            'Klojen': 93990,
            'Blimbing': 182851,
            'Lowokwaru': 164106,
            'KOTA MALANG': 847182,
        };

        const chartData = {
            labels: Object.keys(populationData),
            datasets: [{
                data: Object.values(populationData),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(159, 99, 132, 0.7)',
                    'rgba(70, 120, 100, 0.7)',
                    'rgba(200, 206, 86, 0.7)',
                ],
            }],
        };

        buildChart(chartData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function buildChart(data) {
    const ctx = document.getElementById('populationChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            cutoutPercentage: 50, // Adjust the cutoutPercentage to control the size of the doughnut chart
        },
    });
}
