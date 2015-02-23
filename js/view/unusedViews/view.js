//ExampleView Object constructor
var View = function (container, model) {
	
	model.addObserver(this)
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	console.log(this.numberOfGuests.html(model.getNumberOfGuests));

	var items = model.getFullMenu();
_.each(items, function(dish) {
	$( "#rowImgOver" ).append( '<td><img class="bordered" src="images/'+dish["image"]+'""></td>' );
	$( "#rowNameOver" ).append( '<td><b>'+dish["name"]+'</b></td>' );
	$( "#rowCostOver" ).append( '<td>'+dish["cost"]+'</td>' );
})


var dish = model.getDish(1);
_.each(dish["ingredients"], function(ingredient) {
	$( "#ingredients" ).append( '<tr><td>'+ingredient["quantity"]+ingredient["unit"]+'</td><td>'+ingredient["name"]+'</td><td>SEK</td><td>'+ingredient["price"]+'</td></tr>' );
})

var dish = model.getDish(1);
	$( "#rowImgDish" ).append( '<td><img class="bordered" src="images/'+dish["image"]+'""></td>' );
	$( "#rowNameDish" ).append( '<td><b>'+dish["name"]+'</b></td>' );
	$( "#rowDescriptionDish" ).append( '<td>'+dish["description"]+'</td>' );


document.getElementsById("numberOfGuests").setAttribute("value", String(model.getNumberOfGuests())); 

console.log(String(document.getElementById("numberOfGuests").getAttribute("value")))

var items = model.getAllDishes("main dish").toArray();
_.each(items, function(dish) {
	$( "#rowImg" ).append( '<td><img class="bordered" src="images/'+dish["image"]+'""></td>' );
	$( "#rowName" ).append( '<td><b>'+dish["name"]+'</b></td>' );
	$( "#rowDescription" ).append( '<td>'+dish["description"]+'</td>' );	
})

	
}
 
