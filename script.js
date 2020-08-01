$(function() {
    $( 'div.navbar-nav a' ).on( 'click', function() {
          $( this ).parent().find( 'a.active' ).removeClass( 'active' );
          $( this ).addClass( 'active' );
    });
});

window.onscroll = function () {  
    if (isScrolledIntoView("#home")) {
        $( '#nav-home' ).parent().find( 'a.active' ).removeClass( 'active' );
        $('#nav-home').addClass('active')
    }
    else if (isScrolledIntoView("#about")) {
        $( '#nav-about' ).parent().find( 'a.active' ).removeClass( 'active' );
        $('#nav-about').addClass('active')
    }
    else if (isScrolledIntoView("#projects")) {
        $( '#nav-projects' ).parent().find( 'a.active' ).removeClass( 'active' );
        $('#nav-projects').addClass('active')
    }
    else if (isScrolledIntoView("#resume")) {
        $( '#nav-resume' ).parent().find( 'a.active' ).removeClass( 'active' );
        $('#nav-resume').addClass('active')
    }
    else if (isScrolledIntoView("#contact")) {
        $( '#nav-contact' ).parent().find( 'a.active' ).removeClass( 'active' );
        $('#nav-contact').addClass('active')
    }
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}