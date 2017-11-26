$(function() {


  	var pickerDevice = myApp.picker({
	input: '#picker-device',
  	rotateEffect: true,

	cols: [
	        {
	            textAlign: 'center',
	            displayValues: ['Artes', 'Auto-Ajuda', 'Biografias', 'Educação', 'Ficção', 'Humor', 'Literatura Juvenil', 'Suspense', 'Poema', 'Romance'],
	            values: ['art', 'self-help', 'biography', 'education', 'fiction', 'humor', 'juvenile', 'suspense', 'poem', 'romance']
	        }
	    ]
	});


	console.log(pickerDevice);


    

  $.ajax({
    url: 'https://www.googleapis.com/books/v1/volumes?q=subject:' + 'arts' + '&maxResults=40',
    dataType: 'json',
   	type: 'GET',
    

    success: function(data) { 
    	for(i = 0; i <data.items.length; i++){
    		resultados.innerHTML +=" <li>" + " <a href='" + data.items[i].volumeInfo.infoLink + "'" + " class='item-link item-content'>" + "<div class='item-media'>" + "<img class='ajusteimg' src='" + data.items[i].volumeInfo.imageLinks.thumbnail + "'>" +"</div>" +"<div class='item-inner'>" + "<div class='item-title-row'>" + "<div class='item-title'>" + data.items[i].volumeInfo.title + "</div>" + "</div>"+ "<div class='item-subtitle'>" + data.items[i].volumeInfo.authors + "</div>" + "<div class='item-text'>" + data.items[i].volumeInfo.description +"</div>" + "</div>"+ "</a>" + "</li>"
 	
    	}

		
    },
    
  });
    
});
