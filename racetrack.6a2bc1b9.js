parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"iZc8":[function(require,module,exports) {
"use strict";require("../../sass/main.scss");let t=["Secretariat","Eclipse","West Australian","Flying Fox","Seabiscuit"],e=0;const n={startBtn:document.querySelector(".js-start-race"),winner:document.querySelector(".js-winner"),progress:document.querySelector(".js-progress"),resultTable:document.querySelector(".js-result-table > tbody")};function r(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function o(){e+=1;const n=t.map(s);console.log(n),i(""),c("🚴‍♂️ Заезд начался, ставки не принимаются"),u(n),a(n)}function s(t){return new Promise(e=>{const n=r(2e3,3500);setTimeout(()=>{e({horse:t,time:n})},n)})}function c(t){n.progress.textContent=t}function i(t){n.winner.textContent=t}function u(t){Promise.race(t).then(({horse:t,time:r})=>{n.winner.textContent=`💪 Победил ${t}, финишировал за ${r} времени`,l({horse:t,time:r,raceCounter:e})})}function a(t){Promise.all(t).then(()=>{n.progress.textContent="❌ Заезд окончен, принимаются ставки"})}function l({horse:t,time:r}){const o=`<tr><td>${e}</td><td>${t}</td><td>${r}</td></tr>`;n.resultTable.insertAdjacentHTML("beforeend",o)}n.startBtn.addEventListener("click",o);
},{"../../sass/main.scss":"clu1"}]},{},["iZc8"], null)
//# sourceMappingURL=/js-lessons/racetrack.6a2bc1b9.js.map