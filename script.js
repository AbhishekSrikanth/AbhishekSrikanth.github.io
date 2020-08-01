$(function() {
    $( 'div.navbar-nav a' ).on( 'click', function() {
          $( this ).parent().find( 'a.active' ).removeClass( 'active' );
          $( this ).addClass( 'active' );
    });
});