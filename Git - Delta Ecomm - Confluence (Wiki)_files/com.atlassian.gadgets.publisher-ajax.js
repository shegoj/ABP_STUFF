;try {
/* module-key = 'com.atlassian.gadgets.publisher:ajax', location = 'ajax/util/mockXHR.js' */
AG.MockXHR=function(){this.status=0;this.aborted=false};AG.MockXHR.prototype.abort=function(){this.aborted=true};AG.MockXHR.prototype.updateFromMakeRequestResp=function(response){this.status=response.rc;this.responseText=response.text;this.headers=response.headers||{}};AG.MockXHR.prototype.updateFromJQueryXHR=function(xhr){this.status=xhr.status;this.responseText=xhr.responseText;this.headers=xhr.headers};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.gadgets.publisher:ajax', location = 'ajax/util/handleCallbacks.js' */
jQuery.namespace("AG.ajax.makeRequestToJQueryResponseHandler");AG.ajax.handleCallbacks=function(settings,data,xhr){if(xhr&&xhr.aborted){return }if(xhr.status>=400){if(settings.error){settings.error(xhr,"error")}if(settings.complete){settings.complete(xhr,"error")}}else{if(settings.complete){settings.complete(xhr,"success")}if(settings.success){settings.success(data,"success",xhr)}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.gadgets.publisher:ajax', location = 'ajax/util/mapToMakeRequestOptions.js' */
jQuery.namespace("AG.ajax.mapToMakeRequestOptions");AG.mapToMakeRequestOptions=function(options){var params={},prefix;params.url=AG.getAbsoluteURL(options.url);params.OWNER_SIGNED=options.signOwner;params.VIEWER_SIGNED=options.signViewer;params[gadgets.io.RequestParameters.HEADERS]={};if(options.dataType){var firstDataType=jQuery.trim(options.dataType.toLowerCase()).split(/\s+/)[0];if(firstDataType&&options.accepts&&options.accepts[firstDataType]){var orAnyMimeType=",*/*;q=0.01";params[gadgets.io.RequestParameters.HEADERS]["Accept"]=options.accepts[firstDataType]+orAnyMimeType}if(options.dataType.toUpperCase()==="XML"){params[gadgets.io.RequestParameters.CONTENT_TYPE]=gadgets.io.ContentType.DOM}else{params[gadgets.io.RequestParameters.CONTENT_TYPE]=gadgets.io.ContentType[options.dataType.toUpperCase()]}}jQuery.extend(params[gadgets.io.RequestParameters.HEADERS],options.headers);if(options.authorization){params[gadgets.io.RequestParameters.AUTHORIZATION]=gadgets.io.AuthorizationType[options.authorization.toUpperCase()]}if(options.useToken){params[gadgets.io.RequestParameters.OAUTH_USE_TOKEN]=options.useToken}if(options.oauthServiceName){params[gadgets.io.RequestParameters.OAUTH_SERVICE_NAME]=options.oauthServiceName}if(options.summaries){params[gadgets.io.RequestParameters.GET_SUMMARIES]=options.summaries}if(options.entries){params[gadgets.io.RequestParameters.NUM_ENTRIES]=options.entries}if(options.data){if(typeof options.data!="string"){options.data=jQuery.extend({},options.data)}if(!options.type||options.type.toLowerCase()=="get"){if(options.url.indexOf("?")>=0){if(options.url.lastIndexOf("&")==options.url.length-1){prefix=""}else{prefix="&"}}else{prefix="?"}if(typeof options.data=="string"){params.url+=prefix+options.data.replace(/^\?/,"")}else{params.url+=prefix+gadgets.io.encodeValues(options.data).replace(/^\?/,"")}}else{params[gadgets.io.RequestParameters.POST_DATA]=options.data}}if(options.type){params[gadgets.io.RequestParameters.METHOD]=gadgets.io.MethodType[options.type]}return params};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.gadgets.publisher:ajax', location = 'ajax/OAuth.js' */
jQuery.namespace("AG.ajax.OAuth");AG.ajax.OAuth=function(options){var xhr=new AG.MockXHR(),params;options.authorization="oauth";options.useToken="always";params=AG.mapToMakeRequestOptions(options);options.send();gadgets.io.makeRequest(params.url,function(response){xhr.updateFromMakeRequestResp(response);AG.ajax.OAuth.handleResponse(options,response,xhr)},params);return xhr};AG.ajax.OAuth.handleResponse=function(options,response,xhr){if(response.oauthApprovalUrl||response.rc===403){if(response.oauthApprovalUrl){jQuery(document).trigger("ajax.oAuthAvailable",[response.oauthApprovalUrl,options])}if(options.unauthorized){options.unauthorized(options,xhr,response.oauthApprovalUrl)}}else{AG.ajax.handleCallbacks(options,response.data,xhr)}};AG.ajax.OAuth.getApprovalButton=function(approvalUrl,requestOptions){var $approvalButton,oauthPopup;if(approvalUrl){oauthPopup=new gadgets.oauth.Popup(approvalUrl,null,function(){},function(){requestOptions.complete=function(){window.location.reload()};AG.ajax.OAuth(requestOptions)});$approvalButton=jQuery("<button class='oauth-approve'>").text(AG.getText("gadget.common.oauth.approve.button"));$approvalButton.click(oauthPopup.createOpenerOnClick());return $approvalButton}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.gadgets.publisher:ajax', location = 'ajax/trustedApps.js' */
jQuery.namespace("AG.ajax.trustedApps");AG.ajax.trustedApps=function(options){var params,xhr=new AG.MockXHR();if(!AG.isAtlassianContainer()){if(options.unauthorized){options.unauthorized(options,xhr)}}else{params=AG.mapToMakeRequestOptions(options);options.send();gadgets.io.makeRequest(params.url,function(response){xhr.updateFromMakeRequestResp(response);AG.ajax.trustedApps.handleResponse(options,response,xhr)},params)}return xhr};AG.ajax.trustedApps.handleResponse=function(options,response,xhr){var trustedAppsHeader=response.headers["x-seraph-trusted-app-status"];if(trustedAppsHeader&&trustedAppsHeader[0]==="OK"){AG.ajax.handleCallbacks(options,response.data,xhr)}else{if(options.unauthorized){options.unauthorized(options,response,xhr)}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.gadgets.publisher:ajax', location = 'ajax/anonymous.js' */
jQuery.namespace("AG.ajax.anonymous");AG.ajax.anonymous=function(options){var xhr=new AG.MockXHR(),params=AG.mapToMakeRequestOptions(options);options.send();gadgets.io.makeRequest(params.url,function(response){xhr.updateFromMakeRequestResp(response);AG.ajax.anonymous.handleResponse(options,response,xhr)},params);return xhr};AG.ajax.anonymous.handleResponse=function(options,response,xhr){if(response.rc===401||response.rc===403){jQuery(document).trigger("ajax.anonymousAccessDenied",[xhr,options])}else{AG.ajax.handleCallbacks(options,response.data,xhr);jQuery(document).trigger("ajax.anonymousAccess",[xhr,options])}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.gadgets.publisher:ajax', location = 'ajax/jQuery.js' */
jQuery.namespace("AG.ajax.jQuery");AG.ajax.jQuery=function($ajax){var atlassian=window.atlassian||{};return function(options){var params,xhr=new AG.MockXHR();options.url=AG.getAbsoluteURL(options.url);options.global=false;params=AG.copyObject(options);delete params.success;delete params.error;delete params.complete;params.success=function(data,status,realXHR){xhr.updateFromJQueryXHR(realXHR);AG.ajax.handleCallbacks(options,data,xhr)};params.error=function(realXHR){xhr.updateFromJQueryXHR(realXHR);AG.ajax.handleCallbacks(options,null,xhr)};if(typeof atlassian.util==="undefined"||atlassian.util.getRendererBaseUrl()!==options.baseUrl){options.unauthorized(options,xhr)}else{options.send();$ajax(params)}return xhr}}(jQuery.ajax);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.gadgets.publisher:ajax', location = 'ajax/ajax.js' */
jQuery.ajax=function(options,queue){var paramWhiteList=["accepts","success","error","complete","send","url","data","dataType","headers","type","global","oauthApprovalUrl"],requestParams=AG.copyObject(jQuery.ajaxSettings),userParams=AG.copyObject(options,true),authQueue=queue||[AG.ajax.jQuery,AG.ajax.trustedApps,AG.ajax.OAuth,AG.ajax.anonymous],request=authQueue.splice(0,1)[0];delete requestParams.jsonpCallback;delete requestParams.jsonp;if(!queue&&options.global!==false){jQuery.event.trigger("ajaxStart",[{},options])}jQuery.extend(requestParams,userParams,{send:function(xhr){if(options.send){options.send.apply(this,arguments)}},complete:function(xhr){if(options.global!==false){jQuery.event.trigger("ajaxStop",[xhr,options])}if(options.complete){options.complete.apply(this,arguments)}},error:function(xhr){if(options.error){options.error.apply(this,arguments)}if(options.global!==false){jQuery.event.trigger("ajaxError",[xhr,options])}},success:function(data,textStatus,xhr){if(options.success){options.success.apply(this,arguments)}if(options.global!==false){jQuery.event.trigger("ajaxSuccess",[xhr,options])}},unauthorized:function(ops,xhr,approvalUrl){options.oauthApprovalUrl=approvalUrl;jQuery.ajax(options,authQueue)}});jQuery.each(paramWhiteList,function(i,name){if(jQuery.inArray(name,paramWhiteList)===-1){console.warn("jQuery.ajax: param ["+name+"] is invalid. Ignoring...")}});return request(requestParams)};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.gadgets.publisher:ajax', location = 'ajax/events.js' */
(function(){var events={"ajax.anonymousAccessDenied":function(e,xhr,options){if(options.oauthApprovalUrl){AG.sysMsg.addOauthApprovalMsg(options)}else{if(xhr.responseText&&xhr.responseText.length){AG.sysMsg.addError({message:xhr.responseText.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>")})}else{AG.sysMsg.addError(AG.getText("gadget.common.authrequired"))}}},"ajax.anonymousAccess":function(e,xhr,options){if(options.oauthApprovalUrl){AG.sysMsg.addOauthApprovalMsg(options)}},"ajax.oAuthAvailable":function(e,approvalUrl,requestOptions){}};jQuery.each(events,function(name,handler){jQuery(document).bind(name,function(){var that=this,args=arguments,originalHandler=events[name];args[0].doDefault=function(){return originalHandler.apply(that,args)};if(AG.events&&AG.events[name]){AG.events[name].apply(this,args)}else{events[name].apply(this,arguments)}})})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
