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

// Form validation....incl alerts

function validateForm() {
    let validateSearch = document.forms["search-form"]["search"].value;
    let validateMessage = document.forms["search-form"]["user-message"].value;

    if (validateSearch === "") {
      alert("Search for user field must be complete. Please try again");
      return false;
    } if (validateMessage === "") {
        alert("Message for user field must be complete. Please try again");
      return false;
    }  else {
        alert("Thank you. Your message has been sent to the user");
        return true;
    }
  }

  // alert for settings - is this where local storage comes in???

let save = document.querySelector(".save");

save.addEventListener('click', e => {
  if (e.target.className === 'save') {
    alert("Thank you, your settings have been saved");
  }
})

// Add active states to the navigation bar

$('nav a').on('click', function () {
  var $this = $(this);
  $(this).closest('nav a') // get current LI
  .addClass('active-nav')
      .siblings() // get adjacent LIs
  .removeClass('active-nav');
});
