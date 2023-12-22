$(document).ready(function () {
    $(".product__show-more").click(function () {
        var productBlock = $(this).closest(".product-block");
        var productList2 = productBlock.find(".product__list:eq(1)");
        var productList3 = productBlock.find(".product__list:eq(2)");

        if (productList2.css("display") === "none") {
            productList2.css("display", "flex").animate({ marginLeft: "0" }, 500);
        } else {
            productList2.animate({ marginLeft: "-100%" }, 500, function() {
                $(this).css("display", "none");
            });
        }
        if (productList3.css("display") === "none") {
            productList3.css("display", "flex").animate({ marginRight: "0" }, 500);
        } else {
            productList3.animate({ marginRight: "-100%" }, 500, function() {
                $(this).css("display", "none");
            });
        }

        return false;
    });

    // Функция для анимации при прокрутке
    function animateOnScroll() {
        $(".slideUp").each(function () {
            var topOfElement = $(this).offset().top;
            var bottomOfElement = topOfElement + $(this).outerHeight();
            var bottomOfScreen = $(window).scrollTop() + $(window).height();

            if (bottomOfScreen > topOfElement) {
                $(this).css({
                    opacity: 1,
                    transform: "translateY(0)"
                });
            }
        });
    }

    animateOnScroll();

    $(window).scroll(animateOnScroll);
});