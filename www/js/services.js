angular.module('starter.services', [])

.factory('Pinches', function() {
	
	var pinches = [
		{	id: 1, message: "I Need Coffee because I have been working on Pinch all night", userId: "Wilson", 
		 	face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' },
		 	
		{	id: 2, message: null, userId: "Daniel",
		 	face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'},
		 	
		{ 	id: 3, message: null, userId: "Daniel",
		    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'},
		    
		{ 	id: 4, message: null, userId: "Daniel",
		 	face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'},
		 	
		{ 	id: 5, message: null, userId: null,
		    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'},
		    
		{ 	id: 6, message: "I'm loving all this pinching while learning ionic and angular!", userId: null,
		    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'},
		    
		{ 	id: 7, message: "Pinch Me! I think I'm getting the hang of this!", userId: null,
		 	face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'},
		 	
		{ 	id: 8, message: "Taking this pinch to whole new level", userId: null,
		    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'},
		    
		{ 	id: 9, message: "Pinch on that!", userId: null,
		 	face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'},
		 	
		{ 	id:10, message: "Such wow!", userId: null,
		    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'},
		    
		{ 	id:11, message: "pp", userId: null,
		 	face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'}
	];
	
	return {
		all: function() {
      		return pinches;
    	},
    	remove: function(pinch) {
      		pinches.splice(pinches.indexOf(pinch), 1);
    	},
    	get: function(pinchId) {
      		for (var i = 0; i < pinches.length; i++) {
        		if (pinches[i].id === parseInt(pinchId)) {
          			return pinches[i];
        		}
      		}
      		return null;
    	}
  	}
});
