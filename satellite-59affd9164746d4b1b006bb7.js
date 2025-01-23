_satellite.pushAsyncScript(function(event, target, $variables){
  var mbox = (dtmFlat["page.custom.adobeTarget.mbox"]) ? dtm.page.custom.adobeTarget.mbox : undefined;
var param1 = (dtmFlat["page.custom.adobeTarget.content"]) ? dtm.page.custom.adobeTarget.content : undefined;
var param2 = _satellite.getDataElement("pageName");

_satellite.notify("targetView [ mbox:" + mbox +", param1: " + param1 + ", param2: " + param2 +"]"); 

if( typeof mbox !== "undefined" 
   && typeof param1 !== "undefined" && typeof param2 !== "undefined" ){
  
//adobe.target.trackEvent({
//    "mbox": mbox,
//   "params": {
//        "param1": param1,
//        "param2": param2,
//        "param3": "view" 
//    }
//});
  
}
});
