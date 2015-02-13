//ExampleView Object constructor
var Dish = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests);

document.getElementById("numberOfGuests").setAttribute("value", String(model.getNumberOfGuests())); 

console.log(String(model.getNumberOfGuests()))

var items = model.getAllDishes("main dish").toArray();
_.each(items, function(dish) {
	$( "#rowImg" ).append( '<td><img class="bordered" src="images/'+dish["image"]+'""></td>' );
	$( "#rowName" ).append( '<td><b>'+dish["name"]+'</b></td>' );
	$( "#rowDescription" ).append( '<td>'+dish["description"]+'</td>' );	
})

}
