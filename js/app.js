
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
// Autocomplete
// --------------------------------

let memberNames = [
  "Victoria Chambers",
  "Dale Byrd",
  "Dawn Wood",
  "Dan Oliver",
  "Claire Tregunna"
]

function autocomplete(inp, arr) {

    /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("names"), memberNames);


// --------------------------------
// Form validation
// --------------------------------


// Form validation....incl alerts original code

function validateForm() {
    let validateSearch = document.forms["search-form"]["search"].value;
    let validateMessage = document.forms["search-form"]["user-message"].value;

    if (validateSearch === "" || validateMessage === "") {
      alert("Both form fields must be complete. Please try again");
      return false;
    } else {
        alert("Thank you. Your message has been sent to the user");
        return true;
    }
  }


// --------------------------------
// alert for settings - is this where local storage comes
// --------------------------------

let save = document.querySelector(".save");

let emailPref = document.getElementById("email-pref")
let profilePref = document.getElementById("profile-pref")
let timeZone = document.getElementById("time-zone") // to save time zone pref

timeZone.value = localStorage.getItem('time-zone') // Select time zone value to save

const emailSettings = localStorage.getItem('email-pref');

if (emailSettings && emailSettings === 'checked') { // check if email check box is checked
  emailPref.checked = true; // if it is stay true even on refresh
} else {
  emailPref.checked = false;
}

const profileSettings = localStorage.getItem('profile-pref');
if (profileSettings && profileSettings === 'checked') { // check if profile check box is checked
  profilePref.checked = true; // if it is stay true even on refresh
} else {
  profilePref.checked = false;
}

save.addEventListener('click', e => {
  localStorage.setItem('time-zone', timeZone.value)

  if (emailPref.checked) {
  localStorage.setItem('email-pref', 'checked');
  } else {
  localStorage.setItem('email-pref', 'not checked');
  }

  if (profilePref.checked) {
    localStorage.setItem('profile-pref', 'checked');
    } else {
    localStorage.setItem('profile-pref', 'not checked');
    }
  if (e.target.className === 'save') {
    alert("Thank you, your settings have been saved");
  }
})



// When you click cancel local storage is cleared

let cancel = document.querySelector(".cancel")

cancel.addEventListener('click', e => {
if (e.target.className === 'cancel') {
  alert("Your settings have been removed");
  localStorage.clear();
  location.reload();
}
})





// Dialog box, decided not to use as may not always show in all browsers

// const send = document.querySelector('#show');
// send.addEventListener('click', e => {
//   let validateSearch = $('input[name="search"]').val();
//   let validateMessage = $('textarea[name="user-message"]').val();
//   e.preventDefault();
//     if (validateSearch === "" || validateMessage === "") {
//       $('#form-alert').show(); // show the alert that form must be complete
//       $('#alert-exit').on('click', () => {
//         $('#form-alert').hide();
//       });
//     } else {
//       $('#form-confirm').show(); // show the alert that form has been submitted
//       $('#confirm-exit').on('click', () => {
//         $('#form-confirm').hide();
//         $('#search-user-form').trigger("reset"); // resets input and text area
//       });
//     }
// });