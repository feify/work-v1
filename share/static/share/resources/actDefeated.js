document.documentElement.style.fontSize=document.documentElement.offsetWidth/6.4+"px";
;(function($){
		/**
		 * Created by yxshi on 2016/1/27.
		 */
		// 通用工具方法封装在utils之中
		var utils = (function () {

		    /**
		     * @author yxshi 2016-01-29
		     * @descriptoon 获取当前页面的可是区域高度
		     */
		    var getInnerHeight = function () {
		        var pageHeight = window.innerHeight;
		        if (typeof pageHeight !== "number") {
		            if (document.compatMode === "number") {
		                pageHeight = document.documentElement.clientHeight;
		            } else {
		                pageHeight = document.body.clientHeight;
		            }
		        }
		        return pageHeight;
		    };

		    /**
		     * @author yxshi 2016-01-29
		     * @descriptoon 根据UA判断当前是否是移动设备打开的该页面
		     */
		    var isMobileDevice = function () {
		        var ua = navigator.userAgent.toLowerCase();
		        return !!/(iphone|ios|android|mini|mobile|mobi|nokia|symbian|ipod|ipad|ws\s+phone|mqqbrowser|wp7|wp8|ucbrowser7|ucweb|360\s+aphone\s+browser)/i.test(ua);
		    };

		    /**
		     * @author yxshi 2016-01-29
		     * @descriptoon 获取播放器区域的高度，如果在移动设备上打开则尽量保证刚好占满一屏.PC端则根据设计图保证550高度
		     */
		    return {
		        getInnerHeight: getInnerHeight,
		        isMobileDevice: isMobileDevice,
		    }
		})();

		function is_weixin(){
		    var ua = navigator.userAgent.toLowerCase();
		    if(ua.match(/MicroMessenger/i)=='micromessenger'){
		        return true;
		    }
		    else
		    {
		        return false;
		    }
		}

		function tourl(){
		    var ua = navigator.userAgent.toLowerCase();
		    if(is_weixin()){
		        if (/iphone|ipad|ipod/.test(ua)) {
		           // $(".fuceng").show();
		            //应用宝地址
		            location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.douyaim.qsapp";
		        }else {
		            $("#fc").removeClass("fuceng").addClass("fuceng_android").show();
		        }
		    }else{
		        if (/iphone|ipad|ipod/.test(ua)) {
		            //非微信地址
		            location.href="https://itunes.apple.com/cn/app/id1076966093";
		        } else if (/android/.test(ua)) {
		            getAPKURL();
		        } else {
		            location.href="https://itunes.apple.com/cn/app/id1076966093";
		        }
		    }
		}
		function getAPKURL(){
			$.post('https://qiniustatic.if-chat.com/biuld_info.json',{flag:'WAP'},function(msg){
				location.href=msg.url;
			},'json');
		}
		function IsPC()  
		{  
	       var userAgentInfo = navigator.userAgent;  
	       var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	       var flag = true;  
	       for (var v = 0; v < Agents.length; v++) {  
	           if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	       }  
	       return flag;  
		}
		if (IsPC()) {
			$(".container").css({"width":"604px","margin":"0 auto"});
			$("html").css("fontSize","90px");
			$(".header").css("width","604px");
		}
		$(".header").on("click",function(){
			tourl();
		})
		window.addEventListener('orientationchange', function(event){
		    if ( window.orientation == 180 || window.orientation==0 ) {
		        document.documentElement.style.fontSize=document.documentElement.offsetWidth/6.4+"px";
		    }
		    if( window.orientation == 90 || window.orientation == -90 ) {
		    	$("html").css("fontSize","70px");
		    }
		});
})(Zepto)