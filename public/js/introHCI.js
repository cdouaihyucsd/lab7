'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(sendLike);
}

function sendLike(event){
	event.preventDefault();
	ga("create", "UA-134940364-1", "auto");
	ga("send", "event", "like", "click");
}