;try {
/* module-key = 'com.atlassian.confluence.restplugin:confluence-rest', location = 'js/confluence-rest.js' */
AJS.REST=function(i){AJS.safeHTML=function(a){return a.replace(/[<>&"']/g,function(a){return"&#"+a.charCodeAt()+";"})};var j=function(a){if(!a)return AJS.log("REST result is null"),null;if(!a.link||!i.isArray(a.link))return AJS.log("No link for result with title: "+a.title),null;if(!a.title)return AJS.log("No title for result with id: "+a.id),null;var c={href:encodeURI(AJS.REST.findLink(a.link)),name:AJS.safeHTML(a.title),spaceName:AJS.safeHTML(AJS.REST.findSpaceName(a)),restObj:a};a.thumbnailLink?
c.icon=a.thumbnailLink.href+(a.version?"?version="+a.version+"&modificationDate=":""):c.className=a.iconClass||"content-type-"+a.type+("space"==a.type?"desc":"");return c};return{getBaseUrl:function(){return"/rest/prototype/1/"},makeUrl:function(a){return Confluence.getContextPath()+"/rest/prototype/1/"+a},findLink:function(a,c,b){c||(c="text/html");b||(b="alternate");if(AJS.$.isArray(a))for(var e=0,d=a.length;e<d;e++){var f=a[e];if(f.type==c&&f.rel==b)return f.href}return"#"},findSpaceName:function(a){return a.space?
a.space.name:""},convertFromRest:function(a){for(var c=[],b,e,d=0,f=a.length;d<f;d++){b=[];for(var g=0,h=a[d].length;g<h;g++)(e=j(a[d][g]))&&b.push(e);b.length&&c.push(b)}return c},wikiLink:function(a){var c=a.title,b=a.wikiLink&&a.wikiLink.slice(1,-1);b&&("attachment"==a.type&&a.space&&a.space.key==AJS.Meta.get("space-key")&&a.ownerId==AJS.params.attachmentSourceContentId)&&(b=b.substring(b.indexOf("^")));var e=b&&(c!=b?c+"|":"")+b;AJS.log("AJS.Editor.Autocompleter.Manager.makeLinkDetails =>"+e);
return{alias:c,destination:b,href:this.findLink(a.link),wikiMarkup:e}},makeRestMatrixFromData:function(a,c){var b=[],e=a[c];e&&e.length&&b.push(e);return b},makeRestMatrixFromSearchData:function(a,c){var b=[],e=a[c||"group"];if(e){for(var d={content:[],attachment:[],userinfo:[],spacedesc:[],page:[],blogpost:[],comment:[],personalspacedesc:[],mail:[]},f=0,g=e.length;f<g;f++){var h=e[f];d[h.name]&&d[h.name].push(h.result)}b=b.concat(d.content,d.attachment,d.userinfo,d.spacedesc,d.page,d.blogpost,d.comment,
d.personalspacedesc,d.mail)}else log("makeRestMatrixFromData","WARNING: Unknown rest object",a);return b}}}(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
