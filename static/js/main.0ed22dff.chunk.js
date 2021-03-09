(this.webpackJsonpopenweather=this.webpackJsonpopenweather||[]).push([[0],{23:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),i=n.n(r),s=n(14),o=n(2),l=n(6),u="https://api.openweathermap.org",d="".concat(u,"/data/2.5/onecall?units=imperial&exclude=hourly,minutely,alerts&appid=").concat("48db6016cb32f4b78da9eae4ccd4859d"),j="".concat(u,"/data/2.5/forecast?units=imperial&appid=").concat("48db6016cb32f4b78da9eae4ccd4859d"),b={"01d":"wi-owm-day-800","01n":"wi-night-clear","02d":"wi-day-cloudy","02n":"wi-night-alt-cloudy","03d":"wi-cloud","03n":"wi-cloud","04d":"wi-cloudy","04n":"wi-cloudy","09d":"wi-rain","09n":"wi-rain","10d":"wi-day-rain","10n":"wi-night-alt-rain","11d":"wi-day-thunderstorm","11n":"wi-night-alt-storm-showers","13d":"wi-snowflake-cold","13n":"wi-snowflake-cold","50d":"wi-fog"},h=(n(23),n(10)),p=n.n(h),f=n(15),O=n(33),m=n.n(O),g=function(e,t){var n=function(e,t){return/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(e+","+t)},a=function(e,t){return e&&t&&n(e,t)?[e,t]:[null,null]},r=Object(c.useState)(a(e,t)[0]),i=Object(l.a)(r,2),s=i[0],o=i[1],u=Object(c.useState)(a(e,t)[1]),d=Object(l.a)(u,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){n(e,t)&&(console.log("set LAT LNG",e,t),o(e),b(t))}),[e,t]),Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.geolocation.getCurrentPosition(function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(t.coords.latitude),b(t.coords.longitude);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(){return console.log("error getting location")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s||j||(console.log("!lat && !lng ",s,j),e())}),[s,j]),[s,j]},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=g(t,n),r=Object(l.a)(a,2),i=r[0],s=r[1],o=Object(c.useState)(null),u=Object(l.a)(o,2),d=u[0],j=u[1];return Object(c.useEffect)((function(){i&&s&&function(){var e=Object(f.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get(t);case 3:n=e.sent,(c=n.data)&&j(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()("".concat(e,"&lat=").concat(i,"&lon=").concat(s))}),[i,s,e]),[d,i,s]},v=n(1),w=function(){var e=Object(o.f)(),t=e.lt,n=e.lg,c=x(d,t,n),a=Object(l.a)(c,3),r=a[0];a[1],a[2];if(!r||!r.current)return Object(v.jsx)("div",{children:"Loading..."});var i=r.current,s=i.feels_like,u=i.temp,j=i.weather[0].icon;return Object(v.jsxs)("div",{className:"ui weather-card",children:[Object(v.jsx)("div",{className:"weather-label",children:"Current Weather"}),Object(v.jsx)("div",{className:"ui  weather-header",children:Object(v.jsxs)("div",{className:"ball ui list",children:[Object(v.jsx)("div",{className:"item",children:Object(v.jsx)("i",{className:"weather-icon wi ".concat(b[j])})}),Object(v.jsxs)("div",{className:"item weather-temp",children:[Math.ceil(u)," ",Object(v.jsx)("span",{className:"degree"}),"F"]}),Object(v.jsxs)("div",{className:"item ",children:["Real Feel ",Math.ceil(s),Object(v.jsx)("span",{className:"degree"}),"F"]})]})})]})},y=(n(67),function(){var e=Object(o.f)(),t=e.lt,n=e.lg,c=x(j,t,n),a=Object(l.a)(c,3),r=a[0],i=a[1],s=a[2];if(console.log("FORCAST lt, lg",t,n,i,s),!r)return Object(v.jsx)("div",{children:"Loading..."});return Object(v.jsxs)("div",{className:"ui segments",children:[Object(v.jsx)("div",{className:"ui segment",children:Object(v.jsxs)("p",{children:["Forecast ",r.city.name," "]})}),Object(v.jsx)("div",{className:"ui segments",children:function(){var e={month:"numeric",day:"numeric"},t=r.list.map((function(t){var n=new Date(1e3*t.dt);return Object(v.jsxs)("div",{className:"ui fluid three item menu ",children:[Object(v.jsxs)("div",{className:" item forecast-card-dt-tm",children:[Object(v.jsx)("p",{children:n.toLocaleTimeString([],{hour:"2-digit"})}),Object(v.jsx)("p",{children:n.toLocaleDateString(void 0,e)})," "]}),Object(v.jsx)("span",{className:"item",children:Object(v.jsx)("i",{className:"weather-icon wi ".concat(b[t.weather[0].icon])})}),Object(v.jsxs)("span",{className:"item flex-top weather-temp",children:[Object(v.jsx)("span",{children:Math.ceil(t.main.temp)}),Object(v.jsx)("span",{className:"degree-dark"}),"F"]})]},t.dt)}));return Object(v.jsx)("div",{children:t})}()})]})}),N=n(37),k=n(18),L=n(17),S=(n(68),n(69),["places"]),T=function(e){var t=e.panTo,n=Object(k.a)({requestOptions:{location:{lat:function(){return 43.653225},lng:function(){return-79.383186}},radius:2e5}}),c=n.ready,a=n.value,r=n.suggestions,i=r.status,s=r.data,o=n.setValue,l=n.clearSuggestions;return console.log("SEARCH"),Object(v.jsx)("div",{className:"search",children:Object(v.jsxs)(L.a,{onSelect:function(){var e=Object(f.a)(p.a.mark((function e(n){var c,a,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(n,!1),l(),e.prev=2,e.next=5,Object(k.b)({address:n});case 5:return c=e.sent,e.next=8,Object(k.c)(c[0]);case 8:a=e.sent,r=a.lat,i=a.lng,t({lat:r,lng:i}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(v.jsx)(L.b,{value:a,onChange:function(e){o(e.target.value)},disabled:!c,placeholder:"enter an address"}),Object(v.jsx)(L.e,{children:Object(v.jsx)(L.c,{children:"OK"===i&&s.map((function(e,t){var n=e.description;return Object(v.jsx)(L.d,{value:n},t)}))})})]})})},C=function(e){var t=e.panTo,n=Object(N.a)({googleMapsApiKey:"AIzaSyCOTqgy9PjytmyDwBKyrnITDcRn85g52Lk",libraries:S}),c=n.isLoaded;return n.loadError?"Error loading maps":c?Object(v.jsx)("div",{children:Object(v.jsx)(T,{panTo:t})}):"Loading maps"},E=(n(70),function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],i=a.a.useCallback((function(e){var t=e.lat,n=e.lng;console.log("lat, lng",t,n),document.title="Lat: ".concat(t," Lng: ").concat(n);var c=window.location.hash.split("/").filter((function(e){return"forecast"===e})).length;r([t,n].join("/")),window.location.hash="#/".concat(c?"forecast/":"").concat([t,n].join("/"))}),[]);return Object(c.useEffect)((function(){var e=window.location.hash.split("/").filter((function(e){return"#"!==e&&"forecast"!==e&&"today"!==e&&e.length})).join("/"),t=e.split("/"),c=Object(l.a)(t,2),a=c[0],i=c[1];document.title="Lat: ".concat(a," Lng: ").concat(i),r(e),console.log("PATH",n)}),[n]),Object(v.jsxs)("div",{className:"ui secondary pointing menu stackable ow-menu",children:[Object(v.jsx)(s.b,{to:"/".concat(n),className:"item",children:"Current Weather"}),Object(v.jsx)(s.b,{to:"/forecast/".concat(n),className:"item",children:"Forecast"}),Object(v.jsx)("div",{className:"right item",children:Object(v.jsx)(C,{panTo:i})})]})});var A=function(){return Object(v.jsx)("div",{className:"App ui container",children:Object(v.jsxs)(s.a,{children:[Object(v.jsx)(E,{}),Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/forecast/:lt?/:lg?",component:y}),Object(v.jsx)(o.a,{path:"/:lt?/:lg?",exact:!0,component:w})]})]})})};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.0ed22dff.chunk.js.map