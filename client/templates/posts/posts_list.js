Template.postsList.helpers({
	posts: function() {
		return Posts.find();
	}
});

Template.postsList.rendered = function(){
	$('.grid').imagesLoaded(function(){
		// images have loaded
		// User the Packery jQuery plugin
		$('.grid').packery({
			// options
			itemSelector: '.item',
			//horizontal and vertical spacing between elements
			gutter: 10
		});
	});
};