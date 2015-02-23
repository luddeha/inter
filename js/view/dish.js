//ExampleView Object constructor
var Dish = function (container, model) {
	
	window.stateController.addView("dish", this);
	model.addObserver(this)
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfPeople = container.find("#numberOfPeople");
	this.confirmDinner = container.find("#confirmDinner");
	this.selectDish = container.find("#selectDish");
	this.confirmDish = container.find("#confirmDish");

	this.numberOfGuests.attr("value", model.getNumberOfGuests);
	this.numberOfPeople.html(model.getNumberOfGuests);

	this.show = function() {
		$("#dish").show();
	}

	this.hide = function() {
		$("#dish").hide();
	}

	var update = function(){
		var dish = model.getDish(1);
		_.each(dish["ingredients"], function(ingredient) {
			$( "#ingredients" ).append( '<tr><td>'+ingredient["quantity"]+ingredient["unit"]+'</td><td>'+ingredient["name"]+'</td><td>SEK</td><td>'+ingredient["price"]+'</td></tr>' );
		})

		var dish = model.getDish(1);
			$( "#rowImgDish" ).append( '<td><img class="bordered" src="images/'+dish["image"]+'""></td>' );
			$( "#rowNameDish" ).append( '<td><b>'+dish["name"]+'</b></td>' );
			$( "#rowDescriptionDish" ).append( '<td>'+dish["description"]+'</td>' );
	}
}
