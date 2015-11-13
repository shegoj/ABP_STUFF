;try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/aui-settings.js' */
AJS.$.ajaxSetup({traditional:!0});AJS.isIE6=!window.XMLHttpRequest;AJS.applyPngFilter=function(b,a,c){if(!AJS.isIE6)return!1;a=a||b.src;b.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+a+"', sizingMethod='"+(c||"scale")+"')";return!0};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/ajs/aui-draft.js' */
(function(e){"function"!==typeof AJS.defaultIfUndefined&&(AJS.defaultIfUndefined=function(a,b){var c=null,f=window;if("undefined"!=typeof b&&("object"===typeof b.defaultValue&&(c=b.defaultValue),"undefined"!=typeof b.rootObject))if("object"===typeof b.rootObject&&b.rootObject)f=b.rootObject;else return c;if("string"!==typeof a)return c;for(var e=a.split("."),d=0;d<e.length;d++){if(!Object.prototype.hasOwnProperty.call(f,e[d]))return c;f=f[e[d]]}return f});var g,i=!1;g=function(a){var b=!!window.localStorage;
if(typeof a!="boolean")return b?localStorage["debug-switch-enabled"]=="true":i;b?localStorage.setItem("debug-switch-enabled",a):i=a};AJS.debug=function(){if(g()){var a=Array.prototype.slice.call(arguments);a.splice(0,0,"DEBUG: "+(new Date).toLocaleTimeString());AJS.log.apply(AJS,a)}};AJS.debugEnabled=function(a){if(typeof a!="boolean")return g();g(a);AJS.log("STICKY FLAG DEBUG ENABLED: "+a)};AJS.logError=function(a,b){var c=[];if(e.browser.webkit)c.push(b);else for(prop in b)c.push(prop+": "+b[prop]);
AJS.log(a+c.join(", "))};AJS.toInit=function(a){e(function(){try{a.apply(this,arguments)}catch(b){AJS.logError("Failed to run init function: ",b);AJS.log("Failed toInit function is: "+a)}});return this};if(AJS.Meta.getBoolean("log-rendered")){var j=AJS.log,d=e('<div id="ajs-log" class="log"><h3>AJS Log</h3>\n</div>'),k=e("head"),h;d.toggleClass("hidden",!AJS.Meta.getBoolean("log-visible"));AJS.log=function(a){var b=typeof a==="undefined"?"undefined":a;if(h)d.next().length!=0&&h.append(d);else{var c=
document.createElement("script");c.type="text/x-log";c.text=b;k.append(c)}d.append(e("<p></p>").text("\n"+b));j.apply(AJS,arguments)};AJS.toInit(function(){h=e("body");h.append(d)})}AJS.Data=AJS.Data||AJS.Meta;AJS.getJSONWrap=function(a){var b=Confluence.getContextPath(),c=a.url;c.indexOf(b)!=0&&c.indexOf("http")!=0&&(c=b+c);a.loadingElement&&AJS.setVisible(a.loadingElement,true);var d=a.messageHandler;d.clearMessages();e.ajax({type:"GET",url:c,dataType:"json",data:a.data,error:function(){a.loadingElement&&
AJS.setVisible(a.loadingElement,false);d.displayMessages(a.errorMessage||"There was an error communicating with the server, please try again later.");a.errorCallback&&a.errorCallback()},success:function(b){a.loadingElement&&AJS.setVisible(a.loadingElement,false);d.handleResponseErrors(b)?a.errorCallback&&a.errorCallback():a.successCallback&&a.successCallback(b)}})};AJS.Validate=e.extend(function(){var a,b;return{email:function(b){a||(a=/^((([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
return a.test(b)},url:function(a){b||(b=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
return b.test(a)}}}(),AJS.Validate)})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/ajs/message-handler.js' */
(function(f){var i=function(a){var b,c;b=function(){return a.baseElement};c=function(a){var b=f("ul",a);b.length||(b=AJS("ul").appendTo(a));return b};return{getMessageContainer:b,clearMessages:function(){b().addClass("hidden").empty()},displayMessages:function(a){if(a&&a.length){f.isArray(a)||(a=[a]);for(var g=b(),h=c(g),d=0,e=a.length;d<e;d++)AJS("li").text(a[d]).appendTo(h);g.removeClass("hidden")}},handleResponseErrors:function(a,b){var c=[].concat(a.validationErrors||[]).concat(a.actionErrors||
[]).concat(a.errorMessage||[]);return c.length?(this.displayMessages(b||c),!0):!1}}};AJS.MessageHandler=function(a,b){var c=f.extend(i(a),b&&b(a));c.getMessageContainer().addClass("message-handler");c.clearMessages();return c};var d=!1,e;AJS.MessageHandler.closeOnNew=function(a){if("undefined"!==typeof a)d=a;else return d};AJS.MessageHandler.message=function(a,b,c){c=c||"success";d&&a.empty();AJS.messages[c](a,{body:b,closeable:!0,shadowed:!0})};AJS.MessageHandler.error=function(a,b){AJS.MessageHandler.message(a,
b,"error")};AJS.MessageHandler.actionMessage=function(a,b){e=e||f("#action-messages");AJS.MessageHandler.message(e,a,b)};AJS.MessageHandler.loading=function(a){AJS.MessageHandler.actionMessage(a,"info")}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/dialog.js' */
AJS.ConfluenceDialog=function(a){var b,a=a||{},a=jQuery.extend({},{keypressListener:function(c){if(27===c.keyCode){if(AJS.debug("dialog.js: escape keydown caught"),!jQuery(".aui-dropdown",b.popup.element).is(":visible"))if("function"==typeof a.onCancel)a.onCancel();else b.hide()}else 13===c.keyCode&&(AJS.debug("dialog.js: enter keydown caught"),jQuery(".aui-dropdown",b.popup.element).is(":visible")||"textarea"!=(c.target.nodeName&&c.target.nodeName.toLowerCase())&&"function"==typeof a.onSubmit&&setTimeout(a.onSubmit))},
width:865,height:530},a);b=new AJS.Dialog(a);jQuery(document).bind("hideLayer",function(c,d,e){if("popup"==d&&e==b&&"function"==typeof a.onCancel)a.onCancel()});return b};
AJS.toInit(function(a){AJS.bind("show.dialog",function(a,c){var d=AJS.Meta.get("page-id"),e=AJS.Meta.get("space-key"),f=AJS.Meta.get("editor-mode"),g=AJS.Meta.get("new-page");AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:c.dialog.id,properties:function(){var a={};d&&(a.pageid=d);e&&(a.spacekey=e);f&&(a.editormode=f);g&&(a.newpage=g);return a}()})});a(document).bind("showLayer",function(b,c,d){Confluence.runBinderComponents();if("popup"==c&&d){var b=a(d.element),e;if(!b.attr("data-lasttab-override")){b.attr("data-tab-default")&&
(e=b.attr("data-tab-default"));var f=Confluence.storageManager(b.attr("id")),c=f.getItem("last-tab");(e=null!=c?c:e)&&a(".page-menu-item:visible:eq("+e+") button",b).click();b.attr("data-lasttab-bound")||(a(".page-menu-item",b).each(function(b,c){a(c).click(function(){f.setItem("last-tab",b)})}),b.attr("data-lasttab-bound","true"))}}});AJS.Dialog.prototype.overrideLastTab=function(){a(this.popup.element).attr("data-lasttab-override","true")};AJS.Dialog.prototype.addHelpText=function(b,c){if(b){var d=
b;c&&(d=AJS.template(b).fill(c).toString());var e=this.page[this.curpage];e.buttonpanel||e.addButtonPanel();d=a("<div class='dialog-tip'></div>").html(d);e.buttonpanel.append(d);a("a",d).click(function(){window.open(this.href,"_blank").focus();return!1})}};AJS.Dialog.prototype.getTitle=function(){return a("#"+this.id+" .dialog-components:visible h2").text()};AJS.Dialog.prototype.isVisible=function(){return a("#"+this.id).is(":visible")}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:ajs', location = '/includes/js/aui-overrides.js' */
(function(){window.$=AJS.$;if("undefined"!=typeof AJS){var d=AJS.populateParameters;AJS.populateParameters=function(){d.apply(AJS,arguments);AJS.$("meta[name^=ajs-]").each(function(){var a=this.name,b=this.content,a=a.substring(4).replace(/(-\w)/g,function(a){return a.charAt(1).toUpperCase()});"undefined"==typeof AJS.params[a]&&(AJS.params[a]=AJS.asBooleanOrString(b))})}}AJS.$.fn.disable=function(){return this.each(function(){var a=AJS.$(this);a.is("a")&&a.css("pointer-events","none");var b=a.prop("disabled",
!0).attr("aria-disabled",!0).addClass("disabled").attr("id");b&&AJS.$("label[for="+b+"]",a.parent()).addClass("disabled")})};AJS.$.fn.enable=function(){return this.each(function(){var a=AJS.$(this);a.is("a")&&a.css("pointer-events","");var b=a.attr("disabled",!1).attr("aria-disabled",!1).removeClass("disabled").attr("id");b&&AJS.$("label[for="+b+"]",a.parent()).removeClass("disabled")})};AJS.$.debounce=function(a,b){var c;return function(){var d=this,e=arguments;c&&(clearTimeout(c),c=void 0);c=setTimeout(function(){a.apply(d,
e);c=void 0},b)}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
