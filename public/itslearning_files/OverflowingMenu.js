function OverflowingMenu(){function A(a){var h=$("#"+k).addClass(b.settings.cssClasses.moreMenu),d=0;a.each(function(a,c){a=$(c);c=a.outerWidth(!0);h.append(a);a.is(r)||c>d&&(d=c)});a=c.offset().left;n.innerWidth()-a<=d&&(a=a+l-d);h.css("left",a+"px")}function t(){l=c.outerWidth(!0);var a=0<e.width()-p;p=e.width();a&&($("#"+k).children().each(function(a,h){$(h).insertBefore(c)}),c.hide());var h=Number.POSITIVE_INFINITY,d=e.width()-10,b=l;f.each(function(a,c){c=$(c).outerWidth(!0);if(a>=m||b+c>d||
a<f.length-1&&b+c+l>d)return h=a,!1;b+=c});0<f.length-h&&window.innerWidth>u&&(c.css({display:"inline-block"}),A(f.filter(":gt("+(h-1)+")")))}function v(){q&&clearTimeout(q);q=setTimeout(t,w)}function x(a){var c=$("#"+k),b=$(this.parentElement).children().first();if(a.keyCode===CommonConstants.keyCodes.tab){var e=a.target.parentElement,f=e.parentElement;if(null==e.nextElementSibling||e.nextElementSibling.classList.contains("viewas-menu-header")||a.shiftKey)a.shiftKey?$(f).find("a:visible").first().is(":focus")&&
($(f).find("a:visible").last().focus(),a.preventDefault()):($(f).find("a:visible").first().focus(),a.preventDefault())}a.keyCode===CommonConstants.keyCodes.escape&&(c.hide(),b.attr("aria-expanded",!1),c.off(g+" keydown",x),b.focus());a.type!==g&&a.which!==CommonConstants.keyCodes.enter||setTimeout(function(){c.hide();b.attr("aria-expanded",!1)},0);a.stopPropagation()}function y(a){if(a.type===g||a.which===CommonConstants.keyCodes.enter){var b=$("#"+k),d=c.first("> .l-main-menu-lnk");"false"===$(".c-messages-popup").attr("aria-hidden")&&
$(".c-messages__overlay").click();b.toggle();b.is(":visible")?(d.children().first().attr("aria-expanded",!0),b.find("a").first().focus(),b.on("keydown "+g,x),a.preventDefault()):d.children().first().attr("aria-expanded",!1)}}function z(a){var b=$("#"+k),d=$(this.parentElement).children().first();b.is(":visible")&&(a=$(a.target),c.find("> .l-main-menu-lnk").is(a)||c.find("> .l-main-menu-lnk").children().is(a)||(b.hide(),d.attr("aria-expanded",!1)))}var b=this,n=$(window),e,f,c,l,k,r,g,q,w,m,p,u;b.initialize=
function(){g="click";w=b.settings.windowResizeTimeoutInMilliseconds;e=b.controls.mainMenu;f=b.controls.mainMenuItems;c=b.controls.moreButton;k=b.settings.moreMenuId;r=b.settings.moreMenuItemsIgnoreClass||"";m=b.settings.maxNumberOfMainMenuItems;u=b.settings.minScreenWidth||0;p=e.width();"undefined"==typeof m&&(m=Number.POSITIVE_INFINITY);c.append('<ul id="'+k+'" style="display:none;position:absolute;"></ul>');c.hide();t();n.resize(v);c.first("> .l-main-menu-lnk").on(g+" keydown",y);$(document).on(g+
" "+CommonTriggers.clickInInnerFrame,z)};b.uninitialize=function(){n.off("resize",v);c.first("> .l-main-menu-lnk").off(g+" keydown",y);$(document).off(g+" "+CommonTriggers.clickInInnerFrame,z)};return b};