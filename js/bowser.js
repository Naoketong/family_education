var oldbowser = {
    init: function () {
        this.isOldBowser();
    },
    bind: function () {

    },
    html: null,
    toastHtml: function () {
        //style
        var style             =  '<style>html{overflow:hidden;}</style>';
        //title模块
        var titleStyle        =  "color:#fff;font-size:20px;text-align:center;";
        var title             =  '<p style=' + titleStyle + '>使用一款<strong style="font-size:24px;">优质浏览器，是成为极客</strong>的关键一步！</p>';
        //提示语模块
        var tipsStyle         =  'color:#666;font-size:12px;line-height:22px;margin-top:30px;margin-bottom:70px;color:#fff;';
        var tips              =  '<p style=' + tipsStyle + '>' + '您正在使用的浏览器内核版本过低，除了有可能遭受病毒与恶意软件的侵袭之外，也无法体验到最新互联网技术带来的优质显示与交互效果。网站大量使用了HTML5与CSS3技术，为确保您能够体验到最佳的浏览效果，我们推荐您选择使用下列最新的优质浏览器:' + '</p>';
        //下载浏览器模块
        var linkStyle         =  'display:inline-block;margin:40px;margin-top:0;vertical-align:top;';
        var firefox           =  '<a style=' + linkStyle + ' href="http://www.firefox.com.cn/download/" target="_blank"><img style="border:none;" src="http://e.jikexueyuan.com/static/images/browser/firefox.png"/></a>';
        var chrome            =  '<a style=' + linkStyle + ' href="http://wirrorcdn.qiniudn.com/software/browser/ChromeStandaloneSetup.Win.38.0.2125.111.exe" target="_blank"><img style="border:none;" src="http://e.jikexueyuan.com/static/images/browser/chrome.png"></a>';
        var ie                =  '<a style=' + linkStyle + ' href="http://windows.microsoft.com/zh-cn/internet-explorer/ie-11-worldwide-languages/" target="_blank"><img style="border:none;" src="http://e.jikexueyuan.com/static/images/browser/ie.png"></a>';
        var safari            =  '<a style=' + linkStyle + ' href="http://support.apple.com/kb/DL1531" target="_blank"><img style="border:none;" src="http://e.jikexueyuan.com/static/images/browser/safari.png"></a>';
        var downloadStyle     =  "";
        var download          =  '<div style=' + downloadStyle + '>' + firefox + chrome + ie + safari + '</div>';

        var htmlStyle         =  'width:650px;height:320px;padding:40px;padding-top:60px;padding-bottom:60px;position:absolute;left:50%;margin-left:-325px;top:50%;margin-top:-190px;';
        var innerhtml         =  '<div id="bowser" style=' + htmlStyle + '>' + style + title + tips + download  + '</div>';

        var html              =  document.createElement('div');
        htmlElement           =  document.body.appendChild(html);
        htmlElement.innerHTML =  innerhtml;
        var parent            = document.getElementById('bowser').parentElement;
        parent.style          = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(46, 61, 73, 0.95);z-index:7000;";
    },
    isOldBowser: function () {
        var agent  = window.navigator.userAgent;
        if (agent.replace(/\s/g, "").match(/ie[6-8]/i)) {
            this.toastHtml();
        }
    }
}

oldbowser.init();