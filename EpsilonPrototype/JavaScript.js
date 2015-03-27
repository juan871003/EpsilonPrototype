window.onload = function() {
    $('.image.draggable').draggable({
        containment: '#imagesTable',
        start: dragStarted,
        stop: dragStopped
    });
}

function dragStarted(event, ui) {

}

function dragStopped(event, ui) {

}