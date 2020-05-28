"use strict";
banner_button.onclick = function () {
	banner_button.style = "background-color: white; color: #ff3f40;";
	setTimeout(function(){
		banner_button.style = "background-color: #ff3f40; color: white;"
	}, 200);
};
services_button.onclick = function () {
	services_button.style = "background-color: white; color: #ff3f40;";
	setTimeout(function(){
		services_button.style = "background-color: #ff3f40; color: white;"
	}, 200);
};
services_button.onmouseout = function () {
	services_button.style = "background-color: white; color: #ff3f40;";
};
services_button.onmouseover = function () {
	services_button.style = "background-color: #ff3f40; color: white;";
};
YV1.onclick = function () {
	person_image.src = "images/person_1.jpg";
};
YV2.onclick = function () {
	person_image.src = "images/person_2.jpg";
};
YV3.onclick = function () {
	person_image.src = "images/person_3.jpg";
};
YV4.onclick = function () {
	person_image.src = "images/person_4.jpg";
};
menu_point_1.onmouseover = function () {
	menu_point_1.style = "background-color: #ff3f40; width: 30%; list-style-position: inside; border: 2px solid #ff3f40;";
};
menu_point_1.onmouseout = function () {
	menu_point_1.style = "background-color: none; width: 20%;";
};
menu_point_2.onmouseover = function () {
	menu_point_2.style = "background-color: #ff3f40; width: 30%;";
};
menu_point_2.onmouseout = function () {
	menu_point_2.style = "background-color: none; width: 20%;";
};
menu_point_3.onmouseover = function () {
	menu_point_3.style = "background-color: #ff3f40; width: 30%;";
};
menu_point_3.onmouseout = function () {
	menu_point_3.style = "background-color: none; width: 20%;";
};
menu_point_4.onmouseover = function () {
	menu_point_4.style = "background-color: #ff3f40; width: 30%;";
};
menu_point_4.onmouseout = function () {
	menu_point_4.style = "background-color: none; width: 20%;";
};
menu_point_1.onclick = function () {
	menu_point_1.style = "background-color: white; width: 30%; list-style-position: inside;";
	menu_point_text_1.style = "color: #ff3f40;";
	setTimeout(function(){
		menu_point_1.style = "background-color: #ff3f40; width: 30%;";
		menu_point_text_1.style = "color: white;";
	}, 200);	
};
menu_point_2.onclick = function () {
	menu_point_2.style = "background-color: white; width: 30%; list-style-position: inside;";
	menu_point_text_2.style = "color: #ff3f40;";
	setTimeout(function(){
		menu_point_2.style = "background-color: #ff3f40; width: 30%;";
		menu_point_text_2.style = "color: white;";
	}, 200);	
};
menu_point_3.onclick = function () {
	menu_point_3.style = "background-color: white; width: 30%; list-style-position: inside;";
	menu_point_text_3.style = "color: #ff3f40;";
	setTimeout(function(){
		menu_point_3.style = "background-color: #ff3f40; width: 30%;";
		menu_point_text_3.style = "color: white;";
	}, 200);	
};
menu_point_4.onclick = function () {
	menu_point_4.style = "background-color: white; width: 30%; list-style-position: inside;";
	menu_point_text_4.style = "color: #ff3f40;";
	setTimeout(function(){
		menu_point_4.style = "background-color: #ff3f40; width: 30%;";
		menu_point_text_4.style = "color: white;";
	}, 200);	
};