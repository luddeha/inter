//ExampleView Object constructor
var SelectDish = function (container, model) {
	
	window.stateController.addView("selectdish", this);
	model.addObserver(this)
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.confirmDinner = container.find("#confirmDinner");
	this.lable = container.find("#dropdownLable");
	this.starter = container.find("#starter");
	this.main = container.find("#main");
	this.desert = container.find("#desert");
	this.search = container.find("#btnSearch");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.searchString = container.find("#searchString");
	this.numberOfPeople = container.find("#numberOfGuests");
	//this.clickImg = container.find("img");
	var img = container.find("#rowImg");
	var name = container.find("#rowName");
	var description = container.find("#rowDescription");
	var totalMenuPrice = container.find("#totalPrice");
	var sidebarMenu = container.find("#sidebarMenu");
	var course = "starter";
	var search = "";
	
	this.numberOfGuests.attr("value", model.getNumberOfGuests);

	this.setSearch = function(string) {
		search = string;
	}

	this.dropdownStarter = function (){
		this.lable.html("Starter");
		course = "starter";
	}

	this.dropdownMain = function (){
		this.lable.html("Main");
		course = "main dish";
	}

	this.dropdownDesert = function (){
		this.lable.html("Dessert");
		course = "dessert";
	}

	this.show = function() {
		$("#selectdish").show();
	}

	this.hide = function() {
		$("#selectdish").hide();
	}


	this.update = function(){
		// Remove previous elements
		img.empty();
		name.empty();
		description.empty();
		sidebarMenu.empty();

		this.numberOfPeople.val(model.getNumberOfGuests());
		totalMenuPrice.html(model.getTotalMenuPrice());

		var items = model.getAllDishes(course, search).toArray();
		_.each(items, function(dish) {
			img.append( '<td><img id="'+dish["id"]+'" clickable="yes" class="bordered" src="images/'+dish["image"]+'"></td>' );
			name.append( '<td><b>'+dish["name"]+'</b></td>' );
			description.append( '<td>'+dish["description"]+'</td>' );	
		})

		var items = model.getFullMenu();
		_.each(items, function(dish) {
			sidebarMenu.append( '<tr id="'+dish["id"]+'" clickable="yes"><td>'+dish["name"]+'</td><td>'+model.getTotalDishPrice(dish["id"])+'</td></tr>');
		})
	}

}
