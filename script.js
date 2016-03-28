
var createdTextBox = false;
var elementCounter = 0;
var movieCounter = 0;

var imageData=[
    {
//	text: "cap",
	value: 0,
	selected: false,
	imageSrc: "img/cap1.jpg"
    },
    {
//	text: "tauno",
	value: 1,
	selected: false,
	imageSrc: "img/tauno.jpg"
    }
];
    

var gifData = [
    {
	text: "train",
	value: 0,
	selected: false,
	imageSrc: "img/train.gif",
//	imageSrc: "img/orange_splash.gif",
	time: 500
    },
    {
	text: "lumiere",
	value: 1,
	selected: false,
	imageSrc: "img/lumiere.gif",
	time: 2000
	
    }    
];

var textboxData = [
    {value: 1000,
     imageSrc: "img/grain.gif"},
    {value: 3000,
     imageSrc: "img/grain.gif"},
    {value: 5000,
     imageSrc: "img/grain.gif"},
    {value: 7000,
     imageSrc: "img/grain.gif"}
];

/*
var textboxData = [
    {value: 1000,
     imageSrc: "img/white_1s.gif"},
    {value: 3000,
     imageSrc: "img/white_3s.gif"},
    {value: 5000,
     imageSrc: "img/white_5s.gif"},
    {value: 7000,
     imageSrc: "img/white_7s.gif"}
];
*/

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
    selectLength.setAttribute("class", "selectLength");
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




function createGifMovie(){
    var movie_elements = document.getElementById("movie_elements");
    var movie_li = movie_elements.getElementsByClassName("movie_element");
    var indexes = [];
    var movie_objects = [];

    var start = {image: "img/countdown.gif",
		 time: 10000};
    movie_objects.push(start);

    
    for(var i = 0; i < movie_li.length; i++){
	var element = {};
	console.log(movie_li[i]);
	console.log(movie_li[i].className);
	if($(movie_li[i]).hasClass("textbox_element")){
	    element.type = "text";
//	    var text = movie_li[i].getElementById("textinput").value;
	    var text = movie_li[i].querySelector("textarea").value;
	    console.log("text: " + text);
	    element.text = text;
	    var time_index = movie_li[i].querySelector(".selectLength").selectedIndex;
	    element.time = textboxData[time_index].value;
	    element.image = textboxData[time_index].imageSrc;

	}
	if($(movie_li[i]).hasClass("gif_element")){
	    element.type = "gif";
	    var dropdown = movie_li[i].querySelector(".gif_dropdown");
	    dropdown_id = "#" + dropdown.id
	    var ddropdown = $(dropdown_id).msDropDown();
//	    element.value = ddropdown.val();
	    element.time = gifData[ddropdown.val()].time;
	    element.image = gifData[ddropdown.val()].imageSrc;
	    element.text = "";


	}

	console.log(element);

	movie_objects.push(element);

	/*
	console.log(movie_li[i].className.length);	
	console.log(movie_li[i].className[0]);	

	var dropdown = movie_li[i].querySelector(".gif_dropdown");
	console.log(dropdown);
	console.log(dropdown.length);
	console.log(dropdown.id);
	dropdown_id = "#" + dropdown.id
	var ddropdown = $(dropdown_id).msDropDown();
	console.log(ddropdown);
	console.log(ddropdown.val());
	//	console.log(ddropdown.get("selectedIndex"))
	indexes.push(ddropdown.val());
*/

    }

  
    var end = {image: "img/the_end.gif",
	       time: 1000
	      }
    movie_objects.push(end);


    
/*
    for(var i = 0; i < indexes.length; i++){
	console.log(gifData[indexes[i]].imageSrc);
	console.log(gifData[indexes[i]].time);	
    }
*/
    var moviezone = document.getElementById("moviezone");
    var imageArea = document.createElement("div");
    imageArea.setAttribute("id", "gifmovie"+movieCounter.toString());

    var img = document.createElement("img");
    img.setAttribute("id", "gifmovie");
    var text = document.createElement("div");
    text.setAttribute("id", "giftext");
    imageArea.appendChild(img);
    imageArea.appendChild(text);
    moviezone.appendChild(imageArea);

    var deleteButton = document.createElement("button");
    var deleteString = "removeMovie(" + movieCounter + ")";
    deleteButton.setAttribute("onclick", deleteString);
    deleteButton.setAttribute("class", "deletebutton");
    deleteButton.innerHTML = "delete";
    imageArea.appendChild(deleteButton);



    var j = 0;
    var counter = 0;
    var interval = movie_objects[j].time;
    function updateAnimations(){
	img.src = movie_objects[j].image;
	text.innerHTML = movie_objects[j].text;

	if(j == movie_objects.length - 1){
	    return;
	}
	else{

	    j++;
	}
	interval = movie_objects[j].time;
	setTimeout(updateAnimations, interval);	
    }
    setTimeout(updateAnimations, interval);



    


/*
    // works
    var j = 0;
    var counter = 0;
    var interval = gifData[j].time;
    console.log("ind: " + indexes.length);

    function updateAnimations(){
	j = counter % indexes.length;
	img.src = gifData[indexes[j]].imageSrc;
	console.log("c: " + counter);
	console.log("j: " + j + ", ind: " + indexes[j]);
//	interval = gifData[ (counter % indexes.length) ].time;
	interval = gifData[ indexes[j] ].time;
	counter++;
	setTimeout(updateAnimations, interval);	
    }

    setTimeout(updateAnimations, interval);
*/








    

/*
// all gifs played simultaneously, only switches between which ones are visible
// display on/off through css
    var movieslideshow = document.createElement("div");
    var movieslideshow_id = "gifmovie" + movieCounter.toString();
    movieslideshow.setAttribute("id", movieslideshow_id);
    for(var i = 0; i < movie_li.length; i++){
	var img2 = document.createElement("img");
	if(i === 0){
	    img2.setAttribute("class", "active");
	}
	img2.setAttribute("data-timeout", gifData[indexes[i]].time);
	img2.setAttribute("src", gifData[indexes[i]].imageSrc);
	movieslideshow.appendChild(img2);
    }

    imageArea.appendChild(movieslideshow);
    moviezone.appendChild(imageArea);

    movieCounter++;
    
    console.log(movieslideshow_id);
    movieslideshow_id = "#" + movieslideshow_id;
    console.log(movieslideshow_id);
    var $x = $(movieslideshow_id);
    var spin = function () {
	var $a = $x.children('.active');
	var t = $a.data('timeout');
	
	setTimeout(function () {
            console.log('in timeout function, ' + movieslideshow_id);
            $a.removeClass('active');
            var $b = $a.next();
            if ($b.length == 0) {
		$b = $a.siblings().first();
            }
            $b.addClass('active');
            spin();
	}, t);
	
    }
    spin();
*/
    



    
/*
    var animateImage = document.createElement('img');
    for(var i = 0; i < indexes.length; i++){
	console.log(indexes[i]);
	console.log(gifData[indexes[i]].imageSrc);
//	$("#moviezone").css('visibility','visible').hide().delay(gifData[indexes[i]]).fadeIn(100);
	img.src = gifData[indexes[i]].imageSrc;
	img.css('visibility','visible').hide().delay(gifData[indexes[i]]).fadeIn(100);
    }
*/




    


    


/*
    var j = 0;
    var counter = 0;
    function updateAnimations(){
	j = counter % indexes.length;
	console.log(gifData[indexes[j]].imageSrc);
//	document.getElementById("gifmovie").src = gifData[indexes[j]].imageSrc;
	img.src = gifData[indexes[j]].imageSrc;
	counter++;
    }
    setInterval(updateAnimations, 500);
*/


    
    /*
    var j = 0;
    var counter = 0;
    function repeatOften() {
	//	j =  indexes.length - 1; //(j == 0) ? 1 : 0;

	j = counter % indexes.length;
	
	console.log("j: " + j);
	console.log(gifData[indexes[j]].imageSrc);
	img.src = gifData[indexes[j]].imageSrc;
	requestAnimationFrame(repeatOften);
	counter++;
    }
    requestAnimationFrame(repeatOften);
*/
	

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

	var movizeone = document.getElementById("moviezone");
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
		    img = document.createElement('img');

		img.src = image;		

		var deleteButton = document.createElement("button");
		var deleteString = "removeMovie(" + movieCounter + ")";
		deleteButton.setAttribute("onclick", deleteString);
		deleteButton.setAttribute("class", "deletebutton");
		deleteButton.innerHTML = "delete";

		var imageArea = document.createElement("div");
		imageArea.setAttribute("id", "gifmovie"+movieCounter.toString());
		    
		imageArea.appendChild(img);
		imageArea.appendChild(deleteButton);

		moviezone.appendChild(imageArea);
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
