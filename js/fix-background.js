function setBackgroundHeight() {
	document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
}

window.onorientationchange = function() {  
	window.location.reload(); 
};

setBackgroundHeight();