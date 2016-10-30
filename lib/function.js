function show_customer_id(){
	customer_id = "Customer ID:   " + document.getElementById('customer-id').value;
	
	document.getElementById('show-customer-id').innerHTML = customer_id;
	document.getElementById('total-items').style.visibility = 'visible';
	document.getElementById('total-items').innerHTML = "89";
	document.getElementById('total-spending').style.visibility = 'visible';
	document.getElementById("total-spending").innerHTML = "¥25,550";
	document.getElementById('comments').style.visibility = 'visible';
	document.getElementById("comments").innerHTML = "115";
	document.getElementById('visits').style.visibility = 'visible';
	document.getElementById("visits").innerHTML = "72,525";
	document.getElementById('easypiechart-teal').setAttribute("data-percent",'80');

	document.getElementById('photo').style.visibility = 'visible';
	document.getElementById("easypiechart-orange").style.visibility = 'visible';
	document.getElementById('easypiechart-teal').style.visibility = 'visible';
	document.getElementById('easypiechart-red').style.visibility = 'visible';
	document.getElementById('morris-line-chart').style.visibility = 'visible';
	document.getElementById('morris-bar-chart').style.visibility = 'visible';
	document.getElementById('morris-area-chart').style.visibility = 'visible';
	document.getElementById('morris-donut-chart').style.visibility = 'visible';


	document.getElementById('ordering-list').style.visibility = 'visible';

}

function mouse_over_low(){
	document.getElementById("low").innerHTML = "44%";
}
function mouse_out_low(){
	document.getElementById("low").innerHTML = "63,557";
}
function mouse_over_mid(){
	document.getElementById("mid").innerHTML = "40%";
}
function mouse_out_mid(){
	document.getElementById("mid").innerHTML = "58,166";
}
function mouse_over_high(){
	document.getElementById("high").innerHTML = "16%";
}
function mouse_out_high(){
	document.getElementById("high").innerHTML = "22,389";
}
