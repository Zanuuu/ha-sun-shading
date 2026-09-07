/* Sun Shading — élément personnalisé <sun-shading>.
   Généré par sources/build.py : ne pas éditer. */
/* Les données d'une zone sont servies dans un dossier que l'hôte indique
   (panneau Home Assistant : config.data) ; à défaut, à côté de ce module.
   Dans un panneau, l'URL du document (/sun-shading) n'a rien à voir avec
   celle des assets : import.meta.url est la seule référence valable. */
const BASE_MODULE = new URL(".", import.meta.url).href;
/*! three v0.152.2 | Copyright © 2010-2023 three.js authors | MIT | https://threejs.org/
   Inliné par sources/build.py ; texte complet dans THIRD_PARTY_LICENSES. */
(function () {
void 0;
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).THREE={})}(this,(function(t){"use strict";const e="152",n=100,i=300,r=301,s=302,a=303,o=304,l=306,c=1e3,h=1001,u=1002,d=1003,p=1004,m=1005,f=1006,g=1007,v=1008,_=1009,x=1012,y=1014,M=1015,S=1016,b=1020,E=1023,T=1026,w=1027,A=33776,R=33777,C=33778,L=33779,P=35840,I=35841,U=35842,D=35843,N=37492,O=37496,F=37808,B=37809,z=37810,G=37811,H=37812,k=37813,V=37814,W=37815,X=37816,j=37817,q=37818,Y=37819,Z=37820,J=37821,K=36492,$=36284,Q=36285,tt=36286,et=2300,nt=2301,it=2302,rt=2400,st=2401,at=2402,ot=2500,lt=2501,ct=3e3,ht=3001,ut="",dt="srgb",pt="srgb-linear",mt="display-p3",ft=7680,gt=35044,vt="300 es",_t=1035;class xt{addEventListener(t,e){void 0===this._listeners&&(this._listeners={});const n=this._listeners;void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(e)&&n[t].push(e)}hasEventListener(t,e){if(void 0===this._listeners)return!1;const n=this._listeners;return void 0!==n[t]&&-1!==n[t].indexOf(e)}removeEventListener(t,e){if(void 0===this._listeners)return;const n=this._listeners[t];if(void 0!==n){const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}dispatchEvent(t){if(void 0===this._listeners)return;const e=this._listeners[t.type];if(void 0!==e){t.target=this;const n=e.slice(0);for(let e=0,i=n.length;e<i;e++)n[e].call(this,t);t.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mt=1234567;const St=Math.PI/180,bt=180/Math.PI;function Et(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(yt[255&t]+yt[t>>8&255]+yt[t>>16&255]+yt[t>>24&255]+"-"+yt[255&e]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[63&n|128]+yt[n>>8&255]+"-"+yt[n>>16&255]+yt[n>>24&255]+yt[255&i]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Tt(t,e,n){return Math.max(e,Math.min(n,t))}function wt(t,e){return(t%e+e)%e}function At(t,e,n){return(1-n)*t+n*e}function Rt(t){return 0==(t&t-1)&&0!==t}function Ct(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Lt(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Pt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function It(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(65535*t);case Uint8Array:return Math.round(255*t);case Int16Array:return Math.round(32767*t);case Int8Array:return Math.round(127*t);default:throw new Error("Invalid component type.")}}const Ut={DEG2RAD:St,RAD2DEG:bt,generateUUID:Et,clamp:Tt,euclideanModulo:wt,mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},inverseLerp:function(t,e,n){return t!==e?(n-t)/(e-t):0},lerp:At,damp:function(t,e,n,i){return At(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(wt(t,2*e)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){void 0!==t&&(Mt=t);let e=Mt+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*St},radToDeg:function(t){return t*bt},isPowerOfTwo:Rt,ceilPowerOfTwo:Ct,floorPowerOfTwo:Lt,setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*u,l*d,o*c);break;case"YZY":t.set(l*d,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*d,o*h,o*c);break;case"XZX":t.set(o*h,l*m,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*m,o*c);break;case"ZYZ":t.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:It,denormalize:Pt};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Tt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,s,a,o,l){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],p=n[8],m=i[0],f=i[3],g=i[6],v=i[1],_=i[4],x=i[7],y=i[2],M=i[5],S=i[8];return r[0]=s*m+a*v+o*y,r[3]=s*f+a*_+o*M,r[6]=s*g+a*x+o*S,r[1]=l*m+c*v+h*y,r[4]=l*f+c*_+h*M,r[7]=l*g+c*x+h*S,r[2]=u*m+d*v+p*y,r[5]=u*f+d*_+p*M,r[8]=u*g+d*x+p*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*s*c-e*a*l-n*r*c+n*a*o+i*r*l-i*s*o}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*s-a*l,u=a*o-c*r,d=l*r-s*o,p=e*h+n*u+i*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=h*m,t[1]=(i*l-c*n)*m,t[2]=(a*n-i*s)*m,t[3]=u*m,t[4]=(c*e-i*o)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*o-l*e)*m,t[8]=(s*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ot.makeScale(t,e)),this}rotate(t){return this.premultiply(Ot.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ot.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let t=0;t<9;t++)if(e[t]!==n[t])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return(new this.constructor).fromArray(this.elements)}}const Ot=new Nt;function Ft(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}const Bt={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function zt(t,e){return new Bt[t](e)}function Gt(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Ht={};function kt(t){t in Ht||(Ht[t]=!0,console.warn(t))}function Vt(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function Wt(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}const Xt=(new Nt).fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),jt=(new Nt).fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);const qt={[pt]:t=>t,[dt]:t=>t.convertSRGBToLinear(),[mt]:function(t){return t.convertSRGBToLinear().applyMatrix3(jt)}},Yt={[pt]:t=>t,[dt]:t=>t.convertLinearToSRGB(),[mt]:function(t){return t.applyMatrix3(Xt).convertLinearToSRGB()}},Zt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return pt},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(!1===this.enabled||e===n||!e||!n)return t;const i=qt[e],r=Yt[n];if(void 0===i||void 0===r)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Jt;class Kt{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if("undefined"==typeof HTMLCanvasElement)return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{void 0===Jt&&(Jt=Gt("canvas")),Jt.width=t.width,Jt.height=t.height;const n=Jt.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Jt}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const e=Gt("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let t=0;t<r.length;t++)r[t]=255*Vt(r[t]/255);return n.putImageData(i,0,0),e}if(t.data){const e=t.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(255*Vt(e[t]/255)):e[t]=Vt(e[t]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class $t{constructor(t=null){this.isSource=!0,this.uuid=Et(),this.data=t,this.version=0}set needsUpdate(t){!0===t&&this.version++}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.images[this.uuid])return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(null!==i){let t;if(Array.isArray(i)){t=[];for(let e=0,n=i.length;e<n;e++)i[e].isDataTexture?t.push(Qt(i[e].image)):t.push(Qt(i[e]))}else t=Qt(i);n.url=t}return e||(t.images[this.uuid]=n),n}}function Qt(t){return"undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap?Kt.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let te=0;class ee extends xt{constructor(t=ee.DEFAULT_IMAGE,e=ee.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=ee.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:te++}),this.uuid=Et(),this.name="",this.source=new $t(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,"string"==typeof c?this.colorSpace=c:(kt("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ht?dt:ut),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==i)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case c:t.x=t.x-Math.floor(t.x);break;case h:t.x=t.x<0?0:1;break;case u:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case c:t.y=t.y-Math.floor(t.y);break;case h:t.y=t.y<0?0:1;break;case u:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){!0===t&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return kt("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?ht:ct}set encoding(t){kt("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ht?dt:ut}}ee.DEFAULT_IMAGE=null,ee.DEFAULT_MAPPING=i,ee.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const s=.01,a=.1,o=t.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],p=o[9],m=o[2],f=o[6],g=o[10];if(Math.abs(c-u)<s&&Math.abs(h-m)<s&&Math.abs(p-f)<s){if(Math.abs(c+u)<a&&Math.abs(h+m)<a&&Math.abs(p+f)<a&&Math.abs(l+d+g-3)<a)return this.set(1,0,0,0),this;e=Math.PI;const t=(l+1)/2,o=(d+1)/2,v=(g+1)/2,_=(c+u)/4,x=(h+m)/4,y=(p+f)/4;return t>o&&t>v?t<s?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(t),i=_/n,r=x/n):o>v?o<s?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(o),n=_/i,r=y/i):v<s?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=x/r,i=y/r),this.set(n,i,r,e),this}let v=Math.sqrt((f-p)*(f-p)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(v)<.001&&(v=1),this.x=(f-p)/v,this.y=(h-m)/v,this.z=(u-c)/v,this.w=Math.acos((l+d+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ie extends xt{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};void 0!==n.encoding&&(kt("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ht?dt:ut),this.texture=new ee(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=void 0!==n.generateMipmaps&&n.generateMipmaps,this.texture.internalFormat=void 0!==n.internalFormat?n.internalFormat:null,this.texture.minFilter=void 0!==n.minFilter?n.minFilter:f,this.depthBuffer=void 0===n.depthBuffer||n.depthBuffer,this.stencilBuffer=void 0!==n.stencilBuffer&&n.stencilBuffer,this.depthTexture=void 0!==n.depthTexture?n.depthTexture:null,this.samples=void 0!==n.samples?n.samples:0}setSize(t,e,n=1){this.width===t&&this.height===e&&this.depth===n||(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return(new this.constructor).copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $t(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,null!==t.depthTexture&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class re extends ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=d,this.minFilter=d,this.wrapR=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class se extends ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=d,this.minFilter=d,this.wrapR=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ae{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3];const u=r[s+0],d=r[s+1],p=r[s+2],m=r[s+3];if(0===a)return t[e+0]=o,t[e+1]=l,t[e+2]=c,void(t[e+3]=h);if(1===a)return t[e+0]=u,t[e+1]=d,t[e+2]=p,void(t[e+3]=m);if(h!==m||o!==u||l!==d||c!==p){let t=1-a;const e=o*u+l*d+c*p+h*m,n=e>=0?1:-1,i=1-e*e;if(i>Number.EPSILON){const r=Math.sqrt(i),s=Math.atan2(r,e*n);t=Math.sin(t*s)/r,a=Math.sin(a*s)/r}const r=a*n;if(o=o*t+u*r,l=l*t+d*r,c=c*t+p*r,h=h*t+m*r,t===1-a){const t=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=t,l*=t,c*=t,h*=t}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=r[s],u=r[s+1],d=r[s+2],p=r[s+3];return t[e]=a*p+c*h+o*d-l*u,t[e+1]=o*p+c*u+l*h-a*d,t[e+2]=l*p+c*d+a*u-o*h,t[e+3]=c*p-a*h-o*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),h=a(r/2),u=o(n/2),d=o(i/2),p=o(r/2);switch(s){case"XYZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"YXZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"ZXY":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"ZYX":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"YZX":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p;break;case"XZY":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return!1!==e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=n+a+h;if(u>0){const t=.5/Math.sqrt(u+1);this._w=.25/t,this._x=(c-o)*t,this._y=(r-l)*t,this._z=(s-i)*t}else if(n>a&&n>h){const t=2*Math.sqrt(1+n-a-h);this._w=(c-o)/t,this._x=.25*t,this._y=(i+s)/t,this._z=(r+l)/t}else if(a>h){const t=2*Math.sqrt(1+a-n-h);this._w=(r-l)/t,this._x=(i+s)/t,this._y=.25*t,this._z=(o+c)/t}else{const t=2*Math.sqrt(1+h-n-a);this._w=(s-i)/t,this._x=(r+l)/t,this._y=(o+c)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Tt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(0===n)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this;if(1===e)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const t=1-e;return this._w=t*s+e*this._w,this._x=t*n+e*this._x,this._y=t*i+e*this._y,this._z=t*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=s*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(t=0,e=0,n=0){oe.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return void 0===n&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ce.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ce.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=o*e+s*i-a*n,c=o*n+a*e-r*i,h=o*i+r*n-s*e,u=-r*e-s*n-a*i;return this.x=l*o+u*-r+c*-a-h*-s,this.y=c*o+u*-s+h*-r-l*-a,this.z=h*o+u*-a+l*-s-c*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(0===e)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return le.copy(this).projectOnVector(t),this.sub(le)}reflect(t){return this.sub(le.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Tt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=2*(Math.random()-.5),e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const le=new oe,ce=new ae;class he{constructor(t=new oe(1/0,1/0,1/0),e=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(de.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(de.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=de.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),void 0!==t.boundingBox)null===t.boundingBox&&t.computeBoundingBox(),pe.copy(t.boundingBox),pe.applyMatrix4(t.matrixWorld),this.union(pe);else{const n=t.geometry;if(void 0!==n)if(e&&void 0!==n.attributes&&void 0!==n.attributes.position){const e=n.attributes.position;for(let n=0,i=e.count;n<i;n++)de.fromBufferAttribute(e,n).applyMatrix4(t.matrixWorld),this.expandByPoint(de)}else null===n.boundingBox&&n.computeBoundingBox(),pe.copy(n.boundingBox),pe.applyMatrix4(t.matrixWorld),this.union(pe)}const n=t.children;for(let t=0,i=n.length;t<i;t++)this.expandByObject(n[t],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,de),de.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ye),Me.subVectors(this.max,ye),me.subVectors(t.a,ye),fe.subVectors(t.b,ye),ge.subVectors(t.c,ye),ve.subVectors(fe,me),_e.subVectors(ge,fe),xe.subVectors(me,ge);let e=[0,-ve.z,ve.y,0,-_e.z,_e.y,0,-xe.z,xe.y,ve.z,0,-ve.x,_e.z,0,-_e.x,xe.z,0,-xe.x,-ve.y,ve.x,0,-_e.y,_e.x,0,-xe.y,xe.x,0];return!!Ee(e,me,fe,ge,Me)&&(e=[1,0,0,0,1,0,0,0,1],!!Ee(e,me,fe,ge,Me)&&(Se.crossVectors(ve,_e),e=[Se.x,Se.y,Se.z],Ee(e,me,fe,ge,Me)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,de).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(de).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(ue[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ue[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ue[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ue[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ue[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ue[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ue[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ue[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ue)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ue=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],de=new oe,pe=new he,me=new oe,fe=new oe,ge=new oe,ve=new oe,_e=new oe,xe=new oe,ye=new oe,Me=new oe,Se=new oe,be=new oe;function Ee(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){be.fromArray(t,s);const a=r.x*Math.abs(be.x)+r.y*Math.abs(be.y)+r.z*Math.abs(be.z),o=e.dot(be),l=n.dot(be),c=i.dot(be);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const Te=new he,we=new oe,Ae=new oe;class Re{constructor(t=new oe,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;void 0!==e?n.copy(e):Te.setFromPoints(t).getCenter(n);let i=0;for(let e=0,r=t.length;e<r;e++)i=Math.max(i,n.distanceToSquared(t[e]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;we.subVectors(t,this.center);const e=we.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),n=.5*(t-this.radius);this.center.addScaledVector(we,n/t),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(!0===this.center.equals(t.center)?this.radius=Math.max(this.radius,t.radius):(Ae.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(we.copy(t.center).add(Ae)),this.expandByPoint(we.copy(t.center).sub(Ae))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return(new this.constructor).copy(this)}}const Ce=new oe,Le=new oe,Pe=new oe,Ie=new oe,Ue=new oe,De=new oe,Ne=new oe;class Oe{constructor(t=new oe,e=new oe(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ce)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ce.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ce.copy(this.origin).addScaledVector(this.direction,e),Ce.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Le.copy(t).add(e).multiplyScalar(.5),Pe.copy(e).sub(t).normalize(),Ie.copy(this.origin).sub(Le);const r=.5*t.distanceTo(e),s=-this.direction.dot(Pe),a=Ie.dot(this.direction),o=-Ie.dot(Pe),l=Ie.lengthSq(),c=Math.abs(1-s*s);let h,u,d,p;if(c>0)if(h=s*o-a,u=s*a-o,p=r*c,h>=0)if(u>=-p)if(u<=p){const t=1/c;h*=t,u*=t,d=h*(h+s*u+2*a)+u*(s*h+u+2*o)+l}else u=r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u=-r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-p?(h=Math.max(0,-(-s*r+a)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=p?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(s*r+a)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else u=s>0?-r:r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Le).addScaledVector(Pe,u),d}intersectSphere(t,e){Ce.subVectors(t.center,this.origin);const n=Ce.dot(this.direction),i=Ce.dot(Ce)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return null===n?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);if(0===e)return!0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),c>=0?(r=(t.min.y-u.y)*c,s=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,s=(t.min.y-u.y)*c),n>s||r>i?null:((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(t.min.z-u.z)*h,o=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,o=(t.min.z-u.z)*h),n>o||a>i?null:((a>n||n!=n)&&(n=a),(o<i||i!=i)&&(i=o),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return null!==this.intersectBox(t,Ce)}intersectTriangle(t,e,n,i,r){Ue.subVectors(e,t),De.subVectors(n,t),Ne.crossVectors(Ue,De);let s,a=this.direction.dot(Ne);if(a>0){if(i)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}Ie.subVectors(this.origin,t);const o=s*this.direction.dot(De.crossVectors(Ie,De));if(o<0)return null;const l=s*this.direction.dot(Ue.cross(Ie));if(l<0)return null;if(o+l>a)return null;const c=-s*Ie.dot(Ne);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}}class Fe{constructor(){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=l,g[6]=c,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=m,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new Fe).fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Be.setFromMatrixColumn(t,0).length(),r=1/Be.setFromMatrixColumn(t,1).length(),s=1/Be.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r);if("XYZ"===t.order){const t=s*c,n=s*h,i=a*c,r=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=n+i*l,e[5]=t-r*l,e[9]=-a*o,e[2]=r-t*l,e[6]=i+n*l,e[10]=s*o}else if("YXZ"===t.order){const t=o*c,n=o*h,i=l*c,r=l*h;e[0]=t+r*a,e[4]=i*a-n,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-a,e[2]=n*a-i,e[6]=r+t*a,e[10]=s*o}else if("ZXY"===t.order){const t=o*c,n=o*h,i=l*c,r=l*h;e[0]=t-r*a,e[4]=-s*h,e[8]=i+n*a,e[1]=n+i*a,e[5]=s*c,e[9]=r-t*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if("ZYX"===t.order){const t=s*c,n=s*h,i=a*c,r=a*h;e[0]=o*c,e[4]=i*l-n,e[8]=t*l+r,e[1]=o*h,e[5]=r*l+t,e[9]=n*l-i,e[2]=-l,e[6]=a*o,e[10]=s*o}else if("YZX"===t.order){const t=s*o,n=s*l,i=a*o,r=a*l;e[0]=o*c,e[4]=r-t*h,e[8]=i*h+n,e[1]=h,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=n*h+i,e[10]=t-r*h}else if("XZY"===t.order){const t=s*o,n=s*l,i=a*o,r=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=t*h+r,e[5]=s*c,e[9]=n*h-i,e[2]=i*h-n,e[6]=a*c,e[10]=r*h+t}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ge,t,He)}lookAt(t,e,n){const i=this.elements;return We.subVectors(t,e),0===We.lengthSq()&&(We.z=1),We.normalize(),ke.crossVectors(n,We),0===ke.lengthSq()&&(1===Math.abs(n.z)?We.x+=1e-4:We.z+=1e-4,We.normalize(),ke.crossVectors(n,We)),ke.normalize(),Ve.crossVectors(We,ke),i[0]=ke.x,i[4]=Ve.x,i[8]=We.x,i[1]=ke.y,i[5]=Ve.y,i[9]=We.y,i[2]=ke.z,i[6]=Ve.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],p=n[2],m=n[6],f=n[10],g=n[14],v=n[3],_=n[7],x=n[11],y=n[15],M=i[0],S=i[4],b=i[8],E=i[12],T=i[1],w=i[5],A=i[9],R=i[13],C=i[2],L=i[6],P=i[10],I=i[14],U=i[3],D=i[7],N=i[11],O=i[15];return r[0]=s*M+a*T+o*C+l*U,r[4]=s*S+a*w+o*L+l*D,r[8]=s*b+a*A+o*P+l*N,r[12]=s*E+a*R+o*I+l*O,r[1]=c*M+h*T+u*C+d*U,r[5]=c*S+h*w+u*L+d*D,r[9]=c*b+h*A+u*P+d*N,r[13]=c*E+h*R+u*I+d*O,r[2]=p*M+m*T+f*C+g*U,r[6]=p*S+m*w+f*L+g*D,r[10]=p*b+m*A+f*P+g*N,r[14]=p*E+m*R+f*I+g*O,r[3]=v*M+_*T+x*C+y*U,r[7]=v*S+_*w+x*L+y*D,r[11]=v*b+_*A+x*P+y*N,r[15]=v*E+_*R+x*I+y*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14];return t[3]*(+r*o*h-i*l*h-r*a*u+n*l*u+i*a*d-n*o*d)+t[7]*(+e*o*d-e*l*u+r*s*u-i*s*d+i*l*c-r*o*c)+t[11]*(+e*l*h-e*a*d-r*s*h+n*s*d+r*a*c-n*l*c)+t[15]*(-i*a*c-e*o*h+e*a*u+i*s*h-n*s*u+n*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],p=t[12],m=t[13],f=t[14],g=t[15],v=h*f*l-m*u*l+m*o*d-a*f*d-h*o*g+a*u*g,_=p*u*l-c*f*l-p*o*d+s*f*d+c*o*g-s*u*g,x=c*m*l-p*h*l+p*a*d-s*m*d-c*a*g+s*h*g,y=p*h*o-c*m*o-p*a*u+s*m*u+c*a*f-s*h*f,M=e*v+n*_+i*x+r*y;if(0===M)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=v*S,t[1]=(m*u*r-h*f*r-m*i*d+n*f*d+h*i*g-n*u*g)*S,t[2]=(a*f*r-m*o*r+m*i*l-n*f*l-a*i*g+n*o*g)*S,t[3]=(h*o*r-a*u*r-h*i*l+n*u*l+a*i*d-n*o*d)*S,t[4]=_*S,t[5]=(c*f*r-p*u*r+p*i*d-e*f*d-c*i*g+e*u*g)*S,t[6]=(p*o*r-s*f*r-p*i*l+e*f*l+s*i*g-e*o*g)*S,t[7]=(s*u*r-c*o*r+c*i*l-e*u*l-s*i*d+e*o*d)*S,t[8]=x*S,t[9]=(p*h*r-c*m*r-p*n*d+e*m*d+c*n*g-e*h*g)*S,t[10]=(s*m*r-p*a*r+p*n*l-e*m*l-s*n*g+e*a*g)*S,t[11]=(c*a*r-s*h*r-c*n*l+e*h*l+s*n*d-e*a*d)*S,t[12]=y*S,t[13]=(c*m*i-p*h*i+p*n*u-e*m*u-c*n*f+e*h*f)*S,t[14]=(p*a*i-s*m*i-p*n*o+e*m*o+s*n*f-e*a*f)*S,t[15]=(s*h*i-c*a*i+c*n*o-e*h*o-s*n*u+e*a*u)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,o=t.z,l=r*s,c=r*a;return this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,h=a+a,u=r*l,d=r*c,p=r*h,m=s*c,f=s*h,g=a*h,v=o*l,_=o*c,x=o*h,y=n.x,M=n.y,S=n.z;return i[0]=(1-(m+g))*y,i[1]=(d+x)*y,i[2]=(p-_)*y,i[3]=0,i[4]=(d-x)*M,i[5]=(1-(u+g))*M,i[6]=(f+v)*M,i[7]=0,i[8]=(p+_)*S,i[9]=(f-v)*S,i[10]=(1-(u+m))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Be.set(i[0],i[1],i[2]).length();const s=Be.set(i[4],i[5],i[6]).length(),a=Be.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ze.copy(this);const o=1/r,l=1/s,c=1/a;return ze.elements[0]*=o,ze.elements[1]*=o,ze.elements[2]*=o,ze.elements[4]*=l,ze.elements[5]*=l,ze.elements[6]*=l,ze.elements[8]*=c,ze.elements[9]*=c,ze.elements[10]*=c,e.setFromRotationMatrix(ze),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s){const a=this.elements,o=2*r/(e-t),l=2*r/(n-i),c=(e+t)/(e-t),h=(n+i)/(n-i),u=-(s+r)/(s-r),d=-2*s*r/(s-r);return a[0]=o,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,s){const a=this.elements,o=1/(e-t),l=1/(n-i),c=1/(s-r),h=(e+t)*o,u=(n+i)*l,d=(s+r)*c;return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let t=0;t<16;t++)if(e[t]!==n[t])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Be=new oe,ze=new Fe,Ge=new oe(0,0,0),He=new oe(1,1,1),ke=new oe,Ve=new oe,We=new oe,Xe=new Fe,je=new ae;class qe{constructor(t=0,e=0,n=0,i=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,!0===n&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xe.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xe,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return je.setFromEuler(this),this.setFromQuaternion(je,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class Ye{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return 0!=(this.mask&t.mask)}isEnabled(t){return 0!=(this.mask&(1<<t|0))}}let Ze=0;const Je=new oe,Ke=new ae,$e=new Fe,Qe=new oe,tn=new oe,en=new oe,nn=new ae,rn=new oe(1,0,0),sn=new oe(0,1,0),an=new oe(0,0,1),on={type:"added"},ln={type:"removed"};class cn extends xt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ze++}),this.uuid=Et(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const t=new oe,e=new qe,n=new ae,i=new oe(1,1,1);e._onChange((function(){n.setFromEuler(e,!1)})),n._onChange((function(){e.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Nt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ye,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ke.setFromAxisAngle(t,e),this.quaternion.multiply(Ke),this}rotateOnWorldAxis(t,e){return Ke.setFromAxisAngle(t,e),this.quaternion.premultiply(Ke),this}rotateX(t){return this.rotateOnAxis(rn,t)}rotateY(t){return this.rotateOnAxis(sn,t)}rotateZ(t){return this.rotateOnAxis(an,t)}translateOnAxis(t,e){return Je.copy(t).applyQuaternion(this.quaternion),this.position.add(Je.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rn,t)}translateY(t){return this.translateOnAxis(sn,t)}translateZ(t){return this.translateOnAxis(an,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($e.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qe.copy(t):Qe.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$e.lookAt(tn,Qe,this.up):$e.lookAt(Qe,tn,this.up),this.quaternion.setFromRotationMatrix($e),i&&($e.extractRotation(i.matrixWorld),Ke.setFromRotationMatrix($e),this.quaternion.premultiply(Ke.invert()))}add(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(on)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(t);return-1!==e&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ln)),this}removeFromParent(){const t=this.parent;return null!==t&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ln)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),$e.copy(this.matrixWorld).invert(),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),$e.multiply(t.parent.matrixWorld)),t.applyMatrix4($e),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const i=this.children[n].getObjectByProperty(t,e);if(void 0!==i)return i}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tn,t,en),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tn,nn,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(!1===this.visible)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;null!==e&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const i=e[n];!0!==i.matrixWorldAutoUpdate&&!0!==t||i.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(!0===t&&null!==n&&!0===n.matrixWorldAutoUpdate&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e){const t=this.children;for(let e=0,n=t.length;e<n;e++){const n=t[e];!0===n.matrixWorldAutoUpdate&&n.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=void 0===t||"string"==typeof t,n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};function r(e,n){return void 0===e[n.uuid]&&(e[n.uuid]=n.toJSON(t)),n.uuid}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),!0===this.castShadow&&(i.castShadow=!0),!0===this.receiveShadow&&(i.receiveShadow=!0),!1===this.visible&&(i.visible=!1),!1===this.frustumCulled&&(i.frustumCulled=!1),0!==this.renderOrder&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(i.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const e=this.geometry.parameters;if(void 0!==e&&void 0!==e.shapes){const n=e.shapes;if(Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const i=n[e];r(t.shapes,i)}else r(t.shapes,n)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){const e=[];for(let n=0,i=this.material.length;n<i;n++)e.push(r(t.materials,this.material[n]));i.material=e}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let e=0;e<this.children.length;e++)i.children.push(this.children[e].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let e=0;e<this.animations.length;e++){const n=this.animations[e];i.animations.push(r(t.animations,n))}}if(e){const e=s(t.geometries),i=s(t.materials),r=s(t.textures),a=s(t.images),o=s(t.shapes),l=s(t.skeletons),c=s(t.animations),h=s(t.nodes);e.length>0&&(n.geometries=e),i.length>0&&(n.materials=i),r.length>0&&(n.textures=r),a.length>0&&(n.images=a),o.length>0&&(n.shapes=o),l.length>0&&(n.skeletons=l),c.length>0&&(n.animations=c),h.length>0&&(n.nodes=h)}return n.object=i,n;function s(t){const e=[];for(const n in t){const i=t[n];delete i.metadata,e.push(i)}return e}}clone(t){return(new this.constructor).copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let e=0;e<t.children.length;e++){const n=t.children[e];this.add(n.clone())}return this}}cn.DEFAULT_UP=new oe(0,1,0),cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new oe,un=new oe,dn=new oe,pn=new oe,mn=new oe,fn=new oe,gn=new oe,vn=new oe,_n=new oe,xn=new oe;let yn=!1;class Mn{constructor(t=new oe,e=new oe,n=new oe){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){hn.subVectors(i,e),un.subVectors(n,e),dn.subVectors(t,e);const s=hn.dot(hn),a=hn.dot(un),o=hn.dot(dn),l=un.dot(un),c=un.dot(dn),h=s*l-a*a;if(0===h)return r.set(-2,-1,-1);const u=1/h,d=(l*o-a*c)*u,p=(s*c-a*o)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(t,e,n,i,r,s,a,o){return!1===yn&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yn=!0),this.getInterpolation(t,e,n,i,r,s,a,o)}static getInterpolation(t,e,n,i,r,s,a,o){return this.getBarycoord(t,e,n,i,pn),o.setScalar(0),o.addScaledVector(r,pn.x),o.addScaledVector(s,pn.y),o.addScaledVector(a,pn.z),o}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),un.subVectors(t,e),hn.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),un.subVectors(this.a,this.b),.5*hn.cross(un).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return!1===yn&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yn=!0),Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let s,a;mn.subVectors(i,n),fn.subVectors(r,n),vn.subVectors(t,n);const o=mn.dot(vn),l=fn.dot(vn);if(o<=0&&l<=0)return e.copy(n);_n.subVectors(t,i);const c=mn.dot(_n),h=fn.dot(_n);if(c>=0&&h<=c)return e.copy(i);const u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(n).addScaledVector(mn,s);xn.subVectors(t,r);const d=mn.dot(xn),p=fn.dot(xn);if(p>=0&&d<=p)return e.copy(r);const m=d*l-o*p;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(fn,a);const f=c*p-d*h;if(f<=0&&h-c>=0&&d-p>=0)return gn.subVectors(r,i),a=(h-c)/(h-c+(d-p)),e.copy(i).addScaledVector(gn,a);const g=1/(f+m+u);return s=m*g,a=u*g,e.copy(n).addScaledVector(mn,s).addScaledVector(fn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Sn=0;class bn extends xt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=Et(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ft,this.stencilZFail=ft,this.stencilZPass=ft,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(void 0!==t)for(const e in t){const n=t[e];if(void 0===n){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];void 0!==i?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){const e=void 0===t||"string"==typeof t;e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(t){const e=[];for(const n in t){const i=t[n];delete i.metadata,e.push(i)}return e}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),void 0!==this.roughness&&(n.roughness=this.roughness),void 0!==this.metalness&&(n.metalness=this.metalness),void 0!==this.sheen&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(n.shininess=this.shininess),void 0!==this.clearcoat&&(n.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(n.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(n.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,void 0!==this.combine&&(n.combine=this.combine)),void 0!==this.envMapIntensity&&(n.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(n.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.transmission&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),void 0!==this.thickness&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(n.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(n.size=this.size),null!==this.shadowSide&&(n.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(n.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(n.blending=this.blending),0!==this.side&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),0!==this.polygonOffsetFactor&&(n.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(n.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(n.linewidth=this.linewidth),void 0!==this.dashSize&&(n.dashSize=this.dashSize),void 0!==this.gapSize&&(n.gapSize=this.gapSize),void 0!==this.scale&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(n.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=this.premultipliedAlpha),!0===this.forceSinglePass&&(n.forceSinglePass=this.forceSinglePass),!0===this.wireframe&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(n.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(n.flatShading=this.flatShading),!1===this.visible&&(n.visible=!1),!1===this.toneMapped&&(n.toneMapped=!1),!1===this.fog&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),e){const e=i(t.textures),r=i(t.images);e.length>0&&(n.textures=e),r.length>0&&(n.images=r)}return n}clone(){return(new this.constructor).copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(null!==e){const t=e.length;n=new Array(t);for(let i=0;i!==t;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){!0===t&&this.version++}}const En={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},wn={h:0,s:0,l:0};function An(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}class Rn{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,void 0===e&&void 0===n?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):"number"==typeof t?this.setHex(t):"string"==typeof t&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=wt(t,1),e=Tt(e,0,1),n=Tt(n,0,1),0===e)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=An(r,i,t+1/3),this.g=An(r,i,t),this.b=An(r,i,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=dt){function n(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const n=i[1],r=n.length;if(3===r)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(6===r)return this.setHex(parseInt(n,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dt){const n=En[t.toLowerCase()];return void 0!==n?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vt(t.r),this.g=Vt(t.g),this.b=Vt(t.b),this}copyLinearToSRGB(t){return this.r=Wt(t.r),this.g=Wt(t.g),this.b=Wt(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dt){return Zt.fromWorkingColorSpace(Cn.copy(this),t),65536*Math.round(Tt(255*Cn.r,0,255))+256*Math.round(Tt(255*Cn.g,0,255))+Math.round(Tt(255*Cn.b,0,255))}getHexString(t=dt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Cn.copy(this),e);const n=Cn.r,i=Cn.g,r=Cn.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const t=s-a;switch(l=c<=.5?t/(s+a):t/(2-s-a),s){case n:o=(i-r)/t+(i<r?6:0);break;case i:o=(r-n)/t+2;break;case r:o=(n-i)/t+4}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Cn.copy(this),e),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=dt){Zt.fromWorkingColorSpace(Cn.copy(this),t);const e=Cn.r,n=Cn.g,i=Cn.b;return t!==dt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(t,e,n){return this.getHSL(Tn),Tn.h+=t,Tn.s+=e,Tn.l+=n,this.setHSL(Tn.h,Tn.s,Tn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(wn);const n=At(Tn.h,wn.h,e),i=At(Tn.s,wn.s,e),r=At(Tn.l,wn.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Rn;Rn.NAMES=En;class Ln extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pn=In();function In(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let t=0;t<256;++t){const e=t-127;e<-27?(i[t]=0,i[256|t]=32768,r[t]=24,r[256|t]=24):e<-14?(i[t]=1024>>-e-14,i[256|t]=1024>>-e-14|32768,r[t]=-e-1,r[256|t]=-e-1):e<=15?(i[t]=e+15<<10,i[256|t]=e+15<<10|32768,r[t]=13,r[256|t]=13):e<128?(i[t]=31744,i[256|t]=64512,r[t]=24,r[256|t]=24):(i[t]=31744,i[256|t]=64512,r[t]=13,r[256|t]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let t=1;t<1024;++t){let e=t<<13,n=0;for(;0==(8388608&e);)e<<=1,n-=8388608;e&=-8388609,n+=947912704,s[t]=e|n}for(let t=1024;t<2048;++t)s[t]=939524096+(t-1024<<13);for(let t=1;t<31;++t)a[t]=t<<23;a[31]=1199570944,a[32]=2147483648;for(let t=33;t<63;++t)a[t]=2147483648+(t-32<<23);a[63]=3347054592;for(let t=1;t<64;++t)32!==t&&(o[t]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Un(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=Tt(t,-65504,65504),Pn.floatView[0]=t;const e=Pn.uint32View[0],n=e>>23&511;return Pn.baseTable[n]+((8388607&e)>>Pn.shiftTable[n])}function Dn(t){const e=t>>10;return Pn.uint32View[0]=Pn.mantissaTable[Pn.offsetTable[e]+(1023&t)]+Pn.exponentTable[e],Pn.floatView[0]}const Nn={toHalfFloat:Un,fromHalfFloat:Dn},On=new oe,Fn=new Dt;class Bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=n,this.usage=gt,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(2===this.itemSize)for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix3(t),this.setXY(e,Fn.x,Fn.y);else if(3===this.itemSize)for(let e=0,n=this.count;e<n;e++)On.fromBufferAttribute(this,e),On.applyMatrix3(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)On.fromBufferAttribute(this,e),On.applyMatrix4(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)On.fromBufferAttribute(this,e),On.applyNormalMatrix(t),this.setXYZ(e,On.x,On.y,On.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)On.fromBufferAttribute(this,e),On.transformDirection(t),this.setXYZ(e,On.x,On.y,On.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pt(e,this.array)),e}setX(t,e){return this.normalized&&(e=It(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pt(e,this.array)),e}setY(t,e){return this.normalized&&(e=It(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pt(e,this.array)),e}setZ(t,e){return this.normalized&&(e=It(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pt(e,this.array)),e}setW(t,e){return this.normalized&&(e=It(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=It(e,this.array),n=It(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=It(e,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=It(e,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(t.name=this.name),this.usage!==gt&&(t.usage=this.usage),0===this.updateRange.offset&&-1===this.updateRange.count||(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zn extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gn extends Bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Hn extends Bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kn=0;const Vn=new Fe,Wn=new cn,Xn=new oe,jn=new he,qn=new he,Yn=new oe;class Zn extends xt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kn++}),this.uuid=Et(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ft(t)?Gn:zn)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return void 0!==this.attributes[t]}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;void 0!==e&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(void 0!==n){const e=(new Nt).getNormalMatrix(t);n.applyNormalMatrix(e),n.needsUpdate=!0}const i=this.attributes.tangent;return void 0!==i&&(i.transformDirection(t),i.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return Wn.lookAt(t),Wn.updateMatrix(),this.applyMatrix4(Wn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n];e.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Hn(e,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new he);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),e)for(let t=0,n=e.length;t<n;t++){const n=e[t];jn.setFromBufferAttribute(n),this.morphTargetsRelative?(Yn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(Yn),Yn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(Yn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new Re);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new oe,1/0);if(t){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),e)for(let t=0,n=e.length;t<n;t++){const n=e[t];qn.setFromBufferAttribute(n),this.morphTargetsRelative?(Yn.addVectors(jn.min,qn.min),jn.expandByPoint(Yn),Yn.addVectors(jn.max,qn.max),jn.expandByPoint(Yn)):(jn.expandByPoint(qn.min),jn.expandByPoint(qn.max))}jn.getCenter(n);let i=0;for(let e=0,r=t.count;e<r;e++)Yn.fromBufferAttribute(t,e),i=Math.max(i,n.distanceToSquared(Yn));if(e)for(let r=0,s=e.length;r<s;r++){const s=e[r],a=this.morphTargetsRelative;for(let e=0,r=s.count;e<r;e++)Yn.fromBufferAttribute(s,e),a&&(Xn.fromBufferAttribute(t,e),Yn.add(Xn)),i=Math.max(i,n.distanceToSquared(Yn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(null===t||void 0===e.position||void 0===e.normal||void 0===e.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=t.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],c=[];for(let t=0;t<a;t++)l[t]=new oe,c[t]=new oe;const h=new oe,u=new oe,d=new oe,p=new Dt,m=new Dt,f=new Dt,g=new oe,v=new oe;function _(t,e,n){h.fromArray(i,3*t),u.fromArray(i,3*e),d.fromArray(i,3*n),p.fromArray(s,2*t),m.fromArray(s,2*e),f.fromArray(s,2*n),u.sub(h),d.sub(h),m.sub(p),f.sub(p);const r=1/(m.x*f.y-f.x*m.y);isFinite(r)&&(g.copy(u).multiplyScalar(f.y).addScaledVector(d,-m.y).multiplyScalar(r),v.copy(d).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(r),l[t].add(g),l[e].add(g),l[n].add(g),c[t].add(v),c[e].add(v),c[n].add(v))}let x=this.groups;0===x.length&&(x=[{start:0,count:n.length}]);for(let t=0,e=x.length;t<e;++t){const e=x[t],i=e.start;for(let t=i,r=i+e.count;t<r;t+=3)_(n[t+0],n[t+1],n[t+2])}const y=new oe,M=new oe,S=new oe,b=new oe;function E(t){S.fromArray(r,3*t),b.copy(S);const e=l[t];y.copy(e),y.sub(S.multiplyScalar(S.dot(e))).normalize(),M.crossVectors(b,e);const n=M.dot(c[t])<0?-1:1;o[4*t]=y.x,o[4*t+1]=y.y,o[4*t+2]=y.z,o[4*t+3]=n}for(let t=0,e=x.length;t<e;++t){const e=x[t],i=e.start;for(let t=i,r=i+e.count;t<r;t+=3)E(n[t+0]),E(n[t+1]),E(n[t+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(void 0!==e){let n=this.getAttribute("normal");if(void 0===n)n=new Bn(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let t=0,e=n.count;t<e;t++)n.setXYZ(t,0,0,0);const i=new oe,r=new oe,s=new oe,a=new oe,o=new oe,l=new oe,c=new oe,h=new oe;if(t)for(let u=0,d=t.count;u<d;u+=3){const d=t.getX(u+0),p=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),a.fromBufferAttribute(n,d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),a.add(c),o.add(c),l.add(c),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let t=0,a=e.count;t<a;t+=3)i.fromBufferAttribute(e,t+0),r.fromBufferAttribute(e,t+1),s.fromBufferAttribute(e,t+2),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),n.setXYZ(t+0,c.x,c.y,c.z),n.setXYZ(t+1,c.x,c.y,c.z),n.setXYZ(t+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Yn.fromBufferAttribute(t,e),Yn.normalize(),t.setXYZ(e,Yn.x,Yn.y,Yn.z)}toNonIndexed(){function t(t,e){const n=t.array,i=t.itemSize,r=t.normalized,s=new n.constructor(e.length*i);let a=0,o=0;for(let r=0,l=e.length;r<l;r++){a=t.isInterleavedBufferAttribute?e[r]*t.data.stride+t.offset:e[r]*i;for(let t=0;t<i;t++)s[o++]=n[a++]}return new Bn(s,i,r)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zn,n=this.index.array,i=this.attributes;for(const r in i){const s=t(i[r],n);e.setAttribute(r,s)}const r=this.morphAttributes;for(const i in r){const s=[],a=r[i];for(let e=0,i=a.length;e<i;e++){const i=t(a[e],n);s.push(i)}e.morphAttributes[i]=s}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let t=0,n=s.length;t<n;t++){const n=s[t];e.addGroup(n.start,n.count,n.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){const e=this.parameters;for(const n in e)void 0!==e[n]&&(t[n]=e[n]);return t}t.data={attributes:{}};const e=this.index;null!==e&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const e in n){const i=n[e];t.data.attributes[e]=i.toJSON(t.data)}const i={};let r=!1;for(const e in this.morphAttributes){const n=this.morphAttributes[e],s=[];for(let e=0,i=n.length;e<i;e++){const i=n[e];s.push(i.toJSON(t.data))}s.length>0&&(i[e]=s,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return null!==a&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return(new this.constructor).copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;null!==n&&this.setIndex(n.clone(e));const i=t.attributes;for(const t in i){const n=i[t];this.setAttribute(t,n.clone(e))}const r=t.morphAttributes;for(const t in r){const n=[],i=r[t];for(let t=0,r=i.length;t<r;t++)n.push(i[t].clone(e));this.morphAttributes[t]=n}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let t=0,e=s.length;t<e;t++){const e=s[t];this.addGroup(e.start,e.count,e.materialIndex)}const a=t.boundingBox;null!==a&&(this.boundingBox=a.clone());const o=t.boundingSphere;return null!==o&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jn=new Fe,Kn=new Oe,$n=new Re,Qn=new oe,ti=new oe,ei=new oe,ni=new oe,ii=new oe,ri=new oe,si=new Dt,ai=new Dt,oi=new Dt,li=new oe,ci=new oe,hi=new oe,ui=new oe,di=new oe;class pi extends cn{constructor(t=new Zn,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=n.length;t<e;t++){const e=n[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ri.set(0,0,0);for(let n=0,i=r.length;n<i;n++){const i=a[n],o=r[n];0!==i&&(ii.fromBufferAttribute(o,t),s?ri.addScaledVector(ii,i):ri.addScaledVector(ii.sub(e),i))}e.add(ri)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(void 0!==i){if(null===n.boundingSphere&&n.computeBoundingSphere(),$n.copy(n.boundingSphere),$n.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!1===$n.containsPoint(Kn.origin)){if(null===Kn.intersectSphere($n,Qn))return;if(Kn.origin.distanceToSquared(Qn)>(t.far-t.near)**2)return}Jn.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(Jn),null!==n.boundingBox&&!1===Kn.intersectsBox(n.boundingBox)||this._computeIntersections(t,e)}}_computeIntersections(t,e){let n;const i=this.geometry,r=this.material,s=i.index,a=i.attributes.position,o=i.attributes.uv,l=i.attributes.uv1,c=i.attributes.normal,h=i.groups,u=i.drawRange;if(null!==s)if(Array.isArray(r))for(let i=0,a=h.length;i<a;i++){const a=h[i],d=r[a.materialIndex];for(let i=Math.max(a.start,u.start),r=Math.min(s.count,Math.min(a.start+a.count,u.start+u.count));i<r;i+=3){const r=s.getX(i),h=s.getX(i+1),u=s.getX(i+2);n=mi(this,d,t,Kn,o,l,c,r,h,u),n&&(n.faceIndex=Math.floor(i/3),n.face.materialIndex=a.materialIndex,e.push(n))}}else{for(let i=Math.max(0,u.start),a=Math.min(s.count,u.start+u.count);i<a;i+=3){const a=s.getX(i),h=s.getX(i+1),u=s.getX(i+2);n=mi(this,r,t,Kn,o,l,c,a,h,u),n&&(n.faceIndex=Math.floor(i/3),e.push(n))}}else if(void 0!==a)if(Array.isArray(r))for(let i=0,s=h.length;i<s;i++){const s=h[i],d=r[s.materialIndex];for(let i=Math.max(s.start,u.start),r=Math.min(a.count,Math.min(s.start+s.count,u.start+u.count));i<r;i+=3){n=mi(this,d,t,Kn,o,l,c,i,i+1,i+2),n&&(n.faceIndex=Math.floor(i/3),n.face.materialIndex=s.materialIndex,e.push(n))}}else{for(let i=Math.max(0,u.start),s=Math.min(a.count,u.start+u.count);i<s;i+=3){n=mi(this,r,t,Kn,o,l,c,i,i+1,i+2),n&&(n.faceIndex=Math.floor(i/3),e.push(n))}}}}function mi(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ti),t.getVertexPosition(l,ei),t.getVertexPosition(c,ni);const h=function(t,e,n,i,r,s,a,o){let l;if(l=1===e.side?i.intersectTriangle(a,s,r,!0,o):i.intersectTriangle(r,s,a,0===e.side,o),null===l)return null;di.copy(o),di.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(di);return c<n.near||c>n.far?null:{distance:c,point:di.clone(),object:t}}(t,e,n,i,ti,ei,ni,ui);if(h){r&&(si.fromBufferAttribute(r,o),ai.fromBufferAttribute(r,l),oi.fromBufferAttribute(r,c),h.uv=Mn.getInterpolation(ui,ti,ei,ni,si,ai,oi,new Dt)),s&&(si.fromBufferAttribute(s,o),ai.fromBufferAttribute(s,l),oi.fromBufferAttribute(s,c),h.uv1=Mn.getInterpolation(ui,ti,ei,ni,si,ai,oi,new Dt),h.uv2=h.uv1),a&&(li.fromBufferAttribute(a,o),ci.fromBufferAttribute(a,l),hi.fromBufferAttribute(a,c),h.normal=Mn.getInterpolation(ui,ti,ei,ni,li,ci,hi,new oe),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const t={a:o,b:l,c:c,normal:new oe,materialIndex:0};Mn.getNormal(ti,ei,ni,t.normal),h.face=t}return h}class fi extends Zn{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],h=[];let u=0,d=0;function p(t,e,n,i,r,s,p,m,f,g,v){const _=s/f,x=p/g,y=s/2,M=p/2,S=m/2,b=f+1,E=g+1;let T=0,w=0;const A=new oe;for(let s=0;s<E;s++){const a=s*x-M;for(let o=0;o<b;o++){const u=o*_-y;A[t]=u*i,A[e]=a*r,A[n]=S,l.push(A.x,A.y,A.z),A[t]=0,A[e]=0,A[n]=m>0?1:-1,c.push(A.x,A.y,A.z),h.push(o/f),h.push(1-s/g),T+=1}}for(let t=0;t<g;t++)for(let e=0;e<f;e++){const n=u+e+b*t,i=u+e+b*(t+1),r=u+(e+1)+b*(t+1),s=u+(e+1)+b*t;o.push(n,i,s),o.push(i,r,s),w+=6}a.addGroup(d,w,v),d+=w,u+=T}p("z","y","x",-1,-1,n,e,t,s,r,0),p("z","y","x",1,-1,n,e,-t,s,r,1),p("x","z","y",1,1,t,n,e,i,s,2),p("x","z","y",1,-1,t,n,-e,i,s,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new Hn(l,3)),this.setAttribute("normal",new Hn(c,3)),this.setAttribute("uv",new Hn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gi(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function vi(t){const e={};for(let n=0;n<t.length;n++){const i=gi(t[n]);for(const t in i)e[t]=i[t]}return e}function _i(t){return null===t.getRenderTarget()?t.outputColorSpace:pt}const xi={clone:gi,merge:vi};class yi extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=function(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const i=this.uniforms[n].value;i&&i.isTexture?e.uniforms[n]={type:"t",value:i.toJSON(t).uuid}:i&&i.isColor?e.uniforms[n]={type:"c",value:i.getHex()}:i&&i.isVector2?e.uniforms[n]={type:"v2",value:i.toArray()}:i&&i.isVector3?e.uniforms[n]={type:"v3",value:i.toArray()}:i&&i.isVector4?e.uniforms[n]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[n]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[n]={type:"m4",value:i.toArray()}:e.uniforms[n]={value:i}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const t in this.extensions)!0===this.extensions[t]&&(n[t]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mi extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}}class Si extends Mi{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*bt*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(.5*St*this.fov);return.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*bt*Math.atan(Math.tan(.5*St*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*St*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(null!==this.view&&this.view.enabled){const t=s.fullWidth,a=s.fullHeight;r+=s.offsetX*i/t,e-=s.offsetY*n/a,i*=s.width/t,n*=s.height/a}const a=this.filmOffset;0!==a&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bi=-90;class Ei extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Si(bi,1,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Si(bi,1,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Si(bi,1,t,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Si(bi,1,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const o=new Si(bi,1,t,e);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const l=new Si(bi,1,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){null===this.parent&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,o,l]=this.children,c=t.getRenderTarget(),h=t.toneMapping,u=t.xr.enabled;t.toneMapping=0,t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,s),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,o),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(c),t.toneMapping=h,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ti extends ee{constructor(t,e,n,i,s,a,o,l,c,h){super(t=void 0!==t?t:[],e=void 0!==e?e:r,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wi extends ie{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];void 0!==e.encoding&&(kt("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ht?dt:ut),this.texture=new Ti(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==e.generateMipmaps&&e.generateMipmaps,this.texture.minFilter=void 0!==e.minFilter?e.minFilter:f}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:"\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"},i=new fi(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new pi(i,r),a=e.minFilter;e.minFilter===v&&(e.minFilter=f);return new Ei(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(r)}}const Ai=new oe,Ri=new oe,Ci=new Nt;class Li{constructor(t=new oe(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ai.subVectors(n,e).cross(Ri.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ai),i=this.normal.dot(n);if(0===i)return 0===this.distanceToPoint(t.start)?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ci.getNormalMatrix(t),i=this.coplanarPoint(Ai).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return(new this.constructor).copy(this)}}const Pi=new Re,Ii=new oe;class Ui{constructor(t=new Li,e=new Li,n=new Li,i=new Li,r=new Li,s=new Li){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],s=n[2],a=n[3],o=n[4],l=n[5],c=n[6],h=n[7],u=n[8],d=n[9],p=n[10],m=n[11],f=n[12],g=n[13],v=n[14],_=n[15];return e[0].setComponents(a-i,h-o,m-u,_-f).normalize(),e[1].setComponents(a+i,h+o,m+u,_+f).normalize(),e[2].setComponents(a+r,h+l,m+d,_+g).normalize(),e[3].setComponents(a-r,h-l,m-d,_-g).normalize(),e[4].setComponents(a-s,h-c,m-p,_-v).normalize(),e[5].setComponents(a+s,h+c,m+p,_+v).normalize(),this}intersectsObject(t){if(void 0!==t.boundingSphere)null===t.boundingSphere&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;null===e.boundingSphere&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let t=0;t<6;t++){if(e[t].distanceToPoint(n)<i)return!1}return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ii.x=i.normal.x>0?t.max.x:t.min.x,Ii.y=i.normal.y>0?t.max.y:t.min.y,Ii.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ii)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}}function Di(){let t=null,e=!1,n=null,i=null;function r(e,s){n(e,s),i=t.requestAnimationFrame(r)}return{start:function(){!0!==e&&null!==n&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(t){n=t},setContext:function(e){t=e}}}function Ni(t,e){const n=e.isWebGL2,i=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),i.get(t)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);const n=i.get(e);n&&(t.deleteBuffer(n.buffer),i.delete(e))},update:function(e,r){if(e.isGLBufferAttribute){const t=i.get(e);return void((!t||t.version<e.version)&&i.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}e.isInterleavedBufferAttribute&&(e=e.data);const s=i.get(e);void 0===s?i.set(e,function(e,i){const r=e.array,s=e.usage,a=t.createBuffer();let o;if(t.bindBuffer(i,a),t.bufferData(i,r,s),e.onUploadCallback(),r instanceof Float32Array)o=t.FLOAT;else if(r instanceof Uint16Array)if(e.isFloat16BufferAttribute){if(!n)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");o=t.HALF_FLOAT}else o=t.UNSIGNED_SHORT;else if(r instanceof Int16Array)o=t.SHORT;else if(r instanceof Uint32Array)o=t.UNSIGNED_INT;else if(r instanceof Int32Array)o=t.INT;else if(r instanceof Int8Array)o=t.BYTE;else if(r instanceof Uint8Array)o=t.UNSIGNED_BYTE;else{if(!(r instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+r);o=t.UNSIGNED_BYTE}return{buffer:a,type:o,bytesPerElement:r.BYTES_PER_ELEMENT,version:e.version}}(e,r)):s.version<e.version&&(!function(e,i,r){const s=i.array,a=i.updateRange;t.bindBuffer(r,e),-1===a.count?t.bufferSubData(r,0,s):(n?t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s,a.offset,a.count):t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s.subarray(a.offset,a.offset+a.count)),a.count=-1),i.onUploadCallback()}(s.buffer,e,r),s.version=e.version)}}}class Oi extends Zn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,u=e/o,d=[],p=[],m=[],f=[];for(let t=0;t<c;t++){const e=t*u-s;for(let n=0;n<l;n++){const i=n*h-r;p.push(i,-e,0),m.push(0,0,1),f.push(n/a),f.push(1-t/o)}}for(let t=0;t<o;t++)for(let e=0;e<a;e++){const n=e+l*t,i=e+l*(t+1),r=e+1+l*(t+1),s=e+1+l*t;d.push(n,i,s),d.push(i,r,s)}this.setIndex(d),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(m,3)),this.setAttribute("uv",new Hn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.widthSegments,t.heightSegments)}}const Fi={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",alphatest_pars_fragment:"#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",iridescence_fragment:"#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",color_fragment:"#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",color_vertex:"#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",common:"#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_fragment:"LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",lights_lambert_pars_fragment:"varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( LEGACY_LIGHTS )\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#else\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, vMapUv );\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphcolor_vertex:"#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",normal_fragment_begin:"float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_NORMALMAP_TANGENTSPACE\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 geometryNormal = normal;",normal_fragment_maps:"#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",normal_pars_fragment:"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",normal_pars_vertex:"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",normal_vertex:"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",clearcoat_pars_fragment:"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",iridescence_pars_fragment:"#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",output_fragment:"#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",transmission_fragment:"#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",transmission_pars_fragment:"#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",uv_pars_fragment:"#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",background_frag:"uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",backgroundCube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",backgroundCube_frag:"#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshnormal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",meshnormal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",shadow_vert:"#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"},Bi={common:{diffuse:{value:new Rn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Rn(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}}},zi={basic:{uniforms:vi([Bi.common,Bi.specularmap,Bi.envmap,Bi.aomap,Bi.lightmap,Bi.fog]),vertexShader:Fi.meshbasic_vert,fragmentShader:Fi.meshbasic_frag},lambert:{uniforms:vi([Bi.common,Bi.specularmap,Bi.envmap,Bi.aomap,Bi.lightmap,Bi.emissivemap,Bi.bumpmap,Bi.normalmap,Bi.displacementmap,Bi.fog,Bi.lights,{emissive:{value:new Rn(0)}}]),vertexShader:Fi.meshlambert_vert,fragmentShader:Fi.meshlambert_frag},phong:{uniforms:vi([Bi.common,Bi.specularmap,Bi.envmap,Bi.aomap,Bi.lightmap,Bi.emissivemap,Bi.bumpmap,Bi.normalmap,Bi.displacementmap,Bi.fog,Bi.lights,{emissive:{value:new Rn(0)},specular:{value:new Rn(1118481)},shininess:{value:30}}]),vertexShader:Fi.meshphong_vert,fragmentShader:Fi.meshphong_frag},standard:{uniforms:vi([Bi.common,Bi.envmap,Bi.aomap,Bi.lightmap,Bi.emissivemap,Bi.bumpmap,Bi.normalmap,Bi.displacementmap,Bi.roughnessmap,Bi.metalnessmap,Bi.fog,Bi.lights,{emissive:{value:new Rn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fi.meshphysical_vert,fragmentShader:Fi.meshphysical_frag},toon:{uniforms:vi([Bi.common,Bi.aomap,Bi.lightmap,Bi.emissivemap,Bi.bumpmap,Bi.normalmap,Bi.displacementmap,Bi.gradientmap,Bi.fog,Bi.lights,{emissive:{value:new Rn(0)}}]),vertexShader:Fi.meshtoon_vert,fragmentShader:Fi.meshtoon_frag},matcap:{uniforms:vi([Bi.common,Bi.bumpmap,Bi.normalmap,Bi.displacementmap,Bi.fog,{matcap:{value:null}}]),vertexShader:Fi.meshmatcap_vert,fragmentShader:Fi.meshmatcap_frag},points:{uniforms:vi([Bi.points,Bi.fog]),vertexShader:Fi.points_vert,fragmentShader:Fi.points_frag},dashed:{uniforms:vi([Bi.common,Bi.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fi.linedashed_vert,fragmentShader:Fi.linedashed_frag},depth:{uniforms:vi([Bi.common,Bi.displacementmap]),vertexShader:Fi.depth_vert,fragmentShader:Fi.depth_frag},normal:{uniforms:vi([Bi.common,Bi.bumpmap,Bi.normalmap,Bi.displacementmap,{opacity:{value:1}}]),vertexShader:Fi.meshnormal_vert,fragmentShader:Fi.meshnormal_frag},sprite:{uniforms:vi([Bi.sprite,Bi.fog]),vertexShader:Fi.sprite_vert,fragmentShader:Fi.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fi.background_vert,fragmentShader:Fi.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fi.backgroundCube_vert,fragmentShader:Fi.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fi.cube_vert,fragmentShader:Fi.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fi.equirect_vert,fragmentShader:Fi.equirect_frag},distanceRGBA:{uniforms:vi([Bi.common,Bi.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fi.distanceRGBA_vert,fragmentShader:Fi.distanceRGBA_frag},shadow:{uniforms:vi([Bi.lights,Bi.fog,{color:{value:new Rn(0)},opacity:{value:1}}]),vertexShader:Fi.shadow_vert,fragmentShader:Fi.shadow_frag}};zi.physical={uniforms:vi([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Rn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Rn(0)},specularColor:{value:new Rn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt}}]),vertexShader:Fi.meshphysical_vert,fragmentShader:Fi.meshphysical_frag};const Gi={r:0,b:0,g:0};function Hi(t,e,n,i,r,s,a){const o=new Rn(0);let c,h,u=!0===s?0:1,d=null,p=0,m=null;function f(e,n){e.getRGB(Gi,_i(t)),i.buffers.color.setClear(Gi.r,Gi.g,Gi.b,n,a)}return{getClearColor:function(){return o},setClearColor:function(t,e=1){o.set(t),u=e,f(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(t){u=t,f(o,u)},render:function(s,g){let v=!1,_=!0===g.isScene?g.background:null;if(_&&_.isTexture){_=(g.backgroundBlurriness>0?n:e).get(_)}switch(null===_?f(o,u):_&&_.isColor&&(f(_,1),v=!0),t.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),v=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),v=!0}(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===l)?(void 0===h&&(h=new pi(new fi(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:gi(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(t,e,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&!1===_.isRenderTargetTexture?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=_.colorSpace!==dt,d===_&&p===_.version&&m===t.toneMapping||(h.material.needsUpdate=!0,d=_,p=_.version,m=t.toneMapping),h.layers.enableAll(),s.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(void 0===c&&(c=new pi(new Oi(2,2),new yi({name:"BackgroundMaterial",uniforms:gi(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=_.colorSpace!==dt,!0===_.matrixAutoUpdate&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),d===_&&p===_.version&&m===t.toneMapping||(c.material.needsUpdate=!0,d=_,p=_.version,m=t.toneMapping),c.layers.enableAll(),s.unshift(c,c.geometry,c.material,0,0,null))}}}function ki(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||null!==s,o={},l=p(null);let c=l,h=!1;function u(e){return i.isWebGL2?t.bindVertexArray(e):s.bindVertexArrayOES(e)}function d(e){return i.isWebGL2?t.deleteVertexArray(e):s.deleteVertexArrayOES(e)}function p(t){const e=[],n=[],i=[];for(let t=0;t<r;t++)e[t]=0,n[t]=0,i[t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:n,attributeDivisors:i,object:t,attributes:{},index:null}}function m(){const t=c.newAttributes;for(let e=0,n=t.length;e<n;e++)t[e]=0}function f(t){g(t,0)}function g(n,r){const s=c.newAttributes,a=c.enabledAttributes,o=c.attributeDivisors;if(s[n]=1,0===a[n]&&(t.enableVertexAttribArray(n),a[n]=1),o[n]!==r){(i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](n,r),o[n]=r}}function v(){const e=c.newAttributes,n=c.enabledAttributes;for(let i=0,r=n.length;i<r;i++)n[i]!==e[i]&&(t.disableVertexAttribArray(i),n[i]=0)}function _(e,n,r,s,a,o){!0!==i.isWebGL2||r!==t.INT&&r!==t.UNSIGNED_INT?t.vertexAttribPointer(e,n,r,s,a,o):t.vertexAttribIPointer(e,n,r,a,o)}function x(){y(),h=!0,c!==l&&(c=l,u(c.object))}function y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(r,l,d,x,y){let M=!1;if(a){const e=function(e,n,r){const a=!0===r.wireframe;let l=o[e.id];void 0===l&&(l={},o[e.id]=l);let c=l[n.id];void 0===c&&(c={},l[n.id]=c);let h=c[a];void 0===h&&(h=p(i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()),c[a]=h);return h}(x,d,l);c!==e&&(c=e,u(c.object)),M=function(t,e,n,i){const r=c.attributes,s=e.attributes;let a=0;const o=n.getAttributes();for(const e in o){if(o[e].location>=0){const n=r[e];let i=s[e];if(void 0===i&&("instanceMatrix"===e&&t.instanceMatrix&&(i=t.instanceMatrix),"instanceColor"===e&&t.instanceColor&&(i=t.instanceColor)),void 0===n)return!0;if(n.attribute!==i)return!0;if(i&&n.data!==i.data)return!0;a++}}return c.attributesNum!==a||c.index!==i}(r,x,d,y),M&&function(t,e,n,i){const r={},s=e.attributes;let a=0;const o=n.getAttributes();for(const e in o){if(o[e].location>=0){let n=s[e];void 0===n&&("instanceMatrix"===e&&t.instanceMatrix&&(n=t.instanceMatrix),"instanceColor"===e&&t.instanceColor&&(n=t.instanceColor));const i={};i.attribute=n,n&&n.data&&(i.data=n.data),r[e]=i,a++}}c.attributes=r,c.attributesNum=a,c.index=i}(r,x,d,y)}else{const t=!0===l.wireframe;c.geometry===x.id&&c.program===d.id&&c.wireframe===t||(c.geometry=x.id,c.program=d.id,c.wireframe=t,M=!0)}null!==y&&n.update(y,t.ELEMENT_ARRAY_BUFFER),(M||h)&&(h=!1,function(r,s,a,o){if(!1===i.isWebGL2&&(r.isInstancedMesh||o.isInstancedBufferGeometry)&&null===e.get("ANGLE_instanced_arrays"))return;m();const l=o.attributes,c=a.getAttributes(),h=s.defaultAttributeValues;for(const e in c){const i=c[e];if(i.location>=0){let s=l[e];if(void 0===s&&("instanceMatrix"===e&&r.instanceMatrix&&(s=r.instanceMatrix),"instanceColor"===e&&r.instanceColor&&(s=r.instanceColor)),void 0!==s){const e=s.normalized,a=s.itemSize,l=n.get(s);if(void 0===l)continue;const c=l.buffer,h=l.type,u=l.bytesPerElement;if(s.isInterleavedBufferAttribute){const n=s.data,l=n.stride,d=s.offset;if(n.isInstancedInterleavedBuffer){for(let t=0;t<i.locationSize;t++)g(i.location+t,n.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let t=0;t<i.locationSize;t++)f(i.location+t);t.bindBuffer(t.ARRAY_BUFFER,c);for(let t=0;t<i.locationSize;t++)_(i.location+t,a/i.locationSize,h,e,l*u,(d+a/i.locationSize*t)*u)}else{if(s.isInstancedBufferAttribute){for(let t=0;t<i.locationSize;t++)g(i.location+t,s.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let t=0;t<i.locationSize;t++)f(i.location+t);t.bindBuffer(t.ARRAY_BUFFER,c);for(let t=0;t<i.locationSize;t++)_(i.location+t,a/i.locationSize,h,e,a*u,a/i.locationSize*t*u)}}else if(void 0!==h){const n=h[e];if(void 0!==n)switch(n.length){case 2:t.vertexAttrib2fv(i.location,n);break;case 3:t.vertexAttrib3fv(i.location,n);break;case 4:t.vertexAttrib4fv(i.location,n);break;default:t.vertexAttrib1fv(i.location,n)}}}}v()}(r,l,d,x),null!==y&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(y).buffer))},reset:x,resetDefaultState:y,dispose:function(){x();for(const t in o){const e=o[t];for(const t in e){const n=e[t];for(const t in n)d(n[t].object),delete n[t];delete e[t]}delete o[t]}},releaseStatesOfGeometry:function(t){if(void 0===o[t.id])return;const e=o[t.id];for(const t in e){const n=e[t];for(const t in n)d(n[t].object),delete n[t];delete e[t]}delete o[t.id]},releaseStatesOfProgram:function(t){for(const e in o){const n=o[e];if(void 0===n[t.id])continue;const i=n[t.id];for(const t in i)d(i[t].object),delete i[t];delete n[t.id]}},initAttributes:m,enableAttribute:f,disableUnusedAttributes:v}}function Vi(t,e,n,i){const r=i.isWebGL2;let s;this.setMode=function(t){s=t},this.render=function(e,i){t.drawArrays(s,e,i),n.update(i,s,1)},this.renderInstances=function(i,a,o){if(0===o)return;let l,c;if(r)l=t,c="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",null===l)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[c](s,i,a,o),n.update(a,s,o)}}function Wi(t,e,n){let i;function r(e){if("highp"===e){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";e="mediump"}return"mediump"===e&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s="undefined"!=typeof WebGL2RenderingContext&&"WebGL2RenderingContext"===t.constructor.name;let a=void 0!==n.precision?n.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||e.has("WEBGL_draw_buffers"),c=!0===n.logarithmicDepthBuffer,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,x=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(void 0!==i)return i;if(!0===e.has("EXT_texture_filter_anisotropic")){const n=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:_&&x,maxSamples:s?t.getParameter(t.MAX_SAMPLES):0}}function Xi(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Li,o=new Nt,l={value:null,needsUpdate:!1};function c(t,n,i,r){const s=null!==t?t.length:0;let c=null;if(0!==s){if(c=l.value,!0!==r||null===c){const e=i+4*s,r=n.matrixWorldInverse;o.getNormalMatrix(r),(null===c||c.length<e)&&(c=new Float32Array(e));for(let e=0,n=i;e!==s;++e,n+=4)a.copy(t[e]).applyMatrix4(r,o),a.normal.toArray(c,n),c[n+3]=a.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=s,e.numIntersection=0,c}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(t,e){const n=0!==t.length||e||0!==i||r;return r=e,i=t.length,n},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(t,e){n=c(t,e,0)},this.setState=function(a,o,h){const u=a.clippingPlanes,d=a.clipIntersection,p=a.clipShadows,m=t.get(a);if(!r||null===u||0===u.length||s&&!p)s?c(null):function(){l.value!==n&&(l.value=n,l.needsUpdate=i>0);e.numPlanes=i,e.numIntersection=0}();else{const t=s?0:i,e=4*t;let r=m.clippingState||null;l.value=r,r=c(u,o,e,h);for(let t=0;t!==e;++t)r[t]=n[t];m.clippingState=r,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=t}}}function ji(t){let e=new WeakMap;function n(t,e){return e===a?t.mapping=r:e===o&&(t.mapping=s),t}function i(t){const n=t.target;n.removeEventListener("dispose",i);const r=e.get(n);void 0!==r&&(e.delete(n),r.dispose())}return{get:function(r){if(r&&r.isTexture&&!1===r.isRenderTargetTexture){const s=r.mapping;if(s===a||s===o){if(e.has(r)){return n(e.get(r).texture,r.mapping)}{const s=r.image;if(s&&s.height>0){const a=new wi(s.height/2);return a.fromEquirectangularTexture(t,r),e.set(r,a),r.addEventListener("dispose",i),n(a.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}class qi extends Mi{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,o=i-e;if(null!==this.view&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=t*this.view.offsetX,s=r+t*this.view.width,a-=e*this.view.offsetY,o=a-e*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}const Yi=[.125,.215,.35,.446,.526,.582],Zi=20,Ji=new qi,Ki=new Rn;let $i=null;const Qi=(1+Math.sqrt(5))/2,tr=1/Qi,er=[new oe(1,1,1),new oe(-1,1,1),new oe(1,1,-1),new oe(-1,1,-1),new oe(0,Qi,tr),new oe(0,Qi,-tr),new oe(tr,0,Qi),new oe(-tr,0,Qi),new oe(Qi,tr,0),new oe(-Qi,tr,0)];class nr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){$i=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=ar(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=sr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($i),t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===r||t.mapping===s?this._setSize(0===t.image.length?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$i=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:f,minFilter:f,generateMipmaps:!1,type:S,format:E,colorSpace:pt,depthBuffer:!1},i=ir(t,e,n);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=ir(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(t){const e=[],n=[],i=[];let r=t;const s=t-4+1+Yi.length;for(let a=0;a<s;a++){const s=Math.pow(2,r);n.push(s);let o=1/s;a>t-4?o=Yi[a-t+4-1]:0===a&&(o=0),i.push(o);const l=1/(s-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,p=6,m=3,f=2,g=1,v=new Float32Array(m*p*d),_=new Float32Array(f*p*d),x=new Float32Array(g*p*d);for(let t=0;t<d;t++){const e=t%3*2/3-1,n=t>2?0:-1,i=[e,n,0,e+2/3,n,0,e+2/3,n+1,0,e,n,0,e+2/3,n+1,0,e,n+1,0];v.set(i,m*p*t),_.set(u,f*p*t);const r=[t,t,t,t,t,t];x.set(r,g*p*t)}const y=new Zn;y.setAttribute("position",new Bn(v,m)),y.setAttribute("uv",new Bn(_,f)),y.setAttribute("faceIndex",new Bn(x,g)),e.push(y),r>4&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}(i)),this._blurMaterial=function(t,e,n){const i=new Float32Array(Zi),r=new oe(0,1,0),s=new yi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:or(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1});return s}(i,t,e)}return i}_compileMaterial(t){const e=new pi(this._lodPlanes[0],t);this._renderer.compile(e,Ji)}_sceneToCubeUV(t,e,n,i){const r=new Si(90,1,e,n),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,c=o.toneMapping;o.getClearColor(Ki),o.toneMapping=0,o.autoClear=!1;const h=new Ln({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new pi(new fi,h);let d=!1;const p=t.background;p?p.isColor&&(h.color.copy(p),t.background=null,d=!0):(h.color.copy(Ki),d=!0);for(let e=0;e<6;e++){const n=e%3;0===n?(r.up.set(0,s[e],0),r.lookAt(a[e],0,0)):1===n?(r.up.set(0,0,s[e]),r.lookAt(0,a[e],0)):(r.up.set(0,s[e],0),r.lookAt(0,0,a[e]));const l=this._cubeSize;rr(i,n*l,e>2?l:0,l,l),o.setRenderTarget(i),d&&o.render(u,r),o.render(t,r)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=c,o.autoClear=l,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===r||t.mapping===s;i?(null===this._cubemapMaterial&&(this._cubemapMaterial=ar()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===t.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=sr());const a=i?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],a);a.uniforms.envMap.value=t;const l=this._cubeSize;rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ji)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){const n=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),i=er[(e-1)%er.length];this._blur(t,e-1,e,n,i)}e.autoClear=n}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial;"latitudinal"!==s&&"longitudinal"!==s&&console.error("blur direction must be either latitudinal or longitudinal!");const c=new pi(this._lodPlanes[i],l),h=l.uniforms,u=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,p=r/d,m=isFinite(r)?1+Math.floor(3*p):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);const f=[];let g=0;for(let t=0;t<Zi;++t){const e=t/p,n=Math.exp(-e*e/2);f.push(n),0===t?g+=n:t<m&&(g+=2*n)}for(let t=0;t<f.length;t++)f[t]=f[t]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value="latitudinal"===s,a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=d,h.mipInt.value=v-n;const _=this._sizeLods[i];rr(e,3*_*(i>v-4?i-v+4:0),4*(this._cubeSize-_),3*_,2*_),o.setRenderTarget(e),o.render(c,Ji)}}function ir(t,e,n){const i=new ie(t,e,n);return i.texture.mapping=l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sr(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:or(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function ar(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:or(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function or(){return"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"}function lr(t){let e=new WeakMap,n=null;function i(t){const n=t.target;n.removeEventListener("dispose",i);const r=e.get(n);void 0!==r&&(e.delete(n),r.dispose())}return{get:function(l){if(l&&l.isTexture){const c=l.mapping,h=c===a||c===o,u=c===r||c===s;if(h||u){if(l.isRenderTargetTexture&&!0===l.needsPMREMUpdate){l.needsPMREMUpdate=!1;let i=e.get(l);return null===n&&(n=new nr(t)),i=h?n.fromEquirectangular(l,i):n.fromCubemap(l,i),e.set(l,i),i.texture}if(e.has(l))return e.get(l).texture;{const r=l.image;if(h&&r&&r.height>0||u&&r&&function(t){let e=0;const n=6;for(let i=0;i<n;i++)void 0!==t[i]&&e++;return e===n}(r)){null===n&&(n=new nr(t));const r=h?n.fromEquirectangular(l):n.fromCubemap(l);return e.set(l,r),l.addEventListener("dispose",i),r.texture}return null}}}return l},dispose:function(){e=new WeakMap,null!==n&&(n.dispose(),n=null)}}}function cr(t){const e={};function n(n){if(void 0!==e[n])return e[n];let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i}return{has:function(t){return null!==n(t)},init:function(t){t.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(t){const e=n(t);return null===e&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),e}}}function hr(t,e,n,i){const r={},s=new WeakMap;function a(t){const o=t.target;null!==o.index&&e.remove(o.index);for(const t in o.attributes)e.remove(o.attributes[t]);o.removeEventListener("dispose",a),delete r[o.id];const l=s.get(o);l&&(e.remove(l),s.delete(o)),i.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,n.memory.geometries--}function o(t){const n=[],i=t.index,r=t.attributes.position;let a=0;if(null!==i){const t=i.array;a=i.version;for(let e=0,i=t.length;e<i;e+=3){const i=t[e+0],r=t[e+1],s=t[e+2];n.push(i,r,r,s,s,i)}}else{const t=r.array;a=r.version;for(let e=0,i=t.length/3-1;e<i;e+=3){const t=e+0,i=e+1,r=e+2;n.push(t,i,i,r,r,t)}}const o=new(Ft(n)?Gn:zn)(n,1);o.version=a;const l=s.get(t);l&&e.remove(l),s.set(t,o)}return{get:function(t,e){return!0===r[e.id]||(e.addEventListener("dispose",a),r[e.id]=!0,n.memory.geometries++),e},update:function(n){const i=n.attributes;for(const n in i)e.update(i[n],t.ARRAY_BUFFER);const r=n.morphAttributes;for(const n in r){const i=r[n];for(let n=0,r=i.length;n<r;n++)e.update(i[n],t.ARRAY_BUFFER)}},getWireframeAttribute:function(t){const e=s.get(t);if(e){const n=t.index;null!==n&&e.version<n.version&&o(t)}else o(t);return s.get(t)}}}function ur(t,e,n,i){const r=i.isWebGL2;let s,a,o;this.setMode=function(t){s=t},this.setIndex=function(t){a=t.type,o=t.bytesPerElement},this.render=function(e,i){t.drawElements(s,i,a,e*o),n.update(i,s,1)},this.renderInstances=function(i,l,c){if(0===c)return;let h,u;if(r)h=t,u="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===h)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](s,l,a,i*o,c),n.update(l,s,c)}}function dr(t){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,r){switch(e.calls++,i){case t.TRIANGLES:e.triangles+=r*(n/3);break;case t.LINES:e.lines+=r*(n/2);break;case t.LINE_STRIP:e.lines+=r*(n-1);break;case t.LINE_LOOP:e.lines+=r*n;break;case t.POINTS:e.points+=r*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function pr(t,e){return t[0]-e[0]}function mr(t,e){return Math.abs(e[1])-Math.abs(t[1])}function fr(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ne,o=[];for(let t=0;t<8;t++)o[t]=[t,0];return{update:function(l,c,h){const u=l.morphTargetInfluences;if(!0===e.isWebGL2){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=void 0!==d?d.length:0;let m=s.get(c);if(void 0===m||m.count!==p){void 0!==m&&m.texture.dispose();const v=void 0!==c.morphAttributes.position,_=void 0!==c.morphAttributes.normal,x=void 0!==c.morphAttributes.color,y=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let E=0;!0===v&&(E=1),!0===_&&(E=2),!0===x&&(E=3);let T=c.attributes.position.count*E,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*p),R=new re(A,T,w,p);R.type=M,R.needsUpdate=!0;const C=4*E;for(let P=0;P<p;P++){const I=y[P],U=S[P],D=b[P],N=T*w*4*P;for(let O=0;O<I.count;O++){const F=O*C;!0===v&&(a.fromBufferAttribute(I,O),A[N+F+0]=a.x,A[N+F+1]=a.y,A[N+F+2]=a.z,A[N+F+3]=0),!0===_&&(a.fromBufferAttribute(U,O),A[N+F+4]=a.x,A[N+F+5]=a.y,A[N+F+6]=a.z,A[N+F+7]=0),!0===x&&(a.fromBufferAttribute(D,O),A[N+F+8]=a.x,A[N+F+9]=a.y,A[N+F+10]=a.z,A[N+F+11]=4===D.itemSize?a.w:1)}}function L(){R.dispose(),s.delete(c),c.removeEventListener("dispose",L)}m={count:p,texture:R,size:new Dt(T,w)},s.set(c,m),c.addEventListener("dispose",L)}let f=0;for(let B=0;B<u.length;B++)f+=u[B];const g=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",u),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const z=void 0===u?0:u.length;let G=i[c.id];if(void 0===G||G.length!==z){G=[];for(let X=0;X<z;X++)G[X]=[X,0];i[c.id]=G}for(let j=0;j<z;j++){const q=G[j];q[0]=j,q[1]=u[j]}G.sort(mr);for(let Y=0;Y<8;Y++)Y<z&&G[Y][1]?(o[Y][0]=G[Y][0],o[Y][1]=G[Y][1]):(o[Y][0]=Number.MAX_SAFE_INTEGER,o[Y][1]=0);o.sort(pr);const H=c.morphAttributes.position,k=c.morphAttributes.normal;let V=0;for(let Z=0;Z<8;Z++){const J=o[Z],K=J[0],$=J[1];K!==Number.MAX_SAFE_INTEGER&&$?(H&&c.getAttribute("morphTarget"+Z)!==H[K]&&c.setAttribute("morphTarget"+Z,H[K]),k&&c.getAttribute("morphNormal"+Z)!==k[K]&&c.setAttribute("morphNormal"+Z,k[K]),r[Z]=$,V+=$):(H&&!0===c.hasAttribute("morphTarget"+Z)&&c.deleteAttribute("morphTarget"+Z),k&&!0===c.hasAttribute("morphNormal"+Z)&&c.deleteAttribute("morphNormal"+Z),r[Z]=0)}const W=c.morphTargetsRelative?1:1-V;h.getUniforms().setValue(t,"morphTargetBaseInfluence",W),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}}}function gr(t,e,n,i){let r=new WeakMap;function s(t){const e=t.target;e.removeEventListener("dispose",s),n.remove(e.instanceMatrix),null!==e.instanceColor&&n.remove(e.instanceColor)}return{update:function(a){const o=i.render.frame,l=a.geometry,c=e.get(a,l);return r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(!1===a.hasEventListener("dispose",s)&&a.addEventListener("dispose",s),n.update(a.instanceMatrix,t.ARRAY_BUFFER),null!==a.instanceColor&&n.update(a.instanceColor,t.ARRAY_BUFFER)),c},dispose:function(){r=new WeakMap}}}const vr=new ee,_r=new re,xr=new se,yr=new Ti,Mr=[],Sr=[],br=new Float32Array(16),Er=new Float32Array(9),Tr=new Float32Array(4);function wr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Mr[r];if(void 0===s&&(s=new Float32Array(r),Mr[r]=s),0!==e){i.toArray(s,0);for(let i=1,r=0;i!==e;++i)r+=n,t[i].toArray(s,r)}return s}function Ar(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rr(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cr(t,e){let n=Sr[e];void 0===n&&(n=new Int32Array(e),Sr[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Lr(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Pr(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ar(n,e))return;t.uniform2fv(this.addr,e),Rr(n,e)}}function Ir(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(void 0!==e.r)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ar(n,e))return;t.uniform3fv(this.addr,e),Rr(n,e)}}function Ur(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ar(n,e))return;t.uniform4fv(this.addr,e),Rr(n,e)}}function Dr(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(Ar(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rr(n,e)}else{if(Ar(n,i))return;Tr.set(i),t.uniformMatrix2fv(this.addr,!1,Tr),Rr(n,i)}}function Nr(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(Ar(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rr(n,e)}else{if(Ar(n,i))return;Er.set(i),t.uniformMatrix3fv(this.addr,!1,Er),Rr(n,i)}}function Or(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(Ar(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rr(n,e)}else{if(Ar(n,i))return;br.set(i),t.uniformMatrix4fv(this.addr,!1,br),Rr(n,i)}}function Fr(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Br(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ar(n,e))return;t.uniform2iv(this.addr,e),Rr(n,e)}}function zr(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ar(n,e))return;t.uniform3iv(this.addr,e),Rr(n,e)}}function Gr(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ar(n,e))return;t.uniform4iv(this.addr,e),Rr(n,e)}}function Hr(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kr(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ar(n,e))return;t.uniform2uiv(this.addr,e),Rr(n,e)}}function Vr(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ar(n,e))return;t.uniform3uiv(this.addr,e),Rr(n,e)}}function Wr(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ar(n,e))return;t.uniform4uiv(this.addr,e),Rr(n,e)}}function Xr(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||vr,r)}function jr(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||xr,r)}function qr(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||yr,r)}function Yr(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_r,r)}function Zr(t,e){t.uniform1fv(this.addr,e)}function Jr(t,e){const n=wr(e,this.size,2);t.uniform2fv(this.addr,n)}function Kr(t,e){const n=wr(e,this.size,3);t.uniform3fv(this.addr,n)}function $r(t,e){const n=wr(e,this.size,4);t.uniform4fv(this.addr,n)}function Qr(t,e){const n=wr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ts(t,e){const n=wr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function es(t,e){const n=wr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ns(t,e){t.uniform1iv(this.addr,e)}function is(t,e){t.uniform2iv(this.addr,e)}function rs(t,e){t.uniform3iv(this.addr,e)}function ss(t,e){t.uniform4iv(this.addr,e)}function as(t,e){t.uniform1uiv(this.addr,e)}function os(t,e){t.uniform2uiv(this.addr,e)}function ls(t,e){t.uniform3uiv(this.addr,e)}function cs(t,e){t.uniform4uiv(this.addr,e)}function hs(t,e,n){const i=this.cache,r=e.length,s=Cr(n,r);Ar(i,s)||(t.uniform1iv(this.addr,s),Rr(i,s));for(let t=0;t!==r;++t)n.setTexture2D(e[t]||vr,s[t])}function us(t,e,n){const i=this.cache,r=e.length,s=Cr(n,r);Ar(i,s)||(t.uniform1iv(this.addr,s),Rr(i,s));for(let t=0;t!==r;++t)n.setTexture3D(e[t]||xr,s[t])}function ds(t,e,n){const i=this.cache,r=e.length,s=Cr(n,r);Ar(i,s)||(t.uniform1iv(this.addr,s),Rr(i,s));for(let t=0;t!==r;++t)n.setTextureCube(e[t]||yr,s[t])}function ps(t,e,n){const i=this.cache,r=e.length,s=Cr(n,r);Ar(i,s)||(t.uniform1iv(this.addr,s),Rr(i,s));for(let t=0;t!==r;++t)n.setTexture2DArray(e[t]||_r,s[t])}class ms{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=function(t){switch(t){case 5126:return Lr;case 35664:return Pr;case 35665:return Ir;case 35666:return Ur;case 35674:return Dr;case 35675:return Nr;case 35676:return Or;case 5124:case 35670:return Fr;case 35667:case 35671:return Br;case 35668:case 35672:return zr;case 35669:case 35673:return Gr;case 5125:return Hr;case 36294:return kr;case 36295:return Vr;case 36296:return Wr;case 35678:case 36198:case 36298:case 36306:case 35682:return Xr;case 35679:case 36299:case 36307:return jr;case 35680:case 36300:case 36308:case 36293:return qr;case 36289:case 36303:case 36311:case 36292:return Yr}}(e.type)}}class fs{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=function(t){switch(t){case 5126:return Zr;case 35664:return Jr;case 35665:return Kr;case 35666:return $r;case 35674:return Qr;case 35675:return ts;case 35676:return es;case 5124:case 35670:return ns;case 35667:case 35671:return is;case 35668:case 35672:return rs;case 35669:case 35673:return ss;case 5125:return as;case 36294:return os;case 36295:return ls;case 36296:return cs;case 35678:case 36198:case 36298:case 36306:case 35682:return hs;case 35679:case 36299:case 36307:return us;case 35680:case 36300:case 36308:case 36293:return ds;case 36289:case 36303:case 36311:case 36292:return ps}}(e.type)}}class gs{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const vs=/(\w+)(\])?(\[|\.)?/g;function _s(t,e){t.seq.push(e),t.map[e.id]=e}function xs(t,e,n){const i=t.name,r=i.length;for(vs.lastIndex=0;;){const s=vs.exec(i),a=vs.lastIndex;let o=s[1];const l="]"===s[2],c=s[3];if(l&&(o|=0),void 0===c||"["===c&&a+2===r){_s(n,void 0===c?new ms(o,t,e):new fs(o,t,e));break}{let t=n.map[o];void 0===t&&(t=new gs(o),_s(n,t)),n=t}}}class ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const n=t.getActiveUniform(e,i);xs(n,t.getUniformLocation(e,n.name),this)}}setValue(t,e,n,i){const r=this.map[e];void 0!==r&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];void 0!==i&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const s=e[r],a=n[s.id];!1!==a.needsUpdate&&s.setValue(t,a.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Ms(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let Ss=0;function bs(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&""===r)return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const i=parseInt(s[1]);return n.toUpperCase()+"\n\n"+r+"\n\n"+function(t,e){const n=t.split("\n"),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let t=r;t<s;t++){const r=t+1;i.push(`${r===e?">":" "} ${r}: ${n[t]}`)}return i.join("\n")}(t.getShaderSource(e),i)}return r}function Es(t,e){const n=function(t){switch(t){case pt:return["Linear","( value )"];case dt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Ts(t,e){let n;switch(e){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="OptimizedCineon";break;case 4:n="ACESFilmic";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ws(t){return""!==t}function As(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rs(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cs=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ls(t){return t.replace(Cs,Ps)}function Ps(t,e){const n=Fi[e];if(void 0===n)throw new Error("Can not resolve #include <"+e+">");return Ls(n)}const Is=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Us(t){return t.replace(Is,Ds)}function Ds(t,e,n,i){let r="";for(let t=parseInt(e);t<parseInt(n);t++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+t+" ]").replace(/UNROLLED_LOOP_INDEX/g,t);return r}function Ns(t){let e="precision "+t.precision+" float;\nprecision "+t.precision+" int;";return"highp"===t.precision?e+="\n#define HIGH_PRECISION":"mediump"===t.precision?e+="\n#define MEDIUM_PRECISION":"lowp"===t.precision&&(e+="\n#define LOW_PRECISION"),e}function Os(t,e,n,i){const a=t.getContext(),o=n.defines;let c=n.vertexShader,h=n.fragmentShader;const u=function(t){let e="SHADOWMAP_TYPE_BASIC";return 1===t.shadowMapType?e="SHADOWMAP_TYPE_PCF":2===t.shadowMapType?e="SHADOWMAP_TYPE_PCF_SOFT":3===t.shadowMapType&&(e="SHADOWMAP_TYPE_VSM"),e}(n),d=function(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case r:case s:e="ENVMAP_TYPE_CUBE";break;case l:e="ENVMAP_TYPE_CUBE_UV"}return e}(n),p=function(t){let e="ENVMAP_MODE_REFLECTION";t.envMap&&t.envMapMode===s&&(e="ENVMAP_MODE_REFRACTION");return e}(n),m=function(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD"}return e}(n),f=function(t){const e=t.envMapCubeUVHeight;if(null===e)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}(n),g=n.isWebGL2?"":function(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||"physical"===t.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join("\n")}(n),v=function(t){const e=[];for(const n in t){const i=t[n];!1!==i&&e.push("#define "+n+" "+i)}return e.join("\n")}(o),_=a.createProgram();let x,y,M=n.glslVersion?"#version "+n.glslVersion+"\n":"";n.isRawShaderMaterial?(x=[v].filter(ws).join("\n"),x.length>0&&(x+="\n"),y=[g,v].filter(ws).join("\n"),y.length>0&&(y+="\n")):(x=[Ns(n),"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&!1===n.flatShading?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(ws).join("\n"),y=[g,Ns(n),"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==n.toneMapping?"#define TONE_MAPPING":"",0!==n.toneMapping?Fi.tonemapping_pars_fragment:"",0!==n.toneMapping?Ts("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fi.encodings_pars_fragment,Es("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"","\n"].filter(ws).join("\n")),c=Ls(c),c=As(c,n),c=Rs(c,n),h=Ls(h),h=As(h,n),h=Rs(h,n),c=Us(c),h=Us(h),n.isWebGL2&&!0!==n.isRawShaderMaterial&&(M="#version 300 es\n",x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join("\n")+"\n"+x,y=["#define varying in",n.glslVersion===vt?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+y);const S=M+x+c,b=M+y+h,E=Ms(a,a.VERTEX_SHADER,S),T=Ms(a,a.FRAGMENT_SHADER,b);if(a.attachShader(_,E),a.attachShader(_,T),void 0!==n.index0AttributeName?a.bindAttribLocation(_,0,n.index0AttributeName):!0===n.morphTargets&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_),t.debug.checkShaderErrors){const e=a.getProgramInfoLog(_).trim(),n=a.getShaderInfoLog(E).trim(),i=a.getShaderInfoLog(T).trim();let r=!0,s=!0;if(!1===a.getProgramParameter(_,a.LINK_STATUS))if(r=!1,"function"==typeof t.debug.onShaderError)t.debug.onShaderError(a,_,E,T);else{const t=bs(a,E,"vertex"),n=bs(a,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+"\n\nProgram Info Log: "+e+"\n"+t+"\n"+n)}else""!==e?console.warn("THREE.WebGLProgram: Program Info Log:",e):""!==n&&""!==i||(s=!1);s&&(this.diagnostics={runnable:r,programLog:e,vertexShader:{log:n,prefix:x},fragmentShader:{log:i,prefix:y}})}let w,A;return a.deleteShader(E),a.deleteShader(T),this.getUniforms=function(){return void 0===w&&(w=new ys(a,_)),w},this.getAttributes=function(){return void 0===A&&(A=function(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const i=t.getActiveAttrib(e,r),s=i.name;let a=1;i.type===t.FLOAT_MAT2&&(a=2),i.type===t.FLOAT_MAT3&&(a=3),i.type===t.FLOAT_MAT4&&(a=4),n[s]={type:i.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}(a,_)),A},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.name=n.shaderName,this.id=Ss++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let Fs=0;class Bs{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return!1===s.has(i)&&(s.add(i),i.usedTimes++),!1===s.has(r)&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const t of e)t.usedTimes--,0===t.usedTimes&&this.shaderCache.delete(t.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return void 0===n&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return void 0===n&&(n=new zs(t),e.set(t,n)),n}}class zs{constructor(t){this.id=Fs++,this.code=t,this.usedTimes=0}}function Gs(t,e,n,i,r,s,a){const o=new Ye,c=new Bs,h=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(t){return 1===t?"uv1":2===t?"uv2":3===t?"uv3":"uv"}return{getParameters:function(s,o,h,v,_){const x=v.fog,y=_.geometry,M=s.isMeshStandardMaterial?v.environment:null,S=(s.isMeshStandardMaterial?n:e).get(s.envMap||M),b=S&&S.mapping===l?S.image.height:null,E=f[s.type];null!==s.precision&&(m=r.getMaxPrecision(s.precision),m!==s.precision&&console.warn("THREE.WebGLProgram.getParameters:",s.precision,"not supported, using",m,"instead."));const T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,w=void 0!==T?T.length:0;let A,R,C,L,P=0;if(void 0!==y.morphAttributes.position&&(P=1),void 0!==y.morphAttributes.normal&&(P=2),void 0!==y.morphAttributes.color&&(P=3),E){const t=zi[E];A=t.vertexShader,R=t.fragmentShader}else A=s.vertexShader,R=s.fragmentShader,c.update(s),C=c.getVertexShaderID(s),L=c.getFragmentShaderID(s);const I=t.getRenderTarget(),U=!0===_.isInstancedMesh,D=!!s.map,N=!!s.matcap,O=!!S,F=!!s.aoMap,B=!!s.lightMap,z=!!s.bumpMap,G=!!s.normalMap,H=!!s.displacementMap,k=!!s.emissiveMap,V=!!s.metalnessMap,W=!!s.roughnessMap,X=s.clearcoat>0,j=s.iridescence>0,q=s.sheen>0,Y=s.transmission>0,Z=X&&!!s.clearcoatMap,J=X&&!!s.clearcoatNormalMap,K=X&&!!s.clearcoatRoughnessMap,$=j&&!!s.iridescenceMap,Q=j&&!!s.iridescenceThicknessMap,tt=q&&!!s.sheenColorMap,et=q&&!!s.sheenRoughnessMap,nt=!!s.specularMap,it=!!s.specularColorMap,rt=!!s.specularIntensityMap,st=Y&&!!s.transmissionMap,at=Y&&!!s.thicknessMap,ot=!!s.gradientMap,lt=!!s.alphaMap,ct=s.alphaTest>0,ht=!!s.extensions,ut=!!y.attributes.uv1,dt=!!y.attributes.uv2,mt=!!y.attributes.uv3;return{isWebGL2:u,shaderID:E,shaderName:s.type,vertexShader:A,fragmentShader:R,defines:s.defines,customVertexShaderID:C,customFragmentShaderID:L,isRawShaderMaterial:!0===s.isRawShaderMaterial,glslVersion:s.glslVersion,precision:m,instancing:U,instancingColor:U&&null!==_.instanceColor,supportsVertexTextures:p,outputColorSpace:null===I?t.outputColorSpace:!0===I.isXRRenderTarget?I.texture.colorSpace:pt,map:D,matcap:N,envMap:O,envMapMode:O&&S.mapping,envMapCubeUVHeight:b,aoMap:F,lightMap:B,bumpMap:z,normalMap:G,displacementMap:p&&H,emissiveMap:k,normalMapObjectSpace:G&&1===s.normalMapType,normalMapTangentSpace:G&&0===s.normalMapType,metalnessMap:V,roughnessMap:W,clearcoat:X,clearcoatMap:Z,clearcoatNormalMap:J,clearcoatRoughnessMap:K,iridescence:j,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:tt,sheenRoughnessMap:et,specularMap:nt,specularColorMap:it,specularIntensityMap:rt,transmission:Y,transmissionMap:st,thicknessMap:at,gradientMap:ot,opaque:!1===s.transparent&&1===s.blending,alphaMap:lt,alphaTest:ct,combine:s.combine,mapUv:D&&g(s.map.channel),aoMapUv:F&&g(s.aoMap.channel),lightMapUv:B&&g(s.lightMap.channel),bumpMapUv:z&&g(s.bumpMap.channel),normalMapUv:G&&g(s.normalMap.channel),displacementMapUv:H&&g(s.displacementMap.channel),emissiveMapUv:k&&g(s.emissiveMap.channel),metalnessMapUv:V&&g(s.metalnessMap.channel),roughnessMapUv:W&&g(s.roughnessMap.channel),clearcoatMapUv:Z&&g(s.clearcoatMap.channel),clearcoatNormalMapUv:J&&g(s.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(s.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(s.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(s.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&g(s.sheenColorMap.channel),sheenRoughnessMapUv:et&&g(s.sheenRoughnessMap.channel),specularMapUv:nt&&g(s.specularMap.channel),specularColorMapUv:it&&g(s.specularColorMap.channel),specularIntensityMapUv:rt&&g(s.specularIntensityMap.channel),transmissionMapUv:st&&g(s.transmissionMap.channel),thicknessMapUv:at&&g(s.thicknessMap.channel),alphaMapUv:lt&&g(s.alphaMap.channel),vertexTangents:G&&!!y.attributes.tangent,vertexColors:s.vertexColors,vertexAlphas:!0===s.vertexColors&&!!y.attributes.color&&4===y.attributes.color.itemSize,vertexUv1s:ut,vertexUv2s:dt,vertexUv3s:mt,pointsUvs:!0===_.isPoints&&!!y.attributes.uv&&(D||lt),fog:!!x,useFog:!0===s.fog,fogExp2:x&&x.isFogExp2,flatShading:!0===s.flatShading,sizeAttenuation:!0===s.sizeAttenuation,logarithmicDepthBuffer:d,skinning:!0===_.isSkinnedMesh,morphTargets:void 0!==y.morphAttributes.position,morphNormals:void 0!==y.morphAttributes.normal,morphColors:void 0!==y.morphAttributes.color,morphTargetsCount:w,morphTextureStride:P,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:s.dithering,shadowMapEnabled:t.shadowMap.enabled&&h.length>0,shadowMapType:t.shadowMap.type,toneMapping:s.toneMapped?t.toneMapping:0,useLegacyLights:t.useLegacyLights,premultipliedAlpha:s.premultipliedAlpha,doubleSided:2===s.side,flipSided:1===s.side,useDepthPacking:s.depthPacking>=0,depthPacking:s.depthPacking||0,index0AttributeName:s.index0AttributeName,extensionDerivatives:ht&&!0===s.extensions.derivatives,extensionFragDepth:ht&&!0===s.extensions.fragDepth,extensionDrawBuffers:ht&&!0===s.extensions.drawBuffers,extensionShaderTextureLOD:ht&&!0===s.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:s.customProgramCacheKey()}},getProgramCacheKey:function(e){const n=[];if(e.shaderID?n.push(e.shaderID):(n.push(e.customVertexShaderID),n.push(e.customFragmentShaderID)),void 0!==e.defines)for(const t in e.defines)n.push(t),n.push(e.defines[t]);return!1===e.isRawShaderMaterial&&(!function(t,e){t.push(e.precision),t.push(e.outputColorSpace),t.push(e.envMapMode),t.push(e.envMapCubeUVHeight),t.push(e.mapUv),t.push(e.alphaMapUv),t.push(e.lightMapUv),t.push(e.aoMapUv),t.push(e.bumpMapUv),t.push(e.normalMapUv),t.push(e.displacementMapUv),t.push(e.emissiveMapUv),t.push(e.metalnessMapUv),t.push(e.roughnessMapUv),t.push(e.clearcoatMapUv),t.push(e.clearcoatNormalMapUv),t.push(e.clearcoatRoughnessMapUv),t.push(e.iridescenceMapUv),t.push(e.iridescenceThicknessMapUv),t.push(e.sheenColorMapUv),t.push(e.sheenRoughnessMapUv),t.push(e.specularMapUv),t.push(e.specularColorMapUv),t.push(e.specularIntensityMapUv),t.push(e.transmissionMapUv),t.push(e.thicknessMapUv),t.push(e.combine),t.push(e.fogExp2),t.push(e.sizeAttenuation),t.push(e.morphTargetsCount),t.push(e.morphAttributeCount),t.push(e.numDirLights),t.push(e.numPointLights),t.push(e.numSpotLights),t.push(e.numSpotLightMaps),t.push(e.numHemiLights),t.push(e.numRectAreaLights),t.push(e.numDirLightShadows),t.push(e.numPointLightShadows),t.push(e.numSpotLightShadows),t.push(e.numSpotLightShadowsWithMaps),t.push(e.shadowMapType),t.push(e.toneMapping),t.push(e.numClippingPlanes),t.push(e.numClipIntersection),t.push(e.depthPacking)}(n,e),function(t,e){o.disableAll(),e.isWebGL2&&o.enable(0);e.supportsVertexTextures&&o.enable(1);e.instancing&&o.enable(2);e.instancingColor&&o.enable(3);e.matcap&&o.enable(4);e.envMap&&o.enable(5);e.normalMapObjectSpace&&o.enable(6);e.normalMapTangentSpace&&o.enable(7);e.clearcoat&&o.enable(8);e.iridescence&&o.enable(9);e.alphaTest&&o.enable(10);e.vertexColors&&o.enable(11);e.vertexAlphas&&o.enable(12);e.vertexUv1s&&o.enable(13);e.vertexUv2s&&o.enable(14);e.vertexUv3s&&o.enable(15);e.vertexTangents&&o.enable(16);t.push(o.mask),o.disableAll(),e.fog&&o.enable(0);e.useFog&&o.enable(1);e.flatShading&&o.enable(2);e.logarithmicDepthBuffer&&o.enable(3);e.skinning&&o.enable(4);e.morphTargets&&o.enable(5);e.morphNormals&&o.enable(6);e.morphColors&&o.enable(7);e.premultipliedAlpha&&o.enable(8);e.shadowMapEnabled&&o.enable(9);e.useLegacyLights&&o.enable(10);e.doubleSided&&o.enable(11);e.flipSided&&o.enable(12);e.useDepthPacking&&o.enable(13);e.dithering&&o.enable(14);e.transmission&&o.enable(15);e.sheen&&o.enable(16);e.opaque&&o.enable(17);e.pointsUvs&&o.enable(18);t.push(o.mask)}(n,e),n.push(t.outputColorSpace)),n.push(e.customProgramCacheKey),n.join()},getUniforms:function(t){const e=f[t.type];let n;if(e){const t=zi[e];n=xi.clone(t.uniforms)}else n=t.uniforms;return n},acquireProgram:function(e,n){let i;for(let t=0,e=h.length;t<e;t++){const e=h[t];if(e.cacheKey===n){i=e,++i.usedTimes;break}}return void 0===i&&(i=new Os(t,n,e,s),h.push(i)),i},releaseProgram:function(t){if(0==--t.usedTimes){const e=h.indexOf(t);h[e]=h[h.length-1],h.pop(),t.destroy()}},releaseShaderCache:function(t){c.remove(t)},programs:h,dispose:function(){c.dispose()}}}function Hs(){let t=new WeakMap;return{get:function(e){let n=t.get(e);return void 0===n&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e)},update:function(e,n,i){t.get(e)[n]=i},dispose:function(){t=new WeakMap}}}function ks(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vs(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ws(){const t=[];let e=0;const n=[],i=[],r=[];function s(n,i,r,s,a,o){let l=t[e];return void 0===l?(l={id:n.id,object:n,geometry:i,material:r,groupOrder:s,renderOrder:n.renderOrder,z:a,group:o},t[e]=l):(l.id=n.id,l.object=n,l.geometry=i,l.material=r,l.groupOrder=s,l.renderOrder=n.renderOrder,l.z=a,l.group=o),e++,l}return{opaque:n,transmissive:i,transparent:r,init:function(){e=0,n.length=0,i.length=0,r.length=0},push:function(t,e,a,o,l,c){const h=s(t,e,a,o,l,c);a.transmission>0?i.push(h):!0===a.transparent?r.push(h):n.push(h)},unshift:function(t,e,a,o,l,c){const h=s(t,e,a,o,l,c);a.transmission>0?i.unshift(h):!0===a.transparent?r.unshift(h):n.unshift(h)},finish:function(){for(let n=e,i=t.length;n<i;n++){const e=t[n];if(null===e.id)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null}},sort:function(t,e){n.length>1&&n.sort(t||ks),i.length>1&&i.sort(e||Vs),r.length>1&&r.sort(e||Vs)}}}function Xs(){let t=new WeakMap;return{get:function(e,n){const i=t.get(e);let r;return void 0===i?(r=new Ws,t.set(e,[r])):n>=i.length?(r=new Ws,i.push(r)):r=i[n],r},dispose:function(){t=new WeakMap}}}function js(){const t={};return{get:function(e){if(void 0!==t[e.id])return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new oe,color:new Rn};break;case"SpotLight":n={position:new oe,direction:new oe,color:new Rn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new Rn,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new Rn,groundColor:new Rn};break;case"RectAreaLight":n={color:new Rn,position:new oe,halfWidth:new oe,halfHeight:new oe}}return t[e.id]=n,n}}}let qs=0;function Ys(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Zs(t,e){const n=new js,i=function(){const t={};return{get:function(e){if(void 0!==t[e.id])return t[e.id];let n;switch(e.type){case"DirectionalLight":case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3}}return t[e.id]=n,n}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let t=0;t<9;t++)r.probe.push(new oe);const s=new oe,a=new Fe,o=new Fe;return{setup:function(s,a){let o=0,l=0,c=0;for(let t=0;t<9;t++)r.probe[t].set(0,0,0);let h=0,u=0,d=0,p=0,m=0,f=0,g=0,v=0,_=0,x=0;s.sort(Ys);const y=!0===a?Math.PI:1;for(let t=0,e=s.length;t<e;t++){const e=s[t],a=e.color,M=e.intensity,S=e.distance,b=e.shadow&&e.shadow.map?e.shadow.map.texture:null;if(e.isAmbientLight)o+=a.r*M*y,l+=a.g*M*y,c+=a.b*M*y;else if(e.isLightProbe)for(let t=0;t<9;t++)r.probe[t].addScaledVector(e.sh.coefficients[t],M);else if(e.isDirectionalLight){const t=n.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity*y),e.castShadow){const t=e.shadow,n=i.get(e);n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,r.directionalShadow[h]=n,r.directionalShadowMap[h]=b,r.directionalShadowMatrix[h]=e.shadow.matrix,f++}r.directional[h]=t,h++}else if(e.isSpotLight){const t=n.get(e);t.position.setFromMatrixPosition(e.matrixWorld),t.color.copy(a).multiplyScalar(M*y),t.distance=S,t.coneCos=Math.cos(e.angle),t.penumbraCos=Math.cos(e.angle*(1-e.penumbra)),t.decay=e.decay,r.spot[d]=t;const s=e.shadow;if(e.map&&(r.spotLightMap[_]=e.map,_++,s.updateMatrices(e),e.castShadow&&x++),r.spotLightMatrix[d]=s.matrix,e.castShadow){const t=i.get(e);t.shadowBias=s.bias,t.shadowNormalBias=s.normalBias,t.shadowRadius=s.radius,t.shadowMapSize=s.mapSize,r.spotShadow[d]=t,r.spotShadowMap[d]=b,v++}d++}else if(e.isRectAreaLight){const t=n.get(e);t.color.copy(a).multiplyScalar(M),t.halfWidth.set(.5*e.width,0,0),t.halfHeight.set(0,.5*e.height,0),r.rectArea[p]=t,p++}else if(e.isPointLight){const t=n.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity*y),t.distance=e.distance,t.decay=e.decay,e.castShadow){const t=e.shadow,n=i.get(e);n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,n.shadowCameraNear=t.camera.near,n.shadowCameraFar=t.camera.far,r.pointShadow[u]=n,r.pointShadowMap[u]=b,r.pointShadowMatrix[u]=e.shadow.matrix,g++}r.point[u]=t,u++}else if(e.isHemisphereLight){const t=n.get(e);t.skyColor.copy(e.color).multiplyScalar(M*y),t.groundColor.copy(e.groundColor).multiplyScalar(M*y),r.hemi[m]=t,m++}}p>0&&(e.isWebGL2||!0===t.has("OES_texture_float_linear")?(r.rectAreaLTC1=Bi.LTC_FLOAT_1,r.rectAreaLTC2=Bi.LTC_FLOAT_2):!0===t.has("OES_texture_half_float_linear")?(r.rectAreaLTC1=Bi.LTC_HALF_1,r.rectAreaLTC2=Bi.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=o,r.ambient[1]=l,r.ambient[2]=c;const M=r.hash;M.directionalLength===h&&M.pointLength===u&&M.spotLength===d&&M.rectAreaLength===p&&M.hemiLength===m&&M.numDirectionalShadows===f&&M.numPointShadows===g&&M.numSpotShadows===v&&M.numSpotMaps===_||(r.directional.length=h,r.spot.length=d,r.rectArea.length=p,r.point.length=u,r.hemi.length=m,r.directionalShadow.length=f,r.directionalShadowMap.length=f,r.pointShadow.length=g,r.pointShadowMap.length=g,r.spotShadow.length=v,r.spotShadowMap.length=v,r.directionalShadowMatrix.length=f,r.pointShadowMatrix.length=g,r.spotLightMatrix.length=v+_-x,r.spotLightMap.length=_,r.numSpotLightShadowsWithMaps=x,M.directionalLength=h,M.pointLength=u,M.spotLength=d,M.rectAreaLength=p,M.hemiLength=m,M.numDirectionalShadows=f,M.numPointShadows=g,M.numSpotShadows=v,M.numSpotMaps=_,r.version=qs++)},setupView:function(t,e){let n=0,i=0,l=0,c=0,h=0;const u=e.matrixWorldInverse;for(let e=0,d=t.length;e<d;e++){const d=t[e];if(d.isDirectionalLight){const t=r.directional[n];t.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(d.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),n++}else if(d.isSpotLight){const t=r.spot[l];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),t.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(d.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),l++}else if(d.isRectAreaLight){const t=r.rectArea[c];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),o.identity(),a.copy(d.matrixWorld),a.premultiply(u),o.extractRotation(a),t.halfWidth.set(.5*d.width,0,0),t.halfHeight.set(0,.5*d.height,0),t.halfWidth.applyMatrix4(o),t.halfHeight.applyMatrix4(o),c++}else if(d.isPointLight){const t=r.point[i];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),i++}else if(d.isHemisphereLight){const t=r.hemi[h];t.direction.setFromMatrixPosition(d.matrixWorld),t.direction.transformDirection(u),h++}}},state:r}}function Js(t,e){const n=new Zs(t,e),i=[],r=[];return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:function(t){n.setup(i,t)},setupLightsView:function(t){n.setupView(i,t)},pushLight:function(t){i.push(t)},pushShadow:function(t){r.push(t)}}}function Ks(t,e){let n=new WeakMap;return{get:function(i,r=0){const s=n.get(i);let a;return void 0===s?(a=new Js(t,e),n.set(i,[a])):r>=s.length?(a=new Js(t,e),s.push(a)):a=s[r],a},dispose:function(){n=new WeakMap}}}class $s extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qs extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ta(t,e,n){let i=new Ui;const r=new Dt,s=new Dt,a=new ne,o=new $s({depthPacking:3201}),l=new Qs,c={},h=n.maxTextureSize,u={0:1,1:0,2:2},p=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const f=new Zn;f.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pi(f,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;function x(n,i){const s=e.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),null===n.mapPass&&(n.mapPass=new ie(r.x,r.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,t.setRenderTarget(n.mapPass),t.clear(),t.renderBufferDirect(i,null,s,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,t.setRenderTarget(n.map),t.clear(),t.renderBufferDirect(i,null,s,m,g,null)}function y(e,n,i,r){let s=null;const a=!0===i.isPointLight?e.customDistanceMaterial:e.customDepthMaterial;if(void 0!==a)s=a;else if(s=!0===i.isPointLight?l:o,t.localClippingEnabled&&!0===n.clipShadows&&Array.isArray(n.clippingPlanes)&&0!==n.clippingPlanes.length||n.displacementMap&&0!==n.displacementScale||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){const t=s.uuid,e=n.uuid;let i=c[t];void 0===i&&(i={},c[t]=i);let r=i[e];void 0===r&&(r=s.clone(),i[e]=r),s=r}if(s.visible=n.visible,s.wireframe=n.wireframe,s.side=3===r?null!==n.shadowSide?n.shadowSide:n.side:null!==n.shadowSide?n.shadowSide:u[n.side],s.alphaMap=n.alphaMap,s.alphaTest=n.alphaTest,s.map=n.map,s.clipShadows=n.clipShadows,s.clippingPlanes=n.clippingPlanes,s.clipIntersection=n.clipIntersection,s.displacementMap=n.displacementMap,s.displacementScale=n.displacementScale,s.displacementBias=n.displacementBias,s.wireframeLinewidth=n.wireframeLinewidth,s.linewidth=n.linewidth,!0===i.isPointLight&&!0===s.isMeshDistanceMaterial){t.properties.get(s).light=i}return s}function M(n,r,s,a,o){if(!1===n.visible)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&3===o)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,n.matrixWorld);const i=e.update(n),r=n.material;if(Array.isArray(r)){const e=i.groups;for(let l=0,c=e.length;l<c;l++){const c=e[l],h=r[c.materialIndex];if(h&&h.visible){const e=y(n,h,a,o);t.renderBufferDirect(s,null,i,e,n,c)}}}else if(r.visible){const e=y(n,r,a,o);t.renderBufferDirect(s,null,i,e,n,null)}}const l=n.children;for(let t=0,e=l.length;t<e;t++)M(l[t],r,s,a,o)}this.render=function(e,n,o){if(!1===v.enabled)return;if(!1===v.autoUpdate&&!1===v.needsUpdate)return;if(0===e.length)return;const l=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);const m=3!==_&&3===this.type,f=3===_&&3!==this.type;for(let l=0,c=e.length;l<c;l++){const c=e[l],u=c.shadow;if(void 0===u){console.warn("THREE.WebGLShadowMap:",c,"has no shadow.");continue}if(!1===u.autoUpdate&&!1===u.needsUpdate)continue;r.copy(u.mapSize);const g=u.getFrameExtents();if(r.multiply(g),s.copy(u.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/g.x),r.x=s.x*g.x,u.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/g.y),r.y=s.y*g.y,u.mapSize.y=s.y)),null===u.map||!0===m||!0===f){const t=3!==this.type?{minFilter:d,magFilter:d}:{};null!==u.map&&u.map.dispose(),u.map=new ie(r.x,r.y,t),u.map.texture.name=c.name+".shadowMap",u.camera.updateProjectionMatrix()}t.setRenderTarget(u.map),t.clear();const v=u.getViewportCount();for(let t=0;t<v;t++){const e=u.getViewport(t);a.set(s.x*e.x,s.y*e.y,s.x*e.z,s.y*e.w),p.viewport(a),u.updateMatrices(c,t),i=u.getFrustum(),M(n,o,u.camera,c,this.type)}!0!==u.isPointLightShadow&&3===this.type&&x(u,o),u.needsUpdate=!1}_=this.type,v.needsUpdate=!1,t.setRenderTarget(l,c,u)}}function ea(t,e,i){const r=i.isWebGL2;const s=new function(){let e=!1;const n=new ne;let i=null;const r=new ne(0,0,0,0);return{setMask:function(n){i===n||e||(t.colorMask(n,n,n,n),i=n)},setLocked:function(t){e=t},setClear:function(e,i,s,a,o){!0===o&&(e*=a,i*=a,s*=a),n.set(e,i,s,a),!1===r.equals(n)&&(t.clearColor(e,i,s,a),r.copy(n))},reset:function(){e=!1,i=null,r.set(-1,0,0,0)}}},a=new function(){let e=!1,n=null,i=null,r=null;return{setTest:function(e){e?H(t.DEPTH_TEST):k(t.DEPTH_TEST)},setMask:function(i){n===i||e||(t.depthMask(i),n=i)},setFunc:function(e){if(i!==e){switch(e){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:default:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL)}i=e}},setLocked:function(t){e=t},setClear:function(e){r!==e&&(t.clearDepth(e),r=e)},reset:function(){e=!1,n=null,i=null,r=null}}},o=new function(){let e=!1,n=null,i=null,r=null,s=null,a=null,o=null,l=null,c=null;return{setTest:function(n){e||(n?H(t.STENCIL_TEST):k(t.STENCIL_TEST))},setMask:function(i){n===i||e||(t.stencilMask(i),n=i)},setFunc:function(e,n,a){i===e&&r===n&&s===a||(t.stencilFunc(e,n,a),i=e,r=n,s=a)},setOp:function(e,n,i){a===e&&o===n&&l===i||(t.stencilOp(e,n,i),a=e,o=n,l=i)},setLocked:function(t){e=t},setClear:function(e){c!==e&&(t.clearStencil(e),c=e)},reset:function(){e=!1,n=null,i=null,r=null,s=null,a=null,o=null,l=null,c=null}}},l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],m=null,f=!1,g=null,v=null,_=null,x=null,y=null,M=null,S=null,b=!1,E=null,T=null,w=null,A=null,R=null;const C=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,P=0;const I=t.getParameter(t.VERSION);-1!==I.indexOf("WebGL")?(P=parseFloat(/^WebGL (\d)/.exec(I)[1]),L=P>=1):-1!==I.indexOf("OpenGL ES")&&(P=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),L=P>=2);let U=null,D={};const N=t.getParameter(t.SCISSOR_BOX),O=t.getParameter(t.VIEWPORT),F=(new ne).fromArray(N),B=(new ne).fromArray(O);function z(e,n,i,s){const a=new Uint8Array(4),o=t.createTexture();t.bindTexture(e,o),t.texParameteri(e,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(e,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let o=0;o<i;o++)!r||e!==t.TEXTURE_3D&&e!==t.TEXTURE_2D_ARRAY?t.texImage2D(n+o,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,a):t.texImage3D(n,0,t.RGBA,1,1,s,0,t.RGBA,t.UNSIGNED_BYTE,a);return o}const G={};function H(e){!0!==h[e]&&(t.enable(e),h[e]=!0)}function k(e){!1!==h[e]&&(t.disable(e),h[e]=!1)}G[t.TEXTURE_2D]=z(t.TEXTURE_2D,t.TEXTURE_2D,1),G[t.TEXTURE_CUBE_MAP]=z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(G[t.TEXTURE_2D_ARRAY]=z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),G[t.TEXTURE_3D]=z(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(t.DEPTH_TEST),a.setFunc(3),j(!1),q(1),H(t.CULL_FACE),X(0);const V={[n]:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};if(r)V[103]=t.MIN,V[104]=t.MAX;else{const t=e.get("EXT_blend_minmax");null!==t&&(V[103]=t.MIN_EXT,V[104]=t.MAX_EXT)}const W={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA};function X(e,i,r,s,a,o,l,c){if(0!==e){if(!1===f&&(H(t.BLEND),f=!0),5===e)a=a||i,o=o||r,l=l||s,i===v&&a===y||(t.blendEquationSeparate(V[i],V[a]),v=i,y=a),r===_&&s===x&&o===M&&l===S||(t.blendFuncSeparate(W[r],W[s],W[o],W[l]),_=r,x=s,M=o,S=l),g=e,b=!1;else if(e!==g||c!==b){if(v===n&&y===n||(t.blendEquation(t.FUNC_ADD),v=n,y=n),c)switch(e){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",e)}else switch(e){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",e)}_=null,x=null,M=null,S=null,g=e,b=c}}else!0===f&&(k(t.BLEND),f=!1)}function j(e){E!==e&&(e?t.frontFace(t.CW):t.frontFace(t.CCW),E=e)}function q(e){0!==e?(H(t.CULL_FACE),e!==T&&(1===e?t.cullFace(t.BACK):2===e?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):k(t.CULL_FACE),T=e}function Y(e,n,i){e?(H(t.POLYGON_OFFSET_FILL),A===n&&R===i||(t.polygonOffset(n,i),A=n,R=i)):k(t.POLYGON_OFFSET_FILL)}return{buffers:{color:s,depth:a,stencil:o},enable:H,disable:k,bindFramebuffer:function(e,n){return u[e]!==n&&(t.bindFramebuffer(e,n),u[e]=n,r&&(e===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=n),e===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=n)),!0)},drawBuffers:function(n,r){let s=p,a=!1;if(n)if(s=d.get(r),void 0===s&&(s=[],d.set(r,s)),n.isWebGLMultipleRenderTargets){const e=n.texture;if(s.length!==e.length||s[0]!==t.COLOR_ATTACHMENT0){for(let n=0,i=e.length;n<i;n++)s[n]=t.COLOR_ATTACHMENT0+n;s.length=e.length,a=!0}}else s[0]!==t.COLOR_ATTACHMENT0&&(s[0]=t.COLOR_ATTACHMENT0,a=!0);else s[0]!==t.BACK&&(s[0]=t.BACK,a=!0);a&&(i.isWebGL2?t.drawBuffers(s):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s))},useProgram:function(e){return m!==e&&(t.useProgram(e),m=e,!0)},setBlending:X,setMaterial:function(e,n){2===e.side?k(t.CULL_FACE):H(t.CULL_FACE);let i=1===e.side;n&&(i=!i),j(i),1===e.blending&&!1===e.transparent?X(0):X(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),a.setFunc(e.depthFunc),a.setTest(e.depthTest),a.setMask(e.depthWrite),s.setMask(e.colorWrite);const r=e.stencilWrite;o.setTest(r),r&&(o.setMask(e.stencilWriteMask),o.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),o.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),Y(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),!0===e.alphaToCoverage?H(t.SAMPLE_ALPHA_TO_COVERAGE):k(t.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:j,setCullFace:q,setLineWidth:function(e){e!==w&&(L&&t.lineWidth(e),w=e)},setPolygonOffset:Y,setScissorTest:function(e){e?H(t.SCISSOR_TEST):k(t.SCISSOR_TEST)},activeTexture:function(e){void 0===e&&(e=t.TEXTURE0+C-1),U!==e&&(t.activeTexture(e),U=e)},bindTexture:function(e,n,i){void 0===i&&(i=null===U?t.TEXTURE0+C-1:U);let r=D[i];void 0===r&&(r={type:void 0,texture:void 0},D[i]=r),r.type===e&&r.texture===n||(U!==i&&(t.activeTexture(i),U=i),t.bindTexture(e,n||G[e]),r.type=e,r.texture=n)},unbindTexture:function(){const e=D[U];void 0!==e&&void 0!==e.type&&(t.bindTexture(e.type,null),e.type=void 0,e.texture=void 0)},compressedTexImage2D:function(){try{t.compressedTexImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},compressedTexImage3D:function(){try{t.compressedTexImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage2D:function(){try{t.texImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage3D:function(){try{t.texImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},updateUBOMapping:function(e,n){let i=c.get(n);void 0===i&&(i=new WeakMap,c.set(n,i));let r=i.get(e);void 0===r&&(r=t.getUniformBlockIndex(n,e.name),i.set(e,r))},uniformBlockBinding:function(e,n){const i=c.get(n).get(e);l.get(n)!==i&&(t.uniformBlockBinding(n,i,e.__bindingPointIndex),l.set(n,i))},texStorage2D:function(){try{t.texStorage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texStorage3D:function(){try{t.texStorage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texSubImage2D:function(){try{t.texSubImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texSubImage3D:function(){try{t.texSubImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},compressedTexSubImage2D:function(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},compressedTexSubImage3D:function(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},scissor:function(e){!1===F.equals(e)&&(t.scissor(e.x,e.y,e.z,e.w),F.copy(e))},viewport:function(e){!1===B.equals(e)&&(t.viewport(e.x,e.y,e.z,e.w),B.copy(e))},reset:function(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),!0===r&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},U=null,D={},u={},d=new WeakMap,p=[],m=null,f=!1,g=null,v=null,_=null,x=null,y=null,M=null,S=null,b=!1,E=null,T=null,w=null,A=null,R=null,F.set(0,0,t.canvas.width,t.canvas.height),B.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}}}function na(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,A=r.maxCubemapSize,R=r.maxTextureSize,C=r.maxSamples,L=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,P="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),I=new WeakMap;let U;const D=new WeakMap;let N=!1;try{N="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch(t){}function O(t,e){return N?new OffscreenCanvas(t,e):Gt("canvas")}function F(t,e,n,i){let r=1;if((t.width>i||t.height>i)&&(r=i/Math.max(t.width,t.height)),r<1||!0===e){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const i=e?Lt:Math.floor,s=i(r*t.width),a=i(r*t.height);void 0===U&&(U=O(s,a));const o=n?O(s,a):U;o.width=s,o.height=a;return o.getContext("2d").drawImage(t,0,0,s,a),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+s+"x"+a+")."),o}return"data"in t&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+")."),t}return t}function B(t){return Rt(t.width)&&Rt(t.height)}function z(t,e){return t.generateMipmaps&&e&&t.minFilter!==d&&t.minFilter!==f}function G(e){t.generateMipmap(e)}function H(n,i,r,s,a=!1){if(!1===o)return i;if(null!==n){if(void 0!==t[n])return t[n];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'")}let l=i;return i===t.RED&&(r===t.FLOAT&&(l=t.R32F),r===t.HALF_FLOAT&&(l=t.R16F),r===t.UNSIGNED_BYTE&&(l=t.R8)),i===t.RG&&(r===t.FLOAT&&(l=t.RG32F),r===t.HALF_FLOAT&&(l=t.RG16F),r===t.UNSIGNED_BYTE&&(l=t.RG8)),i===t.RGBA&&(r===t.FLOAT&&(l=t.RGBA32F),r===t.HALF_FLOAT&&(l=t.RGBA16F),r===t.UNSIGNED_BYTE&&(l=s===dt&&!1===a?t.SRGB8_ALPHA8:t.RGBA8),r===t.UNSIGNED_SHORT_4_4_4_4&&(l=t.RGBA4),r===t.UNSIGNED_SHORT_5_5_5_1&&(l=t.RGB5_A1)),l!==t.R16F&&l!==t.R32F&&l!==t.RG16F&&l!==t.RG32F&&l!==t.RGBA16F&&l!==t.RGBA32F||e.get("EXT_color_buffer_float"),l}function k(t,e,n){return!0===z(t,n)||t.isFramebufferTexture&&t.minFilter!==d&&t.minFilter!==f?Math.log2(Math.max(e.width,e.height))+1:void 0!==t.mipmaps&&t.mipmaps.length>0?t.mipmaps.length:t.isCompressedTexture&&Array.isArray(t.image)?e.mipmaps.length:1}function V(e){return e===d||e===p||e===m?t.NEAREST:t.LINEAR}function W(t){const e=t.target;e.removeEventListener("dispose",W),function(t){const e=i.get(t);if(void 0===e.__webglInit)return;const n=t.source,r=D.get(n);if(r){const i=r[e.__cacheKey];i.usedTimes--,0===i.usedTimes&&j(t),0===Object.keys(r).length&&D.delete(n)}i.remove(t)}(e),e.isVideoTexture&&I.delete(e)}function X(e){const n=e.target;n.removeEventListener("dispose",X),function(e){const n=e.texture,r=i.get(e),s=i.get(n);void 0!==s.__webglTexture&&(t.deleteTexture(s.__webglTexture),a.memory.textures--);e.depthTexture&&e.depthTexture.dispose();if(e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++)t.deleteFramebuffer(r.__webglFramebuffer[e]),r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer[e]);else{if(t.deleteFramebuffer(r.__webglFramebuffer),r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&t.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let e=0;e<r.__webglColorRenderbuffer.length;e++)r.__webglColorRenderbuffer[e]&&t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);r.__webglDepthRenderbuffer&&t.deleteRenderbuffer(r.__webglDepthRenderbuffer)}if(e.isWebGLMultipleRenderTargets)for(let e=0,r=n.length;e<r;e++){const r=i.get(n[e]);r.__webglTexture&&(t.deleteTexture(r.__webglTexture),a.memory.textures--),i.remove(n[e])}i.remove(n),i.remove(e)}(n)}function j(e){const n=i.get(e);t.deleteTexture(n.__webglTexture);const r=e.source;delete D.get(r)[n.__cacheKey],a.memory.textures--}let q=0;function Y(e,r){const s=i.get(e);if(e.isVideoTexture&&function(t){const e=a.render.frame;I.get(t)!==e&&(I.set(t,e),t.update())}(e),!1===e.isRenderTargetTexture&&e.version>0&&s.__version!==e.version){const t=e.image;if(null===t)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(!1!==t.complete)return void Q(s,e,r);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}n.bindTexture(t.TEXTURE_2D,s.__webglTexture,t.TEXTURE0+r)}const Z={[c]:t.REPEAT,[h]:t.CLAMP_TO_EDGE,[u]:t.MIRRORED_REPEAT},J={[d]:t.NEAREST,[p]:t.NEAREST_MIPMAP_NEAREST,[m]:t.NEAREST_MIPMAP_LINEAR,[f]:t.LINEAR,[g]:t.LINEAR_MIPMAP_NEAREST,[v]:t.LINEAR_MIPMAP_LINEAR};function K(n,s,a){if(a?(t.texParameteri(n,t.TEXTURE_WRAP_S,Z[s.wrapS]),t.texParameteri(n,t.TEXTURE_WRAP_T,Z[s.wrapT]),n!==t.TEXTURE_3D&&n!==t.TEXTURE_2D_ARRAY||t.texParameteri(n,t.TEXTURE_WRAP_R,Z[s.wrapR]),t.texParameteri(n,t.TEXTURE_MAG_FILTER,J[s.magFilter]),t.texParameteri(n,t.TEXTURE_MIN_FILTER,J[s.minFilter])):(t.texParameteri(n,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(n,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n!==t.TEXTURE_3D&&n!==t.TEXTURE_2D_ARRAY||t.texParameteri(n,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),s.wrapS===h&&s.wrapT===h||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(n,t.TEXTURE_MAG_FILTER,V(s.magFilter)),t.texParameteri(n,t.TEXTURE_MIN_FILTER,V(s.minFilter)),s.minFilter!==d&&s.minFilter!==f&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),!0===e.has("EXT_texture_filter_anisotropic")){const a=e.get("EXT_texture_filter_anisotropic");if(s.magFilter===d)return;if(s.minFilter!==m&&s.minFilter!==v)return;if(s.type===M&&!1===e.has("OES_texture_float_linear"))return;if(!1===o&&s.type===S&&!1===e.has("OES_texture_half_float_linear"))return;(s.anisotropy>1||i.get(s).__currentAnisotropy)&&(t.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy)}}function $(e,n){let i=!1;void 0===e.__webglInit&&(e.__webglInit=!0,n.addEventListener("dispose",W));const r=n.source;let s=D.get(r);void 0===s&&(s={},D.set(r,s));const o=function(t){const e=[];return e.push(t.wrapS),e.push(t.wrapT),e.push(t.wrapR||0),e.push(t.magFilter),e.push(t.minFilter),e.push(t.anisotropy),e.push(t.internalFormat),e.push(t.format),e.push(t.type),e.push(t.generateMipmaps),e.push(t.premultiplyAlpha),e.push(t.flipY),e.push(t.unpackAlignment),e.push(t.colorSpace),e.join()}(n);if(o!==e.__cacheKey){void 0===s[o]&&(s[o]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,i=!0),s[o].usedTimes++;const r=s[e.__cacheKey];void 0!==r&&(s[e.__cacheKey].usedTimes--,0===r.usedTimes&&j(n)),e.__cacheKey=o,e.__webglTexture=s[o].texture}return i}function Q(e,r,a){let l=t.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(l=t.TEXTURE_2D_ARRAY),r.isData3DTexture&&(l=t.TEXTURE_3D);const c=$(e,r),u=r.source;n.bindTexture(l,e.__webglTexture,t.TEXTURE0+a);const p=i.get(u);if(u.version!==p.__version||!0===c){n.activeTexture(t.TEXTURE0+a),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,r.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,r.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const e=function(t){return!o&&(t.wrapS!==h||t.wrapT!==h||t.minFilter!==d&&t.minFilter!==f)}(r)&&!1===B(r.image);let i=F(r.image,e,!1,R);i=st(r,i);const m=B(i)||o,g=s.convert(r.format,r.colorSpace);let v,_=s.convert(r.type),S=H(r.internalFormat,g,_,r.colorSpace);K(l,r,m);const A=r.mipmaps,C=o&&!0!==r.isVideoTexture,L=void 0===p.__version||!0===c,P=k(r,i,m);if(r.isDepthTexture)S=t.DEPTH_COMPONENT,o?S=r.type===M?t.DEPTH_COMPONENT32F:r.type===y?t.DEPTH_COMPONENT24:r.type===b?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT16:r.type===M&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),r.format===T&&S===t.DEPTH_COMPONENT&&r.type!==x&&r.type!==y&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),r.type=y,_=s.convert(r.type)),r.format===w&&S===t.DEPTH_COMPONENT&&(S=t.DEPTH_STENCIL,r.type!==b&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),r.type=b,_=s.convert(r.type))),L&&(C?n.texStorage2D(t.TEXTURE_2D,1,S,i.width,i.height):n.texImage2D(t.TEXTURE_2D,0,S,i.width,i.height,0,g,_,null));else if(r.isDataTexture)if(A.length>0&&m){C&&L&&n.texStorage2D(t.TEXTURE_2D,P,S,A[0].width,A[0].height);for(let e=0,i=A.length;e<i;e++)v=A[e],C?n.texSubImage2D(t.TEXTURE_2D,e,0,0,v.width,v.height,g,_,v.data):n.texImage2D(t.TEXTURE_2D,e,S,v.width,v.height,0,g,_,v.data);r.generateMipmaps=!1}else C?(L&&n.texStorage2D(t.TEXTURE_2D,P,S,i.width,i.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,i.width,i.height,g,_,i.data)):n.texImage2D(t.TEXTURE_2D,0,S,i.width,i.height,0,g,_,i.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){C&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,P,S,A[0].width,A[0].height,i.depth);for(let e=0,s=A.length;e<s;e++)v=A[e],r.format!==E?null!==g?C?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,e,0,0,0,v.width,v.height,i.depth,g,v.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,e,S,v.width,v.height,i.depth,0,v.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?n.texSubImage3D(t.TEXTURE_2D_ARRAY,e,0,0,0,v.width,v.height,i.depth,g,_,v.data):n.texImage3D(t.TEXTURE_2D_ARRAY,e,S,v.width,v.height,i.depth,0,g,_,v.data)}else{C&&L&&n.texStorage2D(t.TEXTURE_2D,P,S,A[0].width,A[0].height);for(let e=0,i=A.length;e<i;e++)v=A[e],r.format!==E?null!==g?C?n.compressedTexSubImage2D(t.TEXTURE_2D,e,0,0,v.width,v.height,g,v.data):n.compressedTexImage2D(t.TEXTURE_2D,e,S,v.width,v.height,0,v.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?n.texSubImage2D(t.TEXTURE_2D,e,0,0,v.width,v.height,g,_,v.data):n.texImage2D(t.TEXTURE_2D,e,S,v.width,v.height,0,g,_,v.data)}else if(r.isDataArrayTexture)C?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,P,S,i.width,i.height,i.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,i.width,i.height,i.depth,g,_,i.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,S,i.width,i.height,i.depth,0,g,_,i.data);else if(r.isData3DTexture)C?(L&&n.texStorage3D(t.TEXTURE_3D,P,S,i.width,i.height,i.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,i.width,i.height,i.depth,g,_,i.data)):n.texImage3D(t.TEXTURE_3D,0,S,i.width,i.height,i.depth,0,g,_,i.data);else if(r.isFramebufferTexture){if(L)if(C)n.texStorage2D(t.TEXTURE_2D,P,S,i.width,i.height);else{let e=i.width,r=i.height;for(let i=0;i<P;i++)n.texImage2D(t.TEXTURE_2D,i,S,e,r,0,g,_,null),e>>=1,r>>=1}}else if(A.length>0&&m){C&&L&&n.texStorage2D(t.TEXTURE_2D,P,S,A[0].width,A[0].height);for(let e=0,i=A.length;e<i;e++)v=A[e],C?n.texSubImage2D(t.TEXTURE_2D,e,0,0,g,_,v):n.texImage2D(t.TEXTURE_2D,e,S,g,_,v);r.generateMipmaps=!1}else C?(L&&n.texStorage2D(t.TEXTURE_2D,P,S,i.width,i.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,g,_,i)):n.texImage2D(t.TEXTURE_2D,0,S,g,_,i);z(r,m)&&G(l),p.__version=u.version,r.onUpdate&&r.onUpdate(r)}e.__version=r.version}function tt(e,r,a,o,l){const c=s.convert(a.format,a.colorSpace),h=s.convert(a.type),u=H(a.internalFormat,c,h,a.colorSpace);i.get(r).__hasExternalTextures||(l===t.TEXTURE_3D||l===t.TEXTURE_2D_ARRAY?n.texImage3D(l,0,u,r.width,r.height,r.depth,0,c,h,null):n.texImage2D(l,0,u,r.width,r.height,0,c,h,null)),n.bindFramebuffer(t.FRAMEBUFFER,e),rt(r)?L.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,o,l,i.get(a).__webglTexture,0,it(r)):(l===t.TEXTURE_2D||l>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,o,l,i.get(a).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(e,n,i){if(t.bindRenderbuffer(t.RENDERBUFFER,e),n.depthBuffer&&!n.stencilBuffer){let r=t.DEPTH_COMPONENT16;if(i||rt(n)){const e=n.depthTexture;e&&e.isDepthTexture&&(e.type===M?r=t.DEPTH_COMPONENT32F:e.type===y&&(r=t.DEPTH_COMPONENT24));const i=it(n);rt(n)?L.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,i,r,n.width,n.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,i,r,n.width,n.height)}else t.renderbufferStorage(t.RENDERBUFFER,r,n.width,n.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e)}else if(n.depthBuffer&&n.stencilBuffer){const r=it(n);i&&!1===rt(n)?t.renderbufferStorageMultisample(t.RENDERBUFFER,r,t.DEPTH24_STENCIL8,n.width,n.height):rt(n)?L.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,r,t.DEPTH24_STENCIL8,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,n.width,n.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,e)}else{const e=!0===n.isWebGLMultipleRenderTargets?n.texture:[n.texture];for(let r=0;r<e.length;r++){const a=e[r],o=s.convert(a.format,a.colorSpace),l=s.convert(a.type),c=H(a.internalFormat,o,l,a.colorSpace),h=it(n);i&&!1===rt(n)?t.renderbufferStorageMultisample(t.RENDERBUFFER,h,c,n.width,n.height):rt(n)?L.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,h,c,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,c,n.width,n.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function nt(e){const r=i.get(e),s=!0===e.isWebGLCubeRenderTarget;if(e.depthTexture&&!r.__autoAllocateDepthBuffer){if(s)throw new Error("target.depthTexture not supported in Cube render targets");!function(e,r){if(r&&r.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,e),!r.depthTexture||!r.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(r.depthTexture).__webglTexture&&r.depthTexture.image.width===r.width&&r.depthTexture.image.height===r.height||(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),Y(r.depthTexture,0);const s=i.get(r.depthTexture).__webglTexture,a=it(r);if(r.depthTexture.format===T)rt(r)?L.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,s,0,a):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,s,0);else{if(r.depthTexture.format!==w)throw new Error("Unknown depthTexture format");rt(r)?L.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,s,0,a):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,s,0)}}(r.__webglFramebuffer,e)}else if(s){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)n.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]=t.createRenderbuffer(),et(r.__webglDepthbuffer[i],e,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer=t.createRenderbuffer(),et(r.__webglDepthbuffer,e,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function it(t){return Math.min(C,t.samples)}function rt(t){const n=i.get(t);return o&&t.samples>0&&!0===e.has("WEBGL_multisampled_render_to_texture")&&!1!==n.__useRenderToTexture}function st(t,n){const i=t.colorSpace,r=t.format,s=t.type;return!0===t.isCompressedTexture||t.format===_t||i!==pt&&i!==ut&&(i===dt?!1===o?!0===e.has("EXT_sRGB")&&r===E?(t.format=_t,t.minFilter=f,t.generateMipmaps=!1):n=Kt.sRGBToLinear(n):r===E&&s===_||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",i)),n}this.allocateTextureUnit=function(){const t=q;return t>=l&&console.warn("THREE.WebGLTextures: Trying to use "+t+" texture units while this GPU supports only "+l),q+=1,t},this.resetTextureUnits=function(){q=0},this.setTexture2D=Y,this.setTexture2DArray=function(e,r){const s=i.get(e);e.version>0&&s.__version!==e.version?Q(s,e,r):n.bindTexture(t.TEXTURE_2D_ARRAY,s.__webglTexture,t.TEXTURE0+r)},this.setTexture3D=function(e,r){const s=i.get(e);e.version>0&&s.__version!==e.version?Q(s,e,r):n.bindTexture(t.TEXTURE_3D,s.__webglTexture,t.TEXTURE0+r)},this.setTextureCube=function(e,r){const a=i.get(e);e.version>0&&a.__version!==e.version?function(e,r,a){if(6!==r.image.length)return;const l=$(e,r),c=r.source;n.bindTexture(t.TEXTURE_CUBE_MAP,e.__webglTexture,t.TEXTURE0+a);const h=i.get(c);if(c.version!==h.__version||!0===l){n.activeTexture(t.TEXTURE0+a),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,r.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,r.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const e=r.isCompressedTexture||r.image[0].isCompressedTexture,i=r.image[0]&&r.image[0].isDataTexture,u=[];for(let t=0;t<6;t++)u[t]=e||i?i?r.image[t].image:r.image[t]:F(r.image[t],!1,!0,A),u[t]=st(r,u[t]);const d=u[0],p=B(d)||o,m=s.convert(r.format,r.colorSpace),f=s.convert(r.type),g=H(r.internalFormat,m,f,r.colorSpace),v=o&&!0!==r.isVideoTexture,_=void 0===h.__version||!0===l;let x,y=k(r,d,p);if(K(t.TEXTURE_CUBE_MAP,r,p),e){v&&_&&n.texStorage2D(t.TEXTURE_CUBE_MAP,y,g,d.width,d.height);for(let e=0;e<6;e++){x=u[e].mipmaps;for(let i=0;i<x.length;i++){const s=x[i];r.format!==E?null!==m?v?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,0,0,s.width,s.height,m,s.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,g,s.width,s.height,0,s.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):v?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,0,0,s.width,s.height,m,f,s.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i,g,s.width,s.height,0,m,f,s.data)}}}else{x=r.mipmaps,v&&_&&(x.length>0&&y++,n.texStorage2D(t.TEXTURE_CUBE_MAP,y,g,u[0].width,u[0].height));for(let e=0;e<6;e++)if(i){v?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,u[e].width,u[e].height,m,f,u[e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,g,u[e].width,u[e].height,0,m,f,u[e].data);for(let i=0;i<x.length;i++){const r=x[i].image[e].image;v?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,0,0,r.width,r.height,m,f,r.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,g,r.width,r.height,0,m,f,r.data)}}else{v?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,m,f,u[e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,g,m,f,u[e]);for(let i=0;i<x.length;i++){const r=x[i];v?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,0,0,m,f,r.image[e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,g,m,f,r.image[e])}}}z(r,p)&&G(t.TEXTURE_CUBE_MAP),h.__version=c.version,r.onUpdate&&r.onUpdate(r)}e.__version=r.version}(a,e,r):n.bindTexture(t.TEXTURE_CUBE_MAP,a.__webglTexture,t.TEXTURE0+r)},this.rebindTextures=function(e,n,r){const s=i.get(e);void 0!==n&&tt(s.__webglFramebuffer,e,e.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),void 0!==r&&nt(e)},this.setupRenderTarget=function(e){const l=e.texture,c=i.get(e),h=i.get(l);e.addEventListener("dispose",X),!0!==e.isWebGLMultipleRenderTargets&&(void 0===h.__webglTexture&&(h.__webglTexture=t.createTexture()),h.__version=l.version,a.memory.textures++);const u=!0===e.isWebGLCubeRenderTarget,d=!0===e.isWebGLMultipleRenderTargets,p=B(e)||o;if(u){c.__webglFramebuffer=[];for(let e=0;e<6;e++)c.__webglFramebuffer[e]=t.createFramebuffer()}else{if(c.__webglFramebuffer=t.createFramebuffer(),d)if(r.drawBuffers){const n=e.texture;for(let e=0,r=n.length;e<r;e++){const r=i.get(n[e]);void 0===r.__webglTexture&&(r.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&e.samples>0&&!1===rt(e)){const i=d?l:[l];c.__webglMultisampledFramebuffer=t.createFramebuffer(),c.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,c.__webglMultisampledFramebuffer);for(let n=0;n<i.length;n++){const r=i[n];c.__webglColorRenderbuffer[n]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,c.__webglColorRenderbuffer[n]);const a=s.convert(r.format,r.colorSpace),o=s.convert(r.type),l=H(r.internalFormat,a,o,r.colorSpace,!0===e.isXRRenderTarget),h=it(e);t.renderbufferStorageMultisample(t.RENDERBUFFER,h,l,e.width,e.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+n,t.RENDERBUFFER,c.__webglColorRenderbuffer[n])}t.bindRenderbuffer(t.RENDERBUFFER,null),e.depthBuffer&&(c.__webglDepthRenderbuffer=t.createRenderbuffer(),et(c.__webglDepthRenderbuffer,e,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(u){n.bindTexture(t.TEXTURE_CUBE_MAP,h.__webglTexture),K(t.TEXTURE_CUBE_MAP,l,p);for(let n=0;n<6;n++)tt(c.__webglFramebuffer[n],e,l,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+n);z(l,p)&&G(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){const r=e.texture;for(let s=0,a=r.length;s<a;s++){const a=r[s],o=i.get(a);n.bindTexture(t.TEXTURE_2D,o.__webglTexture),K(t.TEXTURE_2D,a,p),tt(c.__webglFramebuffer,e,a,t.COLOR_ATTACHMENT0+s,t.TEXTURE_2D),z(a,p)&&G(t.TEXTURE_2D)}n.unbindTexture()}else{let i=t.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o?i=e.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(i,h.__webglTexture),K(i,l,p),tt(c.__webglFramebuffer,e,l,t.COLOR_ATTACHMENT0,i),z(l,p)&&G(i),n.unbindTexture()}e.depthBuffer&&nt(e)},this.updateRenderTargetMipmap=function(e){const r=B(e)||o,s=!0===e.isWebGLMultipleRenderTargets?e.texture:[e.texture];for(let a=0,o=s.length;a<o;a++){const o=s[a];if(z(o,r)){const r=e.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,s=i.get(o).__webglTexture;n.bindTexture(r,s),G(r),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(e){if(o&&e.samples>0&&!1===rt(e)){const r=e.isWebGLMultipleRenderTargets?e.texture:[e.texture],s=e.width,a=e.height;let o=t.COLOR_BUFFER_BIT;const l=[],c=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,h=i.get(e),u=!0===e.isWebGLMultipleRenderTargets;if(u)for(let e=0;e<r.length;e++)n.bindFramebuffer(t.FRAMEBUFFER,h.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,h.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,h.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,h.__webglFramebuffer);for(let n=0;n<r.length;n++){l.push(t.COLOR_ATTACHMENT0+n),e.depthBuffer&&l.push(c);const d=void 0!==h.__ignoreDepthValues&&h.__ignoreDepthValues;if(!1===d&&(e.depthBuffer&&(o|=t.DEPTH_BUFFER_BIT),e.stencilBuffer&&(o|=t.STENCIL_BUFFER_BIT)),u&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,h.__webglColorRenderbuffer[n]),!0===d&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[c]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[c])),u){const e=i.get(r[n]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)}t.blitFramebuffer(0,0,s,a,0,0,s,a,o,t.NEAREST),P&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,l)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),u)for(let e=0;e<r.length;e++){n.bindFramebuffer(t.FRAMEBUFFER,h.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.RENDERBUFFER,h.__webglColorRenderbuffer[e]);const s=i.get(r[e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,h.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+e,t.TEXTURE_2D,s,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,h.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=rt}function ia(t,e,n){const i=n.isWebGL2;return{convert:function(n,r=""){let s;if(n===_)return t.UNSIGNED_BYTE;if(1017===n)return t.UNSIGNED_SHORT_4_4_4_4;if(1018===n)return t.UNSIGNED_SHORT_5_5_5_1;if(1010===n)return t.BYTE;if(1011===n)return t.SHORT;if(n===x)return t.UNSIGNED_SHORT;if(1013===n)return t.INT;if(n===y)return t.UNSIGNED_INT;if(n===M)return t.FLOAT;if(n===S)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),null!==s?s.HALF_FLOAT_OES:null);if(1021===n)return t.ALPHA;if(n===E)return t.RGBA;if(1024===n)return t.LUMINANCE;if(1025===n)return t.LUMINANCE_ALPHA;if(n===T)return t.DEPTH_COMPONENT;if(n===w)return t.DEPTH_STENCIL;if(n===_t)return s=e.get("EXT_sRGB"),null!==s?s.SRGB_ALPHA_EXT:null;if(1028===n)return t.RED;if(1029===n)return t.RED_INTEGER;if(1030===n)return t.RG;if(1031===n)return t.RG_INTEGER;if(1033===n)return t.RGBA_INTEGER;if(n===A||n===R||n===C||n===L)if(r===dt){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),null===s)return null;if(n===A)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===R)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===C)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===L)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),null===s)return null;if(n===A)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===R)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===C)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===L)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===P||n===I||n===U||n===D){if(s=e.get("WEBGL_compressed_texture_pvrtc"),null===s)return null;if(n===P)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===I)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===U)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===D)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===n)return s=e.get("WEBGL_compressed_texture_etc1"),null!==s?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===N||n===O){if(s=e.get("WEBGL_compressed_texture_etc"),null===s)return null;if(n===N)return r===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===O)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(n===F||n===B||n===z||n===G||n===H||n===k||n===V||n===W||n===X||n===j||n===q||n===Y||n===Z||n===J){if(s=e.get("WEBGL_compressed_texture_astc"),null===s)return null;if(n===F)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===B)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===z)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===G)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===H)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===k)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===V)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===W)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===X)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===j)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===q)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Y)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Z)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===J)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===K){if(s=e.get("EXT_texture_compression_bptc"),null===s)return null;if(n===K)return r===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}if(36283===n||n===$||n===Q||n===tt){if(s=e.get("EXT_texture_compression_rgtc"),null===s)return null;if(n===K)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Q)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tt)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===b?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),null!==s?s.UNSIGNED_INT_24_8_WEBGL:null):void 0!==t[n]?t[n]:null}}}class ra extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sa extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aa={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(t){return null!==this._targetRay&&this._targetRay.dispatchEvent(t),null!==this._grip&&this._grip.dispatchEvent(t),null!==this._hand&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&"visible-blurred"!==e.session.visibilityState){if(l&&t.hand){s=!0;for(const i of t.hand.values()){const t=e.getJointPose(i,n),r=this._getHandJoint(l,i);null!==t&&(r.matrix.fromArray(t.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,r.jointRadius=t.radius),r.visible=null!==t}const i=l.joints["index-finger-tip"],r=l.joints["thumb-tip"],a=i.position.distanceTo(r.position),o=.02,c=.005;l.inputState.pinching&&a>o+c?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&a<=o-c&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else null!==o&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),null!==r&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));null!==a&&(i=e.getPose(t.targetRaySpace,n),null===i&&null!==r&&(i=r),null!==i&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aa)))}return null!==a&&(a.visible=null!==i),null!==o&&(o.visible=null!==r),null!==l&&(l.visible=null!==s),this}_getHandJoint(t,e){if(void 0===t.joints[e.jointName]){const n=new sa;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class la extends ee{constructor(t,e,n,i,r,s,a,o,l,c){if((c=void 0!==c?c:T)!==T&&c!==w)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===n&&c===T&&(n=y),void 0===n&&c===w&&(n=b),super(null,i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=void 0!==a?a:d,this.minFilter=void 0!==o?o:d,this.flipY=!1,this.generateMipmaps=!1}}class ca extends xt{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,p=null;const m=e.getContextAttributes();let f=null,g=null;const v=[],x=[],M=new Set,S=new Map,A=new Si;A.layers.enable(1),A.viewport=new ne;const R=new Si;R.layers.enable(2),R.viewport=new ne;const C=[A,R],L=new ra;L.layers.enable(1),L.layers.enable(2);let P=null,I=null;function U(t){const e=x.indexOf(t.inputSource);if(-1===e)return;const n=v[e];void 0!==n&&(n.update(t.inputSource,t.frame,l||s),n.dispatchEvent({type:t.type,data:t.inputSource}))}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",N);for(let t=0;t<v.length;t++){const e=x[t];null!==e&&(x[t]=null,v[t].disconnect(e))}P=null,I=null,t.setRenderTarget(f),d=null,u=null,h=null,i=null,g=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function N(t){for(let e=0;e<t.removed.length;e++){const n=t.removed[e],i=x.indexOf(n);i>=0&&(x[i]=null,v[i].disconnect(n))}for(let e=0;e<t.added.length;e++){const n=t.added[e];let i=x.indexOf(n);if(-1===i){for(let t=0;t<v.length;t++){if(t>=x.length){x.push(n),i=t;break}if(null===x[t]){x[t]=n,i=t;break}}if(-1===i)break}const r=v[i];r&&r.connect(n)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(t){let e=v[t];return void 0===e&&(e=new oa,v[t]=e),e.getTargetRaySpace()},this.getControllerGrip=function(t){let e=v[t];return void 0===e&&(e=new oa,v[t]=e),e.getGripSpace()},this.getHand=function(t){let e=v[t];return void 0===e&&(e=new oa,v[t]=e),e.getHandSpace()},this.setFramebufferScaleFactor=function(t){r=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(t){a=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(t){l=t},this.getBaseLayer=function(){return null!==u?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(c){if(i=c,null!==i){if(f=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",N),!0!==m.xrCompatible&&await e.makeXRCompatible(),void 0===i.renderState.layers||!1===t.capabilities.isWebGL2){const n={antialias:void 0!==i.renderState.layers||m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,n),i.updateRenderState({baseLayer:d}),g=new ie(d.framebufferWidth,d.framebufferHeight,{format:E,type:_,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let n=null,s=null,a=null;m.depth&&(a=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,n=m.stencil?w:T,s=m.stencil?b:y);const o={colorFormat:e.RGBA8,depthFormat:a,scaleFactor:r};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(o),i.updateRenderState({layers:[u]}),g=new ie(u.textureWidth,u.textureHeight,{format:E,type:_,depthTexture:new la(u.textureWidth,u.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});t.properties.get(g).__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(null!==i)return i.environmentBlendMode};const O=new oe,F=new oe;function B(t,e){null===e?t.matrixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(e.matrixWorld,t.matrix),t.matrixWorldInverse.copy(t.matrixWorld).invert()}this.updateCamera=function(t){if(null===i)return;L.near=R.near=A.near=t.near,L.far=R.far=A.far=t.far,P===L.near&&I===L.far||(i.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,I=L.far);const e=t.parent,n=L.cameras;B(L,e);for(let t=0;t<n.length;t++)B(n[t],e);2===n.length?function(t,e,n){O.setFromMatrixPosition(e.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);const i=O.distanceTo(F),r=e.projectionMatrix.elements,s=n.projectionMatrix.elements,a=r[14]/(r[10]-1),o=r[14]/(r[10]+1),l=(r[9]+1)/r[5],c=(r[9]-1)/r[5],h=(r[8]-1)/r[0],u=(s[8]+1)/s[0],d=a*h,p=a*u,m=i/(-h+u),f=m*-h;e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translateX(f),t.translateZ(m),t.matrixWorld.compose(t.position,t.quaternion,t.scale),t.matrixWorldInverse.copy(t.matrixWorld).invert();const g=a+m,v=o+m,_=d-f,x=p+(i-f),y=l*o/v*g,M=c*o/v*g;t.projectionMatrix.makePerspective(_,x,y,M,g,v),t.projectionMatrixInverse.copy(t.projectionMatrix).invert()}(L,A,R):L.projectionMatrix.copy(A.projectionMatrix),function(t,e,n){null===n?t.matrix.copy(e.matrixWorld):(t.matrix.copy(n.matrixWorld),t.matrix.invert(),t.matrix.multiply(e.matrixWorld));t.matrix.decompose(t.position,t.quaternion,t.scale),t.updateMatrixWorld(!0);const i=t.children;for(let t=0,e=i.length;t<e;t++)i[t].updateMatrixWorld(!0);t.projectionMatrix.copy(e.projectionMatrix),t.projectionMatrixInverse.copy(e.projectionMatrixInverse),t.isPerspectiveCamera&&(t.fov=2*bt*Math.atan(1/t.projectionMatrix.elements[5]),t.zoom=1)}(t,L,e)},this.getCamera=function(){return L},this.getFoveation=function(){if(null!==u||null!==d)return o},this.setFoveation=function(t){o=t,null!==u&&(u.fixedFoveation=t),null!==d&&void 0!==d.fixedFoveation&&(d.fixedFoveation=t)},this.getPlanes=function(){return M};let z=null;const G=new Di;G.setAnimationLoop((function(e,i){if(c=i.getViewerPose(l||s),p=i,null!==c){const e=c.views;null!==d&&(t.setRenderTargetFramebuffer(g,d.framebuffer),t.setRenderTarget(g));let n=!1;e.length!==L.cameras.length&&(L.cameras.length=0,n=!0);for(let i=0;i<e.length;i++){const r=e[i];let s=null;if(null!==d)s=d.getViewport(r);else{const e=h.getViewSubImage(u,r);s=e.viewport,0===i&&(t.setRenderTargetTextures(g,e.colorTexture,u.ignoreDepthValues?void 0:e.depthStencilTexture),t.setRenderTarget(g))}let a=C[i];void 0===a&&(a=new Si,a.layers.enable(i),a.viewport=new ne,C[i]=a),a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.projectionMatrix.fromArray(r.projectionMatrix),a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),a.viewport.set(s.x,s.y,s.width,s.height),0===i&&(L.matrix.copy(a.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),!0===n&&L.cameras.push(a)}}for(let t=0;t<v.length;t++){const e=x[t],n=v[t];null!==e&&void 0!==n&&n.update(e,i,l||s)}if(z&&z(e,i),i.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:i.detectedPlanes});let t=null;for(const e of M)i.detectedPlanes.has(e)||(null===t&&(t=[]),t.push(e));if(null!==t)for(const e of t)M.delete(e),S.delete(e),n.dispatchEvent({type:"planeremoved",data:e});for(const t of i.detectedPlanes)if(M.has(t)){const e=S.get(t);t.lastChangedTime>e&&(S.set(t,t.lastChangedTime),n.dispatchEvent({type:"planechanged",data:t}))}else M.add(t),S.set(t,i.lastChangedTime),n.dispatchEvent({type:"planeadded",data:t})}p=null})),this.setAnimationLoop=function(t){z=t},this.dispose=function(){}}}function ha(t,e){function n(t,e){!0===t.matrixAutoUpdate&&t.updateMatrix(),e.value.copy(t.matrix)}function i(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map,n(r.map,i.mapTransform)),r.alphaMap&&(i.alphaMap.value=r.alphaMap,n(r.alphaMap,i.alphaMapTransform)),r.bumpMap&&(i.bumpMap.value=r.bumpMap,n(r.bumpMap,i.bumpMapTransform),i.bumpScale.value=r.bumpScale,1===r.side&&(i.bumpScale.value*=-1)),r.normalMap&&(i.normalMap.value=r.normalMap,n(r.normalMap,i.normalMapTransform),i.normalScale.value.copy(r.normalScale),1===r.side&&i.normalScale.value.negate()),r.displacementMap&&(i.displacementMap.value=r.displacementMap,n(r.displacementMap,i.displacementMapTransform),i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,i.emissiveMapTransform)),r.specularMap&&(i.specularMap.value=r.specularMap,n(r.specularMap,i.specularMapTransform)),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);const s=e.get(r).envMap;if(s&&(i.envMap.value=s,i.flipEnvMap.value=s.isCubeTexture&&!1===s.isRenderTargetTexture?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap){i.lightMap.value=r.lightMap;const e=!0===t.useLegacyLights?Math.PI:1;i.lightMapIntensity.value=r.lightMapIntensity*e,n(r.lightMap,i.lightMapTransform)}r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(e,n){n.color.getRGB(e.fogColor.value,_i(t)),n.isFog?(e.fogNear.value=n.near,e.fogFar.value=n.far):n.isFogExp2&&(e.fogDensity.value=n.density)},refreshMaterialUniforms:function(t,r,s,a,o){r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(t,r):r.isMeshToonMaterial?(i(t,r),function(t,e){e.gradientMap&&(t.gradientMap.value=e.gradientMap)}(t,r)):r.isMeshPhongMaterial?(i(t,r),function(t,e){t.specular.value.copy(e.specular),t.shininess.value=Math.max(e.shininess,1e-4)}(t,r)):r.isMeshStandardMaterial?(i(t,r),function(t,i){t.metalness.value=i.metalness,i.metalnessMap&&(t.metalnessMap.value=i.metalnessMap,n(i.metalnessMap,t.metalnessMapTransform));t.roughness.value=i.roughness,i.roughnessMap&&(t.roughnessMap.value=i.roughnessMap,n(i.roughnessMap,t.roughnessMapTransform));const r=e.get(i).envMap;r&&(t.envMapIntensity.value=i.envMapIntensity)}(t,r),r.isMeshPhysicalMaterial&&function(t,e,i){t.ior.value=e.ior,e.sheen>0&&(t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen),t.sheenRoughness.value=e.sheenRoughness,e.sheenColorMap&&(t.sheenColorMap.value=e.sheenColorMap,n(e.sheenColorMap,t.sheenColorMapTransform)),e.sheenRoughnessMap&&(t.sheenRoughnessMap.value=e.sheenRoughnessMap,n(e.sheenRoughnessMap,t.sheenRoughnessMapTransform)));e.clearcoat>0&&(t.clearcoat.value=e.clearcoat,t.clearcoatRoughness.value=e.clearcoatRoughness,e.clearcoatMap&&(t.clearcoatMap.value=e.clearcoatMap,n(e.clearcoatMap,t.clearcoatMapTransform)),e.clearcoatRoughnessMap&&(t.clearcoatRoughnessMap.value=e.clearcoatRoughnessMap,n(e.clearcoatRoughnessMap,t.clearcoatRoughnessMapTransform)),e.clearcoatNormalMap&&(t.clearcoatNormalMap.value=e.clearcoatNormalMap,n(e.clearcoatNormalMap,t.clearcoatNormalMapTransform),t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),1===e.side&&t.clearcoatNormalScale.value.negate()));e.iridescence>0&&(t.iridescence.value=e.iridescence,t.iridescenceIOR.value=e.iridescenceIOR,t.iridescenceThicknessMinimum.value=e.iridescenceThicknessRange[0],t.iridescenceThicknessMaximum.value=e.iridescenceThicknessRange[1],e.iridescenceMap&&(t.iridescenceMap.value=e.iridescenceMap,n(e.iridescenceMap,t.iridescenceMapTransform)),e.iridescenceThicknessMap&&(t.iridescenceThicknessMap.value=e.iridescenceThicknessMap,n(e.iridescenceThicknessMap,t.iridescenceThicknessMapTransform)));e.transmission>0&&(t.transmission.value=e.transmission,t.transmissionSamplerMap.value=i.texture,t.transmissionSamplerSize.value.set(i.width,i.height),e.transmissionMap&&(t.transmissionMap.value=e.transmissionMap,n(e.transmissionMap,t.transmissionMapTransform)),t.thickness.value=e.thickness,e.thicknessMap&&(t.thicknessMap.value=e.thicknessMap,n(e.thicknessMap,t.thicknessMapTransform)),t.attenuationDistance.value=e.attenuationDistance,t.attenuationColor.value.copy(e.attenuationColor));t.specularIntensity.value=e.specularIntensity,t.specularColor.value.copy(e.specularColor),e.specularColorMap&&(t.specularColorMap.value=e.specularColorMap,n(e.specularColorMap,t.specularColorMapTransform));e.specularIntensityMap&&(t.specularIntensityMap.value=e.specularIntensityMap,n(e.specularIntensityMap,t.specularIntensityMapTransform))}(t,r,o)):r.isMeshMatcapMaterial?(i(t,r),function(t,e){e.matcap&&(t.matcap.value=e.matcap)}(t,r)):r.isMeshDepthMaterial?i(t,r):r.isMeshDistanceMaterial?(i(t,r),function(t,n){const i=e.get(n).light;t.referencePosition.value.setFromMatrixPosition(i.matrixWorld),t.nearDistance.value=i.shadow.camera.near,t.farDistance.value=i.shadow.camera.far}(t,r)):r.isMeshNormalMaterial?i(t,r):r.isLineBasicMaterial?(function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,e.map&&(t.map.value=e.map,n(e.map,t.mapTransform))}(t,r),r.isLineDashedMaterial&&function(t,e){t.dashSize.value=e.dashSize,t.totalSize.value=e.dashSize+e.gapSize,t.scale.value=e.scale}(t,r)):r.isPointsMaterial?function(t,e,i,r){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.size.value=e.size*i,t.scale.value=.5*r,e.map&&(t.map.value=e.map,n(e.map,t.uvTransform));e.alphaMap&&(t.alphaMap.value=e.alphaMap);e.alphaTest>0&&(t.alphaTest.value=e.alphaTest)}(t,r,s,a):r.isSpriteMaterial?function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.rotation.value=e.rotation,e.map&&(t.map.value=e.map,n(e.map,t.mapTransform));e.alphaMap&&(t.alphaMap.value=e.alphaMap);e.alphaTest>0&&(t.alphaTest.value=e.alphaTest)}(t,r):r.isShadowMaterial?(t.color.value.copy(r.color),t.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function ua(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(t,e,n){const i=t.value;if(void 0===n[e]){if("number"==typeof i)n[e]=i;else{const t=Array.isArray(i)?i:[i],r=[];for(let e=0;e<t.length;e++)r.push(t[e].clone());n[e]=r}return!0}if("number"==typeof i){if(n[e]!==i)return n[e]=i,!0}else{const t=Array.isArray(n[e])?n[e]:[n[e]],r=Array.isArray(i)?i:[i];for(let e=0;e<t.length;e++){const n=t[e];if(!1===n.equals(r[e]))return n.copy(r[e]),!0}}return!1}function c(t){const e={boundary:0,storage:0};return"number"==typeof t?(e.boundary=4,e.storage=4):t.isVector2?(e.boundary=8,e.storage=8):t.isVector3||t.isColor?(e.boundary=16,e.storage=12):t.isVector4?(e.boundary=16,e.storage=16):t.isMatrix3?(e.boundary=48,e.storage=48):t.isMatrix4?(e.boundary=64,e.storage=64):t.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",t),e}function h(e){const n=e.target;n.removeEventListener("dispose",h);const i=a.indexOf(n.__bindingPointIndex);a.splice(i,1),t.deleteBuffer(r[n.id]),delete r[n.id],delete s[n.id]}return{bind:function(t,e){const n=e.program;i.uniformBlockBinding(t,n)},update:function(n,u){let d=r[n.id];void 0===d&&(!function(t){const e=t.uniforms;let n=0;const i=16;let r=0;for(let t=0,s=e.length;t<s;t++){const s=e[t],a={boundary:0,storage:0},o=Array.isArray(s.value)?s.value:[s.value];for(let t=0,e=o.length;t<e;t++){const e=c(o[t]);a.boundary+=e.boundary,a.storage+=e.storage}if(s.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),s.__offset=n,t>0){r=n%i;0!==r&&i-r-a.boundary<0&&(n+=i-r,s.__offset=n)}n+=a.storage}r=n%i,r>0&&(n+=i-r);t.__size=n,t.__cache={}}(n),d=function(e){const n=function(){for(let t=0;t<o;t++)if(-1===a.indexOf(t))return a.push(t),t;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();e.__bindingPointIndex=n;const i=t.createBuffer(),r=e.__size,s=e.usage;return t.bindBuffer(t.UNIFORM_BUFFER,i),t.bufferData(t.UNIFORM_BUFFER,r,s),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,n,i),i}(n),r[n.id]=d,n.addEventListener("dispose",h));const p=u.program;i.updateUBOMapping(n,p);const m=e.render.frame;s[n.id]!==m&&(!function(e){const n=r[e.id],i=e.uniforms,s=e.__cache;t.bindBuffer(t.UNIFORM_BUFFER,n);for(let e=0,n=i.length;e<n;e++){const n=i[e];if(!0===l(n,e,s)){const e=n.__offset,i=Array.isArray(n.value)?n.value:[n.value];let r=0;for(let s=0;s<i.length;s++){const a=i[s],o=c(a);"number"==typeof a?(n.__data[0]=a,t.bufferSubData(t.UNIFORM_BUFFER,e+r,n.__data)):a.isMatrix3?(n.__data[0]=a.elements[0],n.__data[1]=a.elements[1],n.__data[2]=a.elements[2],n.__data[3]=a.elements[0],n.__data[4]=a.elements[3],n.__data[5]=a.elements[4],n.__data[6]=a.elements[5],n.__data[7]=a.elements[0],n.__data[8]=a.elements[6],n.__data[9]=a.elements[7],n.__data[10]=a.elements[8],n.__data[11]=a.elements[0]):(a.toArray(n.__data,r),r+=o.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,e,n.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}(n),s[n.id]=m)},dispose:function(){for(const e in r)t.deleteBuffer(r[e]);a=[],r={},s={}}}}function da(){const t=Gt("canvas");return t.style.display="block",t}class pa{constructor(t={}){const{canvas:n=da(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;let d;this.isWebGLRenderer=!0,d=null!==i?i.getContextAttributes().alpha:a;let p=null,m=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=dt,this.useLegacyLights=!0,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let y=!1,b=0,T=0,w=null,A=-1,R=null;const C=new ne,L=new ne;let P=null,I=n.width,U=n.height,D=1,N=null,O=null;const F=new ne(0,0,I,U),B=new ne(0,0,I,U);let z=!1;const G=new Ui;let H=!1,k=!1,V=null;const W=new Fe,X=new oe,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return null===w?D:1}let Y,Z,J,K,$,Q,tt,et,nt,it,rt,st,at,ot,lt,ct,ht,ut,mt,ft,gt,vt,_t,xt,yt=i;function Mt(t,e){for(let i=0;i<t.length;i++){const r=t[i],s=n.getContext(r,e);if(null!==s)return s}return null}try{const t={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${e}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",Tt,!1),n.addEventListener("webglcontextcreationerror",wt,!1),null===yt){const e=["webgl2","webgl","experimental-webgl"];if(!0===x.isWebGL1Renderer&&e.shift(),yt=Mt(e,t),null===yt)throw Mt(e)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}void 0===yt.getShaderPrecisionFormat&&(yt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(t){throw console.error("THREE.WebGLRenderer: "+t.message),t}function St(){Y=new cr(yt),Z=new Wi(yt,Y,t),Y.init(Z),vt=new ia(yt,Y,Z),J=new ea(yt,Y,Z),K=new dr(yt),$=new Hs,Q=new na(yt,Y,J,$,Z,vt,K),tt=new ji(x),et=new lr(x),nt=new Ni(yt,Z),_t=new ki(yt,Y,nt,Z),it=new hr(yt,nt,K,_t),rt=new gr(yt,it,nt,K),mt=new fr(yt,Z,Q),ct=new Xi($),st=new Gs(x,tt,et,Y,Z,_t,ct),at=new ha(x,$),ot=new Xs,lt=new Ks(Y,Z),ut=new Hi(x,tt,et,J,rt,d,l),ht=new ta(x,rt,Z),xt=new ua(yt,K,Z,J),ft=new Vi(yt,Y,K,Z),gt=new ur(yt,Y,K,Z),K.programs=st.programs,x.capabilities=Z,x.extensions=Y,x.properties=$,x.renderLists=ot,x.shadowMap=ht,x.state=J,x.info=K}St();const bt=new ca(x,yt);function Et(t){t.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const t=K.autoReset,e=ht.enabled,n=ht.autoUpdate,i=ht.needsUpdate,r=ht.type;St(),K.autoReset=t,ht.enabled=e,ht.autoUpdate=n,ht.needsUpdate=i,ht.type=r}function wt(t){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",t.statusMessage)}function At(t){const e=t.target;e.removeEventListener("dispose",At),function(t){(function(t){const e=$.get(t).programs;void 0!==e&&(e.forEach((function(t){st.releaseProgram(t)})),t.isShaderMaterial&&st.releaseShaderCache(t))})(t),$.remove(t)}(e)}this.xr=bt,this.getContext=function(){return yt},this.getContextAttributes=function(){return yt.getContextAttributes()},this.forceContextLoss=function(){const t=Y.get("WEBGL_lose_context");t&&t.loseContext()},this.forceContextRestore=function(){const t=Y.get("WEBGL_lose_context");t&&t.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(t){void 0!==t&&(D=t,this.setSize(I,U,!1))},this.getSize=function(t){return t.set(I,U)},this.setSize=function(t,e,i=!0){bt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(I=t,U=e,n.width=Math.floor(t*D),n.height=Math.floor(e*D),!0===i&&(n.style.width=t+"px",n.style.height=e+"px"),this.setViewport(0,0,t,e))},this.getDrawingBufferSize=function(t){return t.set(I*D,U*D).floor()},this.setDrawingBufferSize=function(t,e,i){I=t,U=e,D=i,n.width=Math.floor(t*i),n.height=Math.floor(e*i),this.setViewport(0,0,t,e)},this.getCurrentViewport=function(t){return t.copy(C)},this.getViewport=function(t){return t.copy(F)},this.setViewport=function(t,e,n,i){t.isVector4?F.set(t.x,t.y,t.z,t.w):F.set(t,e,n,i),J.viewport(C.copy(F).multiplyScalar(D).floor())},this.getScissor=function(t){return t.copy(B)},this.setScissor=function(t,e,n,i){t.isVector4?B.set(t.x,t.y,t.z,t.w):B.set(t,e,n,i),J.scissor(L.copy(B).multiplyScalar(D).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(t){J.setScissorTest(z=t)},this.setOpaqueSort=function(t){N=t},this.setTransparentSort=function(t){O=t},this.getClearColor=function(t){return t.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(t=!0,e=!0,n=!0){let i=0;t&&(i|=yt.COLOR_BUFFER_BIT),e&&(i|=yt.DEPTH_BUFFER_BIT),n&&(i|=yt.STENCIL_BUFFER_BIT),yt.clear(i)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Tt,!1),n.removeEventListener("webglcontextcreationerror",wt,!1),ot.dispose(),lt.dispose(),$.dispose(),tt.dispose(),et.dispose(),rt.dispose(),_t.dispose(),xt.dispose(),st.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Ct),bt.removeEventListener("sessionend",Lt),V&&(V.dispose(),V=null),Pt.stop()},this.renderBufferDirect=function(t,e,n,i,r,s){null===e&&(e=j);const a=r.isMesh&&r.matrixWorld.determinant()<0,o=function(t,e,n,i,r){!0!==e.isScene&&(e=j);Q.resetTextureUnits();const s=e.fog,a=i.isMeshStandardMaterial?e.environment:null,o=null===w?x.outputColorSpace:!0===w.isXRRenderTarget?w.texture.colorSpace:pt,l=(i.isMeshStandardMaterial?et:tt).get(i.envMap||a),c=!0===i.vertexColors&&!!n.attributes.color&&4===n.attributes.color.itemSize,h=!!i.normalMap&&!!n.attributes.tangent,u=!!n.morphAttributes.position,d=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,f=i.toneMapped?x.toneMapping:0,g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,v=void 0!==g?g.length:0,_=$.get(i),y=m.state.lights;if(!0===H&&(!0===k||t!==R)){const e=t===R&&i.id===A;ct.setState(i,t,e)}let M=!1;i.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version||_.outputColorSpace!==o||r.isInstancedMesh&&!1===_.instancing?M=!0:r.isInstancedMesh||!0!==_.instancing?r.isSkinnedMesh&&!1===_.skinning?M=!0:r.isSkinnedMesh||!0!==_.skinning?_.envMap!==l||!0===i.fog&&_.fog!==s?M=!0:void 0===_.numClippingPlanes||_.numClippingPlanes===ct.numPlanes&&_.numIntersection===ct.numIntersection?(_.vertexAlphas!==c||_.vertexTangents!==h||_.morphTargets!==u||_.morphNormals!==d||_.morphColors!==p||_.toneMapping!==f||!0===Z.isWebGL2&&_.morphTargetsCount!==v)&&(M=!0):M=!0:M=!0:M=!0:(M=!0,_.__version=i.version);let S=_.currentProgram;!0===M&&(S=Ot(i,e,r));let b=!1,E=!1,T=!1;const C=S.getUniforms(),L=_.uniforms;J.useProgram(S.program)&&(b=!0,E=!0,T=!0);i.id!==A&&(A=i.id,E=!0);if(b||R!==t){if(C.setValue(yt,"projectionMatrix",t.projectionMatrix),Z.logarithmicDepthBuffer&&C.setValue(yt,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),R!==t&&(R=t,E=!0,T=!0),i.isShaderMaterial||i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshStandardMaterial||i.envMap){const e=C.map.cameraPosition;void 0!==e&&e.setValue(yt,X.setFromMatrixPosition(t.matrixWorld))}(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial)&&C.setValue(yt,"isOrthographic",!0===t.isOrthographicCamera),(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial||i.isShadowMaterial||r.isSkinnedMesh)&&C.setValue(yt,"viewMatrix",t.matrixWorldInverse)}if(r.isSkinnedMesh){C.setOptional(yt,r,"bindMatrix"),C.setOptional(yt,r,"bindMatrixInverse");const t=r.skeleton;t&&(Z.floatVertexTextures?(null===t.boneTexture&&t.computeBoneTexture(),C.setValue(yt,"boneTexture",t.boneTexture,Q),C.setValue(yt,"boneTextureSize",t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const P=n.morphAttributes;(void 0!==P.position||void 0!==P.normal||void 0!==P.color&&!0===Z.isWebGL2)&&mt.update(r,n,S);(E||_.receiveShadow!==r.receiveShadow)&&(_.receiveShadow=r.receiveShadow,C.setValue(yt,"receiveShadow",r.receiveShadow));i.isMeshGouraudMaterial&&null!==i.envMap&&(L.envMap.value=l,L.flipEnvMap.value=l.isCubeTexture&&!1===l.isRenderTargetTexture?-1:1);E&&(C.setValue(yt,"toneMappingExposure",x.toneMappingExposure),_.needsLights&&(N=T,(I=L).ambientLightColor.needsUpdate=N,I.lightProbe.needsUpdate=N,I.directionalLights.needsUpdate=N,I.directionalLightShadows.needsUpdate=N,I.pointLights.needsUpdate=N,I.pointLightShadows.needsUpdate=N,I.spotLights.needsUpdate=N,I.spotLightShadows.needsUpdate=N,I.rectAreaLights.needsUpdate=N,I.hemisphereLights.needsUpdate=N),s&&!0===i.fog&&at.refreshFogUniforms(L,s),at.refreshMaterialUniforms(L,i,D,U,V),ys.upload(yt,_.uniformsList,L,Q));var I,N;i.isShaderMaterial&&!0===i.uniformsNeedUpdate&&(ys.upload(yt,_.uniformsList,L,Q),i.uniformsNeedUpdate=!1);i.isSpriteMaterial&&C.setValue(yt,"center",r.center);if(C.setValue(yt,"modelViewMatrix",r.modelViewMatrix),C.setValue(yt,"normalMatrix",r.normalMatrix),C.setValue(yt,"modelMatrix",r.matrixWorld),i.isShaderMaterial||i.isRawShaderMaterial){const t=i.uniformsGroups;for(let e=0,n=t.length;e<n;e++)if(Z.isWebGL2){const n=t[e];xt.update(n,S),xt.bind(n,S)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return S}(t,e,n,i,r);J.setMaterial(i,a);let l=n.index,c=1;!0===i.wireframe&&(l=it.getWireframeAttribute(n),c=2);const h=n.drawRange,u=n.attributes.position;let d=h.start*c,p=(h.start+h.count)*c;null!==s&&(d=Math.max(d,s.start*c),p=Math.min(p,(s.start+s.count)*c)),null!==l?(d=Math.max(d,0),p=Math.min(p,l.count)):null!=u&&(d=Math.max(d,0),p=Math.min(p,u.count));const f=p-d;if(f<0||f===1/0)return;let g;_t.setup(r,i,o,n,l);let v=ft;if(null!==l&&(g=nt.get(l),v=gt,v.setIndex(g)),r.isMesh)!0===i.wireframe?(J.setLineWidth(i.wireframeLinewidth*q()),v.setMode(yt.LINES)):v.setMode(yt.TRIANGLES);else if(r.isLine){let t=i.linewidth;void 0===t&&(t=1),J.setLineWidth(t*q()),r.isLineSegments?v.setMode(yt.LINES):r.isLineLoop?v.setMode(yt.LINE_LOOP):v.setMode(yt.LINE_STRIP)}else r.isPoints?v.setMode(yt.POINTS):r.isSprite&&v.setMode(yt.TRIANGLES);if(r.isInstancedMesh)v.renderInstances(d,f,r.count);else if(n.isInstancedBufferGeometry){const t=void 0!==n._maxInstanceCount?n._maxInstanceCount:1/0,e=Math.min(n.instanceCount,t);v.renderInstances(d,f,e)}else v.render(d,f)},this.compile=function(t,e){function n(t,e,n){!0===t.transparent&&2===t.side&&!1===t.forceSinglePass?(t.side=1,t.needsUpdate=!0,Ot(t,e,n),t.side=0,t.needsUpdate=!0,Ot(t,e,n),t.side=2):Ot(t,e,n)}m=lt.get(t),m.init(),g.push(m),t.traverseVisible((function(t){t.isLight&&t.layers.test(e.layers)&&(m.pushLight(t),t.castShadow&&m.pushShadow(t))})),m.setupLights(x.useLegacyLights),t.traverse((function(e){const i=e.material;if(i)if(Array.isArray(i))for(let r=0;r<i.length;r++){n(i[r],t,e)}else n(i,t,e)})),g.pop(),m=null};let Rt=null;function Ct(){Pt.stop()}function Lt(){Pt.start()}const Pt=new Di;function It(t,e,n,i){if(!1===t.visible)return;if(t.layers.test(e.layers))if(t.isGroup)n=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(e);else if(t.isLight)m.pushLight(t),t.castShadow&&m.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||G.intersectsSprite(t)){i&&X.setFromMatrixPosition(t.matrixWorld).applyMatrix4(W);const e=rt.update(t),r=t.material;r.visible&&p.push(t,e,r,n,X.z,null)}}else if((t.isMesh||t.isLine||t.isPoints)&&(!t.frustumCulled||G.intersectsObject(t))){t.isSkinnedMesh&&t.skeleton.frame!==K.render.frame&&(t.skeleton.update(),t.skeleton.frame=K.render.frame);const e=rt.update(t),r=t.material;if(i&&(null===e.boundingSphere&&e.computeBoundingSphere(),X.copy(e.boundingSphere.center).applyMatrix4(t.matrixWorld).applyMatrix4(W)),Array.isArray(r)){const i=e.groups;for(let s=0,a=i.length;s<a;s++){const a=i[s],o=r[a.materialIndex];o&&o.visible&&p.push(t,e,o,n,X.z,a)}}else r.visible&&p.push(t,e,r,n,X.z,null)}const r=t.children;for(let t=0,s=r.length;t<s;t++)It(r[t],e,n,i)}function Ut(t,e,n,i){const r=t.opaque,s=t.transmissive,a=t.transparent;m.setupLightsView(n),!0===H&&ct.setGlobalState(x.clippingPlanes,n),s.length>0&&function(t,e,n,i){if(null===V){const t=Z.isWebGL2;V=new ie(1024,1024,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?S:_,minFilter:v,samples:t&&!0===o?4:0})}const r=x.getRenderTarget();x.setRenderTarget(V),x.clear();const s=x.toneMapping;x.toneMapping=0,Dt(t,n,i),Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V);let a=!1;for(let t=0,r=e.length;t<r;t++){const r=e[t],s=r.object,o=r.geometry,l=r.material,c=r.group;if(2===l.side&&s.layers.test(i.layers)){const t=l.side;l.side=1,l.needsUpdate=!0,Nt(s,n,i,o,l,c),l.side=t,l.needsUpdate=!0,a=!0}}!0===a&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V));x.setRenderTarget(r),x.toneMapping=s}(r,s,e,n),i&&J.viewport(C.copy(i)),r.length>0&&Dt(r,e,n),s.length>0&&Dt(s,e,n),a.length>0&&Dt(a,e,n),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Dt(t,e,n){const i=!0===e.isScene?e.overrideMaterial:null;for(let r=0,s=t.length;r<s;r++){const s=t[r],a=s.object,o=s.geometry,l=null===i?s.material:i,c=s.group;a.layers.test(n.layers)&&Nt(a,e,n,o,l,c)}}function Nt(t,e,n,i,r,s){t.onBeforeRender(x,e,n,i,r,s),t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),r.onBeforeRender(x,e,n,i,t,s),!0===r.transparent&&2===r.side&&!1===r.forceSinglePass?(r.side=1,r.needsUpdate=!0,x.renderBufferDirect(n,e,i,r,t,s),r.side=0,r.needsUpdate=!0,x.renderBufferDirect(n,e,i,r,t,s),r.side=2):x.renderBufferDirect(n,e,i,r,t,s),t.onAfterRender(x,e,n,i,r,s)}function Ot(t,e,n){!0!==e.isScene&&(e=j);const i=$.get(t),r=m.state.lights,s=m.state.shadowsArray,a=r.state.version,o=st.getParameters(t,r.state,s,e,n),l=st.getProgramCacheKey(o);let c=i.programs;i.environment=t.isMeshStandardMaterial?e.environment:null,i.fog=e.fog,i.envMap=(t.isMeshStandardMaterial?et:tt).get(t.envMap||i.environment),void 0===c&&(t.addEventListener("dispose",At),c=new Map,i.programs=c);let h=c.get(l);if(void 0!==h){if(i.currentProgram===h&&i.lightsStateVersion===a)return Ft(t,o),h}else o.uniforms=st.getUniforms(t),t.onBuild(n,o,x),t.onBeforeCompile(o,x),h=st.acquireProgram(o,l),c.set(l,h),i.uniforms=o.uniforms;const u=i.uniforms;(t.isShaderMaterial||t.isRawShaderMaterial)&&!0!==t.clipping||(u.clippingPlanes=ct.uniform),Ft(t,o),i.needsLights=function(t){return t.isMeshLambertMaterial||t.isMeshToonMaterial||t.isMeshPhongMaterial||t.isMeshStandardMaterial||t.isShadowMaterial||t.isShaderMaterial&&!0===t.lights}(t),i.lightsStateVersion=a,i.needsLights&&(u.ambientLightColor.value=r.state.ambient,u.lightProbe.value=r.state.probe,u.directionalLights.value=r.state.directional,u.directionalLightShadows.value=r.state.directionalShadow,u.spotLights.value=r.state.spot,u.spotLightShadows.value=r.state.spotShadow,u.rectAreaLights.value=r.state.rectArea,u.ltc_1.value=r.state.rectAreaLTC1,u.ltc_2.value=r.state.rectAreaLTC2,u.pointLights.value=r.state.point,u.pointLightShadows.value=r.state.pointShadow,u.hemisphereLights.value=r.state.hemi,u.directionalShadowMap.value=r.state.directionalShadowMap,u.directionalShadowMatrix.value=r.state.directionalShadowMatrix,u.spotShadowMap.value=r.state.spotShadowMap,u.spotLightMatrix.value=r.state.spotLightMatrix,u.spotLightMap.value=r.state.spotLightMap,u.pointShadowMap.value=r.state.pointShadowMap,u.pointShadowMatrix.value=r.state.pointShadowMatrix);const d=h.getUniforms(),p=ys.seqWithValue(d.seq,u);return i.currentProgram=h,i.uniformsList=p,h}function Ft(t,e){const n=$.get(t);n.outputColorSpace=e.outputColorSpace,n.instancing=e.instancing,n.skinning=e.skinning,n.morphTargets=e.morphTargets,n.morphNormals=e.morphNormals,n.morphColors=e.morphColors,n.morphTargetsCount=e.morphTargetsCount,n.numClippingPlanes=e.numClippingPlanes,n.numIntersection=e.numClipIntersection,n.vertexAlphas=e.vertexAlphas,n.vertexTangents=e.vertexTangents,n.toneMapping=e.toneMapping}Pt.setAnimationLoop((function(t){Rt&&Rt(t)})),"undefined"!=typeof self&&Pt.setContext(self),this.setAnimationLoop=function(t){Rt=t,bt.setAnimationLoop(t),null===t?Pt.stop():Pt.start()},bt.addEventListener("sessionstart",Ct),bt.addEventListener("sessionend",Lt),this.render=function(t,e){if(void 0!==e&&!0!==e.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===y)return;!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),null===e.parent&&!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),!0===bt.enabled&&!0===bt.isPresenting&&(!0===bt.cameraAutoUpdate&&bt.updateCamera(e),e=bt.getCamera()),!0===t.isScene&&t.onBeforeRender(x,t,e,w),m=lt.get(t,g.length),m.init(),g.push(m),W.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),G.setFromProjectionMatrix(W),k=this.localClippingEnabled,H=ct.init(this.clippingPlanes,k),p=ot.get(t,f.length),p.init(),f.push(p),It(t,e,0,x.sortObjects),p.finish(),!0===x.sortObjects&&p.sort(N,O),!0===H&&ct.beginShadows();const n=m.state.shadowsArray;if(ht.render(n,t,e),!0===H&&ct.endShadows(),!0===this.info.autoReset&&this.info.reset(),ut.render(p,t),m.setupLights(x.useLegacyLights),e.isArrayCamera){const n=e.cameras;for(let e=0,i=n.length;e<i;e++){const i=n[e];Ut(p,t,i,i.viewport)}}else Ut(p,t,e);null!==w&&(Q.updateMultisampleRenderTarget(w),Q.updateRenderTargetMipmap(w)),!0===t.isScene&&t.onAfterRender(x,t,e),_t.resetDefaultState(),A=-1,R=null,g.pop(),m=g.length>0?g[g.length-1]:null,f.pop(),p=f.length>0?f[f.length-1]:null},this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(t,e,n){$.get(t.texture).__webglTexture=e,$.get(t.depthTexture).__webglTexture=n;const i=$.get(t);i.__hasExternalTextures=!0,i.__hasExternalTextures&&(i.__autoAllocateDepthBuffer=void 0===n,i.__autoAllocateDepthBuffer||!0===Y.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),i.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(t,e){const n=$.get(t);n.__webglFramebuffer=e,n.__useDefaultFramebuffer=void 0===e},this.setRenderTarget=function(t,e=0,n=0){w=t,b=e,T=n;let i=!0,r=null,s=!1,a=!1;if(t){const n=$.get(t);void 0!==n.__useDefaultFramebuffer?(J.bindFramebuffer(yt.FRAMEBUFFER,null),i=!1):void 0===n.__webglFramebuffer?Q.setupRenderTarget(t):n.__hasExternalTextures&&Q.rebindTextures(t,$.get(t.texture).__webglTexture,$.get(t.depthTexture).__webglTexture);const o=t.texture;(o.isData3DTexture||o.isDataArrayTexture||o.isCompressedArrayTexture)&&(a=!0);const l=$.get(t).__webglFramebuffer;t.isWebGLCubeRenderTarget?(r=l[e],s=!0):r=Z.isWebGL2&&t.samples>0&&!1===Q.useMultisampledRTT(t)?$.get(t).__webglMultisampledFramebuffer:l,C.copy(t.viewport),L.copy(t.scissor),P=t.scissorTest}else C.copy(F).multiplyScalar(D).floor(),L.copy(B).multiplyScalar(D).floor(),P=z;if(J.bindFramebuffer(yt.FRAMEBUFFER,r)&&Z.drawBuffers&&i&&J.drawBuffers(t,r),J.viewport(C),J.scissor(L),J.setScissorTest(P),s){const i=$.get(t.texture);yt.framebufferTexture2D(yt.FRAMEBUFFER,yt.COLOR_ATTACHMENT0,yt.TEXTURE_CUBE_MAP_POSITIVE_X+e,i.__webglTexture,n)}else if(a){const i=$.get(t.texture),r=e||0;yt.framebufferTextureLayer(yt.FRAMEBUFFER,yt.COLOR_ATTACHMENT0,i.__webglTexture,n||0,r)}A=-1},this.readRenderTargetPixels=function(t,e,n,i,r,s,a){if(!t||!t.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let o=$.get(t).__webglFramebuffer;if(t.isWebGLCubeRenderTarget&&void 0!==a&&(o=o[a]),o){J.bindFramebuffer(yt.FRAMEBUFFER,o);try{const a=t.texture,o=a.format,l=a.type;if(o!==E&&vt.convert(o)!==yt.getParameter(yt.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const c=l===S&&(Y.has("EXT_color_buffer_half_float")||Z.isWebGL2&&Y.has("EXT_color_buffer_float"));if(!(l===_||vt.convert(l)===yt.getParameter(yt.IMPLEMENTATION_COLOR_READ_TYPE)||l===M&&(Z.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float"))||c))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");e>=0&&e<=t.width-i&&n>=0&&n<=t.height-r&&yt.readPixels(e,n,i,r,vt.convert(o),vt.convert(l),s)}finally{const t=null!==w?$.get(w).__webglFramebuffer:null;J.bindFramebuffer(yt.FRAMEBUFFER,t)}}},this.copyFramebufferToTexture=function(t,e,n=0){const i=Math.pow(2,-n),r=Math.floor(e.image.width*i),s=Math.floor(e.image.height*i);Q.setTexture2D(e,0),yt.copyTexSubImage2D(yt.TEXTURE_2D,n,0,0,t.x,t.y,r,s),J.unbindTexture()},this.copyTextureToTexture=function(t,e,n,i=0){const r=e.image.width,s=e.image.height,a=vt.convert(n.format),o=vt.convert(n.type);Q.setTexture2D(n,0),yt.pixelStorei(yt.UNPACK_FLIP_Y_WEBGL,n.flipY),yt.pixelStorei(yt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),yt.pixelStorei(yt.UNPACK_ALIGNMENT,n.unpackAlignment),e.isDataTexture?yt.texSubImage2D(yt.TEXTURE_2D,i,t.x,t.y,r,s,a,o,e.image.data):e.isCompressedTexture?yt.compressedTexSubImage2D(yt.TEXTURE_2D,i,t.x,t.y,e.mipmaps[0].width,e.mipmaps[0].height,a,e.mipmaps[0].data):yt.texSubImage2D(yt.TEXTURE_2D,i,t.x,t.y,a,o,e.image),0===i&&n.generateMipmaps&&yt.generateMipmap(yt.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(t,e,n,i,r=0){if(x.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const s=t.max.x-t.min.x+1,a=t.max.y-t.min.y+1,o=t.max.z-t.min.z+1,l=vt.convert(i.format),c=vt.convert(i.type);let h;if(i.isData3DTexture)Q.setTexture3D(i,0),h=yt.TEXTURE_3D;else{if(!i.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");Q.setTexture2DArray(i,0),h=yt.TEXTURE_2D_ARRAY}yt.pixelStorei(yt.UNPACK_FLIP_Y_WEBGL,i.flipY),yt.pixelStorei(yt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),yt.pixelStorei(yt.UNPACK_ALIGNMENT,i.unpackAlignment);const u=yt.getParameter(yt.UNPACK_ROW_LENGTH),d=yt.getParameter(yt.UNPACK_IMAGE_HEIGHT),p=yt.getParameter(yt.UNPACK_SKIP_PIXELS),m=yt.getParameter(yt.UNPACK_SKIP_ROWS),f=yt.getParameter(yt.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[0]:n.image;yt.pixelStorei(yt.UNPACK_ROW_LENGTH,g.width),yt.pixelStorei(yt.UNPACK_IMAGE_HEIGHT,g.height),yt.pixelStorei(yt.UNPACK_SKIP_PIXELS,t.min.x),yt.pixelStorei(yt.UNPACK_SKIP_ROWS,t.min.y),yt.pixelStorei(yt.UNPACK_SKIP_IMAGES,t.min.z),n.isDataTexture||n.isData3DTexture?yt.texSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,c,g.data):n.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),yt.compressedTexSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,g.data)):yt.texSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,c,g),yt.pixelStorei(yt.UNPACK_ROW_LENGTH,u),yt.pixelStorei(yt.UNPACK_IMAGE_HEIGHT,d),yt.pixelStorei(yt.UNPACK_SKIP_PIXELS,p),yt.pixelStorei(yt.UNPACK_SKIP_ROWS,m),yt.pixelStorei(yt.UNPACK_SKIP_IMAGES,f),0===r&&i.generateMipmaps&&yt.generateMipmap(h),J.unbindTexture()},this.initTexture=function(t){t.isCubeTexture?Q.setTextureCube(t,0):t.isData3DTexture?Q.setTexture3D(t,0):t.isDataArrayTexture||t.isCompressedArrayTexture?Q.setTexture2DArray(t,0):Q.setTexture2D(t,0),J.unbindTexture()},this.resetState=function(){b=0,T=0,w=null,J.reset(),_t.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?ht:ct}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ht?dt:pt}}class ma extends pa{}ma.prototype.isWebGL1Renderer=!0;class fa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rn(t),this.density=e}clone(){return new fa(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class ga{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rn(t),this.near=e,this.far=n}clone(){return new ga(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class va extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.environment&&(this.environment=t.environment.clone()),null!==t.fog&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return null!==this.fog&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class _a{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.usage=gt,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Et()}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=Et()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=Et()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xa=new oe;class ya{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix4(t),this.setXYZ(e,xa.x,xa.y,xa.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyNormalMatrix(t),this.setXYZ(e,xa.x,xa.y,xa.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.transformDirection(t),this.setXYZ(e,xa.x,xa.y,xa.z);return this}setX(t,e){return this.normalized&&(e=It(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=It(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=It(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=It(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pt(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pt(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pt(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pt(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=It(e,this.array),n=It(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=It(e,this.array),n=It(n,this.array),i=It(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=It(e,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const n=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[n+e])}return new Bn(new this.array.constructor(t),this.itemSize,this.normalized)}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ya(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const n=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[n+e])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ma extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rn(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Sa;const ba=new oe,Ea=new oe,Ta=new oe,wa=new Dt,Aa=new Dt,Ra=new Fe,Ca=new oe,La=new oe,Pa=new oe,Ia=new Dt,Ua=new Dt,Da=new Dt;class Na extends cn{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",void 0===Sa){Sa=new Zn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new _a(t,5);Sa.setIndex([0,1,2,0,2,3]),Sa.setAttribute("position",new ya(e,3,0,!1)),Sa.setAttribute("uv",new ya(e,2,3,!1))}this.geometry=Sa,this.material=void 0!==t?t:new Ma,this.center=new Dt(.5,.5)}raycast(t,e){null===t.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ea.setFromMatrixScale(this.matrixWorld),Ra.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ta.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&Ea.multiplyScalar(-Ta.z);const n=this.material.rotation;let i,r;0!==n&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;Oa(Ca.set(-.5,-.5,0),Ta,s,Ea,i,r),Oa(La.set(.5,-.5,0),Ta,s,Ea,i,r),Oa(Pa.set(.5,.5,0),Ta,s,Ea,i,r),Ia.set(0,0),Ua.set(1,0),Da.set(1,1);let a=t.ray.intersectTriangle(Ca,La,Pa,!1,ba);if(null===a&&(Oa(La.set(-.5,.5,0),Ta,s,Ea,i,r),Ua.set(0,1),a=t.ray.intersectTriangle(Ca,Pa,La,!1,ba),null===a))return;const o=t.ray.origin.distanceTo(ba);o<t.near||o>t.far||e.push({distance:o,point:ba.clone(),uv:Mn.getInterpolation(ba,Ca,La,Pa,Ia,Ua,Da,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),void 0!==t.center&&this.center.copy(t.center),this.material=t.material,this}}function Oa(t,e,n,i,r,s){wa.subVectors(t,n).addScalar(.5).multiply(i),void 0!==r?(Aa.x=s*wa.x-r*wa.y,Aa.y=r*wa.x+s*wa.y):Aa.copy(wa),t.copy(e),t.x+=Aa.x,t.y+=Aa.y,t.applyMatrix4(Ra)}const Fa=new oe,Ba=new oe;class za extends cn{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let t=0,n=e.length;t<n;t++){const n=e[t];this.addLevel(n.object.clone(),n.distance,n.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let i=e[n].distance;if(e[n].object.visible&&(i-=i*e[n].hysteresis),t<i)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Fa.setFromMatrixPosition(this.matrixWorld);const n=t.ray.origin.distanceTo(Fa);this.getObjectForDistance(n).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Fa.setFromMatrixPosition(t.matrixWorld),Ba.setFromMatrixPosition(this.matrixWorld);const n=Fa.distanceTo(Ba)/t.zoom;let i,r;for(e[0].object.visible=!0,i=1,r=e.length;i<r;i++){let t=e[i].distance;if(e[i].object.visible&&(t-=t*e[i].hysteresis),!(n>=t))break;e[i-1].object.visible=!1,e[i].object.visible=!0}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);!1===this.autoUpdate&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let t=0,i=n.length;t<i;t++){const i=n[t];e.object.levels.push({object:i.object.uuid,distance:i.distance,hysteresis:i.hysteresis})}return e}}const Ga=new oe,Ha=new ne,ka=new ne,Va=new oe,Wa=new Fe,Xa=new oe;class ja extends pi{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;null===this.boundingBox&&(this.boundingBox=new he),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let t=0;t<e.count;t++)Xa.fromBufferAttribute(e,t),this.applyBoneTransform(t,Xa),this.boundingBox.expandByPoint(Xa)}computeBoundingSphere(){const t=this.geometry;null===this.boundingSphere&&(this.boundingSphere=new Re),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let t=0;t<e.count;t++)Xa.fromBufferAttribute(e,t),this.applyBoneTransform(t,Xa),this.boundingSphere.expandByPoint(Xa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const i=1/t.manhattanLength();i!==1/0?t.multiplyScalar(i):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),"attached"===this.bindMode?this.bindMatrixInverse.copy(this.matrixWorld).invert():"detached"===this.bindMode?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Ha.fromBufferAttribute(i.attributes.skinIndex,t),ka.fromBufferAttribute(i.attributes.skinWeight,t),Ga.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let t=0;t<4;t++){const i=ka.getComponent(t);if(0!==i){const r=Ha.getComponent(t);Wa.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),e.addScaledVector(Va.copy(Ga).applyMatrix4(Wa),i)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class qa extends cn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ya extends ee{constructor(t=null,e=1,n=1,i,r,s,a,o,l=1003,c=1003,h,u){super(null,s,a,o,l,c,i,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Za=new Fe,Ja=new Fe;class Ka{constructor(t=[],e=[]){this.uuid=Et(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),0===e.length)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const e=new Fe;this.bones[t]&&e.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(e)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&e.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&(e.parent&&e.parent.isBone?(e.matrix.copy(e.parent.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let i=0,r=t.length;i<r;i++){const r=t[i]?t[i].matrixWorld:Ja;Za.multiplyMatrices(r,e[i]),Za.toArray(n,16*i)}null!==i&&(i.needsUpdate=!0)}clone(){return new Ka(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length);t=Ct(t),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ya(e,t,t,E,M);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this.boneTextureSize=t,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const i=t.bones[n];let r=e[i];void 0===r&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),r=new qa),this.bones.push(r),this.boneInverses.push((new Fe).fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const r=e[i];t.bones.push(r.uuid);const s=n[i];t.boneInverses.push(s.toArray())}return t}}class $a extends Bn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qa=new Fe,to=new Fe,eo=[],no=new he,io=new Fe,ro=new pi,so=new Re;class ao extends pi{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let t=0;t<n;t++)this.setMatrixAt(t,io)}computeBoundingBox(){const t=this.geometry,e=this.count;null===this.boundingBox&&(this.boundingBox=new he),null===t.boundingBox&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qa),no.copy(t.boundingBox).applyMatrix4(Qa),this.boundingBox.union(no)}computeBoundingSphere(){const t=this.geometry,e=this.count;null===this.boundingSphere&&(this.boundingSphere=new Re),null===t.boundingSphere&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qa),so.copy(t.boundingSphere).applyMatrix4(Qa),this.boundingSphere.union(so)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),null!==t.instanceColor&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ro.geometry=this.geometry,ro.material=this.material,void 0!==ro.material&&(null===this.boundingSphere&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),!1!==t.ray.intersectsSphere(so)))for(let r=0;r<i;r++){this.getMatrixAt(r,Qa),to.multiplyMatrices(n,Qa),ro.matrixWorld=to,ro.raycast(t,eo);for(let t=0,n=eo.length;t<n;t++){const n=eo[t];n.instanceId=r,n.object=this,e.push(n)}eo.length=0}}setColorAt(t,e){null===this.instanceColor&&(this.instanceColor=new $a(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class oo extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rn(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lo=new oe,co=new oe,ho=new Fe,uo=new Oe,po=new Re;class mo extends cn{constructor(t=new Zn,e=new oo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(null===t.index){const e=t.attributes.position,n=[0];for(let t=1,i=e.count;t<i;t++)lo.fromBufferAttribute(e,t-1),co.fromBufferAttribute(e,t),n[t]=n[t-1],n[t]+=lo.distanceTo(co);t.setAttribute("lineDistance",new Hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(null===n.boundingSphere&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,!1===t.ray.intersectsSphere(po))return;ho.copy(i).invert(),uo.copy(t.ray).applyMatrix4(ho);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new oe,c=new oe,h=new oe,u=new oe,d=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(null!==p){for(let n=Math.max(0,s.start),i=Math.min(p.count,s.start+s.count)-1;n<i;n+=d){const i=p.getX(n),r=p.getX(n+1);l.fromBufferAttribute(m,i),c.fromBufferAttribute(m,r);if(uo.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);const s=t.ray.origin.distanceTo(u);s<t.near||s>t.far||e.push({distance:s,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this})}}else{for(let n=Math.max(0,s.start),i=Math.min(m.count,s.start+s.count)-1;n<i;n+=d){l.fromBufferAttribute(m,n),c.fromBufferAttribute(m,n+1);if(uo.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);const i=t.ray.origin.distanceTo(u);i<t.near||i>t.far||e.push({distance:i,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=n.length;t<e;t++){const e=n[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t}}}}}const fo=new oe,go=new oe;class vo extends mo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(null===t.index){const e=t.attributes.position,n=[];for(let t=0,i=e.count;t<i;t+=2)fo.fromBufferAttribute(e,t),go.fromBufferAttribute(e,t+1),n[t]=0===t?0:n[t-1],n[t+1]=n[t]+fo.distanceTo(go);t.setAttribute("lineDistance",new Hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _o extends mo{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class xo extends bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yo=new Fe,Mo=new Oe,So=new Re,bo=new oe;class Eo extends cn{constructor(t=new Zn,e=new xo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(null===n.boundingSphere&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=r,!1===t.ray.intersectsSphere(So))return;yo.copy(i).invert(),Mo.copy(t.ray).applyMatrix4(yo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,c=n.attributes.position;if(null!==l){for(let n=Math.max(0,s.start),r=Math.min(l.count,s.start+s.count);n<r;n++){const r=l.getX(n);bo.fromBufferAttribute(c,r),To(bo,r,o,i,t,e,this)}}else{for(let n=Math.max(0,s.start),r=Math.min(c.count,s.start+s.count);n<r;n++)bo.fromBufferAttribute(c,n),To(bo,n,o,i,t,e,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=n.length;t<e;t++){const e=n[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t}}}}}function To(t,e,n,i,r,s,a){const o=Mo.distanceSqToPoint(t);if(o<n){const n=new oe;Mo.closestPointToPoint(t,n),n.applyMatrix4(i);const l=r.ray.origin.distanceTo(n);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:n,index:e,face:null,object:a})}}class wo extends ee{constructor(t,e,n,i,r,s,a,o,l,c,h,u){super(null,s,a,o,l,c,i,r,h,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Ao{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;s=e||t*n[r-1];let a,o=0,l=r-1;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),a=n[i]-s,a<0)o=i+1;else{if(!(a>0)){l=i;break}l=i-1}if(i=l,n[i]===s)return i/(r-1);const c=n[i];return(i+(s-c)/(n[i+1]-c))/(r-1)}getTangent(t,e){const n=1e-4;let i=t-n,r=t+n;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new Dt:new oe);return o.copy(a).sub(s).normalize(),o}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new oe,i=[],r=[],s=[],a=new oe,o=new Fe;for(let e=0;e<=t;e++){const n=e/t;i[e]=this.getTangentAt(n,new oe)}r[0]=new oe,s[0]=new oe;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let e=1;e<=t;e++){if(r[e]=r[e-1].clone(),s[e]=s[e-1].clone(),a.crossVectors(i[e-1],i[e]),a.length()>Number.EPSILON){a.normalize();const t=Math.acos(Tt(i[e-1].dot(i[e]),-1,1));r[e].applyMatrix4(o.makeRotationAxis(a,t))}s[e].crossVectors(i[e],r[e])}if(!0===e){let e=Math.acos(Tt(r[0].dot(r[t]),-1,1));e/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(e=-e);for(let n=1;n<=t;n++)r[n].applyMatrix4(o.makeRotationAxis(i[n],e*n)),s[n].crossVectors(i[n],r[n])}return{tangents:i,normals:r,binormals:s}}clone(){return(new this.constructor).copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ro extends Ao{constructor(t=0,e=0,n=1,i=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(t,e){const n=e||new Dt,i=2*Math.PI;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=s?0:i),!0!==this.aClockwise||s||(r===i?r=-i:r-=i);const a=this.aStartAngle+t*r;let o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(0!==this.aRotation){const t=Math.cos(this.aRotation),e=Math.sin(this.aRotation),n=o-this.aX,i=l-this.aY;o=n*t-i*e+this.aX,l=n*e+i*t+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Co extends Ro{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Lo(){let t=0,e=0,n=0,i=0;function r(r,s,a,o){t=r,e=a,n=-3*r+3*s-2*a-o,i=2*r-2*s+a+o}return{initCatmullRom:function(t,e,n,i,s){r(e,n,s*(n-t),s*(i-e))},initNonuniformCatmullRom:function(t,e,n,i,s,a,o){let l=(e-t)/s-(n-t)/(s+a)+(n-e)/a,c=(n-e)/a-(i-e)/(a+o)+(i-n)/o;l*=a,c*=a,r(e,n,l,c)},calc:function(r){const s=r*r;return t+e*r+n*s+i*(s*r)}}}const Po=new oe,Io=new Lo,Uo=new Lo,Do=new Lo;class No extends Ao{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new oe){const n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let a,o,l=Math.floor(s),c=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:0===c&&l===r-1&&(l=r-2,c=1),this.closed||l>0?a=i[(l-1)%r]:(Po.subVectors(i[0],i[1]).add(i[0]),a=Po);const h=i[l%r],u=i[(l+1)%r];if(this.closed||l+2<r?o=i[(l+2)%r]:(Po.subVectors(i[r-1],i[r-2]).add(i[r-1]),o=Po),"centripetal"===this.curveType||"chordal"===this.curveType){const t="chordal"===this.curveType?.5:.25;let e=Math.pow(a.distanceToSquared(h),t),n=Math.pow(h.distanceToSquared(u),t),i=Math.pow(u.distanceToSquared(o),t);n<1e-4&&(n=1),e<1e-4&&(e=n),i<1e-4&&(i=n),Io.initNonuniformCatmullRom(a.x,h.x,u.x,o.x,e,n,i),Uo.initNonuniformCatmullRom(a.y,h.y,u.y,o.y,e,n,i),Do.initNonuniformCatmullRom(a.z,h.z,u.z,o.z,e,n,i)}else"catmullrom"===this.curveType&&(Io.initCatmullRom(a.x,h.x,u.x,o.x,this.tension),Uo.initCatmullRom(a.y,h.y,u.y,o.y,this.tension),Do.initCatmullRom(a.z,h.z,u.z,o.z,this.tension));return n.set(Io.calc(c),Uo.calc(c),Do.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push((new oe).fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Oo(t,e,n,i,r){const s=.5*(i-e),a=.5*(r-n),o=t*t;return(2*n-2*i+s+a)*(t*o)+(-3*n+3*i-2*s-a)*o+s*t+n}function Fo(t,e,n,i){return function(t,e){const n=1-t;return n*n*e}(t,e)+function(t,e){return 2*(1-t)*t*e}(t,n)+function(t,e){return t*t*e}(t,i)}function Bo(t,e,n,i,r){return function(t,e){const n=1-t;return n*n*n*e}(t,e)+function(t,e){const n=1-t;return 3*n*n*t*e}(t,n)+function(t,e){return 3*(1-t)*t*t*e}(t,i)+function(t,e){return t*t*t*e}(t,r)}class zo extends Ao{constructor(t=new Dt,e=new Dt,n=new Dt,i=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Dt){const n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Bo(t,i.x,r.x,s.x,a.x),Bo(t,i.y,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Go extends Ao{constructor(t=new oe,e=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new oe){const n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Bo(t,i.x,r.x,s.x,a.x),Bo(t,i.y,r.y,s.y,a.y),Bo(t,i.z,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ho extends Ao{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){const n=e;return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ko extends Ao{constructor(t=new oe,e=new oe){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new oe){const n=e;return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new oe){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vo extends Ao{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Fo(t,i.x,r.x,s.x),Fo(t,i.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wo extends Ao{constructor(t=new oe,e=new oe,n=new oe){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new oe){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Fo(t,i.x,r.x,s.x),Fo(t,i.y,r.y,s.y),Fo(t,i.z,r.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xo extends Ao{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){const n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),a=r-s,o=i[0===s?s:s-1],l=i[s],c=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(Oo(a,o.x,l.x,c.x,h.x),Oo(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e];this.points.push((new Dt).fromArray(n))}return this}}var jo=Object.freeze({__proto__:null,ArcCurve:Co,CatmullRomCurve3:No,CubicBezierCurve:zo,CubicBezierCurve3:Go,EllipseCurve:Ro,LineCurve:Ho,LineCurve3:ko,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:Wo,SplineCurve:Xo});class qo extends Ao{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Ho(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const t=i[r]-n,s=this.curves[r],a=s.getLength(),o=0===a?0:1-t/a;return s.getPointAt(o,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],a=s.isEllipseCurve?2*t:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,o=s.getPoints(a);for(let t=0;t<o.length;t++){const i=o[t];n&&n.equals(i)||(e.push(i),n=i)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const n=t.curves[e];this.curves.push((new jo[n.type]).fromJSON(n))}return this}}class Yo extends qo{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ho(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Vo(this.currentPoint.clone(),new Dt(t,e),new Dt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s){const a=new zo(this.currentPoint.clone(),new Dt(t,e),new Dt(n,i),new Dt(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,s){const a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this}ellipse(t,e,n,i,r,s,a,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,r,s,a,o),this}absellipse(t,e,n,i,r,s,a,o){const l=new Ro(t,e,n,i,r,s,a,o);if(this.curves.length>0){const t=l.getPoint(0);t.equals(this.currentPoint)||this.lineTo(t.x,t.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Zo extends Zn{constructor(t=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],e=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Tt(i,0,2*Math.PI);const r=[],s=[],a=[],o=[],l=[],c=1/e,h=new oe,u=new Dt,d=new oe,p=new oe,m=new oe;let f=0,g=0;for(let e=0;e<=t.length-1;e++)switch(e){case 0:f=t[e+1].x-t[e].x,g=t[e+1].y-t[e].y,d.x=1*g,d.y=-f,d.z=0*g,m.copy(d),d.normalize(),o.push(d.x,d.y,d.z);break;case t.length-1:o.push(m.x,m.y,m.z);break;default:f=t[e+1].x-t[e].x,g=t[e+1].y-t[e].y,d.x=1*g,d.y=-f,d.z=0*g,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),o.push(d.x,d.y,d.z),m.copy(p)}for(let r=0;r<=e;r++){const d=n+r*c*i,p=Math.sin(d),m=Math.cos(d);for(let n=0;n<=t.length-1;n++){h.x=t[n].x*p,h.y=t[n].y,h.z=t[n].x*m,s.push(h.x,h.y,h.z),u.x=r/e,u.y=n/(t.length-1),a.push(u.x,u.y);const i=o[3*n+0]*p,c=o[3*n+1],d=o[3*n+0]*m;l.push(i,c,d)}}for(let n=0;n<e;n++)for(let e=0;e<t.length-1;e++){const i=e+n*t.length,s=i,a=i+t.length,o=i+t.length+1,l=i+1;r.push(s,a,l),r.push(o,l,a)}this.setIndex(r),this.setAttribute("position",new Hn(s,3)),this.setAttribute("uv",new Hn(a,2)),this.setAttribute("normal",new Hn(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.points,t.segments,t.phiStart,t.phiLength)}}class Jo extends Zo{constructor(t=1,e=1,n=4,i=8){const r=new Yo;r.absarc(0,-e/2,t,1.5*Math.PI,0),r.absarc(0,e/2,t,0,.5*Math.PI),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Jo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ko extends Zn{constructor(t=1,e=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],s=[],a=[],o=[],l=new oe,c=new Dt;s.push(0,0,0),a.push(0,0,1),o.push(.5,.5);for(let r=0,h=3;r<=e;r++,h+=3){const u=n+r/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),s.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(s[h]/t+1)/2,c.y=(s[h+1]/t+1)/2,o.push(c.x,c.y)}for(let t=1;t<=e;t++)r.push(t,t+1,0);this.setIndex(r),this.setAttribute("position",new Hn(s,3)),this.setAttribute("normal",new Hn(a,3)),this.setAttribute("uv",new Hn(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $o extends Zn{constructor(t=1,e=1,n=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};const l=this;i=Math.floor(i),r=Math.floor(r);const c=[],h=[],u=[],d=[];let p=0;const m=[],f=n/2;let g=0;function v(n){const r=p,s=new Dt,m=new oe;let v=0;const _=!0===n?t:e,x=!0===n?1:-1;for(let t=1;t<=i;t++)h.push(0,f*x,0),u.push(0,x,0),d.push(.5,.5),p++;const y=p;for(let t=0;t<=i;t++){const e=t/i*o+a,n=Math.cos(e),r=Math.sin(e);m.x=_*r,m.y=f*x,m.z=_*n,h.push(m.x,m.y,m.z),u.push(0,x,0),s.x=.5*n+.5,s.y=.5*r*x+.5,d.push(s.x,s.y),p++}for(let t=0;t<i;t++){const e=r+t,i=y+t;!0===n?c.push(i,i+1,e):c.push(i+1,i,e),v+=3}l.addGroup(g,v,!0===n?1:2),g+=v}!function(){const s=new oe,v=new oe;let _=0;const x=(e-t)/n;for(let l=0;l<=r;l++){const c=[],g=l/r,_=g*(e-t)+t;for(let t=0;t<=i;t++){const e=t/i,r=e*o+a,l=Math.sin(r),m=Math.cos(r);v.x=_*l,v.y=-g*n+f,v.z=_*m,h.push(v.x,v.y,v.z),s.set(l,x,m).normalize(),u.push(s.x,s.y,s.z),d.push(e,1-g),c.push(p++)}m.push(c)}for(let t=0;t<i;t++)for(let e=0;e<r;e++){const n=m[e][t],i=m[e+1][t],r=m[e+1][t+1],s=m[e][t+1];c.push(n,i,s),c.push(i,r,s),_+=6}l.addGroup(g,_,0),g+=_}(),!1===s&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qo extends $o{constructor(t=1,e=1,n=32,i=1,r=!1,s=0,a=2*Math.PI){super(0,t,e,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(t){return new Qo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tl extends Zn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],s=[];function a(t,e,n,i){const r=i+1,s=[];for(let i=0;i<=r;i++){s[i]=[];const a=t.clone().lerp(n,i/r),o=e.clone().lerp(n,i/r),l=r-i;for(let t=0;t<=l;t++)s[i][t]=0===t&&i===r?a:a.clone().lerp(o,t/l)}for(let t=0;t<r;t++)for(let e=0;e<2*(r-t)-1;e++){const n=Math.floor(e/2);e%2==0?(o(s[t][n+1]),o(s[t+1][n]),o(s[t][n])):(o(s[t][n+1]),o(s[t+1][n+1]),o(s[t+1][n]))}}function o(t){r.push(t.x,t.y,t.z)}function l(e,n){const i=3*e;n.x=t[i+0],n.y=t[i+1],n.z=t[i+2]}function c(t,e,n,i){i<0&&1===t.x&&(s[e]=t.x-1),0===n.x&&0===n.z&&(s[e]=i/2/Math.PI+.5)}function h(t){return Math.atan2(t.z,-t.x)}!function(t){const n=new oe,i=new oe,r=new oe;for(let s=0;s<e.length;s+=3)l(e[s+0],n),l(e[s+1],i),l(e[s+2],r),a(n,i,r,t)}(i),function(t){const e=new oe;for(let n=0;n<r.length;n+=3)e.x=r[n+0],e.y=r[n+1],e.z=r[n+2],e.normalize().multiplyScalar(t),r[n+0]=e.x,r[n+1]=e.y,r[n+2]=e.z}(n),function(){const t=new oe;for(let n=0;n<r.length;n+=3){t.x=r[n+0],t.y=r[n+1],t.z=r[n+2];const i=h(t)/2/Math.PI+.5,a=(e=t,Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))/Math.PI+.5);s.push(i,1-a)}var e;(function(){const t=new oe,e=new oe,n=new oe,i=new oe,a=new Dt,o=new Dt,l=new Dt;for(let u=0,d=0;u<r.length;u+=9,d+=6){t.set(r[u+0],r[u+1],r[u+2]),e.set(r[u+3],r[u+4],r[u+5]),n.set(r[u+6],r[u+7],r[u+8]),a.set(s[d+0],s[d+1]),o.set(s[d+2],s[d+3]),l.set(s[d+4],s[d+5]),i.copy(t).add(e).add(n).divideScalar(3);const p=h(i);c(a,d+0,t,p),c(o,d+2,e,p),c(l,d+4,n,p)}})(),function(){for(let t=0;t<s.length;t+=6){const e=s[t+0],n=s[t+2],i=s[t+4],r=Math.max(e,n,i),a=Math.min(e,n,i);r>.9&&a<.1&&(e<.2&&(s[t+0]+=1),n<.2&&(s[t+2]+=1),i<.2&&(s[t+4]+=1))}}()}(),this.setAttribute("position",new Hn(r,3)),this.setAttribute("normal",new Hn(r.slice(),3)),this.setAttribute("uv",new Hn(s,2)),0===i?this.computeVertexNormals():this.normalizeNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.vertices,t.indices,t.radius,t.details)}}class el extends tl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new el(t.radius,t.detail)}}const nl=new oe,il=new oe,rl=new oe,sl=new Mn;class al extends Zn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},null!==t){const n=4,i=Math.pow(10,n),r=Math.cos(St*e),s=t.getIndex(),a=t.getAttribute("position"),o=s?s.count:a.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),u={},d=[];for(let t=0;t<o;t+=3){s?(l[0]=s.getX(t),l[1]=s.getX(t+1),l[2]=s.getX(t+2)):(l[0]=t,l[1]=t+1,l[2]=t+2);const{a:e,b:n,c:o}=sl;if(e.fromBufferAttribute(a,l[0]),n.fromBufferAttribute(a,l[1]),o.fromBufferAttribute(a,l[2]),sl.getNormal(rl),h[0]=`${Math.round(e.x*i)},${Math.round(e.y*i)},${Math.round(e.z*i)}`,h[1]=`${Math.round(n.x*i)},${Math.round(n.y*i)},${Math.round(n.z*i)}`,h[2]=`${Math.round(o.x*i)},${Math.round(o.y*i)},${Math.round(o.z*i)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let t=0;t<3;t++){const e=(t+1)%3,n=h[t],i=h[e],s=sl[c[t]],a=sl[c[e]],o=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(rl.dot(u[p].normal)<=r&&(d.push(s.x,s.y,s.z),d.push(a.x,a.y,a.z)),u[p]=null):o in u||(u[o]={index0:l[t],index1:l[e],normal:rl.clone()})}}for(const t in u)if(u[t]){const{index0:e,index1:n}=u[t];nl.fromBufferAttribute(a,e),il.fromBufferAttribute(a,n),d.push(nl.x,nl.y,nl.z),d.push(il.x,il.y,il.z)}this.setAttribute("position",new Hn(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ol extends Yo{constructor(t){super(t),this.uuid=Et(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const n=t.holes[e];this.holes.push((new Yo).fromJSON(n))}return this}}const ll=function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=cl(t,0,r,n,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(i&&(s=function(t,e,n,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:t.length,c=cl(t,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(yl(c));for(r.sort(gl),s=0;s<r.length;s++)n=vl(r[s],n);return n}(t,e,s,n)),t.length>80*n){o=c=t[0],l=h=t[1];for(let e=n;e<r;e+=n)u=t[e],d=t[e+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=0!==p?32767/p:0}return ul(s,a,n,o,l,p,0),a};function cl(t,e,n,i,r){let s,a;if(r===function(t,e,n,i){let r=0;for(let s=e,a=n-i;s<n;s+=i)r+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return r}(t,e,n,i)>0)for(s=e;s<n;s+=i)a=Ll(s,t[s],t[s+1],a);else for(s=n-i;s>=e;s-=i)a=Ll(s,t[s],t[s+1],a);return a&&El(a,a.next)&&(Pl(a),a=a.next),a}function hl(t,e){if(!t)return t;e||(e=t);let n,i=t;do{if(n=!1,i.steiner||!El(i,i.next)&&0!==bl(i.prev,i,i.next))i=i.next;else{if(Pl(i),i=e=i.prev,i===i.next)break;n=!0}}while(n||i!==e);return e}function ul(t,e,n,i,r,s,a){if(!t)return;!a&&s&&function(t,e,n,i){let r=t;do{0===r.z&&(r.z=xl(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,function(t){let e,n,i,r,s,a,o,l,c=1;do{for(n=t,t=null,s=null,a=0;n;){for(a++,i=n,o=0,e=0;e<c&&(o++,i=i.nextZ,i);e++);for(l=c;o>0||l>0&&i;)0!==o&&(0===l||!i||n.z<=i.z)?(r=n,n=n.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(a>1)}(r)}(t,i,r,s);let o,l,c=t;for(;t.prev!==t.next;)if(o=t.prev,l=t.next,s?pl(t,i,r,s):dl(t))e.push(o.i/n|0),e.push(t.i/n|0),e.push(l.i/n|0),Pl(t),t=l.next,c=l.next;else if((t=l)===c){a?1===a?ul(t=ml(hl(t),e,n),e,n,i,r,s,2):2===a&&fl(t,e,n,i,r,s):ul(hl(t),e,n,i,r,s,1);break}}function dl(t){const e=t.prev,n=t,i=t.next;if(bl(e,n,i)>=0)return!1;const r=e.x,s=n.x,a=i.x,o=e.y,l=n.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Ml(r,o,s,l,a,c,m.x,m.y)&&bl(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function pl(t,e,n,i){const r=t.prev,s=t,a=t.next;if(bl(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,f=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,v=xl(p,m,e,n,i),_=xl(f,g,e,n,i);let x=t.prevZ,y=t.nextZ;for(;x&&x.z>=v&&y&&y.z<=_;){if(x.x>=p&&x.x<=f&&x.y>=m&&x.y<=g&&x!==r&&x!==a&&Ml(o,h,l,u,c,d,x.x,x.y)&&bl(x.prev,x,x.next)>=0)return!1;if(x=x.prevZ,y.x>=p&&y.x<=f&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Ml(o,h,l,u,c,d,y.x,y.y)&&bl(y.prev,y,y.next)>=0)return!1;y=y.nextZ}for(;x&&x.z>=v;){if(x.x>=p&&x.x<=f&&x.y>=m&&x.y<=g&&x!==r&&x!==a&&Ml(o,h,l,u,c,d,x.x,x.y)&&bl(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=f&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Ml(o,h,l,u,c,d,y.x,y.y)&&bl(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ml(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!El(r,s)&&Tl(r,i,i.next,s)&&Rl(r,s)&&Rl(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Pl(i),Pl(i.next),i=t=s),i=i.next}while(i!==t);return hl(i)}function fl(t,e,n,i,r,s){let a=t;do{let t=a.next.next;for(;t!==a.prev;){if(a.i!==t.i&&Sl(a,t)){let o=Cl(a,t);return a=hl(a,a.next),o=hl(o,o.next),ul(a,e,n,i,r,s,0),void ul(o,e,n,i,r,s,0)}t=t.next}a=a.next}while(a!==t)}function gl(t,e){return t.x-e.x}function vl(t,e){const n=function(t,e){let n,i=e,r=-1/0;const s=t.x,a=t.y;do{if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){const t=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(t<=s&&t>r&&(r=t,n=i.x<i.next.x?i:i.next,t===s))return n}i=i.next}while(i!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let h,u=1/0;i=n;do{s>=i.x&&i.x>=l&&s!==i.x&&Ml(a<c?s:r,a,l,c,a<c?r:s,a,i.x,i.y)&&(h=Math.abs(a-i.y)/(s-i.x),Rl(i,t)&&(h<u||h===u&&(i.x>n.x||i.x===n.x&&_l(n,i)))&&(n=i,u=h)),i=i.next}while(i!==o);return n}(t,e);if(!n)return e;const i=Cl(n,t);return hl(i,i.next),hl(n,n.next)}function _l(t,e){return bl(t.prev,t,e.prev)<0&&bl(e.next,t,t.next)<0}function xl(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function yl(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function Ml(t,e,n,i,r,s,a,o){return(r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(s-o)>=(r-a)*(i-o)}function Sl(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Tl(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(Rl(t,e)&&Rl(e,t)&&function(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do{n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next}while(n!==t);return i}(t,e)&&(bl(t.prev,t,e.prev)||bl(t,e.prev,e))||El(t,e)&&bl(t.prev,t,t.next)>0&&bl(e.prev,e,e.next)>0)}function bl(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function El(t,e){return t.x===e.x&&t.y===e.y}function Tl(t,e,n,i){const r=Al(bl(t,e,n)),s=Al(bl(t,e,i)),a=Al(bl(n,i,t)),o=Al(bl(n,i,e));return r!==s&&a!==o||(!(0!==r||!wl(t,n,e))||(!(0!==s||!wl(t,i,e))||(!(0!==a||!wl(n,t,i))||!(0!==o||!wl(n,e,i)))))}function wl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Al(t){return t>0?1:t<0?-1:0}function Rl(t,e){return bl(t.prev,t,t.next)<0?bl(t,e,t.next)>=0&&bl(t,t.prev,e)>=0:bl(t,e,t.prev)<0||bl(t,t.next,e)<0}function Cl(t,e){const n=new Il(t.i,t.x,t.y),i=new Il(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Ll(t,e,n,i){const r=new Il(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Pl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Il(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}class Ul{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return.5*n}static isClockWise(t){return Ul.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Dl(t),Nl(n,t);let s=t.length;e.forEach(Dl);for(let t=0;t<e.length;t++)i.push(s),s+=e[t].length,Nl(n,e[t]);const a=ll(n,i);for(let t=0;t<a.length;t+=3)r.push(a.slice(t,t+3));return r}}function Dl(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Nl(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ol extends Zn{constructor(t=new ol([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let e=0,n=t.length;e<n;e++){s(t[e])}function s(t){const s=[],a=void 0!==e.curveSegments?e.curveSegments:12,o=void 0!==e.steps?e.steps:1,l=void 0!==e.depth?e.depth:1;let c=void 0===e.bevelEnabled||e.bevelEnabled,h=void 0!==e.bevelThickness?e.bevelThickness:.2,u=void 0!==e.bevelSize?e.bevelSize:h-.1,d=void 0!==e.bevelOffset?e.bevelOffset:0,p=void 0!==e.bevelSegments?e.bevelSegments:3;const m=e.extrudePath,f=void 0!==e.UVGenerator?e.UVGenerator:Fl;let g,v,_,x,y,M=!1;m&&(g=m.getSpacedPoints(o),M=!0,c=!1,v=m.computeFrenetFrames(o,!1),_=new oe,x=new oe,y=new oe),c||(p=0,h=0,u=0,d=0);const S=t.extractPoints(a);let b=S.shape;const E=S.holes;if(!Ul.isClockWise(b)){b=b.reverse();for(let t=0,e=E.length;t<e;t++){const e=E[t];Ul.isClockWise(e)&&(E[t]=e.reverse())}}const T=Ul.triangulateShape(b,E),w=b;for(let t=0,e=E.length;t<e;t++){const e=E[t];b=b.concat(e)}function A(t,e,n){return e||console.error("THREE.ExtrudeGeometry: vec does not exist"),t.clone().addScaledVector(e,n)}const R=b.length,C=T.length;function L(t,e,n){let i,r,s;const a=t.x-e.x,o=t.y-e.y,l=n.x-t.x,c=n.y-t.y,h=a*a+o*o,u=a*c-o*l;if(Math.abs(u)>Number.EPSILON){const u=Math.sqrt(h),d=Math.sqrt(l*l+c*c),p=e.x-o/u,m=e.y+a/u,f=((n.x-c/d-p)*c-(n.y+l/d-m)*l)/(a*c-o*l);i=p+a*f-t.x,r=m+o*f-t.y;const g=i*i+r*r;if(g<=2)return new Dt(i,r);s=Math.sqrt(g/2)}else{let t=!1;a>Number.EPSILON?l>Number.EPSILON&&(t=!0):a<-Number.EPSILON?l<-Number.EPSILON&&(t=!0):Math.sign(o)===Math.sign(c)&&(t=!0),t?(i=-o,r=a,s=Math.sqrt(h)):(i=a,r=o,s=Math.sqrt(h/2))}return new Dt(i/s,r/s)}const P=[];for(let t=0,e=w.length,n=e-1,i=t+1;t<e;t++,n++,i++)n===e&&(n=0),i===e&&(i=0),P[t]=L(w[t],w[n],w[i]);const I=[];let U,D=P.concat();for(let t=0,e=E.length;t<e;t++){const e=E[t];U=[];for(let t=0,n=e.length,i=n-1,r=t+1;t<n;t++,i++,r++)i===n&&(i=0),r===n&&(r=0),U[t]=L(e[t],e[i],e[r]);I.push(U),D=D.concat(U)}for(let t=0;t<p;t++){const e=t/p,n=h*Math.cos(e*Math.PI/2),i=u*Math.sin(e*Math.PI/2)+d;for(let t=0,e=w.length;t<e;t++){const e=A(w[t],P[t],i);F(e.x,e.y,-n)}for(let t=0,e=E.length;t<e;t++){const e=E[t];U=I[t];for(let t=0,r=e.length;t<r;t++){const r=A(e[t],U[t],i);F(r.x,r.y,-n)}}}const N=u+d;for(let t=0;t<R;t++){const e=c?A(b[t],D[t],N):b[t];M?(x.copy(v.normals[0]).multiplyScalar(e.x),_.copy(v.binormals[0]).multiplyScalar(e.y),y.copy(g[0]).add(x).add(_),F(y.x,y.y,y.z)):F(e.x,e.y,0)}for(let t=1;t<=o;t++)for(let e=0;e<R;e++){const n=c?A(b[e],D[e],N):b[e];M?(x.copy(v.normals[t]).multiplyScalar(n.x),_.copy(v.binormals[t]).multiplyScalar(n.y),y.copy(g[t]).add(x).add(_),F(y.x,y.y,y.z)):F(n.x,n.y,l/o*t)}for(let t=p-1;t>=0;t--){const e=t/p,n=h*Math.cos(e*Math.PI/2),i=u*Math.sin(e*Math.PI/2)+d;for(let t=0,e=w.length;t<e;t++){const e=A(w[t],P[t],i);F(e.x,e.y,l+n)}for(let t=0,e=E.length;t<e;t++){const e=E[t];U=I[t];for(let t=0,r=e.length;t<r;t++){const r=A(e[t],U[t],i);M?F(r.x,r.y+g[o-1].y,g[o-1].x+n):F(r.x,r.y,l+n)}}}function O(t,e){let n=t.length;for(;--n>=0;){const i=n;let r=n-1;r<0&&(r=t.length-1);for(let t=0,n=o+2*p;t<n;t++){const n=R*t,s=R*(t+1);z(e+i+n,e+r+n,e+r+s,e+i+s)}}}function F(t,e,n){s.push(t),s.push(e),s.push(n)}function B(t,e,r){G(t),G(e),G(r);const s=i.length/3,a=f.generateTopUV(n,i,s-3,s-2,s-1);H(a[0]),H(a[1]),H(a[2])}function z(t,e,r,s){G(t),G(e),G(s),G(e),G(r),G(s);const a=i.length/3,o=f.generateSideWallUV(n,i,a-6,a-3,a-2,a-1);H(o[0]),H(o[1]),H(o[3]),H(o[1]),H(o[2]),H(o[3])}function G(t){i.push(s[3*t+0]),i.push(s[3*t+1]),i.push(s[3*t+2])}function H(t){r.push(t.x),r.push(t.y)}!function(){const t=i.length/3;if(c){let t=0,e=R*t;for(let t=0;t<C;t++){const n=T[t];B(n[2]+e,n[1]+e,n[0]+e)}t=o+2*p,e=R*t;for(let t=0;t<C;t++){const n=T[t];B(n[0]+e,n[1]+e,n[2]+e)}}else{for(let t=0;t<C;t++){const e=T[t];B(e[2],e[1],e[0])}for(let t=0;t<C;t++){const e=T[t];B(e[0]+R*o,e[1]+R*o,e[2]+R*o)}}n.addGroup(t,i.length/3-t,0)}(),function(){const t=i.length/3;let e=0;O(w,e),e+=w.length;for(let t=0,n=E.length;t<n;t++){const n=E[t];O(n,e),e+=n.length}n.addGroup(t,i.length/3-t,1)}()}this.setAttribute("position",new Hn(i,3)),this.setAttribute("uv",new Hn(r,2)),this.computeVertexNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return function(t,e,n){if(n.shapes=[],Array.isArray(t))for(let e=0,i=t.length;e<i;e++){const i=t[e];n.shapes.push(i.uuid)}else n.shapes.push(t.uuid);n.options=Object.assign({},e),void 0!==e.extrudePath&&(n.options.extrudePath=e.extrudePath.toJSON());return n}(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const r=e[t.shapes[i]];n.push(r)}const i=t.options.extrudePath;return void 0!==i&&(t.options.extrudePath=(new jo[i.type]).fromJSON(i)),new Ol(n,t.options)}}const Fl={generateTopUV:function(t,e,n,i,r){const s=e[3*n],a=e[3*n+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new Dt(s,a),new Dt(o,l),new Dt(c,h)]},generateSideWallUV:function(t,e,n,i,r,s){const a=e[3*n],o=e[3*n+1],l=e[3*n+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],f=e[3*s],g=e[3*s+1],v=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new Dt(a,1-l),new Dt(c,1-u),new Dt(d,1-m),new Dt(f,1-v)]:[new Dt(o,1-l),new Dt(h,1-u),new Dt(p,1-m),new Dt(g,1-v)]}};class Bl extends tl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bl(t.radius,t.detail)}}class zl extends tl{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zl(t.radius,t.detail)}}class Gl extends Zn{constructor(t=.5,e=1,n=32,i=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n);const a=[],o=[],l=[],c=[];let h=t;const u=(e-t)/(i=Math.max(1,i)),d=new oe,p=new Dt;for(let t=0;t<=i;t++){for(let t=0;t<=n;t++){const i=r+t/n*s;d.x=h*Math.cos(i),d.y=h*Math.sin(i),o.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,c.push(p.x,p.y)}h+=u}for(let t=0;t<i;t++){const e=t*(n+1);for(let t=0;t<n;t++){const i=t+e,r=i,s=i+n+1,o=i+n+2,l=i+1;a.push(r,s,l),a.push(s,o,l)}}this.setIndex(a),this.setAttribute("position",new Hn(o,3)),this.setAttribute("normal",new Hn(l,3)),this.setAttribute("uv",new Hn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hl extends Zn{constructor(t=new ol([new Dt(0,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],s=[];let a=0,o=0;if(!1===Array.isArray(t))l(t);else for(let e=0;e<t.length;e++)l(t[e]),this.addGroup(a,o,e),a+=o,o=0;function l(t){const a=i.length/3,l=t.extractPoints(e);let c=l.shape;const h=l.holes;!1===Ul.isClockWise(c)&&(c=c.reverse());for(let t=0,e=h.length;t<e;t++){const e=h[t];!0===Ul.isClockWise(e)&&(h[t]=e.reverse())}const u=Ul.triangulateShape(c,h);for(let t=0,e=h.length;t<e;t++){const e=h[t];c=c.concat(e)}for(let t=0,e=c.length;t<e;t++){const e=c[t];i.push(e.x,e.y,0),r.push(0,0,1),s.push(e.x,e.y)}for(let t=0,e=u.length;t<e;t++){const e=u[t],i=e[0]+a,r=e[1]+a,s=e[2]+a;n.push(i,r,s),o+=3}}this.setIndex(n),this.setAttribute("position",new Hn(i,3)),this.setAttribute("normal",new Hn(r,3)),this.setAttribute("uv",new Hn(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return function(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const i=t[n];e.shapes.push(i.uuid)}else e.shapes.push(t.uuid);return e}(this.parameters.shapes,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const r=e[t.shapes[i]];n.push(r)}return new Hl(n,t.curveSegments)}}class kl extends Zn{constructor(t=1,e=32,n=16,i=0,r=2*Math.PI,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const o=Math.min(s+a,Math.PI);let l=0;const c=[],h=new oe,u=new oe,d=[],p=[],m=[],f=[];for(let d=0;d<=n;d++){const g=[],v=d/n;let _=0;0===d&&0===s?_=.5/e:d===n&&o===Math.PI&&(_=-.5/e);for(let n=0;n<=e;n++){const o=n/e;h.x=-t*Math.cos(i+o*r)*Math.sin(s+v*a),h.y=t*Math.cos(s+v*a),h.z=t*Math.sin(i+o*r)*Math.sin(s+v*a),p.push(h.x,h.y,h.z),u.copy(h).normalize(),m.push(u.x,u.y,u.z),f.push(o+_,1-v),g.push(l++)}c.push(g)}for(let t=0;t<n;t++)for(let i=0;i<e;i++){const e=c[t][i+1],r=c[t][i],a=c[t+1][i],l=c[t+1][i+1];(0!==t||s>0)&&d.push(e,r,l),(t!==n-1||o<Math.PI)&&d.push(r,a,l)}this.setIndex(d),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(m,3)),this.setAttribute("uv",new Hn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vl extends tl{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vl(t.radius,t.detail)}}class Wl extends Zn{constructor(t=1,e=.4,n=12,i=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const s=[],a=[],o=[],l=[],c=new oe,h=new oe,u=new oe;for(let s=0;s<=n;s++)for(let d=0;d<=i;d++){const p=d/i*r,m=s/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(p),h.y=(t+e*Math.cos(m))*Math.sin(p),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),c.x=t*Math.cos(p),c.y=t*Math.sin(p),u.subVectors(h,c).normalize(),o.push(u.x,u.y,u.z),l.push(d/i),l.push(s/n)}for(let t=1;t<=n;t++)for(let e=1;e<=i;e++){const n=(i+1)*t+e-1,r=(i+1)*(t-1)+e-1,a=(i+1)*(t-1)+e,o=(i+1)*t+e;s.push(n,r,o),s.push(r,a,o)}this.setIndex(s),this.setAttribute("position",new Hn(a,3)),this.setAttribute("normal",new Hn(o,3)),this.setAttribute("uv",new Hn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Xl extends Zn{constructor(t=1,e=.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new oe,u=new oe,d=new oe,p=new oe,m=new oe,f=new oe,g=new oe;for(let a=0;a<=n;++a){const _=a/n*r*Math.PI*2;v(_,r,s,t,d),v(_+.01,r,s,t,p),f.subVectors(p,d),g.addVectors(p,d),m.crossVectors(f,g),g.crossVectors(m,f),m.normalize(),g.normalize();for(let t=0;t<=i;++t){const r=t/i*Math.PI*2,s=-e*Math.cos(r),p=e*Math.sin(r);h.x=d.x+(s*g.x+p*m.x),h.y=d.y+(s*g.y+p*m.y),h.z=d.z+(s*g.z+p*m.z),o.push(h.x,h.y,h.z),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(a/n),c.push(t/i)}}for(let t=1;t<=n;t++)for(let e=1;e<=i;e++){const n=(i+1)*(t-1)+(e-1),r=(i+1)*t+(e-1),s=(i+1)*t+e,o=(i+1)*(t-1)+e;a.push(n,r,o),a.push(r,s,o)}function v(t,e,n,i,r){const s=Math.cos(t),a=Math.sin(t),o=n/e*t,l=Math.cos(o);r.x=i*(2+l)*.5*s,r.y=i*(2+l)*a*.5,r.z=i*Math.sin(o)*.5}this.setIndex(a),this.setAttribute("position",new Hn(o,3)),this.setAttribute("normal",new Hn(l,3)),this.setAttribute("uv",new Hn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xl(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class jl extends Zn{constructor(t=new Wo(new oe(-1,-1,0),new oe(-1,1,0),new oe(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const s=t.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new oe,o=new oe,l=new Dt;let c=new oe;const h=[],u=[],d=[],p=[];function m(r){c=t.getPointAt(r/e,c);const l=s.normals[r],d=s.binormals[r];for(let t=0;t<=i;t++){const e=t/i*Math.PI*2,r=Math.sin(e),s=-Math.cos(e);o.x=s*l.x+r*d.x,o.y=s*l.y+r*d.y,o.z=s*l.z+r*d.z,o.normalize(),u.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,h.push(a.x,a.y,a.z)}}!function(){for(let t=0;t<e;t++)m(t);m(!1===r?e:0),function(){for(let t=0;t<=e;t++)for(let n=0;n<=i;n++)l.x=t/e,l.y=n/i,d.push(l.x,l.y)}(),function(){for(let t=1;t<=e;t++)for(let e=1;e<=i;e++){const n=(i+1)*(t-1)+(e-1),r=(i+1)*t+(e-1),s=(i+1)*t+e,a=(i+1)*(t-1)+e;p.push(n,r,a),p.push(r,s,a)}}()}(),this.setIndex(p),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new jl((new jo[t.path.type]).fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ql extends Zn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},null!==t){const e=[],n=new Set,i=new oe,r=new oe;if(null!==t.index){const s=t.attributes.position,a=t.index;let o=t.groups;0===o.length&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let t=0,l=o.length;t<l;++t){const l=o[t],c=l.start;for(let t=c,o=c+l.count;t<o;t+=3)for(let o=0;o<3;o++){const l=a.getX(t+o),c=a.getX(t+(o+1)%3);i.fromBufferAttribute(s,l),r.fromBufferAttribute(s,c),!0===Yl(i,r,n)&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const s=t.attributes.position;for(let t=0,a=s.count/3;t<a;t++)for(let a=0;a<3;a++){const o=3*t+a,l=3*t+(a+1)%3;i.fromBufferAttribute(s,o),r.fromBufferAttribute(s,l),!0===Yl(i,r,n)&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Hn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Yl(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return!0!==n.has(i)&&!0!==n.has(r)&&(n.add(i),n.add(r),!0)}var Zl=Object.freeze({__proto__:null,BoxGeometry:fi,CapsuleGeometry:Jo,CircleGeometry:Ko,ConeGeometry:Qo,CylinderGeometry:$o,DodecahedronGeometry:el,EdgesGeometry:al,ExtrudeGeometry:Ol,IcosahedronGeometry:Bl,LatheGeometry:Zo,OctahedronGeometry:zl,PlaneGeometry:Oi,PolyhedronGeometry:tl,RingGeometry:Gl,ShapeGeometry:Hl,SphereGeometry:kl,TetrahedronGeometry:Vl,TorusGeometry:Wl,TorusKnotGeometry:Xl,TubeGeometry:jl,WireframeGeometry:ql});class Jl extends bn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Rn(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Kl extends yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $l extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ql extends $l{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rn(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rn(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rn(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class tc extends bn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rn(16777215),this.specular=new Rn(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ec extends bn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Rn(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class nc extends bn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class ic extends bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rc extends bn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Rn(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sc extends oo{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function ac(t,e,n){return lc(t)?new t.constructor(t.subarray(e,void 0!==n?n:t.length)):t.slice(e,n)}function oc(t,e,n){return!t||!n&&t.constructor===e?t:"number"==typeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)}function lc(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function cc(t){const e=t.length,n=new Array(e);for(let t=0;t!==e;++t)n[t]=t;return n.sort((function(e,n){return t[e]-t[n]})),n}function hc(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,a=0;a!==i;++s){const i=n[s]*e;for(let n=0;n!==e;++n)r[a++]=t[i+n]}return r}function uc(t,e,n,i){let r=1,s=t[0];for(;void 0!==s&&void 0===s[i];)s=t[r++];if(void 0===s)return;let a=s[i];if(void 0!==a)if(Array.isArray(a))do{a=s[i],void 0!==a&&(e.push(s.time),n.push.apply(n,a)),s=t[r++]}while(void 0!==s);else if(void 0!==a.toArray)do{a=s[i],void 0!==a&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++]}while(void 0!==s);else do{a=s[i],void 0!==a&&(e.push(s.time),n.push(a)),s=t[r++]}while(void 0!==s)}const dc={arraySlice:ac,convertArray:oc,isTypedArray:lc,getKeyframeOrder:cc,sortedArray:hc,flattenJSON:uc,subclip:function(t,e,n,i,r=30){const s=t.clone();s.name=e;const a=[];for(let t=0;t<s.tracks.length;++t){const e=s.tracks[t],o=e.getValueSize(),l=[],c=[];for(let t=0;t<e.times.length;++t){const s=e.times[t]*r;if(!(s<n||s>=i)){l.push(e.times[t]);for(let n=0;n<o;++n)c.push(e.values[t*o+n])}}0!==l.length&&(e.times=oc(l,e.times.constructor),e.values=oc(c,e.values.constructor),a.push(e))}s.tracks=a;let o=1/0;for(let t=0;t<s.tracks.length;++t)o>s.tracks[t].times[0]&&(o=s.tracks[t].times[0]);for(let t=0;t<s.tracks.length;++t)s.tracks[t].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30);const r=n.tracks.length,s=e/i;for(let e=0;e<r;++e){const i=n.tracks[e],r=i.ValueTypeName;if("bool"===r||"string"===r)continue;const a=t.tracks.find((function(t){return t.name===i.name&&t.ValueTypeName===r}));if(void 0===a)continue;let o=0;const l=i.getValueSize();i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(o=l/3);let c=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=h/3);const u=i.times.length-1;let d;if(s<=i.times[0]){const t=o,e=l-o;d=ac(i.values,t,e)}else if(s>=i.times[u]){const t=u*l+o,e=t+l-o;d=ac(i.values,t,e)}else{const t=i.createInterpolant(),e=o,n=l-o;t.evaluate(s),d=ac(t.resultBuffer,e,n)}if("quaternion"===r){(new ae).fromArray(d).normalize().conjugate().toArray(d)}const p=a.times.length;for(let t=0;t<p;++t){const e=t*h+c;if("quaternion"===r)ae.multiplyQuaternionsFlat(a.values,e,d,0,a.values,e);else{const t=h-2*c;for(let n=0;n<t;++n)a.values[e+n]-=d[n]}}}return t.blendMode=lt,t}};class pc{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=void 0!==i?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let s=n+2;;){if(void 0===i){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===s)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(t>=r)break t;{const a=e[1];t<a&&(n=2,r=a);for(let s=n-2;;){if(void 0===r)return this._cachedIndex=0,this.copySampleValue_(0);if(n===s)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0}}for(;n<s;){const i=n+s>>>1;t<e[i]?s=i:n=i+1}if(i=e[n],r=e[n-1],void 0===r)return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===i)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let t=0;t!==i;++t)e[t]=n[r+t];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mc extends pc{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rt,endingEnd:rt}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],o=i[s];if(void 0===a)switch(this.getSettings_().endingStart){case st:r=t,a=2*e-n;break;case at:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(void 0===o)switch(this.getSettings_().endingEnd){case st:s=t,o=2*n-e;break;case at:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}const l=.5*(n-e),c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),m=p*p,f=m*p,g=-u*f+2*u*m-u*p,v=(1+u)*f+(-1.5-2*u)*m+(-.5+u)*p+1,_=(-1-d)*f+(1.5+d)*m+.5*p,x=d*f-d*m;for(let t=0;t!==a;++t)r[t]=g*s[c+t]+v*s[l+t]+_*s[o+t]+x*s[h+t];return r}}class fc extends pc{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let t=0;t!==a;++t)r[t]=s[l+t]*h+s[o+t]*c;return r}}class gc extends pc{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class vc{constructor(t,e,n,i){if(void 0===t)throw new Error("THREE.KeyframeTrack: track name is undefined");if(void 0===e||0===e.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oc(e,this.TimeBufferType),this.values=oc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oc(t.times,Array),values:oc(t.values,Array)};const e=t.getInterpolation();e!==t.DefaultInterpolation&&(n.interpolation=e)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case et:e=this.InterpolantFactoryMethodDiscrete;break;case nt:e=this.InterpolantFactoryMethodLinear;break;case it:e=this.InterpolantFactoryMethodSmooth}if(void 0===e){const e="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(t===this.DefaultInterpolation)throw new Error(e);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",e),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return et;case this.InterpolantFactoryMethodLinear:return nt;case this.InterpolantFactoryMethodSmooth:return it}}getValueSize(){return this.values.length/this.times.length}shift(t){if(0!==t){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(1!==t){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;-1!==s&&n[s]>e;)--s;if(++s,0!==r||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const t=this.getValueSize();this.times=ac(n,r,s),this.values=ac(this.values,r*t,s*t)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;0===r&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let e=0;e!==r;e++){const i=n[e];if("number"==typeof i&&isNaN(i)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,e,i),t=!1;break}if(null!==s&&s>i){console.error("THREE.KeyframeTrack: Out of order keys.",this,e,i,s),t=!1;break}s=i}if(void 0!==i&&lc(i))for(let e=0,n=i.length;e!==n;++e){const n=i[e];if(isNaN(n)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,e,n),t=!1;break}}return t}optimize(){const t=ac(this.times),e=ac(this.values),n=this.getValueSize(),i=this.getInterpolation()===it,r=t.length-1;let s=1;for(let a=1;a<r;++a){let r=!1;const o=t[a];if(o!==t[a+1]&&(1!==a||o!==t[0]))if(i)r=!0;else{const t=a*n,i=t-n,s=t+n;for(let a=0;a!==n;++a){const n=e[t+a];if(n!==e[i+a]||n!==e[s+a]){r=!0;break}}}if(r){if(a!==s){t[s]=t[a];const i=a*n,r=s*n;for(let t=0;t!==n;++t)e[r+t]=e[i+t]}++s}}if(r>0){t[s]=t[r];for(let t=r*n,i=s*n,a=0;a!==n;++a)e[i+a]=e[t+a];++s}return s!==t.length?(this.times=ac(t,0,s),this.values=ac(e,0,s*n)):(this.times=t,this.values=e),this}clone(){const t=ac(this.times,0),e=ac(this.values,0),n=new(0,this.constructor)(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}vc.prototype.TimeBufferType=Float32Array,vc.prototype.ValueBufferType=Float32Array,vc.prototype.DefaultInterpolation=nt;class _c extends vc{}_c.prototype.ValueTypeName="bool",_c.prototype.ValueBufferType=Array,_c.prototype.DefaultInterpolation=et,_c.prototype.InterpolantFactoryMethodLinear=void 0,_c.prototype.InterpolantFactoryMethodSmooth=void 0;class xc extends vc{}xc.prototype.ValueTypeName="color";class yc extends vc{}yc.prototype.ValueTypeName="number";class Mc extends pc{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e);let l=t*a;for(let t=l+a;l!==t;l+=4)ae.slerpFlat(r,0,s,l-a,s,l,o);return r}}class Sc extends vc{InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}}Sc.prototype.ValueTypeName="quaternion",Sc.prototype.DefaultInterpolation=nt,Sc.prototype.InterpolantFactoryMethodSmooth=void 0;class bc extends vc{}bc.prototype.ValueTypeName="string",bc.prototype.ValueBufferType=Array,bc.prototype.DefaultInterpolation=et,bc.prototype.InterpolantFactoryMethodLinear=void 0,bc.prototype.InterpolantFactoryMethodSmooth=void 0;class Ec extends vc{}Ec.prototype.ValueTypeName="vector";class Tc{constructor(t,e=-1,n,i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Et(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let t=0,r=n.length;t!==r;++t)e.push(wc(n[t]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let t=0,i=n.length;t!==i;++t)e.push(vc.toJSON(n[t]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,s=[];for(let t=0;t<r;t++){let a=[],o=[];a.push((t+r-1)%r,t,(t+1)%r),o.push(0,1,0);const l=cc(a);a=hc(a,1,l),o=hc(o,1,l),i||0!==a[0]||(a.push(r),o.push(o[0])),s.push(new yc(".morphTargetInfluences["+e[t].name+"]",a,o).scale(1/n))}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const e=t;n=e.geometry&&e.geometry.animations||e.animations}for(let t=0;t<n.length;t++)if(n[t].name===e)return n[t];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let e=0,n=t.length;e<n;e++){const n=t[e],s=n.name.match(r);if(s&&s.length>1){const t=s[1];let e=i[t];e||(i[t]=e=[]),e.push(n)}}const s=[];for(const t in i)s.push(this.CreateFromMorphTargetSequence(t,i[t],e,n));return s}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(t,e,n,i,r){if(0!==n.length){const s=[],a=[];uc(n,s,a,i),0!==s.length&&r.push(new t(e,s,a))}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode;let o=t.length||-1;const l=t.hierarchy||[];for(let t=0;t<l.length;t++){const r=l[t].keys;if(r&&0!==r.length)if(r[0].morphTargets){const t={};let e;for(e=0;e<r.length;e++)if(r[e].morphTargets)for(let n=0;n<r[e].morphTargets.length;n++)t[r[e].morphTargets[n]]=-1;for(const n in t){const t=[],s=[];for(let i=0;i!==r[e].morphTargets.length;++i){const i=r[e];t.push(i.time),s.push(i.morphTarget===n?1:0)}i.push(new yc(".morphTargetInfluence["+n+"]",t,s))}o=t.length*s}else{const s=".bones["+e[t].name+"]";n(Ec,s+".position",r,"pos",i),n(Sc,s+".quaternion",r,"rot",i),n(Ec,s+".scale",r,"scl",i)}}if(0===i.length)return null;return new this(r,o,i,a)}resetDuration(){let t=0;for(let e=0,n=this.tracks.length;e!==n;++e){const n=this.tracks[e];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function wc(t){if(void 0===t.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yc;case"vector":case"vector2":case"vector3":case"vector4":return Ec;case"color":return xc;case"quaternion":return Sc;case"bool":case"boolean":return _c;case"string":return bc}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(t.type);if(void 0===t.times){const e=[],n=[];uc(t.keys,e,n,"value"),t.times=e,t.values=n}return void 0!==e.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const Ac={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Rc{constructor(t,e,n){const i=this;let r,s=!1,a=0,o=0;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(t){o++,!1===s&&void 0!==i.onStart&&i.onStart(t,a,o),s=!0},this.itemEnd=function(t){a++,void 0!==i.onProgress&&i.onProgress(t,a,o),a===o&&(s=!1,void 0!==i.onLoad&&i.onLoad())},this.itemError=function(t){void 0!==i.onError&&i.onError(t)},this.resolveURL=function(t){return r?r(t):t},this.setURLModifier=function(t){return r=t,this},this.addHandler=function(t,e){return l.push(t,e),this},this.removeHandler=function(t){const e=l.indexOf(t);return-1!==e&&l.splice(e,2),this},this.getHandler=function(t){for(let e=0,n=l.length;e<n;e+=2){const n=l[e],i=l[e+1];if(n.global&&(n.lastIndex=0),n.test(t))return i}return null}}}const Cc=new Rc;class Lc{constructor(t){this.manager=void 0!==t?t:Cc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise((function(i,r){n.load(t,i,e,r)}))}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Pc={};class Ic extends Error{constructor(t,e){super(t),this.response=e}}class Uc extends Lc{constructor(t){super(t)}load(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ac.get(t);if(void 0!==r)return this.manager.itemStart(t),setTimeout((()=>{e&&e(r),this.manager.itemEnd(t)}),0),r;if(void 0!==Pc[t])return void Pc[t].push({onLoad:e,onProgress:n,onError:i});Pc[t]=[],Pc[t].push({onLoad:e,onProgress:n,onError:i});const s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,o=this.responseType;fetch(s).then((e=>{if(200===e.status||0===e.status){if(0===e.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===e.body||void 0===e.body.getReader)return e;const n=Pc[t],i=e.body.getReader(),r=e.headers.get("Content-Length")||e.headers.get("X-File-Size"),s=r?parseInt(r):0,a=0!==s;let o=0;const l=new ReadableStream({start(t){!function e(){i.read().then((({done:i,value:r})=>{if(i)t.close();else{o+=r.byteLength;const i=new ProgressEvent("progress",{lengthComputable:a,loaded:o,total:s});for(let t=0,e=n.length;t<e;t++){const e=n[t];e.onProgress&&e.onProgress(i)}t.enqueue(r),e()}}))}()}});return new Response(l)}throw new Ic(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,e)})).then((t=>{switch(o){case"arraybuffer":return t.arrayBuffer();case"blob":return t.blob();case"document":return t.text().then((t=>(new DOMParser).parseFromString(t,a)));case"json":return t.json();default:if(void 0===a)return t.text();{const e=/charset="?([^;"\s]*)"?/i.exec(a),n=e&&e[1]?e[1].toLowerCase():void 0,i=new TextDecoder(n);return t.arrayBuffer().then((t=>i.decode(t)))}}})).then((e=>{Ac.add(t,e);const n=Pc[t];delete Pc[t];for(let t=0,i=n.length;t<i;t++){const i=n[t];i.onLoad&&i.onLoad(e)}})).catch((e=>{const n=Pc[t];if(void 0===n)throw this.manager.itemError(t),e;delete Pc[t];for(let t=0,i=n.length;t<i;t++){const i=n[t];i.onError&&i.onError(e)}this.manager.itemError(t)})).finally((()=>{this.manager.itemEnd(t)})),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Dc extends Lc{constructor(t){super(t)}load(t,e,n,i){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Ac.get(t);if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t)}),0),s;const a=Gt("img");function o(){c(),Ac.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(e){c(),i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),"data:"!==t.slice(0,5)&&void 0!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Nc extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rn(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}class Oc extends Nc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rn(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fc=new Fe,Bc=new oe,zc=new oe;class Gc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zc),e.updateMatrixWorld(),Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return(new this.constructor).copy(this)}toJSON(){const t={};return 0!==this.bias&&(t.bias=this.bias),0!==this.normalBias&&(t.normalBias=this.normalBias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hc extends Gc{constructor(){super(new Si(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=2*bt*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class kc extends Nc{constructor(t,e,n=0,i=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Hc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Vc=new Fe,Wc=new oe,Xc=new oe;class jc extends Gc{constructor(){super(new Si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new oe(1,0,0),new oe(-1,0,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,1,0),new oe(0,-1,0)],this._cubeUps=[new oe(0,1,0),new oe(0,1,0),new oe(0,1,0),new oe(0,1,0),new oe(0,0,1),new oe(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wc.setFromMatrixPosition(t.matrixWorld),n.position.copy(Wc),Xc.copy(n.position),Xc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xc),n.updateMatrixWorld(),i.makeTranslation(-Wc.x,-Wc.y,-Wc.z),Vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc)}}class qc extends Nc{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jc}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Yc extends Gc{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zc extends Nc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Yc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jc extends Nc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kc extends Nc{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class $c{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new oe)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,s=this.coefficients;return e.copy(s[0]).multiplyScalar(.282095),e.addScaledVector(s[1],.488603*i),e.addScaledVector(s[2],.488603*r),e.addScaledVector(s[3],.488603*n),e.addScaledVector(s[4],n*i*1.092548),e.addScaledVector(s[5],i*r*1.092548),e.addScaledVector(s[6],.315392*(3*r*r-1)),e.addScaledVector(s[7],n*r*1.092548),e.addScaledVector(s[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,s=this.coefficients;return e.copy(s[0]).multiplyScalar(.886227),e.addScaledVector(s[1],1.023328*i),e.addScaledVector(s[2],1.023328*r),e.addScaledVector(s[3],1.023328*n),e.addScaledVector(s[4],.858086*n*i),e.addScaledVector(s[5],.858086*i*r),e.addScaledVector(s[6],.743125*r*r-.247708),e.addScaledVector(s[7],.858086*n*r),e.addScaledVector(s[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return(new this.constructor).copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+3*i);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+3*i);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class Qc extends Nc{constructor(t=new $c,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class th extends Lc{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,s=new Uc(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}parse(t){const e=this.textures;function n(t){return void 0===e[t]&&console.warn("THREE.MaterialLoader: Undefined texture",t),e[t]}const i=th.createMaterialFromType(t.type);if(void 0!==t.uuid&&(i.uuid=t.uuid),void 0!==t.name&&(i.name=t.name),void 0!==t.color&&void 0!==i.color&&i.color.setHex(t.color),void 0!==t.roughness&&(i.roughness=t.roughness),void 0!==t.metalness&&(i.metalness=t.metalness),void 0!==t.sheen&&(i.sheen=t.sheen),void 0!==t.sheenColor&&(i.sheenColor=(new Rn).setHex(t.sheenColor)),void 0!==t.sheenRoughness&&(i.sheenRoughness=t.sheenRoughness),void 0!==t.emissive&&void 0!==i.emissive&&i.emissive.setHex(t.emissive),void 0!==t.specular&&void 0!==i.specular&&i.specular.setHex(t.specular),void 0!==t.specularIntensity&&(i.specularIntensity=t.specularIntensity),void 0!==t.specularColor&&void 0!==i.specularColor&&i.specularColor.setHex(t.specularColor),void 0!==t.shininess&&(i.shininess=t.shininess),void 0!==t.clearcoat&&(i.clearcoat=t.clearcoat),void 0!==t.clearcoatRoughness&&(i.clearcoatRoughness=t.clearcoatRoughness),void 0!==t.iridescence&&(i.iridescence=t.iridescence),void 0!==t.iridescenceIOR&&(i.iridescenceIOR=t.iridescenceIOR),void 0!==t.iridescenceThicknessRange&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),void 0!==t.transmission&&(i.transmission=t.transmission),void 0!==t.thickness&&(i.thickness=t.thickness),void 0!==t.attenuationDistance&&(i.attenuationDistance=t.attenuationDistance),void 0!==t.attenuationColor&&void 0!==i.attenuationColor&&i.attenuationColor.setHex(t.attenuationColor),void 0!==t.fog&&(i.fog=t.fog),void 0!==t.flatShading&&(i.flatShading=t.flatShading),void 0!==t.blending&&(i.blending=t.blending),void 0!==t.combine&&(i.combine=t.combine),void 0!==t.side&&(i.side=t.side),void 0!==t.shadowSide&&(i.shadowSide=t.shadowSide),void 0!==t.opacity&&(i.opacity=t.opacity),void 0!==t.transparent&&(i.transparent=t.transparent),void 0!==t.alphaTest&&(i.alphaTest=t.alphaTest),void 0!==t.depthTest&&(i.depthTest=t.depthTest),void 0!==t.depthWrite&&(i.depthWrite=t.depthWrite),void 0!==t.colorWrite&&(i.colorWrite=t.colorWrite),void 0!==t.stencilWrite&&(i.stencilWrite=t.stencilWrite),void 0!==t.stencilWriteMask&&(i.stencilWriteMask=t.stencilWriteMask),void 0!==t.stencilFunc&&(i.stencilFunc=t.stencilFunc),void 0!==t.stencilRef&&(i.stencilRef=t.stencilRef),void 0!==t.stencilFuncMask&&(i.stencilFuncMask=t.stencilFuncMask),void 0!==t.stencilFail&&(i.stencilFail=t.stencilFail),void 0!==t.stencilZFail&&(i.stencilZFail=t.stencilZFail),void 0!==t.stencilZPass&&(i.stencilZPass=t.stencilZPass),void 0!==t.wireframe&&(i.wireframe=t.wireframe),void 0!==t.wireframeLinewidth&&(i.wireframeLinewidth=t.wireframeLinewidth),void 0!==t.wireframeLinecap&&(i.wireframeLinecap=t.wireframeLinecap),void 0!==t.wireframeLinejoin&&(i.wireframeLinejoin=t.wireframeLinejoin),void 0!==t.rotation&&(i.rotation=t.rotation),1!==t.linewidth&&(i.linewidth=t.linewidth),void 0!==t.dashSize&&(i.dashSize=t.dashSize),void 0!==t.gapSize&&(i.gapSize=t.gapSize),void 0!==t.scale&&(i.scale=t.scale),void 0!==t.polygonOffset&&(i.polygonOffset=t.polygonOffset),void 0!==t.polygonOffsetFactor&&(i.polygonOffsetFactor=t.polygonOffsetFactor),void 0!==t.polygonOffsetUnits&&(i.polygonOffsetUnits=t.polygonOffsetUnits),void 0!==t.dithering&&(i.dithering=t.dithering),void 0!==t.alphaToCoverage&&(i.alphaToCoverage=t.alphaToCoverage),void 0!==t.premultipliedAlpha&&(i.premultipliedAlpha=t.premultipliedAlpha),void 0!==t.forceSinglePass&&(i.forceSinglePass=t.forceSinglePass),void 0!==t.visible&&(i.visible=t.visible),void 0!==t.toneMapped&&(i.toneMapped=t.toneMapped),void 0!==t.userData&&(i.userData=t.userData),void 0!==t.vertexColors&&("number"==typeof t.vertexColors?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),void 0!==t.uniforms)for(const e in t.uniforms){const r=t.uniforms[e];switch(i.uniforms[e]={},r.type){case"t":i.uniforms[e].value=n(r.value);break;case"c":i.uniforms[e].value=(new Rn).setHex(r.value);break;case"v2":i.uniforms[e].value=(new Dt).fromArray(r.value);break;case"v3":i.uniforms[e].value=(new oe).fromArray(r.value);break;case"v4":i.uniforms[e].value=(new ne).fromArray(r.value);break;case"m3":i.uniforms[e].value=(new Nt).fromArray(r.value);break;case"m4":i.uniforms[e].value=(new Fe).fromArray(r.value);break;default:i.uniforms[e].value=r.value}}if(void 0!==t.defines&&(i.defines=t.defines),void 0!==t.vertexShader&&(i.vertexShader=t.vertexShader),void 0!==t.fragmentShader&&(i.fragmentShader=t.fragmentShader),void 0!==t.glslVersion&&(i.glslVersion=t.glslVersion),void 0!==t.extensions)for(const e in t.extensions)i.extensions[e]=t.extensions[e];if(void 0!==t.lights&&(i.lights=t.lights),void 0!==t.clipping&&(i.clipping=t.clipping),void 0!==t.size&&(i.size=t.size),void 0!==t.sizeAttenuation&&(i.sizeAttenuation=t.sizeAttenuation),void 0!==t.map&&(i.map=n(t.map)),void 0!==t.matcap&&(i.matcap=n(t.matcap)),void 0!==t.alphaMap&&(i.alphaMap=n(t.alphaMap)),void 0!==t.bumpMap&&(i.bumpMap=n(t.bumpMap)),void 0!==t.bumpScale&&(i.bumpScale=t.bumpScale),void 0!==t.normalMap&&(i.normalMap=n(t.normalMap)),void 0!==t.normalMapType&&(i.normalMapType=t.normalMapType),void 0!==t.normalScale){let e=t.normalScale;!1===Array.isArray(e)&&(e=[e,e]),i.normalScale=(new Dt).fromArray(e)}return void 0!==t.displacementMap&&(i.displacementMap=n(t.displacementMap)),void 0!==t.displacementScale&&(i.displacementScale=t.displacementScale),void 0!==t.displacementBias&&(i.displacementBias=t.displacementBias),void 0!==t.roughnessMap&&(i.roughnessMap=n(t.roughnessMap)),void 0!==t.metalnessMap&&(i.metalnessMap=n(t.metalnessMap)),void 0!==t.emissiveMap&&(i.emissiveMap=n(t.emissiveMap)),void 0!==t.emissiveIntensity&&(i.emissiveIntensity=t.emissiveIntensity),void 0!==t.specularMap&&(i.specularMap=n(t.specularMap)),void 0!==t.specularIntensityMap&&(i.specularIntensityMap=n(t.specularIntensityMap)),void 0!==t.specularColorMap&&(i.specularColorMap=n(t.specularColorMap)),void 0!==t.envMap&&(i.envMap=n(t.envMap)),void 0!==t.envMapIntensity&&(i.envMapIntensity=t.envMapIntensity),void 0!==t.reflectivity&&(i.reflectivity=t.reflectivity),void 0!==t.refractionRatio&&(i.refractionRatio=t.refractionRatio),void 0!==t.lightMap&&(i.lightMap=n(t.lightMap)),void 0!==t.lightMapIntensity&&(i.lightMapIntensity=t.lightMapIntensity),void 0!==t.aoMap&&(i.aoMap=n(t.aoMap)),void 0!==t.aoMapIntensity&&(i.aoMapIntensity=t.aoMapIntensity),void 0!==t.gradientMap&&(i.gradientMap=n(t.gradientMap)),void 0!==t.clearcoatMap&&(i.clearcoatMap=n(t.clearcoatMap)),void 0!==t.clearcoatRoughnessMap&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),void 0!==t.clearcoatNormalMap&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),void 0!==t.clearcoatNormalScale&&(i.clearcoatNormalScale=(new Dt).fromArray(t.clearcoatNormalScale)),void 0!==t.iridescenceMap&&(i.iridescenceMap=n(t.iridescenceMap)),void 0!==t.iridescenceThicknessMap&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),void 0!==t.transmissionMap&&(i.transmissionMap=n(t.transmissionMap)),void 0!==t.thicknessMap&&(i.thicknessMap=n(t.thicknessMap)),void 0!==t.sheenColorMap&&(i.sheenColorMap=n(t.sheenColorMap)),void 0!==t.sheenRoughnessMap&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){return new{ShadowMaterial:Jl,SpriteMaterial:Ma,RawShaderMaterial:Kl,ShaderMaterial:yi,PointsMaterial:xo,MeshPhysicalMaterial:Ql,MeshStandardMaterial:$l,MeshPhongMaterial:tc,MeshToonMaterial:ec,MeshNormalMaterial:nc,MeshLambertMaterial:ic,MeshDepthMaterial:$s,MeshDistanceMaterial:Qs,MeshBasicMaterial:Ln,MeshMatcapMaterial:rc,LineDashedMaterial:sc,LineBasicMaterial:oo,Material:bn}[t]}}class eh{static decodeText(t){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(t){return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return-1===e?"./":t.slice(0,e+1)}static resolveURL(t,e){return"string"!=typeof t||""===t?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class nh extends Zn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class ih extends Lc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=new Uc(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}parse(t){const e={},n={};function i(t,i){if(void 0!==e[i])return e[i];const r=t.interleavedBuffers[i],s=function(t,e){if(void 0!==n[e])return n[e];const i=t.arrayBuffers,r=i[e],s=new Uint32Array(r).buffer;return n[e]=s,s}(t,r.buffer),a=zt(r.type,s),o=new _a(a,r.stride);return o.uuid=r.uuid,e[i]=o,o}const r=t.isInstancedBufferGeometry?new nh:new Zn,s=t.data.index;if(void 0!==s){const t=zt(s.type,s.array);r.setIndex(new Bn(t,1))}const a=t.data.attributes;for(const e in a){const n=a[e];let s;if(n.isInterleavedBufferAttribute){const e=i(t.data,n.data);s=new ya(e,n.itemSize,n.offset,n.normalized)}else{const t=zt(n.type,n.array);s=new(n.isInstancedBufferAttribute?$a:Bn)(t,n.itemSize,n.normalized)}void 0!==n.name&&(s.name=n.name),void 0!==n.usage&&s.setUsage(n.usage),void 0!==n.updateRange&&(s.updateRange.offset=n.updateRange.offset,s.updateRange.count=n.updateRange.count),r.setAttribute(e,s)}const o=t.data.morphAttributes;if(o)for(const e in o){const n=o[e],s=[];for(let e=0,r=n.length;e<r;e++){const r=n[e];let a;if(r.isInterleavedBufferAttribute){const e=i(t.data,r.data);a=new ya(e,r.itemSize,r.offset,r.normalized)}else{const t=zt(r.type,r.array);a=new Bn(t,r.itemSize,r.normalized)}void 0!==r.name&&(a.name=r.name),s.push(a)}r.morphAttributes[e]=s}t.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const l=t.data.groups||t.data.drawcalls||t.data.offsets;if(void 0!==l)for(let t=0,e=l.length;t!==e;++t){const e=l[t];r.addGroup(e.start,e.count,e.materialIndex)}const c=t.data.boundingSphere;if(void 0!==c){const t=new oe;void 0!==c.center&&t.fromArray(c.center),r.boundingSphere=new Re(t,c.radius)}return t.name&&(r.name=t.name),t.userData&&(r.userData=t.userData),r}}const rh={UVMapping:i,CubeReflectionMapping:r,CubeRefractionMapping:s,EquirectangularReflectionMapping:a,EquirectangularRefractionMapping:o,CubeUVReflectionMapping:l},sh={RepeatWrapping:c,ClampToEdgeWrapping:h,MirroredRepeatWrapping:u},ah={NearestFilter:d,NearestMipmapNearestFilter:p,NearestMipmapLinearFilter:m,LinearFilter:f,LinearMipmapNearestFilter:g,LinearMipmapLinearFilter:v};let oh;class lh{static getContext(){return void 0===oh&&(oh=new(window.AudioContext||window.webkitAudioContext)),oh}static setContext(t){oh=t}}const ch=new Fe,hh=new Fe,uh=new Fe;class dh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ph(){return("undefined"==typeof performance?Date:performance).now()}const mh=new oe,fh=new ae,gh=new oe,vh=new oe;class _h extends cn{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(!0===this.isPlaying)return void console.warn("THREE.Audio: Audio is already playing.");if(!1===this.hasPlaybackControl)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(!1!==this.hasPlaybackControl)return this._progress=0,null!==this.source&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),!0===this._connected?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(!1!==this.hasPlaybackControl)return this.playbackRate=t,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(!1!==this.hasPlaybackControl)return this.loop=t,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const xh=new oe,yh=new ae,Mh=new oe,Sh=new oe;class bh{constructor(t,e,n){let i,r,s;switch(this.binding=t,this.valueSize=n,e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(0===s){for(let t=0;t!==i;++t)n[r+t]=n[t];s=e}else{s+=e;const t=e/s;this._mixBufferRegion(n,r,0,t,i)}this.cumulativeWeight=s}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;0===this.cumulativeWeightAdditive&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const t=e*this._origIndex;this._mixBufferRegion(n,i,t,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let t=e,r=e+e;t!==r;++t)if(n[t]!==n[t+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let t=n,r=i;t!==r;++t)e[t]=e[i+t%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=3*this.valueSize;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let i=0;i!==r;++i)t[e+i]=t[n+i]}_slerp(t,e,n,i){ae.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const s=this._workIndex*r;ae.multiplyQuaternionsFlat(t,s,t,e,t,n),ae.slerpFlat(t,e,t,e,t,s,i)}_lerp(t,e,n,i,r){const s=1-i;for(let a=0;a!==r;++a){const r=e+a;t[r]=t[r]*s+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let s=0;s!==r;++s){const r=e+s;t[r]=t[r]+t[n+s]*i}}}const Eh="\\[\\]\\.:\\/",Th=new RegExp("["+Eh+"]","g"),wh="[^"+Eh+"]",Ah="[^"+Eh.replace("\\.","")+"]",Rh=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",wh)+/(WCOD+)?/.source.replace("WCOD",Ah)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh)+"$"),Ch=["material","materials","bones","map"];class Lh{constructor(t,e,n){this.path=e,this.parsedPath=n||Lh.parseTrackName(e),this.node=Lh.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Lh.Composite(t,e,n):new Lh(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Th,"")}static parseTrackName(t){const e=Rh.exec(t);if(null===e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(void 0!==i&&-1!==i){const t=n.nodeName.substring(i+1);-1!==Ch.indexOf(t)&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=t)}if(null===n.propertyName||0===n.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(void 0===e||""===e||"."===e||-1===e||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(void 0!==n)return n}if(t.children){const n=function(t){for(let i=0;i<t.length;i++){const r=t[i];if(r.name===e||r.uuid===e)return r;const s=n(r.children);if(s)return s}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Lh.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(n){let i=e.objectIndex;switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let e=0;e<t.length;e++)if(t[e].name===i){i=e;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(void 0===t[n])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n]}if(void 0!==i){if(void 0===t[i])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[i]}}const s=t[i];if(void 0===s){const n=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+n+"."+i+" but it wasn't found.",t)}let a=this.Versioning.None;this.targetObject=t,void 0!==t.needsUpdate?a=this.Versioning.NeedsUpdate:void 0!==t.matrixWorldNeedsUpdate&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(void 0!==r){if("morphTargetInfluences"===i){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);void 0!==t.morphTargetDictionary[r]&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else void 0!==s.fromArray&&void 0!==s.toArray?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lh.Composite=class{constructor(t,e,n){const i=n||Lh.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];void 0!==i&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Lh.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Lh.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Lh.prototype.GetterByBindingType=[Lh.prototype._getValue_direct,Lh.prototype._getValue_array,Lh.prototype._getValue_arrayElement,Lh.prototype._getValue_toArray],Lh.prototype.SetterByBindingTypeAndVersioning=[[Lh.prototype._setValue_direct,Lh.prototype._setValue_direct_setNeedsUpdate,Lh.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lh.prototype._setValue_array,Lh.prototype._setValue_array_setNeedsUpdate,Lh.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lh.prototype._setValue_arrayElement,Lh.prototype._setValue_arrayElement_setNeedsUpdate,Lh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lh.prototype._setValue_fromArray,Lh.prototype._setValue_fromArray_setNeedsUpdate,Lh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ph{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,s=r.length,a=new Array(s),o={endingStart:rt,endingEnd:rt};for(let t=0;t!==s;++t){const e=r[t].createInterpolant(null);a[t]=e,e.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const n=this._clip.duration,i=t._clip.duration,r=i/n,s=n/i;t.warp(1,r,e),this.warp(s,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return null!==t&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,s=this.timeScale;let a=this._timeScaleInterpolant;null===a&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,o[1]=r+n,l[0]=t/s,l[1]=e/s,this}stopWarping(){const t=this._timeScaleInterpolant;return null!==t&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled)return void this._updateWeight(t);const r=this._startTime;if(null!==r){const i=(t-r)*n;i<0||0===n?e=0:(this._startTime=null,e=n*i)}e*=this._updateTimeScale(t);const s=this._updateTime(e),a=this._updateWeight(t);if(a>0){const t=this._interpolants,e=this._propertyBindings;if(this.blendMode===lt)for(let n=0,i=t.length;n!==i;++n)t[n].evaluate(s),e[n].accumulateAdditive(a);else for(let n=0,r=t.length;n!==r;++n)t[n].evaluate(s),e[n].accumulate(i,a)}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(null!==n){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),0===i&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(null!==n){e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),0===e?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const s=2202===n;if(0===t)return-1===r?i:s&&1==(1&r)?e-i:i;if(2200===n){-1===r&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else{if(!(i<0)){this.time=i;break t}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(-1===r&&(t>=0?(r=0,this._setEndings(!0,0===this.repetitions,s)):this._setEndings(0===this.repetitions,!0,s)),i>=e||i<0){const n=Math.floor(i/e);i-=e*n,r+=Math.abs(n);const a=this.repetitions-r;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(1===a){const e=t<0;this._setEndings(e,!e,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:n})}}else this.time=i;if(s&&1==(1&r))return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=st,i.endingEnd=st):(i.endingStart=t?this.zeroSlopeAtStart?st:rt:at,i.endingEnd=e?this.zeroSlopeAtEnd?st:rt:at)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;null===s&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,o=s.sampleValues;return a[0]=r,o[0]=e,a[1]=r+t,o[1]=n,this}}const Ih=new Float32Array(1);class Uh{constructor(t){this.value=t}clone(){return new Uh(void 0===this.value.clone?this.value:this.value.clone())}}let Dh=0;function Nh(t,e){return t.distance-e.distance}function Oh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),!0===i){const i=t.children;for(let t=0,r=i.length;t<r;t++)Oh(i[t],e,n,!0)}}const Fh=new Dt;const Bh=new oe,zh=new oe;const Gh=new oe;const Hh=new oe,kh=new Fe,Vh=new Fe;function Wh(t){const e=[];!0===t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,Wh(t.children[n]));return e}const Xh=new oe,jh=new Rn,qh=new Rn;const Yh=new oe,Zh=new oe,Jh=new oe;const Kh=new oe,$h=new Mi;function Qh(t,e,n,i,r,s,a){Kh.set(r,s,a).unproject(i);const o=e[t];if(void 0!==o){const t=n.getAttribute("position");for(let e=0,n=o.length;e<n;e++)t.setXYZ(o[e],Kh.x,Kh.y,Kh.z)}}const tu=new he;const eu=new oe;let nu,iu;"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:e}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=e),t.ACESFilmicToneMapping=4,t.AddEquation=n,t.AddOperation=2,t.AdditiveAnimationBlendMode=lt,t.AdditiveBlending=2,t.AlphaFormat=1021,t.AlwaysDepth=1,t.AlwaysStencilFunc=519,t.AmbientLight=Jc,t.AmbientLightProbe=class extends Qc{constructor(t,e=1){super(void 0,e),this.isAmbientLightProbe=!0;const n=(new Rn).set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}},t.AnimationAction=Ph,t.AnimationClip=Tc,t.AnimationLoader=class extends Lc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=new Uc(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=Tc.parse(t[n]);e.push(i)}return e}},t.AnimationMixer=class extends xt{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,a=t._interpolants,o=n.uuid,l=this._bindingsByRootAndName;let c=l[o];void 0===c&&(c={},l[o]=c);for(let t=0;t!==r;++t){const r=i[t],l=r.name;let h=c[l];if(void 0!==h)++h.referenceCount,s[t]=h;else{if(h=s[t],void 0!==h){null===h._cacheIndex&&(++h.referenceCount,this._addInactiveBinding(h,o,l));continue}const i=e&&e._propertyBindings[t].binding.parsedPath;h=new bh(Lh.create(n,l,i),r.ValueTypeName,r.getValueSize()),++h.referenceCount,this._addInactiveBinding(h,o,l),s[t]=h}a[t].resultBuffer=h.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(null===t._cacheIndex){const e=(t._localRoot||this._root).uuid,n=t._clip.uuid,i=this._actionsByClip[n];this._bindAction(t,i&&i.knownActions[0]),this._addInactiveAction(t,n,e)}const e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const n=e[t];0==n.useCount++&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const n=e[t];0==--n.useCount&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return null!==e&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(void 0===s)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{const e=s.knownActions;t._byClipCacheIndex=e.length,e.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],c=t._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),t._byClipCacheIndex=null;delete a.actionByRoot[(t._localRoot||this._root).uuid],0===o.length&&delete s[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const n=e[t];0==--n.referenceCount&&this._removeInactiveBinding(n)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];void 0===s&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],o=e[e.length-1],l=t._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[r],0===Object.keys(a).length&&delete s[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return void 0===n&&(n=new fc(new Float32Array(2),new Float32Array(2),1,Ih),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let s="string"==typeof t?Tc.findByName(i,t):t;const a=null!==s?s.uuid:t,o=this._actionsByClip[a];let l=null;if(void 0===n&&(n=null!==s?s.blendMode:ot),void 0!==o){const t=o.actionByRoot[r];if(void 0!==t&&t.blendMode===n)return t;l=o.knownActions[0],null===s&&(s=l._clip)}if(null===s)return null;const c=new Ph(this,s,e,n);return this._bindAction(c,l),this._addInactiveAction(c,a,r),c}existingAction(t,e){const n=e||this._root,i=n.uuid,r="string"==typeof t?Tc.findByName(n,t):t,s=r?r.uuid:t,a=this._actionsByClip[s];return void 0!==a&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let a=0;a!==n;++a){e[a]._update(i,t,r,s)}const a=this._bindings,o=this._nActiveBindings;for(let t=0;t!==o;++t)a[t].apply(s);return this}setTime(t){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(void 0!==r){const t=r.knownActions;for(let n=0,i=t.length;n!==i;++n){const i=t[n];this._deactivateAction(i);const r=i._cacheIndex,s=e[e.length-1];i._cacheIndex=null,i._byClipCacheIndex=null,s._cacheIndex=r,e[r]=s,e.pop(),this._removeInactiveBindingsForAction(i)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const t in n){const i=n[t].actionByRoot[e];void 0!==i&&(this._deactivateAction(i),this._removeInactiveAction(i))}const i=this._bindingsByRootAndName[e];if(void 0!==i)for(const t in i){const e=i[t];e.restoreOriginalState(),this._removeInactiveBinding(e)}}uncacheAction(t,e){const n=this.existingAction(t,e);null!==n&&(this._deactivateAction(n),this._removeInactiveAction(n))}},t.AnimationObjectGroup=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Et(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let e=0,n=arguments.length;e!==n;++e)t[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let a,o=t.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){const h=arguments[c],u=h.uuid;let d=e[u];if(void 0===d){d=o++,e[u]=d,t.push(h);for(let t=0,e=s;t!==e;++t)r[t].push(new Lh(h,n[t],i[t]))}else if(d<l){a=t[d];const o=--l,c=t[o];e[c.uuid]=d,t[d]=c,e[u]=o,t[o]=h;for(let t=0,e=s;t!==e;++t){const e=r[t],s=e[o];let a=e[d];e[d]=s,void 0===a&&(a=new Lh(h,n[t],i[t])),e[o]=a}}else t[d]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){const a=arguments[s],o=a.uuid,l=e[o];if(void 0!==l&&l>=r){const s=r++,c=t[s];e[c.uuid]=l,t[l]=c,e[o]=s,t[s]=a;for(let t=0,e=i;t!==e;++t){const e=n[t],i=e[s],r=e[l];e[l]=i,e[s]=r}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=t.length;for(let a=0,o=arguments.length;a!==o;++a){const o=arguments[a].uuid,l=e[o];if(void 0!==l)if(delete e[o],l<r){const a=--r,o=t[a],c=--s,h=t[c];e[o.uuid]=l,t[l]=o,e[h.uuid]=a,t[a]=h,t.pop();for(let t=0,e=i;t!==e;++t){const e=n[t],i=e[a],r=e[c];e[l]=i,e[a]=r,e.pop()}}else{const r=--s,a=t[r];r>0&&(e[a.uuid]=l),t[l]=a,t.pop();for(let t=0,e=i;t!==e;++t){const e=n[t];e[l]=e[r],e.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(void 0!==i)return r[i];const s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=new Array(l);i=r.length,n[t]=i,s.push(t),a.push(e),r.push(h);for(let n=c,i=o.length;n!==i;++n){const i=o[n];h[n]=new Lh(i,t,e)}return h}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(void 0!==n){const i=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a];e[t[a]]=n,s[n]=o,s.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},t.AnimationUtils=dc,t.ArcCurve=Co,t.ArrayCamera=ra,t.ArrowHelper=class extends cn{constructor(t=new oe(0,0,1),e=new oe(0,0,0),n=1,i=16776960,r=.2*n,s=.2*r){super(),this.type="ArrowHelper",void 0===nu&&(nu=new Zn,nu.setAttribute("position",new Hn([0,0,0,0,1,0],3)),iu=new $o(0,.5,1,5,1),iu.translate(0,-.5,0)),this.position.copy(e),this.line=new mo(nu,new oo({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new pi(iu,new Ln({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,s)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{eu.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(eu,e)}}setLength(t,e=.2*t,n=.2*e){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},t.Audio=_h,t.AudioAnalyser=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},t.AudioContext=lh,t.AudioListener=class extends cn{constructor(){super(),this.type="AudioListener",this.context=lh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new dh}getInput(){return this.gain}removeFilter(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(mh,fh,gh),vh.set(0,0,-1).applyQuaternion(fh),e.positionX){const t=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(mh.x,t),e.positionY.linearRampToValueAtTime(mh.y,t),e.positionZ.linearRampToValueAtTime(mh.z,t),e.forwardX.linearRampToValueAtTime(vh.x,t),e.forwardY.linearRampToValueAtTime(vh.y,t),e.forwardZ.linearRampToValueAtTime(vh.z,t),e.upX.linearRampToValueAtTime(n.x,t),e.upY.linearRampToValueAtTime(n.y,t),e.upZ.linearRampToValueAtTime(n.z,t)}else e.setPosition(mh.x,mh.y,mh.z),e.setOrientation(vh.x,vh.y,vh.z,n.x,n.y,n.z)}},t.AudioLoader=class extends Lc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=new Uc(this.manager);function a(e){i?i(e):console.error(e),r.manager.itemError(t)}s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(t){try{const n=t.slice(0);lh.getContext().decodeAudioData(n,(function(t){e(t)}),a)}catch(t){a(t)}}),n,i)}},t.AxesHelper=class extends vo{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=new Zn;n.setAttribute("position",new Hn(e,3)),n.setAttribute("color",new Hn([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));super(n,new oo({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(t,e,n){const i=new Rn,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},t.BackSide=1,t.BasicDepthPacking=3200,t.BasicShadowMap=0,t.Bone=qa,t.BooleanKeyframeTrack=_c,t.Box2=class{constructor(t=new Dt(1/0,1/0),e=new Dt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},t.Box3=he,t.Box3Helper=class extends vo{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Zn;i.setIndex(new Bn(n,1)),i.setAttribute("position",new Hn([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(i,new oo({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}},t.BoxBufferGeometry=class extends fi{constructor(t,e,n,i,r,s){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(t,e,n,i,r,s)}},t.BoxGeometry=fi,t.BoxHelper=class extends vo{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Zn;r.setIndex(new Bn(n,1)),r.setAttribute("position",new Bn(i,3)),super(r,new oo({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(void 0!==t&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),void 0!==this.object&&tu.setFromObject(this.object),tu.isEmpty())return;const e=tu.min,n=tu.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},t.BufferAttribute=Bn,t.BufferGeometry=Zn,t.BufferGeometryLoader=ih,t.ByteType=1010,t.Cache=Ac,t.Camera=Mi,t.CameraHelper=class extends vo{constructor(t){const e=new Zn,n=new oo({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],s={};function a(t,e){o(t),o(e)}function o(t){i.push(0,0,0),r.push(0,0,0),void 0===s[t]&&(s[t]=[]),s[t].push(i.length/3-1)}a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4"),e.setAttribute("position",new Hn(i,3)),e.setAttribute("color",new Hn(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const l=new Rn(16755200),c=new Rn(16711680),h=new Rn(43775),u=new Rn(16777215),d=new Rn(3355443);this.setColors(l,c,h,u,d)}setColors(t,e,n,i,r){const s=this.geometry.getAttribute("color");s.setXYZ(0,t.r,t.g,t.b),s.setXYZ(1,t.r,t.g,t.b),s.setXYZ(2,t.r,t.g,t.b),s.setXYZ(3,t.r,t.g,t.b),s.setXYZ(4,t.r,t.g,t.b),s.setXYZ(5,t.r,t.g,t.b),s.setXYZ(6,t.r,t.g,t.b),s.setXYZ(7,t.r,t.g,t.b),s.setXYZ(8,t.r,t.g,t.b),s.setXYZ(9,t.r,t.g,t.b),s.setXYZ(10,t.r,t.g,t.b),s.setXYZ(11,t.r,t.g,t.b),s.setXYZ(12,t.r,t.g,t.b),s.setXYZ(13,t.r,t.g,t.b),s.setXYZ(14,t.r,t.g,t.b),s.setXYZ(15,t.r,t.g,t.b),s.setXYZ(16,t.r,t.g,t.b),s.setXYZ(17,t.r,t.g,t.b),s.setXYZ(18,t.r,t.g,t.b),s.setXYZ(19,t.r,t.g,t.b),s.setXYZ(20,t.r,t.g,t.b),s.setXYZ(21,t.r,t.g,t.b),s.setXYZ(22,t.r,t.g,t.b),s.setXYZ(23,t.r,t.g,t.b),s.setXYZ(24,e.r,e.g,e.b),s.setXYZ(25,e.r,e.g,e.b),s.setXYZ(26,e.r,e.g,e.b),s.setXYZ(27,e.r,e.g,e.b),s.setXYZ(28,e.r,e.g,e.b),s.setXYZ(29,e.r,e.g,e.b),s.setXYZ(30,e.r,e.g,e.b),s.setXYZ(31,e.r,e.g,e.b),s.setXYZ(32,n.r,n.g,n.b),s.setXYZ(33,n.r,n.g,n.b),s.setXYZ(34,n.r,n.g,n.b),s.setXYZ(35,n.r,n.g,n.b),s.setXYZ(36,n.r,n.g,n.b),s.setXYZ(37,n.r,n.g,n.b),s.setXYZ(38,i.r,i.g,i.b),s.setXYZ(39,i.r,i.g,i.b),s.setXYZ(40,r.r,r.g,r.b),s.setXYZ(41,r.r,r.g,r.b),s.setXYZ(42,r.r,r.g,r.b),s.setXYZ(43,r.r,r.g,r.b),s.setXYZ(44,r.r,r.g,r.b),s.setXYZ(45,r.r,r.g,r.b),s.setXYZ(46,r.r,r.g,r.b),s.setXYZ(47,r.r,r.g,r.b),s.setXYZ(48,r.r,r.g,r.b),s.setXYZ(49,r.r,r.g,r.b),s.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap;$h.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Qh("c",e,t,$h,0,0,-1),Qh("t",e,t,$h,0,0,1),Qh("n1",e,t,$h,-1,-1,-1),Qh("n2",e,t,$h,1,-1,-1),Qh("n3",e,t,$h,-1,1,-1),Qh("n4",e,t,$h,1,1,-1),Qh("f1",e,t,$h,-1,-1,1),Qh("f2",e,t,$h,1,-1,1),Qh("f3",e,t,$h,-1,1,1),Qh("f4",e,t,$h,1,1,1),Qh("u1",e,t,$h,.7,1.1,-1),Qh("u2",e,t,$h,-.7,1.1,-1),Qh("u3",e,t,$h,0,2,-1),Qh("cf1",e,t,$h,-1,0,1),Qh("cf2",e,t,$h,1,0,1),Qh("cf3",e,t,$h,0,-1,1),Qh("cf4",e,t,$h,0,1,1),Qh("cn1",e,t,$h,-1,0,-1),Qh("cn2",e,t,$h,1,0,-1),Qh("cn3",e,t,$h,0,-1,-1),Qh("cn4",e,t,$h,0,1,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},t.CanvasTexture=class extends ee{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},t.CapsuleBufferGeometry=class extends Jo{constructor(t,e,n,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(t,e,n,i)}},t.CapsuleGeometry=Jo,t.CatmullRomCurve3=No,t.CineonToneMapping=3,t.CircleBufferGeometry=class extends Ko{constructor(t,e,n,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(t,e,n,i)}},t.CircleGeometry=Ko,t.ClampToEdgeWrapping=h,t.Clock=dh,t.Color=Rn,t.ColorKeyframeTrack=xc,t.ColorManagement=Zt,t.CompressedArrayTexture=class extends wo{constructor(t,e,n,i,r,s){super(t,e,n,r,s),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=h}},t.CompressedTexture=wo,t.CompressedTextureLoader=class extends Lc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=[],a=new wo,o=new Uc(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials);let l=0;function c(c){o.load(t[c],(function(t){const n=r.parse(t,!0);s[c]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},l+=1,6===l&&(1===n.mipmapCount&&(a.minFilter=f),a.image=s,a.format=n.format,a.needsUpdate=!0,e&&e(a))}),n,i)}if(Array.isArray(t))for(let e=0,n=t.length;e<n;++e)c(e);else o.load(t,(function(t){const n=r.parse(t,!0);if(n.isCubemap){const t=n.mipmaps.length/n.mipmapCount;for(let e=0;e<t;e++){s[e]={mipmaps:[]};for(let t=0;t<n.mipmapCount;t++)s[e].mipmaps.push(n.mipmaps[e*n.mipmapCount+t]),s[e].format=n.format,s[e].width=n.width,s[e].height=n.height}a.image=s}else a.image.width=n.width,a.image.height=n.height,a.mipmaps=n.mipmaps;1===n.mipmapCount&&(a.minFilter=f),a.format=n.format,a.needsUpdate=!0,e&&e(a)}),n,i);return a}},t.ConeBufferGeometry=class extends Qo{constructor(t,e,n,i,r,s,a){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(t,e,n,i,r,s,a)}},t.ConeGeometry=Qo,t.CubeCamera=Ei,t.CubeReflectionMapping=r,t.CubeRefractionMapping=s,t.CubeTexture=Ti,t.CubeTextureLoader=class extends Lc{constructor(t){super(t)}load(t,e,n,i){const r=new Ti,s=new Dc(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(n){s.load(t[n],(function(t){r.images[n]=t,a++,6===a&&(r.needsUpdate=!0,e&&e(r))}),void 0,i)}for(let e=0;e<t.length;++e)o(e);return r}},t.CubeUVReflectionMapping=l,t.CubicBezierCurve=zo,t.CubicBezierCurve3=Go,t.CubicInterpolant=mc,t.CullFaceBack=1,t.CullFaceFront=2,t.CullFaceFrontBack=3,t.CullFaceNone=0,t.Curve=Ao,t.CurvePath=qo,t.CustomBlending=5,t.CustomToneMapping=5,t.CylinderBufferGeometry=class extends $o{constructor(t,e,n,i,r,s,a,o){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(t,e,n,i,r,s,a,o)}},t.CylinderGeometry=$o,t.Cylindrical=class{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return(new this.constructor).copy(this)}},t.Data3DTexture=se,t.DataArrayTexture=re,t.DataTexture=Ya,t.DataTextureLoader=class extends Lc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=new Ya,a=new Uc(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,(function(t){const n=r.parse(t);n&&(void 0!==n.image?s.image=n.image:void 0!==n.data&&(s.image.width=n.width,s.image.height=n.height,s.image.data=n.data),s.wrapS=void 0!==n.wrapS?n.wrapS:h,s.wrapT=void 0!==n.wrapT?n.wrapT:h,s.magFilter=void 0!==n.magFilter?n.magFilter:f,s.minFilter=void 0!==n.minFilter?n.minFilter:f,s.anisotropy=void 0!==n.anisotropy?n.anisotropy:1,void 0!==n.colorSpace?s.colorSpace=n.colorSpace:void 0!==n.encoding&&(s.encoding=n.encoding),void 0!==n.flipY&&(s.flipY=n.flipY),void 0!==n.format&&(s.format=n.format),void 0!==n.type&&(s.type=n.type),void 0!==n.mipmaps&&(s.mipmaps=n.mipmaps,s.minFilter=v),1===n.mipmapCount&&(s.minFilter=f),void 0!==n.generateMipmaps&&(s.generateMipmaps=n.generateMipmaps),s.needsUpdate=!0,e&&e(s,n))}),n,i),s}},t.DataUtils=Nn,t.DecrementStencilOp=7683,t.DecrementWrapStencilOp=34056,t.DefaultLoadingManager=Cc,t.DepthFormat=T,t.DepthStencilFormat=w,t.DepthTexture=la,t.DirectionalLight=Zc,t.DirectionalLightHelper=class extends cn{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",void 0===e&&(e=1);let i=new Zn;i.setAttribute("position",new Hn([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new oo({fog:!1,toneMapped:!1});this.lightPlane=new mo(i,r),this.add(this.lightPlane),i=new Zn,i.setAttribute("position",new Hn([0,0,0,0,0,1],3)),this.targetLine=new mo(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Yh.setFromMatrixPosition(this.light.matrixWorld),Zh.setFromMatrixPosition(this.light.target.matrixWorld),Jh.subVectors(Zh,Yh),this.lightPlane.lookAt(Zh),void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Zh),this.targetLine.scale.z=Jh.length()}},t.DiscreteInterpolant=gc,t.DisplayP3ColorSpace=mt,t.DodecahedronBufferGeometry=class extends el{constructor(t,e){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(t,e)}},t.DodecahedronGeometry=el,t.DoubleSide=2,t.DstAlphaFactor=206,t.DstColorFactor=208,t.DynamicCopyUsage=35050,t.DynamicDrawUsage=35048,t.DynamicReadUsage=35049,t.EdgesGeometry=al,t.EllipseCurve=Ro,t.EqualDepth=4,t.EqualStencilFunc=514,t.EquirectangularReflectionMapping=a,t.EquirectangularRefractionMapping=o,t.Euler=qe,t.EventDispatcher=xt,t.ExtrudeBufferGeometry=class extends Ol{constructor(t,e){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(t,e)}},t.ExtrudeGeometry=Ol,t.FileLoader=Uc,t.Float16BufferAttribute=class extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Dn(this.array[t*this.itemSize]);return this.normalized&&(e=Pt(e,this.array)),e}setX(t,e){return this.normalized&&(e=It(e,this.array)),this.array[t*this.itemSize]=Un(e),this}getY(t){let e=Dn(this.array[t*this.itemSize+1]);return this.normalized&&(e=Pt(e,this.array)),e}setY(t,e){return this.normalized&&(e=It(e,this.array)),this.array[t*this.itemSize+1]=Un(e),this}getZ(t){let e=Dn(this.array[t*this.itemSize+2]);return this.normalized&&(e=Pt(e,this.array)),e}setZ(t,e){return this.normalized&&(e=It(e,this.array)),this.array[t*this.itemSize+2]=Un(e),this}getW(t){let e=Dn(this.array[t*this.itemSize+3]);return this.normalized&&(e=Pt(e,this.array)),e}setW(t,e){return this.normalized&&(e=It(e,this.array)),this.array[t*this.itemSize+3]=Un(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=It(e,this.array),n=It(n,this.array)),this.array[t+0]=Un(e),this.array[t+1]=Un(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=It(e,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[t+0]=Un(e),this.array[t+1]=Un(n),this.array[t+2]=Un(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=It(e,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[t+0]=Un(e),this.array[t+1]=Un(n),this.array[t+2]=Un(i),this.array[t+3]=Un(r),this}},t.Float32BufferAttribute=Hn,t.Float64BufferAttribute=class extends Bn{constructor(t,e,n){super(new Float64Array(t),e,n)}},t.FloatType=M,t.Fog=ga,t.FogExp2=fa,t.FramebufferTexture=class extends ee{constructor(t,e,n){super({width:t,height:e}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=d,this.minFilter=d,this.generateMipmaps=!1,this.needsUpdate=!0}},t.FrontSide=0,t.Frustum=Ui,t.GLBufferAttribute=class{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){!0===t&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},t.GLSL1="100",t.GLSL3=vt,t.GreaterDepth=6,t.GreaterEqualDepth=5,t.GreaterEqualStencilFunc=518,t.GreaterStencilFunc=516,t.GridHelper=class extends vo{constructor(t=10,e=10,n=4473924,i=8947848){n=new Rn(n),i=new Rn(i);const r=e/2,s=t/e,a=t/2,o=[],l=[];for(let t=0,c=0,h=-a;t<=e;t++,h+=s){o.push(-a,0,h,a,0,h),o.push(h,0,-a,h,0,a);const e=t===r?n:i;e.toArray(l,c),c+=3,e.toArray(l,c),c+=3,e.toArray(l,c),c+=3,e.toArray(l,c),c+=3}const c=new Zn;c.setAttribute("position",new Hn(o,3)),c.setAttribute("color",new Hn(l,3));super(c,new oo({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},t.Group=sa,t.HalfFloatType=S,t.HemisphereLight=Oc,t.HemisphereLightHelper=class extends cn{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new zl(e);i.rotateY(.5*Math.PI),this.material=new Ln({wireframe:!0,fog:!1,toneMapped:!1}),void 0===this.color&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),s=new Float32Array(3*r.count);i.setAttribute("color",new Bn(s,3)),this.add(new pi(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");jh.copy(this.light.color),qh.copy(this.light.groundColor);for(let t=0,n=e.count;t<n;t++){const i=t<n/2?jh:qh;e.setXYZ(t,i.r,i.g,i.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(Xh.setFromMatrixPosition(this.light.matrixWorld).negate())}},t.HemisphereLightProbe=class extends Qc{constructor(t,e,n=1){super(void 0,n),this.isHemisphereLightProbe=!0;const i=(new Rn).set(t),r=(new Rn).set(e),s=new oe(i.r,i.g,i.b),a=new oe(r.r,r.g,r.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)}},t.IcosahedronBufferGeometry=class extends Bl{constructor(t,e){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(t,e)}},t.IcosahedronGeometry=Bl,t.ImageBitmapLoader=class extends Lc{constructor(t){super(t),this.isImageBitmapLoader=!0,"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Ac.get(t);if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t)}),0),s;const a={};a.credentials="anonymous"===this.crossOrigin?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then((function(t){return t.blob()})).then((function(t){return createImageBitmap(t,Object.assign(r.options,{colorSpaceConversion:"none"}))})).then((function(n){Ac.add(t,n),e&&e(n),r.manager.itemEnd(t)})).catch((function(e){i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t)})),r.manager.itemStart(t)}},t.ImageLoader=Dc,t.ImageUtils=Kt,t.IncrementStencilOp=7682,t.IncrementWrapStencilOp=34055,t.InstancedBufferAttribute=$a,t.InstancedBufferGeometry=nh,t.InstancedInterleavedBuffer=class extends _a{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},t.InstancedMesh=ao,t.Int16BufferAttribute=class extends Bn{constructor(t,e,n){super(new Int16Array(t),e,n)}},t.Int32BufferAttribute=class extends Bn{constructor(t,e,n){super(new Int32Array(t),e,n)}},t.Int8BufferAttribute=class extends Bn{constructor(t,e,n){super(new Int8Array(t),e,n)}},t.IntType=1013,t.InterleavedBuffer=_a,t.InterleavedBufferAttribute=ya,t.Interpolant=pc,t.InterpolateDiscrete=et,t.InterpolateLinear=nt,t.InterpolateSmooth=it,t.InvertStencilOp=5386,t.KeepStencilOp=ft,t.KeyframeTrack=vc,t.LOD=za,t.LatheBufferGeometry=class extends Zo{constructor(t,e,n,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(t,e,n,i)}},t.LatheGeometry=Zo,t.Layers=Ye,t.LessDepth=2,t.LessEqualDepth=3,t.LessEqualStencilFunc=515,t.LessStencilFunc=513,t.Light=Nc,t.LightProbe=Qc,t.Line=mo,t.Line3=class{constructor(t=new oe,e=new oe){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Bh.subVectors(t,this.start),zh.subVectors(this.end,this.start);const n=zh.dot(zh);let i=zh.dot(Bh)/n;return e&&(i=Tt(i,0,1)),i}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return(new this.constructor).copy(this)}},t.LineBasicMaterial=oo,t.LineCurve=Ho,t.LineCurve3=ko,t.LineDashedMaterial=sc,t.LineLoop=_o,t.LineSegments=vo,t.LinearEncoding=ct,t.LinearFilter=f,t.LinearInterpolant=fc,t.LinearMipMapLinearFilter=1008,t.LinearMipMapNearestFilter=1007,t.LinearMipmapLinearFilter=v,t.LinearMipmapNearestFilter=g,t.LinearSRGBColorSpace=pt,t.LinearToneMapping=1,t.Loader=Lc,t.LoaderUtils=eh,t.LoadingManager=Rc,t.LoopOnce=2200,t.LoopPingPong=2202,t.LoopRepeat=2201,t.LuminanceAlphaFormat=1025,t.LuminanceFormat=1024,t.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t.Material=bn,t.MaterialLoader=th,t.MathUtils=Ut,t.Matrix3=Nt,t.Matrix4=Fe,t.MaxEquation=104,t.Mesh=pi,t.MeshBasicMaterial=Ln,t.MeshDepthMaterial=$s,t.MeshDistanceMaterial=Qs,t.MeshLambertMaterial=ic,t.MeshMatcapMaterial=rc,t.MeshNormalMaterial=nc,t.MeshPhongMaterial=tc,t.MeshPhysicalMaterial=Ql,t.MeshStandardMaterial=$l,t.MeshToonMaterial=ec,t.MinEquation=103,t.MirroredRepeatWrapping=u,t.MixOperation=1,t.MultiplyBlending=4,t.MultiplyOperation=0,t.NearestFilter=d,t.NearestMipMapLinearFilter=1005,t.NearestMipMapNearestFilter=1004,t.NearestMipmapLinearFilter=m,t.NearestMipmapNearestFilter=p,t.NeverDepth=0,t.NeverStencilFunc=512,t.NoBlending=0,t.NoColorSpace=ut,t.NoToneMapping=0,t.NormalAnimationBlendMode=ot,t.NormalBlending=1,t.NotEqualDepth=7,t.NotEqualStencilFunc=517,t.NumberKeyframeTrack=yc,t.Object3D=cn,t.ObjectLoader=class extends Lc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=""===this.path?eh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||s;const a=new Uc(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,(function(n){let s=null;try{s=JSON.parse(n)}catch(e){return void 0!==i&&i(e),void console.error("THREE:ObjectLoader: Can't parse "+t+".",e.message)}const a=s.metadata;if(void 0===a||void 0===a.type||"geometry"===a.type.toLowerCase())return void 0!==i&&i(new Error("THREE.ObjectLoader: Can't load "+t)),void console.error("THREE.ObjectLoader: Can't load "+t);r.parse(s,e)}),n,i)}async loadAsync(t,e){const n=""===this.path?eh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||n;const i=new Uc(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials);const r=await i.loadAsync(t,e),s=JSON.parse(r),a=s.metadata;if(void 0===a||void 0===a.type||"geometry"===a.type.toLowerCase())throw new Error("THREE.ObjectLoader: Can't load "+t);return await this.parseAsync(s)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),s=this.parseImages(t.images,(function(){void 0!==e&&e(l)})),a=this.parseTextures(t.textures,s),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,r,o,a,n),c=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,c),void 0!==e){let t=!1;for(const e in s)if(s[e].data instanceof HTMLImageElement){t=!0;break}!1===t&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),s=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,s),o=this.parseObject(t.object,i,a,s,e),l=this.parseSkeletons(t.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(t){const e={};if(void 0!==t)for(let n=0,i=t.length;n<i;n++){const i=(new ol).fromJSON(t[n]);e[i.uuid]=i}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse((function(t){t.isBone&&(i[t.uuid]=t)})),void 0!==t)for(let e=0,r=t.length;e<r;e++){const r=(new Ka).fromJSON(t[e],i);n[r.uuid]=r}return n}parseGeometries(t,e){const n={};if(void 0!==t){const i=new ih;for(let r=0,s=t.length;r<s;r++){let s;const a=t[r];switch(a.type){case"BufferGeometry":case"InstancedBufferGeometry":s=i.parse(a);break;default:a.type in Zl?s=Zl[a.type].fromJSON(a,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`)}s.uuid=a.uuid,void 0!==a.name&&(s.name=a.name),void 0!==a.userData&&(s.userData=a.userData),n[a.uuid]=s}}return n}parseMaterials(t,e){const n={},i={};if(void 0!==t){const r=new th;r.setTextures(e);for(let e=0,s=t.length;e<s;e++){const s=t[e];void 0===n[s.uuid]&&(n[s.uuid]=r.parse(s)),i[s.uuid]=n[s.uuid]}}return i}parseAnimations(t){const e={};if(void 0!==t)for(let n=0;n<t.length;n++){const i=t[n],r=Tc.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function s(t){if("string"==typeof t){const e=t;return function(t){return n.manager.itemStart(t),r.load(t,(function(){n.manager.itemEnd(t)}),void 0,(function(){n.manager.itemError(t),n.manager.itemEnd(t)}))}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e)?e:n.resourcePath+e)}return t.data?{data:zt(t.type,t.data),width:t.width,height:t.height}:null}if(void 0!==t&&t.length>0){const n=new Rc(e);r=new Dc(n),r.setCrossOrigin(this.crossOrigin);for(let e=0,n=t.length;e<n;e++){const n=t[e],r=n.url;if(Array.isArray(r)){const t=[];for(let e=0,n=r.length;e<n;e++){const n=s(r[e]);null!==n&&(n instanceof HTMLImageElement?t.push(n):t.push(new Ya(n.data,n.width,n.height)))}i[n.uuid]=new $t(t)}else{const t=s(n.url);i[n.uuid]=new $t(t)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(t){if("string"==typeof t){const n=t,r=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(n)?n:e.resourcePath+n;return await i.loadAsync(r)}return t.data?{data:zt(t.type,t.data),width:t.width,height:t.height}:null}if(void 0!==t&&t.length>0){i=new Dc(this.manager),i.setCrossOrigin(this.crossOrigin);for(let e=0,i=t.length;e<i;e++){const i=t[e],s=i.url;if(Array.isArray(s)){const t=[];for(let e=0,n=s.length;e<n;e++){const n=s[e],i=await r(n);null!==i&&(i instanceof HTMLImageElement?t.push(i):t.push(new Ya(i.data,i.width,i.height)))}n[i.uuid]=new $t(t)}else{const t=await r(i.url);n[i.uuid]=new $t(t)}}}return n}parseTextures(t,e){function n(t,e){return"number"==typeof t?t:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",t),e[t])}const i={};if(void 0!==t)for(let r=0,s=t.length;r<s;r++){const s=t[r];void 0===s.image&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),void 0===e[s.image]&&console.warn("THREE.ObjectLoader: Undefined image",s.image);const a=e[s.image],o=a.data;let l;Array.isArray(o)?(l=new Ti,6===o.length&&(l.needsUpdate=!0)):(l=o&&o.data?new Ya:new ee,o&&(l.needsUpdate=!0)),l.source=a,l.uuid=s.uuid,void 0!==s.name&&(l.name=s.name),void 0!==s.mapping&&(l.mapping=n(s.mapping,rh)),void 0!==s.channel&&(l.channel=s.channel),void 0!==s.offset&&l.offset.fromArray(s.offset),void 0!==s.repeat&&l.repeat.fromArray(s.repeat),void 0!==s.center&&l.center.fromArray(s.center),void 0!==s.rotation&&(l.rotation=s.rotation),void 0!==s.wrap&&(l.wrapS=n(s.wrap[0],sh),l.wrapT=n(s.wrap[1],sh)),void 0!==s.format&&(l.format=s.format),void 0!==s.internalFormat&&(l.internalFormat=s.internalFormat),void 0!==s.type&&(l.type=s.type),void 0!==s.colorSpace&&(l.colorSpace=s.colorSpace),void 0!==s.encoding&&(l.encoding=s.encoding),void 0!==s.minFilter&&(l.minFilter=n(s.minFilter,ah)),void 0!==s.magFilter&&(l.magFilter=n(s.magFilter,ah)),void 0!==s.anisotropy&&(l.anisotropy=s.anisotropy),void 0!==s.flipY&&(l.flipY=s.flipY),void 0!==s.generateMipmaps&&(l.generateMipmaps=s.generateMipmaps),void 0!==s.premultiplyAlpha&&(l.premultiplyAlpha=s.premultiplyAlpha),void 0!==s.unpackAlignment&&(l.unpackAlignment=s.unpackAlignment),void 0!==s.userData&&(l.userData=s.userData),i[s.uuid]=l}return i}parseObject(t,e,n,i,r){let s,a,o;function l(t){return void 0===e[t]&&console.warn("THREE.ObjectLoader: Undefined geometry",t),e[t]}function c(t){if(void 0!==t){if(Array.isArray(t)){const e=[];for(let i=0,r=t.length;i<r;i++){const r=t[i];void 0===n[r]&&console.warn("THREE.ObjectLoader: Undefined material",r),e.push(n[r])}return e}return void 0===n[t]&&console.warn("THREE.ObjectLoader: Undefined material",t),n[t]}}function h(t){return void 0===i[t]&&console.warn("THREE.ObjectLoader: Undefined texture",t),i[t]}switch(t.type){case"Scene":s=new va,void 0!==t.background&&(Number.isInteger(t.background)?s.background=new Rn(t.background):s.background=h(t.background)),void 0!==t.environment&&(s.environment=h(t.environment)),void 0!==t.fog&&("Fog"===t.fog.type?s.fog=new ga(t.fog.color,t.fog.near,t.fog.far):"FogExp2"===t.fog.type&&(s.fog=new fa(t.fog.color,t.fog.density))),void 0!==t.backgroundBlurriness&&(s.backgroundBlurriness=t.backgroundBlurriness),void 0!==t.backgroundIntensity&&(s.backgroundIntensity=t.backgroundIntensity);break;case"PerspectiveCamera":s=new Si(t.fov,t.aspect,t.near,t.far),void 0!==t.focus&&(s.focus=t.focus),void 0!==t.zoom&&(s.zoom=t.zoom),void 0!==t.filmGauge&&(s.filmGauge=t.filmGauge),void 0!==t.filmOffset&&(s.filmOffset=t.filmOffset),void 0!==t.view&&(s.view=Object.assign({},t.view));break;case"OrthographicCamera":s=new qi(t.left,t.right,t.top,t.bottom,t.near,t.far),void 0!==t.zoom&&(s.zoom=t.zoom),void 0!==t.view&&(s.view=Object.assign({},t.view));break;case"AmbientLight":s=new Jc(t.color,t.intensity);break;case"DirectionalLight":s=new Zc(t.color,t.intensity);break;case"PointLight":s=new qc(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":s=new Kc(t.color,t.intensity,t.width,t.height);break;case"SpotLight":s=new kc(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":s=new Oc(t.color,t.groundColor,t.intensity);break;case"LightProbe":s=(new Qc).fromJSON(t);break;case"SkinnedMesh":a=l(t.geometry),o=c(t.material),s=new ja(a,o),void 0!==t.bindMode&&(s.bindMode=t.bindMode),void 0!==t.bindMatrix&&s.bindMatrix.fromArray(t.bindMatrix),void 0!==t.skeleton&&(s.skeleton=t.skeleton);break;case"Mesh":a=l(t.geometry),o=c(t.material),s=new pi(a,o);break;case"InstancedMesh":a=l(t.geometry),o=c(t.material);const e=t.count,n=t.instanceMatrix,i=t.instanceColor;s=new ao(a,o,e),s.instanceMatrix=new $a(new Float32Array(n.array),16),void 0!==i&&(s.instanceColor=new $a(new Float32Array(i.array),i.itemSize));break;case"LOD":s=new za;break;case"Line":s=new mo(l(t.geometry),c(t.material));break;case"LineLoop":s=new _o(l(t.geometry),c(t.material));break;case"LineSegments":s=new vo(l(t.geometry),c(t.material));break;case"PointCloud":case"Points":s=new Eo(l(t.geometry),c(t.material));break;case"Sprite":s=new Na(c(t.material));break;case"Group":s=new sa;break;case"Bone":s=new qa;break;default:s=new cn}if(s.uuid=t.uuid,void 0!==t.name&&(s.name=t.name),void 0!==t.matrix?(s.matrix.fromArray(t.matrix),void 0!==t.matrixAutoUpdate&&(s.matrixAutoUpdate=t.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(void 0!==t.position&&s.position.fromArray(t.position),void 0!==t.rotation&&s.rotation.fromArray(t.rotation),void 0!==t.quaternion&&s.quaternion.fromArray(t.quaternion),void 0!==t.scale&&s.scale.fromArray(t.scale)),void 0!==t.up&&s.up.fromArray(t.up),void 0!==t.castShadow&&(s.castShadow=t.castShadow),void 0!==t.receiveShadow&&(s.receiveShadow=t.receiveShadow),t.shadow&&(void 0!==t.shadow.bias&&(s.shadow.bias=t.shadow.bias),void 0!==t.shadow.normalBias&&(s.shadow.normalBias=t.shadow.normalBias),void 0!==t.shadow.radius&&(s.shadow.radius=t.shadow.radius),void 0!==t.shadow.mapSize&&s.shadow.mapSize.fromArray(t.shadow.mapSize),void 0!==t.shadow.camera&&(s.shadow.camera=this.parseObject(t.shadow.camera))),void 0!==t.visible&&(s.visible=t.visible),void 0!==t.frustumCulled&&(s.frustumCulled=t.frustumCulled),void 0!==t.renderOrder&&(s.renderOrder=t.renderOrder),void 0!==t.userData&&(s.userData=t.userData),void 0!==t.layers&&(s.layers.mask=t.layers),void 0!==t.children){const a=t.children;for(let t=0;t<a.length;t++)s.add(this.parseObject(a[t],e,n,i,r))}if(void 0!==t.animations){const e=t.animations;for(let t=0;t<e.length;t++){const n=e[t];s.animations.push(r[n])}}if("LOD"===t.type){void 0!==t.autoUpdate&&(s.autoUpdate=t.autoUpdate);const e=t.levels;for(let t=0;t<e.length;t++){const n=e[t],i=s.getObjectByProperty("uuid",n.object);void 0!==i&&s.addLevel(i,n.distance,n.hysteresis)}}return s}bindSkeletons(t,e){0!==Object.keys(e).length&&t.traverse((function(t){if(!0===t.isSkinnedMesh&&void 0!==t.skeleton){const n=e[t.skeleton];void 0===n?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(n,t.bindMatrix)}}))}},t.ObjectSpaceNormalMap=1,t.OctahedronBufferGeometry=class extends zl{constructor(t,e){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(t,e)}},t.OctahedronGeometry=zl,t.OneFactor=201,t.OneMinusDstAlphaFactor=207,t.OneMinusDstColorFactor=209,t.OneMinusSrcAlphaFactor=205,t.OneMinusSrcColorFactor=203,t.OrthographicCamera=qi,t.PCFShadowMap=1,t.PCFSoftShadowMap=2,t.PMREMGenerator=nr,t.Path=Yo,t.PerspectiveCamera=Si,t.Plane=Li,t.PlaneBufferGeometry=class extends Oi{constructor(t,e,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(t,e,n,i)}},t.PlaneGeometry=Oi,t.PlaneHelper=class extends mo{constructor(t,e=1,n=16776960){const i=n,r=new Zn;r.setAttribute("position",new Hn([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),r.computeBoundingSphere(),super(r,new oo({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const s=new Zn;s.setAttribute("position",new Hn([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),s.computeBoundingSphere(),this.add(new pi(s,new Ln({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},t.PointLight=qc,t.PointLightHelper=class extends pi{constructor(t,e,n){super(new kl(e,4,2),new Ln({wireframe:!0,fog:!1,toneMapped:!1})),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},t.Points=Eo,t.PointsMaterial=xo,t.PolarGridHelper=class extends vo{constructor(t=10,e=16,n=8,i=64,r=4473924,s=8947848){r=new Rn(r),s=new Rn(s);const a=[],o=[];if(e>1)for(let n=0;n<e;n++){const i=n/e*(2*Math.PI),l=Math.sin(i)*t,c=Math.cos(i)*t;a.push(0,0,0),a.push(l,0,c);const h=1&n?r:s;o.push(h.r,h.g,h.b),o.push(h.r,h.g,h.b)}for(let e=0;e<n;e++){const l=1&e?r:s,c=t-t/n*e;for(let t=0;t<i;t++){let e=t/i*(2*Math.PI),n=Math.sin(e)*c,r=Math.cos(e)*c;a.push(n,0,r),o.push(l.r,l.g,l.b),e=(t+1)/i*(2*Math.PI),n=Math.sin(e)*c,r=Math.cos(e)*c,a.push(n,0,r),o.push(l.r,l.g,l.b)}}const l=new Zn;l.setAttribute("position",new Hn(a,3)),l.setAttribute("color",new Hn(o,3));super(l,new oo({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},t.PolyhedronBufferGeometry=class extends tl{constructor(t,e,n,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(t,e,n,i)}},t.PolyhedronGeometry=tl,t.PositionalAudio=class extends _h{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),!0===this.hasPlaybackControl&&!1===this.isPlaying)return;this.matrixWorld.decompose(xh,yh,Mh),Sh.set(0,0,1).applyQuaternion(yh);const e=this.panner;if(e.positionX){const t=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(xh.x,t),e.positionY.linearRampToValueAtTime(xh.y,t),e.positionZ.linearRampToValueAtTime(xh.z,t),e.orientationX.linearRampToValueAtTime(Sh.x,t),e.orientationY.linearRampToValueAtTime(Sh.y,t),e.orientationZ.linearRampToValueAtTime(Sh.z,t)}else e.setPosition(xh.x,xh.y,xh.z),e.setOrientation(Sh.x,Sh.y,Sh.z)}},t.PropertyBinding=Lh,t.PropertyMixer=bh,t.QuadraticBezierCurve=Vo,t.QuadraticBezierCurve3=Wo,t.Quaternion=ae,t.QuaternionKeyframeTrack=Sc,t.QuaternionLinearInterpolant=Mc,t.RED_GREEN_RGTC2_Format=Q,t.RED_RGTC1_Format=36283,t.REVISION=e,t.RGBADepthPacking=3201,t.RGBAFormat=E,t.RGBAIntegerFormat=1033,t.RGBA_ASTC_10x10_Format=Y,t.RGBA_ASTC_10x5_Format=X,t.RGBA_ASTC_10x6_Format=j,t.RGBA_ASTC_10x8_Format=q,t.RGBA_ASTC_12x10_Format=Z,t.RGBA_ASTC_12x12_Format=J,t.RGBA_ASTC_4x4_Format=F,t.RGBA_ASTC_5x4_Format=B,t.RGBA_ASTC_5x5_Format=z,t.RGBA_ASTC_6x5_Format=G,t.RGBA_ASTC_6x6_Format=H,t.RGBA_ASTC_8x5_Format=k,t.RGBA_ASTC_8x6_Format=V,t.RGBA_ASTC_8x8_Format=W,t.RGBA_BPTC_Format=K,t.RGBA_ETC2_EAC_Format=O,t.RGBA_PVRTC_2BPPV1_Format=D,t.RGBA_PVRTC_4BPPV1_Format=U,t.RGBA_S3TC_DXT1_Format=R,t.RGBA_S3TC_DXT3_Format=C,t.RGBA_S3TC_DXT5_Format=L,t.RGB_ETC1_Format=36196,t.RGB_ETC2_Format=N,t.RGB_PVRTC_2BPPV1_Format=I,t.RGB_PVRTC_4BPPV1_Format=P,t.RGB_S3TC_DXT1_Format=A,t.RGFormat=1030,t.RGIntegerFormat=1031,t.RawShaderMaterial=Kl,t.Ray=Oe,t.Raycaster=class{constructor(t,e,n=0,i=1/0){this.ray=new Oe(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ye,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Oh(t,this,n,e),n.sort(Nh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Oh(t[i],this,n,e);return n.sort(Nh),n}},t.RectAreaLight=Kc,t.RedFormat=1028,t.RedIntegerFormat=1029,t.ReinhardToneMapping=2,t.RepeatWrapping=c,t.ReplaceStencilOp=7681,t.ReverseSubtractEquation=102,t.RingBufferGeometry=class extends Gl{constructor(t,e,n,i,r,s){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(t,e,n,i,r,s)}},t.RingGeometry=Gl,t.SIGNED_RED_GREEN_RGTC2_Format=tt,t.SIGNED_RED_RGTC1_Format=$,t.SRGBColorSpace=dt,t.Scene=va,t.ShaderChunk=Fi,t.ShaderLib=zi,t.ShaderMaterial=yi,t.ShadowMaterial=Jl,t.Shape=ol,t.ShapeBufferGeometry=class extends Hl{constructor(t,e){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(t,e)}},t.ShapeGeometry=Hl,t.ShapePath=class{constructor(){this.type="ShapePath",this.color=new Rn,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Yo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(t,e){const n=e.length;let i=!1;for(let r=n-1,s=0;s<n;r=s++){let n=e[r],a=e[s],o=a.x-n.x,l=a.y-n.y;if(Math.abs(l)>Number.EPSILON){if(l<0&&(n=e[s],o=-o,a=e[r],l=-l),t.y<n.y||t.y>a.y)continue;if(t.y===n.y){if(t.x===n.x)return!0}else{const e=l*(t.x-n.x)-o*(t.y-n.y);if(0===e)return!0;if(e<0)continue;i=!i}}else{if(t.y!==n.y)continue;if(a.x<=t.x&&t.x<=n.x||n.x<=t.x&&t.x<=a.x)return!0}}return i}const n=Ul.isClockWise,i=this.subPaths;if(0===i.length)return[];let r,s,a;const o=[];if(1===i.length)return s=i[0],a=new ol,a.curves=s.curves,o.push(a),o;let l=!n(i[0].getPoints());l=t?!l:l;const c=[],h=[];let u,d,p=[],m=0;h[m]=void 0,p[m]=[];for(let e=0,a=i.length;e<a;e++)s=i[e],u=s.getPoints(),r=n(u),r=t?!r:r,r?(!l&&h[m]&&m++,h[m]={s:new ol,p:u},h[m].s.curves=s.curves,l&&m++,p[m]=[]):p[m].push({h:s,p:u[0]});if(!h[0])return function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n],r=new ol;r.curves=i.curves,e.push(r)}return e}(i);if(h.length>1){let t=!1,n=0;for(let t=0,e=h.length;t<e;t++)c[t]=[];for(let i=0,r=h.length;i<r;i++){const r=p[i];for(let s=0;s<r.length;s++){const a=r[s];let o=!0;for(let r=0;r<h.length;r++)e(a.p,h[r].p)&&(i!==r&&n++,o?(o=!1,c[r].push(a)):t=!0);o&&c[i].push(a)}}n>0&&!1===t&&(p=c)}for(let t=0,e=h.length;t<e;t++){a=h[t].s,o.push(a),d=p[t];for(let t=0,e=d.length;t<e;t++)a.holes.push(d[t].h)}return o}},t.ShapeUtils=Ul,t.ShortType=1011,t.Skeleton=Ka,t.SkeletonHelper=class extends vo{constructor(t){const e=Wh(t),n=new Zn,i=[],r=[],s=new Rn(0,0,1),a=new Rn(0,1,0);for(let t=0;t<e.length;t++){const n=e[t];n.parent&&n.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Hn(i,3)),n.setAttribute("color",new Hn(r,3));super(n,new oo({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Vh.copy(this.root.matrixWorld).invert();for(let t=0,n=0;t<e.length;t++){const r=e[t];r.parent&&r.parent.isBone&&(kh.multiplyMatrices(Vh,r.matrixWorld),Hh.setFromMatrixPosition(kh),i.setXYZ(n,Hh.x,Hh.y,Hh.z),kh.multiplyMatrices(Vh,r.parent.matrixWorld),Hh.setFromMatrixPosition(kh),i.setXYZ(n+1,Hh.x,Hh.y,Hh.z),n+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}},t.SkinnedMesh=ja,t.Source=$t,t.Sphere=Re,t.SphereBufferGeometry=class extends kl{constructor(t,e,n,i,r,s,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(t,e,n,i,r,s,a)}},t.SphereGeometry=kl,t.Spherical=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){const t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Tt(e/this.radius,-1,1))),this}clone(){return(new this.constructor).copy(this)}},t.SphericalHarmonics3=$c,t.SplineCurve=Xo,t.SpotLight=kc,t.SpotLightHelper=class extends cn{constructor(t,e){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Zn,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let t=0,e=1,n=32;t<n;t++,e++){const r=t/n*Math.PI*2,s=e/n*Math.PI*2;i.push(Math.cos(r),Math.sin(r),1,Math.cos(s),Math.sin(s),1)}n.setAttribute("position",new Hn(i,3));const r=new oo({fog:!1,toneMapped:!1});this.cone=new vo(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Gh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Gh),void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},t.Sprite=Na,t.SpriteMaterial=Ma,t.SrcAlphaFactor=204,t.SrcAlphaSaturateFactor=210,t.SrcColorFactor=202,t.StaticCopyUsage=35046,t.StaticDrawUsage=gt,t.StaticReadUsage=35045,t.StereoCamera=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Si,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Si,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,uh.copy(t.projectionMatrix);const n=e.eyeSep/2,i=n*e.near/e.focus,r=e.near*Math.tan(St*e.fov*.5)/e.zoom;let s,a;hh.elements[12]=-n,ch.elements[12]=n,s=-r*e.aspect+i,a=r*e.aspect+i,uh.elements[0]=2*e.near/(a-s),uh.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(uh),s=-r*e.aspect-i,a=r*e.aspect-i,uh.elements[0]=2*e.near/(a-s),uh.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(uh)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(hh),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(ch)}},t.StreamCopyUsage=35042,t.StreamDrawUsage=35040,t.StreamReadUsage=35041,t.StringKeyframeTrack=bc,t.SubtractEquation=101,t.SubtractiveBlending=3,t.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t.TangentSpaceNormalMap=0,t.TetrahedronBufferGeometry=class extends Vl{constructor(t,e){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(t,e)}},t.TetrahedronGeometry=Vl,t.Texture=ee,t.TextureLoader=class extends Lc{constructor(t){super(t)}load(t,e,n,i){const r=new ee,s=new Dc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,(function(t){r.image=t,r.needsUpdate=!0,void 0!==e&&e(r)}),n,i),r}},t.TorusBufferGeometry=class extends Wl{constructor(t,e,n,i,r){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(t,e,n,i,r)}},t.TorusGeometry=Wl,t.TorusKnotBufferGeometry=class extends Xl{constructor(t,e,n,i,r,s){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(t,e,n,i,r,s)}},t.TorusKnotGeometry=Xl,t.Triangle=Mn,t.TriangleFanDrawMode=2,t.TriangleStripDrawMode=1,t.TrianglesDrawMode=0,t.TubeBufferGeometry=class extends jl{constructor(t,e,n,i,r){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(t,e,n,i,r)}},t.TubeGeometry=jl,t.TwoPassDoubleSide=2,t.UVMapping=i,t.Uint16BufferAttribute=zn,t.Uint32BufferAttribute=Gn,t.Uint8BufferAttribute=class extends Bn{constructor(t,e,n){super(new Uint8Array(t),e,n)}},t.Uint8ClampedBufferAttribute=class extends Bn{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},t.Uniform=Uh,t.UniformsGroup=class extends xt{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Dh++}),this.name="",this.usage=gt,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return-1!==e&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let t=0,n=e.length;t<n;t++)this.uniforms.push(e[t].clone());return this}clone(){return(new this.constructor).copy(this)}},t.UniformsLib=Bi,t.UniformsUtils=xi,t.UnsignedByteType=_,t.UnsignedInt248Type=b,t.UnsignedIntType=y,t.UnsignedShort4444Type=1017,t.UnsignedShort5551Type=1018,t.UnsignedShortType=x,t.VSMShadowMap=3,t.Vector2=Dt,t.Vector3=oe,t.Vector4=ne,t.VectorKeyframeTrack=Ec,t.VideoTexture=class extends ee{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isVideoTexture=!0,this.minFilter=void 0!==s?s:f,this.magFilter=void 0!==r?r:f,this.generateMipmaps=!1;const c=this;"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback((function e(){c.needsUpdate=!0,t.requestVideoFrameCallback(e)}))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;!1==="requestVideoFrameCallback"in t&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},t.WebGL1Renderer=ma,t.WebGL3DRenderTarget=class extends ie{constructor(t=1,e=1,n=1){super(t,e),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new se(null,t,e,n),this.texture.isRenderTargetTexture=!0}},t.WebGLArrayRenderTarget=class extends ie{constructor(t=1,e=1,n=1){super(t,e),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new re(null,t,e,n),this.texture.isRenderTargetTexture=!0}},t.WebGLCubeRenderTarget=wi,t.WebGLMultipleRenderTargets=class extends ie{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let t=0;t<n;t++)this.texture[t]=r.clone(),this.texture[t].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,null!==t.depthTexture&&(this.depthTexture=t.depthTexture.clone()),this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}},t.WebGLRenderTarget=ie,t.WebGLRenderer=pa,t.WebGLUtils=ia,t.WireframeGeometry=ql,t.WrapAroundEnding=at,t.ZeroCurvatureEnding=rt,t.ZeroFactor=200,t.ZeroSlopeEnding=st,t.ZeroStencilOp=0,t._SRGBAFormat=_t,t.sRGBEncoding=ht}));

}).call(globalThis);
/*! three-mesh-bvh v0.6.8 | Copyright (c) 2018 Garrett Johnson | MIT | https://github.com/gkjohnson/three-mesh-bvh
   Inliné par sources/build.py ; texte complet dans THIRD_PARTY_LICENSES. */
(function () {
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MeshBVHLib = global.MeshBVHLib || {}, global.THREE));
})(this, (function (exports, three) { 'use strict';

	// Split strategy constants
	const CENTER = 0;
	const AVERAGE = 1;
	const SAH = 2;

	// Traversal constants
	const NOT_INTERSECTED = 0;
	const INTERSECTED = 1;
	const CONTAINED = 2;

	// SAH cost constants
	// TODO: hone these costs more. The relative difference between them should be the
	// difference in measured time to perform a triangle intersection vs traversing
	// bounds.
	const TRIANGLE_INTERSECT_COST = 1.25;
	const TRAVERSAL_COST = 1;


	// Build constants
	const BYTES_PER_NODE = 6 * 4 + 4 + 4;
	const IS_LEAFNODE_FLAG = 0xFFFF;

	// EPSILON for computing floating point error during build
	// https://en.wikipedia.org/wiki/Machine_epsilon#Values_for_standard_hardware_floating_point_arithmetics
	const FLOAT32_EPSILON = Math.pow( 2, - 24 );

	const SKIP_GENERATION = Symbol( 'SKIP_GENERATION' );

	function getVertexCount( geo ) {

		return geo.index ? geo.index.count : geo.attributes.position.count;

	}

	function getTriCount( geo ) {

		return getVertexCount( geo ) / 3;

	}

	function getIndexArray( vertexCount, BufferConstructor = ArrayBuffer ) {

		if ( vertexCount > 65535 ) {

			return new Uint32Array( new BufferConstructor( 4 * vertexCount ) );

		} else {

			return new Uint16Array( new BufferConstructor( 2 * vertexCount ) );

		}

	}

	// ensures that an index is present on the geometry
	function ensureIndex( geo, options ) {

		if ( ! geo.index ) {

			const vertexCount = geo.attributes.position.count;
			const BufferConstructor = options.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;
			const index = getIndexArray( vertexCount, BufferConstructor );
			geo.setIndex( new three.BufferAttribute( index, 1 ) );

			for ( let i = 0; i < vertexCount; i ++ ) {

				index[ i ] = i;

			}

		}

	}

	// Computes the set of { offset, count } ranges which need independent BVH roots. Each
	// region in the geometry index that belongs to a different set of material groups requires
	// a separate BVH root, so that triangles indices belonging to one group never get swapped
	// with triangle indices belongs to another group. For example, if the groups were like this:
	//
	// [-------------------------------------------------------------]
	// |__________________|
	//   g0 = [0, 20]  |______________________||_____________________|
	//                      g1 = [16, 40]           g2 = [41, 60]
	//
	// we would need four BVH roots: [0, 15], [16, 20], [21, 40], [41, 60].
	function getFullGeometryRange( geo ) {

		const triCount = getTriCount( geo );
		const drawRange = geo.drawRange;
		const start = drawRange.start / 3;
		const end = ( drawRange.start + drawRange.count ) / 3;

		const offset = Math.max( 0, start );
		const count = Math.min( triCount, end ) - offset;
		return [ {
			offset: Math.floor( offset ),
			count: Math.floor( count ),
		} ];

	}

	function getRootIndexRanges( geo ) {

		if ( ! geo.groups || ! geo.groups.length ) {

			return getFullGeometryRange( geo );

		}

		const ranges = [];
		const rangeBoundaries = new Set();

		const drawRange = geo.drawRange;
		const drawRangeStart = drawRange.start / 3;
		const drawRangeEnd = ( drawRange.start + drawRange.count ) / 3;
		for ( const group of geo.groups ) {

			const groupStart = group.start / 3;
			const groupEnd = ( group.start + group.count ) / 3;
			rangeBoundaries.add( Math.max( drawRangeStart, groupStart ) );
			rangeBoundaries.add( Math.min( drawRangeEnd, groupEnd ) );

		}


		// note that if you don't pass in a comparator, it sorts them lexicographically as strings :-(
		const sortedBoundaries = Array.from( rangeBoundaries.values() ).sort( ( a, b ) => a - b );
		for ( let i = 0; i < sortedBoundaries.length - 1; i ++ ) {

			const start = sortedBoundaries[ i ];
			const end = sortedBoundaries[ i + 1 ];

			ranges.push( {
				offset: Math.floor( start ),
				count: Math.floor( end - start ),
			} );

		}

		return ranges;

	}

	function hasGroupGaps( geometry ) {

		if ( geometry.groups.length === 0 ) {

			return false;

		}

		const vertexCount = getTriCount( geometry );
		const groups = getRootIndexRanges( geometry )
			.sort( ( a, b ) => a.offset - b.offset );

		const finalGroup = groups[ groups.length - 1 ];
		finalGroup.count = Math.min( vertexCount - finalGroup.offset, finalGroup.count );

		let total = 0;
		groups.forEach( ( { count } ) => total += count );
		return vertexCount !== total;

	}

	function arrayToBox( nodeIndex32, array, target ) {

		target.min.x = array[ nodeIndex32 ];
		target.min.y = array[ nodeIndex32 + 1 ];
		target.min.z = array[ nodeIndex32 + 2 ];

		target.max.x = array[ nodeIndex32 + 3 ];
		target.max.y = array[ nodeIndex32 + 4 ];
		target.max.z = array[ nodeIndex32 + 5 ];

		return target;

	}

	function makeEmptyBounds( target ) {

		target[ 0 ] = target[ 1 ] = target[ 2 ] = Infinity;
		target[ 3 ] = target[ 4 ] = target[ 5 ] = - Infinity;

	}

	function getLongestEdgeIndex( bounds ) {

		let splitDimIdx = - 1;
		let splitDist = - Infinity;

		for ( let i = 0; i < 3; i ++ ) {

			const dist = bounds[ i + 3 ] - bounds[ i ];
			if ( dist > splitDist ) {

				splitDist = dist;
				splitDimIdx = i;

			}

		}

		return splitDimIdx;

	}

	// copies bounds a into bounds b
	function copyBounds( source, target ) {

		target.set( source );

	}

	// sets bounds target to the union of bounds a and b
	function unionBounds( a, b, target ) {

		let aVal, bVal;
		for ( let d = 0; d < 3; d ++ ) {

			const d3 = d + 3;

			// set the minimum values
			aVal = a[ d ];
			bVal = b[ d ];
			target[ d ] = aVal < bVal ? aVal : bVal;

			// set the max values
			aVal = a[ d3 ];
			bVal = b[ d3 ];
			target[ d3 ] = aVal > bVal ? aVal : bVal;

		}

	}

	// expands the given bounds by the provided triangle bounds
	function expandByTriangleBounds( startIndex, triangleBounds, bounds ) {

		for ( let d = 0; d < 3; d ++ ) {

			const tCenter = triangleBounds[ startIndex + 2 * d ];
			const tHalf = triangleBounds[ startIndex + 2 * d + 1 ];

			const tMin = tCenter - tHalf;
			const tMax = tCenter + tHalf;

			if ( tMin < bounds[ d ] ) {

				bounds[ d ] = tMin;

			}

			if ( tMax > bounds[ d + 3 ] ) {

				bounds[ d + 3 ] = tMax;

			}

		}

	}

	// compute bounds surface area
	function computeSurfaceArea( bounds ) {

		const d0 = bounds[ 3 ] - bounds[ 0 ];
		const d1 = bounds[ 4 ] - bounds[ 1 ];
		const d2 = bounds[ 5 ] - bounds[ 2 ];

		return 2 * ( d0 * d1 + d1 * d2 + d2 * d0 );

	}

	// computes the union of the bounds of all of the given triangles and puts the resulting box in target. If
	// centroidTarget is provided then a bounding box is computed for the centroids of the triangles, as well.
	// These are computed together to avoid redundant accesses to bounds array.
	function getBounds( triangleBounds, offset, count, target, centroidTarget = null ) {

		let minx = Infinity;
		let miny = Infinity;
		let minz = Infinity;
		let maxx = - Infinity;
		let maxy = - Infinity;
		let maxz = - Infinity;

		let cminx = Infinity;
		let cminy = Infinity;
		let cminz = Infinity;
		let cmaxx = - Infinity;
		let cmaxy = - Infinity;
		let cmaxz = - Infinity;

		const includeCentroid = centroidTarget !== null;
		for ( let i = offset * 6, end = ( offset + count ) * 6; i < end; i += 6 ) {

			const cx = triangleBounds[ i + 0 ];
			const hx = triangleBounds[ i + 1 ];
			const lx = cx - hx;
			const rx = cx + hx;
			if ( lx < minx ) minx = lx;
			if ( rx > maxx ) maxx = rx;
			if ( includeCentroid && cx < cminx ) cminx = cx;
			if ( includeCentroid && cx > cmaxx ) cmaxx = cx;

			const cy = triangleBounds[ i + 2 ];
			const hy = triangleBounds[ i + 3 ];
			const ly = cy - hy;
			const ry = cy + hy;
			if ( ly < miny ) miny = ly;
			if ( ry > maxy ) maxy = ry;
			if ( includeCentroid && cy < cminy ) cminy = cy;
			if ( includeCentroid && cy > cmaxy ) cmaxy = cy;

			const cz = triangleBounds[ i + 4 ];
			const hz = triangleBounds[ i + 5 ];
			const lz = cz - hz;
			const rz = cz + hz;
			if ( lz < minz ) minz = lz;
			if ( rz > maxz ) maxz = rz;
			if ( includeCentroid && cz < cminz ) cminz = cz;
			if ( includeCentroid && cz > cmaxz ) cmaxz = cz;

		}

		target[ 0 ] = minx;
		target[ 1 ] = miny;
		target[ 2 ] = minz;

		target[ 3 ] = maxx;
		target[ 4 ] = maxy;
		target[ 5 ] = maxz;

		if ( includeCentroid ) {

			centroidTarget[ 0 ] = cminx;
			centroidTarget[ 1 ] = cminy;
			centroidTarget[ 2 ] = cminz;

			centroidTarget[ 3 ] = cmaxx;
			centroidTarget[ 4 ] = cmaxy;
			centroidTarget[ 5 ] = cmaxz;

		}

	}

	// A stand alone function for retrieving the centroid bounds.
	function getCentroidBounds( triangleBounds, offset, count, centroidTarget ) {

		let cminx = Infinity;
		let cminy = Infinity;
		let cminz = Infinity;
		let cmaxx = - Infinity;
		let cmaxy = - Infinity;
		let cmaxz = - Infinity;

		for ( let i = offset * 6, end = ( offset + count ) * 6; i < end; i += 6 ) {

			const cx = triangleBounds[ i + 0 ];
			if ( cx < cminx ) cminx = cx;
			if ( cx > cmaxx ) cmaxx = cx;

			const cy = triangleBounds[ i + 2 ];
			if ( cy < cminy ) cminy = cy;
			if ( cy > cmaxy ) cmaxy = cy;

			const cz = triangleBounds[ i + 4 ];
			if ( cz < cminz ) cminz = cz;
			if ( cz > cmaxz ) cmaxz = cz;

		}

		centroidTarget[ 0 ] = cminx;
		centroidTarget[ 1 ] = cminy;
		centroidTarget[ 2 ] = cminz;

		centroidTarget[ 3 ] = cmaxx;
		centroidTarget[ 4 ] = cmaxy;
		centroidTarget[ 5 ] = cmaxz;

	}


	// precomputes the bounding box for each triangle; required for quickly calculating tree splits.
	// result is an array of size tris.length * 6 where triangle i maps to a
	// [x_center, x_delta, y_center, y_delta, z_center, z_delta] tuple starting at index i * 6,
	// representing the center and half-extent in each dimension of triangle i
	function computeTriangleBounds( geo, fullBounds ) {

		// clear the bounds to empty
		makeEmptyBounds( fullBounds );

		const posAttr = geo.attributes.position;
		const index = geo.index ? geo.index.array : null;
		const triCount = getTriCount( geo );
		const triangleBounds = new Float32Array( triCount * 6 );
		const normalized = posAttr.normalized;

		// used for non-normalized positions
		const posArr = posAttr.array;

		// support for an interleaved position buffer
		const bufferOffset = posAttr.offset || 0;
		let stride = 3;
		if ( posAttr.isInterleavedBufferAttribute ) {

			stride = posAttr.data.stride;

		}

		// used for normalized positions
		const getters = [ 'getX', 'getY', 'getZ' ];

		for ( let tri = 0; tri < triCount; tri ++ ) {

			const tri3 = tri * 3;
			const tri6 = tri * 6;

			let ai = tri3 + 0;
			let bi = tri3 + 1;
			let ci = tri3 + 2;

			if ( index ) {

				ai = index[ ai ];
				bi = index[ bi ];
				ci = index[ ci ];

			}

			// we add the stride and offset here since we access the array directly
			// below for the sake of performance
			if ( ! normalized ) {

				ai = ai * stride + bufferOffset;
				bi = bi * stride + bufferOffset;
				ci = ci * stride + bufferOffset;

			}

			for ( let el = 0; el < 3; el ++ ) {

				let a, b, c;

				if ( normalized ) {

					a = posAttr[ getters[ el ] ]( ai );
					b = posAttr[ getters[ el ] ]( bi );
					c = posAttr[ getters[ el ] ]( ci );

				} else {

					a = posArr[ ai + el ];
					b = posArr[ bi + el ];
					c = posArr[ ci + el ];

				}

				let min = a;
				if ( b < min ) min = b;
				if ( c < min ) min = c;

				let max = a;
				if ( b > max ) max = b;
				if ( c > max ) max = c;

				// Increase the bounds size by float32 epsilon to avoid precision errors when
				// converting to 32 bit float. Scale the epsilon by the size of the numbers being
				// worked with.
				const halfExtents = ( max - min ) / 2;
				const el2 = el * 2;
				triangleBounds[ tri6 + el2 + 0 ] = min + halfExtents;
				triangleBounds[ tri6 + el2 + 1 ] = halfExtents + ( Math.abs( min ) + halfExtents ) * FLOAT32_EPSILON;

				if ( min < fullBounds[ el ] ) fullBounds[ el ] = min;
				if ( max > fullBounds[ el + 3 ] ) fullBounds[ el + 3 ] = max;

			}

		}

		return triangleBounds;

	}

	const BIN_COUNT = 32;
	const binsSort = ( a, b ) => a.candidate - b.candidate;
	const sahBins = new Array( BIN_COUNT ).fill().map( () => {

		return {

			count: 0,
			bounds: new Float32Array( 6 ),
			rightCacheBounds: new Float32Array( 6 ),
			leftCacheBounds: new Float32Array( 6 ),
			candidate: 0,

		};

	} );
	const leftBounds = new Float32Array( 6 );

	function getOptimalSplit( nodeBoundingData, centroidBoundingData, triangleBounds, offset, count, strategy ) {

		let axis = - 1;
		let pos = 0;

		// Center
		if ( strategy === CENTER ) {

			axis = getLongestEdgeIndex( centroidBoundingData );
			if ( axis !== - 1 ) {

				pos = ( centroidBoundingData[ axis ] + centroidBoundingData[ axis + 3 ] ) / 2;

			}

		} else if ( strategy === AVERAGE ) {

			axis = getLongestEdgeIndex( nodeBoundingData );
			if ( axis !== - 1 ) {

				pos = getAverage( triangleBounds, offset, count, axis );

			}

		} else if ( strategy === SAH ) {

			const rootSurfaceArea = computeSurfaceArea( nodeBoundingData );
			let bestCost = TRIANGLE_INTERSECT_COST * count;

			// iterate over all axes
			const cStart = offset * 6;
			const cEnd = ( offset + count ) * 6;
			for ( let a = 0; a < 3; a ++ ) {

				const axisLeft = centroidBoundingData[ a ];
				const axisRight = centroidBoundingData[ a + 3 ];
				const axisLength = axisRight - axisLeft;
				const binWidth = axisLength / BIN_COUNT;

				// If we have fewer triangles than we're planning to split then just check all
				// the triangle positions because it will be faster.
				if ( count < BIN_COUNT / 4 ) {

					// initialize the bin candidates
					const truncatedBins = [ ...sahBins ];
					truncatedBins.length = count;

					// set the candidates
					let b = 0;
					for ( let c = cStart; c < cEnd; c += 6, b ++ ) {

						const bin = truncatedBins[ b ];
						bin.candidate = triangleBounds[ c + 2 * a ];
						bin.count = 0;

						const {
							bounds,
							leftCacheBounds,
							rightCacheBounds,
						} = bin;
						for ( let d = 0; d < 3; d ++ ) {

							rightCacheBounds[ d ] = Infinity;
							rightCacheBounds[ d + 3 ] = - Infinity;

							leftCacheBounds[ d ] = Infinity;
							leftCacheBounds[ d + 3 ] = - Infinity;

							bounds[ d ] = Infinity;
							bounds[ d + 3 ] = - Infinity;

						}

						expandByTriangleBounds( c, triangleBounds, bounds );

					}

					truncatedBins.sort( binsSort );

					// remove redundant splits
					let splitCount = count;
					for ( let bi = 0; bi < splitCount; bi ++ ) {

						const bin = truncatedBins[ bi ];
						while ( bi + 1 < splitCount && truncatedBins[ bi + 1 ].candidate === bin.candidate ) {

							truncatedBins.splice( bi + 1, 1 );
							splitCount --;

						}

					}

					// find the appropriate bin for each triangle and expand the bounds.
					for ( let c = cStart; c < cEnd; c += 6 ) {

						const center = triangleBounds[ c + 2 * a ];
						for ( let bi = 0; bi < splitCount; bi ++ ) {

							const bin = truncatedBins[ bi ];
							if ( center >= bin.candidate ) {

								expandByTriangleBounds( c, triangleBounds, bin.rightCacheBounds );

							} else {

								expandByTriangleBounds( c, triangleBounds, bin.leftCacheBounds );
								bin.count ++;

							}

						}

					}

					// expand all the bounds
					for ( let bi = 0; bi < splitCount; bi ++ ) {

						const bin = truncatedBins[ bi ];
						const leftCount = bin.count;
						const rightCount = count - bin.count;

						// check the cost of this split
						const leftBounds = bin.leftCacheBounds;
						const rightBounds = bin.rightCacheBounds;

						let leftProb = 0;
						if ( leftCount !== 0 ) {

							leftProb = computeSurfaceArea( leftBounds ) / rootSurfaceArea;

						}

						let rightProb = 0;
						if ( rightCount !== 0 ) {

							rightProb = computeSurfaceArea( rightBounds ) / rootSurfaceArea;

						}

						const cost = TRAVERSAL_COST + TRIANGLE_INTERSECT_COST * (
							leftProb * leftCount + rightProb * rightCount
						);

						if ( cost < bestCost ) {

							axis = a;
							bestCost = cost;
							pos = bin.candidate;

						}

					}

				} else {

					// reset the bins
					for ( let i = 0; i < BIN_COUNT; i ++ ) {

						const bin = sahBins[ i ];
						bin.count = 0;
						bin.candidate = axisLeft + binWidth + i * binWidth;

						const bounds = bin.bounds;
						for ( let d = 0; d < 3; d ++ ) {

							bounds[ d ] = Infinity;
							bounds[ d + 3 ] = - Infinity;

						}

					}

					// iterate over all center positions
					for ( let c = cStart; c < cEnd; c += 6 ) {

						const triCenter = triangleBounds[ c + 2 * a ];
						const relativeCenter = triCenter - axisLeft;

						// in the partition function if the centroid lies on the split plane then it is
						// considered to be on the right side of the split
						let binIndex = ~ ~ ( relativeCenter / binWidth );
						if ( binIndex >= BIN_COUNT ) binIndex = BIN_COUNT - 1;

						const bin = sahBins[ binIndex ];
						bin.count ++;

						expandByTriangleBounds( c, triangleBounds, bin.bounds );

					}

					// cache the unioned bounds from right to left so we don't have to regenerate them each time
					const lastBin = sahBins[ BIN_COUNT - 1 ];
					copyBounds( lastBin.bounds, lastBin.rightCacheBounds );
					for ( let i = BIN_COUNT - 2; i >= 0; i -- ) {

						const bin = sahBins[ i ];
						const nextBin = sahBins[ i + 1 ];
						unionBounds( bin.bounds, nextBin.rightCacheBounds, bin.rightCacheBounds );

					}

					let leftCount = 0;
					for ( let i = 0; i < BIN_COUNT - 1; i ++ ) {

						const bin = sahBins[ i ];
						const binCount = bin.count;
						const bounds = bin.bounds;

						const nextBin = sahBins[ i + 1 ];
						const rightBounds = nextBin.rightCacheBounds;

						// don't do anything with the bounds if the new bounds have no triangles
						if ( binCount !== 0 ) {

							if ( leftCount === 0 ) {

								copyBounds( bounds, leftBounds );

							} else {

								unionBounds( bounds, leftBounds, leftBounds );

							}

						}

						leftCount += binCount;

						// check the cost of this split
						let leftProb = 0;
						let rightProb = 0;

						if ( leftCount !== 0 ) {

							leftProb = computeSurfaceArea( leftBounds ) / rootSurfaceArea;

						}

						const rightCount = count - leftCount;
						if ( rightCount !== 0 ) {

							rightProb = computeSurfaceArea( rightBounds ) / rootSurfaceArea;

						}

						const cost = TRAVERSAL_COST + TRIANGLE_INTERSECT_COST * (
							leftProb * leftCount + rightProb * rightCount
						);

						if ( cost < bestCost ) {

							axis = a;
							bestCost = cost;
							pos = bin.candidate;

						}

					}

				}

			}

		} else {

			console.warn( `MeshBVH: Invalid build strategy value ${ strategy } used.` );

		}

		return { axis, pos };

	}

	// returns the average coordinate on the specified axis of the all the provided triangles
	function getAverage( triangleBounds, offset, count, axis ) {

		let avg = 0;
		for ( let i = offset, end = offset + count; i < end; i ++ ) {

			avg += triangleBounds[ i * 6 + axis * 2 ];

		}

		return avg / count;

	}

	class MeshBVHNode {

		constructor() {

			// internal nodes have boundingData, left, right, and splitAxis
			// leaf nodes have offset and count (referring to primitives in the mesh geometry)

		}

	}

	/********************************************************/
	/* This file is generated from "sortUtils.template.js". */
	/********************************************************/
	// reorders `tris` such that for `count` elements after `offset`, elements on the left side of the split
	// will be on the left and elements on the right side of the split will be on the right. returns the index
	// of the first element on the right side, or offset + count if there are no elements on the right side.
	function partition( indirectBuffer, index, triangleBounds, offset, count, split ) {

		let left = offset;
		let right = offset + count - 1;
		const pos = split.pos;
		const axisOffset = split.axis * 2;

		// hoare partitioning, see e.g. https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme
		while ( true ) {

			while ( left <= right && triangleBounds[ left * 6 + axisOffset ] < pos ) {

				left ++;

			}

			// if a triangle center lies on the partition plane it is considered to be on the right side
			while ( left <= right && triangleBounds[ right * 6 + axisOffset ] >= pos ) {

				right --;

			}

			if ( left < right ) {

				// we need to swap all of the information associated with the triangles at index
				// left and right; that's the verts in the geometry index, the bounds,
				// and perhaps the SAH planes

				for ( let i = 0; i < 3; i ++ ) {

					let t0 = index[ left * 3 + i ];
					index[ left * 3 + i ] = index[ right * 3 + i ];
					index[ right * 3 + i ] = t0;

				}


				// swap bounds
				for ( let i = 0; i < 6; i ++ ) {

					let tb = triangleBounds[ left * 6 + i ];
					triangleBounds[ left * 6 + i ] = triangleBounds[ right * 6 + i ];
					triangleBounds[ right * 6 + i ] = tb;

				}

				left ++;
				right --;

			} else {

				return left;

			}

		}

	}

	/********************************************************/
	/* This file is generated from "sortUtils.template.js". */
	/********************************************************/
	// reorders `tris` such that for `count` elements after `offset`, elements on the left side of the split
	// will be on the left and elements on the right side of the split will be on the right. returns the index
	// of the first element on the right side, or offset + count if there are no elements on the right side.
	function partition_indirect( indirectBuffer, index, triangleBounds, offset, count, split ) {

		let left = offset;
		let right = offset + count - 1;
		const pos = split.pos;
		const axisOffset = split.axis * 2;

		// hoare partitioning, see e.g. https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme
		while ( true ) {

			while ( left <= right && triangleBounds[ left * 6 + axisOffset ] < pos ) {

				left ++;

			}

			// if a triangle center lies on the partition plane it is considered to be on the right side
			while ( left <= right && triangleBounds[ right * 6 + axisOffset ] >= pos ) {

				right --;

			}

			if ( left < right ) {

				// we need to swap all of the information associated with the triangles at index
				// left and right; that's the verts in the geometry index, the bounds,
				// and perhaps the SAH planes
				let t = indirectBuffer[ left ];
				indirectBuffer[ left ] = indirectBuffer[ right ];
				indirectBuffer[ right ] = t;


				// swap bounds
				for ( let i = 0; i < 6; i ++ ) {

					let tb = triangleBounds[ left * 6 + i ];
					triangleBounds[ left * 6 + i ] = triangleBounds[ right * 6 + i ];
					triangleBounds[ right * 6 + i ] = tb;

				}

				left ++;
				right --;

			} else {

				return left;

			}

		}

	}

	function generateIndirectBuffer( geometry, useSharedArrayBuffer ) {

		const triCount = ( geometry.index ? geometry.index.count : geometry.attributes.position.count ) / 3;
		const useUint32 = triCount > 2 ** 16;
		const byteCount = useUint32 ? 4 : 2;

		const buffer = useSharedArrayBuffer ? new SharedArrayBuffer( triCount * byteCount ) : new ArrayBuffer( triCount * byteCount );
		const indirectBuffer = useUint32 ? new Uint32Array( buffer ) : new Uint16Array( buffer );
		for ( let i = 0, l = indirectBuffer.length; i < l; i ++ ) {

			indirectBuffer[ i ] = i;

		}

		return indirectBuffer;

	}

	function buildTree( bvh, options ) {

		// Compute the full bounds of the geometry at the same time as triangle bounds because
		// we'll need it for the root bounds in the case with no groups and it should be fast here.
		// We can't use the geometry bounding box if it's available because it may be out of date.
		const geometry = bvh.geometry;
		const indexArray = geometry.index ? geometry.index.array : null;
		const maxDepth = options.maxDepth;
		const verbose = options.verbose;
		const maxLeafTris = options.maxLeafTris;
		const strategy = options.strategy;
		const onProgress = options.onProgress;
		const totalTriangles = getTriCount( geometry );
		const indirectBuffer = bvh._indirectBuffer;
		let reachedMaxDepth = false;

		const fullBounds = new Float32Array( 6 );
		const cacheCentroidBoundingData = new Float32Array( 6 );
		const triangleBounds = computeTriangleBounds( geometry, fullBounds );
		const partionFunc = options.indirect ? partition_indirect : partition;

		const roots = [];
		const ranges = options.indirect ? getFullGeometryRange( geometry ) : getRootIndexRanges( geometry );

		if ( ranges.length === 1 ) {

			const range = ranges[ 0 ];
			const root = new MeshBVHNode();
			root.boundingData = fullBounds;
			getCentroidBounds( triangleBounds, range.offset, range.count, cacheCentroidBoundingData );

			splitNode( root, range.offset, range.count, cacheCentroidBoundingData );
			roots.push( root );

		} else {

			for ( let range of ranges ) {

				const root = new MeshBVHNode();
				root.boundingData = new Float32Array( 6 );
				getBounds( triangleBounds, range.offset, range.count, root.boundingData, cacheCentroidBoundingData );

				splitNode( root, range.offset, range.count, cacheCentroidBoundingData );
				roots.push( root );

			}

		}

		return roots;

		function triggerProgress( trianglesProcessed ) {

			if ( onProgress ) {

				onProgress( trianglesProcessed / totalTriangles );

			}

		}

		// either recursively splits the given node, creating left and right subtrees for it, or makes it a leaf node,
		// recording the offset and count of its triangles and writing them into the reordered geometry index.
		function splitNode( node, offset, count, centroidBoundingData = null, depth = 0 ) {

			if ( ! reachedMaxDepth && depth >= maxDepth ) {

				reachedMaxDepth = true;
				if ( verbose ) {

					console.warn( `MeshBVH: Max depth of ${ maxDepth } reached when generating BVH. Consider increasing maxDepth.` );
					console.warn( geometry );

				}

			}

			// early out if we've met our capacity
			if ( count <= maxLeafTris || depth >= maxDepth ) {

				triggerProgress( offset + count );
				node.offset = offset;
				node.count = count;
				return node;

			}

			// Find where to split the volume
			const split = getOptimalSplit( node.boundingData, centroidBoundingData, triangleBounds, offset, count, strategy );
			if ( split.axis === - 1 ) {

				triggerProgress( offset + count );
				node.offset = offset;
				node.count = count;
				return node;

			}

			const splitOffset = partionFunc( indirectBuffer, indexArray, triangleBounds, offset, count, split );

			// create the two new child nodes
			if ( splitOffset === offset || splitOffset === offset + count ) {

				triggerProgress( offset + count );
				node.offset = offset;
				node.count = count;

			} else {

				node.splitAxis = split.axis;

				// create the left child and compute its bounding box
				const left = new MeshBVHNode();
				const lstart = offset;
				const lcount = splitOffset - offset;
				node.left = left;
				left.boundingData = new Float32Array( 6 );

				getBounds( triangleBounds, lstart, lcount, left.boundingData, cacheCentroidBoundingData );
				splitNode( left, lstart, lcount, cacheCentroidBoundingData, depth + 1 );

				// repeat for right
				const right = new MeshBVHNode();
				const rstart = splitOffset;
				const rcount = count - lcount;
				node.right = right;
				right.boundingData = new Float32Array( 6 );

				getBounds( triangleBounds, rstart, rcount, right.boundingData, cacheCentroidBoundingData );
				splitNode( right, rstart, rcount, cacheCentroidBoundingData, depth + 1 );

			}

			return node;

		}

	}

	function buildPackedTree( bvh, options ) {

		const geometry = bvh.geometry;
		if ( options.indirect ) {

			bvh._indirectBuffer = generateIndirectBuffer( geometry, options.useSharedArrayBuffer );

			if ( hasGroupGaps( geometry ) && ! options.verbose ) {

				console.warn(
					'MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. ' +
					'BVH may incorrectly report intersections on unrendered portions of the geometry.'
				);

			}

		}

		if ( ! bvh._indirectBuffer ) {

			ensureIndex( geometry, options );

		}

		// boundingData  				: 6 float32
		// right / offset 				: 1 uint32
		// splitAxis / isLeaf + count 	: 1 uint32 / 2 uint16
		const roots = buildTree( bvh, options );

		let float32Array;
		let uint32Array;
		let uint16Array;
		const packedRoots = [];
		const BufferConstructor = options.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;
		for ( let i = 0; i < roots.length; i ++ ) {

			const root = roots[ i ];
			let nodeCount = countNodes( root );

			const buffer = new BufferConstructor( BYTES_PER_NODE * nodeCount );
			float32Array = new Float32Array( buffer );
			uint32Array = new Uint32Array( buffer );
			uint16Array = new Uint16Array( buffer );
			populateBuffer( 0, root );
			packedRoots.push( buffer );

		}

		bvh._roots = packedRoots;
		return;

		function countNodes( node ) {

			if ( node.count ) {

				return 1;

			} else {

				return 1 + countNodes( node.left ) + countNodes( node.right );

			}

		}

		function populateBuffer( byteOffset, node ) {

			const stride4Offset = byteOffset / 4;
			const stride2Offset = byteOffset / 2;
			const isLeaf = ! ! node.count;
			const boundingData = node.boundingData;
			for ( let i = 0; i < 6; i ++ ) {

				float32Array[ stride4Offset + i ] = boundingData[ i ];

			}

			if ( isLeaf ) {

				const offset = node.offset;
				const count = node.count;
				uint32Array[ stride4Offset + 6 ] = offset;
				uint16Array[ stride2Offset + 14 ] = count;
				uint16Array[ stride2Offset + 15 ] = IS_LEAFNODE_FLAG;
				return byteOffset + BYTES_PER_NODE;

			} else {

				const left = node.left;
				const right = node.right;
				const splitAxis = node.splitAxis;

				let nextUnusedPointer;
				nextUnusedPointer = populateBuffer( byteOffset + BYTES_PER_NODE, left );

				if ( ( nextUnusedPointer / 4 ) > Math.pow( 2, 32 ) ) {

					throw new Error( 'MeshBVH: Cannot store child pointer greater than 32 bits.' );

				}

				uint32Array[ stride4Offset + 6 ] = nextUnusedPointer / 4;
				nextUnusedPointer = populateBuffer( nextUnusedPointer, right );

				uint32Array[ stride4Offset + 7 ] = splitAxis;
				return nextUnusedPointer;

			}

		}

	}

	class SeparatingAxisBounds {

		constructor() {

			this.min = Infinity;
			this.max = - Infinity;

		}

		setFromPointsField( points, field ) {

			let min = Infinity;
			let max = - Infinity;
			for ( let i = 0, l = points.length; i < l; i ++ ) {

				const p = points[ i ];
				const val = p[ field ];
				min = val < min ? val : min;
				max = val > max ? val : max;

			}

			this.min = min;
			this.max = max;

		}

		setFromPoints( axis, points ) {

			let min = Infinity;
			let max = - Infinity;
			for ( let i = 0, l = points.length; i < l; i ++ ) {

				const p = points[ i ];
				const val = axis.dot( p );
				min = val < min ? val : min;
				max = val > max ? val : max;

			}

			this.min = min;
			this.max = max;

		}

		isSeparated( other ) {

			return this.min > other.max || other.min > this.max;

		}

	}

	SeparatingAxisBounds.prototype.setFromBox = ( function () {

		const p = new three.Vector3();
		return function setFromBox( axis, box ) {

			const boxMin = box.min;
			const boxMax = box.max;
			let min = Infinity;
			let max = - Infinity;
			for ( let x = 0; x <= 1; x ++ ) {

				for ( let y = 0; y <= 1; y ++ ) {

					for ( let z = 0; z <= 1; z ++ ) {

						p.x = boxMin.x * x + boxMax.x * ( 1 - x );
						p.y = boxMin.y * y + boxMax.y * ( 1 - y );
						p.z = boxMin.z * z + boxMax.z * ( 1 - z );

						const val = axis.dot( p );
						min = Math.min( val, min );
						max = Math.max( val, max );

					}

				}

			}

			this.min = min;
			this.max = max;

		};

	} )();

	const areIntersecting = ( function () {

		const cacheSatBounds = new SeparatingAxisBounds();
		return function areIntersecting( shape1, shape2 ) {

			const points1 = shape1.points;
			const satAxes1 = shape1.satAxes;
			const satBounds1 = shape1.satBounds;

			const points2 = shape2.points;
			const satAxes2 = shape2.satAxes;
			const satBounds2 = shape2.satBounds;

			// check axes of the first shape
			for ( let i = 0; i < 3; i ++ ) {

				const sb = satBounds1[ i ];
				const sa = satAxes1[ i ];
				cacheSatBounds.setFromPoints( sa, points2 );
				if ( sb.isSeparated( cacheSatBounds ) ) return false;

			}

			// check axes of the second shape
			for ( let i = 0; i < 3; i ++ ) {

				const sb = satBounds2[ i ];
				const sa = satAxes2[ i ];
				cacheSatBounds.setFromPoints( sa, points1 );
				if ( sb.isSeparated( cacheSatBounds ) ) return false;

			}

		};

	} )();

	const closestPointLineToLine = ( function () {

		// https://github.com/juj/MathGeoLib/blob/master/src/Geometry/Line.cpp#L56
		const dir1 = new three.Vector3();
		const dir2 = new three.Vector3();
		const v02 = new three.Vector3();
		return function closestPointLineToLine( l1, l2, result ) {

			const v0 = l1.start;
			const v10 = dir1;
			const v2 = l2.start;
			const v32 = dir2;

			v02.subVectors( v0, v2 );
			dir1.subVectors( l1.end, l1.start );
			dir2.subVectors( l2.end, l2.start );

			// float d0232 = v02.Dot(v32);
			const d0232 = v02.dot( v32 );

			// float d3210 = v32.Dot(v10);
			const d3210 = v32.dot( v10 );

			// float d3232 = v32.Dot(v32);
			const d3232 = v32.dot( v32 );

			// float d0210 = v02.Dot(v10);
			const d0210 = v02.dot( v10 );

			// float d1010 = v10.Dot(v10);
			const d1010 = v10.dot( v10 );

			// float denom = d1010*d3232 - d3210*d3210;
			const denom = d1010 * d3232 - d3210 * d3210;

			let d, d2;
			if ( denom !== 0 ) {

				d = ( d0232 * d3210 - d0210 * d3232 ) / denom;

			} else {

				d = 0;

			}

			d2 = ( d0232 + d * d3210 ) / d3232;

			result.x = d;
			result.y = d2;

		};

	} )();

	const closestPointsSegmentToSegment = ( function () {

		// https://github.com/juj/MathGeoLib/blob/master/src/Geometry/LineSegment.cpp#L187
		const paramResult = new three.Vector2();
		const temp1 = new three.Vector3();
		const temp2 = new three.Vector3();
		return function closestPointsSegmentToSegment( l1, l2, target1, target2 ) {

			closestPointLineToLine( l1, l2, paramResult );

			let d = paramResult.x;
			let d2 = paramResult.y;
			if ( d >= 0 && d <= 1 && d2 >= 0 && d2 <= 1 ) {

				l1.at( d, target1 );
				l2.at( d2, target2 );

				return;

			} else if ( d >= 0 && d <= 1 ) {

				// Only d2 is out of bounds.
				if ( d2 < 0 ) {

					l2.at( 0, target2 );

				} else {

					l2.at( 1, target2 );

				}

				l1.closestPointToPoint( target2, true, target1 );
				return;

			} else if ( d2 >= 0 && d2 <= 1 ) {

				// Only d is out of bounds.
				if ( d < 0 ) {

					l1.at( 0, target1 );

				} else {

					l1.at( 1, target1 );

				}

				l2.closestPointToPoint( target1, true, target2 );
				return;

			} else {

				// Both u and u2 are out of bounds.
				let p;
				if ( d < 0 ) {

					p = l1.start;

				} else {

					p = l1.end;

				}

				let p2;
				if ( d2 < 0 ) {

					p2 = l2.start;

				} else {

					p2 = l2.end;

				}

				const closestPoint = temp1;
				const closestPoint2 = temp2;
				l1.closestPointToPoint( p2, true, temp1 );
				l2.closestPointToPoint( p, true, temp2 );

				if ( closestPoint.distanceToSquared( p2 ) <= closestPoint2.distanceToSquared( p ) ) {

					target1.copy( closestPoint );
					target2.copy( p2 );
					return;

				} else {

					target1.copy( p );
					target2.copy( closestPoint2 );
					return;

				}

			}

		};

	} )();


	const sphereIntersectTriangle = ( function () {

		// https://stackoverflow.com/questions/34043955/detect-collision-between-sphere-and-triangle-in-three-js
		const closestPointTemp = new three.Vector3();
		const projectedPointTemp = new three.Vector3();
		const planeTemp = new three.Plane();
		const lineTemp = new three.Line3();
		return function sphereIntersectTriangle( sphere, triangle ) {

			const { radius, center } = sphere;
			const { a, b, c } = triangle;

			// phase 1
			lineTemp.start = a;
			lineTemp.end = b;
			const closestPoint1 = lineTemp.closestPointToPoint( center, true, closestPointTemp );
			if ( closestPoint1.distanceTo( center ) <= radius ) return true;

			lineTemp.start = a;
			lineTemp.end = c;
			const closestPoint2 = lineTemp.closestPointToPoint( center, true, closestPointTemp );
			if ( closestPoint2.distanceTo( center ) <= radius ) return true;

			lineTemp.start = b;
			lineTemp.end = c;
			const closestPoint3 = lineTemp.closestPointToPoint( center, true, closestPointTemp );
			if ( closestPoint3.distanceTo( center ) <= radius ) return true;

			// phase 2
			const plane = triangle.getPlane( planeTemp );
			const dp = Math.abs( plane.distanceToPoint( center ) );
			if ( dp <= radius ) {

				const pp = plane.projectPoint( center, projectedPointTemp );
				const cp = triangle.containsPoint( pp );
				if ( cp ) return true;

			}

			return false;

		};

	} )();

	const ZERO_EPSILON = 1e-15;
	function isNearZero( value ) {

		return Math.abs( value ) < ZERO_EPSILON;

	}

	class ExtendedTriangle extends three.Triangle {

		constructor( ...args ) {

			super( ...args );

			this.isExtendedTriangle = true;
			this.satAxes = new Array( 4 ).fill().map( () => new three.Vector3() );
			this.satBounds = new Array( 4 ).fill().map( () => new SeparatingAxisBounds() );
			this.points = [ this.a, this.b, this.c ];
			this.sphere = new three.Sphere();
			this.plane = new three.Plane();
			this.needsUpdate = true;

		}

		intersectsSphere( sphere ) {

			return sphereIntersectTriangle( sphere, this );

		}

		update() {

			const a = this.a;
			const b = this.b;
			const c = this.c;
			const points = this.points;

			const satAxes = this.satAxes;
			const satBounds = this.satBounds;

			const axis0 = satAxes[ 0 ];
			const sab0 = satBounds[ 0 ];
			this.getNormal( axis0 );
			sab0.setFromPoints( axis0, points );

			const axis1 = satAxes[ 1 ];
			const sab1 = satBounds[ 1 ];
			axis1.subVectors( a, b );
			sab1.setFromPoints( axis1, points );

			const axis2 = satAxes[ 2 ];
			const sab2 = satBounds[ 2 ];
			axis2.subVectors( b, c );
			sab2.setFromPoints( axis2, points );

			const axis3 = satAxes[ 3 ];
			const sab3 = satBounds[ 3 ];
			axis3.subVectors( c, a );
			sab3.setFromPoints( axis3, points );

			this.sphere.setFromPoints( this.points );
			this.plane.setFromNormalAndCoplanarPoint( axis0, a );
			this.needsUpdate = false;

		}

	}

	ExtendedTriangle.prototype.closestPointToSegment = ( function () {

		const point1 = new three.Vector3();
		const point2 = new three.Vector3();
		const edge = new three.Line3();

		return function distanceToSegment( segment, target1 = null, target2 = null ) {

			const { start, end } = segment;
			const points = this.points;
			let distSq;
			let closestDistanceSq = Infinity;

			// check the triangle edges
			for ( let i = 0; i < 3; i ++ ) {

				const nexti = ( i + 1 ) % 3;
				edge.start.copy( points[ i ] );
				edge.end.copy( points[ nexti ] );

				closestPointsSegmentToSegment( edge, segment, point1, point2 );

				distSq = point1.distanceToSquared( point2 );
				if ( distSq < closestDistanceSq ) {

					closestDistanceSq = distSq;
					if ( target1 ) target1.copy( point1 );
					if ( target2 ) target2.copy( point2 );

				}

			}

			// check end points
			this.closestPointToPoint( start, point1 );
			distSq = start.distanceToSquared( point1 );
			if ( distSq < closestDistanceSq ) {

				closestDistanceSq = distSq;
				if ( target1 ) target1.copy( point1 );
				if ( target2 ) target2.copy( start );

			}

			this.closestPointToPoint( end, point1 );
			distSq = end.distanceToSquared( point1 );
			if ( distSq < closestDistanceSq ) {

				closestDistanceSq = distSq;
				if ( target1 ) target1.copy( point1 );
				if ( target2 ) target2.copy( end );

			}

			return Math.sqrt( closestDistanceSq );

		};

	} )();

	ExtendedTriangle.prototype.intersectsTriangle = ( function () {

		const saTri2 = new ExtendedTriangle();
		const arr1 = new Array( 3 );
		const arr2 = new Array( 3 );
		const cachedSatBounds = new SeparatingAxisBounds();
		const cachedSatBounds2 = new SeparatingAxisBounds();
		const cachedAxis = new three.Vector3();
		const dir = new three.Vector3();
		const dir1 = new three.Vector3();
		const dir2 = new three.Vector3();
		const tempDir = new three.Vector3();
		const edge = new three.Line3();
		const edge1 = new three.Line3();
		const edge2 = new three.Line3();
		const tempPoint = new three.Vector3();

		function triIntersectPlane( tri, plane, targetEdge ) {

			// find the edge that intersects the other triangle plane
			const points = tri.points;
			let count = 0;
			let startPointIntersection = - 1;
			for ( let i = 0; i < 3; i ++ ) {

				const { start, end } = edge;
				start.copy( points[ i ] );
				end.copy( points[ ( i + 1 ) % 3 ] );
				edge.delta( dir );

				const startIntersects = isNearZero( plane.distanceToPoint( start ) );
				if ( isNearZero( plane.normal.dot( dir ) ) && startIntersects ) {

					// if the edge lies on the plane then take the line
					targetEdge.copy( edge );
					count = 2;
					break;

				}

				// check if the start point is near the plane because "intersectLine" is not robust to that case
				const doesIntersect = plane.intersectLine( edge, tempPoint );
				if ( ! doesIntersect && startIntersects ) {

					tempPoint.copy( start );

				}

				// ignore the end point
				if ( ( doesIntersect || startIntersects ) && ! isNearZero( tempPoint.distanceTo( end ) ) ) {

					if ( count <= 1 ) {

						// assign to the start or end point and save which index was snapped to
						// the start point if necessary
						const point = count === 1 ? targetEdge.start : targetEdge.end;
						point.copy( tempPoint );
						if ( startIntersects ) {

							startPointIntersection = count;

						}

					} else if ( count >= 2 ) {

						// if we're here that means that there must have been one point that had
						// snapped to the start point so replace it here
						const point = startPointIntersection === 1 ? targetEdge.start : targetEdge.end;
						point.copy( tempPoint );
						count = 2;
						break;

					}

					count ++;
					if ( count === 2 && startPointIntersection === - 1 ) {

						break;

					}

				}

			}

			return count;

		}

		// TODO: If the triangles are coplanar and intersecting the target is nonsensical. It should at least
		// be a line contained by both triangles if not a different special case somehow represented in the return result.
		return function intersectsTriangle( other, target = null, suppressLog = false ) {

			if ( this.needsUpdate ) {

				this.update();

			}

			if ( ! other.isExtendedTriangle ) {

				saTri2.copy( other );
				saTri2.update();
				other = saTri2;

			} else if ( other.needsUpdate ) {

				other.update();

			}

			const plane1 = this.plane;
			const plane2 = other.plane;

			if ( Math.abs( plane1.normal.dot( plane2.normal ) ) > 1.0 - 1e-10 ) {

				// perform separating axis intersection test only for coplanar triangles
				const satBounds1 = this.satBounds;
				const satAxes1 = this.satAxes;
				arr2[ 0 ] = other.a;
				arr2[ 1 ] = other.b;
				arr2[ 2 ] = other.c;
				for ( let i = 0; i < 4; i ++ ) {

					const sb = satBounds1[ i ];
					const sa = satAxes1[ i ];
					cachedSatBounds.setFromPoints( sa, arr2 );
					if ( sb.isSeparated( cachedSatBounds ) ) return false;

				}

				const satBounds2 = other.satBounds;
				const satAxes2 = other.satAxes;
				arr1[ 0 ] = this.a;
				arr1[ 1 ] = this.b;
				arr1[ 2 ] = this.c;
				for ( let i = 0; i < 4; i ++ ) {

					const sb = satBounds2[ i ];
					const sa = satAxes2[ i ];
					cachedSatBounds.setFromPoints( sa, arr1 );
					if ( sb.isSeparated( cachedSatBounds ) ) return false;

				}

				// check crossed axes
				for ( let i = 0; i < 4; i ++ ) {

					const sa1 = satAxes1[ i ];
					for ( let i2 = 0; i2 < 4; i2 ++ ) {

						const sa2 = satAxes2[ i2 ];
						cachedAxis.crossVectors( sa1, sa2 );
						cachedSatBounds.setFromPoints( cachedAxis, arr1 );
						cachedSatBounds2.setFromPoints( cachedAxis, arr2 );
						if ( cachedSatBounds.isSeparated( cachedSatBounds2 ) ) return false;

					}

				}

				if ( target ) {

					// TODO find two points that intersect on the edges and make that the result
					if ( ! suppressLog ) {

						console.warn( 'ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.' );

					}

					target.start.set( 0, 0, 0 );
					target.end.set( 0, 0, 0 );

				}

				return true;

			} else {

				// find the edge that intersects the other triangle plane
				const count1 = triIntersectPlane( this, plane2, edge1 );
				if ( count1 === 1 && other.containsPoint( edge1.end ) ) {

					if ( target ) {

						target.start.copy( edge1.end );
						target.end.copy( edge1.end );

					}

					return true;

				} else if ( count1 !== 2 ) {

					return false;

				}

				// find the other triangles edge that intersects this plane
				const count2 = triIntersectPlane( other, plane1, edge2 );
				if ( count2 === 1 && this.containsPoint( edge2.end ) ) {

					if ( target ) {

						target.start.copy( edge2.end );
						target.end.copy( edge2.end );

					}

					return true;

				} else if ( count2 !== 2 ) {

					return false;

				}

				// find swap the second edge so both lines are running the same direction
				edge1.delta( dir1 );
				edge2.delta( dir2 );

				if ( dir1.dot( dir2 ) < 0 ) {

					let tmp = edge2.start;
					edge2.start = edge2.end;
					edge2.end = tmp;

				}

				// check if the edges are overlapping
				const s1 = edge1.start.dot( dir1 );
				const e1 = edge1.end.dot( dir1 );
				const s2 = edge2.start.dot( dir1 );
				const e2 = edge2.end.dot( dir1 );
				const separated1 = e1 < s2;
				const separated2 = s1 < e2;

				if ( s1 !== e2 && s2 !== e1 && separated1 === separated2 ) {

					return false;

				}

				// assign the target output
				if ( target ) {

					tempDir.subVectors( edge1.start, edge2.start );
					if ( tempDir.dot( dir1 ) > 0 ) {

						target.start.copy( edge1.start );

					} else {

						target.start.copy( edge2.start );

					}

					tempDir.subVectors( edge1.end, edge2.end );
					if ( tempDir.dot( dir1 ) < 0 ) {

						target.end.copy( edge1.end );

					} else {

						target.end.copy( edge2.end );

					}

				}

				return true;

			}

		};

	} )();


	ExtendedTriangle.prototype.distanceToPoint = ( function () {

		const target = new three.Vector3();
		return function distanceToPoint( point ) {

			this.closestPointToPoint( point, target );
			return point.distanceTo( target );

		};

	} )();


	ExtendedTriangle.prototype.distanceToTriangle = ( function () {

		const point = new three.Vector3();
		const point2 = new three.Vector3();
		const cornerFields = [ 'a', 'b', 'c' ];
		const line1 = new three.Line3();
		const line2 = new three.Line3();

		return function distanceToTriangle( other, target1 = null, target2 = null ) {

			const lineTarget = target1 || target2 ? line1 : null;
			if ( this.intersectsTriangle( other, lineTarget ) ) {

				if ( target1 || target2 ) {

					if ( target1 ) lineTarget.getCenter( target1 );
					if ( target2 ) lineTarget.getCenter( target2 );

				}

				return 0;

			}

			let closestDistanceSq = Infinity;

			// check all point distances
			for ( let i = 0; i < 3; i ++ ) {

				let dist;
				const field = cornerFields[ i ];
				const otherVec = other[ field ];
				this.closestPointToPoint( otherVec, point );

				dist = otherVec.distanceToSquared( point );

				if ( dist < closestDistanceSq ) {

					closestDistanceSq = dist;
					if ( target1 ) target1.copy( point );
					if ( target2 ) target2.copy( otherVec );

				}


				const thisVec = this[ field ];
				other.closestPointToPoint( thisVec, point );

				dist = thisVec.distanceToSquared( point );

				if ( dist < closestDistanceSq ) {

					closestDistanceSq = dist;
					if ( target1 ) target1.copy( thisVec );
					if ( target2 ) target2.copy( point );

				}

			}

			for ( let i = 0; i < 3; i ++ ) {

				const f11 = cornerFields[ i ];
				const f12 = cornerFields[ ( i + 1 ) % 3 ];
				line1.set( this[ f11 ], this[ f12 ] );
				for ( let i2 = 0; i2 < 3; i2 ++ ) {

					const f21 = cornerFields[ i2 ];
					const f22 = cornerFields[ ( i2 + 1 ) % 3 ];
					line2.set( other[ f21 ], other[ f22 ] );

					closestPointsSegmentToSegment( line1, line2, point, point2 );

					const dist = point.distanceToSquared( point2 );
					if ( dist < closestDistanceSq ) {

						closestDistanceSq = dist;
						if ( target1 ) target1.copy( point );
						if ( target2 ) target2.copy( point2 );

					}

				}

			}

			return Math.sqrt( closestDistanceSq );

		};

	} )();

	class OrientedBox {

		constructor( min, max, matrix ) {

			this.isOrientedBox = true;
			this.min = new three.Vector3();
			this.max = new three.Vector3();
			this.matrix = new three.Matrix4();
			this.invMatrix = new three.Matrix4();
			this.points = new Array( 8 ).fill().map( () => new three.Vector3() );
			this.satAxes = new Array( 3 ).fill().map( () => new three.Vector3() );
			this.satBounds = new Array( 3 ).fill().map( () => new SeparatingAxisBounds() );
			this.alignedSatBounds = new Array( 3 ).fill().map( () => new SeparatingAxisBounds() );
			this.needsUpdate = false;

			if ( min ) this.min.copy( min );
			if ( max ) this.max.copy( max );
			if ( matrix ) this.matrix.copy( matrix );

		}

		set( min, max, matrix ) {

			this.min.copy( min );
			this.max.copy( max );
			this.matrix.copy( matrix );
			this.needsUpdate = true;

		}

		copy( other ) {

			this.min.copy( other.min );
			this.max.copy( other.max );
			this.matrix.copy( other.matrix );
			this.needsUpdate = true;

		}

	}

	OrientedBox.prototype.update = ( function () {

		return function update() {

			const matrix = this.matrix;
			const min = this.min;
			const max = this.max;

			const points = this.points;
			for ( let x = 0; x <= 1; x ++ ) {

				for ( let y = 0; y <= 1; y ++ ) {

					for ( let z = 0; z <= 1; z ++ ) {

						const i = ( ( 1 << 0 ) * x ) | ( ( 1 << 1 ) * y ) | ( ( 1 << 2 ) * z );
						const v = points[ i ];
						v.x = x ? max.x : min.x;
						v.y = y ? max.y : min.y;
						v.z = z ? max.z : min.z;

						v.applyMatrix4( matrix );

					}

				}

			}

			const satBounds = this.satBounds;
			const satAxes = this.satAxes;
			const minVec = points[ 0 ];
			for ( let i = 0; i < 3; i ++ ) {

				const axis = satAxes[ i ];
				const sb = satBounds[ i ];
				const index = 1 << i;
				const pi = points[ index ];

				axis.subVectors( minVec, pi );
				sb.setFromPoints( axis, points );

			}

			const alignedSatBounds = this.alignedSatBounds;
			alignedSatBounds[ 0 ].setFromPointsField( points, 'x' );
			alignedSatBounds[ 1 ].setFromPointsField( points, 'y' );
			alignedSatBounds[ 2 ].setFromPointsField( points, 'z' );

			this.invMatrix.copy( this.matrix ).invert();
			this.needsUpdate = false;

		};

	} )();

	OrientedBox.prototype.intersectsBox = ( function () {

		const aabbBounds = new SeparatingAxisBounds();
		return function intersectsBox( box ) {

			// TODO: should this be doing SAT against the AABB?
			if ( this.needsUpdate ) {

				this.update();

			}

			const min = box.min;
			const max = box.max;
			const satBounds = this.satBounds;
			const satAxes = this.satAxes;
			const alignedSatBounds = this.alignedSatBounds;

			aabbBounds.min = min.x;
			aabbBounds.max = max.x;
			if ( alignedSatBounds[ 0 ].isSeparated( aabbBounds ) ) return false;

			aabbBounds.min = min.y;
			aabbBounds.max = max.y;
			if ( alignedSatBounds[ 1 ].isSeparated( aabbBounds ) ) return false;

			aabbBounds.min = min.z;
			aabbBounds.max = max.z;
			if ( alignedSatBounds[ 2 ].isSeparated( aabbBounds ) ) return false;

			for ( let i = 0; i < 3; i ++ ) {

				const axis = satAxes[ i ];
				const sb = satBounds[ i ];
				aabbBounds.setFromBox( axis, box );
				if ( sb.isSeparated( aabbBounds ) ) return false;

			}

			return true;

		};

	} )();

	OrientedBox.prototype.intersectsTriangle = ( function () {

		const saTri = new ExtendedTriangle();
		const pointsArr = new Array( 3 );
		const cachedSatBounds = new SeparatingAxisBounds();
		const cachedSatBounds2 = new SeparatingAxisBounds();
		const cachedAxis = new three.Vector3();
		return function intersectsTriangle( triangle ) {

			if ( this.needsUpdate ) {

				this.update();

			}

			if ( ! triangle.isExtendedTriangle ) {

				saTri.copy( triangle );
				saTri.update();
				triangle = saTri;

			} else if ( triangle.needsUpdate ) {

				triangle.update();

			}

			const satBounds = this.satBounds;
			const satAxes = this.satAxes;

			pointsArr[ 0 ] = triangle.a;
			pointsArr[ 1 ] = triangle.b;
			pointsArr[ 2 ] = triangle.c;

			for ( let i = 0; i < 3; i ++ ) {

				const sb = satBounds[ i ];
				const sa = satAxes[ i ];
				cachedSatBounds.setFromPoints( sa, pointsArr );
				if ( sb.isSeparated( cachedSatBounds ) ) return false;

			}

			const triSatBounds = triangle.satBounds;
			const triSatAxes = triangle.satAxes;
			const points = this.points;
			for ( let i = 0; i < 3; i ++ ) {

				const sb = triSatBounds[ i ];
				const sa = triSatAxes[ i ];
				cachedSatBounds.setFromPoints( sa, points );
				if ( sb.isSeparated( cachedSatBounds ) ) return false;

			}

			// check crossed axes
			for ( let i = 0; i < 3; i ++ ) {

				const sa1 = satAxes[ i ];
				for ( let i2 = 0; i2 < 4; i2 ++ ) {

					const sa2 = triSatAxes[ i2 ];
					cachedAxis.crossVectors( sa1, sa2 );
					cachedSatBounds.setFromPoints( cachedAxis, pointsArr );
					cachedSatBounds2.setFromPoints( cachedAxis, points );
					if ( cachedSatBounds.isSeparated( cachedSatBounds2 ) ) return false;

				}

			}

			return true;

		};

	} )();

	OrientedBox.prototype.closestPointToPoint = ( function () {

		return function closestPointToPoint( point, target1 ) {

			if ( this.needsUpdate ) {

				this.update();

			}

			target1
				.copy( point )
				.applyMatrix4( this.invMatrix )
				.clamp( this.min, this.max )
				.applyMatrix4( this.matrix );

			return target1;

		};

	} )();

	OrientedBox.prototype.distanceToPoint = ( function () {

		const target = new three.Vector3();
		return function distanceToPoint( point ) {

			this.closestPointToPoint( point, target );
			return point.distanceTo( target );

		};

	} )();

	OrientedBox.prototype.distanceToBox = ( function () {

		const xyzFields = [ 'x', 'y', 'z' ];
		const segments1 = new Array( 12 ).fill().map( () => new three.Line3() );
		const segments2 = new Array( 12 ).fill().map( () => new three.Line3() );

		const point1 = new three.Vector3();
		const point2 = new three.Vector3();

		// early out if we find a value below threshold
		return function distanceToBox( box, threshold = 0, target1 = null, target2 = null ) {

			if ( this.needsUpdate ) {

				this.update();

			}

			if ( this.intersectsBox( box ) ) {

				if ( target1 || target2 ) {

					box.getCenter( point2 );
					this.closestPointToPoint( point2, point1 );
					box.closestPointToPoint( point1, point2 );

					if ( target1 ) target1.copy( point1 );
					if ( target2 ) target2.copy( point2 );

				}

				return 0;

			}

			const threshold2 = threshold * threshold;
			const min = box.min;
			const max = box.max;
			const points = this.points;


			// iterate over every edge and compare distances
			let closestDistanceSq = Infinity;

			// check over all these points
			for ( let i = 0; i < 8; i ++ ) {

				const p = points[ i ];
				point2.copy( p ).clamp( min, max );

				const dist = p.distanceToSquared( point2 );
				if ( dist < closestDistanceSq ) {

					closestDistanceSq = dist;
					if ( target1 ) target1.copy( p );
					if ( target2 ) target2.copy( point2 );

					if ( dist < threshold2 ) return Math.sqrt( dist );

				}

			}

			// generate and check all line segment distances
			let count = 0;
			for ( let i = 0; i < 3; i ++ ) {

				for ( let i1 = 0; i1 <= 1; i1 ++ ) {

					for ( let i2 = 0; i2 <= 1; i2 ++ ) {

						const nextIndex = ( i + 1 ) % 3;
						const nextIndex2 = ( i + 2 ) % 3;

						// get obb line segments
						const index = i1 << nextIndex | i2 << nextIndex2;
						const index2 = 1 << i | i1 << nextIndex | i2 << nextIndex2;
						const p1 = points[ index ];
						const p2 = points[ index2 ];
						const line1 = segments1[ count ];
						line1.set( p1, p2 );


						// get aabb line segments
						const f1 = xyzFields[ i ];
						const f2 = xyzFields[ nextIndex ];
						const f3 = xyzFields[ nextIndex2 ];
						const line2 = segments2[ count ];
						const start = line2.start;
						const end = line2.end;

						start[ f1 ] = min[ f1 ];
						start[ f2 ] = i1 ? min[ f2 ] : max[ f2 ];
						start[ f3 ] = i2 ? min[ f3 ] : max[ f2 ];

						end[ f1 ] = max[ f1 ];
						end[ f2 ] = i1 ? min[ f2 ] : max[ f2 ];
						end[ f3 ] = i2 ? min[ f3 ] : max[ f2 ];

						count ++;

					}

				}

			}

			// check all the other boxes point
			for ( let x = 0; x <= 1; x ++ ) {

				for ( let y = 0; y <= 1; y ++ ) {

					for ( let z = 0; z <= 1; z ++ ) {

						point2.x = x ? max.x : min.x;
						point2.y = y ? max.y : min.y;
						point2.z = z ? max.z : min.z;

						this.closestPointToPoint( point2, point1 );
						const dist = point2.distanceToSquared( point1 );
						if ( dist < closestDistanceSq ) {

							closestDistanceSq = dist;
							if ( target1 ) target1.copy( point1 );
							if ( target2 ) target2.copy( point2 );

							if ( dist < threshold2 ) return Math.sqrt( dist );

						}

					}

				}

			}

			for ( let i = 0; i < 12; i ++ ) {

				const l1 = segments1[ i ];
				for ( let i2 = 0; i2 < 12; i2 ++ ) {

					const l2 = segments2[ i2 ];
					closestPointsSegmentToSegment( l1, l2, point1, point2 );
					const dist = point1.distanceToSquared( point2 );
					if ( dist < closestDistanceSq ) {

						closestDistanceSq = dist;
						if ( target1 ) target1.copy( point1 );
						if ( target2 ) target2.copy( point2 );

						if ( dist < threshold2 ) return Math.sqrt( dist );

					}

				}

			}

			return Math.sqrt( closestDistanceSq );

		};

	} )();

	class PrimitivePool {

		constructor( getNewPrimitive ) {

			this._getNewPrimitive = getNewPrimitive;
			this._primitives = [];

		}

		getPrimitive() {

			const primitives = this._primitives;
			if ( primitives.length === 0 ) {

				return this._getNewPrimitive();

			} else {

				return primitives.pop();

			}

		}

		releasePrimitive( primitive ) {

			this._primitives.push( primitive );

		}

	}

	class ExtendedTrianglePoolBase extends PrimitivePool {

		constructor() {

			super( () => new ExtendedTriangle() );

		}

	}

	const ExtendedTrianglePool = /* @__PURE__ */ new ExtendedTrianglePoolBase();

	function IS_LEAF( n16, uint16Array ) {

		return uint16Array[ n16 + 15 ] === 0xFFFF;

	}

	function OFFSET( n32, uint32Array ) {

		return uint32Array[ n32 + 6 ];

	}

	function COUNT( n16, uint16Array ) {

		return uint16Array[ n16 + 14 ];

	}

	function LEFT_NODE( n32 ) {

		return n32 + 8;

	}

	function RIGHT_NODE( n32, uint32Array ) {

		return uint32Array[ n32 + 6 ];

	}

	function SPLIT_AXIS( n32, uint32Array ) {

		return uint32Array[ n32 + 7 ];

	}

	function BOUNDING_DATA_INDEX( n32 ) {

		return n32;

	}

	class _BufferStack {

		constructor() {

			this.float32Array = null;
			this.uint16Array = null;
			this.uint32Array = null;

			const stack = [];
			let prevBuffer = null;
			this.setBuffer = buffer => {

				if ( prevBuffer ) {

					stack.push( prevBuffer );

				}

				prevBuffer = buffer;
				this.float32Array = new Float32Array( buffer );
				this.uint16Array = new Uint16Array( buffer );
				this.uint32Array = new Uint32Array( buffer );

			};

			this.clearBuffer = () => {

				prevBuffer = null;
				this.float32Array = null;
				this.uint16Array = null;
				this.uint32Array = null;

				if ( stack.length !== 0 ) {

					this.setBuffer( stack.pop() );

				}

			};

		}

	}

	const BufferStack = new _BufferStack();

	let _box1$1, _box2$1;
	const boxStack = [];
	const boxPool = /* @__PURE__ */ new PrimitivePool( () => new three.Box3() );

	function shapecast( bvh, root, intersectsBounds, intersectsRange, boundsTraverseOrder, byteOffset ) {

		// setup
		_box1$1 = boxPool.getPrimitive();
		_box2$1 = boxPool.getPrimitive();
		boxStack.push( _box1$1, _box2$1 );
		BufferStack.setBuffer( bvh._roots[ root ] );

		const result = shapecastTraverse( 0, bvh.geometry, intersectsBounds, intersectsRange, boundsTraverseOrder, byteOffset );

		// cleanup
		BufferStack.clearBuffer();
		boxPool.releasePrimitive( _box1$1 );
		boxPool.releasePrimitive( _box2$1 );
		boxStack.pop();
		boxStack.pop();

		const length = boxStack.length;
		if ( length > 0 ) {

			_box2$1 = boxStack[ length - 1 ];
			_box1$1 = boxStack[ length - 2 ];

		}

		return result;

	}

	function shapecastTraverse(
		nodeIndex32,
		geometry,
		intersectsBoundsFunc,
		intersectsRangeFunc,
		nodeScoreFunc = null,
		nodeIndexByteOffset = 0, // offset for unique node identifier
		depth = 0
	) {

		const { float32Array, uint16Array, uint32Array } = BufferStack;
		let nodeIndex16 = nodeIndex32 * 2;

		const isLeaf = IS_LEAF( nodeIndex16, uint16Array );
		if ( isLeaf ) {

			const offset = OFFSET( nodeIndex32, uint32Array );
			const count = COUNT( nodeIndex16, uint16Array );
			arrayToBox( BOUNDING_DATA_INDEX( nodeIndex32 ), float32Array, _box1$1 );
			return intersectsRangeFunc( offset, count, false, depth, nodeIndexByteOffset + nodeIndex32, _box1$1 );

		} else {

			const left = LEFT_NODE( nodeIndex32 );
			const right = RIGHT_NODE( nodeIndex32, uint32Array );
			let c1 = left;
			let c2 = right;

			let score1, score2;
			let box1, box2;
			if ( nodeScoreFunc ) {

				box1 = _box1$1;
				box2 = _box2$1;

				// bounding data is not offset
				arrayToBox( BOUNDING_DATA_INDEX( c1 ), float32Array, box1 );
				arrayToBox( BOUNDING_DATA_INDEX( c2 ), float32Array, box2 );

				score1 = nodeScoreFunc( box1 );
				score2 = nodeScoreFunc( box2 );

				if ( score2 < score1 ) {

					c1 = right;
					c2 = left;

					const temp = score1;
					score1 = score2;
					score2 = temp;

					box1 = box2;
					// box2 is always set before use below

				}

			}

			// Check box 1 intersection
			if ( ! box1 ) {

				box1 = _box1$1;
				arrayToBox( BOUNDING_DATA_INDEX( c1 ), float32Array, box1 );

			}

			const isC1Leaf = IS_LEAF( c1 * 2, uint16Array );
			const c1Intersection = intersectsBoundsFunc( box1, isC1Leaf, score1, depth + 1, nodeIndexByteOffset + c1 );

			let c1StopTraversal;
			if ( c1Intersection === CONTAINED ) {

				const offset = getLeftOffset( c1 );
				const end = getRightEndOffset( c1 );
				const count = end - offset;

				c1StopTraversal = intersectsRangeFunc( offset, count, true, depth + 1, nodeIndexByteOffset + c1, box1 );

			} else {

				c1StopTraversal =
					c1Intersection &&
					shapecastTraverse(
						c1,
						geometry,
						intersectsBoundsFunc,
						intersectsRangeFunc,
						nodeScoreFunc,
						nodeIndexByteOffset,
						depth + 1
					);

			}

			if ( c1StopTraversal ) return true;

			// Check box 2 intersection
			// cached box2 will have been overwritten by previous traversal
			box2 = _box2$1;
			arrayToBox( BOUNDING_DATA_INDEX( c2 ), float32Array, box2 );

			const isC2Leaf = IS_LEAF( c2 * 2, uint16Array );
			const c2Intersection = intersectsBoundsFunc( box2, isC2Leaf, score2, depth + 1, nodeIndexByteOffset + c2 );

			let c2StopTraversal;
			if ( c2Intersection === CONTAINED ) {

				const offset = getLeftOffset( c2 );
				const end = getRightEndOffset( c2 );
				const count = end - offset;

				c2StopTraversal = intersectsRangeFunc( offset, count, true, depth + 1, nodeIndexByteOffset + c2, box2 );

			} else {

				c2StopTraversal =
					c2Intersection &&
					shapecastTraverse(
						c2,
						geometry,
						intersectsBoundsFunc,
						intersectsRangeFunc,
						nodeScoreFunc,
						nodeIndexByteOffset,
						depth + 1
					);

			}

			if ( c2StopTraversal ) return true;

			return false;

			// Define these inside the function so it has access to the local variables needed
			// when converting to the buffer equivalents
			function getLeftOffset( nodeIndex32 ) {

				const { uint16Array, uint32Array } = BufferStack;
				let nodeIndex16 = nodeIndex32 * 2;

				// traverse until we find a leaf
				while ( ! IS_LEAF( nodeIndex16, uint16Array ) ) {

					nodeIndex32 = LEFT_NODE( nodeIndex32 );
					nodeIndex16 = nodeIndex32 * 2;

				}

				return OFFSET( nodeIndex32, uint32Array );

			}

			function getRightEndOffset( nodeIndex32 ) {

				const { uint16Array, uint32Array } = BufferStack;
				let nodeIndex16 = nodeIndex32 * 2;

				// traverse until we find a leaf
				while ( ! IS_LEAF( nodeIndex16, uint16Array ) ) {

					// adjust offset to point to the right node
					nodeIndex32 = RIGHT_NODE( nodeIndex32, uint32Array );
					nodeIndex16 = nodeIndex32 * 2;

				}

				// return the end offset of the triangle range
				return OFFSET( nodeIndex32, uint32Array ) + COUNT( nodeIndex16, uint16Array );

			}

		}

	}

	const temp = /* @__PURE__ */ new three.Vector3();
	const temp1$2 = /* @__PURE__ */ new three.Vector3();

	function closestPointToPoint(
		bvh,
		point,
		target = { },
		minThreshold = 0,
		maxThreshold = Infinity,
	) {

		// early out if under minThreshold
		// skip checking if over maxThreshold
		// set minThreshold = maxThreshold to quickly check if a point is within a threshold
		// returns Infinity if no value found
		const minThresholdSq = minThreshold * minThreshold;
		const maxThresholdSq = maxThreshold * maxThreshold;
		let closestDistanceSq = Infinity;
		let closestDistanceTriIndex = null;
		bvh.shapecast(

			{

				boundsTraverseOrder: box => {

					temp.copy( point ).clamp( box.min, box.max );
					return temp.distanceToSquared( point );

				},

				intersectsBounds: ( box, isLeaf, score ) => {

					return score < closestDistanceSq && score < maxThresholdSq;

				},

				intersectsTriangle: ( tri, triIndex ) => {

					tri.closestPointToPoint( point, temp );
					const distSq = point.distanceToSquared( temp );
					if ( distSq < closestDistanceSq ) {

						temp1$2.copy( temp );
						closestDistanceSq = distSq;
						closestDistanceTriIndex = triIndex;

					}

					if ( distSq < minThresholdSq ) {

						return true;

					} else {

						return false;

					}

				},

			}

		);

		if ( closestDistanceSq === Infinity ) return null;

		const closestDistance = Math.sqrt( closestDistanceSq );

		if ( ! target.point ) target.point = temp1$2.clone();
		else target.point.copy( temp1$2 );
		target.distance = closestDistance,
		target.faceIndex = closestDistanceTriIndex;

		return target;

	}

	// Ripped and modified From THREE.js Mesh raycast
	// https://github.com/mrdoob/three.js/blob/0aa87c999fe61e216c1133fba7a95772b503eddf/src/objects/Mesh.js#L115
	const _vA = /* @__PURE__ */ new three.Vector3();
	const _vB = /* @__PURE__ */ new three.Vector3();
	const _vC = /* @__PURE__ */ new three.Vector3();

	const _uvA = /* @__PURE__ */ new three.Vector2();
	const _uvB = /* @__PURE__ */ new three.Vector2();
	const _uvC = /* @__PURE__ */ new three.Vector2();

	const _normalA = /* @__PURE__ */ new three.Vector3();
	const _normalB = /* @__PURE__ */ new three.Vector3();
	const _normalC = /* @__PURE__ */ new three.Vector3();

	const _intersectionPoint = /* @__PURE__ */ new three.Vector3();
	function checkIntersection( ray, pA, pB, pC, point, side ) {

		let intersect;
		if ( side === three.BackSide ) {

			intersect = ray.intersectTriangle( pC, pB, pA, true, point );

		} else {

			intersect = ray.intersectTriangle( pA, pB, pC, side !== three.DoubleSide, point );

		}

		if ( intersect === null ) return null;

		const distance = ray.origin.distanceTo( point );

		return {

			distance: distance,
			point: point.clone(),

		};

	}

	function checkBufferGeometryIntersection( ray, position, normal, uv, uv1, a, b, c, side ) {

		_vA.fromBufferAttribute( position, a );
		_vB.fromBufferAttribute( position, b );
		_vC.fromBufferAttribute( position, c );

		const intersection = checkIntersection( ray, _vA, _vB, _vC, _intersectionPoint, side );

		if ( intersection ) {

			if ( uv ) {

				_uvA.fromBufferAttribute( uv, a );
				_uvB.fromBufferAttribute( uv, b );
				_uvC.fromBufferAttribute( uv, c );

				intersection.uv = three.Triangle.getInterpolation( _intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new three.Vector2() );

			}

			if ( uv1 ) {

				_uvA.fromBufferAttribute( uv1, a );
				_uvB.fromBufferAttribute( uv1, b );
				_uvC.fromBufferAttribute( uv1, c );

				intersection.uv1 = three.Triangle.getInterpolation( _intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new three.Vector2() );

			}

			if ( normal ) {

				_normalA.fromBufferAttribute( normal, a );
				_normalB.fromBufferAttribute( normal, b );
				_normalC.fromBufferAttribute( normal, c );

				intersection.normal = three.Triangle.getInterpolation( _intersectionPoint, _vA, _vB, _vC, _normalA, _normalB, _normalC, new three.Vector3() );
				if ( intersection.normal.dot( ray.direction ) > 0 ) {

					intersection.normal.multiplyScalar( - 1 );

				}

			}

			const face = {
				a: a,
				b: b,
				c: c,
				normal: new three.Vector3(),
				materialIndex: 0
			};

			three.Triangle.getNormal( _vA, _vB, _vC, face.normal );

			intersection.face = face;
			intersection.faceIndex = a;

		}

		return intersection;

	}

	// https://github.com/mrdoob/three.js/blob/0aa87c999fe61e216c1133fba7a95772b503eddf/src/objects/Mesh.js#L258
	function intersectTri( geo, side, ray, tri, intersections ) {

		const triOffset = tri * 3;
		let a = triOffset + 0;
		let b = triOffset + 1;
		let c = triOffset + 2;

		const index = geo.index;
		if ( geo.index ) {

			a = index.getX( a );
			b = index.getX( b );
			c = index.getX( c );

		}

		const { position, normal, uv, uv1 } = geo.attributes;
		const intersection = checkBufferGeometryIntersection( ray, position, normal, uv, uv1, a, b, c, side );

		if ( intersection ) {

			intersection.faceIndex = tri;
			if ( intersections ) intersections.push( intersection );
			return intersection;

		}

		return null;

	}

	// sets the vertices of triangle `tri` with the 3 vertices after i
	function setTriangle( tri, i, index, pos ) {

		const ta = tri.a;
		const tb = tri.b;
		const tc = tri.c;

		let i0 = i;
		let i1 = i + 1;
		let i2 = i + 2;
		if ( index ) {

			i0 = index.getX( i0 );
			i1 = index.getX( i1 );
			i2 = index.getX( i2 );

		}

		ta.x = pos.getX( i0 );
		ta.y = pos.getY( i0 );
		ta.z = pos.getZ( i0 );

		tb.x = pos.getX( i1 );
		tb.y = pos.getY( i1 );
		tb.z = pos.getZ( i1 );

		tc.x = pos.getX( i2 );
		tc.y = pos.getY( i2 );
		tc.z = pos.getZ( i2 );

	}

	const tempV1 = /* @__PURE__ */ new three.Vector3();
	const tempV2 = /* @__PURE__ */ new three.Vector3();
	const tempV3 = /* @__PURE__ */ new three.Vector3();
	const tempUV1 = /* @__PURE__ */ new three.Vector2();
	const tempUV2 = /* @__PURE__ */ new three.Vector2();
	const tempUV3 = /* @__PURE__ */ new three.Vector2();

	function getTriangleHitPointInfo( point, geometry, triangleIndex, target ) {

		const indices = geometry.getIndex().array;
		const positions = geometry.getAttribute( 'position' );
		const uvs = geometry.getAttribute( 'uv' );

		const a = indices[ triangleIndex * 3 ];
		const b = indices[ triangleIndex * 3 + 1 ];
		const c = indices[ triangleIndex * 3 + 2 ];

		tempV1.fromBufferAttribute( positions, a );
		tempV2.fromBufferAttribute( positions, b );
		tempV3.fromBufferAttribute( positions, c );

		// find the associated material index
		let materialIndex = 0;
		const groups = geometry.groups;
		const firstVertexIndex = triangleIndex * 3;
		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			const { start, count } = group;
			if ( firstVertexIndex >= start && firstVertexIndex < start + count ) {

				materialIndex = group.materialIndex;
				break;

			}

		}

		// extract uvs
		let uv = null;
		if ( uvs ) {

			tempUV1.fromBufferAttribute( uvs, a );
			tempUV2.fromBufferAttribute( uvs, b );
			tempUV3.fromBufferAttribute( uvs, c );

			if ( target && target.uv ) uv = target.uv;
			else uv = new three.Vector2();

			three.Triangle.getInterpolation( point, tempV1, tempV2, tempV3, tempUV1, tempUV2, tempUV3, uv );

		}

		// adjust the provided target or create a new one
		if ( target ) {

			if ( ! target.face ) target.face = { };
			target.face.a = a;
			target.face.b = b;
			target.face.c = c;
			target.face.materialIndex = materialIndex;
			if ( ! target.face.normal ) target.face.normal = new three.Vector3();
			three.Triangle.getNormal( tempV1, tempV2, tempV3, target.face.normal );

			if ( uv ) target.uv = uv;

			return target;

		} else {

			return {
				face: {
					a: a,
					b: b,
					c: c,
					materialIndex: materialIndex,
					normal: three.Triangle.getNormal( tempV1, tempV2, tempV3, new three.Vector3() )
				},
				uv: uv
			};

		}

	}

	/*************************************************************/
	/* This file is generated from "iterationUtils.template.js". */
	/*************************************************************/
	/* eslint-disable indent */

	function intersectTris( bvh, side, ray, offset, count, intersections ) {

		const { geometry, _indirectBuffer } = bvh;
		for ( let i = offset, end = offset + count; i < end; i ++ ) {


			intersectTri( geometry, side, ray, i, intersections );


		}

	}

	function intersectClosestTri( bvh, side, ray, offset, count ) {

		const { geometry, _indirectBuffer } = bvh;
		let dist = Infinity;
		let res = null;
		for ( let i = offset, end = offset + count; i < end; i ++ ) {

			let intersection;

			intersection = intersectTri( geometry, side, ray, i );


			if ( intersection && intersection.distance < dist ) {

				res = intersection;
				dist = intersection.distance;

			}

		}

		return res;

	}

	function iterateOverTriangles(
		offset,
		count,
		bvh,
		intersectsTriangleFunc,
		contained,
		depth,
		triangle
	) {

		const { geometry } = bvh;
		const { index } = geometry;
		const pos = geometry.attributes.position;
		for ( let i = offset, l = count + offset; i < l; i ++ ) {

			let tri;

			tri = i;

			setTriangle( triangle, tri * 3, index, pos );
			triangle.needsUpdate = true;

			if ( intersectsTriangleFunc( triangle, tri, contained, depth ) ) {

				return true;

			}

		}

		return false;

	}

	/****************************************************/
	/* This file is generated from "refit.template.js". */
	/****************************************************/

	function refit( bvh, nodeIndices = null ) {

		if ( nodeIndices && Array.isArray( nodeIndices ) ) {

			nodeIndices = new Set( nodeIndices );

		}

		const geometry = bvh.geometry;
		const indexArr = geometry.index ? geometry.index.array : null;
		const posAttr = geometry.attributes.position;

		let buffer, uint32Array, uint16Array, float32Array;
		let byteOffset = 0;
		const roots = bvh._roots;
		for ( let i = 0, l = roots.length; i < l; i ++ ) {

			buffer = roots[ i ];
			uint32Array = new Uint32Array( buffer );
			uint16Array = new Uint16Array( buffer );
			float32Array = new Float32Array( buffer );

			_traverse( 0, byteOffset );
			byteOffset += buffer.byteLength;

		}

		function _traverse( node32Index, byteOffset, force = false ) {

			const node16Index = node32Index * 2;
			const isLeaf = uint16Array[ node16Index + 15 ] === IS_LEAFNODE_FLAG;
			if ( isLeaf ) {

				const offset = uint32Array[ node32Index + 6 ];
				const count = uint16Array[ node16Index + 14 ];

				let minx = Infinity;
				let miny = Infinity;
				let minz = Infinity;
				let maxx = - Infinity;
				let maxy = - Infinity;
				let maxz = - Infinity;


				for ( let i = 3 * offset, l = 3 * ( offset + count ); i < l; i ++ ) {

					let index = indexArr[ i ];
					const x = posAttr.getX( index );
					const y = posAttr.getY( index );
					const z = posAttr.getZ( index );

					if ( x < minx ) minx = x;
					if ( x > maxx ) maxx = x;

					if ( y < miny ) miny = y;
					if ( y > maxy ) maxy = y;

					if ( z < minz ) minz = z;
					if ( z > maxz ) maxz = z;

				}


				if (
					float32Array[ node32Index + 0 ] !== minx ||
					float32Array[ node32Index + 1 ] !== miny ||
					float32Array[ node32Index + 2 ] !== minz ||

					float32Array[ node32Index + 3 ] !== maxx ||
					float32Array[ node32Index + 4 ] !== maxy ||
					float32Array[ node32Index + 5 ] !== maxz
				) {

					float32Array[ node32Index + 0 ] = minx;
					float32Array[ node32Index + 1 ] = miny;
					float32Array[ node32Index + 2 ] = minz;

					float32Array[ node32Index + 3 ] = maxx;
					float32Array[ node32Index + 4 ] = maxy;
					float32Array[ node32Index + 5 ] = maxz;

					return true;

				} else {

					return false;

				}

			} else {

				const left = node32Index + 8;
				const right = uint32Array[ node32Index + 6 ];

				// the identifying node indices provided by the shapecast function include offsets of all
				// root buffers to guarantee they're unique between roots so offset left and right indices here.
				const offsetLeft = left + byteOffset;
				const offsetRight = right + byteOffset;
				let forceChildren = force;
				let includesLeft = false;
				let includesRight = false;

				if ( nodeIndices ) {

					// if we see that neither the left or right child are included in the set that need to be updated
					// then we assume that all children need to be updated.
					if ( ! forceChildren ) {

						includesLeft = nodeIndices.has( offsetLeft );
						includesRight = nodeIndices.has( offsetRight );
						forceChildren = ! includesLeft && ! includesRight;

					}

				} else {

					includesLeft = true;
					includesRight = true;

				}

				const traverseLeft = forceChildren || includesLeft;
				const traverseRight = forceChildren || includesRight;

				let leftChange = false;
				if ( traverseLeft ) {

					leftChange = _traverse( left, byteOffset, forceChildren );

				}

				let rightChange = false;
				if ( traverseRight ) {

					rightChange = _traverse( right, byteOffset, forceChildren );

				}

				const didChange = leftChange || rightChange;
				if ( didChange ) {

					for ( let i = 0; i < 3; i ++ ) {

						const lefti = left + i;
						const righti = right + i;
						const minLeftValue = float32Array[ lefti ];
						const maxLeftValue = float32Array[ lefti + 3 ];
						const minRightValue = float32Array[ righti ];
						const maxRightValue = float32Array[ righti + 3 ];

						float32Array[ node32Index + i ] = minLeftValue < minRightValue ? minLeftValue : minRightValue;
						float32Array[ node32Index + i + 3 ] = maxLeftValue > maxRightValue ? maxLeftValue : maxRightValue;

					}

				}

				return didChange;

			}

		}

	}

	const _boundingBox = /* @__PURE__ */ new three.Box3();
	function intersectRay( nodeIndex32, array, ray, target ) {

		arrayToBox( nodeIndex32, array, _boundingBox );
		return ray.intersectBox( _boundingBox, target );

	}

	/*************************************************************/
	/* This file is generated from "iterationUtils.template.js". */
	/*************************************************************/
	/* eslint-disable indent */

	function intersectTris_indirect( bvh, side, ray, offset, count, intersections ) {

		const { geometry, _indirectBuffer } = bvh;
		for ( let i = offset, end = offset + count; i < end; i ++ ) {

			let vi = _indirectBuffer ? _indirectBuffer[ i ] : i;
			intersectTri( geometry, side, ray, vi, intersections );


		}

	}

	function intersectClosestTri_indirect( bvh, side, ray, offset, count ) {

		const { geometry, _indirectBuffer } = bvh;
		let dist = Infinity;
		let res = null;
		for ( let i = offset, end = offset + count; i < end; i ++ ) {

			let intersection;
			intersection = intersectTri( geometry, side, ray, _indirectBuffer ? _indirectBuffer[ i ] : i );


			if ( intersection && intersection.distance < dist ) {

				res = intersection;
				dist = intersection.distance;

			}

		}

		return res;

	}

	function iterateOverTriangles_indirect(
		offset,
		count,
		bvh,
		intersectsTriangleFunc,
		contained,
		depth,
		triangle
	) {

		const { geometry } = bvh;
		const { index } = geometry;
		const pos = geometry.attributes.position;
		for ( let i = offset, l = count + offset; i < l; i ++ ) {

			let tri;
			tri = bvh.resolveTriangleIndex( i );

			setTriangle( triangle, tri * 3, index, pos );
			triangle.needsUpdate = true;

			if ( intersectsTriangleFunc( triangle, tri, contained, depth ) ) {

				return true;

			}

		}

		return false;

	}

	/******************************************************/
	/* This file is generated from "raycast.template.js". */
	/******************************************************/

	const _boxIntersection$3 = /* @__PURE__ */ new three.Vector3();
	function raycast( bvh, root, side, ray, intersects ) {

		BufferStack.setBuffer( bvh._roots[ root ] );
		_raycast$1( 0, bvh, side, ray, intersects );
		BufferStack.clearBuffer();

	}

	function _raycast$1( nodeIndex32, bvh, side, ray, intersects ) {

		const { float32Array, uint16Array, uint32Array } = BufferStack;
		const nodeIndex16 = nodeIndex32 * 2;
		const isLeaf = IS_LEAF( nodeIndex16, uint16Array );
		if ( isLeaf ) {

			const offset = OFFSET( nodeIndex32, uint32Array );
			const count = COUNT( nodeIndex16, uint16Array );


			intersectTris( bvh, side, ray, offset, count, intersects );


		} else {

			const leftIndex = LEFT_NODE( nodeIndex32 );
			if ( intersectRay( leftIndex, float32Array, ray, _boxIntersection$3 ) ) {

				_raycast$1( leftIndex, bvh, side, ray, intersects );

			}

			const rightIndex = RIGHT_NODE( nodeIndex32, uint32Array );
			if ( intersectRay( rightIndex, float32Array, ray, _boxIntersection$3 ) ) {

				_raycast$1( rightIndex, bvh, side, ray, intersects );

			}

		}

	}

	/***********************************************************/
	/* This file is generated from "raycastFirst.template.js". */
	/***********************************************************/
	const _boxIntersection$2 = /* @__PURE__ */ new three.Vector3();
	const _xyzFields$1 = [ 'x', 'y', 'z' ];
	function raycastFirst( bvh, root, side, ray ) {

		BufferStack.setBuffer( bvh._roots[ root ] );
		const result = _raycastFirst$1( 0, bvh, side, ray );
		BufferStack.clearBuffer();

		return result;

	}

	function _raycastFirst$1( nodeIndex32, bvh, side, ray ) {

		const { float32Array, uint16Array, uint32Array } = BufferStack;
		let nodeIndex16 = nodeIndex32 * 2;

		const isLeaf = IS_LEAF( nodeIndex16, uint16Array );
		if ( isLeaf ) {

			const offset = OFFSET( nodeIndex32, uint32Array );
			const count = COUNT( nodeIndex16, uint16Array );


			return intersectClosestTri( bvh, side, ray, offset, count );


		} else {

			// consider the position of the split plane with respect to the oncoming ray; whichever direction
			// the ray is coming from, look for an intersection among that side of the tree first
			const splitAxis = SPLIT_AXIS( nodeIndex32, uint32Array );
			const xyzAxis = _xyzFields$1[ splitAxis ];
			const rayDir = ray.direction[ xyzAxis ];
			const leftToRight = rayDir >= 0;

			// c1 is the child to check first
			let c1, c2;
			if ( leftToRight ) {

				c1 = LEFT_NODE( nodeIndex32 );
				c2 = RIGHT_NODE( nodeIndex32, uint32Array );

			} else {

				c1 = RIGHT_NODE( nodeIndex32, uint32Array );
				c2 = LEFT_NODE( nodeIndex32 );

			}

			const c1Intersection = intersectRay( c1, float32Array, ray, _boxIntersection$2 );
			const c1Result = c1Intersection ? _raycastFirst$1( c1, bvh, side, ray ) : null;

			// if we got an intersection in the first node and it's closer than the second node's bounding
			// box, we don't need to consider the second node because it couldn't possibly be a better result
			if ( c1Result ) {

				// check if the point is within the second bounds
				// "point" is in the local frame of the bvh
				const point = c1Result.point[ xyzAxis ];
				const isOutside = leftToRight ?
					point <= float32Array[ c2 + splitAxis ] : // min bounding data
					point >= float32Array[ c2 + splitAxis + 3 ]; // max bounding data

				if ( isOutside ) {

					return c1Result;

				}

			}

			// either there was no intersection in the first node, or there could still be a closer
			// intersection in the second, so check the second node and then take the better of the two
			const c2Intersection = intersectRay( c2, float32Array, ray, _boxIntersection$2 );
			const c2Result = c2Intersection ? _raycastFirst$1( c2, bvh, side, ray ) : null;

			if ( c1Result && c2Result ) {

				return c1Result.distance <= c2Result.distance ? c1Result : c2Result;

			} else {

				return c1Result || c2Result || null;

			}

		}

	}

	/*****************************************************************/
	/* This file is generated from "intersectsGeometry.template.js". */
	/*****************************************************************/
	/* eslint-disable indent */

	const boundingBox$2 = /* @__PURE__ */ new three.Box3();
	const triangle$1 = /* @__PURE__ */ new ExtendedTriangle();
	const triangle2$1 = /* @__PURE__ */ new ExtendedTriangle();
	const invertedMat$1 = /* @__PURE__ */ new three.Matrix4();

	const obb$4 = /* @__PURE__ */ new OrientedBox();
	const obb2$3 = /* @__PURE__ */ new OrientedBox();

	function intersectsGeometry( bvh, root, otherGeometry, geometryToBvh ) {

		BufferStack.setBuffer( bvh._roots[ root ] );
		const result = _intersectsGeometry$1( 0, bvh, otherGeometry, geometryToBvh );
		BufferStack.clearBuffer();

		return result;

	}

	function _intersectsGeometry$1( nodeIndex32, bvh, otherGeometry, geometryToBvh, cachedObb = null ) {

		const { float32Array, uint16Array, uint32Array } = BufferStack;
		let nodeIndex16 = nodeIndex32 * 2;

		if ( cachedObb === null ) {

			if ( ! otherGeometry.boundingBox ) {

				otherGeometry.computeBoundingBox();

			}

			obb$4.set( otherGeometry.boundingBox.min, otherGeometry.boundingBox.max, geometryToBvh );
			cachedObb = obb$4;

		}

		const isLeaf = IS_LEAF( nodeIndex16, uint16Array );
		if ( isLeaf ) {

			const thisGeometry = bvh.geometry;
			const thisIndex = thisGeometry.index;
			const thisPos = thisGeometry.attributes.position;

			const index = otherGeometry.index;
			const pos = otherGeometry.attributes.position;

			const offset = OFFSET( nodeIndex32, uint32Array );
			const count = COUNT( nodeIndex16, uint16Array );

			// get the inverse of the geometry matrix so we can transform our triangles into the
			// geometry space we're trying to test. We assume there are fewer triangles being checked
			// here.
			invertedMat$1.copy( geometryToBvh ).invert();

			if ( otherGeometry.boundsTree ) {

				// if there's a bounds tree
				arrayToBox( BOUNDING_DATA_INDEX( nodeIndex32 ), float32Array, obb2$3 );
				obb2$3.matrix.copy( invertedMat$1 );
				obb2$3.needsUpdate = true;

				// TODO: use a triangle iteration function here
				const res = otherGeometry.boundsTree.shapecast( {

					intersectsBounds: box => obb2$3.intersectsBox( box ),

					intersectsTriangle: tri => {

						tri.a.applyMatrix4( geometryToBvh );
						tri.b.applyMatrix4( geometryToBvh );
						tri.c.applyMatrix4( geometryToBvh );
						tri.needsUpdate = true;


						for ( let i = offset * 3, l = ( count + offset ) * 3; i < l; i += 3 ) {

							// this triangle needs to be transformed into the current BVH coordinate frame
							setTriangle( triangle2$1, i, thisIndex, thisPos );
							triangle2$1.needsUpdate = true;
							if ( tri.intersectsTriangle( triangle2$1 ) ) {

								return true;

							}

						}


						return false;

					}

				} );

				return res;

			} else {

				// if we're just dealing with raw geometry

				for ( let i = offset * 3, l = ( count + offset ) * 3; i < l; i += 3 ) {

					// this triangle needs to be transformed into the current BVH coordinate frame
					setTriangle( triangle$1, i, thisIndex, thisPos );


					triangle$1.a.applyMatrix4( invertedMat$1 );
					triangle$1.b.applyMatrix4( invertedMat$1 );
					triangle$1.c.applyMatrix4( invertedMat$1 );
					triangle$1.needsUpdate = true;

					for ( let i2 = 0, l2 = index.count; i2 < l2; i2 += 3 ) {

						setTriangle( triangle2$1, i2, index, pos );
						triangle2$1.needsUpdate = true;

						if ( triangle$1.intersectsTriangle( triangle2$1 ) ) {

							return true;

						}

					}


				}


			}

		} else {

			const left = nodeIndex32 + 8;
			const right = uint32Array[ nodeIndex32 + 6 ];

			arrayToBox( BOUNDING_DATA_INDEX( left ), float32Array, boundingBox$2 );
			const leftIntersection =
				cachedObb.intersectsBox( boundingBox$2 ) &&
				_intersectsGeometry$1( left, bvh, otherGeometry, geometryToBvh, cachedObb );

			if ( leftIntersection ) return true;

			arrayToBox( BOUNDING_DATA_INDEX( right ), float32Array, boundingBox$2 );
			const rightIntersection =
				cachedObb.intersectsBox( boundingBox$2 ) &&
				_intersectsGeometry$1( right, bvh, otherGeometry, geometryToBvh, cachedObb );

			if ( rightIntersection ) return true;

			return false;

		}

	}

	/*********************************************************************/
	/* This file is generated from "closestPointToGeometry.template.js". */
	/*********************************************************************/

	const tempMatrix$1 = /* @__PURE__ */ new three.Matrix4();
	const obb$3 = /* @__PURE__ */ new OrientedBox();
	const obb2$2 = /* @__PURE__ */ new OrientedBox();
	const temp1$1 = /* @__PURE__ */ new three.Vector3();
	const temp2$1 = /* @__PURE__ */ new three.Vector3();
	const temp3$1 = /* @__PURE__ */ new three.Vector3();
	const temp4$1 = /* @__PURE__ */ new three.Vector3();

	function closestPointToGeometry(
		bvh,
		otherGeometry,
		geometryToBvh,
		target1 = { },
		target2 = { },
		minThreshold = 0,
		maxThreshold = Infinity,
	) {

		if ( ! otherGeometry.boundingBox ) {

			otherGeometry.computeBoundingBox();

		}

		obb$3.set( otherGeometry.boundingBox.min, otherGeometry.boundingBox.max, geometryToBvh );
		obb$3.needsUpdate = true;

		const geometry = bvh.geometry;
		const pos = geometry.attributes.position;
		const index = geometry.index;
		const otherPos = otherGeometry.attributes.position;
		const otherIndex = otherGeometry.index;
		const triangle = ExtendedTrianglePool.getPrimitive();
		const triangle2 = ExtendedTrianglePool.getPrimitive();

		let tempTarget1 = temp1$1;
		let tempTargetDest1 = temp2$1;
		let tempTarget2 = null;
		let tempTargetDest2 = null;

		if ( target2 ) {

			tempTarget2 = temp3$1;
			tempTargetDest2 = temp4$1;

		}

		let closestDistance = Infinity;
		let closestDistanceTriIndex = null;
		let closestDistanceOtherTriIndex = null;
		tempMatrix$1.copy( geometryToBvh ).invert();
		obb2$2.matrix.copy( tempMatrix$1 );
		bvh.shapecast(
			{

				boundsTraverseOrder: box => {

					return obb$3.distanceToBox( box );

				},

				intersectsBounds: ( box, isLeaf, score ) => {

					if ( score < closestDistance && score < maxThreshold ) {

						// if we know the triangles of this bounds will be intersected next then
						// save the bounds to use during triangle checks.
						if ( isLeaf ) {

							obb2$2.min.copy( box.min );
							obb2$2.max.copy( box.max );
							obb2$2.needsUpdate = true;

						}

						return true;

					}

					return false;

				},

				intersectsRange: ( offset, count ) => {

					if ( otherGeometry.boundsTree ) {

						// if the other geometry has a bvh then use the accelerated path where we use shapecast to find
						// the closest bounds in the other geometry to check.
						const otherBvh = otherGeometry.boundsTree;
						return otherBvh.shapecast( {
							boundsTraverseOrder: box => {

								return obb2$2.distanceToBox( box );

							},

							intersectsBounds: ( box, isLeaf, score ) => {

								return score < closestDistance && score < maxThreshold;

							},

							intersectsRange: ( otherOffset, otherCount ) => {

								for ( let i2 = otherOffset, l2 = otherOffset + otherCount; i2 < l2; i2 ++ ) {


									setTriangle( triangle2, 3 * i2, otherIndex, otherPos );

									triangle2.a.applyMatrix4( geometryToBvh );
									triangle2.b.applyMatrix4( geometryToBvh );
									triangle2.c.applyMatrix4( geometryToBvh );
									triangle2.needsUpdate = true;

									for ( let i = offset, l = offset + count; i < l; i ++ ) {


										setTriangle( triangle, 3 * i, index, pos );

										triangle.needsUpdate = true;

										const dist = triangle.distanceToTriangle( triangle2, tempTarget1, tempTarget2 );
										if ( dist < closestDistance ) {

											tempTargetDest1.copy( tempTarget1 );

											if ( tempTargetDest2 ) {

												tempTargetDest2.copy( tempTarget2 );

											}

											closestDistance = dist;
											closestDistanceTriIndex = i;
											closestDistanceOtherTriIndex = i2;

										}

										// stop traversal if we find a point that's under the given threshold
										if ( dist < minThreshold ) {

											return true;

										}

									}

								}

							},
						} );

					} else {

						// If no bounds tree then we'll just check every triangle.
						const triCount = getTriCount( otherGeometry );
						for ( let i2 = 0, l2 = triCount; i2 < l2; i2 ++ ) {

							setTriangle( triangle2, 3 * i2, otherIndex, otherPos );
							triangle2.a.applyMatrix4( geometryToBvh );
							triangle2.b.applyMatrix4( geometryToBvh );
							triangle2.c.applyMatrix4( geometryToBvh );
							triangle2.needsUpdate = true;

							for ( let i = offset, l = offset + count; i < l; i ++ ) {


								setTriangle( triangle, 3 * i, index, pos );

								triangle.needsUpdate = true;

								const dist = triangle.distanceToTriangle( triangle2, tempTarget1, tempTarget2 );
								if ( dist < closestDistance ) {

									tempTargetDest1.copy( tempTarget1 );

									if ( tempTargetDest2 ) {

										tempTargetDest2.copy( tempTarget2 );

									}

									closestDistance = dist;
									closestDistanceTriIndex = i;
									closestDistanceOtherTriIndex = i2;

								}

								// stop traversal if we find a point that's under the given threshold
								if ( dist < minThreshold ) {

									return true;

								}

							}

						}

					}

				},

			}

		);

		ExtendedTrianglePool.releasePrimitive( triangle );
		ExtendedTrianglePool.releasePrimitive( triangle2 );

		if ( closestDistance === Infinity ) {

			return null;

		}

		if ( ! target1.point ) {

			target1.point = tempTargetDest1.clone();

		} else {

			target1.point.copy( tempTargetDest1 );

		}

		target1.distance = closestDistance,
		target1.faceIndex = closestDistanceTriIndex;

		if ( target2 ) {

			if ( ! target2.point ) target2.point = tempTargetDest2.clone();
			else target2.point.copy( tempTargetDest2 );
			target2.point.applyMatrix4( tempMatrix$1 );
			tempTargetDest1.applyMatrix4( tempMatrix$1 );
			target2.distance = tempTargetDest1.sub( target2.point ).length();
			target2.faceIndex = closestDistanceOtherTriIndex;

		}

		return target1;

	}

	/****************************************************/
	/* This file is generated from "refit.template.js". */
	/****************************************************/

	function refit_indirect( bvh, nodeIndices = null ) {

		if ( nodeIndices && Array.isArray( nodeIndices ) ) {

			nodeIndices = new Set( nodeIndices );

		}

		const geometry = bvh.geometry;
		const indexArr = geometry.index ? geometry.index.array : null;
		const posAttr = geometry.attributes.position;

		let buffer, uint32Array, uint16Array, float32Array;
		let byteOffset = 0;
		const roots = bvh._roots;
		for ( let i = 0, l = roots.length; i < l; i ++ ) {

			buffer = roots[ i ];
			uint32Array = new Uint32Array( buffer );
			uint16Array = new Uint16Array( buffer );
			float32Array = new Float32Array( buffer );

			_traverse( 0, byteOffset );
			byteOffset += buffer.byteLength;

		}

		function _traverse( node32Index, byteOffset, force = false ) {

			const node16Index = node32Index * 2;
			const isLeaf = uint16Array[ node16Index + 15 ] === IS_LEAFNODE_FLAG;
			if ( isLeaf ) {

				const offset = uint32Array[ node32Index + 6 ];
				const count = uint16Array[ node16Index + 14 ];

				let minx = Infinity;
				let miny = Infinity;
				let minz = Infinity;
				let maxx = - Infinity;
				let maxy = - Infinity;
				let maxz = - Infinity;

				for ( let i = offset, l = offset + count; i < l; i ++ ) {

					const t = 3 * bvh.resolveTriangleIndex( i );
					for ( let j = 0; j < 3; j ++ ) {

						let index = t + j;
						index = indexArr ? indexArr[ index ] : index;

						const x = posAttr.getX( index );
						const y = posAttr.getY( index );
						const z = posAttr.getZ( index );

						if ( x < minx ) minx = x;
						if ( x > maxx ) maxx = x;

						if ( y < miny ) miny = y;
						if ( y > maxy ) maxy = y;

						if ( z < minz ) minz = z;
						if ( z > maxz ) maxz = z;


					}

				}


				if (
					float32Array[ node32Index + 0 ] !== minx ||
					float32Array[ node32Index + 1 ] !== miny ||
					float32Array[ node32Index + 2 ] !== minz ||

					float32Array[ node32Index + 3 ] !== maxx ||
					float32Array[ node32Index + 4 ] !== maxy ||
					float32Array[ node32Index + 5 ] !== maxz
				) {

					float32Array[ node32Index + 0 ] = minx;
					float32Array[ node32Index + 1 ] = miny;
					float32Array[ node32Index + 2 ] = minz;

					float32Array[ node32Index + 3 ] = maxx;
					float32Array[ node32Index + 4 ] = maxy;
					float32Array[ node32Index + 5 ] = maxz;

					return true;

				} else {

					return false;

				}

			} else {

				const left = node32Index + 8;
				const right = uint32Array[ node32Index + 6 ];

				// the identifying node indices provided by the shapecast function include offsets of all
				// root buffers to guarantee they're unique between roots so offset left and right indices here.
				const offsetLeft = left + byteOffset;
				const offsetRight = right + byteOffset;
				let forceChildren = force;
				let includesLeft = false;
				let includesRight = false;

				if ( nodeIndices ) {

					// if we see that neither the left or right child are included in the set that need to be updated
					// then we assume that all children need to be updated.
					if ( ! forceChildren ) {

						includesLeft = nodeIndices.has( offsetLeft );
						includesRight = nodeIndices.has( offsetRight );
						forceChildren = ! includesLeft && ! includesRight;

					}

				} else {

					includesLeft = true;
					includesRight = true;

				}

				const traverseLeft = forceChildren || includesLeft;
				const traverseRight = forceChildren || includesRight;

				let leftChange = false;
				if ( traverseLeft ) {

					leftChange = _traverse( left, byteOffset, forceChildren );

				}

				let rightChange = false;
				if ( traverseRight ) {

					rightChange = _traverse( right, byteOffset, forceChildren );

				}

				const didChange = leftChange || rightChange;
				if ( didChange ) {

					for ( let i = 0; i < 3; i ++ ) {

						const lefti = left + i;
						const righti = right + i;
						const minLeftValue = float32Array[ lefti ];
						const maxLeftValue = float32Array[ lefti + 3 ];
						const minRightValue = float32Array[ righti ];
						const maxRightValue = float32Array[ righti + 3 ];

						float32Array[ node32Index + i ] = minLeftValue < minRightValue ? minLeftValue : minRightValue;
						float32Array[ node32Index + i + 3 ] = maxLeftValue > maxRightValue ? maxLeftValue : maxRightValue;

					}

				}

				return didChange;

			}

		}

	}

	/******************************************************/
	/* This file is generated from "raycast.template.js". */
	/******************************************************/

	const _boxIntersection$1 = /* @__PURE__ */ new three.Vector3();
	function raycast_indirect( bvh, root, side, ray, intersects ) {

		BufferStack.setBuffer( bvh._roots[ root ] );
		_raycast( 0, bvh, side, ray, intersects );
		BufferStack.clearBuffer();

	}

	function _raycast( nodeIndex32, bvh, side, ray, intersects ) {

		const { float32Array, uint16Array, uint32Array } = BufferStack;
		const nodeIndex16 = nodeIndex32 * 2;
		const isLeaf = IS_LEAF( nodeIndex16, uint16Array );
		if ( isLeaf ) {

			const offset = OFFSET( nodeIndex32, uint32Array );
			const count = COUNT( nodeIndex16, uint16Array );

			intersectTris_indirect( bvh, side, ray, offset, count, intersects );


		} else {

			const leftIndex = LEFT_NODE( nodeIndex32 );
			if ( intersectRay( leftIndex, float32Array, ray, _boxIntersection$1 ) ) {

				_raycast( leftIndex, bvh, side, ray, intersects );

			}

			const rightIndex = RIGHT_NODE( nodeIndex32, uint32Array );
			if ( intersectRay( rightIndex, float32Array, ray, _boxIntersection$1 ) ) {

				_raycast( rightIndex, bvh, side, ray, intersects );

			}

		}

	}

	/***********************************************************/
	/* This file is generated from "raycastFirst.template.js". */
	/***********************************************************/
	const _boxIntersection = /* @__PURE__ */ new three.Vector3();
	const _xyzFields = [ 'x', 'y', 'z' ];
	function raycastFirst_indirect( bvh, root, side, ray ) {

		BufferStack.setBuffer( bvh._roots[ root ] );
		const result = _raycastFirst( 0, bvh, side, ray );
		BufferStack.clearBuffer();

		return result;

	}

	function _raycastFirst( nodeIndex32, bvh, side, ray ) {

		const { float32Array, uint16Array, uint32Array } = BufferStack;
		let nodeIndex16 = nodeIndex32 * 2;

		const isLeaf = IS_LEAF( nodeIndex16, uint16Array );
		if ( isLeaf ) {

			const offset = OFFSET( nodeIndex32, uint32Array );
			const count = COUNT( nodeIndex16, uint16Array );

			return intersectClosestTri_indirect( bvh, side, ray, offset, count );


		} else {

			// consider the position of the split plane with respect to the oncoming ray; whichever direction
			// the ray is coming from, look for an intersection among that side of the tree first
			const splitAxis = SPLIT_AXIS( nodeIndex32, uint32Array );
			const xyzAxis = _xyzFields[ splitAxis ];
			const rayDir = ray.direction[ xyzAxis ];
			const leftToRight = rayDir >= 0;

			// c1 is the child to check first
			let c1, c2;
			if ( leftToRight ) {

				c1 = LEFT_NODE( nodeIndex32 );
				c2 = RIGHT_NODE( nodeIndex32, uint32Array );

			} else {

				c1 = RIGHT_NODE( nodeIndex32, uint32Array );
				c2 = LEFT_NODE( nodeIndex32 );

			}

			const c1Intersection = intersectRay( c1, float32Array, ray, _boxIntersection );
			const c1Result = c1Intersection ? _raycastFirst( c1, bvh, side, ray ) : null;

			// if we got an intersection in the first node and it's closer than the second node's bounding
			// box, we don't need to consider the second node because it couldn't possibly be a better result
			if ( c1Result ) {

				// check if the point is within the second bounds
				// "point" is in the local frame of the bvh
				const point = c1Result.point[ xyzAxis ];
				const isOutside = leftToRight ?
					point <= float32Array[ c2 + splitAxis ] : // min bounding data
					point >= float32Array[ c2 + splitAxis + 3 ]; // max bounding data

				if ( isOutside ) {

					return c1Result;

				}

			}

			// either there was no intersection in the first node, or there could still be a closer
			// intersection in the second, so check the second node and then take the better of the two
			const c2Intersection = intersectRay( c2, float32Array, ray, _boxIntersection );
			const c2Result = c2Intersection ? _raycastFirst( c2, bvh, side, ray ) : null;

			if ( c1Result && c2Result ) {

				return c1Result.distance <= c2Result.distance ? c1Result : c2Result;

			} else {

				return c1Result || c2Result || null;

			}

		}

	}

	/*****************************************************************/
	/* This file is generated from "intersectsGeometry.template.js". */
	/*****************************************************************/
	/* eslint-disable indent */

	const boundingBox$1 = /* @__PURE__ */ new three.Box3();
	const triangle = /* @__PURE__ */ new ExtendedTriangle();
	const triangle2 = /* @__PURE__ */ new ExtendedTriangle();
	const invertedMat = /* @__PURE__ */ new three.Matrix4();

	const obb$2 = /* @__PURE__ */ new OrientedBox();
	const obb2$1 = /* @__PURE__ */ new OrientedBox();

	function intersectsGeometry_indirect( bvh, root, otherGeometry, geometryToBvh ) {

		BufferStack.setBuffer( bvh._roots[ root ] );
		const result = _intersectsGeometry( 0, bvh, otherGeometry, geometryToBvh );
		BufferStack.clearBuffer();

		return result;

	}

	function _intersectsGeometry( nodeIndex32, bvh, otherGeometry, geometryToBvh, cachedObb = null ) {

		const { float32Array, uint16Array, uint32Array } = BufferStack;
		let nodeIndex16 = nodeIndex32 * 2;

		if ( cachedObb === null ) {

			if ( ! otherGeometry.boundingBox ) {

				otherGeometry.computeBoundingBox();

			}

			obb$2.set( otherGeometry.boundingBox.min, otherGeometry.boundingBox.max, geometryToBvh );
			cachedObb = obb$2;

		}

		const isLeaf = IS_LEAF( nodeIndex16, uint16Array );
		if ( isLeaf ) {

			const thisGeometry = bvh.geometry;
			const thisIndex = thisGeometry.index;
			const thisPos = thisGeometry.attributes.position;

			const index = otherGeometry.index;
			const pos = otherGeometry.attributes.position;

			const offset = OFFSET( nodeIndex32, uint32Array );
			const count = COUNT( nodeIndex16, uint16Array );

			// get the inverse of the geometry matrix so we can transform our triangles into the
			// geometry space we're trying to test. We assume there are fewer triangles being checked
			// here.
			invertedMat.copy( geometryToBvh ).invert();

			if ( otherGeometry.boundsTree ) {

				// if there's a bounds tree
				arrayToBox( BOUNDING_DATA_INDEX( nodeIndex32 ), float32Array, obb2$1 );
				obb2$1.matrix.copy( invertedMat );
				obb2$1.needsUpdate = true;

				// TODO: use a triangle iteration function here
				const res = otherGeometry.boundsTree.shapecast( {

					intersectsBounds: box => obb2$1.intersectsBox( box ),

					intersectsTriangle: tri => {

						tri.a.applyMatrix4( geometryToBvh );
						tri.b.applyMatrix4( geometryToBvh );
						tri.c.applyMatrix4( geometryToBvh );
						tri.needsUpdate = true;

						for ( let i = offset, l = count + offset; i < l; i ++ ) {

							// this triangle needs to be transformed into the current BVH coordinate frame
							setTriangle( triangle2, 3 * bvh.resolveTriangleIndex( i ), thisIndex, thisPos );
							triangle2.needsUpdate = true;
							if ( tri.intersectsTriangle( triangle2 ) ) {

								return true;

							}

						}


						return false;

					}

				} );

				return res;

			} else {

				// if we're just dealing with raw geometry
				for ( let i = offset, l = count + offset; i < l; i ++ ) {

					// this triangle needs to be transformed into the current BVH coordinate frame
					const ti = bvh.resolveTriangleIndex( i );
					setTriangle( triangle, 3 * ti, thisIndex, thisPos );


					triangle.a.applyMatrix4( invertedMat );
					triangle.b.applyMatrix4( invertedMat );
					triangle.c.applyMatrix4( invertedMat );
					triangle.needsUpdate = true;

					for ( let i2 = 0, l2 = index.count; i2 < l2; i2 += 3 ) {

						setTriangle( triangle2, i2, index, pos );
						triangle2.needsUpdate = true;

						if ( triangle.intersectsTriangle( triangle2 ) ) {

							return true;

						}

					}

				}


			}

		} else {

			const left = nodeIndex32 + 8;
			const right = uint32Array[ nodeIndex32 + 6 ];

			arrayToBox( BOUNDING_DATA_INDEX( left ), float32Array, boundingBox$1 );
			const leftIntersection =
				cachedObb.intersectsBox( boundingBox$1 ) &&
				_intersectsGeometry( left, bvh, otherGeometry, geometryToBvh, cachedObb );

			if ( leftIntersection ) return true;

			arrayToBox( BOUNDING_DATA_INDEX( right ), float32Array, boundingBox$1 );
			const rightIntersection =
				cachedObb.intersectsBox( boundingBox$1 ) &&
				_intersectsGeometry( right, bvh, otherGeometry, geometryToBvh, cachedObb );

			if ( rightIntersection ) return true;

			return false;

		}

	}

	/*********************************************************************/
	/* This file is generated from "closestPointToGeometry.template.js". */
	/*********************************************************************/

	const tempMatrix = /* @__PURE__ */ new three.Matrix4();
	const obb$1 = /* @__PURE__ */ new OrientedBox();
	const obb2 = /* @__PURE__ */ new OrientedBox();
	const temp1 = /* @__PURE__ */ new three.Vector3();
	const temp2 = /* @__PURE__ */ new three.Vector3();
	const temp3 = /* @__PURE__ */ new three.Vector3();
	const temp4 = /* @__PURE__ */ new three.Vector3();

	function closestPointToGeometry_indirect(
		bvh,
		otherGeometry,
		geometryToBvh,
		target1 = { },
		target2 = { },
		minThreshold = 0,
		maxThreshold = Infinity,
	) {

		if ( ! otherGeometry.boundingBox ) {

			otherGeometry.computeBoundingBox();

		}

		obb$1.set( otherGeometry.boundingBox.min, otherGeometry.boundingBox.max, geometryToBvh );
		obb$1.needsUpdate = true;

		const geometry = bvh.geometry;
		const pos = geometry.attributes.position;
		const index = geometry.index;
		const otherPos = otherGeometry.attributes.position;
		const otherIndex = otherGeometry.index;
		const triangle = ExtendedTrianglePool.getPrimitive();
		const triangle2 = ExtendedTrianglePool.getPrimitive();

		let tempTarget1 = temp1;
		let tempTargetDest1 = temp2;
		let tempTarget2 = null;
		let tempTargetDest2 = null;

		if ( target2 ) {

			tempTarget2 = temp3;
			tempTargetDest2 = temp4;

		}

		let closestDistance = Infinity;
		let closestDistanceTriIndex = null;
		let closestDistanceOtherTriIndex = null;
		tempMatrix.copy( geometryToBvh ).invert();
		obb2.matrix.copy( tempMatrix );
		bvh.shapecast(
			{

				boundsTraverseOrder: box => {

					return obb$1.distanceToBox( box );

				},

				intersectsBounds: ( box, isLeaf, score ) => {

					if ( score < closestDistance && score < maxThreshold ) {

						// if we know the triangles of this bounds will be intersected next then
						// save the bounds to use during triangle checks.
						if ( isLeaf ) {

							obb2.min.copy( box.min );
							obb2.max.copy( box.max );
							obb2.needsUpdate = true;

						}

						return true;

					}

					return false;

				},

				intersectsRange: ( offset, count ) => {

					if ( otherGeometry.boundsTree ) {

						// if the other geometry has a bvh then use the accelerated path where we use shapecast to find
						// the closest bounds in the other geometry to check.
						const otherBvh = otherGeometry.boundsTree;
						return otherBvh.shapecast( {
							boundsTraverseOrder: box => {

								return obb2.distanceToBox( box );

							},

							intersectsBounds: ( box, isLeaf, score ) => {

								return score < closestDistance && score < maxThreshold;

							},

							intersectsRange: ( otherOffset, otherCount ) => {

								for ( let i2 = otherOffset, l2 = otherOffset + otherCount; i2 < l2; i2 ++ ) {

									const ti2 = otherBvh.resolveTriangleIndex( i2 );
									setTriangle( triangle2, 3 * ti2, otherIndex, otherPos );

									triangle2.a.applyMatrix4( geometryToBvh );
									triangle2.b.applyMatrix4( geometryToBvh );
									triangle2.c.applyMatrix4( geometryToBvh );
									triangle2.needsUpdate = true;

									for ( let i = offset, l = offset + count; i < l; i ++ ) {

										const ti = bvh.resolveTriangleIndex( i );
										setTriangle( triangle, 3 * ti, index, pos );

										triangle.needsUpdate = true;

										const dist = triangle.distanceToTriangle( triangle2, tempTarget1, tempTarget2 );
										if ( dist < closestDistance ) {

											tempTargetDest1.copy( tempTarget1 );

											if ( tempTargetDest2 ) {

												tempTargetDest2.copy( tempTarget2 );

											}

											closestDistance = dist;
											closestDistanceTriIndex = i;
											closestDistanceOtherTriIndex = i2;

										}

										// stop traversal if we find a point that's under the given threshold
										if ( dist < minThreshold ) {

											return true;

										}

									}

								}

							},
						} );

					} else {

						// If no bounds tree then we'll just check every triangle.
						const triCount = getTriCount( otherGeometry );
						for ( let i2 = 0, l2 = triCount; i2 < l2; i2 ++ ) {

							setTriangle( triangle2, 3 * i2, otherIndex, otherPos );
							triangle2.a.applyMatrix4( geometryToBvh );
							triangle2.b.applyMatrix4( geometryToBvh );
							triangle2.c.applyMatrix4( geometryToBvh );
							triangle2.needsUpdate = true;

							for ( let i = offset, l = offset + count; i < l; i ++ ) {

								const ti = bvh.resolveTriangleIndex( i );
								setTriangle( triangle, 3 * ti, index, pos );

								triangle.needsUpdate = true;

								const dist = triangle.distanceToTriangle( triangle2, tempTarget1, tempTarget2 );
								if ( dist < closestDistance ) {

									tempTargetDest1.copy( tempTarget1 );

									if ( tempTargetDest2 ) {

										tempTargetDest2.copy( tempTarget2 );

									}

									closestDistance = dist;
									closestDistanceTriIndex = i;
									closestDistanceOtherTriIndex = i2;

								}

								// stop traversal if we find a point that's under the given threshold
								if ( dist < minThreshold ) {

									return true;

								}

							}

						}

					}

				},

			}

		);

		ExtendedTrianglePool.releasePrimitive( triangle );
		ExtendedTrianglePool.releasePrimitive( triangle2 );

		if ( closestDistance === Infinity ) {

			return null;

		}

		if ( ! target1.point ) {

			target1.point = tempTargetDest1.clone();

		} else {

			target1.point.copy( tempTargetDest1 );

		}

		target1.distance = closestDistance,
		target1.faceIndex = closestDistanceTriIndex;

		if ( target2 ) {

			if ( ! target2.point ) target2.point = tempTargetDest2.clone();
			else target2.point.copy( tempTargetDest2 );
			target2.point.applyMatrix4( tempMatrix );
			tempTargetDest1.applyMatrix4( tempMatrix );
			target2.distance = tempTargetDest1.sub( target2.point ).length();
			target2.faceIndex = closestDistanceOtherTriIndex;

		}

		return target1;

	}

	function isSharedArrayBufferSupported() {

		return typeof SharedArrayBuffer !== 'undefined';

	}

	const _bufferStack1 = new BufferStack.constructor();
	const _bufferStack2 = new BufferStack.constructor();
	const _boxPool = new PrimitivePool( () => new three.Box3() );
	const _leftBox1 = new three.Box3();
	const _rightBox1 = new three.Box3();

	const _leftBox2 = new three.Box3();
	const _rightBox2 = new three.Box3();

	let _active = false;

	function bvhcast( bvh, otherBvh, matrixToLocal, intersectsRanges ) {

		if ( _active ) {

			throw new Error( 'MeshBVH: Recursive calls to bvhcast not supported.' );

		}

		_active = true;

		const roots = bvh._roots;
		const otherRoots = otherBvh._roots;
		let result;
		let offset1 = 0;
		let offset2 = 0;
		const invMat = new three.Matrix4().copy( matrixToLocal ).invert();

		// iterate over the first set of roots
		for ( let i = 0, il = roots.length; i < il; i ++ ) {

			_bufferStack1.setBuffer( roots[ i ] );
			offset2 = 0;

			// prep the initial root box
			const localBox = _boxPool.getPrimitive();
			arrayToBox( BOUNDING_DATA_INDEX( 0 ), _bufferStack1.float32Array, localBox );
			localBox.applyMatrix4( invMat );

			// iterate over the second set of roots
			for ( let j = 0, jl = otherRoots.length; j < jl; j ++ ) {

				_bufferStack2.setBuffer( otherRoots[ i ] );

				result = _traverse(
					0, 0, matrixToLocal, invMat, intersectsRanges,
					offset1, offset2, 0, 0,
					localBox,
				);

				_bufferStack2.clearBuffer();
				offset2 += otherRoots[ j ].length;

				if ( result ) {

					break;

				}

			}

			// release stack info
			_boxPool.releasePrimitive( localBox );
			_bufferStack1.clearBuffer();
			offset1 += roots[ i ].length;

			if ( result ) {

				break;

			}

		}

		_active = false;
		return result;

	}

	function _traverse(
		node1Index32,
		node2Index32,
		matrix2to1,
		matrix1to2,
		intersectsRangesFunc,

		// offsets for ids
		node1IndexByteOffset = 0,
		node2IndexByteOffset = 0,

		// tree depth
		depth1 = 0,
		depth2 = 0,

		currBox = null,
		reversed = false,

	) {

		// get the buffer stacks associated with the current indices
		let bufferStack1, bufferStack2;
		if ( reversed ) {

			bufferStack1 = _bufferStack2;
			bufferStack2 = _bufferStack1;

		} else {

			bufferStack1 = _bufferStack1;
			bufferStack2 = _bufferStack2;

		}

		// get the local instances of the typed buffers
		const
			float32Array1 = bufferStack1.float32Array,
			uint32Array1 = bufferStack1.uint32Array,
			uint16Array1 = bufferStack1.uint16Array,
			float32Array2 = bufferStack2.float32Array,
			uint32Array2 = bufferStack2.uint32Array,
			uint16Array2 = bufferStack2.uint16Array;

		const node1Index16 = node1Index32 * 2;
		const node2Index16 = node2Index32 * 2;
		const isLeaf1 = IS_LEAF( node1Index16, uint16Array1 );
		const isLeaf2 = IS_LEAF( node2Index16, uint16Array2 );
		let result = false;
		if ( isLeaf2 && isLeaf1 ) {

			// if both bounds are leaf nodes then fire the callback if the boxes intersect
			if ( reversed ) {

				result = intersectsRangesFunc(
					OFFSET( node2Index32, uint32Array2 ), COUNT( node2Index32 * 2, uint16Array2 ),
					OFFSET( node1Index32, uint32Array1 ), COUNT( node1Index32 * 2, uint16Array1 ),
					depth2, node2IndexByteOffset + node2Index32,
					depth1, node1IndexByteOffset + node1Index32,
				);

			} else {

				result = intersectsRangesFunc(
					OFFSET( node1Index32, uint32Array1 ), COUNT( node1Index32 * 2, uint16Array1 ),
					OFFSET( node2Index32, uint32Array2 ), COUNT( node2Index32 * 2, uint16Array2 ),
					depth1, node1IndexByteOffset + node1Index32,
					depth2, node2IndexByteOffset + node2Index32,
				);

			}

		} else if ( isLeaf2 ) {

			// SWAP
			// If we've traversed to the leaf node on the other bvh then we need to swap over
			// to traverse down the first one

			// get the new box to use
			const newBox = _boxPool.getPrimitive();
			arrayToBox( BOUNDING_DATA_INDEX( node2Index32 ), float32Array2, newBox );
			newBox.applyMatrix4( matrix2to1 );

			// get the child bounds to check before traversal
			const cl1 = LEFT_NODE( node1Index32 );
			const cr1 = RIGHT_NODE( node1Index32, uint32Array1 );
			arrayToBox( BOUNDING_DATA_INDEX( cl1 ), float32Array1, _leftBox1 );
			arrayToBox( BOUNDING_DATA_INDEX( cr1 ), float32Array1, _rightBox1 );

			// precompute the intersections otherwise the global boxes will be modified during traversal
			const intersectCl1 = newBox.intersectsBox( _leftBox1 );
			const intersectCr1 = newBox.intersectsBox( _rightBox1 );
			result = (
				intersectCl1 && _traverse(
					node2Index32, cl1, matrix1to2, matrix2to1, intersectsRangesFunc,
					node2IndexByteOffset, node1IndexByteOffset, depth2, depth1 + 1,
					newBox, ! reversed,
				)
			) || (
				intersectCr1 && _traverse(
					node2Index32, cr1, matrix1to2, matrix2to1, intersectsRangesFunc,
					node2IndexByteOffset, node1IndexByteOffset, depth2, depth1 + 1,
					newBox, ! reversed,
				)
			);

			_boxPool.releasePrimitive( newBox );

		} else {

			// if neither are leaves then we should swap if one of the children does not
			// intersect with the current bounds

			// get the child bounds to check
			const cl2 = LEFT_NODE( node2Index32 );
			const cr2 = RIGHT_NODE( node2Index32, uint32Array2 );
			arrayToBox( BOUNDING_DATA_INDEX( cl2 ), float32Array2, _leftBox2 );
			arrayToBox( BOUNDING_DATA_INDEX( cr2 ), float32Array2, _rightBox2 );

			const leftIntersects = currBox.intersectsBox( _leftBox2 );
			const rightIntersects = currBox.intersectsBox( _rightBox2 );
			if ( leftIntersects && rightIntersects ) {

				// continue to traverse both children if they both intersect
				result = _traverse(
					node1Index32, cl2, matrix2to1, matrix1to2, intersectsRangesFunc,
					node1IndexByteOffset, node2IndexByteOffset, depth1, depth2 + 1,
					currBox, reversed,
				) || _traverse(
					node1Index32, cr2, matrix2to1, matrix1to2, intersectsRangesFunc,
					node1IndexByteOffset, node2IndexByteOffset, depth1, depth2 + 1,
					currBox, reversed,
				);

			} else if ( leftIntersects ) {

				if ( isLeaf1 ) {

					// if the current box is a leaf then just continue
					result = _traverse(
						node1Index32, cl2, matrix2to1, matrix1to2, intersectsRangesFunc,
						node1IndexByteOffset, node2IndexByteOffset, depth1, depth2 + 1,
						currBox, reversed,
					);

				} else {

					// SWAP
					// if only one box intersects then we have to swap to the other bvh to continue
					const newBox = _boxPool.getPrimitive();
					newBox.copy( _leftBox2 ).applyMatrix4( matrix2to1 );

					const cl1 = LEFT_NODE( node1Index32 );
					const cr1 = RIGHT_NODE( node1Index32, uint32Array1 );
					arrayToBox( BOUNDING_DATA_INDEX( cl1 ), float32Array1, _leftBox1 );
					arrayToBox( BOUNDING_DATA_INDEX( cr1 ), float32Array1, _rightBox1 );

					// precompute the intersections otherwise the global boxes will be modified during traversal
					const intersectCl1 = newBox.intersectsBox( _leftBox1 );
					const intersectCr1 = newBox.intersectsBox( _rightBox1 );
					result = (
						intersectCl1 && _traverse(
							cl2, cl1, matrix1to2, matrix2to1, intersectsRangesFunc,
							node2IndexByteOffset, node1IndexByteOffset, depth2, depth1 + 1,
							newBox, ! reversed,
						)
					) || (
						intersectCr1 && _traverse(
							cl2, cr1, matrix1to2, matrix2to1, intersectsRangesFunc,
							node2IndexByteOffset, node1IndexByteOffset, depth2, depth1 + 1,
							newBox, ! reversed,
						)
					);

					_boxPool.releasePrimitive( newBox );

				}

			} else if ( rightIntersects ) {

				if ( isLeaf1 ) {

					// if the current box is a leaf then just continue
					result = _traverse(
						node1Index32, cr2, matrix2to1, matrix1to2, intersectsRangesFunc,
						node1IndexByteOffset, node2IndexByteOffset, depth1, depth2 + 1,
						currBox, reversed,
					);

				} else {

					// SWAP
					// if only one box intersects then we have to swap to the other bvh to continue
					const newBox = _boxPool.getPrimitive();
					newBox.copy( _rightBox2 ).applyMatrix4( matrix2to1 );

					const cl1 = LEFT_NODE( node1Index32 );
					const cr1 = RIGHT_NODE( node1Index32, uint32Array1 );
					arrayToBox( BOUNDING_DATA_INDEX( cl1 ), float32Array1, _leftBox1 );
					arrayToBox( BOUNDING_DATA_INDEX( cr1 ), float32Array1, _rightBox1 );

					// precompute the intersections otherwise the global boxes will be modified during traversal
					const intersectCl1 = newBox.intersectsBox( _leftBox1 );
					const intersectCr1 = newBox.intersectsBox( _rightBox1 );
					result = (
						intersectCl1 && _traverse(
							cr2, cl1, matrix1to2, matrix2to1, intersectsRangesFunc,
							node2IndexByteOffset, node1IndexByteOffset, depth2, depth1 + 1,
							newBox, ! reversed,
						)
					) || (
						intersectCr1 && _traverse(
							cr2, cr1, matrix1to2, matrix2to1, intersectsRangesFunc,
							node2IndexByteOffset, node1IndexByteOffset, depth2, depth1 + 1,
							newBox, ! reversed,
						)
					);

					_boxPool.releasePrimitive( newBox );

				}

			}

		}

		return result;

	}

	const obb = /* @__PURE__ */ new OrientedBox();
	const tempBox = /* @__PURE__ */ new three.Box3();

	class MeshBVH {

		static serialize( bvh, options = {} ) {

			options = {
				cloneBuffers: true,
				...options,
			};

			const geometry = bvh.geometry;
			const rootData = bvh._roots;
			const indirectBuffer = bvh._indirectBuffer;
			const indexAttribute = geometry.getIndex();
			let result;
			if ( options.cloneBuffers ) {

				result = {
					roots: rootData.map( root => root.slice() ),
					index: indexAttribute.array.slice(),
					indirectBuffer: indirectBuffer ? indirectBuffer.slice() : null,
				};

			} else {

				result = {
					roots: rootData,
					index: indexAttribute.array,
					indirectBuffer: indirectBuffer,
				};

			}

			return result;

		}

		static deserialize( data, geometry, options = {} ) {

			options = {
				setIndex: true,
				indirect: Boolean( data.indirectBuffer ),
				...options,
			};

			const { index, roots, indirectBuffer } = data;
			const bvh = new MeshBVH( geometry, { ...options, [ SKIP_GENERATION ]: true } );
			bvh._roots = roots;
			bvh._indirectBuffer = indirectBuffer || null;

			if ( options.setIndex ) {

				const indexAttribute = geometry.getIndex();
				if ( indexAttribute === null ) {

					const newIndex = new three.BufferAttribute( data.index, 1, false );
					geometry.setIndex( newIndex );

				} else if ( indexAttribute.array !== index ) {

					indexAttribute.array.set( index );
					indexAttribute.needsUpdate = true;

				}

			}

			return bvh;

		}

		get indirect() {

			return ! ! this._indirectBuffer;

		}

		constructor( geometry, options = {} ) {

			if ( ! geometry.isBufferGeometry ) {

				throw new Error( 'MeshBVH: Only BufferGeometries are supported.' );

			} else if ( geometry.index && geometry.index.isInterleavedBufferAttribute ) {

				throw new Error( 'MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.' );

			}

			// default options
			options = Object.assign( {

				strategy: CENTER,
				maxDepth: 40,
				maxLeafTris: 10,
				verbose: true,
				useSharedArrayBuffer: false,
				setBoundingBox: true,
				onProgress: null,
				indirect: false,

				// undocumented options

				// Whether to skip generating the tree. Used for deserialization.
				[ SKIP_GENERATION ]: false,

			}, options );

			if ( options.useSharedArrayBuffer && ! isSharedArrayBufferSupported() ) {

				throw new Error( 'MeshBVH: SharedArrayBuffer is not available.' );

			}

			// retain references to the geometry so we can use them it without having to
			// take a geometry reference in every function.
			this.geometry = geometry;
			this._roots = null;
			this._indirectBuffer = null;
			if ( ! options[ SKIP_GENERATION ] ) {

				buildPackedTree( this, options );

				if ( ! geometry.boundingBox && options.setBoundingBox ) {

					geometry.boundingBox = this.getBoundingBox( new three.Box3() );

				}

			}

			const { _indirectBuffer } = this;
			this.resolveTriangleIndex = options.indirect ? i => _indirectBuffer[ i ] : i => i;

		}

		refit( nodeIndices = null ) {

			const refitFunc = this.indirect ? refit_indirect : refit;
			return refitFunc( this, nodeIndices );

		}

		traverse( callback, rootIndex = 0 ) {

			const buffer = this._roots[ rootIndex ];
			const uint32Array = new Uint32Array( buffer );
			const uint16Array = new Uint16Array( buffer );
			_traverse( 0 );

			function _traverse( node32Index, depth = 0 ) {

				const node16Index = node32Index * 2;
				const isLeaf = uint16Array[ node16Index + 15 ] === IS_LEAFNODE_FLAG;
				if ( isLeaf ) {

					const offset = uint32Array[ node32Index + 6 ];
					const count = uint16Array[ node16Index + 14 ];
					callback( depth, isLeaf, new Float32Array( buffer, node32Index * 4, 6 ), offset, count );

				} else {

					// TODO: use node functions here
					const left = node32Index + BYTES_PER_NODE / 4;
					const right = uint32Array[ node32Index + 6 ];
					const splitAxis = uint32Array[ node32Index + 7 ];
					const stopTraversal = callback( depth, isLeaf, new Float32Array( buffer, node32Index * 4, 6 ), splitAxis );

					if ( ! stopTraversal ) {

						_traverse( left, depth + 1 );
						_traverse( right, depth + 1 );

					}

				}

			}

		}

		/* Core Cast Functions */
		raycast( ray, materialOrSide = three.FrontSide ) {

			const roots = this._roots;
			const geometry = this.geometry;
			const intersects = [];
			const isMaterial = materialOrSide.isMaterial;
			const isArrayMaterial = Array.isArray( materialOrSide );

			const groups = geometry.groups;
			const side = isMaterial ? materialOrSide.side : materialOrSide;
			const raycastFunc = this.indirect ? raycast_indirect : raycast;
			for ( let i = 0, l = roots.length; i < l; i ++ ) {

				const materialSide = isArrayMaterial ? materialOrSide[ groups[ i ].materialIndex ].side : side;
				const startCount = intersects.length;

				raycastFunc( this, i, materialSide, ray, intersects );

				if ( isArrayMaterial ) {

					const materialIndex = groups[ i ].materialIndex;
					for ( let j = startCount, jl = intersects.length; j < jl; j ++ ) {

						intersects[ j ].face.materialIndex = materialIndex;

					}

				}

			}

			return intersects;

		}

		raycastFirst( ray, materialOrSide = three.FrontSide ) {

			const roots = this._roots;
			const geometry = this.geometry;
			const isMaterial = materialOrSide.isMaterial;
			const isArrayMaterial = Array.isArray( materialOrSide );

			let closestResult = null;

			const groups = geometry.groups;
			const side = isMaterial ? materialOrSide.side : materialOrSide;
			const raycastFirstFunc = this.indirect ? raycastFirst_indirect : raycastFirst;
			for ( let i = 0, l = roots.length; i < l; i ++ ) {

				const materialSide = isArrayMaterial ? materialOrSide[ groups[ i ].materialIndex ].side : side;
				const result = raycastFirstFunc( this, i, materialSide, ray );
				if ( result != null && ( closestResult == null || result.distance < closestResult.distance ) ) {

					closestResult = result;
					if ( isArrayMaterial ) {

						result.face.materialIndex = groups[ i ].materialIndex;

					}

				}

			}

			return closestResult;

		}

		intersectsGeometry( otherGeometry, geomToMesh ) {

			let result = false;
			const roots = this._roots;
			const intersectsGeometryFunc = this.indirect ? intersectsGeometry_indirect : intersectsGeometry;
			for ( let i = 0, l = roots.length; i < l; i ++ ) {

				result = intersectsGeometryFunc( this, i, otherGeometry, geomToMesh );

				if ( result ) {

					break;

				}

			}

			return result;

		}

		shapecast( callbacks ) {

			const triangle = ExtendedTrianglePool.getPrimitive();
			const iterateFunc = this.indirect ? iterateOverTriangles_indirect : iterateOverTriangles;
			let {
				boundsTraverseOrder,
				intersectsBounds,
				intersectsRange,
				intersectsTriangle,
			} = callbacks;

			// wrap the intersectsRange function
			if ( intersectsRange && intersectsTriangle ) {

				const originalIntersectsRange = intersectsRange;
				intersectsRange = ( offset, count, contained, depth, nodeIndex ) => {

					if ( ! originalIntersectsRange( offset, count, contained, depth, nodeIndex ) ) {

						return iterateFunc( offset, count, this, intersectsTriangle, contained, depth, triangle );

					}

					return true;

				};

			} else if ( ! intersectsRange ) {

				if ( intersectsTriangle ) {

					intersectsRange = ( offset, count, contained, depth ) => {

						return iterateFunc( offset, count, this, intersectsTriangle, contained, depth, triangle );

					};

				} else {

					intersectsRange = ( offset, count, contained ) => {

						return contained;

					};

				}

			}

			// run shapecast
			let result = false;
			let byteOffset = 0;
			const roots = this._roots;
			for ( let i = 0, l = roots.length; i < l; i ++ ) {

				const root = roots[ i ];
				result = shapecast( this, i, intersectsBounds, intersectsRange, boundsTraverseOrder, byteOffset );

				if ( result ) {

					break;

				}

				byteOffset += root.byteLength;

			}

			ExtendedTrianglePool.releasePrimitive( triangle );

			return result;

		}

		bvhcast( otherBvh, matrixToLocal, callbacks ) {

			let {
				intersectsRanges,
				intersectsTriangles,
			} = callbacks;

			const triangle1 = ExtendedTrianglePool.getPrimitive();
			const indexAttr1 = this.geometry.index;
			const positionAttr1 = this.geometry.attributes.position;
			const assignTriangle1 = this.indirect ?
				i1 => {


					const ti = this.resolveTriangleIndex( i1 );
					setTriangle( triangle1, ti * 3, indexAttr1, positionAttr1 );

				} :
				i1 => {

					setTriangle( triangle1, i1 * 3, indexAttr1, positionAttr1 );

				};

			const triangle2 = ExtendedTrianglePool.getPrimitive();
			const indexAttr2 = otherBvh.geometry.index;
			const positionAttr2 = otherBvh.geometry.attributes.position;
			const assignTriangle2 = otherBvh.indirect ?
				i2 => {

					const ti2 = otherBvh.resolveTriangleIndex( i2 );
					setTriangle( triangle2, ti2 * 3, indexAttr2, positionAttr2 );

				} :
				i2 => {

					setTriangle( triangle2, i2 * 3, indexAttr2, positionAttr2 );

				};

			// generate triangle callback if needed
			if ( intersectsTriangles ) {

				const iterateOverDoubleTriangles = ( offset1, count1, offset2, count2, depth1, index1, depth2, index2 ) => {

					for ( let i2 = offset2, l2 = offset2 + count2; i2 < l2; i2 ++ ) {

						assignTriangle2( i2 );

						triangle2.a.applyMatrix4( matrixToLocal );
						triangle2.b.applyMatrix4( matrixToLocal );
						triangle2.c.applyMatrix4( matrixToLocal );
						triangle2.needsUpdate = true;

						for ( let i1 = offset1, l1 = offset1 + count1; i1 < l1; i1 ++ ) {

							assignTriangle1( i1 );

							triangle1.needsUpdate = true;

							if ( intersectsTriangles( triangle1, triangle2, i1, i2, depth1, index1, depth2, index2 ) ) {

								return true;

							}

						}

					}

					return false;

				};

				if ( intersectsRanges ) {

					const originalIntersectsRanges = intersectsRanges;
					intersectsRanges = function ( offset1, count1, offset2, count2, depth1, index1, depth2, index2 ) {

						if ( ! originalIntersectsRanges( offset1, count1, offset2, count2, depth1, index1, depth2, index2 ) ) {

							return iterateOverDoubleTriangles( offset1, count1, offset2, count2, depth1, index1, depth2, index2 );

						}

						return true;

					};

				} else {

					intersectsRanges = iterateOverDoubleTriangles;

				}

			}

			return bvhcast( this, otherBvh, matrixToLocal, intersectsRanges );

		}


		/* Derived Cast Functions */
		intersectsBox( box, boxToMesh ) {

			obb.set( box.min, box.max, boxToMesh );
			obb.needsUpdate = true;

			return this.shapecast(
				{
					intersectsBounds: box => obb.intersectsBox( box ),
					intersectsTriangle: tri => obb.intersectsTriangle( tri )
				}
			);

		}

		intersectsSphere( sphere ) {

			return this.shapecast(
				{
					intersectsBounds: box => sphere.intersectsBox( box ),
					intersectsTriangle: tri => tri.intersectsSphere( sphere )
				}
			);

		}

		closestPointToGeometry( otherGeometry, geometryToBvh, target1 = { }, target2 = { }, minThreshold = 0, maxThreshold = Infinity ) {

			const closestPointToGeometryFunc = this.indirect ? closestPointToGeometry_indirect : closestPointToGeometry;
			return closestPointToGeometryFunc(
				this,
				otherGeometry,
				geometryToBvh,
				target1,
				target2,
				minThreshold,
				maxThreshold,
			);

		}

		closestPointToPoint( point, target = { }, minThreshold = 0, maxThreshold = Infinity ) {

			return closestPointToPoint(
				this,
				point,
				target,
				minThreshold,
				maxThreshold,
			);

		}

		getBoundingBox( target ) {

			target.makeEmpty();

			const roots = this._roots;
			roots.forEach( buffer => {

				arrayToBox( 0, new Float32Array( buffer ), tempBox );
				target.union( tempBox );

			} );

			return target;

		}

	}

	const boundingBox = /* @__PURE__ */ new three.Box3();
	class MeshBVHRootVisualizer extends three.Object3D {

		get isMesh() {

			return ! this.displayEdges;

		}

		get isLineSegments() {

			return this.displayEdges;

		}

		get isLine() {

			return this.displayEdges;

		}

		constructor( mesh, material, depth = 10, group = 0 ) {

			super();

			this.material = material;
			this.geometry = new three.BufferGeometry();
			this.name = 'MeshBVHRootVisualizer';
			this.depth = depth;
			this.displayParents = false;
			this.mesh = mesh;
			this.displayEdges = true;
			this._group = group;

		}

		raycast() {}

		update() {

			const geometry = this.geometry;
			const boundsTree = this.mesh.geometry.boundsTree;
			const group = this._group;
			geometry.dispose();
			this.visible = false;
			if ( boundsTree ) {

				// count the number of bounds required
				const targetDepth = this.depth - 1;
				const displayParents = this.displayParents;
				let boundsCount = 0;
				boundsTree.traverse( ( depth, isLeaf ) => {

					if ( depth === targetDepth || isLeaf ) {

						boundsCount ++;
						return true;

					} else if ( displayParents ) {

						boundsCount ++;

					}

				}, group );

				// fill in the position buffer with the bounds corners
				let posIndex = 0;
				const positionArray = new Float32Array( 8 * 3 * boundsCount );
				boundsTree.traverse( ( depth, isLeaf, boundingData ) => {

					const terminate = depth === targetDepth || isLeaf;
					if ( terminate || displayParents ) {

						arrayToBox( 0, boundingData, boundingBox );

						const { min, max } = boundingBox;
						for ( let x = - 1; x <= 1; x += 2 ) {

							const xVal = x < 0 ? min.x : max.x;
							for ( let y = - 1; y <= 1; y += 2 ) {

								const yVal = y < 0 ? min.y : max.y;
								for ( let z = - 1; z <= 1; z += 2 ) {

									const zVal = z < 0 ? min.z : max.z;
									positionArray[ posIndex + 0 ] = xVal;
									positionArray[ posIndex + 1 ] = yVal;
									positionArray[ posIndex + 2 ] = zVal;

									posIndex += 3;

								}

							}

						}

						return terminate;

					}

				}, group );

				let indexArray;
				let indices;
				if ( this.displayEdges ) {

					// fill in the index buffer to point to the corner points
					indices = new Uint8Array( [
						// x axis
						0, 4,
						1, 5,
						2, 6,
						3, 7,

						// y axis
						0, 2,
						1, 3,
						4, 6,
						5, 7,

						// z axis
						0, 1,
						2, 3,
						4, 5,
						6, 7,
					] );

				} else {

					indices = new Uint8Array( [

						// X-, X+
						0, 1, 2,
						2, 1, 3,

						4, 6, 5,
						6, 7, 5,

						// Y-, Y+
						1, 4, 5,
						0, 4, 1,

						2, 3, 6,
						3, 7, 6,

						// Z-, Z+
						0, 2, 4,
						2, 6, 4,

						1, 5, 3,
						3, 5, 7,

					] );

				}

				if ( positionArray.length > 65535 ) {

					indexArray = new Uint32Array( indices.length * boundsCount );

				} else {

					indexArray = new Uint16Array( indices.length * boundsCount );

				}

				const indexLength = indices.length;
				for ( let i = 0; i < boundsCount; i ++ ) {

					const posOffset = i * 8;
					const indexOffset = i * indexLength;
					for ( let j = 0; j < indexLength; j ++ ) {

						indexArray[ indexOffset + j ] = posOffset + indices[ j ];

					}

				}

				// update the geometry
				geometry.setIndex(
					new three.BufferAttribute( indexArray, 1, false ),
				);
				geometry.setAttribute(
					'position',
					new three.BufferAttribute( positionArray, 3, false ),
				);
				this.visible = true;

			}

		}

	}

	class MeshBVHVisualizer extends three.Group {

		get color() {

			return this.edgeMaterial.color;

		}

		get opacity() {

			return this.edgeMaterial.opacity;

		}

		set opacity( v ) {

			this.edgeMaterial.opacity = v;
			this.meshMaterial.opacity = v;

		}

		constructor( mesh, depth = 10 ) {

			super();

			this.name = 'MeshBVHVisualizer';
			this.depth = depth;
			this.mesh = mesh;
			this.displayParents = false;
			this.displayEdges = true;
			this._roots = [];

			const edgeMaterial = new three.LineBasicMaterial( {
				color: 0x00FF88,
				transparent: true,
				opacity: 0.3,
				depthWrite: false,
			} );

			const meshMaterial = new three.MeshBasicMaterial( {
				color: 0x00FF88,
				transparent: true,
				opacity: 0.3,
				depthWrite: false,
			} );

			meshMaterial.color = edgeMaterial.color;

			this.edgeMaterial = edgeMaterial;
			this.meshMaterial = meshMaterial;

			this.update();

		}

		update() {

			const bvh = this.mesh.geometry.boundsTree;
			const totalRoots = bvh ? bvh._roots.length : 0;
			while ( this._roots.length > totalRoots ) {

				const root = this._roots.pop();
				root.geometry.dispose();
				this.remove( root );

			}

			for ( let i = 0; i < totalRoots; i ++ ) {

				if ( i >= this._roots.length ) {

					const root = new MeshBVHRootVisualizer( this.mesh, this.edgeMaterial, this.depth, i );
					this.add( root );
					this._roots.push( root );

				}

				const root = this._roots[ i ];
				root.depth = this.depth;
				root.mesh = this.mesh;
				root.displayParents = this.displayParents;
				root.displayEdges = this.displayEdges;
				root.material = this.displayEdges ? this.edgeMaterial : this.meshMaterial;
				root.update();

			}

		}

		updateMatrixWorld( ...args ) {

			this.position.copy( this.mesh.position );
			this.rotation.copy( this.mesh.rotation );
			this.scale.copy( this.mesh.scale );

			super.updateMatrixWorld( ...args );

		}

		copy( source ) {

			this.depth = source.depth;
			this.mesh = source.mesh;

		}

		clone() {

			return new MeshBVHVisualizer( this.mesh, this.depth );

		}

		dispose() {

			this.edgeMaterial.dispose();
			this.meshMaterial.dispose();

			const children = this.children;
			for ( let i = 0, l = children.length; i < l; i ++ ) {

				children[ i ].geometry.dispose();

			}

		}

	}

	const _box1 = /* @__PURE__ */ new three.Box3();
	const _box2 = /* @__PURE__ */ new three.Box3();
	const _vec = /* @__PURE__ */ new three.Vector3();

	// https://stackoverflow.com/questions/1248302/how-to-get-the-size-of-a-javascript-object
	function getPrimitiveSize( el ) {

		switch ( typeof el ) {

			case 'number':
				return 8;
			case 'string':
				return el.length * 2;
			case 'boolean':
				return 4;
			default:
				return 0;

		}

	}

	function isTypedArray( arr ) {

		const regex = /(Uint|Int|Float)(8|16|32)Array/;
		return regex.test( arr.constructor.name );

	}

	function getRootExtremes( bvh, group ) {

		const result = {
			nodeCount: 0,
			leafNodeCount: 0,

			depth: {
				min: Infinity, max: - Infinity
			},
			tris: {
				min: Infinity, max: - Infinity
			},
			splits: [ 0, 0, 0 ],
			surfaceAreaScore: 0,
		};

		bvh.traverse( ( depth, isLeaf, boundingData, offsetOrSplit, count ) => {

			const l0 = boundingData[ 0 + 3 ] - boundingData[ 0 ];
			const l1 = boundingData[ 1 + 3 ] - boundingData[ 1 ];
			const l2 = boundingData[ 2 + 3 ] - boundingData[ 2 ];

			const surfaceArea = 2 * ( l0 * l1 + l1 * l2 + l2 * l0 );

			result.nodeCount ++;
			if ( isLeaf ) {

				result.leafNodeCount ++;

				result.depth.min = Math.min( depth, result.depth.min );
				result.depth.max = Math.max( depth, result.depth.max );

				result.tris.min = Math.min( count, result.tris.min );
				result.tris.max = Math.max( count, result.tris.max );

				result.surfaceAreaScore += surfaceArea * TRIANGLE_INTERSECT_COST * count;

			} else {

				result.splits[ offsetOrSplit ] ++;

				result.surfaceAreaScore += surfaceArea * TRAVERSAL_COST;

			}

		}, group );

		// If there are no leaf nodes because the tree hasn't finished generating yet.
		if ( result.tris.min === Infinity ) {

			result.tris.min = 0;
			result.tris.max = 0;

		}

		if ( result.depth.min === Infinity ) {

			result.depth.min = 0;
			result.depth.max = 0;

		}

		return result;

	}

	function getBVHExtremes( bvh ) {

		return bvh._roots.map( ( root, i ) => getRootExtremes( bvh, i ) );

	}

	function estimateMemoryInBytes( obj ) {

		const traversed = new Set();
		const stack = [ obj ];
		let bytes = 0;

		while ( stack.length ) {

			const curr = stack.pop();
			if ( traversed.has( curr ) ) {

				continue;

			}

			traversed.add( curr );

			for ( let key in curr ) {

				if ( ! curr.hasOwnProperty( key ) ) {

					continue;

				}

				bytes += getPrimitiveSize( key );

				const value = curr[ key ];
				if ( value && ( typeof value === 'object' || typeof value === 'function' ) ) {

					if ( isTypedArray( value ) ) {

						bytes += value.byteLength;

					} else if ( isSharedArrayBufferSupported() && value instanceof SharedArrayBuffer ) {

						bytes += value.byteLength;

					} else if ( value instanceof ArrayBuffer ) {

						bytes += value.byteLength;

					} else {

						stack.push( value );

					}

				} else {

					bytes += getPrimitiveSize( value );

				}


			}

		}

		return bytes;

	}

	function validateBounds( bvh ) {

		const geometry = bvh.geometry;
		const depthStack = [];
		const index = geometry.index;
		const position = geometry.getAttribute( 'position' );
		let passes = true;

		bvh.traverse( ( depth, isLeaf, boundingData, offset, count ) => {

			const info = {
				depth,
				isLeaf,
				boundingData,
				offset,
				count,
			};
			depthStack[ depth ] = info;

			arrayToBox( 0, boundingData, _box1 );
			const parent = depthStack[ depth - 1 ];

			if ( isLeaf ) {

				// check triangles
				for ( let i = offset * 3, l = ( offset + count ) * 3; i < l; i += 3 ) {

					const i0 = index.getX( i );
					const i1 = index.getX( i + 1 );
					const i2 = index.getX( i + 2 );

					let isContained;

					_vec.fromBufferAttribute( position, i0 );
					isContained = _box1.containsPoint( _vec );

					_vec.fromBufferAttribute( position, i1 );
					isContained = isContained && _box1.containsPoint( _vec );

					_vec.fromBufferAttribute( position, i2 );
					isContained = isContained && _box1.containsPoint( _vec );

					console.assert( isContained, 'Leaf bounds does not fully contain triangle.' );
					passes = passes && isContained;

				}

			}

			if ( parent ) {

				// check if my bounds fit in my parents
				arrayToBox( 0, boundingData, _box2 );

				const isContained = _box2.containsBox( _box1 );
				console.assert( isContained, 'Parent bounds does not fully contain child.' );
				passes = passes && isContained;

			}

		} );

		return passes;

	}

	// Returns a simple, human readable object that represents the BVH.
	function getJSONStructure( bvh ) {

		const depthStack = [];

		bvh.traverse( ( depth, isLeaf, boundingData, offset, count ) => {

			const info = {
				bounds: arrayToBox( 0, boundingData, new three.Box3() ),
			};

			if ( isLeaf ) {

				info.count = count;
				info.offset = offset;

			} else {

				info.left = null;
				info.right = null;

			}

			depthStack[ depth ] = info;

			// traversal hits the left then right node
			const parent = depthStack[ depth - 1 ];
			if ( parent ) {

				if ( parent.left === null ) {

					parent.left = info;

				} else {

					parent.right = info;

				}

			}

		} );

		return depthStack[ 0 ];

	}

	// converts the given BVH raycast intersection to align with the three.js raycast
	// structure (include object, world space distance and point).
	function convertRaycastIntersect( hit, object, raycaster ) {

		if ( hit === null ) {

			return null;

		}

		hit.point.applyMatrix4( object.matrixWorld );
		hit.distance = hit.point.distanceTo( raycaster.ray.origin );
		hit.object = object;

		if ( hit.distance < raycaster.near || hit.distance > raycaster.far ) {

			return null;

		} else {

			return hit;

		}

	}

	const ray = /* @__PURE__ */ new three.Ray();
	const tmpInverseMatrix = /* @__PURE__ */ new three.Matrix4();
	const origMeshRaycastFunc = three.Mesh.prototype.raycast;

	function acceleratedRaycast( raycaster, intersects ) {

		if ( this.geometry.boundsTree ) {

			if ( this.material === undefined ) return;

			tmpInverseMatrix.copy( this.matrixWorld ).invert();
			ray.copy( raycaster.ray ).applyMatrix4( tmpInverseMatrix );

			const bvh = this.geometry.boundsTree;
			if ( raycaster.firstHitOnly === true ) {

				const hit = convertRaycastIntersect( bvh.raycastFirst( ray, this.material ), this, raycaster );
				if ( hit ) {

					intersects.push( hit );

				}

			} else {

				const hits = bvh.raycast( ray, this.material );
				for ( let i = 0, l = hits.length; i < l; i ++ ) {

					const hit = convertRaycastIntersect( hits[ i ], this, raycaster );
					if ( hit ) {

						intersects.push( hit );

					}

				}

			}

		} else {

			origMeshRaycastFunc.call( this, raycaster, intersects );

		}

	}

	function computeBoundsTree( options ) {

		this.boundsTree = new MeshBVH( this, options );
		return this.boundsTree;

	}

	function disposeBoundsTree() {

		this.boundsTree = null;

	}

	function countToStringFormat( count ) {

		switch ( count ) {

			case 1: return 'R';
			case 2: return 'RG';
			case 3: return 'RGBA';
			case 4: return 'RGBA';

		}

		throw new Error();

	}

	function countToFormat( count ) {

		switch ( count ) {

			case 1: return three.RedFormat;
			case 2: return three.RGFormat;
			case 3: return three.RGBAFormat;
			case 4: return three.RGBAFormat;

		}

	}

	function countToIntFormat( count ) {

		switch ( count ) {

			case 1: return three.RedIntegerFormat;
			case 2: return three.RGIntegerFormat;
			case 3: return three.RGBAIntegerFormat;
			case 4: return three.RGBAIntegerFormat;

		}

	}

	class VertexAttributeTexture extends three.DataTexture {

		constructor() {

			super();
			this.minFilter = three.NearestFilter;
			this.magFilter = three.NearestFilter;
			this.generateMipmaps = false;
			this.overrideItemSize = null;
			this._forcedType = null;

		}

		updateFrom( attr ) {

			const overrideItemSize = this.overrideItemSize;
			const originalItemSize = attr.itemSize;
			const originalCount = attr.count;
			if ( overrideItemSize !== null ) {

				if ( ( originalItemSize * originalCount ) % overrideItemSize !== 0.0 ) {

					throw new Error( 'VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.' );

				}

				attr.itemSize = overrideItemSize;
				attr.count = originalCount * originalItemSize / overrideItemSize;

			}

			const itemSize = attr.itemSize;
			const count = attr.count;
			const normalized = attr.normalized;
			const originalBufferCons = attr.array.constructor;
			const byteCount = originalBufferCons.BYTES_PER_ELEMENT;
			let targetType = this._forcedType;
			let finalStride = itemSize;

			// derive the type of texture this should be in the shader
			if ( targetType === null ) {

				switch ( originalBufferCons ) {

					case Float32Array:
						targetType = three.FloatType;
						break;

					case Uint8Array:
					case Uint16Array:
					case Uint32Array:
						targetType = three.UnsignedIntType;
						break;

					case Int8Array:
					case Int16Array:
					case Int32Array:
						targetType = three.IntType;
						break;

				}

			}

			// get the target format to store the texture as
			let type, format, normalizeValue, targetBufferCons;
			let internalFormat = countToStringFormat( itemSize );
			switch ( targetType ) {

				case three.FloatType:
					normalizeValue = 1.0;
					format = countToFormat( itemSize );

					if ( normalized && byteCount === 1 ) {

						targetBufferCons = originalBufferCons;
						internalFormat += '8';

						if ( originalBufferCons === Uint8Array ) {

							type = three.UnsignedByteType;

						} else {

							type = three.ByteType;
							internalFormat += '_SNORM';

						}

					} else {

						targetBufferCons = Float32Array;
						internalFormat += '32F';
						type = three.FloatType;

					}

					break;

				case three.IntType:
					internalFormat += byteCount * 8 + 'I';
					normalizeValue = normalized ? Math.pow( 2, originalBufferCons.BYTES_PER_ELEMENT * 8 - 1 ) : 1.0;
					format = countToIntFormat( itemSize );

					if ( byteCount === 1 ) {

						targetBufferCons = Int8Array;
						type = three.ByteType;

					} else if ( byteCount === 2 ) {

						targetBufferCons = Int16Array;
						type = three.ShortType;

					} else {

						targetBufferCons = Int32Array;
						type = three.IntType;

					}

					break;

				case three.UnsignedIntType:
					internalFormat += byteCount * 8 + 'UI';
					normalizeValue = normalized ? Math.pow( 2, originalBufferCons.BYTES_PER_ELEMENT * 8 - 1 ) : 1.0;
					format = countToIntFormat( itemSize );

					if ( byteCount === 1 ) {

						targetBufferCons = Uint8Array;
						type = three.UnsignedByteType;

					} else if ( byteCount === 2 ) {

						targetBufferCons = Uint16Array;
						type = three.UnsignedShortType;

					} else {

						targetBufferCons = Uint32Array;
						type = three.UnsignedIntType;

					}

					break;

			}

			// there will be a mismatch between format length and final length because
			// RGBFormat and RGBIntegerFormat was removed
			if ( finalStride === 3 && ( format === three.RGBAFormat || format === three.RGBAIntegerFormat ) ) {

				finalStride = 4;

			}

			// copy the data over to the new texture array
			const dimension = Math.ceil( Math.sqrt( count ) );
			const length = finalStride * dimension * dimension;
			const dataArray = new targetBufferCons( length );

			// temporarily set the normalized state to false since we have custom normalization logic
			const originalNormalized = attr.normalized;
			attr.normalized = false;
			for ( let i = 0; i < count; i ++ ) {

				const ii = finalStride * i;
				dataArray[ ii ] = attr.getX( i ) / normalizeValue;

				if ( itemSize >= 2 ) {

					dataArray[ ii + 1 ] = attr.getY( i ) / normalizeValue;

				}

				if ( itemSize >= 3 ) {

					dataArray[ ii + 2 ] = attr.getZ( i ) / normalizeValue;

					if ( finalStride === 4 ) {

						dataArray[ ii + 3 ] = 1.0;

					}

				}

				if ( itemSize >= 4 ) {

					dataArray[ ii + 3 ] = attr.getW( i ) / normalizeValue;

				}

			}

			attr.normalized = originalNormalized;

			this.internalFormat = internalFormat;
			this.format = format;
			this.type = type;
			this.image.width = dimension;
			this.image.height = dimension;
			this.image.data = dataArray;
			this.needsUpdate = true;
			this.dispose();

			attr.itemSize = originalItemSize;
			attr.count = originalCount;

		}

	}

	class UIntVertexAttributeTexture extends VertexAttributeTexture {

		constructor() {

			super();
			this._forcedType = three.UnsignedIntType;

		}

	}

	class IntVertexAttributeTexture extends VertexAttributeTexture {

		constructor() {

			super();
			this._forcedType = three.IntType;

		}


	}

	class FloatVertexAttributeTexture extends VertexAttributeTexture {

		constructor() {

			super();
			this._forcedType = three.FloatType;

		}

	}

	class MeshBVHUniformStruct {

		constructor() {

			this.index = new UIntVertexAttributeTexture();
			this.position = new FloatVertexAttributeTexture();
			this.bvhBounds = new three.DataTexture();
			this.bvhContents = new three.DataTexture();
			this._cachedIndexAttr = null;

			this.index.overrideItemSize = 3;

		}

		updateFrom( bvh ) {

			const { geometry } = bvh;
			bvhToTextures( bvh, this.bvhBounds, this.bvhContents );

			this.position.updateFrom( geometry.attributes.position );

			// dereference a new index attribute if we're using indirect storage
			if ( bvh.indirect ) {

				const indirectBuffer = bvh._indirectBuffer;
				if (
					this._cachedIndexAttr === null ||
					this._cachedIndexAttr.count !== indirectBuffer.length
				) {

					if ( geometry.index ) {

						this._cachedIndexAttr = geometry.index.clone();

					} else {

						const array = getIndexArray( getVertexCount( geometry ) );
						this._cachedIndexAttr = new three.BufferAttribute( array, 1, false );

					}

				}

				dereferenceIndex( geometry, indirectBuffer, this._cachedIndexAttr );
				this.index.updateFrom( this._cachedIndexAttr );

			} else {

				this.index.updateFrom( geometry.index );

			}

		}

		dispose() {

			const { index, position, bvhBounds, bvhContents } = this;

			if ( index ) index.dispose();
			if ( position ) position.dispose();
			if ( bvhBounds ) bvhBounds.dispose();
			if ( bvhContents ) bvhContents.dispose();

		}

	}

	function dereferenceIndex( geometry, indirectBuffer, target ) {

		const unpacked = target.array;
		const indexArray = geometry.index ? geometry.index.array : null;
		for ( let i = 0, l = indirectBuffer.length; i < l; i ++ ) {

			const i3 = 3 * i;
			const v3 = 3 * indirectBuffer[ i ];
			for ( let c = 0; c < 3; c ++ ) {

				unpacked[ i3 + c ] = indexArray ? indexArray[ v3 + c ] : v3 + c;

			}

		}

	}

	function bvhToTextures( bvh, boundsTexture, contentsTexture ) {

		const roots = bvh._roots;

		if ( roots.length !== 1 ) {

			throw new Error( 'MeshBVHUniformStruct: Multi-root BVHs not supported.' );

		}

		const root = roots[ 0 ];
		const uint16Array = new Uint16Array( root );
		const uint32Array = new Uint32Array( root );
		const float32Array = new Float32Array( root );

		// Both bounds need two elements per node so compute the height so it's twice as long as
		// the width so we can expand the row by two and still have a square texture
		const nodeCount = root.byteLength / BYTES_PER_NODE;
		const boundsDimension = 2 * Math.ceil( Math.sqrt( nodeCount / 2 ) );
		const boundsArray = new Float32Array( 4 * boundsDimension * boundsDimension );

		const contentsDimension = Math.ceil( Math.sqrt( nodeCount ) );
		const contentsArray = new Uint32Array( 2 * contentsDimension * contentsDimension );

		for ( let i = 0; i < nodeCount; i ++ ) {

			const nodeIndex32 = i * BYTES_PER_NODE / 4;
			const nodeIndex16 = nodeIndex32 * 2;
			const boundsIndex = BOUNDING_DATA_INDEX( nodeIndex32 );
			for ( let b = 0; b < 3; b ++ ) {

				boundsArray[ 8 * i + 0 + b ] = float32Array[ boundsIndex + 0 + b ];
				boundsArray[ 8 * i + 4 + b ] = float32Array[ boundsIndex + 3 + b ];

			}

			if ( IS_LEAF( nodeIndex16, uint16Array ) ) {

				const count = COUNT( nodeIndex16, uint16Array );
				const offset = OFFSET( nodeIndex32, uint32Array );

				const mergedLeafCount = 0xffff0000 | count;
				contentsArray[ i * 2 + 0 ] = mergedLeafCount;
				contentsArray[ i * 2 + 1 ] = offset;

			} else {

				const rightIndex = 4 * RIGHT_NODE( nodeIndex32, uint32Array ) / BYTES_PER_NODE;
				const splitAxis = SPLIT_AXIS( nodeIndex32, uint32Array );

				contentsArray[ i * 2 + 0 ] = splitAxis;
				contentsArray[ i * 2 + 1 ] = rightIndex;

			}

		}

		boundsTexture.image.data = boundsArray;
		boundsTexture.image.width = boundsDimension;
		boundsTexture.image.height = boundsDimension;
		boundsTexture.format = three.RGBAFormat;
		boundsTexture.type = three.FloatType;
		boundsTexture.internalFormat = 'RGBA32F';
		boundsTexture.minFilter = three.NearestFilter;
		boundsTexture.magFilter = three.NearestFilter;
		boundsTexture.generateMipmaps = false;
		boundsTexture.needsUpdate = true;
		boundsTexture.dispose();

		contentsTexture.image.data = contentsArray;
		contentsTexture.image.width = contentsDimension;
		contentsTexture.image.height = contentsDimension;
		contentsTexture.format = three.RGIntegerFormat;
		contentsTexture.type = three.UnsignedIntType;
		contentsTexture.internalFormat = 'RG32UI';
		contentsTexture.minFilter = three.NearestFilter;
		contentsTexture.magFilter = three.NearestFilter;
		contentsTexture.generateMipmaps = false;
		contentsTexture.needsUpdate = true;
		contentsTexture.dispose();

	}

	// Note that a struct cannot be used for the hit record including faceIndices, faceNormal, barycoord,
	// side, and dist because on some mobile GPUS (such as Adreno) numbers are afforded less precision specifically
	// when in a struct leading to inaccurate hit results. See KhronosGroup/WebGL#3351 for more details.
	const shaderStructs = /* glsl */`
#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;

	const shaderIntersectFunction = /* glsl */`

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}

// Raycasting
float intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	float dist = max( t0, 0.0 );

	return t1 >= dist ? dist : INFINITY;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	BVH bvh, vec3 rayOrigin, vec3 rayDirection, uint offset, uint count,
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( bvh.index, i ).xyz;
		vec3 a = texelFetch1D( bvh.position, indices.x ).rgb;
		vec3 b = texelFetch1D( bvh.position, indices.y ).rgb;
		vec3 c = texelFetch1D( bvh.position, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

float intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, BVH bvh, uint currNodeIndex ) {

	vec3 boundsMin = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 0u ).xyz;
	vec3 boundsMax = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax );

}

bool bvhIntersectFirstHit(
	BVH bvh, vec3 rayOrigin, vec3 rayDirection,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ 60 ];
	stack[ 0 ] = 0u;

	float triangleDistance = 1e20;
	bool found = false;
	while ( ptr > - 1 && ptr < 60 ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh, currNodeIndex );
		if ( boundsHitDistance == INFINITY || boundsHitDistance > triangleDistance ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh.bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh, rayOrigin, rayDirection, offset, count, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;

	// Distance to Point
	const shaderDistanceFunction = /* glsl */`

float dot2( vec3 v ) {

	return dot( v, v );

}

// https://www.shadertoy.com/view/ttfGWl
vec3 closestPointToTriangle( vec3 p, vec3 v0, vec3 v1, vec3 v2, out vec3 barycoord ) {

    vec3 v10 = v1 - v0;
    vec3 v21 = v2 - v1;
    vec3 v02 = v0 - v2;

	vec3 p0 = p - v0;
	vec3 p1 = p - v1;
	vec3 p2 = p - v2;

    vec3 nor = cross( v10, v02 );

    // method 2, in barycentric space
    vec3  q = cross( nor, p0 );
    float d = 1.0 / dot2( nor );
    float u = d * dot( q, v02 );
    float v = d * dot( q, v10 );
    float w = 1.0 - u - v;

	if( u < 0.0 ) {

		w = clamp( dot( p2, v02 ) / dot2( v02 ), 0.0, 1.0 );
		u = 0.0;
		v = 1.0 - w;

	} else if( v < 0.0 ) {

		u = clamp( dot( p0, v10 ) / dot2( v10 ), 0.0, 1.0 );
		v = 0.0;
		w = 1.0 - u;

	} else if( w < 0.0 ) {

		v = clamp( dot( p1, v21 ) / dot2( v21 ), 0.0, 1.0 );
		w = 0.0;
		u = 1.0-v;

	}

	barycoord = vec3( u, v, w );
    return u * v1 + v * v2 + w * v0;

}

float distanceToTriangles(
	BVH bvh, vec3 point, uint offset, uint count, float closestDistanceSquared,

	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord, inout float side, inout vec3 outPoint
) {

	bool found = false;
	uvec3 localIndices;
	vec3 localBarycoord;
	vec3 localNormal;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( bvh.index, i ).xyz;
		vec3 a = texelFetch1D( bvh.position, indices.x ).rgb;
		vec3 b = texelFetch1D( bvh.position, indices.y ).rgb;
		vec3 c = texelFetch1D( bvh.position, indices.z ).rgb;

		// get the closest point and barycoord
		vec3 closestPoint = closestPointToTriangle( point, a, b, c, localBarycoord );
		vec3 delta = point - closestPoint;
		float sqDist = dot2( delta );
		if ( sqDist < closestDistanceSquared ) {

			// set the output results
			closestDistanceSquared = sqDist;
			faceIndices = uvec4( indices.xyz, i );
			faceNormal = normalize( cross( a - b, b - c ) );
			barycoord = localBarycoord;
			outPoint = closestPoint;
			side = sign( dot( faceNormal, delta ) );

		}

	}

	return closestDistanceSquared;

}

float distanceSqToBounds( vec3 point, vec3 boundsMin, vec3 boundsMax ) {

	vec3 clampedPoint = clamp( point, boundsMin, boundsMax );
	vec3 delta = point - clampedPoint;
	return dot( delta, delta );

}

float distanceSqToBVHNodeBoundsPoint( vec3 point, BVH bvh, uint currNodeIndex ) {

	vec3 boundsMin = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 0u ).xyz;
	vec3 boundsMax = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 1u ).xyz;
	return distanceSqToBounds( point, boundsMin, boundsMax );

}

float bvhClosestPointToPoint(
	BVH bvh, vec3 point,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout vec3 outPoint
 ) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ 60 ];
	stack[ 0 ] = 0u;
	float closestDistanceSquared = pow( 100000.0, 2.0 );
	bool found = false;
	while ( ptr > - 1 && ptr < 60 ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = distanceSqToBVHNodeBoundsPoint( point, bvh, currNodeIndex );
		if ( boundsHitDistance > closestDistanceSquared ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh.bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );
		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;
			closestDistanceSquared = distanceToTriangles(
				bvh, point, offset, count, closestDistanceSquared,

				// outputs
				faceIndices, faceNormal, barycoord, side, outPoint
			);

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;
			bool leftToRight = distanceSqToBVHNodeBoundsPoint( point, bvh, leftIndex ) < distanceSqToBVHNodeBoundsPoint( point, bvh, rightIndex );//rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;
			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return sqrt( closestDistanceSquared );

}
`;

	const _positionVector = /*@__PURE__*/ new three.Vector3();
	const _normalVector = /*@__PURE__*/ new three.Vector3();
	const _tangentVector = /*@__PURE__*/ new three.Vector3();
	const _tangentVector4 = /*@__PURE__*/ new three.Vector4();

	const _morphVector = /*@__PURE__*/ new three.Vector3();
	const _temp = /*@__PURE__*/ new three.Vector3();

	const _skinIndex = /*@__PURE__*/ new three.Vector4();
	const _skinWeight = /*@__PURE__*/ new three.Vector4();
	const _matrix = /*@__PURE__*/ new three.Matrix4();
	const _boneMatrix = /*@__PURE__*/ new three.Matrix4();

	// Confirms that the two provided attributes are compatible
	function validateAttributes( attr1, attr2 ) {

		if ( ! attr1 && ! attr2 ) {

			return;

		}

		const sameCount = attr1.count === attr2.count;
		const sameNormalized = attr1.normalized === attr2.normalized;
		const sameType = attr1.array.constructor === attr2.array.constructor;
		const sameItemSize = attr1.itemSize === attr2.itemSize;

		if ( ! sameCount || ! sameNormalized || ! sameType || ! sameItemSize ) {

			throw new Error();

		}

	}

	// Clones the given attribute with a new compatible buffer attribute but no data
	function createAttributeClone( attr, countOverride = null ) {

		const cons = attr.array.constructor;
		const normalized = attr.normalized;
		const itemSize = attr.itemSize;
		const count = countOverride === null ? attr.count : countOverride;

		return new three.BufferAttribute( new cons( itemSize * count ), itemSize, normalized );

	}

	// target offset is the number of elements in the target buffer stride to skip before copying the
	// attributes contents in to.
	function copyAttributeContents( attr, target, targetOffset = 0 ) {

		if ( attr.isInterleavedBufferAttribute ) {

			const itemSize = attr.itemSize;
			for ( let i = 0, l = attr.count; i < l; i ++ ) {

				const io = i + targetOffset;
				target.setX( io, attr.getX( i ) );
				if ( itemSize >= 2 ) target.setY( io, attr.getY( i ) );
				if ( itemSize >= 3 ) target.setZ( io, attr.getZ( i ) );
				if ( itemSize >= 4 ) target.setW( io, attr.getW( i ) );

			}

		} else {

			const array = target.array;
			const cons = array.constructor;
			const byteOffset = array.BYTES_PER_ELEMENT * attr.itemSize * targetOffset;
			const temp = new cons( array.buffer, byteOffset, attr.array.length );
			temp.set( attr.array );

		}

	}

	// Adds the "matrix" multiplied by "scale" to "target"
	function addScaledMatrix( target, matrix, scale ) {

		const targetArray = target.elements;
		const matrixArray = matrix.elements;
		for ( let i = 0, l = matrixArray.length; i < l; i ++ ) {

			targetArray[ i ] += matrixArray[ i ] * scale;

		}

	}

	// A version of "SkinnedMesh.boneTransform" for normals
	function boneNormalTransform( mesh, index, target ) {

		const skeleton = mesh.skeleton;
		const geometry = mesh.geometry;
		const bones = skeleton.bones;
		const boneInverses = skeleton.boneInverses;

		_skinIndex.fromBufferAttribute( geometry.attributes.skinIndex, index );
		_skinWeight.fromBufferAttribute( geometry.attributes.skinWeight, index );

		_matrix.elements.fill( 0 );

		for ( let i = 0; i < 4; i ++ ) {

			const weight = _skinWeight.getComponent( i );

			if ( weight !== 0 ) {

				const boneIndex = _skinIndex.getComponent( i );
				_boneMatrix.multiplyMatrices( bones[ boneIndex ].matrixWorld, boneInverses[ boneIndex ] );

				addScaledMatrix( _matrix, _boneMatrix, weight );

			}

		}

		_matrix.multiply( mesh.bindMatrix ).premultiply( mesh.bindMatrixInverse );
		target.transformDirection( _matrix );

		return target;

	}

	// Applies the morph target data to the target vector
	function applyMorphTarget( morphData, morphInfluences, morphTargetsRelative, i, target ) {

		_morphVector.set( 0, 0, 0 );
		for ( let j = 0, jl = morphData.length; j < jl; j ++ ) {

			const influence = morphInfluences[ j ];
			const morphAttribute = morphData[ j ];

			if ( influence === 0 ) continue;

			_temp.fromBufferAttribute( morphAttribute, i );

			if ( morphTargetsRelative ) {

				_morphVector.addScaledVector( _temp, influence );

			} else {

				_morphVector.addScaledVector( _temp.sub( target ), influence );

			}

		}

		target.add( _morphVector );

	}

	// Modified version of BufferGeometryUtils.mergeBufferGeometries that ignores morph targets and updates a attributes in place
	function mergeBufferGeometries( geometries, options = { useGroups: false, updateIndex: false, skipAttributes: [] }, targetGeometry = new three.BufferGeometry() ) {

		const isIndexed = geometries[ 0 ].index !== null;
		const { useGroups = false, updateIndex = false, skipAttributes = [] } = options;

		const attributesUsed = new Set( Object.keys( geometries[ 0 ].attributes ) );
		const attributes = {};

		let offset = 0;

		targetGeometry.clearGroups();
		for ( let i = 0; i < geometries.length; ++ i ) {

			const geometry = geometries[ i ];
			let attributesCount = 0;

			// ensure that all geometries are indexed, or none
			if ( isIndexed !== ( geometry.index !== null ) ) {

				throw new Error( 'StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.' );

			}

			// gather attributes, exit early if they're different
			for ( const name in geometry.attributes ) {

				if ( ! attributesUsed.has( name ) ) {

					throw new Error( 'StaticGeometryGenerator: All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.' );

				}

				if ( attributes[ name ] === undefined ) {

					attributes[ name ] = [];

				}

				attributes[ name ].push( geometry.attributes[ name ] );
				attributesCount ++;

			}

			// ensure geometries have the same number of attributes
			if ( attributesCount !== attributesUsed.size ) {

				throw new Error( 'StaticGeometryGenerator: Make sure all geometries have the same number of attributes.' );

			}

			if ( useGroups ) {

				let count;
				if ( isIndexed ) {

					count = geometry.index.count;

				} else if ( geometry.attributes.position !== undefined ) {

					count = geometry.attributes.position.count;

				} else {

					throw new Error( 'StaticGeometryGenerator: The geometry must have either an index or a position attribute' );

				}

				targetGeometry.addGroup( offset, count, i );
				offset += count;

			}

		}

		// merge indices
		if ( isIndexed ) {

			let forceUpdateIndex = false;
			if ( ! targetGeometry.index ) {

				let indexCount = 0;
				for ( let i = 0; i < geometries.length; ++ i ) {

					indexCount += geometries[ i ].index.count;

				}

				targetGeometry.setIndex( new three.BufferAttribute( new Uint32Array( indexCount ), 1, false ) );
				forceUpdateIndex = true;

			}

			if ( updateIndex || forceUpdateIndex ) {

				const targetIndex = targetGeometry.index;
				let targetOffset = 0;
				let indexOffset = 0;
				for ( let i = 0; i < geometries.length; ++ i ) {

					const geometry = geometries[ i ];
					const index = geometry.index;
					if ( skipAttributes[ i ] !== true ) {

						for ( let j = 0; j < index.count; ++ j ) {

							targetIndex.setX( targetOffset, index.getX( j ) + indexOffset );
							targetOffset ++;

						}

					}

					indexOffset += geometry.attributes.position.count;

				}

			}

		}

		// merge attributes
		for ( const name in attributes ) {

			const attrList = attributes[ name ];
			if ( ! ( name in targetGeometry.attributes ) ) {

				let count = 0;
				for ( const key in attrList ) {

					count += attrList[ key ].count;

				}

				targetGeometry.setAttribute( name, createAttributeClone( attributes[ name ][ 0 ], count ) );

			}

			const targetAttribute = targetGeometry.attributes[ name ];
			let offset = 0;
			for ( let i = 0, l = attrList.length; i < l; i ++ ) {

				const attr = attrList[ i ];
				if ( skipAttributes[ i ] !== true ) {

					copyAttributeContents( attr, targetAttribute, offset );

				}

				offset += attr.count;

			}

		}

		return targetGeometry;

	}

	function checkTypedArrayEquality( a, b ) {

		if ( a === null || b === null ) {

			return a === b;

		}

		if ( a.length !== b.length ) {

			return false;

		}

		for ( let i = 0, l = a.length; i < l; i ++ ) {

			if ( a[ i ] !== b[ i ] ) {

				return false;

			}

		}

		return true;

	}

	// Checks whether the geometry changed between this and last evaluation
	class GeometryDiff {

		constructor( mesh ) {

			this.matrixWorld = new three.Matrix4();
			this.geometryHash = null;
			this.boneMatrices = null;
			this.primitiveCount = - 1;
			this.mesh = mesh;

			this.update();

		}

		update() {

			const mesh = this.mesh;
			const geometry = mesh.geometry;
			const skeleton = mesh.skeleton;
			const primitiveCount = ( geometry.index ? geometry.index.count : geometry.attributes.position.count ) / 3;
			this.matrixWorld.copy( mesh.matrixWorld );
			this.geometryHash = geometry.attributes.position.version;
			this.primitiveCount = primitiveCount;

			if ( skeleton ) {

				// ensure the bone matrix array is updated to the appropriate length
				if ( ! skeleton.boneTexture ) {

					skeleton.computeBoneTexture();

				}

				skeleton.update();

				// copy data if possible otherwise clone it
				const boneMatrices = skeleton.boneMatrices;
				if ( ! this.boneMatrices || this.boneMatrices.length !== boneMatrices.length ) {

					this.boneMatrices = boneMatrices.slice();

				} else {

					this.boneMatrices.set( boneMatrices );

				}

			} else {

				this.boneMatrices = null;

			}

		}

		didChange() {

			const mesh = this.mesh;
			const geometry = mesh.geometry;
			const primitiveCount = ( geometry.index ? geometry.index.count : geometry.attributes.position.count ) / 3;
			const identical =
				this.matrixWorld.equals( mesh.matrixWorld ) &&
				this.geometryHash === geometry.attributes.position.version &&
				checkTypedArrayEquality( mesh.skeleton && mesh.skeleton.boneMatrices || null, this.boneMatrices ) &&
				this.primitiveCount === primitiveCount;

			return ! identical;

		}

	}

	class StaticGeometryGenerator {

		constructor( meshes ) {

			if ( ! Array.isArray( meshes ) ) {

				meshes = [ meshes ];

			}

			const finalMeshes = [];
			meshes.forEach( object => {

				object.traverseVisible( c => {

					if ( c.isMesh ) {

						finalMeshes.push( c );

					}

				} );

			} );

			this.meshes = finalMeshes;
			this.useGroups = true;
			this.applyWorldTransforms = true;
			this.attributes = [ 'position', 'normal', 'color', 'tangent', 'uv', 'uv2' ];
			this._intermediateGeometry = new Array( finalMeshes.length ).fill().map( () => new three.BufferGeometry() );
			this._diffMap = new WeakMap();

		}

		getMaterials() {

			const materials = [];
			this.meshes.forEach( mesh => {

				if ( Array.isArray( mesh.material ) ) {

					materials.push( ...mesh.material );

				} else {

					materials.push( mesh.material );

				}

			} );
			return materials;

		}

		generate( targetGeometry = new three.BufferGeometry() ) {

			// track which attributes have been updated and which to skip to avoid unnecessary attribute copies
			let skipAttributes = [];
			const { meshes, useGroups, _intermediateGeometry, _diffMap } = this;
			for ( let i = 0, l = meshes.length; i < l; i ++ ) {

				const mesh = meshes[ i ];
				const geom = _intermediateGeometry[ i ];
				const diff = _diffMap.get( mesh );
				if ( ! diff || diff.didChange( mesh ) ) {

					this._convertToStaticGeometry( mesh, geom );
					skipAttributes.push( false );

					if ( ! diff ) {

						_diffMap.set( mesh, new GeometryDiff( mesh ) );

					} else {

						diff.update();

					}

				} else {

					skipAttributes.push( true );

				}

			}

			mergeBufferGeometries( _intermediateGeometry, { useGroups, skipAttributes }, targetGeometry );

			for ( const key in targetGeometry.attributes ) {

				targetGeometry.attributes[ key ].needsUpdate = true;

			}

			return targetGeometry;

		}

		_convertToStaticGeometry( mesh, targetGeometry = new three.BufferGeometry() ) {

			const geometry = mesh.geometry;
			const applyWorldTransforms = this.applyWorldTransforms;
			const includeNormal = this.attributes.includes( 'normal' );
			const includeTangent = this.attributes.includes( 'tangent' );
			const attributes = geometry.attributes;
			const targetAttributes = targetGeometry.attributes;

			// initialize the attributes if they don't exist
			if ( ! targetGeometry.index ) {

				targetGeometry.index = geometry.index;

			}

			if ( ! targetAttributes.position ) {

				targetGeometry.setAttribute( 'position', createAttributeClone( attributes.position ) );

			}

			if ( includeNormal && ! targetAttributes.normal && attributes.normal ) {

				targetGeometry.setAttribute( 'normal', createAttributeClone( attributes.normal ) );

			}

			if ( includeTangent && ! targetAttributes.tangent && attributes.tangent ) {

				targetGeometry.setAttribute( 'tangent', createAttributeClone( attributes.tangent ) );

			}

			// ensure the attributes are consistent
			validateAttributes( geometry.index, targetGeometry.index );
			validateAttributes( attributes.position, targetAttributes.position );

			if ( includeNormal ) {

				validateAttributes( attributes.normal, targetAttributes.normal );

			}

			if ( includeTangent ) {

				validateAttributes( attributes.tangent, targetAttributes.tangent );

			}

			// generate transformed vertex attribute data
			const position = attributes.position;
			const normal = includeNormal ? attributes.normal : null;
			const tangent = includeTangent ? attributes.tangent : null;
			const morphPosition = geometry.morphAttributes.position;
			const morphNormal = geometry.morphAttributes.normal;
			const morphTangent = geometry.morphAttributes.tangent;
			const morphTargetsRelative = geometry.morphTargetsRelative;
			const morphInfluences = mesh.morphTargetInfluences;
			const normalMatrix = new three.Matrix3();
			normalMatrix.getNormalMatrix( mesh.matrixWorld );

			for ( let i = 0, l = attributes.position.count; i < l; i ++ ) {

				_positionVector.fromBufferAttribute( position, i );
				if ( normal ) {

					_normalVector.fromBufferAttribute( normal, i );

				}

				if ( tangent ) {

					_tangentVector4.fromBufferAttribute( tangent, i );
					_tangentVector.fromBufferAttribute( tangent, i );

				}

				// apply morph target transform
				if ( morphInfluences ) {

					if ( morphPosition ) {

						applyMorphTarget( morphPosition, morphInfluences, morphTargetsRelative, i, _positionVector );

					}

					if ( morphNormal ) {

						applyMorphTarget( morphNormal, morphInfluences, morphTargetsRelative, i, _normalVector );

					}

					if ( morphTangent ) {

						applyMorphTarget( morphTangent, morphInfluences, morphTargetsRelative, i, _tangentVector );

					}

				}

				// apply bone transform
				if ( mesh.isSkinnedMesh ) {

					mesh.applyBoneTransform( i, _positionVector );
					if ( normal ) {

						boneNormalTransform( mesh, i, _normalVector );

					}

					if ( tangent ) {

						boneNormalTransform( mesh, i, _tangentVector );

					}

				}

				// update the vectors of the attributes
				if ( applyWorldTransforms ) {

					_positionVector.applyMatrix4( mesh.matrixWorld );

				}

				targetAttributes.position.setXYZ( i, _positionVector.x, _positionVector.y, _positionVector.z );

				if ( normal ) {

					if ( applyWorldTransforms ) {

						_normalVector.applyNormalMatrix( normalMatrix );

					}

					targetAttributes.normal.setXYZ( i, _normalVector.x, _normalVector.y, _normalVector.z );

				}

				if ( tangent ) {

					if ( applyWorldTransforms ) {

						_tangentVector.transformDirection( mesh.matrixWorld );

					}

					targetAttributes.tangent.setXYZW( i, _tangentVector.x, _tangentVector.y, _tangentVector.z, _tangentVector4.w );

				}

			}

			// copy other attributes over
			for ( const i in this.attributes ) {

				const key = this.attributes[ i ];
				if ( key === 'position' || key === 'tangent' || key === 'normal' || ! ( key in attributes ) ) {

					continue;

				}

				if ( ! targetAttributes[ key ] ) {

					targetGeometry.setAttribute( key, createAttributeClone( attributes[ key ] ) );

				}

				validateAttributes( attributes[ key ], targetAttributes[ key ] );
				copyAttributeContents( attributes[ key ], targetAttributes[ key ] );

			}

			return targetGeometry;

		}

	}

	exports.AVERAGE = AVERAGE;
	exports.CENTER = CENTER;
	exports.CONTAINED = CONTAINED;
	exports.ExtendedTriangle = ExtendedTriangle;
	exports.FloatVertexAttributeTexture = FloatVertexAttributeTexture;
	exports.INTERSECTED = INTERSECTED;
	exports.IntVertexAttributeTexture = IntVertexAttributeTexture;
	exports.MeshBVH = MeshBVH;
	exports.MeshBVHUniformStruct = MeshBVHUniformStruct;
	exports.MeshBVHVisualizer = MeshBVHVisualizer;
	exports.NOT_INTERSECTED = NOT_INTERSECTED;
	exports.OrientedBox = OrientedBox;
	exports.SAH = SAH;
	exports.StaticGeometryGenerator = StaticGeometryGenerator;
	exports.UIntVertexAttributeTexture = UIntVertexAttributeTexture;
	exports.VertexAttributeTexture = VertexAttributeTexture;
	exports.acceleratedRaycast = acceleratedRaycast;
	exports.computeBoundsTree = computeBoundsTree;
	exports.disposeBoundsTree = disposeBoundsTree;
	exports.estimateMemoryInBytes = estimateMemoryInBytes;
	exports.getBVHExtremes = getBVHExtremes;
	exports.getJSONStructure = getJSONStructure;
	exports.getTriangleHitPointInfo = getTriangleHitPointInfo;
	exports.shaderDistanceFunction = shaderDistanceFunction;
	exports.shaderIntersectFunction = shaderIntersectFunction;
	exports.shaderStructs = shaderStructs;
	exports.validateBounds = validateBounds;

}));
//# sourceMappingURL=index.umd.cjs.map

}).call(globalThis);
const GABARIT="<!-- Contenu du shadow root de <sun-shading> : styles et balisage.\n     Ni doctype ni <meta> \u2014 la page autonome et le panneau Home Assistant les\n     fournissent chacun de leur c\u00f4t\u00e9 (voir sources/build.py). -->\n<style>\n  /* :host et non :root \u2014 les jetons doivent vivre sur l'\u00e9l\u00e9ment, seul point\n     d'ancrage commun \u00e0 la page autonome et au panneau. */\n  :host{\n    display:block; position:relative; overflow:hidden; height:100%;\n    background:var(--bg); color:var(--text); font-family:var(--font-ui);\n    -webkit-user-select:none; user-select:none;\n    --bg:#e9e6de; --panel:rgba(250,248,242,.9); --panel-solid:#f4f1e9;\n    --text:#22272e; --muted:#5d6570; --accent:#a87413; --accent-ink:#fffaf0;\n    --or:#f0b347; --line:rgba(34,39,46,.16);\n    --radius:10px;\n    --font-ui:system-ui,\"Segoe UI\",Roboto,\"Helvetica Neue\",sans-serif;\n    --font-data:ui-monospace,\"Cascadia Mono\",\"SF Mono\",Consolas,\"Liberation Mono\",monospace;\n    --font-title:var(--font-ui);\n  }\n  @media (prefers-color-scheme: dark){\n    :host(:not([data-theme=\"light\"])){\n      --bg:#10141a; --panel:rgba(16,20,26,.86); --panel-solid:#161b22;\n      --text:#efece3; --muted:#98a0ab; --accent:#f0b347; --accent-ink:#141414;\n      --line:rgba(239,236,227,.14);\n    }\n  }\n  :host([data-theme=\"dark\"]){\n    --bg:#10141a; --panel:rgba(16,20,26,.86); --panel-solid:#161b22;\n    --text:#efece3; --muted:#98a0ab; --accent:#f0b347; --accent-ink:#141414;\n    --line:rgba(239,236,227,.14);\n  }\n  *{margin:0;padding:0;box-sizing:border-box}\n  #scene{position:absolute;inset:0;display:block;touch-action:none}\n\n  /* z-index : au-dessus des \u00e9tiquettes projet\u00e9es sur la sc\u00e8ne (.sur-scene, z-index 5) */\n  .panel{position:absolute;background:var(--panel);border:1px solid var(--line);z-index:6;\n         border-radius:var(--radius);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}\n\n  /* ---- carte titre ---- */\n  #titre{top:14px;left:14px;padding:12px 16px 10px;max-width:290px}\n  #titre h1{font-family:var(--font-title);font-size:19px;font-weight:700;letter-spacing:.01em;line-height:1.15}\n  #titre .lieu{color:var(--muted);font-size:12.5px;margin-top:3px}\n  #titre .credit{color:var(--muted);font-size:10.5px;margin-top:8px;line-height:1.45;\n                 border-top:1px solid var(--line);padding-top:7px}\n  #titre .credit b{color:var(--text);font-weight:500}\n\n  /* ---- boussole ---- */\n  #boussole{top:14px;right:14px;width:46px;height:46px;border-radius:50%;\n            display:flex;align-items:center;justify-content:center;cursor:pointer}\n  #boussole svg{width:34px;height:34px;transition:transform .06s linear}\n  #boussole .n{font:600 9px var(--font-ui);fill:var(--text)}\n  #boussole .aig-n{fill:var(--or)}\n  #boussole .aig-s{fill:var(--muted);opacity:.55}\n  #boussole .cadran{stroke:var(--line)}\n\n  /* ---- r\u00e9glages ---- */\n  /* bouton d'ouverture, visible uniquement sur \u00e9cran contraint (voir media queries) */\n  /* ---- menu de Home Assistant (vue \u00e9troite) ---- */\n  /* La barre lat\u00e9rale de HA dispara\u00eet sous 870 px de large : sans ce bouton,\n     un panneau plein \u00e9cran sur t\u00e9l\u00e9phone n'a aucun moyen d'en sortir. Il\n     n'appara\u00eet que lorsque HA nous dit que la vue est \u00e9troite. */\n  #btn-menu{display:none;top:14px;left:14px;width:40px;height:40px;border-radius:50%;\n            cursor:pointer;align-items:center;justify-content:center;color:var(--text);padding:0}\n  #btn-menu svg{width:22px;height:22px}\n  :host([data-etroit]) #btn-menu{display:flex}\n  /* le titre laisse la place au burger */\n  :host([data-etroit]) #titre{left:62px}\n  #btn-reglages{display:none;width:40px;height:40px;border-radius:50%;cursor:pointer;\n                align-items:center;justify-content:center;color:var(--text);padding:0}\n  #btn-reglages svg{width:20px;height:20px}\n  #reglages{top:72px;right:14px;padding:10px 12px;width:172px;font-size:12px;display:flex;\n            flex-direction:column;gap:9px}\n  #reglages label{display:flex;align-items:center;justify-content:space-between;gap:8px;color:var(--muted)}\n  #reglages select{background:var(--panel-solid);color:var(--text);border:1px solid var(--line);\n                   border-radius:6px;font:inherit;padding:2px 4px;max-width:92px}\n  #reglages input[type=checkbox]{accent-color:var(--accent)}\n  #reglages .etat{font-size:10px;color:var(--accent);flex:1;text-align:right;margin-right:4px}\n  /* le s\u00e9lecteur de carte occupe d\u00e9j\u00e0 92 px des 148 px utiles : son indicateur\n     passe \u00e0 la ligne au lieu de le pousser hors du panneau */\n  #reglages .etat:empty{display:none}\n  #reglages label.carte{flex-wrap:wrap}\n  #reglages label.carte .etat{flex-basis:100%;text-align:left;margin:2px 0 0}\n  #reglages input[type=range]{width:86px;height:18px;flex:none}\n  #reglages input[type=range]::-webkit-slider-thumb{width:10px;height:16px;border-width:1px}\n\n  /* ---- \u00e9tiquettes projet\u00e9es du trajet du soleil ---- */\n  .sur-scene{position:absolute;transform:translate(-50%,-50%);pointer-events:none;display:none;\n      z-index:5;font-family:var(--font-data);font-variant-numeric:tabular-nums}\n  #badge-soleil{background:#191817;border:1.5px solid #f0b347;color:#ffd97a;border-radius:999px;\n      padding:3px 11px;font-size:12px;font-weight:500;white-space:nowrap;\n      box-shadow:0 2px 8px rgba(0,0,0,.35)}\n  .eti-solaire{color:#ffc65e;font-size:12px;font-weight:500;text-align:center;white-space:pre-line;\n      line-height:1.3;text-shadow:0 1px 3px rgba(0,0,0,.85),0 0 6px rgba(0,0,0,.5)}\n\n  /* ---- sonde ---- */\n  #sonde{left:14px;bottom:14px;padding:10px 12px;width:288px}\n  #sonde .entete{display:flex;align-items:center;justify-content:space-between;gap:8px}\n  #sonde-titre{font-size:12.5px;font-weight:600}\n  #sonde-fermer{background:none;border:none;color:var(--muted);font-size:16px;cursor:pointer;\n      line-height:1;padding:2px 4px}\n  #sonde-fermer:hover{color:var(--text)}\n  #sonde .entete-actions{display:flex;align-items:center;gap:2px}\n  #sonde-copier{background:none;border:1px solid var(--line);border-radius:4px;\n      color:var(--muted);font-size:10.5px;cursor:pointer;padding:2px 6px;white-space:nowrap}\n  #sonde-copier:hover{color:var(--text)}\n  /* le presse-papiers n'est pas garanti (page servie en http sur le LAN, et en\n     iframe dans Home Assistant) : le champ s\u00e9lectionnable est le vrai moyen */\n  /* ---- ouvertures (Home Assistant) ---- */\n  #ouvertures{right:14px;bottom:14px;padding:10px 12px;width:288px}\n  #ouvertures .entete{display:flex;align-items:center;justify-content:space-between;gap:8px}\n  #ouvertures-titre{font-size:12.5px;font-weight:600}\n  #ouvertures-fermer{background:none;border:none;color:var(--muted);font-size:16px;\n      cursor:pointer;line-height:1;padding:2px 4px}\n  #ouvertures-fermer:hover{color:var(--text)}\n  #ouvertures-etat,#sonde-assoc-etat{font-size:11.5px;color:var(--muted);margin-top:6px;line-height:1.4}\n  #ouvertures-liste{list-style:none;margin:6px 0 0;font-size:11.5px;line-height:1.5}\n  #ouvertures-liste b{color:var(--text);font-weight:600}\n  #sonde-assoc{margin-top:8px;border-top:1px solid var(--line);padding-top:8px;\n      display:flex;flex-direction:column;gap:5px}\n  #sonde-assoc label{display:flex;align-items:center;justify-content:space-between;\n      gap:8px;font-size:11.5px}\n  #sonde-assoc input{flex:1;min-width:0;font:11px var(--font-ui);\n      padding:2px 4px;border:1px solid var(--line);border-radius:4px;\n      background:var(--panel-solid);color:var(--text)}\n  #sonde-enregistrer,#ouvertures-recalcul{margin-top:4px;padding:4px 8px;cursor:pointer;\n      font:11px var(--font-ui);border:1px solid var(--line);border-radius:4px;\n      background:var(--panel-solid);color:var(--text)}\n  #sonde-enregistrer:hover:enabled,#ouvertures-recalcul:hover:enabled{border-color:var(--accent)}\n  #sonde-enregistrer:disabled,#ouvertures-recalcul:disabled{opacity:.5;cursor:default}\n  @media (max-width:900px){#ouvertures{right:14px;bottom:auto;top:72px;width:240px}}\n  #sonde-json{width:100%;margin-top:7px;padding:4px 6px;border:1px solid var(--line);\n      border-radius:4px;background:var(--panel-solid);color:var(--text);\n      font:10px var(--font-data)}\n  #sonde-frise{width:100%;height:18px;border-radius:4px;border:1px solid var(--line);margin-top:7px;display:block}\n  .frise-heures{display:flex;justify-content:space-between;color:var(--muted);\n      font:9.5px var(--font-data);margin-top:2px}\n  #sonde-info{font-size:11.5px;color:var(--muted);margin-top:6px;line-height:1.4}\n  #sonde-info b{color:var(--text)}\n  @media (max-width:1380px){#sonde{bottom:180px}}\n  @media (max-width:900px){#sonde{bottom:auto;top:72px;left:14px;width:240px}}\n\n  /* ---- timeline ---- */\n  #timeline{left:50%;transform:translateX(-50%);bottom:14px;width:min(740px,calc(100vw - 24px));\n            padding:12px 16px 12px;display:flex;flex-direction:column;gap:8px}\n  .ligne{display:flex;align-items:center;gap:12px}\n  .lectures{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;font-family:var(--font-data);\n            font-variant-numeric:tabular-nums}\n  #lect-heure{font-size:24px;font-weight:500;color:var(--accent);min-width:118px}\n  #lect-date{font-size:13px;color:var(--text);text-transform:capitalize;flex:1}\n  .astro{font-size:11.5px;color:var(--muted);display:flex;gap:12px;flex-wrap:wrap}\n  .astro b{color:var(--text);font-weight:500}\n\n  #btn-lecture{width:38px;height:38px;border-radius:50%;border:1px solid var(--line);flex:none;\n               background:var(--accent);color:var(--accent-ink);cursor:pointer;display:flex;\n               align-items:center;justify-content:center;transition:filter .15s}\n  #btn-lecture:hover{filter:brightness(1.12)}\n  #btn-lecture svg{width:15px;height:15px;display:block}\n\n  /* chevron de repli de la timeline, visible uniquement sur \u00e9cran contraint */\n  #btn-replier{display:none;background:none;border:none;color:var(--muted);cursor:pointer;\n               width:32px;height:32px;align-items:center;justify-content:center;flex:none;padding:0;\n               margin-left:auto}\n  #btn-replier svg{width:16px;height:16px;transition:transform .15s}\n  #timeline.replie #btn-replier svg{transform:rotate(180deg)}\n\n  .curseur{position:relative;flex:1;height:26px;display:flex;align-items:center}\n  .piste{position:absolute;inset:8px 0;border-radius:5px;border:1px solid var(--line)}\n  input[type=range]{position:relative;width:100%;appearance:none;-webkit-appearance:none;\n                    background:transparent;height:26px;cursor:pointer;z-index:2}\n  input[type=range]::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;width:14px;height:26px;\n      border-radius:5px;background:var(--text);border:2px solid var(--panel-solid);box-shadow:0 0 0 1px var(--line)}\n  input[type=range]::-moz-range-thumb{width:12px;height:24px;border-radius:5px;background:var(--text);\n      border:2px solid var(--panel-solid)}\n  input[type=range]:focus-visible{outline:2px solid var(--accent);outline-offset:2px}\n\n  .rangee-date{display:flex;align-items:center;gap:10px}\n  .rangee-date .curseur{height:20px}\n  .rangee-date .piste{inset:6px 0;background:linear-gradient(90deg,#2c3947 0%,#3d5a45 25%,#57764e 50%,#3d5a45 75%,#2c3947 100%)}\n  .rangee-date input[type=range]::-webkit-slider-thumb{height:20px}\n  .tick{position:absolute;top:2px;bottom:2px;width:1px;background:rgba(239,236,227,.45);z-index:1}\n  .presets{display:flex;gap:6px}\n  .presets button{background:none;border:1px solid var(--line);color:var(--muted);font:500 10.5px var(--font-ui);\n                  letter-spacing:.04em;border-radius:6px;padding:3px 7px;cursor:pointer;white-space:nowrap}\n  .presets button:hover{color:var(--text);border-color:var(--muted)}\n\n  #chargement{position:absolute;inset:0;background:var(--bg);display:flex;flex-direction:column;gap:14px;\n              align-items:center;justify-content:center;z-index:10;transition:opacity .4s}\n  #chargement .t{font-family:var(--font-title);font-size:21px;font-weight:700}\n  #chargement .s{color:var(--muted);font-size:13px;font-family:var(--font-data)}\n  #chargement .soleil{width:42px;height:42px;border-radius:50%;background:var(--or);\n      box-shadow:0 0 40px 8px rgba(240,179,71,.45);animation:pulse 1.6s ease-in-out infinite}\n  @keyframes pulse{50%{box-shadow:0 0 60px 16px rgba(240,179,71,.6)}}\n  @media (prefers-reduced-motion: reduce){#chargement .soleil{animation:none}}\n\n  #contexte-perdu{top:50%;left:50%;transform:translate(-50%,-50%);z-index:9;\n      max-width:min(400px,86vw);padding:16px 18px;text-align:center;font-size:13px;line-height:1.5}\n  #contexte-perdu[hidden]{display:none}\n  #contexte-perdu .t{font-family:var(--font-title);font-size:15px;font-weight:700;margin-bottom:6px}\n  #contexte-perdu button{margin-top:12px;background:none;border:1px solid var(--line);color:var(--text);\n      font:500 12px var(--font-ui);border-radius:6px;padding:5px 12px;cursor:pointer}\n  #contexte-perdu button:hover{border-color:var(--muted)}\n\n  /* ---- \u00e9crans contraints : t\u00e9l\u00e9phone portrait ou fen\u00eatre basse (paysage) ---- */\n  @media (max-width:640px),(max-height:520px){\n    #titre{max-width:270px;padding:8px 10px 7px;top:8px;left:calc(8px + env(safe-area-inset-left))}\n    #btn-menu{top:8px;left:calc(8px + env(safe-area-inset-left))}\n    :host([data-etroit]) #titre{top:56px;left:calc(8px + env(safe-area-inset-left))}\n    #titre h1{font-size:15px}\n    #titre .lieu{font-size:11px;margin-top:2px}\n    #titre .credit{display:none}\n    #boussole{top:8px;right:calc(8px + env(safe-area-inset-right))}\n    #btn-reglages{display:flex;top:64px;right:calc(8px + env(safe-area-inset-right))}\n    #reglages{display:none;top:112px;right:calc(8px + env(safe-area-inset-right));\n              background:var(--panel-solid);overflow-y:auto;\n              max-height:calc(100vh - 124px);\n              max-height:calc(100dvh - 124px - env(safe-area-inset-bottom))}\n    #reglages.ouvert{display:flex}\n    #btn-replier{display:flex}\n    #timeline{bottom:calc(8px + env(safe-area-inset-bottom));padding:8px 12px;gap:6px;\n              width:min(740px,calc(100vw - 16px - env(safe-area-inset-left) - env(safe-area-inset-right)))}\n    #timeline.replie .ligne-heure,#timeline.replie .rangee-date,#timeline.replie .astro{display:none}\n    #lect-heure{font-size:20px;min-width:96px}\n    .astro{font-size:10.5px;gap:6px 10px}\n    .presets button{padding:3px 5px;font-size:9.5px}\n    #sonde{bottom:auto;top:76px;left:calc(8px + env(safe-area-inset-left));width:240px}\n  }\n  /* fen\u00eatre vraiment basse (t\u00e9l\u00e9phone en paysage) : une seule ligne partout */\n  @media (max-height:520px){\n    #titre .lieu{display:none}\n    .astro{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}\n    .astro span{white-space:nowrap;flex:none}\n    #btn-lecture{width:32px;height:32px}\n  }\n  /* cibles tactiles \u00e9largies */\n  @media (pointer:coarse){\n    .curseur{height:32px}\n    input[type=range]{height:32px}\n    input[type=range]::-webkit-slider-thumb{width:20px;height:30px}\n    input[type=range]::-moz-range-thumb{width:18px;height:28px}\n    .piste{inset:10px 0}\n    .rangee-date .curseur{height:26px}\n    .rangee-date .piste{inset:8px 0}\n    .rangee-date input[type=range]::-webkit-slider-thumb{height:26px}\n  }\n</style>\n\n<div id=\"chargement\" role=\"status\">\n  <div class=\"soleil\"></div>\n  <div class=\"t\" id=\"charge-titre\">Ensoleillement</div>\n  <div class=\"s\" id=\"charge-etat\">D\u00e9compression des donn\u00e9es\u2026</div>\n</div>\n\n<canvas id=\"scene\" aria-label=\"Vue 3D du quartier avec ombres port\u00e9es\"></canvas>\n\n<div id=\"contexte-perdu\" class=\"panel\" role=\"alert\" hidden>\n  <div class=\"t\">Vue 3D interrompue</div>\n  <div>La m\u00e9moire graphique de l'appareil est satur\u00e9e. Recharger la page, puis\n    choisir une carte plus l\u00e9g\u00e8re (Satellite ou Maquette) ou des ombres moins fines.</div>\n  <button type=\"button\" id=\"btn-recharger\">Recharger</button>\n</div>\n\n<div id=\"titre\" class=\"panel\">\n  <h1 id=\"titre-h1\">Ensoleillement</h1>\n  <div class=\"lieu\" id=\"titre-lieu\"></div>\n  <div class=\"credit\"><b>Donn\u00e9es</b> : Eurom\u00e9tropole de Strasbourg \u2014 Maquette 3D 2022\n    (b\u00e2timents LoD2 textur\u00e9s, MNT LiDAR drap\u00e9 de l'orthophotographie 2022, v\u00e9g\u00e9tation)\n    et filaire de circulation \u2014 Licence Ouverte. Photomaillage 3D 2022 produit\n    avec le soutien du FEDER et de DataGrandEst. B\u00e2timents post\u00e9rieurs \u00e0 2022 :\n    IGN, BD TOPO \u2014 Licence Ouverte.\n    Position solaire : algorithme NOAA. Heure l\u00e9gale France.</div>\n</div>\n\n<div id=\"boussole\" class=\"panel\" title=\"Remettre le nord en haut\" role=\"button\" tabindex=\"0\" aria-label=\"Boussole : remettre le nord en haut\">\n  <svg viewBox=\"0 0 40 40\" id=\"boussole-svg\" aria-hidden=\"true\">\n    <circle class=\"cadran\" cx=\"20\" cy=\"20\" r=\"18\" fill=\"none\"/>\n    <path class=\"aig-n\" d=\"M20 5 L24 22 L20 19 L16 22 Z\"/>\n    <path class=\"aig-s\" d=\"M20 35 L24 22 L20 25 L16 22 Z\"/>\n    <text class=\"n\" x=\"20\" y=\"13\" text-anchor=\"middle\">N</text>\n  </svg>\n</div>\n\n<button id=\"btn-menu\" class=\"panel\" aria-label=\"Ouvrir le menu de Home Assistant\">\n  <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n    <g stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\">\n      <line x1=\"4\" y1=\"7\" x2=\"20\" y2=\"7\"/>\n      <line x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\"/>\n      <line x1=\"4\" y1=\"17\" x2=\"20\" y2=\"17\"/>\n    </g>\n  </svg>\n</button>\n\n<button id=\"btn-reglages\" class=\"panel\" aria-label=\"Ouvrir ou fermer les r\u00e9glages\" aria-expanded=\"false\">\n  <svg viewBox=\"0 0 20 20\" aria-hidden=\"true\">\n    <g stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\">\n      <line x1=\"3\" y1=\"5.5\" x2=\"17\" y2=\"5.5\"/>\n      <line x1=\"3\" y1=\"10\" x2=\"17\" y2=\"10\"/>\n      <line x1=\"3\" y1=\"14.5\" x2=\"17\" y2=\"14.5\"/>\n    </g>\n    <g fill=\"currentColor\" stroke=\"var(--panel-solid)\" stroke-width=\"1.5\">\n      <circle cx=\"7\" cy=\"5.5\" r=\"2.6\"/><circle cx=\"13.5\" cy=\"10\" r=\"2.6\"/><circle cx=\"9\" cy=\"14.5\" r=\"2.6\"/>\n    </g>\n  </svg>\n</button>\n\n<div id=\"reglages\" class=\"panel\">\n  <label>Th\u00e8me <select id=\"opt-theme\" aria-label=\"Th\u00e8me de l'interface\">\n    <option value=\"auto\" selected>Auto</option><option value=\"dark\">Sombre</option>\n    <option value=\"light\">Clair</option></select></label>\n  <label>Ombres <select id=\"opt-ombres\" aria-label=\"Qualit\u00e9 des ombres\"\n    title=\"En Photo 3D la carte d'ombre est plafonn\u00e9e \u00e0 \u00ab Fines \u00bb : le maillage photogramm\u00e9trique, d'ar\u00eate ~40 cm, ne porte aucun d\u00e9tail plus fin, et la m\u00e9moire \u00e9conomis\u00e9e est consid\u00e9rable.\">\n    <option value=\"2048\">Rapides</option><option value=\"4096\" selected>Fines</option>\n    <option value=\"8192\">Tr\u00e8s fines</option></select></label>\n  <label class=\"carte\">Carte\n    <select id=\"opt-carte\" aria-label=\"Type de carte\"\n      title=\"Photo 3D : photomaillage photogramm\u00e9trique 2022 sur 200 m, pos\u00e9 sur la vue satellite au-del\u00e0. Vue faite pour la plong\u00e9e : de pr\u00e8s, la photogramm\u00e9trie a\u00e9rienne est floue.\">\n    <option value=\"abstrait\" selected>Maquette</option><option value=\"satellite\">Satellite</option>\n    <option value=\"photo\">Photo 3D</option></select>\n    <span id=\"etat-carte\" class=\"etat\"></span></label>\n  <label>Arbres <input type=\"checkbox\" id=\"opt-arbres\" checked></label>\n  <label>Trajet du soleil <input type=\"checkbox\" id=\"opt-trajet\" checked></label>\n  <label>\u00d8 trajet <input type=\"range\" id=\"opt-trajet-r\" min=\"100\" max=\"2600\" step=\"20\" value=\"2600\"\n    aria-label=\"Diam\u00e8tre du trajet du soleil\"></label>\n  <label title=\"D\u00e9pose un carr\u00e9 de 50 cm de c\u00f4t\u00e9 \u00e0 plat sur la surface vis\u00e9e (sol, fa\u00e7ade, vitrage, pan de toit) et compte le soleil direct de la journ\u00e9e sur ce carr\u00e9.\">Sonde au clic <input type=\"checkbox\" id=\"opt-sonde\"></label>\n  <label id=\"lbl-ouvertures\" hidden\n    title=\"Associe les fen\u00eatres sond\u00e9es aux volets roulants de Home Assistant et y publie leur masque d'horizon.\">Ouvertures HA <input type=\"checkbox\" id=\"opt-ouvertures\"></label>\n  <label title=\"Normales : un doigt (ou le clic gauche) fait tourner la vue. Invers\u00e9es : un doigt d\u00e9place la carte, comme dans une application de cartographie, et la rotation passe \u00e0 deux doigts ou au clic droit.\">Commandes <select id=\"opt-commandes\" aria-label=\"Sens des commandes de navigation\">\n    <option value=\"normales\" selected>Normales</option>\n    <option value=\"inversees\">Invers\u00e9es</option></select></label>\n  <label>Vitesse <select id=\"opt-vitesse\" aria-label=\"Vitesse d'animation\">\n    <option value=\"2\">2 min/s</option><option value=\"10\" selected>10 min/s</option>\n    <option value=\"30\">30 min/s</option><option value=\"90\">90 min/s</option></select></label>\n</div>\n\n<div id=\"badge-soleil\" class=\"sur-scene\" aria-hidden=\"true\"></div>\n<div id=\"eti-lever\" class=\"sur-scene eti-solaire\" aria-hidden=\"true\"></div>\n<div id=\"eti-coucher\" class=\"sur-scene eti-solaire\" aria-hidden=\"true\"></div>\n\n<div id=\"sonde\" class=\"panel\" hidden>\n  <div class=\"entete\">\n    <span id=\"sonde-titre\">Sonde</span>\n    <span class=\"entete-actions\">\n      <button id=\"sonde-copier\" title=\"Copie les coordonn\u00e9es du point sond\u00e9, pour ouvertures.json\">Copier le point</button>\n      <button id=\"sonde-fermer\" aria-label=\"Fermer la sonde\">\u00d7</button>\n    </span>\n  </div>\n  <input id=\"sonde-json\" type=\"text\" readonly hidden\n         aria-label=\"Coordonn\u00e9es du point sond\u00e9\">\n  <canvas id=\"sonde-frise\" width=\"264\" height=\"18\" aria-label=\"Frise des cr\u00e9neaux au soleil\"></canvas>\n  <div class=\"frise-heures\" aria-hidden=\"true\"><span>0h</span><span>6h</span><span>12h</span><span>18h</span><span>24h</span></div>\n  <div id=\"sonde-info\"></div>\n  <div id=\"sonde-assoc\" hidden>\n    <label>Volet <input type=\"text\" id=\"sonde-volet\" list=\"liste-volets\"\n      placeholder=\"cover.\u2026\" aria-label=\"Volet desservi\"></label>\n    <datalist id=\"liste-volets\"></datalist>\n    <label>Nom <input type=\"text\" id=\"sonde-nom\" aria-label=\"Nom de l'ouverture\"></label>\n    <button id=\"sonde-enregistrer\">Publier dans Home Assistant</button>\n    <div id=\"sonde-assoc-etat\"></div>\n  </div>\n</div>\n\n<div id=\"ouvertures\" class=\"panel\" hidden>\n  <div class=\"entete\">\n    <span id=\"ouvertures-titre\">Ouvertures \u2014 Home Assistant</span>\n    <button id=\"ouvertures-fermer\" aria-label=\"Fermer le panneau des ouvertures\">\u00d7</button>\n  </div>\n  <div id=\"ouvertures-etat\"></div>\n  <ul id=\"ouvertures-liste\"></ul>\n  <button id=\"ouvertures-recalcul\"\n    title=\"Rejoue les points m\u00e9moris\u00e9s et republie tous les masques : \u00e0 faire apr\u00e8s un changement de g\u00e9om\u00e9trie.\">Tout recalculer</button>\n</div>\n\n<div id=\"timeline\" class=\"panel\">\n  <div class=\"ligne\">\n    <button id=\"btn-lecture\" aria-label=\"Lancer ou arr\u00eater l'animation\">\n      <svg id=\"ico-lecture\" viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3 1.5 L14 8 L3 14.5 Z\" fill=\"currentColor\"/></svg>\n    </button>\n    <div class=\"lectures\">\n      <span id=\"lect-heure\">\u2014:\u2014</span>\n      <span id=\"lect-date\">\u2014</span>\n    </div>\n    <button id=\"btn-replier\" aria-label=\"Replier ou d\u00e9ployer les contr\u00f4les\" aria-expanded=\"true\">\n      <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\">\n        <path d=\"M2.5 6 L8 11 L13.5 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n    </button>\n  </div>\n  <div class=\"ligne ligne-heure\">\n    <div class=\"curseur\">\n      <div class=\"piste\" id=\"piste-jour\"></div>\n      <input type=\"range\" id=\"curseur-heure\" min=\"0\" max=\"1439\" step=\"1\" value=\"720\"\n             aria-label=\"Heure de la journ\u00e9e\">\n    </div>\n  </div>\n  <div class=\"rangee-date\">\n    <div class=\"curseur\">\n      <div class=\"piste\"></div>\n      <div class=\"tick\" style=\"left:21.9%\" title=\"\u00c9quinoxe de mars\"></div>\n      <div class=\"tick\" style=\"left:47.1%\" title=\"Solstice de juin\"></div>\n      <div class=\"tick\" style=\"left:72.6%\" title=\"\u00c9quinoxe de septembre\"></div>\n      <div class=\"tick\" style=\"left:97.3%\" title=\"Solstice de d\u00e9cembre\"></div>\n      <input type=\"range\" id=\"curseur-jour\" min=\"0\" max=\"364\" step=\"1\" value=\"0\"\n             aria-label=\"Jour de l'ann\u00e9e\">\n    </div>\n    <div class=\"presets\">\n      <button id=\"btn-aujourdhui\" title=\"Revenir \u00e0 la date et l'heure actuelles\">AUJOURD'HUI</button>\n      <button data-jm=\"21-6\" title=\"Solstice d'\u00e9t\u00e9\">21 JUIN</button>\n      <button data-jm=\"20-3\" title=\"\u00c9quinoxe (course du soleil identique en mars et septembre)\">\u00c9QUINOXE</button>\n      <button data-jm=\"21-12\" title=\"Solstice d'hiver\">21 D\u00c9C</button>\n    </div>\n  </div>\n  <div class=\"astro\">\n    <span>Azimut <b id=\"lect-azimut\">\u2014</b></span>\n    <span>\u00c9l\u00e9vation <b id=\"lect-elevation\">\u2014</b></span>\n    <span>Lever <b id=\"lect-lever\">\u2014</b></span>\n    <span>Midi solaire <b id=\"lect-midi\">\u2014</b></span>\n    <span>Coucher <b id=\"lect-coucher\">\u2014</b></span>\n    <span id=\"wrap-ombre\">Ombre <b id=\"lect-ombre\">\u2014</b></span>\n  </div>\n</div>\n";
/* Sun Shading — application three.js de l'élément <sun-shading>.
   Données : Eurométropole de Strasbourg, Maquette 3D 2022 (Licence Ouverte).
   Repère local : X = est, Y = nord, Z = altitude (m, NGF - zmin_ref), origine
   au centre de la zone. Le bundle ne connaît AUCUNE zone : tout ce qui en
   dépend arrive par manifest.json au montage (cf. monte()). */
"use strict";

/* L'application vit dans une racine DOM et un élément hôte plutôt que dans le
   document : c'est ce qui lui permet d'être montée aussi bien dans une page
   autonome que dans un shadow root, comme panneau personnalisé de Home
   Assistant. Une seule instance par page — la portée module suffit, et évite
   d'indenter deux mille lignes pour rien. */
let racine = null;   // Document ou ShadowRoot : où vivent les éléments
let hote = null;     // élément portant le thème, les dimensions et les styles
const $ = (id) => racine.getElementById(id);
const largeur = () => hote.clientWidth;
const hauteur = () => hote.clientHeight;

/* Un panneau Home Assistant ne donne pas toujours de hauteur définie à
   l'élément : « height:100% » vaut alors 0, et la carte est parfaitement
   montée mais invisible. Aucune règle CSS ne sait exprimer « seulement si mon
   parent ne me donne pas de hauteur » : on mesure, une fois, et on occupe
   l'espace restant sous l'hôte si personne ne nous en donne. */
function calibreHauteur() {
  if (hote.clientHeight > 0) return; // le parent fournit la hauteur
  const applique = () => {
    hote.style.height =
      Math.max(200, innerHeight - hote.getBoundingClientRect().top) + "px";
  };
  applique();
  addEventListener("resize", applique);
}

/* Métadonnées de la zone, lues dans manifest.json par monte() : le même
   bundle sert toutes les zones, et Home Assistant le livre avec l'intégration
   alors que les données, elles, sont déposées par l'utilisateur. */
let DONNEES_META = null, SAT_META = null, PM3D_META = null, MODELE_META = null;
let VOLETS_META = [], RES = null;
let LAT = 0, LON = 0, Q = 0.05;
let R_AFF = 1000;   // rayon d'affichage (r_map) : trajet du soleil, bornes de pan
let R_BATI = 1050;  // bâtiments porteurs d'ombre conservés jusqu'ici
let EX_T = 1120;    // demi-étendue du terrain (+ marge) : grilles d'index

const RAD = Math.PI / 180;

/* ============================== Position solaire (NOAA) ============================== */
function positionSolaire(utcMs, lat, lon) {
  const jd = utcMs / 86400000 + 2440587.5;
  const T = (jd - 2451545.0) / 36525.0;
  const L0 = ((280.46646 + T * (36000.76983 + 0.0003032 * T)) % 360 + 360) % 360;
  const M = 357.52911 + T * (35999.05029 - 0.0001537 * T);
  const e = 0.016708634 - T * (0.000042037 + 0.0000001267 * T);
  const C = Math.sin(M * RAD) * (1.914602 - T * (0.004817 + 0.000014 * T))
        + Math.sin(2 * M * RAD) * (0.019993 - 0.000101 * T)
        + Math.sin(3 * M * RAD) * 0.000289;
  const trueLong = L0 + C;
  const omega = 125.04 - 1934.136 * T;
  const lambda = trueLong - 0.00569 - 0.00478 * Math.sin(omega * RAD);
  const eps0 = 23 + (26 + (21.448 - T * (46.815 + T * (0.00059 - T * 0.001813))) / 60) / 60;
  const eps = eps0 + 0.00256 * Math.cos(omega * RAD);
  const decl = Math.asin(Math.sin(eps * RAD) * Math.sin(lambda * RAD)) / RAD;
  const y2 = Math.tan((eps / 2) * RAD) ** 2;
  const eot = 4 / RAD * (y2 * Math.sin(2 * L0 * RAD) - 2 * e * Math.sin(M * RAD)
        + 4 * e * y2 * Math.sin(M * RAD) * Math.cos(2 * L0 * RAD)
        - 0.5 * y2 * y2 * Math.sin(4 * L0 * RAD)
        - 1.25 * e * e * Math.sin(2 * M * RAD)); // minutes
  const minutesUTC = ((utcMs / 60000) % 1440 + 1440) % 1440;
  const tst = (minutesUTC + eot + 4 * lon + 1440) % 1440;
  let H = tst / 4 - 180;
  if (H < -180) H += 360;
  const latR = lat * RAD, declR = decl * RAD, HR = H * RAD;
  let cosZen = Math.sin(latR) * Math.sin(declR) + Math.cos(latR) * Math.cos(declR) * Math.cos(HR);
  cosZen = Math.min(1, Math.max(-1, cosZen));
  const zen = Math.acos(cosZen) / RAD;
  const elGeom = 90 - zen;
  // réfraction atmosphérique (NOAA)
  let refr = 0;
  if (elGeom <= 85) {
    const te = Math.tan(elGeom * RAD);
    if (elGeom > 5) refr = 58.1 / te - 0.07 / te ** 3 + 0.000086 / te ** 5;
    else if (elGeom > -0.575) refr = 1735 + elGeom * (-518.2 + elGeom * (103.4 + elGeom * (-12.79 + elGeom * 0.711)));
    else refr = -20.774 / te;
    refr /= 3600;
  }
  let az;
  const denom = Math.cos(latR) * Math.sin(zen * RAD);
  if (Math.abs(denom) > 1e-9) {
    let cosAz = (Math.sin(latR) * cosZen - Math.sin(declR)) / denom;
    cosAz = Math.min(1, Math.max(-1, cosAz));
    az = Math.acos(cosAz) / RAD;
    az = H > 0 ? (az + 180) % 360 : (540 - az) % 360;
  } else az = lat > 0 ? 180 : 0;
  return { azimut: az, elevation: elGeom + refr, elevationGeom: elGeom, declinaison: decl, eot };
}

/* ============================== Heure légale Europe/Paris ============================== */
const fmtOffset = new Intl.DateTimeFormat("en-US", {
  timeZone: "Europe/Paris", hourCycle: "h23",
  year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric",
});
function decalageParisMin(utcMs) {
  const p = {};
  for (const x of fmtOffset.formatToParts(utcMs)) p[x.type] = x.value;
  const wall = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute);
  return Math.round((wall - Math.floor(utcMs / 60000) * 60000) / 60000);
}
function utcDepuisParis(y, m, d, minutes) {
  const guess = Date.UTC(y, m - 1, d, 0, minutes);
  const utc1 = guess - decalageParisMin(guess) * 60000;
  return guess - decalageParisMin(utc1) * 60000;
}

/* ============================== État temporel ============================== */
const maintenant = new Date();
const ANNEE = maintenant.getFullYear();
const etat = {
  jour: 0,       // index 0..364 depuis le 1er janvier
  minutes: 720,  // minutes locales 0..1439
  lecture: false,
  ephemerides: null, // {leverMin, coucherMin, midiMin} en minutes locales, ou null
};
function dateDuJour(j) { const d = new Date(Date.UTC(ANNEE, 0, 1 + j)); return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate() }; }
function jourDepuisDate(m, d) { return Math.round((Date.UTC(ANNEE, m - 1, d) - Date.UTC(ANNEE, 0, 1)) / 86400000); }
function utcCourant() { const { y, m, d } = dateDuJour(etat.jour); return utcDepuisParis(y, m, d, etat.minutes); }

function calculeEphemerides() {
  const { y, m, d } = dateDuJour(etat.jour);
  let prev = null, lever = null, coucher = null, midi = { el: -90, min: 720 };
  for (let t = 0; t <= 1440; t += 2) {
    const s = positionSolaire(utcDepuisParis(y, m, d, t), LAT, LON);
    const el = s.elevationGeom + 0.833; // seuil lever/coucher
    if (prev !== null) {
      if (prev <= 0 && el > 0 && lever === null) lever = t - 2 + 2 * (-prev) / (el - prev);
      if (prev > 0 && el <= 0 && coucher === null) coucher = t - 2 + 2 * prev / (prev - el);
    }
    if (s.elevationGeom > midi.el) midi = { el: s.elevationGeom, min: t };
    prev = el;
  }
  etat.ephemerides = {
    lever: lever === null ? null : Math.round(lever),
    coucher: coucher === null ? null : Math.round(coucher),
    midi: midi.min, elMax: midi.el,
  };
}

/* ============================== Décodage des données ============================== */
/* Les binaires sont servis à côté du MODULE, pas à côté du document. Dans un
   panneau Home Assistant l'URL de la page est /sun-shading alors que les
   assets vivent sous /sun_shading/data/ : résoudre en relatif du
   document y donne un 404. BASE_ASSETS est posée par monte() : le dossier de
   données de la zone (panneau : config.data fournie par l'intégration ;
   page autonome : à côté du module, import.meta.url). */
let BASE_ASSETS = null;
const urlAsset = (ref) => new URL(ref, BASE_ASSETS).href;

/* Ressource binaire gzip servie à côté du module, sous un nom haché : les
   données lourdes ne sont donc chargées qu'au moment où un mode les demande. */
async function chargeGz(ref) {
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Navigateur sans DecompressionStream : utiliser un navigateur récent.");
  }
  const rep = await fetch(urlAsset(ref));
  if (!rep.ok) throw new Error(`chargement ${ref} : HTTP ${rep.status}`);
  return new Response(rep.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer();
}
function litMesh(buf, sec) {
  const dv = new DataView(buf, sec.pos_off, sec.pos_len);
  const pos = new Float32Array(sec.nv * 3);
  for (let i = 0; i < sec.nv; i++) {
    pos[i * 3] = dv.getInt16(i * 6, true) * Q;
    pos[i * 3 + 1] = dv.getInt16(i * 6 + 2, true) * Q;
    pos[i * 3 + 2] = dv.getUint16(i * 6 + 4, true) * Q;
  }
  const ibuf = buf.slice(sec.idx_off, sec.idx_off + sec.idx_len);
  const idx = sec.isz === 4 ? new Uint32Array(ibuf) : new Uint16Array(ibuf);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeVertexNormals();
  return g;
}
function litArbres(buf, sec) {
  const dv = new DataView(buf, sec.off, sec.len);
  const arbres = [];
  for (let i = 0; i < sec.n; i++) {
    const o = i * 8;
    arbres.push({
      x: dv.getInt16(o, true) * Q, y: dv.getInt16(o + 2, true) * Q,
      z: dv.getUint16(o + 4, true) * Q,
      h: dv.getUint8(o + 6) / 4 || 8, d: dv.getUint8(o + 7) / 4 || 4,
    });
  }
  return arbres;
}

/* ============================== Scène ============================== */
let renderer, scene, camera, sunLight, hemi, soleilDisque, trajetGroupe, groupeArbres;
let groupeArbresDisque;
let terrainMesh = null;
let batiMesh, pontsMesh, routesMesh, cheminsMesh, anneauLigne;
let modeleMesh = null; // toiture mesurée (remplace celle du LoD2)
let haloSprite, ligneSoleil, arcMesh = null, matArc;
let centreZone = new THREE.Vector3(0, 0, 10);
let trajetR = 1300;
const ancres = { lever: null, coucher: null };
let arbresData = [];
let besoinRendu = true;
let contextePerdu = false;
function invalide() { besoinRendu = true; if (renderer) planifie(); }
const cible = new THREE.Vector3(0, 0, 12);
const orbite = { az: 0.6, pol: 0.82, dist: 180 }; // az: 0 = vue depuis le sud vers le nord

function initScene(buf, bufDom) {
  const canvas = $("scene");
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(largeur(), hauteur());
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false; // recalcul uniquement quand le soleil bouge
  // dépassement de mémoire graphique : sans cela la vue devient noire sans un
  // mot. La restauration passe par un rechargement — les tampons CPU des
  // textures et du photomaillage ont été rendus, il n'y a plus de quoi
  // repeupler le contexte en place.
  const bandeauPerdu = $("contexte-perdu");
  bandeauPerdu.querySelector("button")
    .addEventListener("click", () => location.reload());
  canvas.addEventListener("webglcontextlost", (ev) => {
    ev.preventDefault();
    contextePerdu = true;
    bandeauPerdu.hidden = false;
  });
  canvas.addEventListener("webglcontextrestored", () => location.reload());

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87b5d9);
  scene.fog = new THREE.Fog(0x87b5d9, 2200, 5200);

  camera = new THREE.PerspectiveCamera(45, largeur() / hauteur(), 2, 6000);
  camera.up.set(0, 0, 1);

  hemi = new THREE.HemisphereLight(0xbcd4ea, 0x55503f, 0.55);
  hemi.position.set(0, 0, 1);
  scene.add(hemi);

  sunLight = new THREE.DirectionalLight(0xffffff, 1.05);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(4096, 4096);
  const sc = sunLight.shadow.camera;
  sc.left = -1150; sc.right = 1150; sc.top = 1150; sc.bottom = -1150; sc.near = 100; sc.far = 4000;
  // pas de biais en profondeur : sur 3 900 m de plage il vaudrait ~0,8 m et
  // décollerait les ombres du pied des murs ; le normalBias par texel suffit
  sunLight.shadow.normalBias = 1.2;
  sunLight.target.position.set(0, 0, 0);
  scene.add(sunLight, sunLight.target);

  // terrain
  const gTerrain = litMesh(buf, DONNEES_META.sections.mnt);
  const mTerrain = new THREE.MeshStandardMaterial({ color: 0x8d9180, roughness: 1, metalness: 0 });
  // faces arrière seulement dans la carte d'ombre : aucune surface ne
  // s'auto-ombre, donc aucune acné même à biais minimal (contrepartie
  // négligeable en plaine : le micro-relief du terrain ne porte plus d'ombre)
  mTerrain.shadowSide = THREE.BackSide;
  terrainMesh = new THREE.Mesh(gTerrain, mTerrain);
  terrainMesh.castShadow = true; terrainMesh.receiveShadow = true;
  scene.add(terrainMesh);

  // bâtiments
  const gBati = litMesh(buf, DONNEES_META.sections.bati);
  const mBati = new THREE.MeshStandardMaterial({ color: 0xd2ccbf, roughness: 0.95, metalness: 0, flatShading: true });
  // volumes fermés : la carte d'ombre stocke les faces arrière -> l'ombre
  // portée naît au pied exact du mur (pas de peter-panning), sans acné
  mBati.shadowSide = THREE.BackSide;
  batiMesh = new THREE.Mesh(gBati, mBati);
  batiMesh.castShadow = true; batiMesh.receiveShadow = true;
  scene.add(batiMesh);

  // modèle précis d'un bâtiment (pipeline/modele_precis.py) : le LoD2 idéalise
  // ce toit (pas de lucarnes ni casquette, faîte 70 cm trop bas) et fausserait
  // la sonde sur les ouvertures. Sa composante LoD2 sort de l'index — avant
  // tout BVH et tout rendu — et le modèle coté au LiDAR 2025 la remplace,
  // dans la physique comme dans la maquette.
  if (bufDom && typeof MODELE_META !== "undefined" && MODELE_META) {
    gBati.setIndex(new THREE.BufferAttribute(filtreIndex(
      gBati.index.array,
      litRetire(bufDom, MODELE_META.sections.retire_bati)), 1));
    modeleMesh = new THREE.Mesh(litMesh(bufDom, MODELE_META.sections.mesh), mBati);
    modeleMesh.castShadow = modeleMesh.receiveShadow = true;
    scene.add(modeleMesh);
  }

  // ponts / ouvrages
  const gPonts = litMesh(buf, DONNEES_META.sections.ponts);
  const mPonts = new THREE.MeshStandardMaterial({ color: 0xb5ad9f, roughness: 1, metalness: 0, flatShading: true });
  pontsMesh = new THREE.Mesh(gPonts, mPonts);
  pontsMesh.castShadow = true; pontsMesh.receiveShadow = true;
  scene.add(pontsMesh);

  // voirie drapée sur le terrain (filaire de circulation EMS)
  const mRoutes = new THREE.MeshStandardMaterial({ color: 0x707076, roughness: 1, metalness: 0,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  routesMesh = new THREE.Mesh(litMesh(buf, DONNEES_META.sections.routes), mRoutes);
  routesMesh.receiveShadow = true;
  scene.add(routesMesh);
  const mChemins = new THREE.MeshStandardMaterial({ color: 0xa39270, roughness: 1, metalness: 0,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  cheminsMesh = new THREE.Mesh(litMesh(buf, DONNEES_META.sections.chemins), mChemins);
  cheminsMesh.receiveShadow = true;
  scene.add(cheminsMesh);

  // arbres (instanciés)
  const arbres = litArbres(buf, DONNEES_META.sections.arbres);
  groupeArbres = new THREE.Group();
  const gTronc = new THREE.CylinderGeometry(1, 1, 1, 6); gTronc.rotateX(Math.PI / 2);
  const gHouppier = new THREE.SphereGeometry(0.5, 8, 6);
  const mTronc = new THREE.MeshStandardMaterial({ color: 0x6a5138, roughness: 1 });
  const mHouppier = new THREE.MeshStandardMaterial({ color: 0x55763f, roughness: 1 });
  mTronc.shadowSide = THREE.BackSide;
  mHouppier.shadowSide = THREE.BackSide;
  // deux lots d'instances : hors et dans l'emprise du photomaillage. Celui-ci
  // porte les arbres réels de la prise de vue, les arbres stylisés de son
  // disque sont donc masqués en mode photo (arbresData les garde tous : la
  // sonde travaille sur la maquette quel que soit le mode affiché).
  const r2Photo = PM3D_META ? PM3D_META.r * PM3D_META.r : 0;
  const dedans = arbres.map((a) => a.x * a.x + a.y * a.y <= r2Photo);
  const nD = dedans.reduce((s, v) => s + (v ? 1 : 0), 0);
  const iTronc = new THREE.InstancedMesh(gTronc, mTronc, arbres.length - nD);
  const iHouppier = new THREE.InstancedMesh(gHouppier, mHouppier, arbres.length - nD);
  const iTroncD = new THREE.InstancedMesh(gTronc, mTronc, nD);
  const iHouppierD = new THREE.InstancedMesh(gHouppier, mHouppier, nD);
  const M = new THREE.Matrix4(), P = new THREE.Vector3(), S = new THREE.Vector3(), QI = new THREE.Quaternion();
  const couleur = new THREE.Color();
  let kH = 0, kD = 0;
  for (let i = 0; i < arbres.length; i++) {
    const a = arbres[i];
    const tronc = dedans[i] ? iTroncD : iTronc;
    const houppier = dedans[i] ? iHouppierD : iHouppier;
    const k = dedans[i] ? kD++ : kH++;
    const ch = Math.max(a.h * 0.62, 2);
    const ht = Math.max(a.h - ch * 0.55, 1);
    const r = Math.max(0.14, a.d * 0.05);
    P.set(a.x, a.y, a.z + ht / 2); S.set(r, r, ht);
    M.compose(P, QI, S); tronc.setMatrixAt(k, M);
    P.set(a.x, a.y, a.z + Math.max(a.h - ch / 2, ch / 2 + 0.5));
    S.set(Math.max(a.d, 1.5), Math.max(a.d, 1.5), ch);
    M.compose(P, QI, S); houppier.setMatrixAt(k, M);
    arbresData.push({ cx: P.x, cy: P.y, cz: P.z, rx: S.x / 2, rz: ch / 2 });
    const t = ((i * 2654435761) % 1000) / 1000;
    couleur.setHSL(0.26 + 0.05 * t, 0.32 + 0.12 * t, 0.30 + 0.08 * t);
    houppier.setColorAt(k, couleur);
  }
  for (const m of [iTronc, iHouppier, iTroncD, iHouppierD]) {
    m.castShadow = m.receiveShadow = true;
  }
  groupeArbresDisque = new THREE.Group();
  groupeArbresDisque.add(iTroncD, iHouppierD);
  groupeArbres.add(iTronc, iHouppier, groupeArbresDisque);
  scene.add(groupeArbres);

  // altitude du terrain : grille moyenne (pas 4 m) construite en une passe
  // sur les sommets du MNT — remplace les raycasts sans BVH qui coûtaient
  // ~5 s au chargement (161 rayons × 367 k triangles pour l'anneau)
  const PAS_Z = 4, NZ = Math.ceil(2 * EX_T / PAS_Z);
  const zSomme = new Float32Array(NZ * NZ), zN = new Uint16Array(NZ * NZ);
  {
    const p = gTerrain.getAttribute("position");
    for (let i = 0; i < p.count; i++) {
      const gx = Math.floor((p.getX(i) + EX_T) / PAS_Z), gy = Math.floor((p.getY(i) + EX_T) / PAS_Z);
      if (gx >= 0 && gx < NZ && gy >= 0 && gy < NZ) {
        zSomme[gy * NZ + gx] += p.getZ(i);
        zN[gy * NZ + gx]++;
      }
    }
  }
  const zTerrain = (x, y) => {
    const gx = Math.floor((x + EX_T) / PAS_Z), gy = Math.floor((y + EX_T) / PAS_Z);
    for (let r = 0; r < 8; r++) { // cellule vide : élargit la recherche
      let s = 0, n = 0;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          const c = (gy + dy) * NZ + gx + dx;
          if (c >= 0 && c < NZ * NZ && zN[c]) { s += zSomme[c]; n += zN[c]; }
        }
      }
      if (n) return s / n;
    }
    return 10;
  };
  const zSol = zTerrain(0, 0);
  cible.z = zSol + 8;

  // anneau du rayon d'affichage, posé sur le terrain
  const nSeg = 160;
  const ringPts = [];
  for (let i = 0; i <= nSeg; i++) {
    const a = (i / nSeg) * Math.PI * 2;
    const x = Math.cos(a) * R_AFF, y = Math.sin(a) * R_AFF;
    ringPts.push(new THREE.Vector3(x, y, zTerrain(x, y) + 0.8));
  }
  anneauLigne = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(ringPts),
    new THREE.LineBasicMaterial({ color: 0xf0b347, transparent: true, opacity: 0.55 }));
  scene.add(anneauLigne);

  centreZone = new THREE.Vector3(0, 0, zSol + 2);

  // trajet du soleil : arc, disque + halo, ligne pointillée
  trajetGroupe = new THREE.Group();
  scene.add(trajetGroupe);
  matArc = new THREE.MeshBasicMaterial({ color: 0xf5a93c, transparent: true, opacity: 0.9, fog: false });
  soleilDisque = new THREE.Mesh(
    new THREE.SphereGeometry(1, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0xffd97a, fog: false }));
  const haloCv = document.createElement("canvas");
  haloCv.width = haloCv.height = 128;
  const hctx = haloCv.getContext("2d");
  const grd = hctx.createRadialGradient(64, 64, 8, 64, 64, 64);
  grd.addColorStop(0, "rgba(255,205,100,0.9)");
  grd.addColorStop(0.35, "rgba(255,190,80,0.35)");
  grd.addColorStop(1, "rgba(255,180,60,0)");
  hctx.fillStyle = grd;
  hctx.fillRect(0, 0, 128, 128);
  haloSprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(haloCv), transparent: true, depthWrite: false, fog: false }));
  const gLigne = new THREE.BufferGeometry();
  gLigne.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6), 3));
  ligneSoleil = new THREE.Line(gLigne, new THREE.LineDashedMaterial({
    color: 0xf0b347, dashSize: 5, gapSize: 3.5, transparent: true, opacity: 0.9, fog: false }));
  soleilDisque.visible = haloSprite.visible = ligneSoleil.visible = false;
  trajetGroupe.add(soleilDisque, haloSprite, ligneSoleil);

  // ResizeObserver et non « resize » : dans un panneau Home Assistant, la
  // fenêtre ne bouge pas quand la barre latérale s'ouvre — l'hôte, si.
  new ResizeObserver(() => {
    if (!largeur() || !hauteur()) return; // panneau masqué
    camera.aspect = largeur() / hauteur();
    camera.updateProjectionMatrix();
    renderer.setSize(largeur(), hauteur());
    invalide();
  }).observe(hote);
}

/* Trajet du soleil pour la date choisie (arc centré sur la sonde ou le centre) */
function trajetCentre() {
  if (sondeEtat.point) {
    const c = sondeEtat.point.clone();
    c.z += 2;
    return c;
  }
  return centreZone.clone();
}

const ROSE_ABR = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];

function majTrajet() {
  if (arcMesh) {
    trajetGroupe.remove(arcMesh);
    arcMesh.geometry.dispose();
    arcMesh = null;
  }
  ancres.lever = ancres.coucher = null;
  const actif = $("opt-trajet").checked;
  if (actif) {
    const { y, m, d } = dateDuJour(etat.jour);
    const c = trajetCentre();
    const e = etat.ephemerides;
    if (e && e.lever !== null) {
      const pts = [];
      const pas = Math.max(4, (e.coucher - e.lever) / 110);
      for (let t = e.lever; t <= e.coucher; t += pas) {
        const s = positionSolaire(utcDepuisParis(y, m, d, t), LAT, LON);
        if (s.elevation < -0.6) continue;
        pts.push(c.clone().addScaledVector(dirSoleil(s), trajetR));
      }
      if (pts.length > 3) {
        const tube = new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(pts), 100,
          Math.max(0.3, trajetR * 0.006), 6, false);
        arcMesh = new THREE.Mesh(tube, matArc);
        trajetGroupe.add(arcMesh);
        ancres.lever = pts[0].clone();
        ancres.coucher = pts[pts.length - 1].clone();
        $("eti-lever").textContent = "☀\n" + fmtMin(e.lever);
        $("eti-coucher").textContent = "☀\n" + fmtMin(e.coucher);
      }
    }
  }
  majSoleilKit();
}

/* Disque, halo, ligne pointillée et badge suivant l'heure courante */
function majSoleilKit() {
  const sol = positionSolaire(utcCourant(), LAT, LON);
  const actif = $("opt-trajet").checked && sol.elevation > -1.5;
  const c = trajetCentre();
  soleilDisque.visible = actif;
  haloSprite.visible = actif;
  ligneSoleil.visible = actif && sol.elevation > 0;
  if (actif) {
    const p = c.clone().addScaledVector(dirSoleil(sol), trajetR);
    soleilDisque.position.copy(p);
    soleilDisque.scale.setScalar(Math.max(2, trajetR * 0.045));
    haloSprite.position.copy(p);
    haloSprite.scale.setScalar(Math.max(8, trajetR * 0.24));
    const pa = ligneSoleil.geometry.attributes.position;
    pa.setXYZ(0, c.x, c.y, c.z);
    pa.setXYZ(1, p.x, p.y, p.z);
    pa.needsUpdate = true;
    ligneSoleil.geometry.computeBoundingSphere();
    ligneSoleil.computeLineDistances();
    ligneSoleil.material.dashSize = Math.max(1.5, trajetR * 0.028);
    ligneSoleil.material.gapSize = Math.max(1, trajetR * 0.02);
    const azA = ROSE_ABR[Math.round(sol.azimut / 45) % 8];
    $("badge-soleil").textContent =
      `☀ ${azA} ${Math.round(sol.azimut)}°, ${Math.round(sol.elevation)}°`;
  }
}

/* Étiquettes HTML projetées à l'écran (badge du soleil, lever, coucher) */
const V_PROJ = new THREE.Vector3();
function majEtiquettes() {
  const visible = trajetGroupe.visible !== false;
  const items = [
    ["badge-soleil", soleilDisque.visible ? soleilDisque.position : null, -0.055],
    ["eti-lever", visible ? ancres.lever : null, 0.03],
    ["eti-coucher", visible ? ancres.coucher : null, 0.03],
  ];
  for (const [id, p, dy] of items) {
    const el = $(id);
    if (!p || !$("opt-trajet").checked) {
      el.style.display = "none";
      continue;
    }
    V_PROJ.copy(p).project(camera);
    if (V_PROJ.z > 1 || Math.abs(V_PROJ.x) > 1.15 || Math.abs(V_PROJ.y) > 1.15) {
      el.style.display = "none";
      continue;
    }
    el.style.display = "block";
    let x = (V_PROJ.x * 0.5 + 0.5) * largeur();
    if (id === "badge-soleil") {
      // le badge reste lisible en bord d'écran (téléphone) au lieu d'être coupé
      const demi = el.offsetWidth / 2 + 8;
      x = Math.min(largeur() - demi, Math.max(demi, x));
    }
    el.style.left = x + "px";
    el.style.top = ((-V_PROJ.y * 0.5 + 0.5 + dy) * hauteur()) + "px";
  }
}

/* Ambiance (ciel, lumières) selon l'élévation solaire */
const C_NUIT = new THREE.Color(0x0d1322), C_AUBE = new THREE.Color(0x5a6d95),
      C_OR = new THREE.Color(0xd9a05e), C_JOUR = new THREE.Color(0x87b5d9);
function majLumieres(sol) {
  const el = sol.elevation;
  const ciel = new THREE.Color();
  if (el <= -8) ciel.copy(C_NUIT);
  else if (el <= 0) ciel.lerpColors(C_NUIT, C_AUBE, (el + 8) / 8);
  else if (el <= 8) ciel.lerpColors(C_AUBE, C_JOUR, el / 8).lerp(C_OR, Math.max(0, 1 - el / 8) * 0.25);
  else ciel.copy(C_JOUR);
  scene.background = ciel;
  scene.fog.color = ciel;

  const jour = Math.max(0, Math.min(1, (el + 0.833) / 6));
  // les textures du photomaillage portent déjà l'éclairage de la prise de vue
  // (juin 2022) : on adoucit l'ombrage simulé pour ne pas cumuler deux ombres
  const kPhoto = photoActif ? 1 : 0;
  sunLight.intensity = 1.65 * jour * (1 - 0.15 * kPhoto);
  const chaud = Math.max(0, 1 - Math.max(0, el) / 15);
  sunLight.color.setHSL(0.09, 0.55 * chaud, 1 - 0.22 * chaud);
  hemi.intensity = (0.11 + 0.30 * jour) * (1 + 0.40 * kPhoto);

  ombrage.dir.set(
    Math.cos(el * RAD) * Math.sin(sol.azimut * RAD),
    Math.cos(el * RAD) * Math.cos(sol.azimut * RAD),
    Math.sin(el * RAD));
  sunLight.position.copy(ombrage.dir).multiplyScalar(1600)
    .add(sunLight.target.position);
  sunLight.castShadow = el > -0.5;
  renderer.shadowMap.needsUpdate = true;
}

/* Frustum d'ombre adapté à la vue : la caméra d'ombre se resserre sur la zone
   regardée (texels fins en zoom serré au lieu de 56 cm sur tout le disque).
   Le frustum orthographique est aligné sur les rayons du soleil : les
   porteurs d'ombre situés entre le soleil et la zone restent inclus, même
   hors cadrage. Recalcul à seuil pour ne pas re-rendre la carte d'ombre à
   chaque pixel de déplacement. */
const ombrage = { r: 0, cx: 0, cy: 0, dir: new THREE.Vector3(0, 0, 1) };
const V_COIN = new THREE.Vector3();
function rayonVisible() {
  // étendue au sol réellement couverte par la vue : projection des coins de
  // l'écran sur le plan du sol (en vue oblique, elle dépasse largement la
  // distance caméra ; un frustum d'ombre plus étroit ferait déborder la
  // carte d'ombre, dont les texels de bord s'étirent en fausses ombres)
  camera.updateMatrixWorld(); // unproject avant le rendu : matrices à jour
  let r = orbite.dist * 0.6;
  for (const sx of [-1, 1]) {
    for (const sy of [-1, 1]) {
      V_COIN.set(sx, sy, 0.5).unproject(camera).sub(camera.position).normalize();
      if (V_COIN.z >= -0.03) {
        // horizon visible : couvrir large mais proportionné au zoom — sauter
        // à ±1150 gonflerait le texel (et son biais) même en vue rapprochée
        return Math.min(1150, Math.max(400, orbite.dist * 2.2));
      }
      const t = (cible.z - camera.position.z) / V_COIN.z;
      const dx = camera.position.x + V_COIN.x * t - cible.x;
      const dy = camera.position.y + V_COIN.y * t - cible.y;
      r = Math.max(r, Math.hypot(dx, dy));
    }
  }
  return Math.min(1150, Math.max(80, r * 1.05));
}

function majOmbrage() {
  const r = rayonVisible();
  if (Math.abs(r - ombrage.r) <= ombrage.r * 0.15
      && Math.hypot(cible.x - ombrage.cx, cible.y - ombrage.cy) <= r * 0.12) {
    return;
  }
  ombrage.r = r;
  ombrage.cx = cible.x;
  ombrage.cy = cible.y;
  const sc = sunLight.shadow.camera;
  sc.left = -r; sc.right = r; sc.top = r; sc.bottom = -r;
  sc.updateProjectionMatrix();
  // biais proportionnels au texel : normalBias minimal (le BackSide élimine
  // l'acné), et un bias de profondeur POSITIF qui recentre la pénombre PCF
  // dans le mur — sans lui, sa moitié claire dessine un liseré de lumière
  // au pied des façades (plage de profondeur near..far = 3 900 m)
  const texel = 2 * r / sunLight.shadow.mapSize.x;
  sunLight.shadow.normalBias = Math.max(0.05, texel * 0.5);
  sunLight.shadow.bias = (texel * 1.8) / 3900;
  sunLight.target.position.set(ombrage.cx, ombrage.cy, 0);
  sunLight.position.copy(ombrage.dir).multiplyScalar(1600)
    .add(sunLight.target.position);
  renderer.shadowMap.needsUpdate = true;
  invalide();
}

/* Qualité des ombres. La carte d'ombre coûte au carré de sa résolution — three
   y empaquette la profondeur en RGBA et y ajoute un tampon de profondeur, soit
   ~470 Mo à 8192 contre ~117 à 4096, le plus gros poste de toute la scène. En
   mode photo elle est plafonnée à 4096 : l'ombre y est portée par un maillage
   dont l'arête fait ~40 cm, dix fois plus grossier que le texel d'ombre
   correspondant. 8192 quadruplerait le coût sans rien changer de visible, et
   fait sortir les appareils mobiles de leur budget mémoire. Le choix de
   l'utilisateur n'est pas modifié : il reprend son plein effet hors mode photo. */
const Q_OMBRE_PHOTO = 4096;
function appliqueOmbres() {
  const choix = +$("opt-ombres").value;
  const q = photoActif ? Math.min(choix, Q_OMBRE_PHOTO) : choix;
  if (q === sunLight.shadow.mapSize.x) return;
  sunLight.shadow.mapSize.set(q, q);
  if (sunLight.shadow.map) { sunLight.shadow.map.dispose(); sunLight.shadow.map = null; }
  ombrage.r = 0; // le biais par texel dépend de la résolution : recadrage forcé
  majOmbrage();
  renderer.shadowMap.needsUpdate = true;
  invalide();
}

/* ============================== Contrôles caméra ============================== */
function majEtatCarte(txt) {
  const e = $("etat-carte");
  if (e) e.textContent = txt || "";
}

function majCamera() {
  const sp = Math.sin(orbite.pol), cp = Math.cos(orbite.pol);
  camera.position.set(
    cible.x - orbite.dist * sp * Math.sin(orbite.az),
    cible.y - orbite.dist * sp * Math.cos(orbite.az),
    cible.z + orbite.dist * cp);
  camera.lookAt(cible);
  majOmbrage();
  const deg = -orbite.az / RAD;
  $("boussole-svg").style.transform = `rotate(${deg}deg)`;
  invalide();
}
/* Sens des commandes. « Normales » : le geste simple fait tourner la vue,
   comme dans un visualiseur 3D. « Inversées » : le geste simple déplace la
   carte et la rotation demande deux doigts ou le clic droit, comme dans une
   application de cartographie. Le choix est personnel et durable, donc
   mémorisé par navigateur. */
let commandesInversees = false;

function litCommandes() {
  try { return localStorage.getItem("commandes") === "inversees"; }
  catch (e) { return false; }
}

function initControles() {
  const el = renderer.domElement;
  let mode = null, px = 0, py = 0;
  let clicDepart = null;
  const pointers = new Map();
  let pinchDist = 0, pinchAngle = 0, pinchCX = 0, pinchCY = 0;
  let dernierTap = null; // double-tap tactile -> recentrage
  const LIM_PAN = R_BATI;

  const deplaceCible = (dx, dy) => {
    const k = orbite.dist * 0.0011;
    const ca = Math.cos(orbite.az), sa = Math.sin(orbite.az);
    cible.x = Math.min(LIM_PAN, Math.max(-LIM_PAN, cible.x + (-dx * ca + dy * sa) * k));
    cible.y = Math.min(LIM_PAN, Math.max(-LIM_PAN, cible.y + (dx * sa + dy * ca) * k));
  };
  const mesurePinch = () => {
    const p = [...pointers.values()];
    return {
      d: Math.hypot(p[0][0] - p[1][0], p[0][1] - p[1][1]),
      a: Math.atan2(p[1][1] - p[0][1], p[1][0] - p[0][0]),
      cx: (p[0][0] + p[1][0]) / 2, cy: (p[0][1] + p[1][1]) / 2,
    };
  };

  el.addEventListener("pointerdown", (e) => {
    el.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, [e.clientX, e.clientY]);
    clicDepart = pointers.size === 1 ? [e.clientX, e.clientY] : null;
    if (pointers.size === 2) {
      ({ d: pinchDist, a: pinchAngle, cx: pinchCX, cy: pinchCY } = mesurePinch());
      mode = "pinch";
    } else {
      // Maj reste le raccourci du déplacement dans les deux sens ; c'est le
      // couple (gauche, droit) qui s'échange.
      const secondaire = e.button === 2 || e.shiftKey;
      mode = (secondaire !== commandesInversees) ? "pan" : "rot";
      px = e.clientX; py = e.clientY;
    }
  });
  el.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, [e.clientX, e.clientY]);
    if (mode === "pinch" && pointers.size === 2) {
      // geste à deux doigts : pincement = zoom, translation = déplacement,
      // rotation des doigts = rotation de la vue
      const m = mesurePinch();
      if (pinchDist > 0) orbite.dist = Math.min(1800, Math.max(60, orbite.dist * pinchDist / m.d));
      let da = m.a - pinchAngle;
      if (da > Math.PI) da -= 2 * Math.PI; else if (da < -Math.PI) da += 2 * Math.PI;
      orbite.az -= da;
      if (commandesInversees) {
        // le déplacement est déjà pris par un doigt : deux doigts inclinent
        orbite.pol = Math.min(1.5, Math.max(0.08,
                                            orbite.pol - (m.cy - pinchCY) * 0.005));
      } else {
        deplaceCible(m.cx - pinchCX, m.cy - pinchCY);
      }
      ({ d: pinchDist, a: pinchAngle, cx: pinchCX, cy: pinchCY } = m);
      majCamera();
      return;
    }
    if (!mode) return;
    const dx = e.clientX - px, dy = e.clientY - py;
    px = e.clientX; py = e.clientY;
    if (mode === "rot") {
      orbite.az -= dx * 0.005;
      orbite.pol = Math.min(1.5, Math.max(0.08, orbite.pol - dy * 0.005));
    } else if (mode === "pan") {
      deplaceCible(dx, dy);
    }
    if (mode === "tilt") {
      // deux doigts en mode inversé : le glissé vertical incline la vue
      orbite.pol = Math.min(1.5, Math.max(0.08, orbite.pol - dy * 0.005));
    }
    majCamera();
  });
  // double-tap : recentre la vue sur le point touché (quand la sonde est inactive)
  const recentre = (cx, cy) => {
    prepareBVH();
    const ndc = new THREE.Vector2((cx / largeur()) * 2 - 1, -(cy / hauteur()) * 2 + 1);
    const rc = new THREE.Raycaster();
    rc.firstHitOnly = true;
    rc.setFromCamera(ndc, camera);
    const h = rc.intersectObjects([terrainMesh, batiMesh, routesMesh, cheminsMesh, pontsMesh], false)[0];
    if (!h) return;
    cible.x = Math.min(LIM_PAN, Math.max(-LIM_PAN, h.point.x));
    cible.y = Math.min(LIM_PAN, Math.max(-LIM_PAN, h.point.y));
    cible.z = h.point.z + 6;
    majCamera();
  };
  const fin = (e) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2 && mode === "pinch") mode = null;
    if (pointers.size === 0) mode = null;
    if (clicDepart && pointers.size === 0
        && Math.hypot(e.clientX - clicDepart[0], e.clientY - clicDepart[1]) < 6) {
      const sondeActive = $("opt-sonde").checked;
      if (sondeActive) {
        sondeClic(...local(e));
      } else if (dernierTap && performance.now() - dernierTap.t < 350
                 && Math.hypot(e.clientX - dernierTap.x, e.clientY - dernierTap.y) < 30) {
        recentre(...local(e));
        dernierTap = null;
      } else {
        dernierTap = { t: performance.now(), x: e.clientX, y: e.clientY };
      }
      clicDepart = null;
    }
  };
  el.addEventListener("pointerup", fin);
  el.addEventListener("pointercancel", fin);
  el.addEventListener("wheel", (e) => {
    e.preventDefault();
    orbite.dist = Math.min(1800, Math.max(60, orbite.dist * Math.exp(e.deltaY * 0.0012)));
    majCamera();
  }, { passive: false });
  el.addEventListener("contextmenu", (e) => e.preventDefault());

  const boussole = $("boussole");
  const nordEnHaut = () => { orbite.az = 0; majCamera(); };
  boussole.addEventListener("click", nordEnHaut);
  boussole.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") nordEnHaut(); });
}

/* ============================== Modes de carte ============================== */
/* Trois rendus au choix : maquette abstraite, vue satellite (orthophoto drapée
   et façades texturées jusqu'à 1 km), et photomaillage photogrammétrique posé
   au centre de cette vue satellite. Chaque mode charge ses données au premier
   usage : elles sont servies à côté de la page, jamais embarquées. */
let satEtat = null;
let photoEtat = null;
let modeCarte = "abstrait";
let photoActif = false; // photomaillage chargé et affiché

function litMeshUV(buf, sec) {
  const dv = new DataView(buf, sec.pos_off, sec.pos_len);
  const pos = new Float32Array(sec.nv * 3);
  const uv = new Float32Array(sec.nv * 2);
  for (let i = 0; i < sec.nv; i++) {
    const o = i * 10;
    pos[i * 3] = dv.getInt16(o, true) * Q;
    pos[i * 3 + 1] = dv.getInt16(o + 2, true) * Q;
    pos[i * 3 + 2] = dv.getUint16(o + 4, true) * Q;
    uv[i * 2] = dv.getUint16(o + 6, true) / 65535;
    uv[i * 2 + 1] = dv.getUint16(o + 8, true) / 65535;
  }
  const ibuf = buf.slice(sec.idx_off, sec.idx_off + sec.idx_len);
  const idx = sec.isz === 4 ? new Uint32Array(ibuf) : new Uint16Array(ibuf);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeVertexNormals();
  return g;
}

/* Photomaillage : 13 octets par sommet (int16 x,y ; uint16 z,u,v ; int8
   nx,ny,nz). Les normales viennent du prétraitement, soudées par position :
   les sommets étant dédoublés par couple (sommet, uv) et les îlots UV faisant
   ~3 triangles, un computeVertexNormals faciliterait tout le maillage. */
function litMeshPM(buf, sec) {
  const dv = new DataView(buf, sec.pos_off, sec.pos_len);
  const pos = new Float32Array(sec.nv * 3);
  const uv = new Float32Array(sec.nv * 2);
  const nrm = new Float32Array(sec.nv * 3);
  for (let i = 0; i < sec.nv; i++) {
    const o = i * 13;
    pos[i * 3] = dv.getInt16(o, true) * Q;
    pos[i * 3 + 1] = dv.getInt16(o + 2, true) * Q;
    pos[i * 3 + 2] = dv.getUint16(o + 4, true) * Q;
    uv[i * 2] = dv.getUint16(o + 6, true) / 65535;
    uv[i * 2 + 1] = dv.getUint16(o + 8, true) / 65535;
    nrm[i * 3] = dv.getInt8(o + 10) / 127;
    nrm[i * 3 + 1] = dv.getInt8(o + 11) / 127;
    nrm[i * 3 + 2] = dv.getInt8(o + 12) / 127;
  }
  const ibuf = buf.slice(sec.idx_off, sec.idx_off + sec.idx_len);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  g.setAttribute("normal", new THREE.BufferAttribute(nrm, 3));
  g.setIndex(new THREE.BufferAttribute(
    sec.isz === 4 ? new Uint32Array(ibuf) : new Uint16Array(ibuf), 1));
  // 2,5 M sommets : ~100 Mo de tampons dont plus rien n'a besoin une fois
  // téléversés. Réservé à ce maillage : il n'est ni raycasté ni refiltré,
  // contrairement au terrain et aux façades satellite dont preparePhoto relit
  // les index. La sphère englobante se calcule pendant qu'ils existent encore.
  g.computeBoundingSphere();
  for (const a of [g.getAttribute("position"), g.getAttribute("uv"),
                   g.getAttribute("normal"), g.getIndex()]) {
    a.onUpload(function () { this.array = null; });
  }
  return g;
}

/* Les huit atlas de la page pèsent ~600 Mo une fois décodés — autant que les
   textures qu'ils alimentent sur le GPU. En ImageBitmap ils sont téléversés
   tout de suite puis fermés : la mémoire est rendue de façon certaine, là où un
   HTMLImageElement référencé par sa Texture laisse le navigateur seul juge de
   la garder. Contrepartie assumée : un contexte WebGL perdu ne peut plus être
   repeuplé, d'où le rechargement de page à sa restauration (initScene). */
async function chargeTexture(src) {
  const regle = (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    t.needsUpdate = true;
    return t;
  };
  if (typeof createImageBitmap !== "function") {
    return new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => res(regle(new THREE.Texture(img)));
      img.onerror = rej;
      img.src = urlAsset(src);
    });
  }
  const rep = await fetch(urlAsset(src));
  if (!rep.ok) throw new Error(`chargement ${src} : HTTP ${rep.status}`);
  // l'orientation est appliquée au bitmap : flipY neutralisé côté texture pour
  // retrouver la convention des UV du prétraitement
  const bmp = await createImageBitmap(await rep.blob(), { imageOrientation: "flipY" });
  const t = regle(new THREE.Texture(bmp));
  t.flipY = false;
  renderer.initTexture(t);
  bmp.close();
  return t;
}

async function prepareSatellite() {
  if (satEtat) return satEtat.promesse;
  const promesse = (async () => {
    const buf = await chargeGz(RES.sat);
    const orthoTex = await chargeTexture(RES.ortho);
    const mTerrainSat = new THREE.MeshStandardMaterial({ map: orthoTex, roughness: 1, metalness: 0 });
    mTerrainSat.shadowSide = THREE.BackSide;
    // uv du terrain : projection linéaire monde -> atlas
    const gT = terrainMesh.geometry;
    if (!gT.getAttribute("uv")) {
      const p = gT.getAttribute("position");
      const uvs = new Float32Array(p.count * 2);
      const ex = SAT_META.ex_t;
      for (let i = 0; i < p.count; i++) {
        uvs[i * 2] = (p.getX(i) + ex) / (2 * ex);
        uvs[i * 2 + 1] = (p.getY(i) + ex) / (2 * ex);
      }
      gT.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    }
    const meshes = [];
    for (let i = 0; i < SAT_META.n_atlas; i++) {
      const tex = await chargeTexture(RES.atlas[i]);
      const m = new THREE.Mesh(
        litMeshUV(buf, SAT_META.sections["bati_tex" + i]),
        new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, metalness: 0, flatShading: true,
          shadowSide: THREE.BackSide }));
      m.castShadow = m.receiveShadow = true;
      m.visible = false;
      scene.add(m);
      meshes.push(m);
    }
    const mReste = new THREE.Mesh(
      litMesh(buf, SAT_META.sections.bati_reste),
      new THREE.MeshStandardMaterial({ color: 0xd2ccbf, roughness: 0.95, metalness: 0, flatShading: true,
        shadowSide: THREE.BackSide }));
    mReste.castShadow = mReste.receiveShadow = true;
    mReste.visible = false;
    scene.add(mReste);
    meshes.push(mReste);
    satEtat.mTerrainNormal = terrainMesh.material;
    satEtat.mTerrainSat = mTerrainSat;
    satEtat.meshes = meshes;
    satEtat.pret = true;
  })();
  satEtat = { promesse, pret: false, meshes: [], mTerrainSat: null, mTerrainNormal: null };
  return promesse;
}

/* Index privé des triangles retirés : les façades texturées recouvertes par le
   photomaillage ne doivent pas être dessinées deux fois. */
function filtreIndex(idx, retire) {
  const marque = new Uint8Array(idx.length / 3);
  let n = 0;
  for (const t of retire) {
    if (t < marque.length && !marque[t]) { marque[t] = 1; n++; }
  }
  const out = new idx.constructor(idx.length - n * 3);
  let k = 0;
  for (let t = 0; t < marque.length; t++) {
    if (marque[t]) continue;
    out[k++] = idx[t * 3];
    out[k++] = idx[t * 3 + 1];
    out[k++] = idx[t * 3 + 2];
  }
  return out;
}

function litRetire(buf, sec) {
  // sections non alignées sur 4 octets : copie obligatoire
  return new Uint32Array(buf.slice(sec.off, sec.off + sec.len));
}

/* Copie d'une géométrie privée de certains triangles : les attributs sont
   PARTAGÉS (un seul tampon GPU), seul l'index diffère. Sert au terrain, dont
   l'original doit rester intact — la sonde le raycaste même invisible. */
function geoSansTriangles(g, retire) {
  const r = new THREE.BufferGeometry();
  for (const nom of ["position", "uv", "normal"]) {
    const a = g.getAttribute(nom);
    if (a) r.setAttribute(nom, a);
  }
  r.setIndex(new THREE.BufferAttribute(filtreIndex(g.getIndex().array, retire), 1));
  g.computeBoundingSphere();
  r.boundingSphere = g.boundingSphere; // tous les sommets sont conservés
  return r;
}

async function preparePhoto() {
  if (photoEtat) return photoEtat.promesse;
  const promesse = (async () => {
    await prepareSatellite();
    const buf = await chargeGz(RES.pm3d);
    const meshes = [];
    for (let i = 0; i < PM3D_META.n_atlas; i++) {
      const tex = await chargeTexture(RES.pm3datlas[i]);
      // texture pré-éclairée traitée en albédo ; le MNT est percé sous le
      // disque (retire_mnt), l'offset ne couvre plus que la bande de
      // recouvrement de quelques mètres au bord du trou
      const mat = new THREE.MeshStandardMaterial({
        map: tex, roughness: 1, metalness: 0, polygonOffset: true,
        polygonOffsetFactor: -1, polygonOffsetUnits: -1,
      });
      mat.shadowSide = THREE.BackSide;
      const m = new THREE.Mesh(
        litMeshPM(buf, PM3D_META.sections["pm3d_tex" + i]), mat);
      m.castShadow = m.receiveShadow = true;
      m.visible = false;
      scene.add(m);
      meshes.push(m);
    }
    // deux index par mesh satellite : complet, ou privé des façades recouvertes
    const complets = [], filtres = [];
    for (let i = 0; i < satEtat.meshes.length; i++) {
      const nom = i < SAT_META.n_atlas
        ? "retire_sat_bati_tex" + i : "retire_sat_bati_reste";
      const g = satEtat.meshes[i].geometry;
      complets.push(g.index);
      filtres.push(new THREE.BufferAttribute(
        filtreIndex(g.index.array, litRetire(buf, PM3D_META.sections[nom])), 1));
    }
    // terrain percé sous le disque : MNT (sol nu drapé de l'ortho) et
    // photomaillage sont deux reconstructions du même sol, divergentes de
    // 10 à 50 cm — sans perçage, l'ortho transpercerait par plaques
    const tp = new THREE.Mesh(
      geoSansTriangles(terrainMesh.geometry,
                       litRetire(buf, PM3D_META.sections.retire_mnt)),
      satEtat.mTerrainSat);
    tp.castShadow = tp.receiveShadow = true;
    tp.visible = false;
    scene.add(tp);
    photoEtat.terrain = tp;
    photoEtat.meshes = meshes;
    photoEtat.complets = complets;
    photoEtat.filtres = filtres;
    photoEtat.pret = true;
  })();
  photoEtat = { promesse, pret: false, meshes: [], complets: [], filtres: [],
                terrain: null };
  return promesse;
}

function appliqueCarte(mode) {
  modeCarte = mode;
  const sat = mode !== "abstrait";
  if (sat && (!satEtat || !satEtat.pret)) return;
  const photo = mode === "photo" && photoEtat !== null && photoEtat.pret;
  photoActif = photo;
  batiMesh.visible = !sat;
  if (modeleMesh) modeleMesh.visible = !sat;
  routesMesh.visible = !sat;
  cheminsMesh.visible = !sat;
  if (satEtat && satEtat.pret) {
    for (let i = 0; i < satEtat.meshes.length; i++) {
      satEtat.meshes[i].visible = sat;
      if (photoEtat && photoEtat.pret) {
        satEtat.meshes[i].geometry.setIndex(
          photo ? photoEtat.filtres[i] : photoEtat.complets[i]);
      }
    }
    terrainMesh.material = sat ? satEtat.mTerrainSat : satEtat.mTerrainNormal;
  }
  // le terrain reste dans la scène même masqué : la sonde le raycaste
  terrainMesh.visible = !photo;
  if (photoEtat && photoEtat.pret) {
    photoEtat.terrain.visible = photo;
    for (const m of photoEtat.meshes) m.visible = photo;
  }
  groupeArbresDisque.visible = !photo;
  appliqueOmbres();
  majLumieres(positionSolaire(utcCourant(), LAT, LON));
  renderer.shadowMap.needsUpdate = true;
  invalide();
}

/* ============================== Analyses : heures de soleil & sonde ============================== */
function dirSoleil(sol) {
  return new THREE.Vector3(
    Math.cos(sol.elevation * RAD) * Math.sin(sol.azimut * RAD),
    Math.cos(sol.elevation * RAD) * Math.cos(sol.azimut * RAD),
    Math.sin(sol.elevation * RAD));
}

let bvhPret = false;
function prepareBVH() {
  if (bvhPret) return;
  THREE.BufferGeometry.prototype.computeBoundsTree = MeshBVHLib.computeBoundsTree;
  THREE.BufferGeometry.prototype.disposeBoundsTree = MeshBVHLib.disposeBoundsTree;
  THREE.Mesh.prototype.raycast = MeshBVHLib.acceleratedRaycast;
  for (const m of [terrainMesh, batiMesh, pontsMesh, routesMesh, cheminsMesh,
                   ...(modeleMesh ? [modeleMesh] : [])]) {
    m.geometry.computeBoundsTree();
  }
  bvhPret = true;
}

/* ---- feuillage : transmittance saisonnière (Beer-Lambert) ----
   Les houppiers sont des ellipsoïdes ; le soleil qui les traverse est atténué
   selon la longueur du trajet et la densité du feuillage. Pas d'essence dans
   les données : tout est traité en feuillu (nu l'hiver). */
const K_ETE = 0.9, K_HIVER = 0.18; // coefficients d'extinction (m⁻¹)
/* Jours (base 0) : début et fin du débourrement, début et fin de la chute.
   Constante et non valeurs en dur, parce qu'elles voyagent jusqu'à
   l'intégration Home Assistant, qui n'implémente que la FORME de la courbe
   (deux rampes linéaires) et reçoit ses dates d'ici. */
const FEUILLAISON = [90, 120, 288, 320];
function facteurFeuillaison(jour) {
  const [deb0, deb1, chu0, chu1] = FEUILLAISON;
  if (jour < deb0 || jour >= chu1) return 0;              // hiver
  if (jour < deb1) return (jour - deb0) / (deb1 - deb0);  // débourrement
  if (jour < chu0) return 1;                              // feuillé
  return 1 - (jour - chu0) / (chu1 - chu0);               // chute
}

/* Index angulaire des houppiers vus du point sondé : chaque arbre pertinent
   est réduit à une fenêtre (azimut ± demi-angle, élévations min/max) ; un
   rayon ne teste l'ellipsoïde exacte que s'il tombe dans la fenêtre.
   Indispensable depuis le disque à 1 km (14 000 arbres). */
function indexeArbres(o) {
  const marge = 0.6 * RAD; // couvre le rayon du disque solaire échantillonné
  const idx = [];
  for (let i = 0; i < arbresData.length; i++) {
    const a = arbresData[i];
    const dx = a.cx - o.x, dy = a.cy - o.y;
    const dh = Math.hypot(dx, dy);
    const elMax = Math.atan2(a.cz + a.rz - o.z, Math.max(0.1, dh - a.rx));
    if (elMax < -0.02) continue; // jamais au-dessus de l'horizon local
    const elMin = Math.atan2(a.cz - a.rz - o.z, dh + a.rx);
    const az = Math.atan2(dx, dy);
    const demi = (dh <= a.rx ? Math.PI : Math.asin(Math.min(1, a.rx / dh))) + marge;
    idx.push({ a, az, demi, elMin: elMin - marge, elMax: elMax + marge });
  }
  return idx;
}

function transmittanceArbres(idx, azR, elR, ox, oy, oz, dx, dy, dz, k) {
  let t = 1;
  for (let i = 0; i < idx.length; i++) {
    const e = idx[i];
    if (elR < e.elMin || elR > e.elMax) continue;
    let da = azR - e.az;
    if (da > Math.PI) da -= 2 * Math.PI; else if (da < -Math.PI) da += 2 * Math.PI;
    if (Math.abs(da) > e.demi) continue;
    const a = e.a;
    const qx = (ox - a.cx) / a.rx, qy = (oy - a.cy) / a.rx, qz = (oz - a.cz) / a.rz;
    const vx = dx / a.rx, vy = dy / a.rx, vz = dz / a.rz;
    const A = vx * vx + vy * vy + vz * vz;
    const B = 2 * (qx * vx + qy * vy + qz * vz);
    const C = qx * qx + qy * qy + qz * qz - 1;
    const disc = B * B - 4 * A * C;
    if (disc <= 0) continue;
    const rd = Math.sqrt(disc);
    const t1 = (-B - rd) / (2 * A), t2 = (-B + rd) / (2 * A);
    if (t2 <= 0.5) continue;
    t *= Math.exp(-k * (t2 - Math.max(t1, 0.5))); // longueur traversée (m)
    if (t < 0.003) return 0;
  }
  return t;
}

/* ---- sonde au clic ---- */
/* La sonde n'est pas un point mais un carré de 50 cm de côté déposé à plat sur
   la surface visée — sol, façade, vitrage, pan de toit sous une fenêtre. C'est
   l'ordre de grandeur d'une ouverture, et ce qui n'en ombrage qu'une partie
   (joue de lucarne, casquette, tronc) compte à proportion. */
const SONDE_COTE = 0.5;
/* Grille 3×3 de centres de cellule, ordonnée centre → coins → milieux d'arête :
   les cinq premiers suffisent tant que le carré est éclairé uniformément. */
const SONDE_GRILLE = (() => {
  const d = SONDE_COTE / 3;
  return [[0, 0], [-d, -d], [d, -d], [d, d], [-d, d], [0, -d], [d, 0], [0, d], [-d, 0]];
})();
const SONDE_TOL = 0.02;   // dispersion des 5 premiers points sous laquelle on ne raffine pas
const SONDE_PENTE = 0.978; // cos(12°) — au-delà, la surface n'est plus « du sol »

const sondeEtat = { point: null, normale: null, t1: null, t2: null, mode: null,
                    marqueur: null, epingle: null, jeton: 0, fractions: null };
const ROSE = ["nord", "nord-est", "est", "sud-est", "sud", "sud-ouest", "ouest", "nord-ouest"];

/* Classement de la surface d'après sa normale : sert au titre du panneau et
   au choix des offsets. Partagé par la sonde au clic et la pose directe. */
function classeSurface(nrm) {
  return Math.abs(nrm.z) < 0.5 ? "facade" : (nrm.z >= SONDE_PENTE ? "sol" : "pente");
}

/* Base du carré dans le plan de la surface : t1 horizontal, t2 dans la ligne
   de plus grande pente. Sur une surface horizontale, t1 = est et t2 = nord. */
function baseTangente(nrm) {
  const t1 = new THREE.Vector3().crossVectors(nrm, new THREE.Vector3(0, 0, 1));
  if (t1.lengthSq() < 1e-8) t1.set(1, 0, 0); else t1.normalize();
  const t2 = new THREE.Vector3().crossVectors(nrm, t1).normalize();
  return { t1, t2 };
}

function placeMarqueur(p, nrm, t1, t2) {
  if (!sondeEtat.marqueur) {
    const grp = new THREE.Group();
    const plan = new THREE.Mesh(
      new THREE.PlaneGeometry(SONDE_COTE, SONDE_COTE),
      new THREE.MeshBasicMaterial({ color: 0xf0b347, fog: false, transparent: true,
                                    opacity: 0.55, side: THREE.DoubleSide,
                                    depthWrite: false }));
    const bord = new THREE.LineSegments(
      new THREE.EdgesGeometry(plan.geometry),
      new THREE.LineBasicMaterial({ color: 0x63400a, fog: false }));
    // épingle : le carré ne fait que 3 px à 180 m de recul, il faut un repère
    // de taille écran constante pour retrouver la sonde de loin
    const epingle = new THREE.Group();
    epingle.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1)]),
      new THREE.LineBasicMaterial({ color: 0xf0b347, fog: false })));
    const tete = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.14),
      new THREE.MeshBasicMaterial({ color: 0xf0b347, fog: false }));
    tete.position.z = 1;
    epingle.add(tete);
    grp.add(plan, bord, epingle);
    grp.renderOrder = 5;
    sondeEtat.epingle = epingle;
    sondeEtat.marqueur = grp;
    scene.add(grp);
  }
  const g = sondeEtat.marqueur;
  // 3 cm de décollement : la quantification du bâti est à 5 cm, sans marge le
  // carré se battrait en profondeur avec la surface qui le porte
  g.position.copy(p).addScaledVector(nrm, 0.03);
  g.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(t1, t2, nrm));
  g.visible = true;
  majMarqueurSonde();
}

/* Épingle à taille écran constante (~55 px) : jamais encombrante de près,
   toujours repérable de loin. Appelée juste avant chaque rendu. */
function majMarqueurSonde() {
  const g = sondeEtat.marqueur;
  if (!g || !g.visible || !camera) return;
  const d = camera.position.distanceTo(g.position);
  const mParPx = 2 * Math.tan(camera.fov * RAD / 2) * d / hauteur();
  sondeEtat.epingle.scale.setScalar(Math.min(14, Math.max(0.2, 55 * mParPx)));
}

/* Pose la sonde depuis des coordonnées monde plutôt qu'un clic écran :
   rejoue exactement un point mémorisé (attributs d'une entité HA, ou fixture
   de test) sans dépendre de la caméra. */
function poseSonde(x, y, z, nx, ny, nz) {
  prepareBVH();
  const nrm = new THREE.Vector3(nx, ny, nz).normalize();
  const { t1, t2 } = baseTangente(nrm);
  sondeEtat.jeton++; // annule un calcul de frise en cours
  sondeEtat.fractions = null;
  sondeEtat.point = new THREE.Vector3(x, y, z);
  sondeEtat.normale = nrm;
  sondeEtat.t1 = t1;
  sondeEtat.t2 = t2;
  sondeEtat.mode = classeSurface(nrm);
  return { mode: sondeEtat.mode };
}

/* Les événements de pointeur donnent des coordonnées FENÊTRE. La scène ne
   commence plus en haut à gauche de celle-ci dès que la carte est un panneau
   Home Assistant : elle démarre sous l'en-tête et à droite de la barre
   latérale. Seuls les usages ABSOLUS sont concernés — les déplacements
   d'orbite et de pan sont des différences, insensibles à l'origine.
   `sondeClic` et `recentre` attendent des coordonnées relatives à l'hôte,
   comme en rend `projette`. */
function local(e) {
  const r = hote.getBoundingClientRect();
  return [e.clientX - r.left, e.clientY - r.top];
}

function sondeClic(cx, cy) {
  const suite = () => {
    prepareBVH();
    const ndc = new THREE.Vector2((cx / largeur()) * 2 - 1, -(cy / hauteur()) * 2 + 1);
    const rc = new THREE.Raycaster();
    rc.firstHitOnly = true;
    rc.setFromCamera(ndc, camera);
    const cibles = [batiMesh, terrainMesh, routesMesh, cheminsMesh, pontsMesh];
    if (modeleMesh) cibles.push(modeleMesh);
    const hits = rc.intersectObjects(cibles, false);
    if (!hits.length) return;
    const h = hits[0];
    // la normale sert désormais quelle que soit la surface : elle porte le
    // carré de mesure. Retournée vers la caméra — l'enroulement des faces
    // n'est pas fiable d'un maillage à l'autre, et on sonde ce qu'on voit.
    const nrm = h.face.normal.clone().normalize();
    if (nrm.dot(camera.position.clone().sub(h.point)) < 0) nrm.negate();
    const mode = classeSurface(nrm);
    const { t1, t2 } = baseTangente(nrm);
    sondeEtat.point = h.point.clone();
    sondeEtat.normale = nrm;
    sondeEtat.t1 = t1;
    sondeEtat.t2 = t2;
    sondeEtat.mode = mode;
    placeMarqueur(h.point, nrm, t1, t2);
    $("sonde-json").hidden = true;
    $("sonde-assoc-etat").textContent = "";
    delete $("sonde-nom").dataset.edite;
    $("sonde-nom").value = "";
    $("sonde-volet").dispatchEvent(new Event("input"));
    $("sonde").hidden = false;
    calculeSonde();
    majTrajet();
    invalide();
  };
  if (!bvhPret) {
    $("sonde").hidden = false;
    $("sonde-titre").textContent = "Sonde";
    $("sonde-info").textContent = "Préparation du calcul (première utilisation)…";
    setTimeout(suite, 30);
  } else suite();
}

/* Échantillonnage du disque solaire (diamètre apparent 0,53°) : centre puis
   hexagone équi-aire. Les trois premiers points (centre, haut, bas) suffisent
   hors pénombre ; les quatre autres ne sont évalués qu'aux transitions. */
const DISQUE_SOLAIRE = (() => {
  const r = 0.00327; // rad — anneau à 0,707 × rayon apparent (équi-aire)
  const pts = [[0, 0], [0, r], [0, -r]];
  for (const a of [30, 150, 210, 330]) {
    pts.push([Math.cos(a * RAD) * r, Math.sin(a * RAD) * r]);
  }
  return pts;
})();

/* Échantillonneur attaché à une position de sonde : rend une fonction
   (dir, kFeuille, rapide) → fraction 0-1 du disque solaire vue par le carré.
   Sorti de calculeSonde pour être partagé avec le masque d'horizon, qui
   l'appelle par direction au lieu de par minute. Une seule implémentation de
   « le soleil atteint-il cette surface » : rien à faire coïncider ensuite. */
function sondeur(point, nrm, t1, t2, arbresActifs) {
  prepareBVH();
  // les 9 points de mesure du carré, figés dans le plan de la surface
  const pos = SONDE_GRILLE.map(([a, b]) =>
    point.clone().addScaledVector(t1, a).addScaledVector(t2, b));
  const oref = point.clone().addScaledVector(nrm, 0.1);
  // appels directs au BVH (meshes à transformation identité) : bien moins
  // d'allocations que Raycaster.intersectObjects, ~7 rayons/minute en pénombre
  const bvhCibles = [batiMesh, terrainMesh, pontsMesh]
    .concat(modeleMesh ? [modeleMesh] : [])
    .map((m) => m.geometry.boundsTree);
  const ray = new THREE.Ray();
  const bloque = () => {
    for (const bt of bvhCibles) {
      if (bt.raycastFirst(ray, THREE.DoubleSide)) return true;
    }
    return false;
  };
  let idxArbres = null; // construit au premier appel éclairé
  const u = new THREE.Vector3(), v = new THREE.Vector3();
  const Z = new THREE.Vector3(0, 0, 1), e = new THREE.Vector3();
  const o = new THREE.Vector3(); // origine du rayon, réutilisée point après point
  const val = new Float32Array(DISQUE_SOLAIRE.length);
  let kF = 0;
  const echantillon = (k, dir) => {
    const [du, dv] = DISQUE_SOLAIRE[k];
    e.copy(dir).addScaledVector(u, du).addScaledVector(v, dv).normalize();
    if (e.z <= 0) return 0; // sous l'horizon géométrique
    ray.origin.copy(o);
    ray.direction.copy(e);
    if (bloque()) return 0;
    return arbresActifs
      ? transmittanceArbres(idxArbres, Math.atan2(e.x, e.y), Math.asin(e.z),
                            o.x, o.y, o.z, e.x, e.y, e.z, kF)
      : 1;
  };
  // départ du rayon à 0,15 m du point (0,10 le long de la normale) : assez
  // pour ne pas réintersecter sa propre surface (quantification 5 cm),
  // assez près pour que joues de lucarne et casquette comptent
  const place = (k, dir) => {
    o.copy(pos[k]).addScaledVector(dir, 0.15).addScaledVector(nrm, 0.1);
  };
  // fraction du disque solaire vue depuis le point k du carré
  const fractionPoint = (k, dir) => {
    place(k, dir);
    val[0] = echantillon(0, dir);
    val[1] = echantillon(1, dir);
    val[2] = echantillon(2, dir);
    if ((val[0] > 0) === (val[1] > 0) && (val[1] > 0) === (val[2] > 0)) {
      return (val[0] + val[1] + val[2]) / 3;
    }
    // pénombre : les quatre échantillons restants affinent la fraction
    let somme = val[0] + val[1] + val[2];
    for (let j = 3; j < DISQUE_SOLAIRE.length; j++) somme += echantillon(j, dir);
    return somme / DISQUE_SOLAIRE.length;
  };
  /* rapide : un seul rayon, centre du carré et centre du disque. Réservé au
     balayage grossier du masque d'horizon, qui n'a qu'à encadrer les
     transitions — elles sont ensuite affinées à l'échantillonnage complet. */
  return function fraction(dir, kFeuille, rapide) {
    if (dir.dot(nrm) <= 0.02) return 0; // soleil derrière la surface sondée
    kF = kFeuille;
    if (arbresActifs && !idxArbres) idxArbres = indexeArbres(oref);
    // base du disque : u horizontal, v vers le haut du disque
    u.crossVectors(dir, Z);
    if (u.lengthSq() < 1e-6) u.set(1, 0, 0); else u.normalize();
    v.crossVectors(u, dir);
    if (rapide) {
      place(0, dir);
      return echantillon(0, dir);
    }
    // le carré est parcouru centre puis coins ; s'ils s'accordent, inutile
    // d'aller chercher les milieux d'arête
    let somme = 0, mini = 2, maxi = -1;
    for (let k = 0; k < SONDE_GRILLE.length; k++) {
      const f = fractionPoint(k, dir);
      somme += f;
      if (f < mini) mini = f;
      if (f > maxi) maxi = f;
      if (k === 4 && maxi - mini <= SONDE_TOL) { somme *= SONDE_GRILLE.length / 5; break; }
    }
    return somme / SONDE_GRILLE.length;
  };
}

function calculeSonde() {
  if (!sondeEtat.point) return;
  const jeton = ++sondeEtat.jeton;
  sondeEtat.fractions = null; // la frise précédente ne vaut plus rien
  const { y, m, d } = dateDuJour(etat.jour);
  const pas = 1; // minute
  const n = 1440 / pas;
  const fractions = new Float32Array(n);
  const fraction = sondeur(sondeEtat.point, sondeEtat.normale,
                           sondeEtat.t1, sondeEtat.t2, groupeArbres.visible);
  const kFeuille = K_HIVER + (K_ETE - K_HIVER) * facteurFeuillaison(etat.jour);
  const dir = new THREE.Vector3();
  $("sonde-info").textContent = "Calcul…";
  let i = 0;
  function tranche() {
    if (jeton !== sondeEtat.jeton) return;
    // tranches courtes : chaque minute coûte 5 à 9 points de mesure
    const fin = Math.min(n, i + 15);
    for (; i < fin; i++) {
      const sol = positionSolaire(utcDepuisParis(y, m, d, i * pas), LAT, LON);
      if (sol.elevation <= -0.3) continue; // disque entièrement sous l'horizon
      dir.copy(dirSoleil(sol));
      fractions[i] = fraction(dir, kFeuille, false);
    }
    if (i < n) requestAnimationFrame(tranche);
    else afficheSonde(fractions, pas);
  }
  tranche();
}

/* ---- masque d'horizon d'une ouverture ----
   Pour chaque azimut, la BANDE d'élévations [elMin, elMax] où le soleil
   atteint directement la surface sondée. Une borne basse seule ne suffirait
   pas : la corniche à ressauts de la façade ouest masque le soleil HAUT, et
   un « au-dessus de tel angle, il y a du soleil » serait faux là.
   Sortie destinée à Home Assistant (binary_sensor « soleil direct »).
   Azimut sans aucun soleil : [90, 90] — l'élévation ne l'atteint jamais
   sous cette latitude, le capteur reste donc éteint sans cas particulier. */
function calculeMasque(pasAz, seuil, kFeuille, surProgres) {
  if (!sondeEtat.point) return Promise.resolve(null);
  const fraction = sondeur(sondeEtat.point, sondeEtat.normale,
                           sondeEtat.t1, sondeEtat.t2, groupeArbres.visible);
  const dir = new THREE.Vector3();
  const vise = (az, el, rapide) => {
    const c = Math.cos(el * RAD);
    dir.set(c * Math.sin(az * RAD), c * Math.cos(az * RAD), Math.sin(el * RAD));
    return fraction(dir, kFeuille, rapide);
  };
  // frontière entre une élévation sombre et une élévation éclairée, au
  // dixième de degré près, à l'échantillonnage complet du carré
  const affine = (az, sombre, clair) => {
    if ((vise(az, sombre, false) >= seuil) === (vise(az, clair, false) >= seuil)) {
      return { el: (sombre + clair) / 2, sur: false };
    }
    let a = sombre, b = clair;
    for (let it = 0; it < 8; it++) {
      const m = (a + b) / 2;
      if (vise(az, m, false) >= seuil) b = m; else a = m;
    }
    return { el: (a + b) / 2, sur: true };
  };
  const bandes = [];
  let nFragmente = 0, nIncertain = 0;
  const unAzimut = (az) => {
    // balayage grossier au degré, un rayon par pas : il ne sert qu'à encadrer
    const eclaire = [];
    for (let el = 0; el <= 90; el++) eclaire.push(vise(az, el, true) >= seuil);
    // plus longue plage éclairée contiguë
    let deb = -1, fin = -1, d0 = -1, nPlages = 0;
    for (let el = 0; el <= 90; el++) {
      if (eclaire[el]) {
        if (d0 < 0) { d0 = el; nPlages++; }
        if (el === 90 || !eclaire[el + 1]) {
          if (deb < 0 || el - d0 > fin - deb) { deb = d0; fin = el; }
          d0 = -1;
        }
      }
    }
    if (deb < 0) { bandes.push({ az, elMin: 90, elMax: 90, fragmente: false }); return; }
    if (nPlages > 1) nFragmente++;
    let elMin = 0, elMax = 90;
    if (deb > 0) {
      const r = affine(az, deb - 1, deb);
      elMin = r.el; if (!r.sur) nIncertain++;
    }
    if (fin < 90) {
      const r = affine(az, fin + 1, fin);
      elMax = r.el; if (!r.sur) nIncertain++;
    }
    bandes.push({ az, elMin: Math.round(elMin * 100) / 100,
                  elMax: Math.round(elMax * 100) / 100, fragmente: nPlages > 1 });
  };
  // découpé en tranches : un masque coûte ~2 s de lancer de rayons, ce qui
  // gèlerait l'interface d'un bloc. Budget de temps plutôt que nombre fixe
  // d'azimuts — leur coût varie du simple au triple selon les transitions.
  const azimuts = [];
  for (let az = 0; az < 360; az += pasAz) azimuts.push(az);
  let k = 0;
  return new Promise((resolve) => {
    const tranche = () => {
      const t0 = performance.now();
      do { unAzimut(azimuts[k++]); } while (k < azimuts.length
                                            && performance.now() - t0 < 12);
      if (surProgres) surProgres(k / azimuts.length);
      if (k < azimuts.length) requestAnimationFrame(tranche);
      else resolve({ bandes, nFragmente, nIncertain });
    };
    tranche();
  });
}

function afficheSonde(fractions, pas) {
  sondeEtat.fractions = fractions; // relu par les vérifications automatisées
  const n = fractions.length;
  let total = 0, premier = null, dernier = null;
  for (let i = 0; i < n; i++) {
    total += fractions[i] * pas;
    if (fractions[i] >= 0.25) {
      if (premier === null) premier = i * pas;
      dernier = i * pas;
    }
  }
  const nr = sondeEtat.normale;
  const azf = ((Math.atan2(nr.x, nr.y) / RAD) + 360) % 360;
  const rose = ROSE[Math.round(azf / 45) % 8];
  let titre = "Sonde — surface horizontale";
  if (sondeEtat.mode === "facade") {
    titre = `Sonde — façade ${rose} (${azf.toFixed(0)}°)`;
  } else if (sondeEtat.mode === "pente") {
    const pente = Math.acos(Math.min(1, Math.max(-1, nr.z))) / RAD;
    titre = nr.z > 0
      ? `Sonde — pente ${rose} ${pente.toFixed(0)}°`
      : `Sonde — sous-face ${rose} (${pente.toFixed(0)}°)`;
  }
  $("sonde-titre").textContent = titre;
  const tot = Math.round(total);
  $("sonde-info").innerHTML = tot === 0
    ? "Aucun soleil direct ce jour-là."
    : `Soleil direct : <b>${Math.floor(tot / 60)} h ${String(tot % 60).padStart(2, "0")}</b>` +
      ` (carré de 50 cm, pénombre et feuillage pondérés)` +
      (premier === null ? "" : ` — de ${fmtMin(premier)} à ${fmtMin(dernier)}`);
  const cv = $("sonde-frise"), ctx = cv.getContext("2d");
  const st = getComputedStyle(hote);
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = "rgba(127,127,127,.25)";
  ctx.fillRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = st.getPropertyValue("--or").trim() || "#f0b347";
  for (let i = 0; i < n; i++) {
    if (fractions[i] > 0.01) {
      ctx.globalAlpha = Math.min(1, 0.15 + 0.85 * fractions[i]);
      ctx.fillRect(i / n * cv.width, 0, cv.width / n + 0.5, cv.height);
    }
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = st.getPropertyValue("--muted").trim();
  ctx.font = "9px " + st.getPropertyValue("--font-ui");
  for (const h of [6, 12, 18]) {
    ctx.fillRect(h / 24 * cv.width, 0, 1, cv.height);
  }
}

function fermeSonde() {
  $("sonde").hidden = true;
  $("sonde-json").hidden = true;
  sondeEtat.point = null;
  sondeEtat.jeton++;
  if (sondeEtat.marqueur) sondeEtat.marqueur.visible = false;
  majTrajet();
  invalide();
}

/* ============================== Home Assistant ============================== */
/* Servie sous /local/, la page est sur la MÊME origine que l'interface Home
   Assistant : elle réutilise le jeton de la session ouverte plutôt que
   d'exiger un secret durable. Toutes les requêtes ci-dessous sont relatives,
   donc de même origine — la contrainte réseau du projet tient. Servie
   ailleurs (test, serveur statique), il n'y a pas de session : le panneau
   reste caché et rien n'est tenté. */
const HA_DOMAINE = "sun_shading";
let PANNEAU = null;         // config du panneau (data, entry_id, réglages)
const MASQUE_PAS_AZ = 1;
const MASQUE_SEUIL = 0.5; // plus de la moitié du carré de 50 cm éclairée

/* Volets connus du dépôt (ouvertures.json, inliné au build). Ils amorcent le
   sélecteur : sur l'instance, /api/states peut ne rien ramener — vu en
   production le 31/08/2026 — et la saisie ne doit pas en dépendre. Le direct,
   quand il répond, complète la liste sans écraser ces noms : ce sont eux qui
   déterminent l'entity_id des capteurs. */
let VOLETS_CONNUS = [];   // posé par monte() depuis le manifest
const haEtat = { dispo: false, raison: "", nEtats: 0, ouvertures: [], voie: null,
                 covers: [] };

function haFusionneCovers(direct) {
  const parId = new Map();
  for (const v of VOLETS_CONNUS) parId.set(v.volet, { id: v.volet, nom: v.nom });
  for (const c of direct) if (!parId.has(c.id)) parId.set(c.id, c);
  return [...parId.values()].sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
}

/* Voie privilégiée : montée en panel_custom, l'élément reçoit `hass` en
   propriété. C'est le contrat documenté de Home Assistant, là où les deux
   voies suivantes s'appuient sur des structures internes ou sur un jeton. */
let hassPanneau = null;
let surPremierHass = null; // posé par initUI, si hass arrive après elle
let surThemeHass = null;   // idem, pour suivre le thème de Home Assistant

function poseHass(h) {
  const premier = !hassPanneau && h;
  hassPanneau = h;
  // écrit à chaque changement d'état : ne rien redessiner ici
  if (premier && surPremierHass) surPremierHass();
  else if (hassPanneau && surThemeHass) surThemeHass();
}

function litHass() { return hassPanneau; }

/* Vue étroite : Home Assistant replie sa barre latérale sous 870 px et pose
   `narrow` sur le panneau. Sans le burger qui va avec, un panneau plein écran
   sur téléphone est un cul-de-sac — on ne peut plus revenir aux dashboards. */
let etroit = false;

function poseEtroit(v) {
  etroit = !!v;
  if (hote) {
    if (etroit) hote.dataset.etroit = "";
    else delete hote.dataset.etroit;
  }
}

function ouvreMenuHass() {
  // l'événement documenté du frontend ; il remonte jusqu'à <home-assistant>
  hote.dispatchEvent(new CustomEvent("hass-toggle-menu",
                                     { bubbles: true, composed: true }));
}

function haPanneau() {
  return hassPanneau && hassPanneau.states && hassPanneau.callService
    ? hassPanneau : null;
}

/* Chemin de repli : la page est en iframe DANS l'interface Home Assistant,
   sur la même origine. L'élément <home-assistant> du parent porte l'objet
   `hass` — états à jour et WebSocket déjà authentifiée. Ni jeton à lire, ni
   REST à interroger.
   Constaté en production le 01/09/2026 : dans l'application compagnon iOS,
   `localStorage.hassTokens` est lisible au chargement puis disparaît, et
   /api/states ne ramène aucune entité. Le parent, lui, est toujours là. */
function haParent() {
  try {
    if (window.parent === window) return null;
    const el = window.parent.document.querySelector("home-assistant");
    const h = el && el.hass;
    return h && h.states && h.callService ? h : null;
  } catch (e) {
    return null; // origine différente : pas notre cas, mais on ne casse pas
  }
}

function haSession() {
  try {
    const brut = localStorage.getItem("hassTokens");
    const t = brut ? JSON.parse(brut) : null;
    return t && t.access_token ? t : null;
  } catch (e) { return null; }
}

async function haJeton() {
  const t = haSession();
  if (!t) return null;
  // relu à chaque appel plutôt que mis en cache : le frontend le renouvelle
  // de son côté. S'il a expiré et qu'on a un refresh_token, on renouvelle.
  if (t.expires && Date.now() > t.expires - 30000 && t.refresh_token) {
    try {
      const r = await fetch("/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: t.refresh_token,
          client_id: t.clientId || `${location.origin}/`,
        }),
      });
      if (r.ok) return (await r.json()).access_token;
    } catch (e) { /* jeton en place : on tente quand même */ }
  }
  return t.access_token;
}

async function haAppel(chemin, options) {
  const jeton = await haJeton();
  if (!jeton) throw new Error("aucune session Home Assistant");
  const o = options || {};
  const r = await fetch(chemin, Object.assign({}, o, {
    headers: Object.assign({ Authorization: `Bearer ${jeton}`,
                             "Content-Type": "application/json" }, o.headers),
  }));
  if (!r.ok) throw new Error(`${chemin} : HTTP ${r.status}`);
  return r.status === 204 ? null : r.json();
}

/* Relit l'état de Home Assistant : les volets disponibles et les ouvertures
   déjà définies. La page ne garde AUCUN état de configuration ; la source de
   vérité est l'intégration, ce qui rend le panneau juste après un F5 comme
   après six mois. */
/* panneau puis iframe : les deux exposent la même interface (states,
   services, callService), le repli REST vient après */
function haObjet() { return haPanneau() || haParent(); }

async function haEtats() {
  const h = haObjet();
  return h ? Object.values(h.states) : haAppel("/api/states");
}

async function haDomainesDeServices() {
  const h = haObjet();
  return h ? Object.keys(h.services)
           : (await haAppel("/api/services")).map((s) => s.domain);
}

async function haAppelService(domaine, service, donnees) {
  const h = haObjet();
  if (h) return h.callService(domaine, service, donnees);
  return haAppel(`/api/services/${domaine}/${service}`,
                 { method: "POST", body: JSON.stringify(donnees) });
}

function haAccessible() { return haObjet() !== null || haSession() !== null; }

async function haRafraichit() {
  haEtat.dispo = false;
  haEtat.voie = haPanneau() ? "panneau"
    : (haParent() ? "iframe" : (haSession() ? "jeton" : null));
  if (!haEtat.voie) {
    haEtat.raison = "Ouvrez la carte depuis Home Assistant pour configurer les ouvertures.";
    return false;
  }
  try {
    const etats = await haEtats();
    haEtat.nEtats = Array.isArray(etats) ? etats.length : -1;
    haEtat.covers = haFusionneCovers(etats
      .filter((e) => e.entity_id.startsWith("cover."))
      .map((e) => ({ id: e.entity_id,
                     nom: (e.attributes && e.attributes.friendly_name) || e.entity_id })));
    haEtat.nDirect = etats.filter((e) => e.entity_id.startsWith("cover.")).length;
    // nos entités se reconnaissent à l'attribut « opening », pas à leur nom
    haEtat.ouvertures = etats
      .filter((e) => e.attributes && e.attributes.opening)
      .map((e) => ({
        id: e.attributes.opening, entite: e.entity_id, etat: e.state,
        // `opening_name` et non friendly_name : ce dernier porte le nom de
        // l'appareil en préfixe (« Ensoleillement Soleil direct Salon »), qui
        // se réinjecterait dans le stockage à chaque republication et
        // s'empilerait à chaque tour.
        nom: e.attributes.opening_name || e.attributes.friendly_name,
        volet: e.attributes.cover,
        point: e.attributes.point, normale: e.attributes.normal,
        elMin: e.attributes.elevation_min, elMax: e.attributes.elevation_max,
      }))
      .sort((a, b) => (a.nom || "").localeCompare(b.nom || "", "fr"));
    if (!(await haDomainesDeServices()).includes(HA_DOMAINE)) {
      haEtat.raison = "Intégration « Sun Shading » absente : "
        + "la copier dans custom_components/ et redémarrer Home Assistant.";
      return false;
    }
    haEtat.dispo = true;
    haEtat.raison = "";
    return true;
  } catch (err) {
    haEtat.raison = String((err && err.message) || err);
    return false;
  }
}

/* Calcule les deux masques de la sonde courante et les pousse dans
   l'intégration. Les bornes de feuillaison partent avec : l'intégration
   n'implémente que la forme de la courbe. */
async function haEnregistreOuverture(id, nom, volet, surProgres) {
  const progres = surProgres || (() => {});
  const ete = await calculeMasque(MASQUE_PAS_AZ, MASQUE_SEUIL, K_ETE,
                                  (p) => progres(p * 0.5));
  const hiver = await calculeMasque(MASQUE_PAS_AZ, MASQUE_SEUIL, K_HIVER,
                                    (p) => progres(0.5 + p * 0.5));
  const r = (x) => Math.round(x * 1000) / 1000;
  const p = sondeEtat.point, n = sondeEtat.normale;
  await haAppelService(HA_DOMAINE, "set_opening", {
      id, name: nom, cover: volet,
      ...(PANNEAU && PANNEAU.entry_id ? { entry_id: PANNEAU.entry_id } : {}),
      point: [r(p.x), r(p.y), r(p.z)],
      normal: [r(n.x), r(n.y), r(n.z)],
      leafy: ete.bandes.map((b) => [b.elMin, b.elMax]),
      bare: hiver.bandes.map((b) => [b.elMin, b.elMax]),
      azimuth_step: MASQUE_PAS_AZ, threshold: MASQUE_SEUIL, foliation: FEUILLAISON,
  });
  return { fragmente: ete.nFragmente + hiver.nFragmente,
           incertain: ete.nIncertain + hiver.nIncertain };
}

/* ---- panneau « Ouvertures » ---- */
const ouvEtat = { occupe: false };

function ouvIdDepuisVolet(entityId) {
  return entityId.replace(/^cover\./, "").replace(/[^a-z0-9_]/g, "_");
}

function ouvMessage(txt) { $("ouvertures-etat").textContent = txt; }

function ouvDessine() {
  const ul = $("ouvertures-liste");
  ul.textContent = "";
  if (!haEtat.ouvertures.length) {
    ouvMessage(haEtat.dispo
      ? "Aucune ouverture définie. Activez « Sonde au clic », visez une fenêtre, puis associez-la à son volet."
      : haEtat.raison);
  } else if (haEtat.dispo) {
    ouvMessage(`${haEtat.ouvertures.length} ouverture(s) définie(s) — `
      + `${haEtat.voie}, ${haEtat.nEtats} entités lues, `
      + `${haEtat.nDirect || 0} volet(s) en direct, `
      + `${haEtat.covers.length} proposé(s).`);
  }
  for (const o of haEtat.ouvertures) {
    const li = document.createElement("li");
    const etat = document.createElement("b");
    etat.textContent = o.etat === "on" ? "au soleil" : "à l'ombre";
    li.append(o.nom || o.id, " — ", etat);
    if (typeof o.elMin === "number") {
      li.append(` (seuil ${o.elMin.toFixed(1)}°)`);
    }
    ul.append(li);
  }
  $("ouvertures-recalcul").disabled = !haEtat.dispo
    || !haEtat.ouvertures.length || ouvEtat.occupe;
}

async function ouvRecharge() {
  await haRafraichit();
  // le sélecteur de volet du panneau de sonde suit la liste de HA
  const liste = $("liste-volets");
  liste.textContent = "";
  for (const c of haEtat.covers) {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.label = c.nom;
    liste.append(opt);
  }
  $("sonde-assoc").hidden = !haEtat.dispo;
  if (haEtat.dispo && !haEtat.nDirect) {
    // le repli du dépôt a pris la main : le dire, sans bloquer la saisie
    $("sonde-assoc-etat").textContent =
      `Liste du dépôt (${haEtat.nEtats} entités lues, aucun volet en direct).`;
  }
  ouvDessine();
}

/* Rejoue les points relus depuis les attributs des entités : après un
   changement de géométrie (nouveau LiDAR, toiture retouchée), tout se
   recalcule d'un clic sans repointer quoi que ce soit. */
async function ouvRecalculeTout() {
  if (ouvEtat.occupe) return;
  ouvEtat.occupe = true;
  ouvDessine();
  const liste = haEtat.ouvertures.slice();
  try {
    for (let i = 0; i < liste.length; i++) {
      const o = liste[i];
      if (!o.point || !o.normale) continue;
      poseSonde(o.point[0], o.point[1], o.point[2],
                o.normale[0], o.normale[1], o.normale[2]);
      await haEnregistreOuverture(o.id, o.nom.replace(/^Soleil direct /, ""),
        o.volet, (p) => ouvMessage(
          `${o.nom} — ${Math.round((i + p) / liste.length * 100)} %`));
    }
    await haRafraichit();
    ouvMessage(`${liste.length} masque(s) recalculé(s).`);
  } catch (err) {
    ouvMessage(`Échec : ${(err && err.message) || err}`);
  } finally {
    ouvEtat.occupe = false;
    ouvDessine();
  }
}

/* ============================== Interface ============================== */
const fmtDate = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
function fmtMin(t) {
  if (t === null) return "—";
  const tot = Math.min(1439, Math.round(t));
  const h = Math.floor(tot / 60), m = tot % 60;
  return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
}

function majPisteJour() {
  const e = etat.ephemerides;
  const p = (t) => (t / 1440 * 100).toFixed(2) + "%";
  const nuit = "#232a36", aube = "#6d5a46", jour = "#c7a35c";
  let g;
  if (e.lever !== null && e.coucher !== null) {
    g = `linear-gradient(90deg, ${nuit} 0%, ${nuit} ${p(e.lever - 25)}, ${aube} ${p(e.lever)}, ${jour} ${p(e.lever + 40)}, ${jour} ${p(e.coucher - 40)}, ${aube} ${p(e.coucher)}, ${nuit} ${p(e.coucher + 25)}, ${nuit} 100%)`;
  } else {
    g = etat.ephemerides.elMax > 0 ? jour : nuit;
  }
  $("piste-jour").style.background = g;
}

function majUI() {
  const { y, m, d } = dateDuJour(etat.jour);
  const sol = positionSolaire(utcCourant(), LAT, LON);
  $("lect-heure").textContent = fmtMin(etat.minutes);
  $("lect-date").textContent = fmtDate.format(new Date(Date.UTC(y, m - 1, d)));
  $("lect-azimut").textContent = sol.azimut.toFixed(1).replace(".", ",") + "°";
  $("lect-elevation").textContent = sol.elevation.toFixed(1).replace(".", ",") + "°";
  const e = etat.ephemerides;
  $("lect-lever").textContent = fmtMin(e.lever);
  $("lect-coucher").textContent = fmtMin(e.coucher);
  $("lect-midi").textContent = fmtMin(e.midi);
  if (sol.elevation > 0.5) {
    const k = 1 / Math.tan(sol.elevation * RAD);
    $("lect-ombre").textContent = (k >= 10 ? k.toFixed(0) : k.toFixed(1).replace(".", ",")) + " × h";
  } else $("lect-ombre").textContent = "—";
  majLumieres(sol);
  majSoleilKit();
  invalide();
  return sol;
}

function surChangementJour() {
  calculeEphemerides();
  majPisteJour();
  majTrajet();
  majUI();
  if (sondeEtat.point) calculeSonde();
}

function initUI() {
  $("curseur-heure").addEventListener("input", (ev) => { etat.minutes = +ev.target.value; majUI(); });
  $("curseur-jour").addEventListener("input", (ev) => { etat.jour = +ev.target.value; surChangementJour(); });
  for (const b of racine.querySelectorAll(".presets button[data-jm]")) {
    b.addEventListener("click", () => {
      const [d, m] = b.dataset.jm.split("-").map(Number);
      etat.jour = jourDepuisDate(m, d);
      $("curseur-jour").value = etat.jour;
      surChangementJour();
    });
  }
  $("btn-aujourdhui").addEventListener("click", () => {
    const off = decalageParisMin(Date.now());
    const loc = new Date(Date.now() + off * 60000);
    etat.jour = Math.min(364, Math.round((Date.UTC(loc.getUTCFullYear(), loc.getUTCMonth(), loc.getUTCDate()) - Date.UTC(ANNEE, 0, 1)) / 86400000));
    etat.minutes = loc.getUTCHours() * 60 + loc.getUTCMinutes();
    $("curseur-jour").value = etat.jour;
    $("curseur-heure").value = etat.minutes;
    surChangementJour();
  });
  // thème de l'interface
  let themeInitial = "auto";
  try { themeInitial = localStorage.getItem("theme") || "auto"; } catch (e) {}
  /* « auto » suit Home Assistant en panneau, la préférence système sinon :
     basculer HA en sombre doit basculer la carte, sans rechargement. */
  const appliqueTheme = (v) => {
    if (v !== "auto") { hote.dataset.theme = v; return; }
    const h = haPanneau();
    if (h && h.themes && typeof h.themes.darkMode === "boolean") {
      hote.dataset.theme = h.themes.darkMode ? "dark" : "light";
    } else {
      delete hote.dataset.theme;
    }
  };
  surThemeHass = () => {
    if ($("opt-theme").value === "auto") appliqueTheme("auto");
  };
  appliqueTheme(themeInitial);
  $("opt-theme").value = themeInitial;
  $("opt-theme").addEventListener("change", (ev) => {
    appliqueTheme(ev.target.value);
    try { localStorage.setItem("theme", ev.target.value); } catch (e) {}
  });
  // sens des commandes de navigation
  commandesInversees = litCommandes();
  $("opt-commandes").value = commandesInversees ? "inversees" : "normales";
  $("opt-commandes").addEventListener("change", (ev) => {
    commandesInversees = ev.target.value === "inversees";
    try { localStorage.setItem("commandes", ev.target.value); } catch (e) {}
  });
  $("btn-menu").addEventListener("click", ouvreMenuHass);
  const btn = $("btn-lecture"), ico = $("ico-lecture");
  const iconePlay = '<path d="M3 1.5 L14 8 L3 14.5 Z" fill="currentColor"/>';
  const iconePause = '<rect x="2.5" y="2" width="4" height="12" fill="currentColor"/><rect x="9.5" y="2" width="4" height="12" fill="currentColor"/>';
  btn.addEventListener("click", () => {
    etat.lecture = !etat.lecture;
    ico.innerHTML = etat.lecture ? iconePause : iconePlay;
    planifie();
  });
  $("opt-ombres").addEventListener("change", appliqueOmbres);
  $("opt-arbres").addEventListener("change", (ev) => {
    groupeArbres.visible = ev.target.checked;
    renderer.shadowMap.needsUpdate = true;
    if (sondeEtat.point) calculeSonde();
    invalide();
  });
  // page construite sans photomaillage : le mode n'est pas proposé
  if (!RES.pm3d) $("opt-carte").querySelector('option[value="photo"]').remove();
  $("opt-carte").addEventListener("change", async (ev) => {
    const sel = ev.target;
    const mode = sel.value;
    // chaque mode charge ses données au premier usage (satellite ~9 Mo,
    // photomaillage ~14 Mo de plus) : le contrôle attend, désactivé
    const aCharger = (mode === "satellite" && (!satEtat || !satEtat.pret))
      || (mode === "photo" && (!photoEtat || !photoEtat.pret));
    if (aCharger) {
      sel.disabled = true;
      majEtatCarte("chargement…");
      try {
        await (mode === "photo" ? preparePhoto() : prepareSatellite());
      } catch (err) {
        majEtatCarte("erreur");
        sel.disabled = false;
        return;
      }
      sel.disabled = false;
    }
    appliqueCarte(mode);
    majEtatCarte();
  });
  $("opt-sonde").addEventListener("change", (ev) => {
    if (!ev.target.checked) fermeSonde();
  });
  $("sonde-fermer").addEventListener("click", fermeSonde);

  /* ---- ouvertures Home Assistant ----
     Le réglage n'apparaît que si une session HA est détectable : servie
     ailleurs, la page ne montre pas une fonction qu'elle ne peut pas rendre. */
  surPremierHass = () => {
    $("lbl-ouvertures").hidden = false;
    ouvRecharge();
    if ($("opt-theme").value === "auto") appliqueTheme("auto");
  };
  if (haAccessible()) surPremierHass();
  $("opt-ouvertures").addEventListener("change", async (ev) => {
    $("ouvertures").hidden = !ev.target.checked;
    if (ev.target.checked) await ouvRecharge();
  });
  $("ouvertures-fermer").addEventListener("click", () => {
    $("ouvertures").hidden = true;
    $("opt-ouvertures").checked = false;
  });
  $("ouvertures-recalcul").addEventListener("click", ouvRecalculeTout);

  $("sonde-volet").addEventListener("input", (ev) => {
    // le nom suit le volet choisi tant que l'utilisateur n'y a pas touché
    const champ = $("sonde-nom");
    if (champ.dataset.edite) return;
    const c = haEtat.covers.find((x) => x.id === ev.target.value);
    if (c) champ.value = c.nom;
  });
  $("sonde-nom").addEventListener("input", (ev) => {
    ev.target.dataset.edite = "1";
  });
  $("sonde-enregistrer").addEventListener("click", async () => {
    if (ouvEtat.occupe || !sondeEtat.point) return;
    const volet = $("sonde-volet").value;
    const nom = $("sonde-nom").value.trim();
    if (!volet || !nom) {
      $("sonde-assoc-etat").textContent = "Choisir un volet et un nom.";
      return;
    }
    ouvEtat.occupe = true;
    $("sonde-enregistrer").disabled = true;
    try {
      const bilan = await haEnregistreOuverture(
        ouvIdDepuisVolet(volet), nom, volet,
        (p) => { $("sonde-assoc-etat").textContent =
          `Calcul du masque — ${Math.round(p * 100)} %`; });
      await ouvRecharge();
      $("sonde-assoc-etat").textContent = bilan.fragmente
        ? `Publié. ${bilan.fragmente} azimut(s) à bandes multiples, à vérifier.`
        : "Publié dans Home Assistant.";
    } catch (err) {
      $("sonde-assoc-etat").textContent = `Échec : ${(err && err.message) || err}`;
    } finally {
      ouvEtat.occupe = false;
      $("sonde-enregistrer").disabled = false;
    }
  });
  // saisie des ouvertures pour ouvertures.json (masques d'horizon) : le champ
  // sélectionnable est le moyen principal, l'API presse-papiers un bonus —
  // elle est indisponible hors contexte sécurisé, ce qu'est la page servie
  // en http par Home Assistant.
  $("sonde-copier").addEventListener("click", () => {
    if (!sondeEtat.point) return;
    const r = (x) => Math.round(x * 1000) / 1000;
    const p = sondeEtat.point, n = sondeEtat.normale;
    const txt = JSON.stringify({
      id: "", nom: "", x: r(p.x), y: r(p.y), z: r(p.z),
      nx: r(n.x), ny: r(n.y), nz: r(n.z),
      volet: "", automatisation: "",
    });
    const champ = $("sonde-json");
    champ.value = txt;
    champ.hidden = false;
    champ.select();
    if (navigator.clipboard) navigator.clipboard.writeText(txt).catch(() => {});
  });
  // écrans contraints : réglages derrière un bouton, timeline repliable
  const regl = $("reglages"), btnRegl = $("btn-reglages");
  btnRegl.addEventListener("click", () => {
    btnRegl.setAttribute("aria-expanded", regl.classList.toggle("ouvert"));
  });
  renderer.domElement.addEventListener("pointerdown", () => {
    regl.classList.remove("ouvert");
    btnRegl.setAttribute("aria-expanded", "false");
  });
  const chrono = $("timeline"), btnRepli = $("btn-replier");
  btnRepli.addEventListener("click", () => {
    btnRepli.setAttribute("aria-expanded", !chrono.classList.toggle("replie"));
  });
  $("opt-trajet").addEventListener("change", () => { majTrajet(); invalide(); });
  $("opt-trajet-r").addEventListener("input", (ev) => {
    trajetR = (+ev.target.value) / 2;
    majTrajet();
    invalide();
  });
  addEventListener("keydown", (e) => {
    if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const pas = e.shiftKey ? 60 : 10;
      etat.minutes = Math.min(1439, Math.max(0, etat.minutes + (e.key === "ArrowRight" ? pas : -pas)));
      $("curseur-heure").value = etat.minutes;
      majUI();
    } else if (e.key === " ") { e.preventDefault(); btn.click(); }
  });
}

/* ============================== Boucle ============================== */
/* La boucle rAF s'endort complètement au repos (rien à rendre, pas de
   lecture) : zéro réveil CPU quand la page reste ouverte dans un dashboard.
   invalide() et le bouton lecture la relancent. */
let tPrec = 0;
let rafPrevu = false;
function planifie() {
  if (!rafPrevu && !contextePerdu) {
    rafPrevu = true;
    tPrec = performance.now();
    requestAnimationFrame(boucle);
  }
}
function boucle(t) {
  rafPrevu = false;
  const dt = Math.min(0.1, (t - tPrec) / 1000); tPrec = t;
  if (etat.lecture) {
    etat.minutes += (+$("opt-vitesse").value) * dt;
    if (etat.minutes >= 1440) {
      etat.minutes -= 1440;
      etat.jour = (etat.jour + 1) % 365;
      $("curseur-jour").value = etat.jour;
      surChangementJour();
    }
    $("curseur-heure").value = Math.floor(etat.minutes);
    majUI();
  }
  if (besoinRendu) {
    besoinRendu = false;
    majMarqueurSonde();
    renderer.render(scene, camera);
    majEtiquettes();
  }
  if (etat.lecture || besoinRendu) planifie();
}

/* ============================== Démarrage ============================== */
/* Montage : appelé une fois par la page autonome comme par l'élément
   personnalisé, avec la racine où le gabarit a été injecté. */
async function monte(r, h, base, cfgPanneau) {
  racine = r;
  hote = h;
  /* Configuration posée par l'intégration : où sont les données, et SURTOUT
     à quelle entrée publier. Sans entry_id, une instance à plusieurs zones
     refuse le service — le repère local d'une zone n'a aucun sens dans une
     autre, mieux vaut une erreur qu'un masque publié au mauvais endroit. */
  PANNEAU = cfgPanneau || null;
  // `narrow` peut avoir été posé avant le montage : le réappliquer sur l'hôte
  poseEtroit(etroit);
  calibreHauteur();
  BASE_ASSETS = new URL(base, location.href).href;
  // Le manifest n'est pas haché (c'est lui qui nomme les binaires hachés) :
  // revalidé à chaque chargement, pour ne pas subir le cache long de HA.
  let man = null;
  try {
    const rep = await fetch(urlAsset("manifest.json"), { cache: "no-cache" });
    if (!rep.ok) throw new Error(`HTTP ${rep.status}`);
    man = await rep.json();
  } catch (err) {
    $("charge-etat").innerHTML = "Aucune zone à cet emplacement : <code>"
      + BASE_ASSETS + "</code> (" + err.message + ").<br>Construire une zone "
      + "(<code>build.py --zone …</code>) et y déposer son dossier "
      + "<code>dist/</code>.";
    window.__test = { pret: false, erreur: String(err) };
    return;
  }
  DONNEES_META = man.donnees_meta;
  SAT_META = man.sat_meta;
  PM3D_META = man.pm3d_meta || null;
  MODELE_META = man.modele_meta || null;
  VOLETS_META = man.volets || [];
  RES = man.res;
  LAT = DONNEES_META.centre_wgs84[1];
  LON = DONNEES_META.centre_wgs84[0];
  Q = DONNEES_META.q;
  R_AFF = DONNEES_META.r_map;
  R_BATI = DONNEES_META.r_bati || R_AFF + 50;
  EX_T = (DONNEES_META.r_terrain || R_AFF + 80) + 40;
  VOLETS_CONNUS = VOLETS_META;
  haEtat.covers = VOLETS_CONNUS.map((v) => ({ id: v.volet, nom: v.nom }));
  $("charge-titre").textContent = man.titre;
  $("titre-h1").textContent = man.titre;
  $("titre-lieu").textContent = man.lieu;
  try {
    const buf = await chargeGz(RES.donnees);
    const bufDom = RES.modele ? await chargeGz(RES.modele) : null;
    $("charge-etat").textContent = "Construction de la scène…";
    await new Promise((r) => setTimeout(r, 30));
    initScene(buf, bufDom);
    initControles();
    // date/heure initiales : maintenant (heure de Paris)
    const off = decalageParisMin(Date.now());
    const loc = new Date(Date.now() + off * 60000);
    etat.jour = Math.min(364, Math.round((Date.UTC(loc.getUTCFullYear(), loc.getUTCMonth(), loc.getUTCDate()) - Date.UTC(ANNEE, 0, 1)) / 86400000));
    etat.minutes = loc.getUTCHours() * 60 + loc.getUTCMinutes();
    $("curseur-jour").value = etat.jour;
    $("curseur-heure").value = etat.minutes;
    initUI();
    surChangementJour();
    majCamera();
    planifie();
    const ch = $("chargement");
    ch.style.opacity = "0";
    setTimeout(() => ch.remove(), 450);
  } catch (err) {
    $("charge-etat").textContent = "Erreur : " + err.message;
  }
  // accès de test (vérifications automatisées)
  window.__test = {
    // ce que le panneau expose de son intégration : vue étroite (burger) et
    // sens des commandes, tous deux invisibles depuis le DOM seul
    hote() { return { etroit, commandes: commandesInversees ? "inversees" : "normales" }; },
    regle(m, d, minutes) {
      etat.jour = jourDepuisDate(m, d); etat.minutes = minutes;
      $("curseur-jour").value = etat.jour; $("curseur-heure").value = minutes;
      surChangementJour();
      return positionSolaire(utcCourant(), LAT, LON);
    },
    soleil() { return positionSolaire(utcCourant(), LAT, LON); },
    utc() { return utcCourant(); },
    camera(az, pol, dist) { orbite.az = az; orbite.pol = pol; orbite.dist = dist; majCamera(); },
    /* Ce que la navigation a fait de la caméra : le seul moyen de vérifier
       qu'un geste tourne au lieu de déplacer, ou l'inverse. */
    vue() { return { az: orbite.az, pol: orbite.pol, dist: orbite.dist,
                     cible: { x: cible.x, y: cible.y, z: cible.z } }; },
    sonde(cx, cy) { sondeClic(cx, cy); },
    carte() { return $("opt-carte").value; },
    modele() {
      return {
        pret: modeleMesh !== null,
        nt: modeleMesh ? modeleMesh.geometry.index.count / 3 : 0,
        triBati: batiMesh.geometry.index.count / 3,
      };
    },
    projette(x, y, z) {
      const p = new THREE.Vector3(x, y, z).project(camera);
      return { cx: (p.x + 1) / 2 * largeur(), cy: (1 - p.y) / 2 * hauteur() };
    },
    ombres() { return sunLight.shadow.mapSize.x; },
    marqueur() {
      const g = sondeEtat.marqueur;
      if (!g || !g.visible) return null;
      const plan = g.children[0].geometry.parameters;
      return { l: plan.width, h: plan.height, epingle: sondeEtat.epingle.scale.x };
    },
    photo() {
      return {
        pret: photoEtat !== null && photoEtat.pret,
        visible: photoActif,
        cpuLibere: photoEtat !== null && photoEtat.pret
          && photoEtat.meshes.every((m) => m.geometry.getAttribute("position").array === null),
        nt: photoEtat && photoEtat.pret
          ? photoEtat.meshes.reduce((n, m) => n + m.geometry.index.count / 3, 0)
          : 0,
        triSat: satEtat && satEtat.pret
          ? satEtat.meshes.reduce((n, m) => n + m.geometry.index.count / 3, 0)
          : 0,
        r: PM3D_META ? PM3D_META.r : 0,
      };
    },
    sondeEn(x, y, z, nx, ny, nz) { return poseSonde(x, y, z, nx, ny, nz); },
    zone() { return { titre: man.titre, lieu: man.lieu, rMap: R_AFF, base: BASE_ASSETS }; },
    /* premier point de la scène sous le centre de l'écran : une cible valable
       pour tester le clic quelle que soit la zone */
    viseCentre() {
      prepareBVH();
      const rc = new THREE.Raycaster();
      rc.firstHitOnly = true;
      rc.setFromCamera(new THREE.Vector2(0, 0), camera);
      const cibles = [batiMesh, terrainMesh, routesMesh, cheminsMesh, pontsMesh];
      if (modeleMesh) cibles.push(modeleMesh);
      const h = rc.intersectObjects(cibles, false)[0];
      return h ? { x: h.point.x, y: h.point.y, z: h.point.z,
                   cx: largeur() / 2, cy: hauteur() / 2 } : null;
    },
    ha() {
      return { session: haSession() !== null, parent: haParent() !== null,
               voie: haEtat.voie, dispo: haEtat.dispo,
               raison: haEtat.raison, nEtats: haEtat.nEtats,
               covers: haEtat.covers.length, direct: haEtat.nDirect || 0,
               visible: !$("lbl-ouvertures").hidden };
    },
    masque(pasAz, seuil, kFeuille) { return calculeMasque(pasAz, seuil, kFeuille); },
    /* course du soleil d'une journée, minute par minute : sert à relire un
       masque en créneaux horaires sans réimplémenter NOAA hors de la page */
    soleilJour(m, d) {
      const { y, m: mm, d: dd } = dateDuJour(jourDepuisDate(m, d));
      const out = [];
      for (let i = 0; i < 1440; i++) {
        const sol = positionSolaire(utcDepuisParis(y, mm, dd, i), LAT, LON);
        out.push([Math.round(sol.azimut * 100) / 100,
                  Math.round(sol.elevation * 100) / 100]);
      }
      return out;
    },
    calculeSonde() { calculeSonde(); },
    fractions() {
      return sondeEtat.fractions ? Array.from(sondeEtat.fractions) : null;
    },
    feuillage() { return { ete: K_ETE, hiver: K_HIVER }; },
    sondePoint() {
      return sondeEtat.point
        ? {
          x: sondeEtat.point.x, y: sondeEtat.point.y, z: sondeEtat.point.z,
          mode: sondeEtat.mode, cote: SONDE_COTE,
          nx: sondeEtat.normale.x, ny: sondeEtat.normale.y, nz: sondeEtat.normale.z,
        }
        : null;
    },
    pret: true,
  };
}

/* L'élément : injecte le gabarit dans un shadow root — obligatoire, le CSS
   porte des sélecteurs (*, html, body) qui saccageraient l'interface de Home
   Assistant en DOM clair — puis monte l'application dessus. */
class SunShading extends HTMLElement {
  connectedCallback() {
    if (this._monte) return;
    this._monte = true;
    // panel_custom pose `panel` et `hass` en propriétés dans la même tâche
    // que l'insertion, avant ou après elle : on laisse passer la microtâche
    // pour lire config.data quel que soit l'ordre.
    queueMicrotask(() => {
      const r = this.attachShadow({ mode: "open" });
      r.innerHTML = GABARIT;
      const cfg = this._panel && this._panel.config;
      monte(r, this, (cfg && cfg.data) || BASE_MODULE, cfg || null);
    });
  }
  /* panel_custom écrit `hass` à chaque changement d'état : on mémorise, on ne
     redessine rien. C'est la voie d'accès privilégiée à Home Assistant. */
  set hass(h) { poseHass(h); }
  get hass() { return litHass(); }
  set panel(p) { this._panel = p; }
  get panel() { return this._panel; }
  /* Home Assistant pose `narrow` quand sa barre latérale est repliée : c'est
     la seule façon de savoir qu'il faut proposer le bouton de menu, les
     @media du shadow DOM s'évaluant sur la fenêtre et non sur l'hôte. */
  set narrow(v) { this._narrow = v; poseEtroit(v); }
  get narrow() { return this._narrow; }
}
if (!customElements.get("sun-shading")) {
  customElements.define("sun-shading", SunShading);
}
