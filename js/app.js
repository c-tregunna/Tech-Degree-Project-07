const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>3</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">X</p>
</div>
`

$( "p.alert-banner-close" ).click(function() {
    $( "#alert" ).hide( 800 );
  });

$(".dot").click(function() {
    $("ul.notifications").show();
});

$( "span.close" ).click(function() {
    $(this).parent().hide( 600 );
});
