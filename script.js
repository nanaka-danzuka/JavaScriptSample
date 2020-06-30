// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'Want to sleep' );
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'white',
      'background-color': 'violet'
    });
	  
  $( '#buttonArside' ).click( function() {
    $( 'article' ).css({
      'color': '#DDD',
      'background-color': 'royalblue'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.gotonotsubaki.co.jp">Goto no tsubaki</a></p>' );
    $( 'footer a' ).css( 'color','crimson' );
  });

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });

  $( '#buttonIzuremo' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
	$('main').css( 'flex-direction','column' );
  });

});
	