// Make the timeout id variable global
var fixed = 0;
 
$("[title][data-scan]").tooltip({
    items: "[data-scan], [title]",
    content: function () {
        var element = $(this);
        if (element.is("[data-scan]")) {
            var text = element.attr("href");
            return "<a href='http://www.google.com'>You are trying to open a tooltip  <span>" + text + "</span></a>";
        }
    },
    open: function (event, ui) {
        // When opening a new div, hide any previously opened tooltips first.
        $(".ui-tooltip:not([id=" + ui.tooltip[0].id + "])").hide();
        // clear timeout as well if there's any.
        if (tf > 0) {
            clearTimeout(tf)
        };
    },
    position: {
        my: "right center",
        at: "left center",
        delay: 200,
        using: function (position, feedback) {
            $(this).css(position);
            $("<div>")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
        }
    }
}).bind("mouseleave", function (event) {
    // stop defeulat behaviour
    event.stopImmediatePropagation();
    fixed = setTimeout('$("[title][data-scan]").tooltip("close")', 100);
    $(".ui-tooltip").hover(
     function () {
        clearTimeout(tf);
    }, function () {
        $("[title][data-scan]").tooltip("close");
    })
});