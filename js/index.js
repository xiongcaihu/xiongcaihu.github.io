(function() {

    function init() {
        fixFooter();
        adjustContent();
        fixHeader();
    }

    function fixFooter() {
        $(".footer").css("top", (window.innerHeight - 20 * 2.2));
        $(".footer")[0].addEventListener('touchmove', function(event) {
            event.preventDefault();
        }, false);
    }

    function fixHeader() {
        $(".header")[0].addEventListener('touchmove', function(event) {
            event.preventDefault();
        }, false);
    }

    function adjustContent() {
        $(".content").css("height", (window.innerHeight - 20 * (2.1 + 2.7))+"px");
    }

    window.app = {
        init: init
    }
})();
