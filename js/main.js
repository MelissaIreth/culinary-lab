(function scroll(){

	window.onscroll = function(){
		if(document.body.scrollTop > 50){
			document.getElementById("nav-scroll").className = "addscroll"
		}else{
			document.getElementById("nav-scroll").className = "noscroll"
		}
	}
})();
