(function ($, Drupal) {
    $(document).ready(function ($) {
        function setItemContent(__elemnt) {
            $(".class-engineering-to-add").html("");
            var img_item = __elemnt.find(".process-list").html();
            $(".class-engineering-to-add").html(img_item);
            $(".class-engineering-to-add").toggleClass("to-display");
        }
        var __activer_item;
        const __items_list = document.querySelectorAll(".process-item");
        $(".process-item").click(function () {
            __activer_item = $(this);
            __items_list.forEach((element) => {
                element.classList.contains("active")
                    ? element.classList.remove("active")
                    : "";
            });
            $(this).addClass("active");
            setItemContent($(this));
        });
        $(".process-item").hover(function () {
            setItemContent($(this));
        });
        $(".process-item").mouseleave(function () {
            if (__activer_item) {
                $(".class-engineering-to-add").html("");
                var img_item = $(".process-item.active").find(".process-list").html();
                $(".class-engineering-to-add").html(img_item);
                $(".class-engineering-to-add").toggleClass("to-display");
            }
        });
    });
})(jQuery, Drupal);
