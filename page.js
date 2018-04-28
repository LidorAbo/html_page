$(function(){
	var url = 'http://hn.algolia.com/api/v1/search_by_date?query=javascript'
	$.getJSON(url, function(data){
	    var hits = data.hits
		$('.question').on('click', function(){
				navigator.geolocation.getCurrentPosition(function(position){
						var latitude = position.coords.latitude
						var longtitude = position.coords.longitude
						$('.answer').html(latitude + '<br>' + longtitude)
						console.log(this)
						
				})
				console.log(this)
			})
		})
	});