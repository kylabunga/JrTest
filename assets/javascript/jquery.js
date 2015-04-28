var main = function() {
	$("li").hover(function() {
  		$( this ).fadeTo( "slow", 0.75 );
	},

function () {
   $( this ).fadeTo( "slow", 1 );
	
});
};

$(document).ready(main);
