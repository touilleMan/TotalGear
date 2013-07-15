
var playMobiOTA={};var headID=document.getElementsByTagName("head")[0];if(!window.OneTouchAuth){var otaScript=document.createElement('script');otaScript.type='text/javascript';otaScript.src='https://cservices.appmobi.com/1touch/OneTouchAuth.js?rnd='+Math.floor(Math.random()*999999);headID.appendChild(otaScript);}
function cl(s){if(console){console.log(s);}}
var playMobi={enabled:false,pmSessionId:Math.floor(Math.random()*999999999999999),token:null,gameId:'vincent.mezino.TotalGearXDK',merchantId:null,oneTouchId:null,init:{},callback:{},onDisplayClosedCallback:'',currentOrientation:'',analytics:{},player:{},leaderboard:{validator:{queue:{}}},achievements:{validator:{queue:{}}},data:{validator:{}},social:{facebook:{},twitter:{}},device:{info:{isMobile:false,isWebkit:false,isNative:false,platformClass:'',device:''}},desiredOrientation:'',facebookEnabled:false,facebookPostCallback:'',fbUserId:'',fbAccessToken:'',kp:'38hbs922nd03os0',serverUrl:'https://playmobi.appmobi.com',baseUrl:'https://playmobi.appmobi.com/api',onConnectMode:'',onConnectCB:'',onCancelCB:'',onFacebookConnectCB:'',currentFacebookCall:'',vpWidth:window.innerWidth,vpHeight:window.innerHeight,ajaxDataType:'',lastApiCmdCalled:'',loopedCalls:0,apiEnabled:true,offlineAlerted:false,callbackArray:[],onConnectFB:false,gameConnectScreenName:''};playMobi.init=function(params){var uagent=navigator.userAgent.toLowerCase();playMobiOTA=new OneTouchAuth("73fd0334-ffb8-40dc-b8a3-ca8fda3be22b");if(typeof jQuery=='undefined'&&!window.jq){}
if(window.AppMobi){playMobi.device.info.isNative=true;}
if(uagent.search('mobile')>-1||uagent.search('mobi')>-1||uagent.search('nook')>-1||uagent.search('kindle')>-1||uagent.search('silk')>-1){playMobi.device.info.isMobile=true;}
if(uagent.search('webkit')>-1){playMobi.device.info.isWebkit=true;}
if(uagent.search('ipod')>-1){playMobi.device.info.platformClass='phone';playMobi.device.info.device='ipod';}else if(uagent.search('iphone')>-1){playMobi.device.info.platformClass='phone';playMobi.device.info.device='iphone';}else if(uagent.search('ipad')>-1){playMobi.device.info.platformClass='tablet.l';playMobi.device.info.device='ipad';}else if(uagent.search('nook')>-1){playMobi.device.info.platformClass='tablet.m';playMobi.device.info.device='nook';}else if(uagent.search('kindle')>-1||uagent.search('silk')>-1){playMobi.device.info.platformClass='tablet.m';playMobi.device.info.device='kindle';}else if(uagent.search('android')>-1){playMobi.device.info.platformClass='phone';playMobi.device.info.device='android_device';}else{playMobi.device.info.platformClass='desktop';playMobi.device.info.device='desktop';}
if(!playMobi.device.info.isNative){var newScript=document.createElement('script');newScript.type='text/javascript';newScript.src=' https://cservices.appmobi.com/html5/analytics.aspx?id=FED2CB5A-6CEA-411C-A74A-3C331722A37C';headID.appendChild(newScript);}
otCookie=playMobi.getCookie('OneTouchGuid');if(otCookie!=null&&otCookie!=''&&otCookie!=undefined){playMobi.oneTouchId=otCookie;}
spCookie=playMobi.getCookie('playMobiId');if(spCookie!=null&&spCookie!=''&&spCookie!=undefined){playMobi.token=spCookie;}
if(playMobi.token!=''&&playMobi.token!=null){playMobi.player.verifyToken();}
try{if(params!=undefined){if(params.forceOrientation!=undefined){playMobi.desiredOrientation=params.forceOrientation.toLowerCase();window.addEventListener("orientationchange",playMobi.device.orientationchange,false);var existsPortrait=document.getElementById('rotateToLandscapeAlert');if(existsPortrait){existsPortrait.style.display='block';}else{var divP=document.createElement('div');divP.id='rotateToPortraitAlert';divP.style.width='100%';divP.style.height='100%';divP.style.background='#000';divP.style.position='fixed';divP.style.top='0';divP.style.left='0';divP.style.display='none';document.body.appendChild(divP);document.getElementById('rotateToPortraitAlert').innerHTML='<img src="https://playmobi.appmobi.com/img/playmobi/rotatePortrait.png" style="position: fixed; top: 50%; left: 50%; margin-top: -100px; margin-left: -120px;" />';}
var existsLandscape=document.getElementById('rotateToLandscapeAlert');if(existsLandscape){existsLandscape.style.display='block';}else{var divL=document.createElement('div');divL.id='rotateToLandscapeAlert';divL.style.width='100%';divL.style.height='100%';divL.style.background='#000';divL.style.position='fixed';divL.style.top='0';divL.style.left='0';divL.style.display='none';document.body.appendChild(divL);document.getElementById('rotateToLandscapeAlert').innerHTML='<img src="https://playmobi.appmobi.com/img/playmobi/rotateLandscape.png" style="position: fixed; top: 50%; left: 50%; margin-top: -125px; margin-left: -120px;" />';playMobi.device.checkOrientation();}}
if(params.orientationListener!=undefined){playMobi.orientationListener=params.orientationListener;}
if(params.hideAddressBar==true){setTimeout(function(){window.scrollTo(0,1)},100);document.body.addEventListener('touchmove',function(event){event.preventDefault();},false);}
if(params.forceKindleFullscreen!=undefined){if(params.forceKindleFullscreen==true&&playMobi.device.info.device=='kindle'){var exists=document.getElementById('kindleFireFullScreenAlert');if(exists){exists.style.display='block';return;}
var divP=document.createElement('div');divP.id='kindleFireFullScreenAlert';divP.style.width='100%';divP.style.height='100%';divP.style.background='#000';divP.style.position='fixed';divP.style.top='0';divP.style.left='0';divP.style.display='none';document.body.appendChild(divP);document.getElementById('kindleFireFullScreenAlert').innerHTML='<div style="color:#fff; position: fixed; top: 20%; width:100%; left:0; text-align:center; font-size:25px;">This Game Must Be Played In Full Screen Mode.</div><img src="https://playmobi.appmobi.com/img/playmobi/kffs.png" style="position: fixed;top: 100%;left: 100%;margin-top: -150px;margin-left: -220px;" />';playMobi.device.checkKindleFullscreen();window.onresize=function(event){playMobi.device.checkKindleFullscreen();}}}
if(params.forceIOSHomeScreen!=undefined){if(params.forceIOSHomeScreen==true&&!window.navigator.standalone&&(playMobi.device.info.device=='iphone'||playMobi.device.info.device=='ipod'||playMobi.device.info.device=='ipad')){var exists=document.getElementById('iosHomeScreenAlert');if(exists){exists.style.display='block';return;}
var divP=document.createElement('div');divP.id='iosHomeScreenAlert';divP.style.width='100%';divP.style.height='100%';divP.style.background='#000';divP.style.position='fixed';divP.style.top='0';divP.style.left='0';document.body.appendChild(divP);if(playMobi.device.info.device=='ipad'){document.getElementById('iosHomeScreenAlert').innerHTML='<img src="https://playmobi.appmobi.com/img/playmobi/ioshs.ipad.png" style="position: fixed;margin-top: 0;top:10px;left:80px;margin-left:0;" />';}else{document.getElementById('iosHomeScreenAlert').innerHTML='<img src="https://playmobi.appmobi.com/img/playmobi/ioshs.png" style="position: fixed;top: 100%;left: 50%;margin-top: -150px;margin-left: -128px;" />';}}}}}catch(e){}
playMobi.social.facebook.init();playMobi.enabled=true;var analyticsUniqueId=playMobi.getCookie('analyticsUniqueId');if(analyticsUniqueId==''||analyticsUniqueId==null||analyticsUniqueId==undefined){analyticsUniqueId=playMobi.pmSessionId;playMobi.setCookie('analyticsUniqueId',analyticsUniqueId);}
playMobi.ajax({url:playMobi.baseUrl+'/analytics/play/',type:'get',data:{cmd:'analytcs.play',uniqueid:analyticsUniqueId,gameid:'FED2CB5A-6CEA-411C-A74A-3C331722A37C',is_native:playMobi.device.info.isNative,device:playMobi.device.info.device}});playMobi.mau();if(params!=undefined){if(params.callback!=undefined){pmeval(params.callback);}}}
playMobi.device.checkKindleFullscreen=function(){if(playMobi.currentOrientation=='portrait'){if(screen.height<900){document.getElementById('kindleFireFullScreenAlert').style.display="block";}else{document.getElementById('kindleFireFullScreenAlert').style.display="none";}}else{if(screen.height<500){document.getElementById('kindleFireFullScreenAlert').style.display="block";}else{document.getElementById('kindleFireFullScreenAlert').style.display="none";}}}
playMobi.device.orientationchange=function(){setTimeout('playMobi.device.checkOrientation();',200);}
playMobi.device.checkOrientation=function(){var w=window.innerWidth;var h=window.innerHeight;playMobi.currentOrientation='portrait';if(w>h){playMobi.currentOrientation='landscape';}
if(playMobi.device.info.isMobile&&!playMobi.device.info.isNative){if((playMobi.desiredOrientation=='landscape'&&playMobi.currentOrientation!='landscape')){document.getElementById('rotateToLandscapeAlert').style.display="block";}else if((playMobi.desiredOrientation=='portrait'&&playMobi.currentOrientation!='portrait')){document.getElementById('rotateToPortraitAlert').style.display="block";}else{document.getElementById('rotateToPortraitAlert').style.display="none";document.getElementById('rotateToLandscapeAlert').style.display="none";}}}
playMobi.analytics.play=function(){var qs='logged_in=no';if(playMobi.token!=null&&playMobi.token!=''){qs='logged_in=yes';}
qs+='device='+playMobi.device.info.device+'&appmobi_native=';if(playMobi.device.info.isNative){qs+='1';}else{qs+='0';}
AppMobi.analytics.logPageEvent("/application/play.event",qs,"","",0,"index.html");}
playMobi.analytics.event=function(val,uqs){var qs='logged_in=no';if(playMobi.token!=null&&playMobi.token!=''){qs='logged_in=yes';}
if(uqs!=null&&uqs!=undefined&&uqs!=''){qs+='&'+uqs;}
if(val!=''){AppMobi.analytics.logPageEvent("/application/"+val+".event",qs,"","",0,"index.html");}}
playMobi.player.gameConnect=function(obj){if(typeof obj=='object'){var callback='';if(obj.screen_name==undefined){return false;}
if(obj.password==undefined){return false;}
if(obj.callback!=undefined){callback=obj.callback;}
playMobi.player.checkScreenName({'game_id':'FED2CB5A-6CEA-411C-A74A-3C331722A37C','screen_name':obj.screen_name,'password':obj.password,'player_callback':callback,'callback':'playMobi.player.processGameConnect'});}else{cl('playMobi.player.gameConnect missing parameter');return false;}}
playMobi.player.oneTouchConnect=function(email,password){playMobi.player.silentConnect(email,password);}
playMobi.player.facebookConnect=function(cb){playMobi.player.silentFacebookConnect(cb);}
playMobi.player.processGameConnect=function(data){if(data.data.callback!=undefined){playMobi.onConnectCB=data.data.callback;}
data.data.screen_name=emailifyScreenName(data.data.screen_name);var email=data.data.screen_name+'@FED2CB5A6CEA411CA74A3C331722A37C.playmobi.appmobi.com';if(data.status_code=='success'){playMobi.gameConnectScreenName=data.data.screen_name;playMobiOTA.register(email,data.data.password,playMobi.player.otaSilentRegistrationCallback);}else{playMobiOTA.authenticate(email,data.data.password,playMobi.player.otaSilentLoginCallback);}}
playMobi.player.silentConnect=function(email,password){var obj={};if(typeof email=='object'){obj=email;if(obj.email==undefined){return false;}
if(obj.password==undefined){return false;}
email=obj.email;password=obj.password
if(obj.callback!=undefined){playMobi.onConnectCB=obj.callback;}}
if(email==''||password==''){return false;}
playMobi.setCookie('silentEmail',email);playMobi.setCookie('slientPassword',password);console.log('CALL TO SETCOOKIE');playMobiOTA.authenticate(email,password,playMobi.player.otaSilentLoginCallback);};playMobi.player.otaSilentLoginCallback=function(data){console.log('auth callback',data);if(data.success){playMobi.deleteCookie('silentEmail');playMobi.deleteCookie('slientPassword');playMobi.setCookie('OneTouchGuid',data.userkey);playMobi.oneTouchId=data.userkey;playMobi.player.getToken();}else{var email=playMobi.getCookie('silentEmail');var password=playMobi.getCookie('slientPassword');if((typeof email==="undefined")||(typeof password==="undefined")){return false;}
if(email==''||password==''){return false;}
playMobiOTA.register(email,password,playMobi.player.otaSilentRegistrationCallback);}}
playMobi.player.otaSilentRegistrationCallback=function(data){playMobi.deleteCookie('silentEmail');playMobi.deleteCookie('slientPassword');console.log('reg callback');if(data.success){playMobi.setCookie('OneTouchGuid',data.userkey);playMobi.oneTouchId=data.userkey;playMobi.player.getToken();}else{playMobi.player.onConnect(data);}}
playMobi.player.silentFacebookConnect=function(cb){if(typeof cb=='object'){cb=cb.callback;}
if(cb.length>0){playMobi.onFacebookConnectCB=cb;}
playMobi.social.facebook.login();}
playMobi.player.otaCallback=function(data){if(data.success){playMobi.setCookie('OneTouchGuid',data.userkey);playMobi.oneTouchId=data.userkey;playMobi.player.getToken();}else{playMobi.setCookie("oneTouchId",'');cl('PLAYMOBI ERROR - Login',data);}};playMobi.mau=function(){playMobi.ajax({url:playMobi.baseUrl+'/mau/',type:'get',data:{cmd:'mau',game_name:playMobi.gameId}});}
playMobi.player.getToken=function(){var screenName='';var appId='';if(playMobi.gameConnectScreenName!=null&&playMobi.gameConnectScreenName!=''&&playMobi.gameConnectScreenName!=undefined){screenName=playMobi.gameConnectScreenName;appId='FED2CB5A-6CEA-411C-A74A-3C331722A37C';playMobi.gameConnectScreenName='';}
if(playMobi.oneTouchId!=null&&playMobi.oneTouchId!=''&&playMobi.oneTouchId!=undefined){playMobi.ajax({url:playMobi.baseUrl+'/player/gettoken/',type:'get',data:{cmd:'player.getToken',gameid:playMobi.gameId,onetouchid:playMobi.oneTouchId,fbuid:playMobi.fbUserId,screen_name:screenName,am_app_id:appId}});return true;}};playMobi.player.setToken=function(data){if(data.status_code=='success'){playMobi.setCookie('playMobiId',data.data);playMobi.token=data.data;playMobi.player.onConnect();}else{alert(data.status_details);}};playMobi.player.checkScreenName=function(obj){playMobi.ajax({url:playMobi.baseUrl+'/player/checkscreenname/',type:'get',data:{cmd:'player.checkscreenname',game_id:obj.game_id,screen_name:obj.screen_name,callback:obj.callback,player_callback:obj.player_callback,password:obj.password}});};playMobi.player.getscreenname=function(params){var customCallback='';var refId='';if(params.callback!=undefined){customCallback=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(playMobi.token!=null&&playMobi.token!=''){playMobi.ajax({url:playMobi.baseUrl+'/player/getscreenname/',type:'get',data:{cmd:'player.getscreenname',token:playMobi.token,callback:customCallback,reference_id:refId}});return true;}else{return false;}}
playMobi.player.setscreenname=function(params){var customCallback='';var refId='';var screenName='';var gameSpecific='0';if(params.screen_name!=undefined){screenName=params.screen_name;}else{return false;}
if(params.callback!=undefined){customCallback=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(params.game_specific!=undefined){gameSpecific=params.game_specific;}
if(playMobi.token!=null&&playMobi.token!=''){playMobi.ajax({url:playMobi.baseUrl+'/player/setscreenname/',type:'get',data:{cmd:'player.setscreenname',token:playMobi.token,screen_name:screenName,game_specific:gameSpecific,callback:customCallback,reference_id:refId}});return true;}else{return false;}}
playMobi.player.screenNameOk=function(data){if(data.status_code=='success'){playMobi.setCookie("oneTouchId",email);playMobiOTA.register(email,password,playMobi.player.otaCallback);}else{cl('PLAYMOBI ERROR - screen name check',data);}};playMobi.player.verifyToken=function(){playMobi.ajax({url:playMobi.baseUrl+'/player/verifytoken/',type:'get',data:{cmd:'player.verifyToken',token:playMobi.token,appid:'FED2CB5A-6CEA-411C-A74A-3C331722A37C',onetouch:playMobi.oneTouchId,callback:'playMobi.player.tokenStatus'}});}
playMobi.player.forgotPassword=function(params){if(typeof params=='object'){if(params.email!=undefined){if(params.callback==undefined){params.callback=function(d){console.log(d);}}
playMobiOTA.recoverpassword(params.email,params.callback);}}}
playMobi.player.tokenStatus=function(data){if(data.status_code!='success'){playMobi.player.disconnect();}}
playMobi.player.display=function(params){var m='';var tokenVal='null';if(typeof params=='object'){if(params.mode!=undefined){m=params.mode;}
if(params.onclose!=undefined){playMobi.onDisplayClosedCallback=params.onclose;}}else{if(params==undefined||params==''){return false;}
m=params;}
if(playMobi.token!=''){tokenVal=playMobi.token;}
var src=playMobi.baseUrl+'/player/display/x/'+tokenVal+'/'+playMobi.gameId+'/'+m;playMobi.display(src);}
playMobi.player.connected=function(){try{if(playMobi.token.length>0){return true;}else{return false;}}catch(e){return false;}}
playMobi.player.onConnect=function(d){if(typeof(d)==='undefined'||typeof(d)==='null'){d={'success':true};}
if(playMobi.onConnectCB!=''){pmeval(playMobi.onConnectCB,d);}
if(playMobi.onConnectFB){playMobi.onConnectFB=false;pmeval(playMobi.onFacebookConnectCB);pmeval(playMobi.social.facebook.updateFriends);}
playMobi.onConnectMode='';playMobi.onConnectCB='';}
playMobi.player.disconnect=function(params){playMobi.clearCookies();playMobi.token='';playMobi.oneTouchId='';if(params!=undefined){if(params.callback!=undefined){pmeval(params.callback);}}}
playMobi.callback=function(data){cl('playMobi callback:',data);}
playMobi.leaderboard.save=function(params){var playerScore='';var gameMode='';var scoreNotes='';var customCallback='';var refId='';var cData='';if(params.c2==undefined){if(params.score==undefined){return false;}else{playerScore=params.score;}
if(params.mode!=undefined){gameMode=params.mode;}
if(params.notes!=undefined){scoreNotes=params.notes;}
if(params.callback!=undefined){customCallback=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}}else{cData=params.c2;}
if(playMobi.token!=null&&playMobi.token!=''){playMobi.ajax({url:playMobi.baseUrl+'/leaderboard/save/',type:'get',data:{cmd:'leaderboard.save',token:playMobi.token,score:playerScore,gamemode:gameMode,notes:scoreNotes,callback:customCallback,reference_id:refId,c2:cData}});return true;}else{return false;}}
playMobi.leaderboard.getplayerdata=function(params){var gameMode='';var customCallback='playMobi.callback';var refId='';if(params==undefined){return false;}
if(params.callback!=undefined){customCallback=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(params.mode==undefined){gameMode='';}else{gameMode=params.mode;}
if(playMobi.token!=null&&playMobi.token!=''){playMobi.ajax({url:playMobi.baseUrl+'/leaderboard/getuser/',type:'get',data:{cmd:'leaderboard.getplayer',token:playMobi.token,mode:gameMode,callback:customCallback,reference_id:refId}});return true;}else{return false;}}
playMobi.leaderboard.getgamedata=function(params){var customCallback='playMobi.callback';var gameMode='';var refId='';if(params==undefined){return false;}
if(params.callback!=undefined){customCallback=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(params.mode!=undefined){gameMode=params.mode;}
if(playMobi.token!=null&&playMobi.token!=''){playMobi.ajax({url:playMobi.baseUrl+'/leaderboard/getgame/',type:'get',data:{cmd:'leaderboard.getgame',token:playMobi.token,mode:gameMode,gameid:'FED2CB5A-6CEA-411C-A74A-3C331722A37C',callback:customCallback,reference_id:refId}});return true;}else{return false;}}
playMobi.leaderboard.getrange=function(params){var gameMode='';var customCallback='playMobi.callback';var refId='';var rowsAbove=0;var rowsBelow=0;var recStart=0;var recEnd=0;if(params==undefined){return false;}
if(params.callback!=undefined){customCallback=params.callback;}
if(params.rows_above!=undefined){rowsAbove=params.rows_above;}
if(params.rows_below!=undefined){rowsBelow=params.rows_below;}
if(params.record_offset!=undefined){recStart=params.record_offset;}
if(params.record_count!=undefined){recEnd=params.record_count;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(params.modes==undefined){gameMode='';}else{gameMode=params.modes;}
if(isArray(gameMode)){var tmp=gameMode.join(',');gameMode=tmp;}
if(playMobi.token!=null&&playMobi.token!=''){playMobi.ajax({url:playMobi.baseUrl+'/leaderboard/getrange/',type:'get',data:{cmd:'leaderboard.getrange',token:playMobi.token,mode:gameMode,callback:customCallback,reference_id:refId,rows_above:rowsAbove,rows_below:rowsBelow,record_start:recStart,record_end:recEnd}});return true;}else{return false;}}
playMobi.leaderboard.getmodes=function(params){var customCallback='';var refId='';var gameMode='';if(params==undefined){return false;}
if(params.callback!=undefined){customCallback=params.callback;}else{return false;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(params.modes!=undefined){gameMode=params.modes;}
if(isArray(gameMode)){var tmp=gameMode.join(',');gameMode=tmp;}
if(playMobi.token!=null&&playMobi.token!=''){playMobi.ajax({url:playMobi.baseUrl+'/leaderboard/getmodes/',type:'get',data:{cmd:'leaderboard.modes',token:playMobi.token,callback:customCallback,reference_id:refId,mode:gameMode}});return true;}else{return false;}}
playMobi.leaderboard.display=function(params){var m='';var display='complete';var tokenVal='null';if(playMobi.token!=''){tokenVal=playMobi.token;}
if(typeof params=='object'){if(params.mode!=undefined){m=params.mode;}else{return false;}
if(params.display!=undefined){display=params.display;}
if(params.onclose!=undefined){playMobi.onDisplayClosedCallback=params.onclose;}}else{if(params==undefined||params==''){return false;}
m=params;}
if(display=='basic'){playMobi.createBasicDisplay(params);playMobi.ajax({url:playMobi.baseUrl+'/leaderboard/basicdisplay/',type:'get',data:{cmd:'leaderboard.basicdisplay',token:playMobi.token,gameid:playMobi.gameId,mode:m,platform:playMobi.device.info.platformClass,callback:playMobi.setBasicDisplayContent}});}else{var src=playMobi.baseUrl+'/leaderboard/display/'+playMobi.gameId+'/'+tokenVal+'/'+m;playMobi.display(src);}}
playMobi.leaderboard.validator.init=function(){try{if(typeof(localStorage)!=undefined){localStorage.removeItem("lqueue");}
playMobi.leaderboard.validator.queue={"begin":new Date().getTime(),"checkpoints":{}};return true;}catch(e){return false;}}
playMobi.leaderboard.validator.checkpoint=function(params){var k='';var v='';if(params==undefined){return false;}
if(params.key==undefined){return false;}else{k=params.key;}
if(params.data==undefined){return false;}else{v=params.data;}
if(k==''|v==''){return false;}
try{var l=playMobi.leaderboard.validator.queue.checkpoints.length;}catch(e){try{playMobi.leaderboard.validator.readin();var l=playMobi.leaderboard.validator.queue.checkpoints.length;}catch(ee){playMobi.leaderboard.validator.init();}}
try{var str='{"data":"'+v+'","timestamp":'+new Date().getTime()+'}';playMobi.leaderboard.validator.queue.checkpoints[k]=JSON.parse(str);return true;}catch(e){return false;}}
playMobi.leaderboard.validator.process=function(params){var playerScore='';var gameMode='';var scoreNotes='';var customCallback='';var resetQueue=false;var vQueue='';var q='';var refId='';if(params==undefined){return false;}
if(params.score==undefined){return false;}else{playerScore=params.score;}
if(params.mode!=undefined){gameMode=params.mode;}else{return false;}
if(params.label!=undefined){scoreNotes=params.label;}
if(params.reset!=undefined){resetQueue=params.reset;}
if(params.callback!=undefined){customCallback=params.callback;}else{customCallback='';}
if(params.reference_id!=undefined){refId=params.reference_id;}
try{if(playMobi.leaderboard.validator.queue.checkpoints==undefined){playMobi.leaderboard.validator.readin();}
if(playMobi.leaderboard.validator.queue.end==undefined){playMobi.leaderboard.validator.queue['end']=new Date().getTime();}}catch(e){return false;}
if(playMobi.token!=null||playMobi.token!=''){try{vQueue=btoa(JSON.stringify(playMobi.leaderboard.validator.queue));}catch(e){alert('Failed saving your score. Invalid validation format.');return false;}
playMobi.ajax({url:playMobi.baseUrl+'/leaderboard/validate/',type:'get',data:{cmd:'leaderboard.validator.process',token:playMobi.token,score:playerScore,gamemode:gameMode,notes:scoreNotes,queue:vQueue,callback:customCallback,reference_id:refId}});if(resetQueue){playMobi.leaderboard.validator.init();}
return true;}else{return false;}}
playMobi.leaderboard.validator.writeout=function(){try{localStorage.setItem('lqueue',btoa(JSON.stringify(playMobi.leaderboard.validator.queue)));return true;}catch(e){return false;}}
playMobi.leaderboard.validator.readin=function(){var s='';try{s=atob(localStorage.getItem('lqueue'));}catch(e){return false;}
if(s.length>0){try{s=JSON.parse(s);playMobi.leaderboard.validator.queue=s;return true;}catch(e){return false;}}else{return false;}}
playMobi.data.save=function(params){var k='';var v='';var customCallback='';var enc='base64';var refId='';var multiData='';var cData='';if(params==undefined){return false;}
if(params.c2==undefined){if(params.reference_id!=undefined){refId=params.reference_id;}
if(params.data_key==undefined||params.data_key==''){if(params.multi!=undefined&&params.multi!=''){multiData=btoa(JSON.stringify(params.multi));}else{return false;}}else{k=params.data_key;}
if(params.data_value!=undefined){v=params.data_value;v=params.data_value;if(typeof v==='object'){v=JSON.stringify(v);}
v=btoa(v);}
if(params.callback!=undefined){customCallback=params.callback;}}else{cData=params.c2;}
if(playMobi.token!=null&&playMobi.token!=''){if(k!=''||multiData!=''||cData!=''){playMobi.ajax({url:playMobi.baseUrl+'/gamedata/save/',type:'get',data:{cmd:'data.save',token:playMobi.token,datakey:k,datavalue:v,encoded:enc,callback:customCallback,reference_id:refId,c2:cData,multi_data:multiData}});return true;}else{return false;}}else{return true;}}
playMobi.data.get=function(params){var k='';var c='';var refId='';var multiData='';if(params==undefined){return false;}
if(params.data_key==undefined){return false;}else{k=params.data_key;}
if(isArray(k)){var tmpK=k.join(',');k=tmpK;}
if(params.callback!=undefined){c=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(playMobi.token!=null&&playMobi.token!=''){if(k!=''&&c!=''){playMobi.ajax({url:playMobi.baseUrl+'/gamedata/get/',type:'get',data:{cmd:'data.get',token:playMobi.token,datakey:k,callback:c,reference_id:refId}});return true;}else{return false;}}else{pmeval(c,{'cmd':'data.get','status_code':'E000','status_details':'Player not logged in','data':{},'reference_id':refId});return false;}}
playMobi.data.getKeys=function(params){var c='';var refId='';if(params==undefined){return false;}
if(params.callback!=undefined){c=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(playMobi.token!=null&&playMobi.token!=''){playMobi.ajax({url:playMobi.baseUrl+'/gamedata/keys/',type:'get',data:{cmd:'data.getkeys',token:playMobi.token,callback:c,reference_id:refId}});return true;}else{return false;}}
playMobi.data.load=function(params){var c='';var refId='';if(params==undefined){return false;}
if(params.callback!=undefined){c=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(playMobi.token!=null&&playMobi.token!=''){if(c!=''){playMobi.ajax({url:playMobi.baseUrl+'/gamedata/load/',type:'get',data:{cmd:'data.load',token:playMobi.token,callback:c,reference_id:refId}});return true;}else{return false;}}else{return false;}}
playMobi.data.remove=function(params){var k='';var c='';var refId='';if(params==undefined){return false;}
if(params.data_key==undefined){return false;}else{k=params.data_key;}
if(params.callback!=undefined){c=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(isArray(k)){var tmpK=k.join(',');k=tmpK;}
if(playMobi.token!=null&&playMobi.token!=''){if(k!=''){playMobi.ajax({url:playMobi.baseUrl+'/gamedata/remove/',type:'get',data:{cmd:'data.remove',token:playMobi.token,datakey:k,callback:c,reference_id:refId}});return true;}else{return false;}}else{return false;}}
playMobi.data.validator.init=function(){try{if(typeof(localStorage)!=undefined){localStorage.removeItem("dqueue");}
playMobi.data.validator.queue={"begin":new Date().getTime(),"checkpoints":{}};return true;}catch(e){return false;}}
playMobi.data.validator.checkpoint=function(params){var k='';var v='';if(params==undefined){return false;}
if(params.key==undefined){return false;}else{k=params.key;}
if(params.data==undefined){return false;}else{v=params.data;}
if(k==''|v==''){return false;}
try{var l=playMobi.data.validator.queue.checkpoints.length;}catch(e){try{playMobi.data.validator.readin();var l=playMobi.data.validator.queue.checkpoints.length;}catch(ee){playMobi.data.validator.init();}}
try{var str='{"data":"'+v+'","timestamp":'+new Date().getTime()+'}';playMobi.data.validator.queue.checkpoints[k]=JSON.parse(str);return true;}catch(e){return false;}}
playMobi.data.validator.process=function(params){var k='';var v='';var customCallback='';var resetQueue=false;var dQueue='';var refId='';if(params==undefined){return false;}
if(params.data_key==undefined){return false;}else{k=params.data_key;}
if(params.data_value==undefined){return false;}else{v=params.data_value;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(typeof v==='object'){v=JSON.stringify(v);}
v=btoa(v);if(params.reset!=undefined){resetQueue=params.reset;}
if(params.callback!=undefined){customCallback=params.callback;}else{customCallback='';}
try{if(playMobi.data.validator.queue.checkpoints==undefined){playMobi.data.validator.readin();}
if(playMobi.data.validator.queue.end==undefined){playMobi.data.validator.queue['end']=new Date().getTime();}}catch(e){return false;}
if(playMobi.token!=null||playMobi.token!=''){try{dQueue=btoa(JSON.stringify(playMobi.data.validator.queue));}catch(e){alert('Failed saving your score. Invalid validation format.');return false;}
playMobi.ajax({url:playMobi.baseUrl+'/gamedata/validate/',type:'get',data:{cmd:'data.validator.process',token:playMobi.token,datakey:k,datavalue:v,queue:dQueue,encoded:'base64',callback:customCallback,reference_id:refId}});if(resetQueue){playMobi.data.validator.init();}
return true;}else{return false;}}
playMobi.data.validator.writeout=function(){try{localStorage.setItem('dqueue',btoa(JSON.stringify(playMobi.data.validator.queue)));return true;}catch(e){return false;}}
playMobi.data.validator.readin=function(){var s='';try{s=atob(localStorage.getItem('dqueue'));}catch(e){return false;}
if(s.length>0){try{s=JSON.parse(s);playMobi.data.validator.queue=s;return true;}catch(e){return false;}}else{return false;}}
playMobi.achievements.save=function(params){var aId='';var percent='100';var customCallback='';var refId='';if(params==undefined){return false;}
if(params.id==undefined){return false;}else{aId=params.id;}
if(params.percent!=undefined){percent=params.percent;}
if(params.callback!=undefined){customCallback=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(playMobi.token!=null&&playMobi.token!=''){if(percent==''){percent='100';}
if(aId!=''){playMobi.ajax({url:playMobi.baseUrl+'/achievements/save/',type:'get',data:{cmd:'achievements.save',token:playMobi.token,id:aId,percentcomplete:percent,callback:customCallback,reference_id:refId}});return true;}else{return false;}}else{return false;}}
playMobi.achievements.check=function(params){var aId='';var customCallback='';var refId='';if(params==undefined){return false;}
if(params.id==undefined){return false;}else{aId=params.id;}
if(params.callback!=undefined){customCallback=params.callback;}
if(params.reference_id!=undefined){refId=params.reference_id;}
if(playMobi.token!=null&&playMobi.token!=''){if(aId!=''){playMobi.ajax({url:playMobi.baseUrl+'/achievements/check/',type:'get',data:{cmd:'achievements.check',token:playMobi.token,id:aId,callback:customCallback,reference_id:refId}});return true;}else{return false;}}else{return false;}}
playMobi.achievements.get=function(params){var customCallback='';var returnAll='true';var refId='';if(params==undefined){return false;}
if(params.callback!=undefined){customCallback=params.callback;}
if(params.return_all!=undefined){if(params.return_all){returnAll='true';}}
if(params.reference_id!=undefined){refId=params.reference_id;}
playMobi.ajax({url:playMobi.baseUrl+'/achievements/get/',type:'get',data:{cmd:'achievements.get',token:playMobi.token,gameid:'FED2CB5A-6CEA-411C-A74A-3C331722A37C',returnall:returnAll,callback:customCallback,reference_id:refId}});return true;}
playMobi.achievements.clear=function(customCallback){if(playMobi.token!=null&&playMobi.token!=''){playMobi.ajax({url:playMobi.baseUrl+'/achievements/clear/',type:'get',data:{cmd:'achievements.clear',token:playMobi.token,callback:customCallback}});return true;}else{return false;}}
playMobi.achievements.display=function(params){var m='';var display='complete';var tokenVal='null';if(playMobi.token!=''){tokenVal=playMobi.token;}
if(typeof params=='object'){if(params.mode!=undefined){m=params.mode;}
if(params.display!=undefined){display=params.display;}
if(params.onclose!=undefined){playMobi.onDisplayClosedCallback=params.onclose;}}else{if(params==undefined){return false;}
m=params;}
if(display=='basic'){playMobi.createBasicDisplay(params);if(tokenVal==null){tokenVal='null';}
playMobi.ajax({url:playMobi.baseUrl+'/achievements/basicdisplay/',type:'get',data:{cmd:'achievements.basicdisplay',token:tokenVal,gameid:playMobi.gameId,mode:m,callback:playMobi.setBasicDisplayContent}});}else{var src=playMobi.baseUrl+'/achievements/display/'+playMobi.gameId+'/'+tokenVal+'/'+m;playMobi.display(src);}}
playMobi.achievements.validator.init=function(){try{if(typeof(localStorage)!=undefined){localStorage.removeItem("aqueue");}
playMobi.achievements.validator.queue={"begin":new Date().getTime(),"checkpoints":{}};return true;}catch(e){return false;}}
playMobi.achievements.validator.checkpoint=function(params){var k='';var v='';if(params==undefined){return false;}
if(params.key==undefined){return false;}else{k=params.key;}
if(params.data==undefined){return false;}else{v=params.data;}
if(k==''|v==''){return false;}
try{var l=playMobi.achievements.validator.queue.checkpoints.length;}catch(e){try{playMobi.achievements.validator.readin();var l=playMobi.achievements.validator.queue.checkpoints.length;}catch(ee){playMobi.achievements.validator.init();}}
try{var str='{"data":"'+v+'","timestamp":'+new Date().getTime()+'}';playMobi.achievements.validator.queue.checkpoints[k]=JSON.parse(str);return true;}catch(e){return false;}}
playMobi.achievements.validator.writeout=function(){try{localStorage.setItem('aqueue',btoa(JSON.stringify(playMobi.achievements.validator.queue)));return true;}catch(e){return false;}}
playMobi.achievements.validator.readin=function(){var s='';try{s=atob(localStorage.getItem('aqueue'));}catch(e){return false;}
if(s.length>0){try{s=JSON.parse(s);playMobi.achievements.validator.queue=s;return true;}catch(e){return false;}}else{return false;}}
playMobi.achievements.validator.process=function(params){var aId='';var percent='';var customCallback='';var resetQueue=false;var vQueue='';var q='';var refId='';if(params==undefined){return false;}
if(params.id==undefined){return false;}else{aId=params.id;}
if(params.reset!=undefined){resetQueue=params.reset;}
if(params.callback!=undefined){customCallback=params.callback;}else{customCallback='';}
if(params.reference_id!=undefined){refId=params.reference_id;}
try{if(playMobi.achievements.validator.queue.checkpoints==undefined){playMobi.achievements.validator.readin();}
if(playMobi.achievements.validator.queue.end==undefined){playMobi.achievements.validator.queue['end']=new Date().getTime();}}catch(e){return false;}
if(playMobi.token!=null||playMobi.token!=''){try{vQueue=btoa(JSON.stringify(playMobi.achievements.validator.queue));}catch(e){alert('Failed saving your achievement. Invalid validation format.');return false;}
playMobi.ajax({url:playMobi.baseUrl+'/achievements/validate/',type:'get',data:{cmd:'achievements.validator.process',token:playMobi.token,id:aId,percentcomplete:'100',queue:vQueue,callback:customCallback,reference_id:refId}});if(resetQueue){playMobi.achievements.validator.init();}
return true;}else{return false;}}
playMobi.social.facebook.init=function(){document.addEventListener('appMobi.facebook.login',playMobi.social.facebook.onLogin,false);document.addEventListener('appMobi.facebook.request.response',playMobi.social.facebook.processResponse,false);playMobi.facebookEnabled=true;}
playMobi.social.facebook.login=function(params){if(params!=undefined){if(params.callback!=undefined){playMobi.onFacebookConnectCB=params.callback;}}
if(!playMobi.facebookEnabled){playMobi.social.facebook.init();}
playMobi.currentFacebookCall='auth';AppMobi.facebook.login('email, publish_stream, publish_actions, offline_access');}
playMobi.social.facebook.onLogin=function(r){if(r.success==true){try{if(typeof(r.token)!="undefined"){playMobi.fbAccessToken=r.token;}else{playMobi.fbAccessToken=r.data.authResponse.accessToken;}
if(playMobi.fbAccessToken.length==0){alert('Unable to attain Facebook authentication at this time.');return false;}
AppMobi.facebook.requestWithGraphAPI("/me/","GET",{});}catch(e){alert('Unable to login to Facebook at this time.');}}}
playMobi.social.facebook.processResponse=function(r){try{if(typeof r.data=='string'){r.data=JSON.parse(r.data);}
switch(playMobi.currentFacebookCall){case'auth':if(r.data.email!=undefined){playMobiOTA.verify(r.data.email,function(data){});playMobi.onConnectFB=true;playMobi.fbUserId=r.data.id;playMobiOTA.authenticateFacebook(r.data.email,r.data.id,playMobi.player.otaCallback);}else{alert('Login failed. Unable to access your Facebook email.');}
break;case'post':if(playMobi.facebookPostCallback!=''){var d={success:r.success,data:r.data};pmeval(playMobi.facebookPostCallback,JSON.stringify(d));}
break;}
playMobi.currentFacebookCall='';}catch(e){cl('FB Response Error',e);}}
playMobi.social.facebook.logout=function(){playMobi.player.disconnect();AppMobi.facebook.logout();}
playMobi.social.facebook.processPostResponse=function(r){if(playMobi.facebookPostCallback!=''){pmval(playMobi.facebookPostCallback);}}
playMobi.social.facebook.post=function(params){try{if(params==undefined){return false;}
if(params.title!=undefined&&params.name==undefined){params.name=params.title;}
if(params.picture==undefined){return false;}
if(params.link==undefined){return false;}
if(params.name==undefined){return false;}
if(params.message==undefined){return false;}
if(params.description==undefined){params.description='';}
playMobi.facebookPostCallback='';if(params.callback!=undefined){playMobi.facebookPostCallback=params.callback;}
var body={};body.name=params.name;body.message=params.message;body.picture=params.picture;body.link=params.link;body.description=params.description;AppMobi.facebook.requestWithGraphAPI("/me/feed","POST",body);playMobi.currentFacebookCall='post';}catch(e){cl(e);}}
playMobi.social.facebook.updateFriends=function(){if(playMobi.fbAccessToken!=''){playMobi.ajax({url:playMobi.baseUrl+'/facebook/updatefriends/',type:'get',data:{token:playMobi.token,fbToken:playMobi.fbAccessToken}});}}
playMobi.social.facebook.friendsScores=function(params){var refId='';var ret=false;if(params==undefined){return false;}
if(params.callback==undefined){return false;}
if(params.mode==undefined){return false;}
if(params.reference_id!=undefined){refId=params.reference_id;}
playMobi.ajax({url:playMobi.baseUrl+'/facebook/friendsscores/',type:'get',data:{cmd:'playMobi.social.facebook.friendsScores',callback:params.callback,mode:params.mode,token:playMobi.token,reference_id:refId}});ret=true;return ret;}
playMobi.social.twitter.post=function(params){var link='';var message='';try{if(params==undefined){return false;}
if(params.message==undefined){return false;}else{message=encodeURIComponent(params.message);}
if(params.link!=undefined){link=encodeURIComponent(params.link);}
var url='https://twitter.com/share?text='+message;if(link!=''){url+='&url='+link;}
if(playMobi.device.info.isNative){var x=(screen.width/2)-30;var y=(screen.height-70);var xLandscape=(screen.height/2)-30;var yLandscape=(screen.width-70);AppMobi.device.showRemoteSiteExt(url,x,y,xLandscape,yLandscape);return false;}
window.open(url,'_blank',false);}catch(e){cl(e);}}
playMobi.display=function(src){var buttonPos=screen.width-64;var isDroid='';if(playMobi.device.info.isNative){var x=(screen.width)-64;var xLandscape=(screen.height);if(AppMobi.device.model.toLowerCase().match('nook')!=null){xLandscape=960;}
src+='/appmobi';if(AppMobi.device.platform.toLowerCase()=='android'){}
src+='/2';if(AppMobi.device.platform.toLowerCase()=='web'){window.open(src+'/'+playMobi.device.info.platformClass);}else{AppMobi.device.showRemoteSiteExt(src,x,20,xLandscape,20,1,1);}}else{window.open(src+'/'+playMobi.device.info.platformClass);}}
playMobi.onDisplayClosed=function(){if(playMobi.onDisplayClosedCallback!=''){pmeval(playMobi.onDisplayClosedCallback);playMobi.onDisplayClosedCallback='';}}
function trim(str){return str.replace(/^\s\s*/,'').replace(/\s\s*$/,'');}
function qs(name){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(window.location.href);if(results==null)
return"";else
return decodeURIComponent(results[1].replace(/\+/g," "));}
playMobi.getCookie=function(check_name){if(playMobi.device.info.isNative){return AppMobi.cache.getCookie(check_name);}else{var a_all_cookies=document.cookie.split(';');var a_temp_cookie='';var cookie_name='';var cookie_value='';var b_cookie_found=false;var i='';for(i=0;i<a_all_cookies.length;i++){a_temp_cookie=a_all_cookies[i].split('=');cookie_name=a_temp_cookie[0].replace(/^\s+|\s+$/g,'');if(cookie_name==check_name){b_cookie_found=true;if(a_temp_cookie.length>1){cookie_value=unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g,''));}
return cookie_value;break;}
a_temp_cookie=null;cookie_name='';}
if(!b_cookie_found){return null;}}};playMobi.setCookie=function(name,value){if(playMobi.device.info.isNative){AppMobi.cache.setCookie(name,value,-1);}else{var today=new Date();today.setTime(today.getTime());expires=365*1000*60*60*24;path="/";var expires_date=new Date(today.getTime()+(expires));document.cookie=name+"="+escape(value)+
((expires)?"; expires="+expires_date.toGMTString():"");}};playMobi.deleteCookie=function(name){if(playMobi.device.info.isNative){AppMobi.cache.removeCookie(name);}else{var today=new Date();today.setTime(today.getTime());expires=365*1000*60*60*24;path="/";var expires_date=new Date(today.getTime()+(-1*24*60*60*1000));document.cookie=name+"=";((expires)?"; expires="+expires_date.toGMTString():"");}};playMobi.clearCookies=function(){if(playMobi.device.info.isNative){AppMobi.cache.removeCookie('oneTouchId');AppMobi.cache.removeCookie('OneTouchGuid');AppMobi.cache.removeCookie('playMobiId');AppMobi.cache.removeCookie('connectSplash');}else{playMobi.deleteCookie('oneTouchId');playMobi.deleteCookie('OneTouchGuid');playMobi.deleteCookie('playMobiId');playMobi.deleteCookie('connectSplash');}}
playMobi.ajax=function(params){var online=true;try{if(!navigator.onLine){online=false;}}catch(e){}
if(playMobi.apiEnabled){if(playMobi.lastApiCmdCalled==params.data.cmd){playMobi.loopedCalls++;playMobi.loopTimer=setTimeout("playMobi.resetLoopCheck();",3000);}else{playMobi.resetLoopCheck();}
if(playMobi.loopedCalls<10){if(online){if(params.data.callback!=undefined){if(params.data.callback.length>0){var tmpGuid=guidGenerator();playMobi.callbackArray.push({'refId':tmpGuid,'callback':params.data.callback,'type':typeof params.data.callback});params.data.callback=tmpGuid;}}
ajax({url:params.url,data:params.data});}else{if(params.data.callback!=undefined){pmeval(params.data.callback,{'cmd':params.data.cmd,'status_code':'E008','status_details':'Offline','data':''});}}}else{alert('**ERROR** You are repeatedly calling '+params.data.cmd+' from a loop causing an error. Further playMobi API requests have been disabled. Please fix your code so that api request are not called repeatedly within a loop. You will need to reload your game after you have corrected your code.');playMobi.apiEnabled=false;}
playMobi.lastApiCmdCalled=params.data.cmd;}}
playMobi.resetLoopCheck=function(){playMobi.loopedCalls=0;playMobi.lastApiCmdCalled='';clearTimeout(playMobi.loopTimer);}
playMobi.callbackHandler=function(refId,d){for(var x=0;x<playMobi.callbackArray.length;x++){if(playMobi.callbackArray[x].refId==refId){if(playMobi.callbackArray[x].type=='string'){playMobi.callbackArray[x].callback=playMobi.callbackArray[x].callback.replace("();","");if(playMobi.callbackArray[x].callback.indexOf("[")>0){playMobi.callbackArray[x].callback(d);}else if(playMobi.callbackArray[x].callback.indexOf(".")>0){var a=playMobi.callbackArray[x].callback.split('.');switch(a.length){case 4:window[a[0]][a[1]][a[2]][a[3]](d);break;case 3:window[a[0]][a[1]][a[2]](d);break;case 2:window[a[0]][a[1]](d);break;}}else{window[playMobi.callbackArray[x].callback](d);}}else{playMobi.callbackArray[x].callback(d);}
playMobi.callbackArray.splice(x,1);break;}}}
function isArray(o){return Object.prototype.toString.call(o)==='[object Array]';}
function pmeval(p,d){var data={};if(d!=undefined){data=d;}
try{if(d!=undefined){data=JSON.parse(d);}}catch(e){if(d!=undefined){data=d;}}
if(typeof p=='string'){p=p.replace("();","");if(p.indexOf(".")>0){var a=p.split('.');switch(a.length){case 4:window[a[0]][a[1]][a[2]][a[3]](data);break;case 3:window[a[0]][a[1]][a[2]](data);break;case 2:window[a[0]][a[1]](data);break;default:window[p](data);break;}}else{window[p](data);}}else{p(data);}}
function guidGenerator(){var S4=function(){return(((1+Math.random())*0x10000)|0).toString(16).substring(1);};return(S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());}
function ajax(params){var script=document.createElement("script");var head=window.document.getElementsByTagName('head')[0];var id=Math.floor(Math.random()*999999999999999);script.id=id;script.src=params.url+'?'+objToQueryString(params.data)+'&rnd='+id;head.appendChild(script);setTimeout("removeScript('"+id+"')",500);}
function removeScript(id){var head=window.document.getElementsByTagName('head')[0];var script=window.document.getElementById(id);head.removeChild(script);}
function objToQueryString(obj,prefix){var str=[];for(var p in obj){var k=prefix?prefix+"["+p+"]":p,v=obj[p];str.push(typeof v=="object"?objToQueryString(v,k):encodeURIComponent(k)+"="+encodeURIComponent(v));}
return str.join("&");}
function emailifyScreenName(str){return str.replace(/[^a-z0-9]/gi,'');}
function pmpause(millis)
{var date=new Date();var curDate=null;do{curDate=new Date();}
while(curDate-date<millis);}
if(typeof btoa=='undefined'){function btoa(str){var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var encoded=[];var c=0;while(c<str.length){var b0=str.charCodeAt(c++);var b1=str.charCodeAt(c++);var b2=str.charCodeAt(c++);var buf=(b0<<16)+((b1||0)<<8)+(b2||0);var i0=(buf&(63<<18))>>18;var i1=(buf&(63<<12))>>12;var i2=isNaN(b1)?64:(buf&(63<<6))>>6;var i3=isNaN(b2)?64:(buf&63);encoded[encoded.length]=chars.charAt(i0);encoded[encoded.length]=chars.charAt(i1);encoded[encoded.length]=chars.charAt(i2);encoded[encoded.length]=chars.charAt(i3);}return encoded.join('');}}if(typeof atob=='undefined'){function atob(str){var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var invalid={strlen:(str.length%4!=0),chars:new RegExp('[^'+chars+']').test(str),equals:(/=/.test(str)&&(/=[^=]/.test(str)||/={3}/.test(str)))};if(invalid.strlen||invalid.chars||invalid.equals)throw new Error('Invalid base64 data');var decoded=[];var c=0;while(c<str.length){var i0=chars.indexOf(str.charAt(c++));var i1=chars.indexOf(str.charAt(c++));var i2=chars.indexOf(str.charAt(c++));var i3=chars.indexOf(str.charAt(c++));var buf=(i0<<18)+(i1<<12)+((i2&63)<<6)+(i3&63);var b0=(buf&(255<<16))>>16;var b1=(i2==64)?-1:(buf&(255<<8))>>8;var b2=(i3==64)?-1:(buf&255);decoded[decoded.length]=String.fromCharCode(b0);if(b1>=0)decoded[decoded.length]=String.fromCharCode(b1);if(b2>=0)decoded[decoded.length]=String.fromCharCode(b2);}return decoded.join('');}}