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

// DIDNT WORK !!0
// function() {
//   let validateSearch = document.forms["search-form"]["search"].value;
//   let validateMessage = document.forms["search-form"]["user-message"].value;
//   let dialog = document.getElementById('window');
//   if (validateSearch === "" || validateMessage === "") {

//   document.getElementById('show').onclick = function() {
//       dialog.show();
//   };
//   document.getElementById('exit').onclick = function() {
//       dialog.close();
//   };
// }};

//   (function() {

//     var dialog = document.getElementById('form-alert');
//     document.getElementById('show').onclick = function() {
//         dialog.show();
//     };
//     document.getElementById('exit').onclick = function() {
//         dialog.close();
//     };
//   })();
//

// const send = document.querySelector('#show');
// let validateSearch = document.forms["search-form"]["search"].value;
// let validateMessage = document.forms["search-form"]["user-message"].value;
// send.addEventListener('click', e => {
//   e.preventDefault();
//   (function() {
//     if( validateSearch === "" || validateMessage === "" ) {
//         var dialog = document.getElementById('form-alert');
//         document.getElementById('show').onclick = function() {
//             dialog.show();
//         };
//         document.getElementById('exit').onclick = function() {
//             dialog.close();
//         };
//     } else {
//         var dialog = document.getElementById('form-confirm');
//         document.getElementById('show').onclick = function() {
//             dialog.show();
//         };
//         document.getElementById('exit').onclick = function() {
//             dialog.close();
//         };
//     }
//   })();
// });

const send = document.querySelector('#show');
send.addEventListener('click', e => {
  let validateSearch = $('input[name="search"]').val();
  let validateMessage = $('textarea[name="user-message"]').val();
  e.preventDefault();
    if (validateSearch === "" || validateMessage === "") {
      $('#form-alert').show();
      $('#alert-exit').on('click', () => {
        $('#form-alert').hide();
      });
    } else {
      $('#form-confirm').show();
      $('#confirm-exit').on('click', () => {
        $('#form-confirm').hide();
      });
    }
});




  // alert for settings - is this where local storage comes

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
