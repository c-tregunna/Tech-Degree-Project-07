

// Main traffic graph

let trafficChart = document.getElementById('traffic-chart').getContext('2d');
const chartNavLink = document.querySelector('.li.traffic-nav-link');

Chart.defaults.global.animation.easing = 'easeInOutQuad',
Chart.defaults.global.defaultFontFamily = 'Josefin Sans',
Chart.defaults.global.defaultFontWeight = 100;

let lineChart = new Chart(trafficChart, {
    type: 'line', // type of chart
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            // label: 'Traffic Data',
            backgroundColor: 'rgba(225, 239, 56, .8)',
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

// Main traffic graph options

$(".update-hourly").on("click", function() {
    lineChart.data.datasets[0].data = [300, 400, 500, 600, 770, 560, 380, 470, 320];
    lineChart.data.labels = [09.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00];
    lineChart.update();
});

$(".update-daily").on("click", function() {
    lineChart.data.datasets[0].data = [250, 400, 650, 490, 770, 610, 650];
    lineChart.data.labels = ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'];
    lineChart.update();
});

$(".update-weekly").on("click", function() {
    lineChart.data.datasets[0].data = [750, 1000, 1250, 1100, 1500, 1750, 1300, 1600, 1200, 2050, 1750];
    lineChart.data.labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    lineChart.update();
});

$(".update-monthly").on("click", function() {
    lineChart.data.datasets[0].data = [900, 2000, 1600, 2200, 2400, 1800, 2550, 2800, 2300, 1900, 1430, 2110];
    lineChart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    lineChart.update();
});

//  Add class to main graph li's

$('ul li.traffic-nav-link').on('click', function () {
    var $this = $(this);
    $(this).closest('li') // get current LI
    .addClass('active')
        .siblings() // get adjacent LIs
    .removeClass('active');
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
// Mobile user chart end *********************

