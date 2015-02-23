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
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.attr("value", model.getNumberOfGuests);

	this.dropdownStarter = function (){
		this.lable.html("Starter");
	}

	this.dropdownMain = function (){
		this.lable.html("Main");
	}

	this.dropdownDesert = function (){
		this.lable.html("Desert");
	}

	this.show = function() {
		$("#selectdish").show();
	}

	this.hide = function() {
		$("#selectdish").hide();
	}


	var update = function(){
		var items = model.getAllDishes("main dish").toArray();
		_.each(items, function(dish) {
			$( "#rowImg" ).append( '<td><img id="'+dish["id"]+'" class="bordered" src="images/'+dish["image"]+'""></td>' );
			$( "#rowName" ).append( '<td><b>'+dish["name"]+'</b></td>' );
			$( "#rowDescription" ).append( '<td>'+dish["description"]+'</td>' );	
		})
	}

}
