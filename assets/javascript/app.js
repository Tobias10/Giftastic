var animal = ['Tigers', 'Bears', 'Elephants', 'Birds'];

	
	function displayAnimalInfo(){

		var animal = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
		 

		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			var animalDiv = $('<div class="animal">');

			var rating = response.Rated;

			
			var pOne = $('<p>').text( "Rating: " + rating);

			
			animalDiv.append(pOne);

			
			var released = response.Released;

			
			animalDiv.append(pTwo);


			
			animalDiv.append(pThree);

		
			animalDiv.append(image);

			$('#animals').prepend(animalDiv);
		});

	}

	function renderButtons(){ 

		function renderButtons(){
	$('#AnimalButtons').empty();
	for (var i = 0; i<animals.length; i++){

		var a = $('<button>')

		a.addClass('animals');
		a.attr('data-name', animals[i]);
		a.text(animals[i]);
		$('#AnimalButtons').append(a);
	}
}


	$('#AnimalButtons').on('click', function(){

		
		var animal = $('#animal-input').val().trim();

		animals.push(animals);
		
		
		renderButtons();

		
		return false;
	})

	$(document).on('click', '.animals', displayAnimalInfo);


	
	renderButtons();



