var SkyIdAnalytics={init:function(){this.initialiseAnalytics(),this.addPageLoadEvents()},initialiseAnalytics:function(){var e=window.skyTags=window.skyTags||{};e.queue=e.queue||[],e.snippetVersion="1.0",e.emitter=e.emitter||{registry:{},on:function(e,t){var n=this.registry,a=n[e];a?n[e].push(t):n[e]=[t]}},e.queue.push(["init"])},pageLoadEvent:function(){if(""===SKY_ANALYTICS.pageName||""===SKY_ANALYTICS.service)return!1;var e={page:{name:SKY_ANALYTICS.pageName,breadcrumb:["skyid"]}};return skyTags.queue.push(["set",e]),skyTags.queue.push(["event",{type:"view"}],["track"]),!0},addPageLoadEvents:function(){SkyIdAnalytics.addEvent(window,"load",SkyIdAnalytics.pageLoadEvent)},addEvent:function(e,t,n,a){var a=a||!1;e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,n)}};