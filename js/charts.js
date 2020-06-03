// Main traffic graph

let trafficChart = document.getElementById('traffic-chart').getContext('2d');

Chart.defaults.global.animation.easing = 'easeInOutQuad',
Chart.defaults.global.defaultFontFamily = 'Josefin Sans',
Chart.defaults.global.defaultFontWeight = 100;

let lineChart = new Chart(trafficChart, {
    type: 'line', // type of chart
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            // label: 'Traffic Data',
            backgroundColor: 'rgba(225, 239, 56, .6)',
            borderColor: 'rgb(70, 107, 0)',
            borderWidth: 2,
            data: [750, 1000, 1250, 1100, 1500, 1750, 1300, 1600, 1200, 2050, 1750],
            lineTension: 0,
            pointRadius: 6,
            pointBackgroundColor: '#fff',
            pointHoverRadius: 3
        }]
    },
    options: {
        legend: {
            display: false
        },
    }
});

// Main traffic chart end *********************

// Daily traffic graph
let dailyChart = document.getElementById('daily-chart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Josefin Sans',
Chart.defaults.global.defaultFontWeight = 100;

let barChart = new Chart(dailyChart, {
    type: 'bar', // type of chart
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            // label: 'Traffic Data',
            backgroundColor: 'rgb(225, 239, 56)',
            hoverBackgroundColor: 'rgb(70, 107, 0)',
            data: [75, 100, 175, 150, 125, 225, 200, 120]
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});

// Daily traffic chart end *********************

// Mobile users graph
let mobileChart = document.getElementById('mobile-chart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Josefin Sans',
Chart.defaults.global.defaultFontWeight = 100;

let doughnutChart = new Chart(mobileChart, {
    type: 'doughnut', // type of chart
    data: {
        labels: ['Phones', 'Tablet', 'Desktop'],
        datasets: [{
            backgroundColor: [
            'rgb(70, 107, 0)',
            '#56BAEC',
            'rgb(225, 239, 56)'
        ],
            data: [73, 62, 225]
        }]
    },
    options: {
        legend: {
            position: 'right'
        }
    }
});
// Create data for daily, weekly, monthly, hourly
// Create labels for daily, weekly, monthly, hourly
// on click of traffic nav
// if hourly open hourly data show chart on click if li
// if weekly open weekly data show chart on click if li
// if daily open daily data show chart on click if li
// if monthly open monthly data show chart on click if li