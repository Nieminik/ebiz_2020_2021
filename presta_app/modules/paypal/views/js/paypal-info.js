/*! For license information please see paypal-info.js.LICENSE */
!function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(t,r,function(o){return e[o]}.bind(null,r));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=10)}({10:function(e,o){$(document).ready(function(){$(".payment-option").each(function(e){var o=e+1;$("#payment-option-".concat(o,"-container [data-module-name^='paypal']")).length>0&&$("[data-paypal-info]").insertAfter($("#payment-option-".concat(o,"-container label")))});var e=n();$("[data-paypal-info-popover]").popover({placement:e.popoverPlacement,trigger:e.popoverTrigger}),$(window).width()>991&&t()});var n=function(){var e="right",o="hover";return $(window).width()<992&&(e="bottom",o="click"),{popoverPlacement:e,popoverTrigger:o}},t=function(){$("[data-paypal-info-popover] i").on("mouseover",function(e){e.target.innerText="cancel",$("body").addClass("pp-popover")}),$("[data-paypal-info-popover] i").on("mouseout",function(e){e.target.innerText="info",$("[data-pp-info]").is(":visible")||$("body").removeClass("pp-popover")}),$("[data-paypal-info-popover] i").on("click",function(e){hidePopup($(e.target))})}}});
//# sourceMappingURL=paypal-info.js.map