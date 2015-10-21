$(document).ready(function(){

    $( ".event" ).hover(
        function() {
            $(this).transition({ scale: [1.05] }).css("zIndex","4");

        }, function() {
            $(this).transition({ scale: [1] }).css("zIndex","1");
        }
    );

    $( ".localNav li" ).hover(
        function() {
            $(this).css("borderBottom","4px solid rgb(207,169,112)")

        }, function() {
            $(this).css("borderBottom","4px solid transparent")
        }
    );

    $( ".jumbo" ).click(
        function() {
            var $current = $(this);
            $current.siblings().not(".nav").fadeOut(1600);
            $current.fadeOut(1500,
                function(){
                    $current.css({
                        width: "85%",
                        height: "95%"
                    });
                    $current.slideDown(1000, function(){
                        $(".menu li:first-child")
                            .animate({
                            "width": "120%",
                            "fontWeight": "900",
                                "borderWidth": "4px"
                            });

                    });
                    $(".nav").fadeIn(2000);
                    $(".lower").fadeIn(2000);
                    $(".localNav").fadeIn(2000);
                });

            $current.transition({scale: [1.]});
            $current.off();
        });




    $(".jumbo" ).on({
            mouseenter: function () {
                $(this).transition({scale: [1.05]})
            },
            mouseleave: function () {
                $(this).transition({scale: [1.]})
            }
        });






























});