//ExampleView Object constructor
var Dish = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests);

var items = model.getAllDishes("main dish").toArray();
_.each(items, function(dish) {
	_.each(dish["ingredients"], function(ingredient) {
		$( "#ingredients" ).append( '<tr><td>'+ingredient["quantity"]+ingredient["unit"]+'</td><td>'+ingredient["name"]+'</td><td>SEK</td><td>'+dish["ingredients"]["price"]+'</td></tr>' );
	})
})
}
