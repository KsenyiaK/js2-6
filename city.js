var $select = $('#city');


$.ajax({
	type: 'GET',
	url: 'city.json',
	dataType: 'json',
	success: function(data) {
		var amountCity = data.city.length;
		for (var i = 0; i < amountCity; i++) {
			var $option = $("<option></option>");
			$option.attr('value', data.city[i]);
			$option.text(data.city[i]);
			$select.append($option);
		}
	},
	error: function(error) {
		console.log(error);
	}
});