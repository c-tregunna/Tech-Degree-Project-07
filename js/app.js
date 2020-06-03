//Alter banner
const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML = //Populate banner with below
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>3</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">X</p>
</div>
`

$( "p.alert-banner-close" ).click(function() { // close banner on click of X
    $( "#alert" ).hide( 800 );
  });

// Notifications

$(".dot, .bell-icon").click(function() { //Show notifcations on click of dot
    $("ul.notifications").show();
});

$(".dot, .bell-icon").click(function() { //Show notifcations on click of dot
    $(".dot").fadeOut(600);
});

$( "span.close" ).click(function() { // hide each li when X is clicked
    $(this).parent().slideUp( 400 );
});


// Main traffice grapg

var ctx = document.getElementById('traffic-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(225, 239, 56, .6)',
            borderColor: 'rgb(70, 107, 0)',
            data: [750, 1000, 1250, 1100, 1500, 1750, 1500, 1600, 1200, 1800, 2400]
        }]
    },

    // Configuration options go here
    options: {
            yAxes: [{
                type: 'category',
                labels: ['2500', '2000', '1500', '1000', '500']
            }]
        }
});


function validateForm() {
    let validateSearch = document.forms["search-form"]["search"].value;
    let validateMessage = document.forms["search-form"]["user-message"].value;

    if (validateSearch === "") {
      alert("Search for user name must be complete. Please try again");
      return false;
    } if (validateMessage === "") {
        alert("Message for user must be complete. Please try again");
      return false;
    }  else {
        alert("Thank you. Your message has been sent to the user");
        return true;
    }
  }