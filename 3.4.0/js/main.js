/* This function runs once the page is loaded, but appMobi is not yet active */
var init = function(){

};
window.addEventListener("load",init,false);  

/* This code prevents users from dragging the page */
var preventDefaultScroll = function(event) {
    event.preventDefault();
    window.scroll(0,0);
    return false;
};
//document.addEventListener('touchmove', preventDefaultScroll, false);

/* This code is used to run as soon as appMobi activates */
var onDeviceReady=function(){
    //Size the display to 768px by 1024px
    AppMobi.display.useViewport(768,1024);
	
	//hide splash screen
	AppMobi.device.hideSplashScreen();	
    
    // Set Landscape
    AppMobi.device.setRotateOrientation("landscape");
};
document.addEventListener("appMobi.device.ready",onDeviceReady,false);    
