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

function getAPKURL(){
    $.post('https://qiniustatic.if-chat.com/biuld_info.json',{flag:'WAP'},function(msg){
        location.href = msg.url;
    },'json');
}

function tourl(){
    var ua = navigator.userAgent.toLowerCase();
    if(is_weixin()){
        if (/iphone|ipad|ipod/.test(ua)) {
            // $(".fuceng").show();
            location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.douyaim.qsapp";
        }else {
            $("#fc").removeClass("fuceng").addClass("fuceng_android").show();
        }
    }else{
        if (/iphone|ipad|ipod/.test(ua)) {
            location.href="https://itunes.apple.com/cn/app/id1076966093";
        } else if (/android/.test(ua)) {
            getAPKURL();
            //location.href="https://wscdn.net.huluuu.com/if-release-v0.7.6.7-230.apk";
        } else {
            location.href="https://itunes.apple.com/cn/app/id1076966093";
        }
    }
}