// Main traffic graph

let trafficChart = document.getElementById('traffic-chart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Josefin Sans',
Chart.defaults.global.defaultFontWeight = 100;

let lineChart = new Chart(trafficChart, {
    type: 'line', // type of chart
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Traffic Data',
            backgroundColor: 'rgba(225, 239, 56, .6)',
            borderColor: 'rgb(70, 107, 0)',
            borderWidth: 2,
            data: [750, 1000, 1250, 1100, 1500, 1750, 1500, 1600, 1200, 1800, 2400],
            lineTension: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#fff'
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});


// Create data for daily, weekly, monthly, hourly
// on click of traffic nav
// if hourly open hourly data
// if weekly open weekly data
// if daily open daily data
// if monthly open monthly data