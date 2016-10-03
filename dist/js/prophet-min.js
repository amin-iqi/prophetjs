Date.now||(Date.now=function(){return(new Date).getTime()}),Array.prototype.map||(Array.prototype.map=function(t,e){var i,n,o;if(null==this)throw new TypeError(" this is null or not defined");var s=Object(this),r=s.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(i=e),n=new Array(r),o=0;o<r;){var c,a;o in s&&(c=s[o],a=t.call(i,c,o,s),n[o]=a),o++}return n});var Message=function(){function t(e,i,n){return this._text=e||"Awesome!",this._id=t.idGen(),console.dir(this),this._type="default",this._duration=4e3,this._class=" ",i&&(this.cb=n,"function"==typeof i?this.cb=i:"object"!=typeof i||Array.isArray(i)||(this._type=i.type||this._type,this._id=i.id||this._id,this._duration=i.duration||this._duration,this._class=i.class||this._class)),this.cb="function"==typeof i?i:n,t.Stack[t.Stack.length]=this,this.init(),this}return t.idGen=function(){return Date.now()%1e4},t.clearAll=function(){for(var e=document.querySelectorAll("ul.prophet > li"),i=0,n=e.length;i<n;i++)e[i].classList.remove("prophet-message-active"),t.parent.removeChild(e[i])},t.prototype.init=function(){var e=this;this.cbFired=!1,this.toast=document.createElement("li");var i=this.toast;n=["message "+this._class,this._text],i.className=n[0],i.innerText=n[1],this.stylize(),console.info("before click"),console.dir(i.style.marginLeft),i.addEventListener("click",function(){console.info("after click"),console.dir(i.style.marginLeft),i.classList.remove("prophet-message-active"),e.cb&&(e.cb(e._id),e.cbFired=!0),setTimeout(function(){t.parent.removeChild(i)},60)});var n},t.prototype.show=function(){var e=this,i=this.toast;return t.parent.appendChild(this.toast),setTimeout(function(){i.classList.add("prophet-message-active")},10),setTimeout(function(){i.classList.remove("prophet-message-active"),e.cbFired||e.cb&&e.cb(e._id),setTimeout(function(){try{t.parent.removeChild(i)}catch(t){}},30)},this._duration),this},t.prototype.stylize=function(){var e=t.Util.find(t.stylePresets,this._type);e!==-1&&(this.toast.style.backgroundColor=t.stylePresets[e].backgroundColor,this.toast.style.color=t.stylePresets[e].color)},t.Util={find:function(t,e){return t.map(function(t){return t.type}).indexOf(e)},toDash:function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})},getSizes:function(){var t,e;return"undefined"!=typeof window.innerWidth?(t=window.innerWidth,e=window.innerHeight):"undefined"!=typeof document.documentElement&&"undefined"!=typeof document.documentElement.clientWidth&&0!=document.documentElement.clientWidth?(t=document.documentElement.clientWidth,e=document.documentElement.clientHeight):(t=document.getElementsByTagName("body")[0].clientWidth,e=document.getElementsByTagName("body")[0].clientHeight),{width:t,height:e}},rePosition:function(){var e=t.Util.getSizes().width,i=(t.Util.getSizes().height,t.parent);console.log("width",e,"Parent: ",i),e<240?i.style.marginLeft="10px":e>240&&e<320?i.style.marginLeft=.3*e+"px":e>320&&e<480?i.style.marginLeft=.35*e+"px":e>480&&e<600?i.style.marginLeft=.5*e+"px":e>600&&e<720?i.style.marginLeft=.6*e+"px":e>720&&e<1024?i.style.marginLeft=.7*e+"px":e>1024&&(i.style.marginLeft=.75*e+"px")}},t.Dbg={stackTrace:function(){return console.dir(t.Stack)},presets:function(){return console.dir(t.stylePresets)}},t.parent=document.getElementsByClassName("prophet")[0],t.stylePresets=[{type:"default",backgroundColor:"#1c2e2d",color:"#FAFAFA"},{type:"success",backgroundColor:"#4daf7c",color:"#FAFAFA"},{type:"error",backgroundColor:"#D45A43",color:"#FAFAFA"}],t.config={types:function(e){e=[].concat(e);for(var i,n=0,o=e.length;n<o;n++){var s=t.Util.find(t.stylePresets,e[n].type);if(i=e[n],s!==-1)for(var r in i)t.stylePresets[s][r]=i[r];else t.stylePresets[t.stylePresets.length]=i}}},t.Stack=[],t}();Message.Util.rePosition(),window.addEventListener("resize",Message.Util.rePosition);