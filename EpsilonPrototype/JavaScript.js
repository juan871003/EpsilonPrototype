window.onload = function () {
    $(".imageContainer").each(function () {
        $(this).has("img").removeClass("droppable");
        $(this).not(":has('img')").addClass("droppable");
    });

    $('.image.draggable').draggable({
        revert: "invalid",
        containment: '#imagesTable',
        addClasses: false//,
        //stop: dragStopped
    });

    $(".droppable").droppable({
        activeClass: "dragHere",
        hoverClass: "dropHere",
        accept: ".image",
        addClasses: false,
        drop: dropped
    });
}

function dropped(event, ui) {
    $(this).append(ui.draggable);
    ui.draggable.position({
        my: "left top",
        at: "left top",
        of: this,
        collision: "none"
    });
    $(".droppable").droppable("destroy");

    $(".imageContainer").each(function () {
        $(this).has("img").removeClass("droppable");
        $(this).not(":has('img')").addClass("droppable");
    });

    $(".droppable").droppable({
        activeClass: "dragHere",
        hoverClass: "dropHere",
        accept: ".image",
        addClasses: false,
        drop: dropped
    });
}