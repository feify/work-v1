document.documentElement.style.fontSize = document.documentElement.offsetWidth/6.4+"px";
;(function ($) {
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
                $(".fuceng").show();
            }else {
                $("#fc").removeClass("fuceng").addClass("fuceng_android").show();
            }
        }else{
            if (/iphone|ipad|ipod/.test(ua)) {
                //非微信地址
                if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i))
                   {
                    window.location.href = "wx0211898930260ea3://";//ios app协议
                    window.setTimeout(function() {
                        location.href="https://itunes.apple.com/cn/app/id1076966093";
                    },2000)
                   }
                
            } else if (/android/.test(ua)) {
                getAPKURL();
            } else {
                location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.douyaim.qsapp";
            }
        }
    }
    function getAPKURL(){
        if(navigator.userAgent.match(/android/i))
        {
           var   ifr = document.createElement( 'iframe' );
           console.log(ifr)
            ifr.src = 'hulu://home';

            ifr.style.display = 'none' ;

            document.body.appendChild(ifr);

            window.setTimeout( function (){

                document.body.removeChild(ifr);
                $.post('https://qiniustatic.if-chat.com/biuld_info.json',{flag:'WAP'},function(msg){
                    console.log(msg.url)
                    location.href=msg.url;
                },'json');

            },2000);
            
        }
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
    var w = $(".login_video").width();
    var h = $(".login_video").height() + 100;
    function play() {
        var video = $("#videos").get(0).play();
    }

    function stop() {
        var video = $("#videos").get(0).pause();
    }
    //点击下载
    $(".header").on("click", function () {
        tourl();
    })
    $(".btn").on("click",function(){
        tourl();
    })
    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    if (IsPC()) {
        $(".container").css({"width": "604px", "margin": "0 auto"});
        $("html").css("fontSize", "90px");
        $(".header").css("width", "604px");
        $(".footer").css("width", "604px");
        $(".main").css({"width": "604px", "overflow": "hidden"});
    }
    window.addEventListener('orientationchange', function (event) {
        if (window.orientation == 180 || window.orientation == 0) {
            document.documentElement.style.fontSize = document.documentElement.offsetWidth / 6.4 + "px";
            $("html,body,.container").height(100 + "%");
            w = $(".login_video").width();
            h = $(".login_video").height();
            $("#canvas").attr({"width": w, "height": h});
        }
        if (window.orientation == 90 || window.orientation == -90) {
            $("html").css("fontSize", "70px");
            $("html,body,.container").height(150 + "%");
            w = $(".login_video").width();
            h = $(".login_video").height();
            $("#canvas").attr({"width": w, "height": h});
        }
    });
    var jm = $("#jm").text();
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var State;
    var video = $("#videos");
    var _video = video.get(0);
    $("a").hide();
    $(".qp").hide();
    $("#canvas").attr({"width": w, "height": h})
    $("#videos").on("play", function () {
        drawCanvas();
    });
    function auto() {
        if (_video.paused) {
            $(".login_play").show();
        } else {
            $(".login_play").hide();
        }
    }

    setInterval(auto, 500);
    function drawCanvas() {
        if (_video.paused || _video.ended) {
            return;
        }
        var canvas = $("#canvas");
        var _canvas = canvas.get(0);
        var context = _canvas.getContext("2d");
        context.drawImage(_video, 0, 0, w, h);
        setTimeout(drawCanvas, 30);
    }

    $(".login_play").on("click", function (e) {
        State = $("#videos")[0].readyState;
        $("#videos").css("width", 100 + "%");
        if (State == 0) {
            $.ajax({
                url: jm,
                dataType: 'jsonp',
                type: 'get',
                success: function (data) {
                    _video.load()
                    $(".login_play").hide();
                    play();
                    $(".qp").css("display", "block");
                    $(".poster").hide();
                    timeP();
                }
            });
        } else {
            $(".qp").css("display", "block");
            $(".login_play").hide();
            $(".poster").hide();
            play();
            timeP();
        }
    })
    $(".qp").bind('click', function () {//控制视频全屏与退出全屏
        video[0].webkitEnterFullscreen();
        video[0].mozRequestFullScreen();
        video[0].controls = false;
        return false;
    });
    $("#canvas").on("click", function () {
        stop();
        $(".login_play").show();
    })
    function timeP() {
        $("#videos").on("timeupdate", function () {
            tol = this.duration;//获取总时长
            var currentTime = this.currentTime;//获取当前播放时间

            if (currentTime == tol) {//播放完毕，视频回复初始状态
                $(".qp").css("display", "none");
                $(".login_play").show();
                $(".poster").show();
                stop();
                this.currentTime = 0;
                if (isAndroid) {
                    $("#videos").hide();
                }
            }
        });
    }
})(Zepto)