;try {
/* module-key = 'com.atlassian.gadgets.publisher:util', location = 'util/namespace.js' */
jQuery.namespace=function(str,noclobber){var i,a=str.split("."),o=window,callthrough=false;if(/[^a-zA-Z.]/.test(str)){return false}for(i=0;i<a.length;i++){if(!o[a[i]]){o[a[i]]={};callthrough=true}o=o[a[i]]}if(!!noclobber){return callthrough}return true};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.gadgets.publisher:util', location = 'util/util.js' */
jQuery.namespace("AG");AG.prefs=new gadgets.Prefs();AG.copyObject=function(object,deep){var copiedObject={};AJS.$.each(object,function(name,property){if(jQuery.isArray(property)||typeof property!=="object"||property===null||property instanceof AJS.$){copiedObject[name]=property}else{if(deep!==false){copiedObject[name]=AG.copyObject(property,deep)}}});return copiedObject};AG.addApprovalTag=function(approvalUrl,requestOptions){jQuery("<meta />").attr({name:"approvalUrl",content:approvalUrl}).data("requestOptions",requestOptions).appendTo("head")};AG.getApprovalTag=function(){var $approvalTag=jQuery("meta[name=approvalUrl]");if($approvalTag.length===1){return $approvalTag}};AG.isAtlassianContainer=function(){return window._args&&_args().container==="atlassian"&&typeof atlassian!=="undefined"};AG.isRelativeURL=function(url){return !/^(http|https):\/\//.test(url)};AG.getText=function(key){if(AG.prefs.getMsg(key)){arguments[0]=AG.prefs.getMsg(key);return AJS.format.apply(AJS,arguments)}else{return key}};AG.shrinkText=function(text,length){if(text.length>length+3){return[text.substring(0,Math.floor(length/2)),text.substring(Math.floor(text.length-length/2),text.length)].join("...")}else{return text}};AG.getAbsoluteURL=function(url){if(AG.isRelativeURL(url)){return jQuery.ajaxSettings.baseUrl+url}else{return url}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.gadgets.publisher:util', location = 'util/sysMsg.js' */
AG.sysMsg=function(){var $sysMsg=jQuery("<div id='ag-sys-msg' />").appendTo("body"),templates=AG.templates.messages;function getMessageWithText(msg){var $msg;$sysMsg.find(".aui-message p").each(function(){var div=document.createElement("div"),$this=jQuery(this);div.innerHTML=msg;if(jQuery.trim($this.text())===jQuery.trim(jQuery(div).text())){$msg=$this.closest(".aui-message");return false}});return $msg}return{_add:function(template,options){var $existingMsg,$msg;if(typeof options==="string"){options={message:options}}$existingMsg=getMessageWithText(options.message);if($existingMsg){$existingMsg.remove()}template=template||templates.info;$msg=jQuery(template({message:options.message}));$msg.appendTo($sysMsg);$sysMsg.show();gadgets.window.adjustHeight();return $msg},clear:function(){$sysMsg.empty().hide()},addError:function(options){return this._add(templates.error,options)},addInfo:function(options){return this._add(templates.info,options)}}}();AG.sysMsg.addOauthApprovalMsg=function(){var approvalMessages={};function getApprovalBase(approvalUrl){var queryIdx=approvalUrl.indexOf("?");if(queryIdx){return approvalUrl.substring(0,queryIdx)}else{return approvalUrl}}return function(options){var url,$msg,$prevRequest,$request,$requestLink,approvalMsgKey;if(options&&options.oauthApprovalUrl){approvalMsgKey=getApprovalBase(options.oauthApprovalUrl);if(approvalMessages[approvalMsgKey]){$msg=approvalMessages[approvalMsgKey];$msg.find(".oauth-approve").replaceWith(AG.ajax.OAuth.getApprovalButton(options.oauthApprovalUrl,options))}else{$msg=AG.sysMsg.addInfo({message:AG.getText("gadget.common.oauth.approve.message")});$msg.append("<ul class='ag-requests' />");$msg.find(".ag-show-requests").click(function(e){$msg.find(".ag-requests").show();gadgets.window.adjustHeight();e.preventDefault()});$msg.append(AG.ajax.OAuth.getApprovalButton(options.oauthApprovalUrl,options));approvalMessages[approvalMsgKey]=$msg}$prevRequest=$msg.find("a[href='"+options.url+"']");if($prevRequest.length===0){url=AG.getAbsoluteURL(options.url);$request=jQuery("<li />").appendTo($msg.find(".ag-requests"));$requestLink=jQuery("<a />").attr("href",url).text(AG.shrinkText(url,50)).appendTo($request)}gadgets.window.adjustHeight()}}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
