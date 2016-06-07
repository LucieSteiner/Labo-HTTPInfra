$(function() {
  function loadAdresses(){
    $.getJSON( "/api/students/", function( adresses ) {
		console.log(adresses);
		var message = "Nobody is here";
		if ( adresses.length > 0 ) {
		  message = adresses[0].address + " " + adresses[0].zip + " " + adresses[0].country;
		}
		$(".lead.section-lead").text(message);
	});
  };
  loadAdresses();
  setInterval( loadAdresses, 2000 );
  

});