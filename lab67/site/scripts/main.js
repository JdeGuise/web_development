var week_cells = document.getElementsByClassName('weekly');
console.log(week_cells);



var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function addColumnHeaders()
{
	var i = 0;

	while (i < 7){
		document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];

		i++;
	}
}

function addCalendarDates() 
{
	var i = 1;
	var paragraphs = "";
	do {
	
		var tableCell = document.getElementById("10-" + i);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[0].innerHTML = i;
		i++;
	
	} 
	while (i <= 31);
}
function addSales(){
	var i = 5;
	var j = 1;
	var paragraphs = "";
	do {
		var tableCell = document.getElementById("10-"+ i);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[1].innerHTML = "Weekly Sale Date " + j;
		j++;
		i+= 7;
	}
	while(i <= 31);
}

function setupPage(){
	addColumnHeaders();
	addCalendarDates();
	addSales();
}

window.addEventListener("load", setupPage, false);