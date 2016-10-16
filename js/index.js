(function() {
    var count = 0;

    function init() {
        fixFooter();
        adjustContent();
        fixHeader();

        disableScroll(document.body);
    }

    function fixFooter() {
        $(".footer").css("top", (window.innerHeight - 20 * 2.2));
        disableScroll($(".footer")[0]);
    }

    function fixHeader() {
        disableScroll($(".header")[0]);
    }

    function adjustContent() {
    	var startY;
        $(".content").css("height", (window.innerHeight - 20 * (2.1 + 2.7)) + "px");
        $(".content")[0].addEventListener('touchstart', function(event) {
            enableScroll(document.body);
            startY=event.touches[0].pageY;
        }, false);
        $(".content")[0].addEventListener('touchmove', function(event) {
            // event.preventDefault();
            var nowY=event.touches[0].pageY;
            if($(".content").scrollTop()<=0 && nowY>=startY){
            	disableScroll(document.body);
            }
        }, false);
        $(".content")[0].addEventListener('touchend', function(event) {
            disableScroll(document.body);
        }, false);
    }

    function disableScroll(target) {
        target.addEventListener('touchmove', temp, false);
    }

    function temp(event) {
        event.preventDefault();
    }

    function enableScroll(target) {
        target.removeEventListener('touchmove', temp);
    }

    window.app = {
        init: init
    }
})();
