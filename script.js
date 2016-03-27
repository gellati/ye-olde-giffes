
var createdTextBox = false;
var elementCounter = 0;
var movieCounter = 0;

var imageData=[
    {
//	text: "cap",
	value: 1,
	selected: false,
	imageSrc: "img/cap1.jpg"
    },
    {
//	text: "tauno",
	value: 2,
	selected: false,
	imageSrc: "img/tauno.jpg"
    }
];
    

var gifData = [
    {
	text: "train",
	value: 1,
	selected: false,
	imageSrc: "img/train.gif"
    },
    {
	text: "lumiere",
	value: 2,
	selected: false,
	imageSrc: "img/lumiere.gif"
    }    
];


var textboxData = [
    {value: 1,
     imageSrc: "img/white_1s.gif"},
    {value: 3,
     imageSrc: "img/white_3s.gif"},
    {value: 5,
     imageSrc: "img/white_5s.gif"},
    {value: 7,
     imageSrc: "img/white_7s.gif"}
];


function createTextBoxElement(){
    var creationzone = document.getElementById("creation_zone");
    var textbox = document.createElement("li");
    textbox.className="movie_element textbox_element";	
    textbox.id=elementCounter.toString();

    var header = document.createElement("div");
    header.className = "element_header";
    header.innerHTML = "Text Box";
    
    textbox.appendChild(header);
    
    var input = document.createElement("textarea");
    input.type="text";
    input.setAttribute("id", "textinput"); // elementCounter
    input.placeholder="Insert caption here";
    textbox.appendChild(input);

    var textboxDropdownArea = document.createElement("div");
    textboxDropdownArea.setAttribute("class", "textbox_dropdown_area");

    var textboxDropdown = document.createElement("select");
    textboxDropdown.className="textbox_dropdown";
    for(var i = 0; i < textboxData.length; i++){
	var option = document.createElement("option");
	option.setAttribute("value", textboxData[i].value);
	option.setAttribute("title", textboxData[i].imageSrc);
	textboxDropdown.appendChild(option);
    }
    textboxDropdownArea.appendChild(textboxDropdown);
    textbox.appendChild(textboxDropdownArea);

    
    var animation = document.createElement("div");
    animation.className = "animation";
    var animationTitle = document.createElement("p");
    animationTitle.innerHTML = "Animation";
    animation.appendChild(animationTitle);
    
    var animationAlternatives = ["None", "Fade out", "Slide in (Top)",
				 "Slide in (Bottom)"];
    var animationSelect = document.createElement("select");
    for(var i = 0; i < animationAlternatives.length; i++){
	var option = document.createElement("option");
	option.innerHTML = animationAlternatives[i];
	animationSelect.appendChild(option);
    }
    animation.appendChild(animationSelect);
    textbox.appendChild(animation);
    
    var duration = document.createElement("div");
    var durationTitle = document.createElement("p");
    durationTitle.innerHTML = "Duration";
    duration.appendChild(durationTitle);
    var durationLengths = [1,3,5,7];
    var selectLength = document.createElement("select");
    for(var i = 0; i < durationLengths.length; i++){
	var option = document.createElement("option");
	option.innerHTML = durationLengths[i].toString();
	selectLength.appendChild(option);
    }
    duration.appendChild(selectLength);
    textbox.appendChild(duration);

    var deletebutton = document.createElement("button");
    var deletestring = "removeElement(" + elementCounter + ")";
    deletebutton.setAttribute("onclick", deletestring);
    deletebutton.setAttribute("class", "deletebutton");
    
    deletebutton.innerHTML = "delete";
    textbox.appendChild(deletebutton);	
    
    creationzone.appendChild(textbox);
    //	createdTextBox = true;
    elementCounter++;
}



function createImageElement(){
    var creationzone = document.getElementById("creation_zone");
    var image = document.createElement("li");
    image.className="movie_element image_element";	
    image.id=elementCounter.toString();

    var header = document.createElement("div");
    header.className = "element_header";
    header.innerHTML = "Image";
    
    image.appendChild(header);


    // image selection

    /*
    var imageDropdown = document.createElement("div");
    imageDropdown.className = "image-dropdown";

    for(var i = 0; i < imageData.length; i++){
	var input = document.createElement("input");
	input.setAttribute("type", "radio");
	var img_id = "image" + imageData[i].value;
	input.setAttribute("id", img_id);
	input.setAttribute("name", imageData[i].text);
	input.setAttribute("value", imageData[i].value);

	var label = document.createElement("label");
	label.setAttribute("for", img_id);

	
	imageDropdown.appendChild(input);
	imageDropdown.appendChild(label);

    }
*/


    var imageDropdown = document.createElement("select");
    imageDropdown.className = "image_dropdown";
    for(var i = 0; i < imageData.length; i++){
	var option = document.createElement("option");
	option.setAttribute("value", imageData[i].value);
	option.setAttribute("title", imageData[i].imageSrc);
	imageDropdown.appendChild(option);
    }


/*
    var imageDropdown = document.createElement("div");
    imageDropdown.className="image_dropdown";
*/  
  

    image.appendChild(imageDropdown);


/*    
    var input = document.createElement("input");
    input.type="text";
    input.placeholder="Insert caption here";
    image.appendChild(input);
*/


    
    var animation = document.createElement("div");
    animation.className = "animation";
    var animationTitle = document.createElement("p");
	animationTitle.innerHTML = "Animation";
    animation.appendChild(animationTitle);
    
    var animationAlternatives = ["None"];
    var animationSelect = document.createElement("select");
    for(var i = 0; i < animationAlternatives.length; i++){
	var option = document.createElement("option");
	option.innerHTML = animationAlternatives[i];
	animationSelect.appendChild(option);
    }
    animation.appendChild(animationSelect);
    image.appendChild(animation);
    
    var type = document.createElement("div");
    var typeTitle = document.createElement("p");
    typeTitle.innerHTML = "Type";
    type.appendChild(typeTitle);
    var typeTypes = ["None"];
	var selectType = document.createElement("select");
    for(var i = 0; i < typeTypes.length; i++){
	var option = document.createElement("option");
	option.innerHTML = typeTypes[i].toString();
	selectType.appendChild(option);
    }
    type.appendChild(selectType);
    image.appendChild(type);

    var deletebutton = document.createElement("button");
    var deletestring = "removeElement(" + elementCounter + ")";
    deletebutton.setAttribute("onclick", deletestring);
    deletebutton.setAttribute("class", "deletebutton");
    
    deletebutton.innerHTML = "delete";
    image.appendChild(deletebutton);	
    
    creationzone.appendChild(image);
    //	createdTextBox = true;
    elementCounter++;
}


function createGifElement(){
    var creationzone = document.getElementById("creation_zone");
    var gif = document.createElement("li");
    gif.className="movie_element gif_element";	
    gif.id=elementCounter.toString();

    var header = document.createElement("div");
    header.className = "element_header";
    header.innerHTML = "Gif";
    
    gif.appendChild(header);


// gif selection    

    var gifDropdown = document.createElement("select");
    gifDropdown.className="gif_dropdown";
    gifDropdown.setAttribute("id", "gif_dropdown" + gif.id);
    for(var i = 0; i < gifData.length; i++){
	var option = document.createElement("option");
	option.setAttribute("value", gifData[i].value);
	option.setAttribute("title", gifData[i].imageSrc);
	gifDropdown.appendChild(option);
    }

    //    imageDropdown.appendChild(imageSelect);
    gif.appendChild(gifDropdown);


    var animation = document.createElement("div");
    animation.className = "animation";
    var animationTitle = document.createElement("p");
    animationTitle.innerHTML = "Animation";
    animation.appendChild(animationTitle);
    
    var animationAlternatives = ["None", "Fade out", "Slide in (Top)", "Slide in (Bottom)"];
    var animationSelect = document.createElement("select");
    for(var i = 0; i < animationAlternatives.length; i++){
	var option = document.createElement("option");
	option.innerHTML = animationAlternatives[i];
	animationSelect.appendChild(option);
    }
    animation.appendChild(animationSelect);
    gif.appendChild(animation);
    
    var type = document.createElement("div");
    var typeTitle = document.createElement("p");
    typeTitle.innerHTML = "Type";
    type.appendChild(typeTitle);
    var typeTypes = ["None"];
    var selectType = document.createElement("select");
    for(var i = 0; i < typeTypes.length; i++){
	var option = document.createElement("option");
	option.innerHTML = typeTypes[i].toString();
	selectType.appendChild(option);
    }
    type.appendChild(selectType);
    gif.appendChild(type);

    var deletebutton = document.createElement("button");
    var deletestring = "removeElement(" + elementCounter + ")";
    deletebutton.setAttribute("onclick", deletestring);
    deletebutton.setAttribute("class", "deletebutton");
    
    deletebutton.innerHTML = "delete";
    gif.appendChild(deletebutton);	
    
    creationzone.appendChild(gif);
    //	createdTextBox = true;
    elementCounter++;
}








    function createMovie(){
	var movie_elements = document.getElementById("movie_elements");
	console.log(movie_elements);

	var movie_list = movie_elements.getElementsByTagName("li");
	console.log("mov length: " + movie_list.length);

	var li_list = movie_elements.getElementsByClassName("movie_element");
	console.log("li length: " + li_list.length);

	var clips = [];

	for(var i = 0; i < li_list.length;i++){
	    var dd = li_list[i].querySelector(".ddTitleText > img");
	    console.log(dd.src);
//	    var img = dd.querySelector("img");
//	    console.log(img.length);
//	    console.log(img.src);
	    clips.push(dd.src);


	}

	console.log(clips.length);
	console.log(clips);

	var movizeone = document.getElementById("#moviezone");
	var text = "";

	if(document.getElementById("textinput")){
	    text = document.getElementById("textinput").value;
	}

	gifshot.createGIF({
	    'images': clips,
	    'interval': 1,
	    'text': text,
	    'fontSize': '30px',
	    'fontColor': '#000FFF'
	},function(obj) {
	    if(!obj.error) {


		var image = obj.image,
		    animatedImage = document.createElement('img');
	//	animatedImage.setAttribute("id", "gifmovie"+movieCounter.toString());
		animatedImage.src = image;		


		var deleteButton = document.createElement("button");
		var deleteString = "removeMovie(" + movieCounter + ")";
		deleteButton.setAttribute("onclick", deleteString);
		deleteButton.setAttribute("class", "deletebutton");
		deleteButton.innerHTML = "delete";

		var img = document.createElement("div");
		img.setAttribute("id", "gifmovie"+movieCounter.toString());
		    
		img.appendChild(animatedImage);
		img.appendChild(deleteButton);

//		animatedImage.appendChild(deleteButton);
		moviezone.appendChild(img);


		movieCounter++;

	    }
});

	


    }


function removeElement(divNum) {
    console.log(divNum);

    var d = document.getElementById(divNum.toString());
    d.parentNode.removeChild(d);
	createdTextBox = false;
}

function removeMovie(n){
    var d = document.getElementById("gifmovie"+n.toString());
    d.parentNode.removeChild(d);
}



    
$(function() {

    var elementTypes = [{"class": "Textbox",
			 "Animation": ["None",
				       "Fade out",
				       "Slide in (Top)",
				       "Slide in (Bottom)"],
			 "Duration": [1, 3, 5, 7]
			},
			{"class": "Image",
			 "Animation": ["None"],
			 "Type": ["None"]
			},
			{"class": "Gif",
			 "Animation": ["None",
				       "Fade out",
				       "Slide in (Top)",
				       "Slide in (Bottom)"]
			}
		       ];

    

    $("#movie_elements, #creation_zone").sortable({
	connectWith: "#movie_elements",
	handle: ".element_header",
	cancel: ".portlet-toggle",
	placeholder: "portlet-placeholder ui-corner-all"
    });

    $(".movie_element")
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".element_header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
 
    $( ".portlet-toggle" ).click(function() {
	var icon = $( this );
	icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
	icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });    
    

    

    $("#trash-can").droppable({
        hoverClass: "droppable-hover",
        drop: function(event, ui) {
            var element = ui.draggable.css('position', '');
            $(this).append(element);
            $(ui.draggable).fadeOut(500);

        }
    });
});

$(document).on('click', function(){


    $(".gif_dropdown").msDropDown();
    $(".image_dropdown").msDropDown();
    $(".textbox_dropdown").msDropDown();


    function printOption(n){
	console.log(n);
    }

    
    /*    
    $(".image_dropdown").ddslick({
	data: imageData,
	width: 150,
	selectText: "Select image",
	imagePosition: "right",
	onSelected: function(selectedData){
	}
    });


    $(".gif_dropdown").ddslick({
	data: gifData,
	width: 150,
	selectText: "Select gif",
	imagePosition: "right",
	onSelected: function(selectedData){
	}
    });
*/


});
