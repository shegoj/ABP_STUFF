;try {
/* module-key = 'confluence.web.resources:contentnamesearch', location = '/includes/js/contentnamesearch.js' */
Confluence.QuickNav=function(e){var d=[],c;return{addDropDownPostProcess:function(a){"undefined"!==typeof a?d.push(a):AJS.log("WARN: Attempted to add a dropdown post-process function that was undefined.")},setMakeParams:function(a){c=a},init:function(a,g){a.quicksearch("/rest/quicknav/1/search",null,{dropdownPlacement:g,dropdownPostprocess:function(a){e.each(d,function(b,f){f&&f(a)})},makeParams:function(a){return c?c(a):{query:a}},ajsDropDownOptions:{className:"quick-search-dropdown"}})}}}(AJS.$);
AJS.toInit(function(){var e=function(b){return function(f){b.closest("form").find(".quick-nav-drop-down").append(f)}},d=AJS.$("#quick-search-query"),c=AJS.$("#space-blog-quick-search-query"),a=AJS.$("#confluence-space-key"),g=e(d),h=AJS.defaultIfUndefined("Atlassian.SearchableApps.QuickNav",{defaultValue:Confluence.QuickNav});h.init(d,g);h.addDropDownPostProcess(function(b){AJS.$("a",b).each(function(){var b=AJS.$(this),a=b.find("span");if((a=AJS.dropDown.getAdditionalPropertyValue(a,"spaceName"))&&
!b.is(".content-type-spacedesc"))b.after(b.clone().attr("class","space-name").html(a)),b.parent().addClass("with-space-name")})});c.length&&a.length&&c.quicksearch("/rest/quicknav/1/search?type=blogpost&spaceKey="+AJS("i").html(a.attr("content")).text(),null,{dropdownPlacement:e(c)});AJS.$("#quick-search").on("click","div.quick-search-dropdown li",function(b){var a=AJS.$(this),c=AJS.$(b.target);if(!(c.is("a")&&1===c.parent().children("a").index(c))||void 0!==b.originalEvent)b=a.children("a:first").attr("class"),
a=a.index("div.quick-search-dropdown li"),AJS.trigger("analytics",{name:"quicknav-click-"+b,data:{index:a}})});AJS.$("#quick-search").on("submit",function(){var b={name:"quicknav-hit-enter",data:{results:AJS.$("div.quick-search-dropdown li").length}};AJS.trigger("analytics",b)});AJS.$("#quick-search").on({"quick-search-loading-start":function(){$(this).spin({className:"quick-search-spinner"}).addClass("quick-search-loading");$(".quick-search-spinner").css("left",$(this).outerWidth()-35+"px")},"quick-search-loading-stop":function(){$(this).spinStop().removeClass("quick-search-loading")}});
AJS.$("#quick-search").on("keydown",function(b){var a=AJS.dropDown.current&&-1!=AJS.dropDown.current.getFocusIndex();if(13===b.which&&(b.metaKey||b.ctrlKey)&&!a)b=AJS.$(this),b.attr("target","_blank"),b.submit(),b.attr("target","")})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
