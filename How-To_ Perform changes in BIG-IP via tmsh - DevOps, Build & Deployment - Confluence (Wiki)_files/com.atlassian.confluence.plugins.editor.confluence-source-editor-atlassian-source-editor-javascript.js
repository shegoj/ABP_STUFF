;try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-javascript', location = 'jscripts/CodeMirror-2.21/lib/codemirror.js' */
var CodeMirror=(function(){function Q(Ac,AZ){var Bm={},A8=Q.defaults;
for(var AP in A8){if(A8.hasOwnProperty(AP)){Bm[AP]=(AZ&&AZ.hasOwnProperty(AP)?AZ:A8)[AP]
}}var CX=Bm.document;
var AT=CX.createElement("div");
AT.className="CodeMirror"+(Bm.lineWrapping?" CodeMirror-wrap":"");
AT.innerHTML='<div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea style="position: absolute; padding: 0; width: 1px; height: 1em" wrap="off" autocorrect="off" autocapitalize="off"></textarea></div><div class="CodeMirror-scroll" tabindex="-1"><div style="position: relative"><div style="position: relative"><div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div><div class="CodeMirror-lines"><div style="position: relative; z-index: 0"><div style="position: absolute; width: 100%; height: 0; overflow: hidden; visibility: hidden; outline: 5px auto none"></div><pre class="CodeMirror-cursor">&#160;</pre><div style="position: relative; z-index: -1"></div><div></div></div></div></div></div></div>';
if(Ac.appendChild){Ac.appendChild(AT)
}else{Ac(AT)
}var Bj=AT.firstChild,BB=Bj.firstChild,A9=AT.lastChild,BZ=A9.firstChild,B1=BZ.firstChild,AX=B1.firstChild,Ap=AX.firstChild,BJ=AX.nextSibling.firstChild,AL=BJ.firstChild,A2=AL.nextSibling,A6=A2.nextSibling,AH=A6.nextSibling;
CO();
if(O){BB.style.width="0px"
}if(!E){BJ.draggable=true
}BJ.style.outline="none";
if(Bm.tabindex!=null){BB.tabIndex=Bm.tabindex
}if(!Bm.gutter&&!Bm.lineNumbers){AX.style.display="none"
}try{CE("x")
}catch(Bt){if(Bt.message.match(/runtime/i)){Bt=new Error("A CodeMirror inside a P-style element does not work in Internet Explorer. (innerHTML bug)")
}throw Bt
}var Bs=new V(),AM=new V(),Cb;
var Bw,CJ=new G([new z([new D("")])]),B2,B4;
Bf();
var Cj={from:{line:0,ch:0},to:{line:0,ch:0},inverted:false};
var B3,BE,Aq,BS=0,A1,B8=false,CC=false;
var CA,Br,AR,CZ,Af,A5,Ai,CL;
var A3=0,Cc=0,BY=0,Ba=0;
var Bp;
var BQ="",AV,BI=Am();
AI(function(){An(Bm.value||"");
CA=false
})();
var Az=new I();
N(A9,"mousedown",AI(B5));
N(A9,"dblclick",AI(Bi));
N(BJ,"dragstart",AY);
N(BJ,"selectstart",n);
if(!h){N(A9,"contextmenu",As)
}N(A9,"scroll",function(){BS=A9.scrollTop;
By([]);
if(Bm.fixedGutter){AX.style.left=A9.scrollLeft+"px"
}if(Bm.onScroll){Bm.onScroll(Bu)
}});
N(window,"resize",function(){By(true)
});
N(BB,"keyup",AI(B6));
N(BB,"input",Ag);
N(BB,"keydown",AI(Bx));
N(BB,"keypress",AI(BC));
N(BB,"focus",Cg);
N(BB,"blur",AU);
N(A9,"dragenter",S);
N(A9,"dragover",S);
N(A9,"drop",AI(AF));
N(A9,"paste",function(){BO();
Ag()
});
N(BB,"paste",Ag);
N(BB,"cut",AI(function(){if(!Bm.readOnly){BG("")
}}));
var CH;
try{CH=(CX.activeElement==BB)
}catch(Bt){}if(CH){setTimeout(Cg,20)
}else{AU()
}function BF(Cm){return Cm>=0&&Cm<CJ.size
}var Bu=AT.CodeMirror={getValue:Bn,setValue:AI(An),getSelection:Bo,replaceSelection:AI(BG),focus:function(){BO();
Cg();
Ag()
},setOption:function(Cn,Co){var Cm=Bm[Cn];
Bm[Cn]=Co;
if(Cn=="mode"||Cn=="indentUnit"){Bf()
}else{if(Cn=="readOnly"&&Co=="nocursor"){AU();
BB.blur()
}else{if(Cn=="readOnly"&&!Co){CN(true)
}else{if(Cn=="theme"){CO()
}else{if(Cn=="lineWrapping"&&Cm!=Co){AI(CR)()
}else{if(Cn=="tabSize"){AI(Ch)()
}}}}}}if(Cn=="lineNumbers"||Cn=="gutter"||Cn=="firstLineNumber"||Cn=="theme"){By(true)
}},getOption:function(Cm){return Bm[Cm]
},undo:AI(Cf),redo:AI(CU),indentLine:AI(function(Cn,Cm){if(typeof Cm!="string"){if(Cm==null){Cm=Bm.smartIndent?"smart":"prev"
}else{Cm=Cm?"add":"subtract"
}}if(BF(Cn)){BN(Cn,Cm)
}}),indentSelection:AI(CM),historySize:function(){return{undo:Az.done.length,redo:Az.undone.length}
},clearHistory:function(){Az=new I()
},matchBrackets:AI(function(){Bz(true)
}),getTokenAt:AI(function(Cm){Cm=Aj(Cm);
return CQ(Cm.line).getTokenAt(Bw,CF(Cm.line),Cm.ch)
}),getStateAfter:function(Cm){Cm=Bk(Cm==null?CJ.size-1:Cm);
return CF(Cm+1)
},cursorCoords:function(Cm){if(Cm==null){Cm=Cj.inverted
}return AG(Cm?Cj.from:Cj.to)
},charCoords:function(Cm){return AG(Aj(Cm))
},coordsChar:function(Cm){var Cn=AC(BJ);
return BU(Cm.x-Cn.left,Cm.y-Cn.top)
},markText:AI(BR),setBookmark:Ak,setMarker:AI(Bh),clearMarker:AI(AK),setLineClass:AI(BA),hideLine:AI(function(Cm){return CV(Cm,true)
}),showLine:AI(function(Cm){return CV(Cm,false)
}),onDeleteLine:function(Cm,Cn){if(typeof Cm=="number"){if(!BF(Cm)){return null
}Cm=CQ(Cm)
}(Cm.handlers||(Cm.handlers=[])).push(Cn);
return Cm
},lineInfo:Al,addWidget:function(Cq,Co,Cs,Cp,Cu){Cq=Cd(Aj(Cq));
var Cr=Cq.yBot,Cn=Cq.x;
Co.style.position="absolute";
BZ.appendChild(Co);
if(Cp=="over"){Cr=Cq.y
}else{if(Cp=="near"){var Cm=Math.max(A9.offsetHeight,CJ.height*Bb()),Ct=Math.max(BZ.clientWidth,BJ.clientWidth)-Aw();
if(Cq.yBot+Co.offsetHeight>Cm&&Cq.y>Co.offsetHeight){Cr=Cq.y-Co.offsetHeight
}if(Cn+Co.offsetWidth>Ct){Cn=Ct-Co.offsetWidth
}}}Co.style.top=(Cr+CD())+"px";
Co.style.left=Co.style.right="";
if(Cu=="right"){Cn=BZ.clientWidth-Co.offsetWidth;
Co.style.right="0px"
}else{if(Cu=="left"){Cn=0
}else{if(Cu=="middle"){Cn=(BZ.clientWidth-Co.offsetWidth)/2
}}Co.style.left=(Cn+Aw())+"px"
}if(Cs){AQ(Cn,Cr,Cn+Co.offsetWidth,Cr+Co.offsetHeight)
}},lineCount:function(){return CJ.size
},clipPos:Aj,getCursor:function(Cm){if(Cm==null){Cm=Cj.inverted
}return u(Cm?Cj.from:Cj.to)
},somethingSelected:function(){return !w(Cj.from,Cj.to)
},setCursor:AI(function(Cm,Co,Cn){if(Co==null&&typeof Cm.line=="number"){Ax(Cm.line,Cm.ch,Cn)
}else{Ax(Cm,Co,Cn)
}}),setSelection:AI(function(Co,Cn,Cm){(Cm?BM:BL)(Aj(Co),Aj(Cn||Co))
}),getLine:function(Cm){if(BF(Cm)){return CQ(Cm).text
}},getLineHandle:function(Cm){if(BF(Cm)){return CQ(Cm)
}},setLine:AI(function(Cm,Cn){if(BF(Cm)){Bc(Cn,{line:Cm,ch:0},{line:Cm,ch:CQ(Cm).text.length})
}}),removeLine:AI(function(Cm){if(BF(Cm)){Bc("",{line:Cm,ch:0},Aj({line:Cm+1,ch:0}))
}}),replaceRange:AI(Bc),getRange:function(Cn,Cm){return Ca(Aj(Cn),Aj(Cm))
},execCommand:function(Cm){return f[Cm](Bu)
},moveH:AI(CP),deleteH:AI(B7),moveV:AI(CI),toggleOverwrite:function(){B8=!B8
},posFromIndex:function(Cn){var Co=0,Cm;
CJ.iter(0,CJ.size,function(Cp){var Cq=Cp.text.length+1;
if(Cq>Cn){Cm=Cn;
return true
}Cn-=Cq;
++Co
});
return Aj({line:Co,ch:Cm})
},indexFromPos:function(Cn){if(Cn.line<0||Cn.ch<0){return 0
}var Cm=Cn.ch;
CJ.iter(0,Cn.line,function(Co){Cm+=Co.text.length+1
});
return Cm
},scrollTo:function(Cm,Cn){if(Cm!=null){A9.scrollTop=Cm
}if(Cn!=null){A9.scrollLeft=Cn
}By([])
},operation:function(Cm){return AI(Cm)()
},refresh:function(){By(true);
if(A9.scrollHeight>BS){A9.scrollTop=BS
}},getInputField:function(){return BB
},getWrapperElement:function(){return AT
},getScrollerElement:function(){return A9
},getGutterElement:function(){return AX
}};
function CQ(Cm){return X(CJ,Cm)
}function Au(Cn,Cm){Ai=true;
var Co=Cm-Cn.height;
for(var Cp=Cn;
Cp;
Cp=Cp.parent){Cp.height+=Co
}}function An(Cm){var Cn={line:0,ch:0};
Ae(Cn,{line:CJ.size-1,ch:CQ(CJ.size-1).text.length},W(Cm),Cn,Cn);
CA=true
}function Bn(Cm){var Cn=[];
CJ.iter(0,CJ.size,function(Co){Cn.push(Co.text)
});
return Cn.join("\n")
}function B5(Cs){Av(U(Cs,"shiftKey"));
for(var Cp=H(Cs);
Cp!=AT;
Cp=Cp.parentNode){if(Cp.parentNode==BZ&&Cp!=B1){return 
}}for(var Cp=H(Cs);
Cp!=AT;
Cp=Cp.parentNode){if(Cp.parentNode==Ap){if(Bm.onGutterClick){Bm.onGutterClick(Bu,M(Ap.childNodes,Cp)+Cc,Cs)
}return n(Cs)
}}var Cm=At(Cs);
switch(T(Cs)){case 3:if(h&&!g){As(Cs)
}return ;
case 2:if(Cm){Ax(Cm.line,Cm.ch,true)
}return 
}if(!Cm){if(H(Cs)==A9){n(Cs)
}return 
}if(!B4){Cg()
}var Cn=+new Date;
if(Aq&&Aq.time>Cn-400&&w(Aq.pos,Cm)){n(Cs);
setTimeout(BO,20);
return Aa(Cm.line)
}else{if(BE&&BE.time>Cn-400&&w(BE.pos,Cm)){Aq={time:Cn,pos:Cm};
n(Cs);
return BV(Cm)
}else{BE={time:Cn,pos:Cm}
}}var Cu=Cm,Co;
if(Z&&!Bm.readOnly&&!w(Cj.from,Cj.to)&&!t(Cm,Cj.from)&&!t(Cj.to,Cm)){if(E){BJ.draggable=true
}var Cr=N(CX,"mouseup",AI(function(Cv){if(E){BJ.draggable=false
}A1=false;
Cr();
if(Math.abs(Cs.clientX-Cv.clientX)+Math.abs(Cs.clientY-Cv.clientY)<10){n(Cv);
Ax(Cm.line,Cm.ch,true);
BO()
}}),true);
A1=true;
return 
}n(Cs);
Ax(Cm.line,Cm.ch,true);
function Ct(Cv){var Cx=At(Cv,true);
if(Cx&&!w(Cx,Cu)){if(!B4){Cg()
}Cu=Cx;
BM(Cm,Cx);
CA=false;
var Cw=BP();
if(Cx.line>=Cw.to||Cx.line<Cw.from){Co=setTimeout(AI(function(){Ct(Cv)
}),150)
}}}var Cq=N(CX,"mousemove",AI(function(Cv){clearTimeout(Co);
n(Cv);
Ct(Cv)
}),true);
var Cr=N(CX,"mouseup",AI(function(Cv){clearTimeout(Co);
var Cw=At(Cv);
if(Cw){BM(Cm,Cw)
}n(Cv);
BO();
CA=true;
Cq();
Cr()
}),true)
}function Bi(Cm){for(var Co=H(Cm);
Co!=AT;
Co=Co.parentNode){if(Co.parentNode==Ap){return n(Cm)
}}var Cn=At(Cm);
if(!Cn){return 
}Aq={time:+new Date,pos:Cn};
n(Cm);
BV(Cn)
}function AF(Cs){Cs.preventDefault();
var Ct=At(Cs,true),Cm=Cs.dataTransfer.files;
if(!Ct||Bm.readOnly){return 
}if(Cm&&Cm.length&&window.FileReader&&window.File){function Cp(Cy,Cx){var Cw=new FileReader;
Cw.onload=function(){Cv[Cx]=Cw.result;
if(++Cn==Co){Ct=Aj(Ct);
AI(function(){var Cz=Bc(Cv.join(""),Ct,Ct);
BM(Ct,Cz)
})()
}};
Cw.readAsText(Cy)
}var Co=Cm.length,Cv=Array(Co),Cn=0;
for(var Cq=0;
Cq<Co;
++Cq){Cp(Cm[Cq],Cq)
}}else{try{var Cv=Cs.dataTransfer.getData("Text");
if(Cv){var Cu=Cj.from,Cr=Cj.to;
BM(Ct,Ct);
if(A1){Bc("",Cu,Cr)
}BG(Cv);
BO()
}}catch(Cs){}}}function AY(Cn){var Cm=Bo();
j(Cm);
Cn.dataTransfer.setDragImage(AA,0,0);
Cn.dataTransfer.setData("Text",Cm)
}function CW(Cs){var Cp=l[U(Cs,"keyCode")],Cr=R[Bm.keyMap].auto,Cq,Cm;
function Co(){return Cr.call?Cr.call(null,Bu):Cr
}if(Cp==null||Cs.altGraphKey){if(Cr){Bm.keyMap=Co()
}return null
}if(U(Cs,"altKey")){Cp="Alt-"+Cp
}if(U(Cs,"ctrlKey")){Cp="Ctrl-"+Cp
}if(U(Cs,"metaKey")){Cp="Cmd-"+Cp
}if(U(Cs,"shiftKey")&&(Cq=J("Shift-"+Cp,Bm.extraKeys,Bm.keyMap))){Cm=true
}else{Cq=J(Cp,Bm.extraKeys,Bm.keyMap)
}if(typeof Cq=="string"){if(f.propertyIsEnumerable(Cq)){Cq=f[Cq]
}else{Cq=null
}}if(Cr&&(Cq||!k(Cs))){Bm.keyMap=Co()
}if(!Cq){return false
}var Cn=B3;
try{if(Bm.readOnly){CC=true
}if(Cm){B3=null
}Cq(Bu)
}finally{B3=Cn;
CC=false
}n(Cs);
return true
}var CT=null;
function Bx(Co){if(!B4){Cg()
}if(c&&Co.keyCode==27){Co.returnValue=false
}if(Bm.onKeyEvent&&Bm.onKeyEvent(Bu,i(Co))){return 
}var Cm=U(Co,"keyCode");
Av(Cm==16||U(Co,"shiftKey"));
var Cn=CW(Co);
if(window.opera){CT=Cn?Cm:null;
if(!Cn&&Cm==88&&U(Co,g?"metaKey":"ctrlKey")){BG("")
}}}function BC(Cp){var Co=U(Cp,"keyCode"),Cm=U(Cp,"charCode");
if(window.opera&&Co==CT){CT=null;
n(Cp);
return 
}if(Bm.onKeyEvent&&Bm.onKeyEvent(Bu,i(Cp))){return 
}if(window.opera&&!Cp.which&&CW(Cp)){return 
}if(Bm.electricChars&&Bw.electricChars&&Bm.smartIndent&&!Bm.readOnly){var Cn=String.fromCharCode(Cm==null?Co:Cm);
if(Bw.electricChars.indexOf(Cn)>-1){setTimeout(AI(function(){BN(Cj.to.line,"smart")
}),75)
}}Ag()
}function B6(Cm){if(Bm.onKeyEvent&&Bm.onKeyEvent(Bu,i(Cm))){return 
}if(U(Cm,"keyCode")==16){B3=null
}}function Cg(){if(Bm.readOnly=="nocursor"){return 
}if(!B4){if(Bm.onFocus){Bm.onFocus(Bu)
}B4=true;
if(AT.className.search(/\bCodeMirror-focused\b/)==-1){AT.className+=" CodeMirror-focused"
}if(!A5){CN(true)
}}AE();
CY()
}function AU(){if(B4){if(Bm.onBlur){Bm.onBlur(Bu)
}B4=false;
if(Bp){AI(function(){if(Bp){Bp();
Bp=null
}})()
}AT.className=AT.className.replace(" CodeMirror-focused","")
}clearInterval(Cb);
setTimeout(function(){if(!B4){B3=null
}},150)
}function Ae(Cr,Cq,Cp,Cn,Cm){if(CC){return 
}if(Az){var Co=[];
CJ.iter(Cr.line,Cq.line+1,function(Cs){Co.push(Cs.text)
});
Az.addChange(Cr.line,Cp.length,Co);
while(Az.done.length>Bm.undoDepth){Az.done.shift()
}}AJ(Cr,Cq,Cp,Cn,Cm)
}function Bv(Cu,Cv,Cm){var Cw=Cu.pop(),Cq=Cw?Cw.length:0,Co=[];
for(var Cp=Cm>0?0:Cq-1,Cr=Cm>0?Cq:-1;
Cp!=Cr;
Cp+=Cm){var Ct=Cw[Cp];
var Cx=[],Cn=Ct.start+Ct.added;
CJ.iter(Ct.start,Cn,function(Cy){Cx.push(Cy.text)
});
Co.push({start:Ct.start,added:Ct.old.length,old:Cx});
var Cs=Aj({line:Ct.start+Ct.old.length-1,ch:q(Cx[Cx.length-1],Ct.old[Ct.old.length-1])});
AJ({line:Ct.start,ch:0},{line:Cn-1,ch:CQ(Cn-1).text.length},Ct.old,Cs,Cs)
}CA=true;
Cv.push(Co)
}function Cf(){Bv(Az.done,Az.undone,-1)
}function CU(){Bv(Az.undone,Az.done,1)
}function AJ(C1,Cq,C7,Cm,C8){if(CC){return 
}var C6=false,Cp=BQ.length;
if(!Bm.lineWrapping){CJ.iter(C1.line,Cq.line,function(C9){if(C9.text.length==Cp){C6=true;
return true
}})
}if(C1.line!=Cq.line||C7.length>1){Ai=true
}var Cy=Cq.line-C1.line,Cx=CQ(C1.line),Cn=CQ(Cq.line);
if(C1.ch==0&&Cq.ch==0&&C7[C7.length-1]==""){var Cv=[],Cw=null;
if(C1.line){Cw=CQ(C1.line-1);
Cw.fixMarkEnds(Cn)
}else{Cn.fixMarkStarts()
}for(var C3=0,C5=C7.length-1;
C3<C5;
++C3){Cv.push(D.inheritMarks(C7[C3],Cw))
}if(Cy){CJ.remove(C1.line,Cy,CL)
}if(Cv.length){CJ.insert(C1.line,Cv)
}}else{if(Cx==Cn){if(C7.length==1){Cx.replace(C1.ch,Cq.ch,C7[0])
}else{Cn=Cx.split(Cq.ch,C7[C7.length-1]);
Cx.replace(C1.ch,null,C7[0]);
Cx.fixMarkEnds(Cn);
var Cv=[];
for(var C3=1,C5=C7.length-1;
C3<C5;
++C3){Cv.push(D.inheritMarks(C7[C3],Cx))
}Cv.push(Cn);
CJ.insert(C1.line+1,Cv)
}}else{if(C7.length==1){Cx.replace(C1.ch,null,C7[0]);
Cn.replace(null,Cq.ch,"");
Cx.append(Cn);
CJ.remove(C1.line+1,Cy,CL)
}else{var Cv=[];
Cx.replace(C1.ch,null,C7[0]);
Cn.replace(null,Cq.ch,C7[C7.length-1]);
Cx.fixMarkEnds(Cn);
for(var C3=1,C5=C7.length-1;
C3<C5;
++C3){Cv.push(D.inheritMarks(C7[C3],Cx))
}if(Cy>1){CJ.remove(C1.line+1,Cy-1,CL)
}CJ.insert(C1.line+1,Cv)
}}}if(Bm.lineWrapping){var Cs=A9.clientWidth/A7()-3;
CJ.iter(C1.line,C1.line+C7.length,function(C9){if(C9.hidden){return 
}var DA=Math.ceil(C9.text.length/Cs)||1;
if(DA!=C9.height){Au(C9,DA)
}})
}else{CJ.iter(C1.line,C3+C7.length,function(DA){var C9=DA.text;
if(C9.length>Cp){BQ=C9;
Cp=C9.length;
AV=null;
C6=false
}});
if(C6){Cp=0;
BQ="";
AV=null;
CJ.iter(0,CJ.size,function(DA){var C9=DA.text;
if(C9.length>Cp){Cp=C9.length;
BQ=C9
}})
}}var Co=[],Cu=C7.length-Cy-1;
for(var C3=0,C0=B2.length;
C3<C0;
++C3){var C4=B2[C3];
if(C4<C1.line){Co.push(C4)
}else{if(C4>Cq.line){Co.push(C4+Cu)
}}}var C2=C1.line+Math.min(C7.length,500);
CS(C1.line,C2);
Co.push(C2);
B2=Co;
BT(100);
AR.push({from:C1.line,to:Cq.line+1,diff:Cu});
var Ct={from:C1,to:Cq,text:C7};
if(CZ){for(var Cr=CZ;
Cr.next;
Cr=Cr.next){}Cr.next=Ct
}else{CZ=Ct
}function Cz(C9){return C9<=Math.min(Cq.line,Cq.line+Cu)?C9:C9+Cu
}BL(Cm,C8,Cz(Cj.from.line),Cz(Cj.to.line));
if(A9.clientHeight){BZ.style.height=(CJ.height*Bb()+2*CD())+"px"
}}function Bc(Cn,Cq,Cp){Cq=Aj(Cq);
if(!Cp){Cp=Cq
}else{Cp=Aj(Cp)
}Cn=W(Cn);
function Co(Ct){if(t(Ct,Cq)){return Ct
}if(!t(Cp,Ct)){return Cm
}var Cr=Ct.line+Cn.length-(Cp.line-Cq.line)-1;
var Cs=Ct.ch;
if(Ct.line==Cp.line){Cs+=Cn[Cn.length-1].length-(Cp.ch-(Cp.line==Cq.line?Cq.ch:0))
}return{line:Cr,ch:Cs}
}var Cm;
AS(Cn,Cq,Cp,function(Cr){Cm=Cr;
return{from:Co(Cj.from),to:Co(Cj.to)}
});
return Cm
}function BG(Cm,Cn){AS(W(Cm),Cj.from,Cj.to,function(Co){if(Cn=="end"){return{from:Co,to:Co}
}else{if(Cn=="start"){return{from:Cj.from,to:Cj.from}
}else{return{from:Cj.from,to:Co}
}}})
}function AS(Cp,Cr,Cq,Cm){var Co=Cp.length==1?Cp[0].length+Cr.ch:Cp[Cp.length-1].length;
var Cn=Cm({line:Cr.line+Cp.length-1,ch:Co});
Ae(Cr,Cq,Cp,Cn.from,Cn.to)
}function Ca(Cq,Cp){var Cn=Cq.line,Cm=Cp.line;
if(Cn==Cm){return CQ(Cn).text.slice(Cq.ch,Cp.ch)
}var Co=[CQ(Cn).text.slice(Cq.ch)];
CJ.iter(Cn+1,Cm,function(Cr){Co.push(Cr.text)
});
Co.push(CQ(Cm).text.slice(0,Cp.ch));
return Co.join("\n")
}function Bo(){return Ca(Cj.from,Cj.to)
}var BH=false;
function AE(){if(BH){return 
}Bs.set(Bm.pollInterval,function(){Ad();
BX();
if(B4){AE()
}AO()
})
}function Ag(){var Cm=false;
BH=true;
function Cn(){Ad();
var Co=BX();
if(!Co&&!Cm){Cm=true;
Bs.set(60,Cn)
}else{BH=false;
AE()
}AO()
}Bs.set(20,Cn)
}var A0="";
function BX(){if(A5||!B4||x(BB)||Bm.readOnly){return false
}var Cn=BB.value;
if(Cn==A0){return false
}B3=null;
var Co=0,Cm=Math.min(A0.length,Cn.length);
while(Co<Cm&&A0[Co]==Cn[Co]){++Co
}if(Co<A0.length){Cj.from={line:Cj.from.line,ch:Cj.from.ch-(A0.length-Co)}
}else{if(B8&&w(Cj.from,Cj.to)){Cj.to={line:Cj.to.line,ch:Math.min(CQ(Cj.to.line).text.length,Cj.to.ch+(Cn.length-Co))}
}}BG(Cn.slice(Co),"end");
A0=Cn;
return true
}function CN(Cm){if(!w(Cj.from,Cj.to)){A0="";
BB.value=Bo();
BB.select()
}else{if(Cm){A0=BB.value=""
}}}function BO(){if(Bm.readOnly!="nocursor"){BB.focus()
}}function Cl(){if(!A2.getBoundingClientRect){return 
}var Cm=A2.getBoundingClientRect();
if(c&&Cm.top==Cm.bottom){return 
}var Cn=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);
if(Cm.top<0||Cm.bottom>Cn){A2.scrollIntoView()
}}function B0(){var Cn=Cd(Cj.inverted?Cj.from:Cj.to);
var Cm=Bm.lineWrapping?Math.min(Cn.x,BJ.offsetWidth):Cn.x;
return AQ(Cm,Cn.y,Cm,Cn.yBot)
}function AQ(Co,Ct,Cm,Cs){var Cq=Aw(),Cz=CD(),Cv=Bb();
Ct+=Cz;
Cs+=Cz;
Co+=Cq;
Cm+=Cq;
var Cw=A9.clientHeight,Cp=A9.scrollTop,Cn=false,Cy=true;
if(Ct<Cp){A9.scrollTop=Math.max(0,Ct-2*Cv);
Cn=true
}else{if(Cs>Cp+Cw){A9.scrollTop=Cs+Cv-Cw;
Cn=true
}}var Cu=A9.clientWidth,Cx=A9.scrollLeft;
var Cr=Bm.fixedGutter?AX.clientWidth:0;
if(Co<Cx+Cr){if(Co<50){Co=0
}A9.scrollLeft=Math.max(0,Co-10-Cr);
Cn=true
}else{if(Cm>Cu+Cx-3){A9.scrollLeft=Cm+10-Cu;
Cn=true;
if(Cm>BZ.clientWidth){Cy=false
}}}if(Cn&&Bm.onScroll){Bm.onScroll(Bu)
}return Cy
}function BP(){var Cn=Bb(),Cp=A9.scrollTop-CD();
var Cm=Math.max(0,Math.floor(Cp/Cn));
var Co=Math.ceil((Cp+A9.clientHeight)/Cn);
return{from:r(CJ,Cm),to:r(CJ,Co)}
}function By(Cw,Cr){if(!A9.clientWidth){Cc=BY=A3=0;
return 
}var Cp=BP();
if(Cw!==true&&Cw.length==0&&Cp.from>Cc&&Cp.to<BY){return 
}var Cx=Math.max(Cp.from-100,0),Cy=Math.min(CJ.size,Cp.to+100);
if(Cc<Cx&&Cx-Cc<20){Cx=Cc
}if(BY>Cy&&BY-Cy<20){Cy=Math.min(CJ.size,BY)
}var Cz=Cw===true?[]:Bl([{from:Cc,to:BY,domStart:0}],Cw);
var Cv=0;
for(var Cs=0;
Cs<Cz.length;
++Cs){var Ct=Cz[Cs];
if(Ct.from<Cx){Ct.domStart+=(Cx-Ct.from);
Ct.from=Cx
}if(Ct.to>Cy){Ct.to=Cy
}if(Ct.from>=Ct.to){Cz.splice(Cs--,1)
}else{Cv+=Ct.to-Ct.from
}}if(Cv==Cy-Cx){return 
}Cz.sort(function(C1,C0){return C1.domStart-C0.domStart
});
var Co=Bb(),Cm=AX.style.display;
AH.style.display="none";
Ah(Cx,Cy,Cz);
AH.style.display=AX.style.display="";
var Cn=Cx!=Cc||Cy!=BY||Ba!=A9.clientHeight+Co;
if(Cn){Ba=A9.clientHeight+Co
}Cc=Cx;
BY=Cy;
A3=F(CJ,Cx);
B1.style.top=(A3*Co)+"px";
if(A9.clientHeight){BZ.style.height=(CJ.height*Co+2*CD())+"px"
}if(AH.childNodes.length!=BY-Cc){throw new Error("BAD PATCH! "+JSON.stringify(Cz)+" size="+(BY-Cc)+" nodes="+AH.childNodes.length)
}if(Bm.lineWrapping){AV=A9.clientWidth;
var Cq=AH.firstChild,Cu=false;
CJ.iter(Cc,BY,function(C1){if(!C1.hidden){var C0=Math.round(Cq.offsetHeight/Co)||1;
if(C1.height!=C0){Au(C1,C0);
Ai=Cu=true
}}Cq=Cq.nextSibling
});
if(Cu){BZ.style.height=(CJ.height*Co+2*CD())+"px"
}}else{if(AV==null){AV=CE(BQ)
}if(AV>A9.clientWidth){BJ.style.width=AV+"px";
BZ.style.width="";
BZ.style.width=A9.scrollWidth+"px"
}else{BJ.style.width=BZ.style.width=""
}}AX.style.display=Cm;
if(Cn||Ai){Ab()
}Ci();
if(!Cr&&Bm.onUpdate){Bm.onUpdate(Bu)
}return true
}function Bl(Cv,Ct){for(var Cq=0,Co=Ct.length||0;
Cq<Co;
++Cq){var Cs=Ct[Cq],Cm=[],Cu=Cs.diff||0;
for(var Cp=0,Cn=Cv.length;
Cp<Cn;
++Cp){var Cr=Cv[Cp];
if(Cs.to<=Cr.from&&Cs.diff){Cm.push({from:Cr.from+Cu,to:Cr.to+Cu,domStart:Cr.domStart})
}else{if(Cs.to<=Cr.from||Cs.from>=Cr.to){Cm.push(Cr)
}else{if(Cs.from>Cr.from){Cm.push({from:Cr.from,to:Cs.from,domStart:Cr.domStart})
}if(Cs.to<Cr.to){Cm.push({from:Cs.to+Cu,to:Cr.to+Cu,domStart:Cr.domStart+(Cs.to-Cr.from)})
}}}}Cv=Cm
}return Cv
}function Ah(Cw,Cx,Cz){if(!Cz.length){AH.innerHTML=""
}else{function Cm(C1){var C0=C1.nextSibling;
C1.parentNode.removeChild(C1);
return C0
}var Cr=0,Cp=AH.firstChild,Cn;
for(var Cs=0;
Cs<Cz.length;
++Cs){var Cy=Cz[Cs];
while(Cy.domStart>Cr){Cp=Cm(Cp);
Cr++
}for(var Cq=0,Cu=Cy.to-Cy.from;
Cq<Cu;
++Cq){Cp=Cp.nextSibling;
Cr++
}}while(Cp){Cp=Cm(Cp)
}}var Ct=Cz.shift(),Cp=AH.firstChild,Cq=Cw;
var Cv=CX.createElement("div"),Co;
CJ.iter(Cw,Cx,function(C0){if(Ct&&Ct.to==Cq){Ct=Cz.shift()
}if(!Ct||Ct.from>Cq){if(C0.hidden){var C1=Cv.innerHTML="<pre></pre>"
}else{var C1="<pre>"+C0.getHTML(BI)+"</pre>";
if(C0.className){C1='<div style="position: relative"><pre class="'+C0.className+'" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: -2">&#160;</pre>'+C1+"</div>"
}}Cv.innerHTML=C1;
AH.insertBefore(Cv.firstChild,Cp)
}else{Cp=Cp.nextSibling
}++Cq
})
}function Ab(){if(!Bm.gutter&&!Bm.lineNumbers){return 
}var Cm=B1.offsetHeight,Ct=A9.clientHeight;
AX.style.height=(Cm-Ct<2?Ct:Cm)+"px";
var Co=[],Cn=Cc;
CJ.iter(Cc,Math.max(BY,Cc+1),function(Cv){if(Cv.hidden){Co.push("<pre></pre>")
}else{var Cu=Cv.gutterMarker;
var Cx=Bm.lineNumbers?Cn+Bm.firstLineNumber:null;
if(Cu&&Cu.text){Cx=Cu.text.replace("%N%",Cx!=null?Cx:"")
}else{if(Cx==null){Cx="\u00a0"
}}Co.push((Cu&&Cu.style?'<pre class="'+Cu.style+'">':"<pre>"),Cx);
for(var Cw=1;
Cw<Cv.height;
++Cw){Co.push("<br/>&#160;")
}Co.push("</pre>")
}++Cn
});
AX.style.display="none";
Ap.innerHTML=Co.join("");
var Cs=String(CJ.size).length,Cq=Ap.firstChild,Cr=b(Cq),Cp="";
while(Cr.length+Cp.length<Cs){Cp+="\u00a0"
}if(Cp){Cq.insertBefore(CX.createTextNode(Cp),Cq.firstChild)
}AX.style.display="";
BJ.style.marginLeft=AX.offsetWidth+"px";
Ai=false
}function Ci(){var Cp=w(Cj.from,Cj.to);
var Cy=Cd(Cj.from,true);
var Cu=Cp?Cy:Cd(Cj.to,true);
var Cs=Cj.inverted?Cy:Cu,Cn=Bb();
var Cm=AC(AT),Co=AC(AH);
Bj.style.top=Math.max(0,Math.min(A9.offsetHeight,Cs.y+Co.top-Cm.top))+"px";
Bj.style.left=Math.max(0,Math.min(A9.offsetWidth,Cs.x+Co.left-Cm.left))+"px";
if(Cp){A2.style.top=Cs.y+"px";
A2.style.left=(Bm.lineWrapping?Math.min(Cs.x,BJ.offsetWidth):Cs.x)+"px";
A2.style.display="";
A6.style.display="none"
}else{var Cw=Cy.y==Cu.y,Cr="";
function Cx(C2,C1,C0,Cz){Cr+='<div class="CodeMirror-selected" style="position: absolute; left: '+C2+"px; top: "+C1+"px; right: "+C0+"px; height: "+Cz+'px"></div>'
}if(Cj.from.ch&&Cy.y>=0){var Cv=Cw?BJ.clientWidth-Cu.x:0;
Cx(Cy.x,Cy.y,Cv,Cn)
}var Cq=Math.max(0,Cy.y+(Cj.from.ch?Cn:0));
var Ct=Math.min(Cu.y,BJ.clientHeight)-Cq;
if(Ct>0.2*Cn){Cx(0,Cq,0,Ct)
}if((!Cw||!Cj.from.ch)&&Cu.y<BJ.clientHeight-0.5*Cn){Cx(0,Cu.y,BJ.clientWidth-Cu.x,Cn)
}A6.innerHTML=Cr;
A2.style.display="none";
A6.style.display=""
}}function Av(Cm){if(Cm){B3=B3||(Cj.inverted?Cj.to:Cj.from)
}else{B3=null
}}function BM(Co,Cn){var Cm=B3&&Aj(B3);
if(Cm){if(t(Cm,Co)){Co=Cm
}else{if(t(Cn,Cm)){Cn=Cm
}}}BL(Co,Cn);
Br=true
}function BL(Cq,Cp,Cm,Co){CG=null;
if(Cm==null){Cm=Cj.from.line;
Co=Cj.to.line
}if(w(Cj.from,Cq)&&w(Cj.to,Cp)){return 
}if(t(Cp,Cq)){var Cn=Cp;
Cp=Cq;
Cq=Cn
}if(Cq.line!=Cm){Cq=Bd(Cq,Cm,Cj.from.ch)
}if(Cp.line!=Co){Cp=Bd(Cp,Co,Cj.to.ch)
}if(w(Cq,Cp)){Cj.inverted=false
}else{if(w(Cq,Cj.to)){Cj.inverted=false
}else{if(w(Cp,Cj.from)){Cj.inverted=true
}}}Cj.from=Cq;
Cj.to=Cp;
Af=true
}function Bd(Cq,Cn,Co){function Cp(Ct){var Cv=Cq.line+Ct,Cs=Ct==1?CJ.size:-1;
while(Cv!=Cs){var Cr=CQ(Cv);
if(!Cr.hidden){var Cu=Cq.ch;
if(Cu>Co||Cu>Cr.text.length){Cu=Cr.text.length
}return{line:Cv,ch:Cu}
}Cv+=Ct
}}var Cm=CQ(Cq.line);
if(!Cm.hidden){return Cq
}if(Cq.line>=Cn){return Cp(1)||Cp(-1)
}else{return Cp(-1)||Cp(1)
}}function Ax(Cm,Co,Cn){var Cp=Aj({line:Cm,ch:Co||0});
(Cn?BM:BL)(Cp,Cp)
}function Bk(Cm){return Math.max(0,Math.min(Cm,CJ.size-1))
}function Aj(Co){if(Co.line<0){return{line:0,ch:0}
}if(Co.line>=CJ.size){return{line:CJ.size-1,ch:CQ(CJ.size-1).text.length}
}var Cm=Co.ch,Cn=CQ(Co.line).text.length;
if(Cm==null||Cm>Cn){return{line:Co.line,ch:Cn}
}else{if(Cm<0){return{line:Co.line,ch:0}
}else{return Co
}}}function B9(Cp,Ct){var Cq=Cj.inverted?Cj.from:Cj.to,Cu=Cq.line,Cm=Cq.ch;
var Cs=CQ(Cu);
function Cn(){for(var Cv=Cu+Cp,Cx=Cp<0?-1:CJ.size;
Cv!=Cx;
Cv+=Cp){var Cw=CQ(Cv);
if(!Cw.hidden){Cu=Cv;
Cs=Cw;
return true
}}}function Cr(Cv){if(Cm==(Cp<0?0:Cs.text.length)){if(!Cv&&Cn()){Cm=Cp<0?Cs.text.length:0
}else{return false
}}else{Cm+=Cp
}return true
}if(Ct=="char"){Cr()
}else{if(Ct=="column"){Cr(true)
}else{if(Ct=="word"){var Co=false;
for(;
;
){if(Cp<0){if(!Cr()){break
}}if(y(Cs.text.charAt(Cm))){Co=true
}else{if(Co){if(Cp<0){Cp=1;
Cr()
}break
}}if(Cp>0){if(!Cr()){break
}}}}}}return{line:Cu,ch:Cm}
}function CP(Cm,Cn){var Co=Cm<0?Cj.from:Cj.to;
if(B3||w(Cj.from,Cj.to)){Co=B9(Cm,Cn)
}Ax(Co.line,Co.ch,true)
}function B7(Cm,Cn){if(!w(Cj.from,Cj.to)){Bc("",Cj.from,Cj.to)
}else{if(Cm<0){Bc("",B9(Cm,Cn),Cj.to)
}else{Bc("",Cj.from,B9(Cm,Cn))
}}Br=true
}var CG=null;
function CI(Cm,Cn){var Cp=0,Cq=Cd(Cj.inverted?Cj.from:Cj.to,true);
if(CG!=null){Cq.x=CG
}if(Cn=="page"){Cp=Math.min(A9.clientHeight,window.innerHeight||document.documentElement.clientHeight)
}else{if(Cn=="line"){Cp=Bb()
}}var Co=BU(Cq.x,Cq.y+Cp*Cm+2);
Ax(Co.line,Co.ch,true);
CG=Cq.x
}function BV(Cp){var Cn=CQ(Cp.line).text;
var Co=Cp.ch,Cm=Cp.ch;
while(Co>0&&y(Cn.charAt(Co-1))){--Co
}while(Cm<Cn.length&&y(Cn.charAt(Cm))){++Cm
}BM({line:Cp.line,ch:Co},{line:Cp.line,ch:Cm})
}function Aa(Cm){BM({line:Cm,ch:0},{line:Cm,ch:CQ(Cm).text.length})
}function CM(Co){if(w(Cj.from,Cj.to)){return BN(Cj.from.line,Co)
}var Cn=Cj.to.line-(Cj.to.ch?0:1);
for(var Cm=Cj.from.line;
Cm<=Cn;
++Cm){BN(Cm,Co)
}}function BN(Co,Cv){if(!Cv){Cv="add"
}if(Cv=="smart"){if(!Bw.indent){Cv="prev"
}else{var Cm=CF(Co)
}}var Cw=CQ(Co),Cq=Cw.indentation(Bm.tabSize),Cn=Cw.text.match(/^\s*/)[0],Cs;
if(Cv=="prev"){if(Co){Cs=CQ(Co-1).indentation(Bm.tabSize)
}else{Cs=0
}}else{if(Cv=="smart"){Cs=Bw.indent(Cm,Cw.text.slice(Cn.length),Cw.text)
}else{if(Cv=="add"){Cs=Cq+Bm.indentUnit
}else{if(Cv=="subtract"){Cs=Cq-Bm.indentUnit
}}}}Cs=Math.max(0,Cs);
var Cu=Cs-Cq;
if(!Cu){if(Cj.from.line!=Co&&Cj.to.line!=Co){return 
}var Ct=Cn
}else{var Ct="",Cr=0;
if(Bm.indentWithTabs){for(var Cp=Math.floor(Cs/Bm.tabSize);
Cp;
--Cp){Cr+=Bm.tabSize;
Ct+="\t"
}}while(Cr<Cs){++Cr;
Ct+=" "
}}Bc(Ct,{line:Co,ch:0},{line:Co,ch:Cn.length})
}function Bf(){Bw=Q.getMode(Bm,Bm.mode);
CJ.iter(0,CJ.size,function(Cm){Cm.stateAfter=null
});
B2=[0];
BT()
}function A4(){var Cm=Bm.gutter||Bm.lineNumbers;
AX.style.display=Cm?"":"none";
if(Cm){Ai=true
}else{AH.parentNode.style.marginLeft=0
}}function CR(Co,Cn){if(Bm.lineWrapping){AT.className+=" CodeMirror-wrap";
var Cm=A9.clientWidth/A7()-3;
CJ.iter(0,CJ.size,function(Cp){if(Cp.hidden){return 
}var Cq=Math.ceil(Cp.text.length/Cm)||1;
if(Cq!=1){Au(Cp,Cq)
}});
BJ.style.width=BZ.style.width=""
}else{AT.className=AT.className.replace(" CodeMirror-wrap","");
AV=null;
BQ="";
CJ.iter(0,CJ.size,function(Cp){if(Cp.height!=1&&!Cp.hidden){Au(Cp,1)
}if(Cp.text.length>BQ.length){BQ=Cp.text
}})
}AR.push({from:0,to:CJ.size})
}function Am(){for(var Cn='<span class="cm-tab">',Cm=0;
Cm<Bm.tabSize;
++Cm){Cn+=" "
}return Cn+"</span>"
}function Ch(){BI=Am();
By(true)
}function CO(){A9.className=A9.className.replace(/\s*cm-s-\w+/g,"")+Bm.theme.replace(/(^|\s)\s*/g," cm-s-")
}function Ck(){this.set=[]
}Ck.prototype.clear=AI(function(){var Cr=Infinity,Cn=-Infinity;
for(var Cq=0,Ct=this.set.length;
Cq<Ct;
++Cq){var Co=this.set[Cq],Cm=Co.marked;
if(!Cm||!Co.parent){continue
}var Cs=s(Co);
Cr=Math.min(Cr,Cs);
Cn=Math.max(Cn,Cs);
for(var Cp=0;
Cp<Cm.length;
++Cp){if(Cm[Cp].set==this.set){Cm.splice(Cp--,1)
}}}if(Cr!=Infinity){AR.push({from:Cr,to:Cn+1})
}});
Ck.prototype.find=function(){var Cr,Cs;
for(var Co=0,Cq=this.set.length;
Co<Cq;
++Co){var Cu=this.set[Co],Cp=Cu.marked;
for(var Cn=0;
Cn<Cp.length;
++Cn){var Cm=Cp[Cn];
if(Cm.set==this.set){if(Cm.from!=null||Cm.to!=null){var Ct=s(Cu);
if(Ct!=null){if(Cm.from!=null){Cr={line:Ct,ch:Cm.from}
}if(Cm.to!=null){Cs={line:Ct,ch:Cm.to}
}}}}}}return{from:Cr,to:Cs}
};
function BR(Cs,Cr,Co){Cs=Aj(Cs);
Cr=Aj(Cr);
var Cm=new Ck();
function Cq(Ct,Cw,Cv,Cu){CQ(Ct).addMark(new e(Cw,Cv,Cu,Cm.set))
}if(Cs.line==Cr.line){Cq(Cs.line,Cs.ch,Cr.ch,Co)
}else{Cq(Cs.line,Cs.ch,null,Co);
for(var Cn=Cs.line+1,Cp=Cr.line;
Cn<Cp;
++Cn){Cq(Cn,null,null,Co)
}Cq(Cr.line,null,Cr.ch,Co)
}AR.push({from:Cs.line,to:Cr.line+1});
return Cm
}function Ak(Cn){Cn=Aj(Cn);
var Cm=new a(Cn.ch);
CQ(Cn.line).addMark(Cm);
return Cm
}function Bh(Cm,Co,Cn){if(typeof Cm=="number"){Cm=CQ(Bk(Cm))
}Cm.gutterMarker={text:Co,style:Cn};
Ai=true;
return Cm
}function AK(Cm){if(typeof Cm=="number"){Cm=CQ(Bk(Cm))
}Cm.gutterMarker=null;
Ai=true
}function Ao(Cn,Cp){var Co=Cn,Cm=Cn;
if(typeof Cn=="number"){Cm=CQ(Bk(Cn))
}else{Co=s(Cn)
}if(Co==null){return null
}if(Cp(Cm,Co)){AR.push({from:Co,to:Co+1})
}else{return null
}return Cm
}function BA(Cn,Cm){return Ao(Cn,function(Co){if(Co.className!=Cm){Co.className=Cm;
return true
}})
}function CV(Cn,Cm){return Ao(Cn,function(Co,Cr){if(Co.hidden!=Cm){Co.hidden=Cm;
Au(Co,Cm?0:1);
var Cq=Cj.from.line,Cp=Cj.to.line;
if(Cm&&(Cq==Cr||Cp==Cr)){var Ct=Cq==Cr?Bd({line:Cq,ch:0},Cq,0):Cj.from;
var Cs=Cp==Cr?Bd({line:Cp,ch:0},Cp,0):Cj.to;
BL(Ct,Cs)
}return(Ai=true)
}})
}function Al(Cn){if(typeof Cn=="number"){if(!BF(Cn)){return null
}var Co=Cn;
Cn=CQ(Cn);
if(!Cn){return null
}}else{var Co=s(Cn);
if(Co==null){return null
}}var Cm=Cn.gutterMarker;
return{line:Co,handle:Cn,text:Cn.text,markerText:Cm&&Cm.text,markerClass:Cm&&Cm.style,lineClass:Cn.className}
}function CE(Cm){AL.innerHTML="<pre><span>x</span></pre>";
AL.firstChild.firstChild.firstChild.nodeValue=Cm;
return AL.firstChild.firstChild.offsetWidth||10
}function AW(Cy,Cs){if(Cs<=0){return 0
}var Cp=CQ(Cy),Cv=Cp.text;
function Cw(Cz){AL.innerHTML="<pre><span>"+Cp.getHTML(BI,Cz)+"</span></pre>";
return AL.firstChild.firstChild.offsetWidth
}var Ct=0,Cr=0,Cu=Cv.length,Cq;
var Cn=Math.min(Cu,Math.ceil(Cs/A7()));
for(;
;
){var Co=Cw(Cn);
if(Co<=Cs&&Cn<Cu){Cn=Math.min(Cu,Math.ceil(Cn*1.2))
}else{Cq=Co;
Cu=Cn;
break
}}if(Cs>Cq){return Cu
}Cn=Math.floor(Cu*0.8);
Co=Cw(Cn);
if(Co<Cs){Ct=Cn;
Cr=Co
}for(;
;
){if(Cu-Ct<=1){return(Cq-Cs>Cs-Cr)?Ct:Cu
}var Cx=Math.ceil((Ct+Cu)/2),Cm=Cw(Cx);
if(Cm>Cs){Cu=Cx;
Cq=Cm
}else{Ct=Cx;
Cr=Cm
}}}var CK=Math.floor(Math.random()*16777215).toString(16);
function Bq(Co,Cr){if(Cr==0){return{top:0,left:0}
}var Cm="";
if(Bm.lineWrapping){var Cn=Co.text.indexOf(" ",Cr+2);
Cm=j(Co.text.slice(Cr+1,Cn<0?Co.text.length:Cn+(c?5:0)))
}AL.innerHTML="<pre>"+Co.getHTML(BI,Cr)+'<span id="CodeMirror-temp-'+CK+'">'+j(Co.text.charAt(Cr)||" ")+"</span>"+Cm+"</pre>";
var Cq=document.getElementById("CodeMirror-temp-"+CK);
var Ct=Cq.offsetTop,Cs=Cq.offsetLeft;
if(c&&Ct==0&&Cs==0){var Cp=document.createElement("span");
Cp.innerHTML="x";
Cq.parentNode.insertBefore(Cp,Cq.nextSibling);
Ct=Cp.offsetTop
}return{top:Ct,left:Cs}
}function Cd(Cr,Cp){var Cm,Cn=Bb(),Cq=Cn*(F(CJ,Cr.line)-(Cp?A3:0));
if(Cr.ch==0){Cm=0
}else{var Co=Bq(CQ(Cr.line),Cr.ch);
Cm=Co.left;
if(Bm.lineWrapping){Cq+=Math.max(0,Co.top)
}}return{x:Cm,y:Cq,yBot:Cq+Cn}
}function BU(Cv,Cu){if(Cu<0){Cu=0
}var Cs=Bb(),Cq=A7(),C1=A3+Math.floor(Cu/Cs);
var Cw=r(CJ,C1);
if(Cw>=CJ.size){return{line:CJ.size-1,ch:CQ(CJ.size-1).text.length}
}var Cn=CQ(Cw),Cy=Cn.text;
var C3=Bm.lineWrapping,Ct=C3?C1-F(CJ,Cw):0;
if(Cv<=0&&Ct==0){return{line:Cw,ch:0}
}function C2(C5){var C6=Bq(Cn,C5);
if(C3){var C7=Math.round(C6.top/Cs);
return Math.max(0,C6.left+(C7-Ct)*A9.clientWidth)
}return C6.left
}var C0=0,Cz=0,Co=Cy.length,Cm;
var Cx=Math.min(Co,Math.ceil((Cv+Ct*A9.clientWidth*0.9)/Cq));
for(;
;
){var Cr=C2(Cx);
if(Cr<=Cv&&Cx<Co){Cx=Math.min(Co,Math.ceil(Cx*1.2))
}else{Cm=Cr;
Co=Cx;
break
}}if(Cv>Cm){return{line:Cw,ch:Co}
}Cx=Math.floor(Co*0.8);
Cr=C2(Cx);
if(Cr<Cv){C0=Cx;
Cz=Cr
}for(;
;
){if(Co-C0<=1){return{line:Cw,ch:(Cm-Cv>Cv-Cz)?C0:Co}
}var C4=Math.ceil((C0+Co)/2),Cp=C2(C4);
if(Cp>Cv){Co=C4;
Cm=Cp
}else{C0=C4;
Cz=Cp
}}}function AG(Co){var Cm=Cd(Co,true),Cn=AC(BJ);
return{x:Cn.left+Cm.x,y:Cn.top+Cm.y,yBot:Cn.top+Cm.yBot}
}var Ar,AN,Bg;
function Bb(){if(Bg==null){Bg="<pre>";
for(var Cn=0;
Cn<49;
++Cn){Bg+="x<br/>"
}Bg+="x</pre>"
}var Cm=AH.clientHeight;
if(Cm==AN){return Ar
}AN=Cm;
AL.innerHTML=Bg;
Ar=AL.firstChild.offsetHeight/50||1;
AL.innerHTML="";
return Ar
}var Ce,BK=0;
function A7(){if(A9.clientWidth==BK){return Ce
}BK=A9.clientWidth;
return(Ce=CE("x"))
}function CD(){return BJ.offsetTop
}function Aw(){return BJ.offsetLeft
}function At(Cq,Cp){var Co=AC(A9,true),Cm,Cr;
try{Cm=Cq.clientX;
Cr=Cq.clientY
}catch(Cq){return null
}if(!Cp&&(Cm-Co.left>A9.clientWidth||Cr-Co.top>A9.clientHeight)){return null
}var Cn=AC(BJ,true);
return BU(Cm-Cn.left,Cr-Cn.top)
}function As(Cn){var Cr=At(Cn);
if(!Cr||window.opera){return 
}if(w(Cj.from,Cj.to)||t(Cr,Cj.from)||!t(Cr,Cj.to)){AI(Ax)(Cr.line,Cr.ch)
}var Cq=BB.style.cssText;
Bj.style.position="absolute";
BB.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(Cn.clientY-5)+"px; left: "+(Cn.clientX-5)+"px; z-index: 1000; background: white; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
A5=true;
var Cp=BB.value=Bo();
BO();
BB.select();
function Cm(){var Cs=W(BB.value).join("\n");
if(Cs!=Cp){AI(BG)(Cs,"end")
}Bj.style.position="relative";
BB.style.cssText=Cq;
A5=false;
CN(true);
AE()
}if(h){S(Cn);
var Co=N(window,"mouseup",function(){Co();
setTimeout(Cm,20)
},true)
}else{setTimeout(Cm,50)
}}function CY(){clearInterval(Cb);
var Cm=true;
A2.style.visibility="";
Cb=setInterval(function(){A2.style.visibility=(Cm=!Cm)?"":"hidden"
},650)
}var BD={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"};
function Bz(Cs){var Cm=Cj.inverted?Cj.from:Cj.to,Cu=CQ(Cm.line),Cn=Cm.ch-1;
var Cr=(Cn>=0&&BD[Cu.text.charAt(Cn)])||BD[Cu.text.charAt(++Cn)];
if(!Cr){return 
}var Cv=Cr.charAt(0),Ct=Cr.charAt(1)==">",C5=Ct?1:-1,C0=Cu.styles;
for(var C6=Cn+1,C2=0,C4=C0.length;
C2<C4;
C2+=2){if((C6-=C0[C2].length)<=0){var C3=C0[C2+1];
break
}}var Cp=[Cu.text.charAt(Cn)],Cz=/[(){}[\]]/;
function Cx(DI,DD,DE){if(!DI.text){return 
}var DH=DI.styles,DC=Ct?0:DI.text.length-1,DF;
for(var C9=Ct?0:DH.length-2,DB=Ct?DH.length:-2;
C9!=DB;
C9+=2*C5){var DG=DH[C9];
if(DH[C9+1]!=null&&DH[C9+1]!=C3){DC+=C5*DG.length;
continue
}for(var C8=Ct?0:DG.length-1,C7=Ct?DG.length:-1;
C8!=C7;
C8+=C5,DC+=C5){if(DC>=DD&&DC<DE&&Cz.test(DF=DG.charAt(C8))){var DA=BD[DF];
if(DA.charAt(1)==">"==Ct){Cp.push(DF)
}else{if(Cp.pop()!=DA.charAt(0)){return{pos:DC,match:false}
}else{if(!Cp.length){return{pos:DC,match:true}
}}}}}}}for(var C2=Cm.line,C4=Ct?Math.min(C2+100,CJ.size):Math.max(-1,C2-100);
C2!=C4;
C2+=C5){var Cu=CQ(C2),Cq=C2==Cm.line;
var Cw=Cx(Cu,Cq&&Ct?Cn+1:0,Cq&&!Ct?Cn:Cu.text.length);
if(Cw){break
}}if(!Cw){Cw={pos:null,match:false}
}var C3=Cw.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";
var C1=BR({line:Cm.line,ch:Cn},{line:Cm.line,ch:Cn+1},C3),Co=Cw.pos!=null&&BR({line:C2,ch:Cw.pos},{line:C2,ch:Cw.pos+1},C3);
var Cy=AI(function(){C1.clear();
Co&&Co.clear()
});
if(Cs){setTimeout(Cy,800)
}else{Bp=Cy
}}function Ay(Cs){var Cr,Co;
for(var Cn=Cs,Cp=Cs-40;
Cn>Cp;
--Cn){if(Cn==0){return 0
}var Cm=CQ(Cn-1);
if(Cm.stateAfter){return Cn
}var Cq=Cm.indentation(Bm.tabSize);
if(Co==null||Cr>Cq){Co=Cn-1;
Cr=Cq
}}return Co
}function CF(Co){var Cn=Ay(Co),Cm=Cn&&CQ(Cn-1).stateAfter;
if(!Cm){Cm=p(Bw)
}else{Cm=L(Bw,Cm)
}CJ.iter(Cn,Co,function(Cp){Cp.highlight(Bw,Cm,Bm.tabSize);
Cp.stateAfter=L(Bw,Cm)
});
if(Cn<Co){AR.push({from:Cn,to:Co})
}if(Co<CJ.size&&!CQ(Co).stateAfter){B2.push(Co)
}return Cm
}function CS(Co,Cm){var Cn=CF(Co);
CJ.iter(Co,Cm,function(Cp){Cp.highlight(Bw,Cn,Bm.tabSize);
Cp.stateAfter=L(Bw,Cn)
})
}function Be(){var Cs=+new Date+Bm.workTime;
var Cv=B2.length;
while(B2.length){if(!CQ(Cc).stateAfter){var Cp=Cc
}else{var Cp=B2.pop()
}if(Cp>=CJ.size){continue
}var Cn=Ay(Cp),Cm=Cn&&CQ(Cn-1).stateAfter;
if(Cm){Cm=L(Bw,Cm)
}else{Cm=p(Bw)
}var Cr=0,Co=Bw.compareStates,Cu=false,Ct=Cn,Cq=false;
CJ.iter(Ct,CJ.size,function(Cw){var Cx=Cw.stateAfter;
if(+new Date>Cs){B2.push(Ct);
BT(Bm.workDelay);
if(Cu){AR.push({from:Cp,to:Ct+1})
}return(Cq=true)
}var Cy=Cw.highlight(Bw,Cm,Bm.tabSize);
if(Cy){Cu=true
}Cw.stateAfter=L(Bw,Cm);
if(Co){if(Cx&&Co(Cx,Cm)){return true
}}else{if(Cy!==false||!Cx){Cr=0
}else{if(++Cr>3&&(!Bw.indent||Bw.indent(Cx,"")==Bw.indent(Cm,""))){return true
}}}++Ct
});
if(Cq){return 
}if(Cu){AR.push({from:Cp,to:Ct+1})
}}if(Cv&&Bm.onHighlightComplete){Bm.onHighlightComplete(Bu)
}}function BT(Cm){if(!B2.length){return 
}AM.set(Cm,AI(Be))
}function Ad(){CA=Br=CZ=null;
AR=[];
Af=false;
CL=[]
}function AO(){var Cq=false,Cn;
if(Af){Cq=!B0()
}if(AR.length){Cn=By(AR,true)
}else{if(Af){Ci()
}if(Ai){Ab()
}}if(Cq){B0()
}if(Af){Cl();
CY()
}if(B4&&!A5&&(CA===true||(CA!==false&&Af))){CN(Br)
}if(Af&&Bm.matchBrackets){setTimeout(AI(function(){if(Bp){Bp();
Bp=null
}if(w(Cj.from,Cj.to)){Bz(false)
}}),20)
}var Cm=CZ,Co=CL;
if(Af&&Bm.onCursorActivity){Bm.onCursorActivity(Bu)
}if(Cm&&Bm.onChange&&Bu){Bm.onChange(Bu,Cm)
}for(var Cp=0;
Cp<Co.length;
++Cp){Co[Cp](Bu)
}if(Cn&&Bm.onUpdate){Bm.onUpdate(Bu)
}}var CB=0;
function AI(Cm){return function(){if(!CB++){Ad()
}try{var Cn=Cm.apply(this,arguments)
}finally{if(!--CB){AO()
}}return Cn
}
}for(var BW in v){if(v.propertyIsEnumerable(BW)&&!Bu.propertyIsEnumerable(BW)){Bu[BW]=v[BW]
}}return Bu
}Q.defaults={value:"",mode:null,theme:"default",indentUnit:2,indentWithTabs:false,smartIndent:true,tabSize:4,keyMap:"default",extraKeys:null,electricChars:true,onKeyEvent:null,lineWrapping:false,lineNumbers:false,gutter:false,fixedGutter:false,firstLineNumber:1,readOnly:false,onChange:null,onCursorActivity:null,onGutterClick:null,onHighlightComplete:null,onUpdate:null,onFocus:null,onBlur:null,onScroll:null,matchBrackets:false,workTime:100,workDelay:200,pollInterval:100,undoDepth:40,tabindex:null,document:window.document};
var O=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent);
var g=O||/Mac/.test(navigator.platform);
var o=/Win/.test(navigator.platform);
var AB={},m={};
Q.defineMode=function(AE,AF){if(!Q.defaults.mode&&AE!="null"){Q.defaults.mode=AE
}AB[AE]=AF
};
Q.defineMIME=function(AF,AE){m[AF]=AE
};
Q.getMode=function(AG,AE){if(typeof AE=="string"&&m.hasOwnProperty(AE)){AE=m[AE]
}if(typeof AE=="string"){var AI=AE,AF={}
}else{if(AE!=null){var AI=AE.name,AF=AE
}}var AH=AB[AI];
if(!AH){if(window.console){console.warn("No mode "+AI+" found, falling back to plain text.")
}return Q.getMode(AG,"text/plain")
}return AH(AG,AF||{})
};
Q.listModes=function(){var AF=[];
for(var AE in AB){if(AB.propertyIsEnumerable(AE)){AF.push(AE)
}}return AF
};
Q.listMIMEs=function(){var AF=[];
for(var AE in m){if(m.propertyIsEnumerable(AE)){AF.push({mime:AE,mode:m[AE]})
}}return AF
};
var v=Q.extensions={};
Q.defineExtension=function(AE,AF){v[AE]=AF
};
var f=Q.commands={selectAll:function(AE){AE.setSelection({line:0,ch:0},{line:AE.lineCount()-1})
},killLine:function(AE){var AH=AE.getCursor(true),AG=AE.getCursor(false),AF=!w(AH,AG);
if(!AF&&AE.getLine(AH.line).length==AH.ch){AE.replaceRange("",AH,{line:AH.line+1,ch:0})
}else{AE.replaceRange("",AH,AF?AG:{line:AH.line})
}},deleteLine:function(AE){var AF=AE.getCursor().line;
AE.replaceRange("",{line:AF,ch:0},{line:AF})
},undo:function(AE){AE.undo()
},redo:function(AE){AE.redo()
},goDocStart:function(AE){AE.setCursor(0,0,true)
},goDocEnd:function(AE){AE.setSelection({line:AE.lineCount()-1},null,true)
},goLineStart:function(AE){AE.setCursor(AE.getCursor().line,0,true)
},goLineStartSmart:function(AE){var AH=AE.getCursor();
var AG=AE.getLine(AH.line),AF=Math.max(0,AG.search(/\S/));
AE.setCursor(AH.line,AH.ch<=AF&&AH.ch?0:AF,true)
},goLineEnd:function(AE){AE.setSelection({line:AE.getCursor().line},null,true)
},goLineUp:function(AE){AE.moveV(-1,"line")
},goLineDown:function(AE){AE.moveV(1,"line")
},goPageUp:function(AE){AE.moveV(-1,"page")
},goPageDown:function(AE){AE.moveV(1,"page")
},goCharLeft:function(AE){AE.moveH(-1,"char")
},goCharRight:function(AE){AE.moveH(1,"char")
},goColumnLeft:function(AE){AE.moveH(-1,"column")
},goColumnRight:function(AE){AE.moveH(1,"column")
},goWordLeft:function(AE){AE.moveH(-1,"word")
},goWordRight:function(AE){AE.moveH(1,"word")
},delCharLeft:function(AE){AE.deleteH(-1,"char")
},delCharRight:function(AE){AE.deleteH(1,"char")
},delWordLeft:function(AE){AE.deleteH(-1,"word")
},delWordRight:function(AE){AE.deleteH(1,"word")
},indentAuto:function(AE){AE.indentSelection("smart")
},indentMore:function(AE){AE.indentSelection("add")
},indentLess:function(AE){AE.indentSelection("subtract")
},insertTab:function(AE){AE.replaceSelection("\t","end")
},transposeChars:function(AE){var AG=AE.getCursor(),AF=AE.getLine(AG.line);
if(AG.ch>0&&AG.ch<AF.length-1){AE.replaceRange(AF.charAt(AG.ch)+AF.charAt(AG.ch-1),{line:AG.line,ch:AG.ch-1},{line:AG.line,ch:AG.ch+1})
}},newlineAndIndent:function(AE){AE.replaceSelection("\n","end");
AE.indentLine(AE.getCursor().line)
},toggleOverwrite:function(AE){AE.toggleOverwrite()
}};
var R=Q.keyMap={};
R.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharRight",Backspace:"delCharLeft",Tab:"indentMore","Shift-Tab":"indentLess",Enter:"newlineAndIndent",Insert:"toggleOverwrite"};
R.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Alt-Up":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Down":"goDocEnd","Ctrl-Left":"goWordLeft","Ctrl-Right":"goWordRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delWordLeft","Ctrl-Delete":"delWordRight","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll",fallthrough:"basic"};
R.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goWordLeft","Alt-Right":"goWordRight","Cmd-Left":"goLineStart","Cmd-Right":"goLineEnd","Alt-Backspace":"delWordLeft","Ctrl-Alt-Backspace":"delWordRight","Alt-Delete":"delWordRight","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll",fallthrough:["basic","emacsy"]};
R["default"]=g?R.macDefault:R.pcDefault;
R.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageUp","Shift-Ctrl-V":"goPageDown","Ctrl-D":"delCharRight","Ctrl-H":"delCharLeft","Alt-D":"delWordRight","Alt-Backspace":"delWordLeft","Ctrl-K":"killLine","Ctrl-T":"transposeChars"};
function J(AF,AE,AH){function AG(AI,AM,AN){var AK=AM[AI];
if(AK!=null){return AK
}if(AN==null){AN=AM.fallthrough
}if(AN==null){return AM.catchall
}if(typeof AN=="string"){return AG(AI,R[AN])
}for(var AJ=0,AL=AN.length;
AJ<AL;
++AJ){AK=AG(AI,R[AN[AJ]]);
if(AK!=null){return AK
}}return null
}return AE?AG(AF,AE,AH):AG(AF,R[AH])
}function k(AF){var AE=l[U(AF,"keyCode")];
return AE=="Ctrl"||AE=="Alt"||AE=="Shift"||AE=="Mod"
}Q.fromTextArea=function(AF,AH){if(!AH){AH={}
}AH.value=AF.value;
if(!AH.tabindex&&AF.tabindex){AH.tabindex=AF.tabindex
}function AJ(){AF.value=AE.getValue()
}if(AF.form){var AI=N(AF.form,"submit",AJ,true);
if(typeof AF.form.submit=="function"){var AG=AF.form.submit;
function AK(){AJ();
AF.form.submit=AG;
AF.form.submit();
AF.form.submit=AK
}AF.form.submit=AK
}}AF.style.display="none";
var AE=Q(function(AL){AF.parentNode.insertBefore(AL,AF.nextSibling)
},AH);
AE.save=AJ;
AE.getTextArea=function(){return AF
};
AE.toTextArea=function(){AJ();
AF.parentNode.removeChild(AE.getWrapperElement());
AF.style.display="";
if(AF.form){AI();
if(typeof AF.form.submit=="function"){AF.form.submit=AG
}}};
return AE
};
function L(AH,AE){if(AE===true){return AE
}if(AH.copyState){return AH.copyState(AE)
}var AG={};
for(var AI in AE){var AF=AE[AI];
if(AF instanceof Array){AF=AF.concat([])
}AG[AI]=AF
}return AG
}Q.copyState=L;
function p(AG,AF,AE){return AG.startState?AG.startState(AF,AE):true
}Q.startState=p;
function B(AE,AF){this.pos=this.start=0;
this.string=AE;
this.tabSize=AF||8
}B.prototype={eol:function(){return this.pos>=this.string.length
},sol:function(){return this.pos==0
},peek:function(){return this.string.charAt(this.pos)
},next:function(){if(this.pos<this.string.length){return this.string.charAt(this.pos++)
}},eat:function(AE){var AG=this.string.charAt(this.pos);
if(typeof AE=="string"){var AF=AG==AE
}else{var AF=AG&&(AE.test?AE.test(AG):AE(AG))
}if(AF){++this.pos;
return AG
}},eatWhile:function(AE){var AF=this.pos;
while(this.eat(AE)){}return this.pos>AF
},eatSpace:function(){var AE=this.pos;
while(/[\s\u00a0]/.test(this.string.charAt(this.pos))){++this.pos
}return this.pos>AE
},skipToEnd:function(){this.pos=this.string.length
},skipTo:function(AE){var AF=this.string.indexOf(AE,this.pos);
if(AF>-1){this.pos=AF;
return true
}},backUp:function(AE){this.pos-=AE
},column:function(){return K(this.string,this.start,this.tabSize)
},indentation:function(){return K(this.string,null,this.tabSize)
},match:function(AH,AF,AE){if(typeof AH=="string"){function AI(AJ){return AE?AJ.toLowerCase():AJ
}if(AI(this.string).indexOf(AI(AH),this.pos)==this.pos){if(AF!==false){this.pos+=AH.length
}return true
}}else{var AG=this.string.slice(this.pos).match(AH);
if(AG&&AF!==false){this.pos+=AG[0].length
}return AG
}},current:function(){return this.string.slice(this.start,this.pos)
}};
Q.StringStream=B;
function e(AH,AG,AE,AF){this.from=AH;
this.to=AG;
this.style=AE;
this.set=AF
}e.prototype={attach:function(AE){this.set.push(AE)
},detach:function(AF){var AE=M(this.set,AF);
if(AE>-1){this.set.splice(AE,1)
}},split:function(AH,AE){if(this.to<=AH&&this.to!=null){return null
}var AG=this.from<AH||this.from==null?null:this.from-AH+AE;
var AF=this.to==null?null:this.to-AH+AE;
return new e(AG,AF,this.style,this.set)
},dup:function(){return new e(null,null,this.style,this.set)
},clipTo:function(AF,AI,AE,AH,AG){if(this.from!=null&&this.from>=AI){this.from=Math.max(AH,this.from)+AG
}if(this.to!=null&&this.to>AI){this.to=AH<this.to?this.to+AG:AI
}if(AF&&AH>this.from&&(AH<this.to||this.to==null)){this.from=null
}if(AE&&(AI<this.to||this.to==null)&&(AI>this.from||this.from==null)){this.to=null
}},isDead:function(){return this.from!=null&&this.to!=null&&this.from>=this.to
},sameSet:function(AE){return this.set==AE.set
}};
function a(AE){this.from=AE;
this.to=AE;
this.line=null
}a.prototype={attach:function(AE){this.line=AE
},detach:function(AE){if(this.line==AE){this.line=null
}},split:function(AF,AE){if(AF<this.from){this.from=this.to=(this.from-AF)+AE;
return this
}},isDead:function(){return this.from>this.to
},clipTo:function(AF,AI,AE,AH,AG){if((AF||AI<this.from)&&(AE||AH>this.to)){this.from=0;
this.to=-1
}else{if(this.from>AI){this.from=this.to=Math.max(AH,this.from)+AG
}}},sameSet:function(AE){return false
},find:function(){if(!this.line||!this.line.parent){return null
}return{line:s(this.line),ch:this.from}
},clear:function(){if(this.line){var AE=M(this.line.marked,this);
if(AE!=-1){this.line.marked.splice(AE,1)
}this.line=null
}}};
function D(AF,AE){this.styles=AE||[AF,null];
this.text=AF;
this.height=1;
this.marked=this.gutterMarker=this.className=this.handlers=null;
this.stateAfter=this.parent=this.hidden=null
}D.inheritMarks=function(AI,AL){var AH=new D(AI),AE=AL&&AL.marked;
if(AE){for(var AG=0;
AG<AE.length;
++AG){if(AE[AG].to==null&&AE[AG].style){var AF=AH.marked||(AH.marked=[]),AK=AE[AG];
var AJ=AK.dup();
AF.push(AJ);
AJ.attach(AH)
}}}return AH
};
D.prototype={replace:function(AI,AH,AL){var AM=[],AG=this.marked,AJ=AH==null?this.text.length:AH;
AD(0,AI,this.styles,AM);
if(AL){AM.push(AL,null)
}AD(AJ,this.text.length,this.styles,AM);
this.styles=AM;
this.text=this.text.slice(0,AI)+AL+this.text.slice(AJ);
this.stateAfter=null;
if(AG){var AK=AL.length-(AJ-AI);
for(var AF=0;
AF<AG.length;
++AF){var AE=AG[AF];
AE.clipTo(AI==null,AI||0,AH==null,AJ,AK);
if(AE.isDead()){AE.detach(this);
AG.splice(AF--,1)
}}}},split:function(AL,AJ){var AH=[AJ,null],AF=this.marked;
AD(AL,this.text.length,this.styles,AH);
var AG=new D(AJ+this.text.slice(AL),AH);
if(AF){for(var AI=0;
AI<AF.length;
++AI){var AK=AF[AI];
var AE=AK.split(AL,AJ.length);
if(AE){if(!AG.marked){AG.marked=[]
}AG.marked.push(AE);
AE.attach(AG)
}}}return AG
},append:function(AF){var AK=this.text.length,AE=AF.marked,AI=this.marked;
this.text+=AF.text;
AD(0,AF.text.length,AF.styles,this.styles);
if(AI){for(var AJ=0;
AJ<AI.length;
++AJ){if(AI[AJ].to==null){AI[AJ].to=AK
}}}if(AE&&AE.length){if(!AI){this.marked=AI=[]
}outer:for(var AJ=0;
AJ<AE.length;
++AJ){var AL=AE[AJ];
if(!AL.from){for(var AH=0;
AH<AI.length;
++AH){var AG=AI[AH];
if(AG.to==AK&&AG.sameSet(AL)){AG.to=AL.to==null?null:AL.to+AK;
if(AG.isDead()){AG.detach(this);
AE.splice(AJ--,1)
}continue outer
}}}AI.push(AL);
AL.attach(this);
AL.from+=AK;
if(AL.to!=null){AL.to+=AK
}}}},fixMarkEnds:function(AF){var AE=this.marked,AI=AF.marked;
if(!AE){return 
}for(var AH=0;
AH<AE.length;
++AH){var AK=AE[AH],AJ=AK.to==null;
if(AJ&&AI){for(var AG=0;
AG<AI.length;
++AG){if(AI[AG].sameSet(AK)){AJ=false;
break
}}}if(AJ){AK.to=this.text.length
}}},fixMarkStarts:function(){var AE=this.marked;
if(!AE){return 
}for(var AF=0;
AF<AE.length;
++AF){if(AE[AF].from==null){AE[AF].from=0
}}},addMark:function(AE){AE.attach(this);
if(this.marked==null){this.marked=[]
}this.marked.push(AE);
this.marked.sort(function(AG,AF){return(AG.from||0)-(AF.from||0)
})
},highlight:function(AJ,AF,AK){var AN=new B(this.text,AK),AO=this.styles,AL=0;
var AI=false,AG=AO[0],AM;
if(this.text==""&&AJ.blankLine){AJ.blankLine(AF)
}while(!AN.eol()){var AE=AJ.token(AN,AF);
var AH=this.text.slice(AN.start,AN.pos);
AN.start=AN.pos;
if(AL&&AO[AL-1]==AE){AO[AL-2]+=AH
}else{if(AH){if(!AI&&(AO[AL+1]!=AE||(AL&&AO[AL-2]!=AM))){AI=true
}AO[AL++]=AH;
AO[AL++]=AE;
AM=AG;
AG=AO[AL]
}}if(AN.pos>5000){AO[AL++]=this.text.slice(AN.pos);
AO[AL++]=null;
break
}}if(AO.length!=AL){AO.length=AL;
AI=true
}if(AL&&AO[AL-2]!=AM){AI=true
}return AI||(AO.length<5&&this.text.length<10?null:false)
},getTokenAt:function(AJ,AH,AG){var AE=this.text,AI=new B(AE);
while(AI.pos<AG&&!AI.eol()){AI.start=AI.pos;
var AF=AJ.token(AI,AH)
}return{start:AI.start,end:AI.pos,string:AI.current(),className:AF||null,state:AH}
},indentation:function(AE){return K(this.text,null,AE)
},getHTML:function(AO,AT){var AK=[],AI=true;
function AX(Ag,Af){if(!Ag){return 
}if(AI&&c&&Ag.charAt(0)==" "){Ag="\u00a0"+Ag.slice(1)
}AI=false;
if(Af){AK.push('<span class="',Af,'">',j(Ag).replace(/\t/g,AO),"</span>")
}else{AK.push(j(Ag).replace(/\t/g,AO))
}}var AR=this.styles,AJ=this.text,AP=this.marked;
var Aa=AJ.length;
if(AT!=null){Aa=Math.min(AT,Aa)
}function AG(Af){if(!Af){return null
}return"cm-"+Af.replace(/ +/g," cm-")
}if(!AJ&&AT==null){AX(" ")
}else{if(!AP||!AP.length){for(var AY=0,AL=0;
AL<Aa;
AY+=2){var AS=AR[AY],Ab=AR[AY+1],AU=AS.length;
if(AL+AU>Aa){AS=AS.slice(0,Aa-AL)
}AL+=AU;
AX(AS,AG(Ab))
}}else{var AH=0,AY=0,AN="",Ab,Ae=0;
var Ad=AP[0].from||0,AW=[],Ac=0;
function AZ(){var Af;
while(Ac<AP.length&&((Af=AP[Ac]).from==AH||Af.from==null)){if(Af.style!=null){AW.push(Af)
}++Ac
}Ad=Ac<AP.length?AP[Ac].from:Infinity;
for(var Ag=0;
Ag<AW.length;
++Ag){var Ah=AW[Ag].to||Infinity;
if(Ah==AH){AW.splice(Ag--,1)
}else{Ad=Math.min(Ah,Ad)
}}}var AQ=0;
while(AH<Aa){if(Ad==AH){AZ()
}var AM=Math.min(Aa,Ad);
while(true){if(AN){var AF=AH+AN.length;
var AE=Ab;
for(var AV=0;
AV<AW.length;
++AV){AE=(AE?AE+" ":"")+AW[AV].style
}AX(AF>AM?AN.slice(0,AM-AH):AN,AE);
if(AF>=AM){AN=AN.slice(AM-AH);
AH=AM;
break
}AH=AF
}AN=AR[AY++];
Ab=AG(AR[AY++])
}}}}return AK.join("")
},cleanUp:function(){this.parent=null;
if(this.marked){for(var AE=0,AF=this.marked.length;
AE<AF;
++AE){this.marked[AE].detach(this)
}}}};
function AD(AK,AL,AE,AM){for(var AI=0,AJ=0,AF=0;
AJ<AL;
AI+=2){var AG=AE[AI],AH=AJ+AG.length;
if(AF==0){if(AH>AK){AM.push(AG.slice(AK-AJ,Math.min(AG.length,AL-AJ)),AE[AI+1])
}if(AH>=AK){AF=1
}}else{if(AF==1){if(AH>AL){AM.push(AG.slice(0,AL-AJ),AE[AI+1])
}else{AM.push(AG,AE[AI+1])
}}}AJ=AH
}}function z(AF){this.lines=AF;
this.parent=null;
for(var AG=0,AH=AF.length,AE=0;
AG<AH;
++AG){AF[AG].parent=this;
AE+=AF[AG].height
}this.height=AE
}z.prototype={chunkSize:function(){return this.lines.length
},remove:function(AE,AK,AI){for(var AH=AE,AJ=AE+AK;
AH<AJ;
++AH){var AF=this.lines[AH];
this.height-=AF.height;
AF.cleanUp();
if(AF.handlers){for(var AG=0;
AG<AF.handlers.length;
++AG){AI.push(AF.handlers[AG])
}}}this.lines.splice(AE,AK)
},collapse:function(AE){AE.splice.apply(AE,[AE.length,0].concat(this.lines))
},insertHeight:function(AF,AG,AE){this.height+=AE;
this.lines.splice.apply(this.lines,[AF,0].concat(AG));
for(var AH=0,AI=AG.length;
AH<AI;
++AH){AG[AH].parent=this
}},iterN:function(AE,AH,AG){for(var AF=AE+AH;
AE<AF;
++AE){if(AG(this.lines[AE])){return true
}}}};
function G(AH){this.children=AH;
var AG=0,AE=0;
for(var AF=0,AJ=AH.length;
AF<AJ;
++AF){var AI=AH[AF];
AG+=AI.chunkSize();
AE+=AI.height;
AI.parent=this
}this.size=AG;
this.height=AE;
this.parent=null
}G.prototype={chunkSize:function(){return this.size
},remove:function(AG,AF,AJ){this.size-=AF;
for(var AH=0;
AH<this.children.length;
++AH){var AE=this.children[AH],AK=AE.chunkSize();
if(AG<AK){var AI=Math.min(AF,AK-AG),AL=AE.height;
AE.remove(AG,AI,AJ);
this.height-=AL-AE.height;
if(AK==AI){this.children.splice(AH--,1);
AE.parent=null
}if((AF-=AI)==0){break
}AG=0
}else{AG-=AK
}}if(this.size-AF<25){var AM=[];
this.collapse(AM);
this.children=[new z(AM)];
this.children[0].parent=this
}},collapse:function(AE){for(var AF=0,AG=this.children.length;
AF<AG;
++AF){this.children[AF].collapse(AE)
}},insert:function(AF,AG){var AE=0;
for(var AH=0,AI=AG.length;
AH<AI;
++AH){AE+=AG[AH].height
}this.insertHeight(AF,AG,AE)
},insertHeight:function(AF,AM,AL){this.size+=AM.length;
this.height+=AL;
for(var AG=0,AI=this.children.length;
AG<AI;
++AG){var AE=this.children[AG],AJ=AE.chunkSize();
if(AF<=AJ){AE.insertHeight(AF,AM,AL);
if(AE.lines&&AE.lines.length>50){while(AE.lines.length>50){var AH=AE.lines.splice(AE.lines.length-25,25);
var AK=new z(AH);
AE.height-=AK.height;
this.children.splice(AG+1,0,AK);
AK.parent=this
}this.maybeSpill()
}break
}AF-=AJ
}},maybeSpill:function(){if(this.children.length<=10){return 
}var AH=this;
do{var AF=AH.children.splice(AH.children.length-5,5);
var AG=new G(AF);
if(!AH.parent){var AI=new G(AH.children);
AI.parent=AH;
AH.children=[AI,AG];
AH=AI
}else{AH.size-=AG.size;
AH.height-=AG.height;
var AE=M(AH.parent.children,AH);
AH.parent.children.splice(AE+1,0,AG)
}AG.parent=AH.parent
}while(AH.children.length>10);
AH.parent.maybeSpill()
},iter:function(AG,AF,AE){this.iterN(AG,AF-AG,AE)
},iterN:function(AE,AL,AK){for(var AF=0,AI=this.children.length;
AF<AI;
++AF){var AJ=this.children[AF],AH=AJ.chunkSize();
if(AE<AH){var AG=Math.min(AL,AH-AE);
if(AJ.iterN(AE,AG,AK)){return true
}if((AL-=AG)==0){break
}AE=0
}else{AE-=AH
}}}};
function X(AE,AI){while(!AE.lines){for(var AF=0;
;
++AF){var AH=AE.children[AF],AG=AH.chunkSize();
if(AI<AG){AE=AH;
break
}AI-=AG
}}return AE.lines[AI]
}function s(AE){if(AE.parent==null){return null
}var AJ=AE.parent,AI=M(AJ.lines,AE);
for(var AF=AJ.parent;
AF;
AJ=AF,AF=AF.parent){for(var AG=0,AH=AF.children.length;
;
++AG){if(AF.children[AG]==AJ){break
}AI+=AF.children[AG].chunkSize()
}}return AI
}function r(AK,AI){var AG=0;
outer:do{for(var AH=0,AJ=AK.children.length;
AH<AJ;
++AH){var AF=AK.children[AH],AE=AF.height;
if(AI<AE){AK=AF;
continue outer
}AI-=AE;
AG+=AF.chunkSize()
}return AG
}while(!AK.lines);
for(var AH=0,AJ=AK.lines.length;
AH<AJ;
++AH){var AM=AK.lines[AH],AL=AM.height;
if(AI<AL){break
}AI-=AL
}return AG+AH
}function F(AE,AK){var AG=0;
outer:do{for(var AF=0,AI=AE.children.length;
AF<AI;
++AF){var AJ=AE.children[AF],AH=AJ.chunkSize();
if(AK<AH){AE=AJ;
continue outer
}AK-=AH;
AG+=AJ.height
}return AG
}while(!AE.lines);
for(var AF=0;
AF<AK;
++AF){AG+=AE.lines[AF].height
}return AG
}function I(){this.time=0;
this.done=[];
this.undone=[]
}I.prototype={addChange:function(AE,AK,AF){this.undone.length=0;
var AG=+new Date,AM=this.done[this.done.length-1],AN=AM&&AM[AM.length-1];
var AI=AG-this.time;
if(AI>400||!AN){this.done.push([{start:AE,added:AK,old:AF}])
}else{if(AN.start>AE+AK||AN.start+AN.added<AE-AN.added+AN.old.length){AM.push({start:AE,added:AK,old:AF})
}else{var AL=0;
if(AE<AN.start){for(var AH=AN.start-AE-1;
AH>=0;
--AH){AN.old.unshift(AF[AH])
}AN.added+=AN.start-AE;
AN.start=AE
}else{if(AN.start<AE){AL=AE-AN.start;
AK+=AL
}}for(var AH=AN.added-AL,AJ=AF.length;
AH<AJ;
++AH){AN.old.push(AF[AH])
}if(AN.added<AK){AN.added=AK
}}}this.time=AG
}};
function d(){S(this)
}function i(AE){if(!AE.stop){AE.stop=d
}return AE
}function n(AE){if(AE.preventDefault){AE.preventDefault()
}else{AE.returnValue=false
}}function Y(AE){if(AE.stopPropagation){AE.stopPropagation()
}else{AE.cancelBubble=true
}}function S(AE){n(AE);
Y(AE)
}Q.e_stop=S;
Q.e_preventDefault=n;
Q.e_stopPropagation=Y;
function H(AE){return AE.target||AE.srcElement
}function T(AE){if(AE.which){return AE.which
}else{if(AE.button&1){return 1
}else{if(AE.button&2){return 3
}else{if(AE.button&4){return 2
}}}}}function U(AF,AG){var AE=AF.override&&AF.override.hasOwnProperty(AG);
return AE?AF.override[AG]:AF[AG]
}function N(AH,AG,AF,AE){if(typeof AH.addEventListener=="function"){AH.addEventListener(AG,AF,false);
if(AE){return function(){AH.removeEventListener(AG,AF,false)
}
}}else{var AI=function(AJ){AF(AJ||window.event)
};
AH.attachEvent("on"+AG,AI);
if(AE){return function(){AH.detachEvent("on"+AG,AI)
}
}}}Q.connect=N;
function V(){this.id=null
}V.prototype={set:function(AE,AF){clearTimeout(this.id);
this.id=setTimeout(AF,AE)
}};
var Z=function(){if(/MSIE [1-8]\b/.test(navigator.userAgent)){return false
}var AE=document.createElement("div");
return"draggable" in AE
}();
var h=/gecko\/\d{7}/i.test(navigator.userAgent);
var c=/MSIE \d/.test(navigator.userAgent);
var E=/WebKit\//.test(navigator.userAgent);
var C="\n";
(function(){var AE=document.createElement("textarea");
AE.value="foo\nbar";
if(AE.value.indexOf("\r")>-1){C="\r\n"
}}());
function K(AF,AE,AH){if(AE==null){AE=AF.search(/[^\s\u00a0]/);
if(AE==-1){AE=AF.length
}}for(var AG=0,AI=0;
AG<AE;
++AG){if(AF.charAt(AG)=="\t"){AI+=AH-(AI%AH)
}else{++AI
}}return AI
}function P(AE){if(AE.currentStyle){return AE.currentStyle
}return window.getComputedStyle(AE,null)
}function AC(AF,AN){var AH=AF.ownerDocument.body;
var AM=0,AL=0,AJ=false;
for(var AE=AF;
AE;
AE=AE.offsetParent){var AK=AE.offsetLeft,AG=AE.offsetTop;
if(AE==AH){AM+=Math.abs(AK);
AL+=Math.abs(AG)
}else{AM+=AK,AL+=AG
}if(AN&&P(AE).position=="fixed"){AJ=true
}}var AI=AN&&!AJ?null:AH;
for(var AE=AF.parentNode;
AE!=AI;
AE=AE.parentNode){if(AE.scrollLeft!=null){AM-=AE.scrollLeft;
AL-=AE.scrollTop
}}return{left:AM,top:AL}
}if(document.documentElement.getBoundingClientRect!=null){AC=function(AH,AE){try{var AG=AH.getBoundingClientRect();
AG={top:AG.top,left:AG.left}
}catch(AI){AG={top:0,left:0}
}if(!AE){if(window.pageYOffset==null){var AF=document.documentElement||document.body.parentNode;
if(AF.scrollTop==null){AF=document.body
}AG.top+=AF.scrollTop;
AG.left+=AF.scrollLeft
}else{AG.top+=window.pageYOffset;
AG.left+=window.pageXOffset
}}return AG
}
}function b(AE){return AE.textContent||AE.innerText||AE.nodeValue||""
}function A(AE){if(O){AE.selectionStart=0;
AE.selectionEnd=AE.value.length
}else{AE.select()
}}function w(AF,AE){return AF.line==AE.line&&AF.ch==AE.ch
}function t(AF,AE){return AF.line<AE.line||(AF.line==AE.line&&AF.ch<AE.ch)
}function u(AE){return{line:AE.line,ch:AE.ch}
}var AA=document.createElement("pre");
function j(AE){AA.textContent=AE;
return AA.innerHTML
}if(j("a")=="\na"){j=function(AE){AA.textContent=AE;
return AA.innerHTML.slice(1)
}
}else{if(j("\t")!="\t"){j=function(AE){AA.innerHTML="";
AA.appendChild(document.createTextNode(AE));
return AA.innerHTML
}
}}Q.htmlEscape=j;
function q(AH,AG){if(!AG){return 0
}if(!AH){return AG.length
}for(var AF=AH.length,AE=AG.length;
AF>=0&&AE>=0;
--AF,--AE){if(AH.charAt(AF)!=AG.charAt(AE)){break
}}return AE+1
}function M(AH,AE){if(AH.indexOf){return AH.indexOf(AE)
}for(var AF=0,AG=AH.length;
AF<AG;
++AF){if(AH[AF]==AE){return AF
}}return -1
}function y(AE){return/\w/.test(AE)||AE.toUpperCase()!=AE.toLowerCase()
}var W="\n\nb".split(/\n/).length!=3?function(AG){var AH=0,AF,AE=[];
while((AF=AG.indexOf("\n",AH))>-1){AE.push(AG.slice(AH,AG.charAt(AF-1)=="\r"?AF-1:AF));
AH=AF+1
}AE.push(AG.slice(AH));
return AE
}:function(AE){return AE.split(/\r?\n/)
};
Q.splitLines=W;
var x=window.getSelection?function(AF){try{return AF.selectionStart!=AF.selectionEnd
}catch(AE){return false
}}:function(AG){try{var AE=AG.ownerDocument.selection.createRange()
}catch(AF){}if(!AE||AE.parentElement()!=AG){return false
}return AE.compareEndPoints("StartToEnd",AE)!=0
};
Q.defineMode("null",function(){return{token:function(AE){AE.skipToEnd()
}}
});
Q.defineMIME("text/plain","null");
var l={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",91:"Mod",92:"Mod",93:"Mod",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63276:"PageUp",63277:"PageDown",63275:"End",63273:"Home",63234:"Left",63232:"Up",63235:"Right",63233:"Down",63302:"Insert",63272:"Delete"};
Q.keyNames=l;
(function(){for(var AE=0;
AE<10;
AE++){l[AE+48]=String(AE)
}for(var AE=65;
AE<=90;
AE++){l[AE]=String.fromCharCode(AE)
}for(var AE=1;
AE<=12;
AE++){l[AE+111]=l[AE+63235]="F"+AE
}})();
return Q
})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-javascript', location = 'jscripts/CodeMirror-2.21/mode/xml/xml.js' */
CodeMirror.defineMode("xml",function(W,K){var P=W.indentUnit;
var V=K.htmlMode?{autoSelfClosers:{br:true,img:true,hr:true,link:true,input:true,meta:true,col:true,frame:true,base:true,area:true},doNotIndent:{pre:true},allowUnquoted:true}:{autoSelfClosers:{},doNotIndent:{},allowUnquoted:false};
var A=K.alignCDATA;
var F,G;
function O(d,b){function Z(c){b.tokenize=c;
return c(d,b)
}var a=d.next();
if(a=="<"){if(d.eat("!")){if(d.eat("[")){if(d.match("CDATA[")){return Z(U("atom","]]>"))
}else{return null
}}else{if(d.match("--")){return Z(U("comment","-->"))
}else{if(d.match("DOCTYPE",true,true)){d.eatWhile(/[\w\._\-]/);
return Z(X(1))
}else{return null
}}}}else{if(d.eat("?")){d.eatWhile(/[\w\._\-]/);
b.tokenize=U("meta","?>");
return"meta"
}else{G=d.eat("/")?"closeTag":"openTag";
d.eatSpace();
F="";
var e;
while((e=d.eat(/[^\s\u00a0=<>\"\'\/?]/))){F+=e
}b.tokenize=N;
return"tag"
}}}else{if(a=="&"){var Y;
if(d.eat("#")){if(d.eat("x")){Y=d.eatWhile(/[a-fA-F\d]/)&&d.eat(";")
}else{Y=d.eatWhile(/[\d]/)&&d.eat(";")
}}else{Y=d.eatWhile(/[\w]/)&&d.eat(";")
}return Y?"atom":"error"
}else{d.eatWhile(/[^&<]/);
return null
}}}function N(a,Z){var Y=a.next();
if(Y==">"||(Y=="/"&&a.eat(">"))){Z.tokenize=O;
G=Y==">"?"endTag":"selfcloseTag";
return"tag"
}else{if(Y=="="){G="equals";
return null
}else{if(/[\'\"]/.test(Y)){Z.tokenize=J(Y);
return Z.tokenize(a,Z)
}else{a.eatWhile(/[^\s\u00a0=<>\"\'\/?]/);
return"word"
}}}}function J(Y){return function(a,Z){while(!a.eol()){if(a.next()==Y){Z.tokenize=N;
break
}}return"string"
}
}function U(Z,Y){return function(b,a){while(!b.eol()){if(b.match(Y)){a.tokenize=O;
break
}b.next()
}return Z
}
}function X(Y){return function(b,a){var Z;
while((Z=b.next())!=null){if(Z=="<"){a.tokenize=X(Y+1);
return a.tokenize(b,a)
}else{if(Z==">"){if(Y==1){a.tokenize=O;
break
}else{a.tokenize=X(Y-1);
return a.tokenize(b,a)
}}}}return"meta"
}
}var L,H;
function B(){for(var Y=arguments.length-1;
Y>=0;
Y--){L.cc.push(arguments[Y])
}}function E(){B.apply(null,arguments);
return true
}function I(Y,a){var Z=V.doNotIndent.hasOwnProperty(Y)||(L.context&&L.context.noIndent);
L.context={prev:L.context,tagName:Y,indent:L.indented,startOfLine:a,noIndent:Z}
}function S(){if(L.context){L.context=L.context.prev
}}function D(Y){if(Y=="openTag"){L.tagName=F;
return E(M,C(L.startOfLine))
}else{if(Y=="closeTag"){var Z=false;
if(L.context){Z=L.context.tagName!=F
}else{Z=true
}if(Z){H="error"
}return E(Q(Z))
}}return E()
}function C(Y){return function(Z){if(Z=="selfcloseTag"||(Z=="endTag"&&V.autoSelfClosers.hasOwnProperty(L.tagName.toLowerCase()))){return E()
}if(Z=="endTag"){I(L.tagName,Y);
return E()
}return E()
}
}function Q(Y){return function(Z){if(Y){H="error"
}if(Z=="endTag"){S();
return E()
}H="error";
return E(arguments.callee)
}
}function M(Y){if(Y=="word"){H="attribute";
return E(M)
}if(Y=="equals"){return E(T,M)
}if(Y=="string"){H="error";
return E(M)
}return B()
}function T(Y){if(Y=="word"&&V.allowUnquoted){H="string";
return E()
}if(Y=="string"){return E(R)
}return B()
}function R(Y){if(Y=="string"){return E(R)
}else{return B()
}}return{startState:function(){return{tokenize:O,cc:[],indented:0,startOfLine:true,tagName:null,context:null}
},token:function(b,a){if(b.sol()){a.startOfLine=true;
a.indented=b.indentation()
}if(b.eatSpace()){return null
}H=G=F=null;
var Z=a.tokenize(b,a);
a.type=G;
if((Z||G)&&Z!="comment"){L=a;
while(true){var Y=a.cc.pop()||D;
if(Y(G||Z)){break
}}}a.startOfLine=false;
return H||Z
},indent:function(b,Y,a){var Z=b.context;
if((b.tokenize!=N&&b.tokenize!=O)||Z&&Z.noIndent){return a?a.match(/^(\s*)/)[0].length:0
}if(A&&/<!\[CDATA\[/.test(Y)){return 0
}if(Z&&/^<\//.test(Y)){Z=Z.prev
}while(Z&&!Z.startOfLine){Z=Z.prev
}if(Z){return Z.indent+P
}else{return 0
}},compareStates:function(d,Z){if(d.indented!=Z.indented||d.tokenize!=Z.tokenize){return false
}for(var c=d.context,Y=Z.context;
;
c=c.prev,Y=Y.prev){if(!c||!Y){return c==Y
}if(c.tagName!=Y.tagName){return false
}}},electricChars:"/"}
});
CodeMirror.defineMIME("application/xml","xml");
CodeMirror.defineMIME("text/html",{name:"xml",htmlMode:true});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-javascript', location = 'jscripts/CodeMirror-2.21/lib/util/searchcursor.js' */
(function(){function A(B,E,G,D){this.atOccurrence=false;
this.cm=B;
if(D==null){D=typeof E=="string"&&E==E.toLowerCase()
}G=G?B.clipPos(G):{line:0,ch:0};
this.pos={from:G,to:G};
if(typeof E!="string"){this.matches=function(J,N){if(J){var H=B.getLine(N.line).slice(0,N.ch),I=H.match(E),M=0;
while(I){var K=H.indexOf(I[0]);
M+=K;
H=H.slice(K+1);
var L=H.match(E);
if(L){I=L
}else{break
}M++
}}else{var H=B.getLine(N.line).slice(N.ch),I=H.match(E),M=I&&N.ch+H.indexOf(I[0])
}if(I){return{from:{line:N.line,ch:M},to:{line:N.line,ch:M+I[0].length},match:I}
}}
}else{if(D){E=E.toLowerCase()
}var C=D?function(H){return H.toLowerCase()
}:function(H){return H
};
var F=E.split("\n");
if(F.length==1){this.matches=function(K,L){var I=C(B.getLine(L.line)),H=E.length,J;
if(K?(L.ch>=H&&(J=I.lastIndexOf(E,L.ch-H))!=-1):(J=I.indexOf(E,L.ch))!=-1){return{from:{line:L.line,ch:J},to:{line:L.line,ch:J+H}}
}}
}else{this.matches=function(M,O){var N=O.line,P=(M?F.length-1:0),K=F[P],Q=C(B.getLine(N));
var L=(M?Q.indexOf(K)+K.length:Q.lastIndexOf(K));
if(M?L>=O.ch||L!=K.length:L<=O.ch||L!=Q.length-K.length){return 
}for(;
;
){if(M?!N:N==B.lineCount()-1){return 
}Q=C(B.getLine(N+=M?-1:1));
K=F[M?--P:++P];
if(P>0&&P<F.length-1){if(Q!=K){return 
}else{continue
}}var J=(M?Q.lastIndexOf(K):Q.indexOf(K)+K.length);
if(M?J!=Q.length-K.length:J!=K.length){return 
}var H={line:O.line,ch:L},I={line:N,ch:J};
return{from:M?I:H,to:M?H:I}
}}
}}}A.prototype={findNext:function(){return this.find(false)
},findPrevious:function(){return this.find(true)
},find:function(C){var B=this,F=this.cm.clipPos(C?this.pos.from:this.pos.to);
function D(G){var H={line:G,ch:0};
B.pos={from:H,to:H};
B.atOccurrence=false;
return false
}for(;
;
){if(this.pos=this.matches(C,F)){this.atOccurrence=true;
return this.pos.match||true
}if(C){if(!F.line){return D(0)
}F={line:F.line-1,ch:this.cm.getLine(F.line-1).length}
}else{var E=this.cm.lineCount();
if(F.line==E-1){return D(E)
}F={line:F.line+1,ch:0}
}}},from:function(){if(this.atOccurrence){return this.pos.from
}},to:function(){if(this.atOccurrence){return this.pos.to
}},replace:function(C){var B=this;
if(this.atOccurrence){B.pos.to=this.cm.replaceRange(C,B.pos.from,B.pos.to)
}}};
CodeMirror.defineExtension("getSearchCursor",function(C,D,B){return new A(this,C,D,B)
})
})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-javascript', location = 'templates/source-editor-templates.soy' */
// This file was automatically generated from source-editor-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SourceEditor == 'undefined') { Confluence.SourceEditor = {}; }
if (typeof Confluence.SourceEditor.Templates == 'undefined') { Confluence.SourceEditor.Templates = {}; }


Confluence.SourceEditor.Templates.toolbar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="aui-buttons"><li class="toolbar-item aui-button" id="rte-source-editor-button"><a class="toolbar-trigger" href="#" id="rte-source-editor" title=\'Open in source editor\'><span class="trigger-text">&lt;&#8201;&gt;</span></a></li></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.SourceEditor.Templates.sourceEditorPlaceholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="source-editor"><div id="source-editor-header"><div id="source-editor-status"></div><form class="aui"><div id="source-editor-toolbar" class="aui-toolbar"><div class="toolbar-split toolbar-split-row toolbar-contextual editor-adjacent" id="source-editor-toolbar-row-searchreplace"><ul class="aui-buttons"><li class="toolbar-item"><label for="source-editor-search-toolbar-find-text">Find</label><input id="source-editor-search-toolbar-find-text" type="text" name="find" class="toolbar-find-input text" autocomplete="off"></li><li class="toolbar-item"><label for="source-editor-search-toolbar-replace-text">Replace</label><input id="source-editor-search-toolbar-replace-text" type="text" name="replace" class="toolbar-replace-input text" autocomplete="off"></li></ul><ul class="aui-buttons"><li class="aui-button disabled"><a href="#" class="toolbar-trigger disabled" id="source-editor-search-toolbar-prev" title="Previous"><span class="search-toolbar-find-previous-button">Previous</span></a></li><li class="aui-button disabled"><a href="#" class="toolbar-trigger disabled" id="source-editor-search-toolbar-next" title="Next"><span class="search-toolbar-find-next-button">Next</span></a></li></ul><ul class="aui-buttons"><li class="aui-button disabled"><a href="#" class="toolbar-trigger disabled" id="source-editor-search-toolbar-replace" title="Replace"><span class="search-toolbar-replace-button">Replace</span></a></li></ul><ul class="aui-buttons"><li class="aui-button disabled"><a href="#" class="toolbar-trigger disabled" id="source-editor-search-toolbar-replace-all" title="Replace all"><span class="search-toolbar-replaceall-button">Replace all</span></a></li></ul><ul class="aui-buttons"><li class="toolbar-item"><input id="source-editor-search-toolbar-regex" type="checkbox" name="regex" class="toolbar-regex-input"><label for="source-editor-search-toolbar-regex" class="check">Regex</label></li><li class="toolbar-item"><input id="source-editor-search-toolbar-match-case" type="checkbox" name="regex" class="toolbar-match-case-input"><label for="source-editor-search-toolbar-match-case" class="check">Match case</label></li></ul></div></div></form></div><div id="source-editor-placeholder"></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.SourceEditor.Templates.sourceEditorFooterLeftToolbar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="source-editor-footer-left-toolbar"><input type="checkbox" name="source-editor-wrap-lines" id="source-editor-wrap-lines"', (opt_data.wrapLines) ? ' checked="checked"' : '', '><label for="source-editor-wrap-lines">Wrap long lines</label></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-javascript', location = 'jscripts/source-editor/source-editor.js' */
(function(E){var C=E(document);
var D=E(window);
var A,B,F;
AJS.bind("init.rte",function(){AJS.log("Initialising the Source Editor.");
if(AJS.Meta.get("page-id")==0){AJS.log("Page is a draft - source editing is not supported");
return 
}AJS.log("loading source editor");
var V=/(\d*)(px)?/;
var Z;
var O;
var e;
function G(){var g=E("#rte-button-help").parent("ul");
g.before(Confluence.SourceEditor.Templates.toolbar());
var h=E("#rte-source-editor-button");
h.click(function(i){i.preventDefault();
M()
});
N(E("#rte-toolbar .aui-toolbar2-primary"),"margin-right",45)
}function N(h,k,j){var g=V.exec(h.css(k));
var i;
if(g.length>1){i=+g[1];
i+=j;
h.css(k,i+"px")
}}function H(){e.addClass("hidden")
}function P(){e.removeClass("hidden");
E("input").blur()
}function L(g,h){O&&O.setCursor(g-1,h-1);
O.focus()
}function K(){return J()
}function J(){var g=D.width()-80;
var h=D.height()-80;
return{width:Math.max(860,g),height:Math.max(530,h)}
}function b(){var g=J();
Z.popup.changeSize(g.width,g.height);
Z.height=g.height;
Z.width=g.width;
Z.getPage(0).recalcSize();
W()
}function W(){var g=F.height()-A.height();
B.height(g);
$scroll.height(g)
}function Y(){var g=AJS.Meta.get("version-number");
var i=g.split(".");
if(g.indexOf("SNAPSHOT")>=0){return true
}var h=parseInt(i.length>0&&i[0]||0);
var j=parseInt(i.length>1&&i[1]||0);
var k=parseInt(i.length>2&&i[2]||0);
if(h>4){return true
}if(h===4&&j>=2){return true
}if(h===4&&j===1&&k>=5){return true
}return false
}function S(){var g=new AJS.Dialog({width:400,height:150,closeOnOutsideClick:true});
var h=g.popup.element;
g.addHeader("Source Editor");
g.addPanel("IncorrectVersionPanel","<p>The source editor requires Confluence <strong>4.1.5</strong> or greater.</p>");
g.addSubmit("Ok",function(){g.remove()
});
g.show()
}function M(){if(!Y()){S();
return 
}if(!Z){Z=new AJS.Dialog(K());
Z.addHeader("Source Editor");
Z.addPanel("SourceEditorPanel","sourceEditorPanel1");
Z.getCurrentPanel().html(Confluence.SourceEditor.Templates.sourceEditorPlaceholder());
Z.addSubmit("Apply",d);
Z.addCancel("Cancel",R);
var g=AJS.Cookie.read("source-editor.wrap-lines")==="true";
Z.popup.element.find(".dialog-button-panel").append(Confluence.SourceEditor.Templates.sourceEditorFooterLeftToolbar({wrapLines:g}));
O=CodeMirror(function(h){E("#source-editor-placeholder").append(h)
},{value:"",lineNumbers:true,mode:"xml",lineWrapping:g});
e=E('<div id="source-editor-throbber"/>');
Raphael.spinner(e[0],50,"#666");
A=E("#source-editor-header");
B=E("#source-editor-placeholder");
$scroll=B.find(".CodeMirror-scroll");
F=A.closest(".dialog-panel-body");
e.appendTo(A.closest(".aui-dialog"));
W();
C.trigger("source-editor-init",{editor:O})
}else{b()
}Z.show();
C.delegate("a.source-editor-location","click.source-editor",function(){var h=E(this);
L(h.data("line"),h.data("column"))
});
C.delegate(".aui-message.closeable","messageClose.source-editor",function(){setTimeout(W,0)
});
C.delegate("#source-editor-wrap-lines","click.source-editor",function(){var i=E(this);
var h=i.prop("checked");
O.setOption("lineWrapping",h);
AJS.Cookie.save("source-editor.wrap-lines",h)
});
D.bind("resize.source-editor",b);
C.delegate("*","focus.source-editor",function(i){var h=E(i.target);
if(!h.closest("#source-editor").length){h.blur()
}});
O.setValue("");
P();
c(function(h){O.setValue(h);
O.refresh();
O.clearHistory();
O.focus();
C.trigger("source-editor-loaded",{editor:O});
H()
});
C.trigger("source-editor-opened",{editor:O});
C.bind("hideLayer.source-editor",function(j,i,h){if(Z.popup===h){f()
}})
}function T(){Z.hide()
}function f(){C.unbind(".source-editor");
D.unbind(".source-editor");
C.trigger("source-editor-closed",{editor:O})
}function d(){P();
X(function(h){var g=AJS.Rte.getEditor();
g.undoManager.add();
g.setContent(h);
g.undoManager.add();
g.nodeChanged();
T();
H()
})
}function R(){T()
}function c(g){E.ajax(AJS.params.contextPath+"/rest/sourceeditor/1.0/convert/toStorageFormat",{type:"POST",contentType:"application/x-www-form-urlencoded;charset=UTF-8",data:a({editorFormat:AJS.Rte.getEditor().getContent()}),dataType:"json"}).done(function(h){I();
g(h.content)
}).fail(function(h){Q("Error loading source",h)
})
}function X(g){var h=U();
E.ajax(AJS.params.contextPath+"/rest/sourceeditor/1.0/convert/toEditorFormat",{type:"POST",contentType:"application/x-www-form-urlencoded;charset=UTF-8",data:a({storageFormat:h}),dataType:"json"}).done(function(i){I();
g(i.content)
}).fail(function(i){Q("Error validating source",i)
})
}function a(g){var h=AJS.Meta.get("content-type");
if(h==="comment"){if(E("body").hasClass("view-blog-post")){h="blogpost"
}else{h="page"
}}if(h==="page"){return E.extend({pageId:AJS.Meta.get("page-id")},g)
}if(h==="template"){return E.extend({templateId:AJS.Meta.get("page-id")},g)
}return E.extend({blogId:AJS.Meta.get("page-id")},g)
}function U(g){var h=O.getValue();
if(g){h=h.replace("\n","")
}return h
}function I(){E("#source-editor-status").empty();
W()
}function Q(k,j){I();
var h=j.getResponseHeader("Content-Type");
var g;
if(/^application\/json$|^application\/json;.*/.test(h)){g=JSON.parse(j.responseText)
}else{if(j.status==403){g={message:"You no longer have access to the source editor."}
}else{g={message:"Unknown error occurred calling server."}
}}var i="<ul><li>"+AJS.escapeHtml(g.message+" ("+j.status+")")+"</li>";
if(typeof g.line==="number"&&typeof g.column==="number"&&g.line>0&&g.column>0){L(g.line,g.column);
i+='<li><a href="#" class="source-editor-location" data-line="'+g.line+'" data-column="'+g.column+'">Line : '+g.line+", Column : "+g.column+"</a></li>"
}i+="</ul>";
AJS.messages.error("#source-editor-status",{title:k,body:i,shadowed:false,closeable:true});
H();
W()
}G();
AJS.SourceEditor={open:M,save:d,cancel:R,getSource:U,getInternalEditor:function(){return O
}};
C.trigger("source-editor-api-available")
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-javascript', location = 'jscripts/source-editor/source-editor-cm-search-adapter.js' */
(function(B){var A=B(document);
A.bind("source-editor-init",function(){AJS.SourceEditor=AJS.SourceEditor||{};
AJS.SourceEditor.CodeMirror=AJS.SourceEditor.CodeMirror||{};
AJS.SourceEditor.CodeMirror.SearchAdapter=function(G){var C={};
var I=G;
var M;
function K(){C.from=C.to=I.getCursor();
C.query=""
}function F(){if(M){C.from=(M&&M.from())||C.from;
C.to=(M&&M.to())||C.to
}}function D(){M=I.getSearchCursor(C.query,{line:0,ch:0},!C.matchCase);
return H(false)
}function H(O){var N;
if(M){N=M.find(O.backward);
if(!N&&O.wrap){M=I.getSearchCursor(C.query,O.backward?{line:I.lineCount()-1}:{line:0,ch:0},!C.matchCase);
N=M.find(O.backward)
}if(N){F();
I.setSelection(C.from,C.to)
}else{I.setCursor(C.from)
}}return N
}function E(O,N){if(M){var P=M.from();
M.replace(O);
return H({backward:false,wrap:N})
}}function J(O){var N=0;
if(M){D();
while(E(O,false)){N++
}G.focus()
}return N
}K();
var L={findPrev:function(){return I.operation(function(){return H({backward:true,wrap:true})
})
},findNext:function(){return I.operation(function(){return H({backward:false,wrap:true})
})
},replace:function(N){return I.operation(function(){return E(N,true)
})
},replaceAll:function(N){return I.operation(function(){return J(N)
})
},startFind:function(P,O,N){return I.operation(function(){var Q=N?"g":"gi";
C.query=O?new RegExp(P,Q):P;
C.matchCase=N;
M=I.getSearchCursor(C.query,C.from,!C.matchCase);
return H({backforward:false,wrap:true})
})
},clearSearch:function(){I.operation(function(){K();
I.setSelection(C.from,C.to);
M=undefined
})
}};
return L
}
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-javascript', location = 'jscripts/source-editor/source-editor-search.js' */
(function(G){var B=G(document);
var D;
var O,A,C,F,I,E,M,N;
function L(Q){var R,P;
var S=[C,F,I,E];
for(R=0,P=S.length;
R<P;
R++){K(S[R],Q)
}}function K(Q,P){Q.toggleClass("disabled",!P);
Q.closest(".toolbar-item").toggleClass("disabled",!P)
}function H(P){if(G.os.mac){return P.metaKey
}return P.ctrlKey
}function J(){O.focus()
}B.bind("source-editor-init",function(R,Q){D=AJS.SourceEditor.CodeMirror.SearchAdapter(Q.editor);
O=G("#source-editor-search-toolbar-find-text");
A=G("#source-editor-search-toolbar-replace-text");
C=G("#source-editor-search-toolbar-prev");
F=G("#source-editor-search-toolbar-next");
I=G("#source-editor-search-toolbar-replace");
E=G("#source-editor-search-toolbar-replace-all");
M=G("#source-editor-search-toolbar-regex");
N=G("#source-editor-search-toolbar-match-case");
var P={findText:"",regex:false,matchCase:false};
function S(V){var W=O.val();
var T=M.attr("checked");
var U=N.attr("checked");
if(P.findText!==W||P.regex!==T||P.matchCase!==U){P.findText=W;
P.regex=T;
P.matchCase=U;
if(W.length){L(true);
D.startFind(W,T,U)
}else{L(false);
D.clearSearch()
}}}O.bind("keyup.source-editor-search",S);
M.bind("click.source-editor-search",S);
N.bind("click.source-editor-search",S);
O.bind("keydown.source-editor-search",function(T){if(T.which==13){if(T.shiftKey){D.findPrev()
}else{D.findNext()
}T.preventDefault()
}});
A.bind("keydown.source-editor-search",function(T){if(T.which==13){D.replace(A.val())
}});
C.bind("click.source-editor-search",function(T){D.findPrev();
T.preventDefault()
});
F.bind("click.source-editor-search",function(T){D.findNext();
T.preventDefault()
});
I.bind("click.source-editor-search",function(T){D.replace(A.val());
T.preventDefault()
});
E.bind("click.source-editor-search",function(T){D.replaceAll(A.val());
T.preventDefault()
})
});
B.bind("source-editor-opened",function(P,Q){D=AJS.SourceEditor.CodeMirror.SearchAdapter(Q.editor);
B.bind("keydown.source-editor-search",function(R){if(H(R)){if(R.which===70){J();
R.preventDefault()
}else{if(R.which===71&&!R.shiftKey){D.findNext();
R.preventDefault()
}else{if(R.which===71&&R.shiftKey){D.findPrev();
R.preventDefault()
}else{if(R.which===82&&!R.shiftKey){D.replace(A.val());
R.preventDefault()
}else{if(R.which===82&&R.shiftKey){D.replaceAll(A.val());
R.preventDefault()
}}}}}}})
});
B.bind("source-editor-closed",function(){B.unbind(".source-editor-search")
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
