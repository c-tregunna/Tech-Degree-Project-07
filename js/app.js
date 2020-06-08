
// --------------------------------
// Notifications on bell
// --------------------------------

$(".dot, .bell-icon").click(function() { //Show notifcations on click of dot
  $("ul.notifications").show();
});

$(".dot, .bell-icon").click(function() { //Show notifcations on click of dot
  $(".dot").fadeOut(600);
});

$( "span.close" ).click(function() { // hide each li when X is clicked
  $(this).parent().slideUp( 400 );
});

// --------------------------------
//Alter banner
// --------------------------------

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

// --------------------------------
// Add active states to the navigation bar
// --------------------------------

$('nav a').on('click', function () {
  var $this = $(this);
  $(this).closest('nav a') // get current LI
  .addClass('active-nav')
      .siblings() // get adjacent LIs
  .removeClass('active-nav');
});

// --------------------------------
// Form validation
// --------------------------------

const send = document.querySelector('#show');
send.addEventListener('click', e => {
  let validateSearch = $('input[name="search"]').val();
  let validateMessage = $('textarea[name="user-message"]').val();
  e.preventDefault();
    if (validateSearch === "" || validateMessage === "") {
      $('#form-alert').show(); // show the alert that form must be complete
      $('#alert-exit').on('click', () => {
        $('#form-alert').hide();
      });
    } else {
      $('#form-confirm').show(); // show the alert that form has been submitted
      $('#confirm-exit').on('click', () => {
        $('#form-confirm').hide();
        $('#search-user-form').trigger("reset"); // resets input and text area
      });
    }
});

// --------------------------------
// alert for settings - is this where local storage comes
// --------------------------------

let save = document.querySelector(".save");

let emailPref = document.getElementById("email-pref")
let profilePref = document.getElementById("profile-pref")
let timeZone = document.getElementById("time-zone") // to save time zone pref

timeZone.value = localStorage.getItem('time-zone')

save.addEventListener('click', e => {
  localStorage.setItem('time-zone', timeZone.value);
  if (localStorage.length === 1) {
    localStorage.setItem('email-pref', 'checked')
  } if (localStorage.length === 2) {
      localStorage.setItem('profile-pref', 'checked')
  } if (e.target.className === 'save') {
    alert("Thank you, your settings have been saved");
  }
})

// When you click cancel local storage is cleared

let cancel = document.querySelector(".cancel")

cancel.addEventListener('click', e => {
if (e.target.className === 'cancel') {
  alert("Your settings have been removed");
  localStorage.clear();
}
})





// Form validation....incl alerts original code

// function validateForm() {
//     let validateSearch = document.forms["search-form"]["search"].value;
//     let validateMessage = document.forms["search-form"]["user-message"].value;

//     if (validateSearch === "") {
//       alert("Search for user field must be complete. Please try again");
//       return false;
//     } if (validateMessage === "") {
//         alert("Message for user field must be complete. Please try again");
//       return false;
//     }  else {
//         alert("Thank you. Your message has been sent to the user");
//         return true;
//     }
//   }