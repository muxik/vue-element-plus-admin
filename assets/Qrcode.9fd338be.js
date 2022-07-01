import{d as t,a7 as e,r as n,H as r,v as o,x as i,aV as s,aG as a,o as l,c as u,k as c,Z as d,n as f,a as h,e as g,g as p,t as m,Y as w,a0 as v,j as y,M as E,ce as b,c2 as x,b as C,w as A,l as B,bW as T}from"./index.c89981a6.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as M}from"./ContentWrap.81130664.js";import{E as P,a as N}from"./el-col.f8fe7e78.js";import{E as R}from"./el-card.377296af.js";import{_ as L}from"./logo.c0795b00.js";import"./el-popper.bf812a74.js";import"./index.ae55fe18.js";var S={},_={},U={};let D;const k=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];U.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},U.getSymbolTotalCodewords=function(t){return k[t]},U.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},U.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');D=t},U.isKanjiModeEnabled=function(){return void 0!==D},U.toSJIS=function(t){return D(t)};var z,q={};function H(){this.buffer=[],this.length=0}(z=q).L={bit:1},z.M={bit:0},z.Q={bit:3},z.H={bit:2},z.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},z.from=function(t,e){if(z.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return z.L;case"m":case"medium":return z.M;case"q":case"quartile":return z.Q;case"h":case"high":return z.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(n){return e}},H.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var j=H;function F(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}F.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},F.prototype.get=function(t,e){return this.data[t*this.size+e]},F.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},F.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var Y=F,J={};!function(t){const e=U.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];const n=Math.floor(t/7)+2,r=e(t),o=145===r?26:2*Math.ceil((r-13)/(2*n-2)),i=[r-7];for(let e=1;e<n-1;e++)i[e]=i[e-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){const n=[],r=t.getRowColCoords(e),o=r.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)0===t&&0===e||0===t&&e===o-1||t===o-1&&0===e||n.push([r[t],r[e]]);return n}}(J);var K={};const O=U.getSymbolSize;K.getPositions=function(t){const e=O(t);return[[0,0],[e-7,0],[0,e-7]]};var V={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e=3,n=3,r=40,o=10;function i(e,n,r){switch(e){case t.Patterns.PATTERN000:return(n+r)%2==0;case t.Patterns.PATTERN001:return n%2==0;case t.Patterns.PATTERN010:return r%3==0;case t.Patterns.PATTERN011:return(n+r)%3==0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case t.Patterns.PATTERN101:return n*r%2+n*r%3==0;case t.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case t.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){const n=t.size;let r=0,o=0,i=0,s=null,a=null;for(let l=0;l<n;l++){o=i=0,s=a=null;for(let u=0;u<n;u++){let n=t.get(l,u);n===s?o++:(o>=5&&(r+=e+(o-5)),s=n,o=1),n=t.get(u,l),n===a?i++:(i>=5&&(r+=e+(i-5)),a=n,i=1)}o>=5&&(r+=e+(o-5)),i>=5&&(r+=e+(i-5))}return r},t.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){const e=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==e&&0!==e||r++}return r*n},t.getPenaltyN3=function(t){const e=t.size;let n=0,o=0,i=0;for(let r=0;r<e;r++){o=i=0;for(let s=0;s<e;s++)o=o<<1&2047|t.get(r,s),s>=10&&(1488===o||93===o)&&n++,i=i<<1&2047|t.get(s,r),s>=10&&(1488===i||93===i)&&n++}return n*r},t.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let r=0;r<n;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/n/5)-10)*o},t.applyMask=function(t,e){const n=e.size;for(let r=0;r<n;r++)for(let o=0;o<n;o++)e.isReserved(o,r)||e.xor(o,r,i(t,o,r))},t.getBestMask=function(e,n){const r=Object.keys(t.Patterns).length;let o=0,i=1/0;for(let s=0;s<r;s++){n(s),t.applyMask(s,e);const r=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),r<i&&(i=r,o=s)}return o}}(V);var Q={};const $=q,Z=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],W=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Q.getBlocksCount=function(t,e){switch(e){case $.L:return Z[4*(t-1)+0];case $.M:return Z[4*(t-1)+1];case $.Q:return Z[4*(t-1)+2];case $.H:return Z[4*(t-1)+3];default:return}},Q.getTotalCodewordsCount=function(t,e){switch(e){case $.L:return W[4*(t-1)+0];case $.M:return W[4*(t-1)+1];case $.Q:return W[4*(t-1)+2];case $.H:return W[4*(t-1)+3];default:return}};var X={},G={};const tt=new Uint8Array(512),et=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)tt[e]=t,et[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)tt[e]=tt[e-255]}(),G.log=function(t){if(t<1)throw new Error("log("+t+")");return et[t]},G.exp=function(t){return tt[t]},G.mul=function(t,e){return 0===t||0===e?0:tt[et[t]+et[e]]},function(t){const e=G;t.mul=function(t,n){const r=new Uint8Array(t.length+n.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<n.length;i++)r[o+i]^=e.mul(t[o],n[i]);return r},t.mod=function(t,n){let r=new Uint8Array(t);for(;r.length-n.length>=0;){const t=r[0];for(let i=0;i<n.length;i++)r[i]^=e.mul(n[i],t);let o=0;for(;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},t.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let o=0;o<n;o++)r=t.mul(r,new Uint8Array([1,e.exp(o)]));return r}}(X);const nt=X;function rt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}rt.prototype.initialize=function(t){this.degree=t,this.genPoly=nt.generateECPolynomial(this.degree)},rt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=nt.mod(e,this.genPoly),r=this.degree-n.length;if(r>0){const t=new Uint8Array(this.degree);return t.set(n,r),t}return n};var ot=rt,it={},st={},at={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},lt={};let ut="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ut=ut.replace(/u/g,"\\u");const ct="(?:(?![A-Z0-9 $%*+\\-./:]|"+ut+")(?:.|[\r\n]))+";lt.KANJI=new RegExp(ut,"g"),lt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),lt.BYTE=new RegExp(ct,"g"),lt.NUMERIC=new RegExp("[0-9]+","g"),lt.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const dt=new RegExp("^"+ut+"$"),ft=new RegExp("^[0-9]+$"),ht=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");lt.testKanji=function(t){return dt.test(t)},lt.testNumeric=function(t){return ft.test(t)},lt.testAlphanumeric=function(t){return ht.test(t)},function(t){const e=at,n=lt;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,n){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?t.ccBits[0]:n<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(r){return n}}}(st),function(t){const e=U,n=Q,r=q,o=st,i=at,s=e.getBCHDigit(7973);function a(t,e){return o.getCharCountIndicator(t,e)+4}function l(t,e){let n=0;return t.forEach((function(t){const r=a(t.mode,e);n+=r+t.getBitsLength()})),n}t.from=function(t,e){return i.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,r,s){if(!i.isValid(t))throw new Error("Invalid QR Code version");void 0===s&&(s=o.BYTE);const l=8*(e.getSymbolTotalCodewords(t)-n.getTotalCodewordsCount(t,r));if(s===o.MIXED)return l;const u=l-a(s,t);switch(s){case o.NUMERIC:return Math.floor(u/10*3);case o.ALPHANUMERIC:return Math.floor(u/11*2);case o.KANJI:return Math.floor(u/13);case o.BYTE:default:return Math.floor(u/8)}},t.getBestVersionForData=function(e,n){let i;const s=r.from(n,r.M);if(Array.isArray(e)){if(e.length>1)return function(e,n){for(let r=1;r<=40;r++)if(l(e,r)<=t.getCapacity(r,n,o.MIXED))return r}(e,s);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,n,r){for(let o=1;o<=40;o++)if(n<=t.getCapacity(o,r,e))return o}(i.mode,i.getLength(),s)},t.getEncodedBits=function(t){if(!i.isValid(t)||t<7)throw new Error("Invalid QR Code version");let n=t<<12;for(;e.getBCHDigit(n)-s>=0;)n^=7973<<e.getBCHDigit(n)-s;return t<<12|n}}(it);var gt={};const pt=U,mt=pt.getBCHDigit(1335);gt.getEncodedBits=function(t,e){const n=t.bit<<3|e;let r=n<<10;for(;pt.getBCHDigit(r)-mt>=0;)r^=1335<<pt.getBCHDigit(r)-mt;return 21522^(n<<10|r)};var wt={};const vt=st;function yt(t){this.mode=vt.NUMERIC,this.data=t.toString()}yt.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},yt.prototype.getLength=function(){return this.data.length},yt.prototype.getBitsLength=function(){return yt.getBitsLength(this.data.length)},yt.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))};var Et=yt;const bt=st,xt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Ct(t){this.mode=bt.ALPHANUMERIC,this.data=t}Ct.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},Ct.prototype.getLength=function(){return this.data.length},Ct.prototype.getBitsLength=function(){return Ct.getBitsLength(this.data.length)},Ct.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*xt.indexOf(this.data[e]);n+=xt.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(xt.indexOf(this.data[e]),6)};var At=Ct;const Bt=function(t){for(var e=[],n=t.length,r=0;r<n;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&n>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,r+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer},Tt=st;function It(t){this.mode=Tt.BYTE,this.data=new Uint8Array(Bt(t))}It.getBitsLength=function(t){return 8*t},It.prototype.getLength=function(){return this.data.length},It.prototype.getBitsLength=function(){return It.getBitsLength(this.data.length)},It.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var Mt=It;const Pt=st,Nt=U;function Rt(t){this.mode=Pt.KANJI,this.data=t}Rt.getBitsLength=function(t){return 13*t},Rt.prototype.getLength=function(){return this.data.length},Rt.prototype.getBitsLength=function(){return Rt.getBitsLength(this.data.length)},Rt.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=Nt.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}};var Lt,St=Rt,_t={exports:{}};_t.exports=Lt={single_source_shortest_paths:function(t,e,n){var r={},o={};o[e]=0;var i,s,a,l,u,c,d,f=Lt.PriorityQueue.make();for(f.push(e,0);!f.empty();)for(a in s=(i=f.pop()).value,l=i.cost,u=t[s]||{})u.hasOwnProperty(a)&&(c=l+u[a],d=o[a],(void 0===o[a]||d>c)&&(o[a]=c,f.push(a,c),r[a]=s));if(void 0!==n&&void 0===o[n]){var h=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(h)}return r},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,e,n){var r=Lt.single_source_shortest_paths(t,e,n);return Lt.extract_shortest_path_from_predecessor_list(r,n)},PriorityQueue:{make:function(t){var e,n=Lt.PriorityQueue,r={};for(e in t=t||{},n)n.hasOwnProperty(e)&&(r[e]=n[e]);return r.queue=[],r.sorter=t.sorter||n.default_sorter,r},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}},function(t){const e=st,n=Et,r=At,o=Mt,i=St,s=lt,a=U,l=_t.exports;function u(t){return unescape(encodeURIComponent(t)).length}function c(t,e,n){const r=[];let o;for(;null!==(o=t.exec(n));)r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function d(t){const n=c(s.NUMERIC,e.NUMERIC,t),r=c(s.ALPHANUMERIC,e.ALPHANUMERIC,t);let o,i;a.isKanjiModeEnabled()?(o=c(s.BYTE,e.BYTE,t),i=c(s.KANJI,e.KANJI,t)):(o=c(s.BYTE_KANJI,e.BYTE,t),i=[]);return n.concat(r,o,i).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function f(t,s){switch(s){case e.NUMERIC:return n.getBitsLength(t);case e.ALPHANUMERIC:return r.getBitsLength(t);case e.KANJI:return i.getBitsLength(t);case e.BYTE:return o.getBitsLength(t)}}function h(t,s){let l;const u=e.getBestModeForData(t);if(l=e.from(s,u),l!==e.BYTE&&l.bit<u.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(l)+".\n Suggested mode is: "+e.toString(u));switch(l!==e.KANJI||a.isKanjiModeEnabled()||(l=e.BYTE),l){case e.NUMERIC:return new n(t);case e.ALPHANUMERIC:return new r(t);case e.KANJI:return new i(t);case e.BYTE:return new o(t)}}t.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(h(e,null)):e.data&&t.push(h(e.data,e.mode)),t}),[])},t.fromString=function(n,r){const o=function(t){const n=[];for(let r=0;r<t.length;r++){const o=t[r];switch(o.mode){case e.NUMERIC:n.push([o,{data:o.data,mode:e.ALPHANUMERIC,length:o.length},{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.ALPHANUMERIC:n.push([o,{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.KANJI:n.push([o,{data:o.data,mode:e.BYTE,length:u(o.data)}]);break;case e.BYTE:n.push([{data:o.data,mode:e.BYTE,length:u(o.data)}])}}return n}(d(n,a.isKanjiModeEnabled())),i=function(t,n){const r={},o={start:{}};let i=["start"];for(let s=0;s<t.length;s++){const a=t[s],l=[];for(let t=0;t<a.length;t++){const u=a[t],c=""+s+t;l.push(c),r[c]={node:u,lastCount:0},o[c]={};for(let t=0;t<i.length;t++){const s=i[t];r[s]&&r[s].node.mode===u.mode?(o[s][c]=f(r[s].lastCount+u.length,u.mode)-f(r[s].lastCount,u.mode),r[s].lastCount+=u.length):(r[s]&&(r[s].lastCount=u.length),o[s][c]=f(u.length,u.mode)+4+e.getCharCountIndicator(u.mode,n))}}i=l}for(let e=0;e<i.length;e++)o[i[e]].end=0;return{map:o,table:r}}(o,r),s=l.find_path(i.map,"start","end"),c=[];for(let t=1;t<s.length-1;t++)c.push(i.table[s[t]].node);return t.fromArray(function(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(c))},t.rawSplit=function(e){return t.fromArray(d(e,a.isKanjiModeEnabled()))}}(wt);const Ut=U,Dt=q,kt=j,zt=Y,qt=J,Ht=K,jt=V,Ft=Q,Yt=ot,Jt=it,Kt=gt,Ot=st,Vt=wt;function Qt(t,e,n){const r=t.size,o=Kt.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=1==(o>>i&1),i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function $t(t,e,n){const r=new kt;n.forEach((function(e){r.put(e.mode.bit,4),r.put(e.getLength(),Ot.getCharCountIndicator(e.mode,t)),e.write(r)}));const o=8*(Ut.getSymbolTotalCodewords(t)-Ft.getTotalCodewordsCount(t,e));for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(0);const i=(o-r.getLengthInBits())/8;for(let s=0;s<i;s++)r.put(s%2?17:236,8);return function(t,e,n){const r=Ut.getSymbolTotalCodewords(e),o=Ft.getTotalCodewordsCount(e,n),i=r-o,s=Ft.getBlocksCount(e,n),a=s-r%s,l=Math.floor(r/s),u=Math.floor(i/s),c=u+1,d=l-u,f=new Yt(d);let h=0;const g=new Array(s),p=new Array(s);let m=0;const w=new Uint8Array(t.buffer);for(let x=0;x<s;x++){const t=x<a?u:c;g[x]=w.slice(h,h+t),p[x]=f.encode(g[x]),h+=t,m=Math.max(m,t)}const v=new Uint8Array(r);let y,E,b=0;for(y=0;y<m;y++)for(E=0;E<s;E++)y<g[E].length&&(v[b++]=g[E][y]);for(y=0;y<d;y++)for(E=0;E<s;E++)v[b++]=p[E][y];return v}(r,t,e)}function Zt(t,e,n,r){let o;if(Array.isArray(t))o=Vt.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=Vt.rawSplit(t);r=Jt.getBestVersionForData(e,n)}o=Vt.fromString(t,r||40)}}const i=Jt.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<i)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+i+".\n")}else e=i;const s=$t(e,n,o),a=Ut.getSymbolSize(e),l=new zt(a);return function(t,e){const n=t.size,r=Ht.getPositions(e);for(let o=0;o<r.length;o++){const e=r[o][0],i=r[o][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let o=-1;o<=7;o++)i+o<=-1||n<=i+o||(r>=0&&r<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===r||6===r)||r>=2&&r<=4&&o>=2&&o<=4?t.set(e+r,i+o,!0,!0):t.set(e+r,i+o,!1,!0))}}(l,e),function(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(l),function(t,e){const n=qt.getPositions(e);for(let r=0;r<n.length;r++){const e=n[r][0],o=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,o+r,!0,!0):t.set(e+n,o+r,!1,!0)}}(l,e),Qt(l,n,0),e>=7&&function(t,e){const n=t.size,r=Jt.getEncodedBits(e);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+n-8-3,s=1==(r>>a&1),t.set(o,i,s,!0),t.set(i,o,s,!0)}(l,e),function(t,e){const n=t.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2)for(6===a&&a--;;){for(let n=0;n<2;n++)if(!t.isReserved(o,a-n)){let r=!1;s<e.length&&(r=1==(e[s]>>>i&1)),t.set(o,a-n,r),i--,-1===i&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}(l,s),isNaN(r)&&(r=jt.getBestMask(l,Qt.bind(null,l,n))),jt.applyMask(r,l),Qt(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:o}}_.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let n,r,o=Dt.M;return void 0!==e&&(o=Dt.from(e.errorCorrectionLevel,Dt.M),n=Jt.from(e.version),r=jt.from(e.maskPattern),e.toSJISFunc&&Ut.setToSJISFunction(e.toSJISFunc)),Zt(t,n,o,r)};var Wt={},Xt={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});const n=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:n,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,n){const r=t.getScale(e,n);return Math.floor((e+2*n.margin)*r)},t.qrToImageData=function(e,n,r){const o=n.modules.size,i=n.modules.data,s=t.getScale(o,r),a=Math.floor((o+2*r.margin)*s),l=r.margin*s,u=[r.color.light,r.color.dark];for(let t=0;t<a;t++)for(let n=0;n<a;n++){let c=4*(t*a+n),d=r.color.light;if(t>=l&&n>=l&&t<a-l&&n<a-l){d=u[i[Math.floor((t-l)/s)*o+Math.floor((n-l)/s)]?1:0]}e[c++]=d.r,e[c++]=d.g,e[c++]=d.b,e[c]=d.a}}}(Xt),function(t){const e=Xt;t.render=function(t,n,r){let o=r,i=n;void 0!==o||n&&n.getContext||(o=n,n=void 0),n||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=e.getOptions(o);const s=e.getImageWidth(t.modules.size,o),a=i.getContext("2d"),l=a.createImageData(s,s);return e.qrToImageData(l.data,t,o),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(a,i,s),a.putImageData(l,0,0),i},t.renderToDataURL=function(e,n,r){let o=r;void 0!==o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=t.render(e,n,o),s=o.type||"image/png",a=o.rendererOpts||{};return i.toDataURL(s,a.quality)}}(Wt);var Gt={};const te=Xt;function ee(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function ne(t,e,n){let r=t+e;return void 0!==n&&(r+=" "+n),r}Gt.render=function(t,e,n){const r=te.getOptions(e),o=t.modules.size,i=t.modules.data,s=o+2*r.margin,a=r.color.light.a?"<path "+ee(r.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",l="<path "+ee(r.color.dark,"stroke")+' d="'+function(t,e,n){let r="",o=0,i=!1,s=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),u=Math.floor(a/e);l||i||(i=!0),t[a]?(s++,a>0&&l>0&&t[a-1]||(r+=i?ne("M",l+n,.5+u+n):ne("m",o,0),o=0,i=!1),l+1<e&&t[a+1]||(r+=ne("h",s),s=0)):o++}return r}(i,o,r.margin)+'"/>',u='viewBox="0 0 '+s+" "+s+'"',c='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+u+' shape-rendering="crispEdges">'+a+l+"</svg>\n";return"function"==typeof n&&n(null,c),c};const re=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},oe=_,ie=Wt,se=Gt;function ae(t,e,n,r,o){const i=[].slice.call(arguments,1),s=i.length,a="function"==typeof i[s-1];if(!a&&!re())throw new Error("Callback required as last argument");if(!a){if(s<1)throw new Error("Too few arguments provided");return 1===s?(n=e,e=r=void 0):2!==s||e.getContext||(r=n,n=e,e=void 0),new Promise((function(o,i){try{const i=oe.create(n,r);o(t(i,e,r))}catch(s){i(s)}}))}if(s<2)throw new Error("Too few arguments provided");2===s?(o=n,n=e,e=r=void 0):3===s&&(e.getContext&&void 0===o?(o=r,r=void 0):(o=r,r=n,n=e,e=void 0));try{const i=oe.create(n,r);o(null,t(i,e,r))}catch(l){o(l)}}S.create=oe.create,S.toCanvas=ae.bind(null,ie.render),S.toDataURL=ae.bind(null,ie.renderToDataURL),S.toString=ae.bind(null,(function(t,e,n){return se.render(t,n)}));const le={class:"absolute top-[50%] left-[50%] font-bold"};var ue=I(t({__name:"Qrcode",props:{tag:e.string.validate((t=>["canvas","img"].includes(t))).def("canvas"),text:{type:[String,Array],default:null},options:{type:Object,default:()=>({})},width:e.number.def(200),logo:{type:[String,Object],default:""},disabled:e.bool.def(!1),disabledText:e.string.def("")},emits:["done","click","disabled-click"],setup(t,{emit:e}){const C=t,{getPrefixCls:A}=y(),B=A("qrcode"),{toCanvas:T,toDataURL:I}=S,M=n(!0),P=n(null),N=r((()=>String(C.text))),R=r((()=>({width:C.width+"px",height:C.width+"px"})));o((()=>N.value),(t=>{t&&(async()=>{await E();const t=b(C.options||{});if("canvas"===C.tag){t.errorCorrectionLevel=t.errorCorrectionLevel||U(h(N));const n=await _(h(N),t);t.scale=0===C.width?void 0:C.width/n*4;const r=await T(h(P),h(N),t);if(C.logo){const t=await L(r);e("done",t),M.value=!1}else e("done",r.toDataURL()),M.value=!1}else{const n=await I(N.value,{errorCorrectionLevel:"H",width:C.width,...t});h(P).src=n,e("done",n),M.value=!1}})()}),{deep:!0,immediate:!0});const L=t=>{const e=t.width,n=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},x(C.logo)?{}:C.logo),{logoSize:r=.15,bgColor:o="#ffffff",borderSize:i=.05,crossOrigin:s="anonymous",borderRadius:a=8,logoRadius:l=0}=n,u=x(C.logo)?C.logo:C.logo.src,c=e*r,d=e*(1-r)/2,f=e*(r+i),h=e*(1-r-i)/2,g=t.getContext("2d");if(!g)return;D(g)(h,h,f,f,a),g.fillStyle=o,g.fill();const p=new Image;(s||l)&&p.setAttribute("crossOrigin",s),p.src=u;return new Promise((e=>{p.onload=()=>{var n;l?(t=>{const e=document.createElement("canvas");e.width=d+c,e.height=d+c;const n=e.getContext("2d");if(!n||!g)return;if(n.drawImage(t,d,d,c,c),D(g)(d,d,c,c,l),!g)return;const r=g.createPattern(e,"no-repeat");r&&(g.fillStyle=r,g.fill())})(p):(n=p,g.drawImage(n,d,d,c,c)),e(t.toDataURL())}}))},_=async(t,e)=>{const n=document.createElement("canvas");return await T(n,t,e),n.width},U=t=>t.length>36?"M":t.length>16?"Q":"H",D=t=>(e,n,r,o,i)=>{const s=Math.min(r,o);return i>s/2&&(i=s/2),t.beginPath(),t.moveTo(e+i,n),t.arcTo(e+r,n,e+r,n+o,i),t.arcTo(e+r,n+o,e,n+o,i),t.arcTo(e,n+o,e,n,i),t.arcTo(e,n,e+r,n,i),t.closePath(),t},k=()=>{e("click")},z=()=>{e("disabled-click")};return(e,n)=>{const r=i("Icon"),o=s("loading");return a((l(),u("div",{class:f([h(B),"relative inline-block"]),style:v(h(R))},[(l(),c(d(t.tag),{ref_key:"wrapRef",ref:P,onClick:k},null,512)),t.disabled?(l(),u("div",{key:0,class:f([`${h(B)}--disabled`,"absolute top-0 left-0 flex w-full h-full items-center justify-center"]),onClick:z},[g("div",le,[p(r,{icon:"ep:refresh-right",size:30,color:"var(--el-color-primary)"}),g("div",null,m(t.disabledText),1)])],2)):w("v-if",!0)],6)),[[o,M.value]])}}}),[["__scopeId","data-v-d73eaef4"]]);const ce={class:"font-bold"},de={class:"font-bold"},fe={class:"font-bold"},he={class:"font-bold"},ge={class:"font-bold"},pe={class:"font-bold"},me={class:"font-bold"},we={class:"font-bold"},ve={class:"font-bold"},ye=t({__name:"Qrcode",setup(t){const e=C(),{t:o}=B(),i=r((()=>e.getTitle)),s=n("");setTimeout((()=>{s.value=h(i)}),3e3);const a=()=>{T.info(o("qrcodeDemo.click"))},u=()=>{T.info(o("qrcodeDemo.invalid"))};return(t,e)=>(l(),c(h(M),{title:h(o)("qrcodeDemo.qrcode"),message:h(o)("qrcodeDemo.qrcodeDes")},{default:A((()=>[p(h(N),{gutter:20,justify:"space-between"},{default:A((()=>[p(h(P),{xl:6,lg:6,md:12,sm:24,xs:24},{default:A((()=>[p(h(R),{shadow:"hover",class:"mb-10px text-center"},{default:A((()=>[g("div",ce,m(h(o)("qrcodeDemo.basicUsage")),1),p(h(ue),{text:h(i)},null,8,["text"])])),_:1})])),_:1}),p(h(P),{xl:6,lg:6,md:12,sm:24,xs:24},{default:A((()=>[p(h(R),{shadow:"hover",class:"mb-10px text-center"},{default:A((()=>[g("div",de,m(h(o)("qrcodeDemo.imgTag")),1),p(h(ue),{text:h(i),tag:"img"},null,8,["text"])])),_:1})])),_:1}),p(h(P),{xl:6,lg:6,md:12,sm:24,xs:24},{default:A((()=>[p(h(R),{shadow:"hover",class:"mb-10px text-center"},{default:A((()=>[g("div",fe,m(h(o)("qrcodeDemo.style")),1),p(h(ue),{text:h(i),options:{color:{dark:"#55D187",light:"#2d8cf0"}}},null,8,["text"])])),_:1})])),_:1}),p(h(P),{xl:6,lg:6,md:12,sm:24,xs:24},{default:A((()=>[p(h(R),{shadow:"hover",class:"mb-10px text-center"},{default:A((()=>[g("div",he,m(h(o)("qrcodeDemo.click")),1),p(h(ue),{text:h(i),onClick:a},null,8,["text"])])),_:1})])),_:1}),p(h(P),{xl:6,lg:6,md:12,sm:24,xs:24},{default:A((()=>[p(h(R),{shadow:"hover",class:"mb-10px text-center"},{default:A((()=>[g("div",ge,m(h(o)("qrcodeDemo.asynchronousContent")),1),p(h(ue),{text:s.value},null,8,["text"])])),_:1})])),_:1}),p(h(P),{xl:6,lg:6,md:12,sm:24,xs:24},{default:A((()=>[p(h(R),{shadow:"hover",class:"mb-10px text-center"},{default:A((()=>[g("div",pe,m(h(o)("qrcodeDemo.invalid")),1),p(h(ue),{text:h(i),disabled:"",onDisabledClick:u},null,8,["text"])])),_:1})])),_:1}),p(h(P),{xl:6,lg:6,md:12,sm:24,xs:24},{default:A((()=>[p(h(R),{shadow:"hover",class:"mb-10px text-center"},{default:A((()=>[g("div",me,m(h(o)("qrcodeDemo.logoConfig")),1),p(h(ue),{text:h(i),logo:h(L)},null,8,["text","logo"])])),_:1})])),_:1}),p(h(P),{xl:6,lg:6,md:12,sm:24,xs:24},{default:A((()=>[p(h(R),{shadow:"hover",class:"mb-10px text-center"},{default:A((()=>[g("div",we,m(h(o)("qrcodeDemo.logoStyle")),1),p(h(ue),{text:h(i),logo:{src:h(L),logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["text","logo"])])),_:1})])),_:1}),p(h(P),{xl:6,lg:6,md:12,sm:24,xs:24},{default:A((()=>[p(h(R),{shadow:"hover",class:"mb-10px text-center"},{default:A((()=>[g("div",ve,m(h(o)("qrcodeDemo.size")),1),p(h(ue),{text:h(i),width:100},null,8,["text"])])),_:1})])),_:1})])),_:1})])),_:1},8,["title","message"]))}});export{ye as default};
