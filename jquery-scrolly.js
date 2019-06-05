(function ($) {

    $.fn.makeScrolly = function(settings) {

        var height = settings.height || 100;
        var image = settings.image;
        var top = settings.top;
        var increment = settings.speed || 5;
        var id = settings.id;
        var zindex = settings.zindex || 100;
        var iterationWait = settings.iterationWait || 80;

        var idAttribute = "";
        if(id) {
            idAttribute = " id='" + id + "' ";
        }
        var styleAttribute = " style='z-index: "+ zindex +"' ";
        $(this).append("<div class='scrolly' "+idAttribute+styleAttribute+"></div>");
        var scrolly = $( ".scrolly" ).last();

        scrolly.css("height",height);
        scrolly.css("background-image","url('"+image+"')");
        scrolly.css("top",top);
        scrolly.data("iterationWait",iterationWait);

        function MoveMe(scrolly) {
            //background-position-x: 0px;
            var currentX = $(scrolly).css("background-position-x").replace("px","");
            var newX = parseInt(currentX) + increment;
            $(scrolly).css("background-position-x", newX + "px");
            
            var wait = scrolly.data("iterationWait");
            setTimeout(function () { MoveMe(scrolly); }, wait);
        }

        MoveMe(scrolly);
        
        return this;
    };

}(jQuery));