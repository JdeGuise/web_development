/*

      Author:  John deGuise
      Date:   10/20/16

      Filename: main.js
   */

/* START products.html */


/* END products.html */
var totalCost = 0;


	function calculateOrderTotal()
	{

		var discount = document.getElementById('coupon');


		var arr = document.getElementsByName('qty');

		var price_list = document.getElementsByClassName('price');

				    //initialize each item as an object
			    var Lemon_1 = {
			    	name: "Lemon_1",
			    	qty: document.getElementById("1lemnum").value,
			    	price: ".99",
			    };
			   	
			   	var Lemon_3 = {
			    	name: "Lemon_3",
			    	qty: document.getElementById("3lemnum").value,
			    	price: "2.49",
			    };

			    var Lemon_5 = {
			    	name: "Lemon_5",
			    	qty: document.getElementById("5lemnum").value,
			    	price: "3.99",
			    };

			    var Lemon_10 = {
			    	name: "Lemon_10",
			    	qty: document.getElementById("10lemnum").value,
			    	price: "6.99",
			    };
			    
			    var Lemon_50 = {
			    	name: "Lemon_50",
			    	qty: document.getElementById("50lemnum").value,
			    	price: "24.99",
			    };
			    
			    var Lemonade = {
			    	name: "Lemonade",
			    	qty: document.getElementById("1lemcup").value,
			    	price: "1.99",
			    };
			    
			    var Lemon_Ice = {
			    	name: "Lemon_Ice",
			    	qty: document.getElementById("1lemice").value,
			    	price: "3.99",
			    };
			    
			    var Lemonade_Icecubes = {
			    	name: "Lemonade_Icecubes",
			    	qty: document.getElementById("5lemcubes").value,
			    	price: ".99",
			    };
			    
			    var Lemonade_Pitcher = {
			    	name: "Lemonade_Pitcher",
			    	qty: document.getElementById("1lempitch").value,
			    	price: "4.99",
			    };
			    
			    var Lemonade_Ponykeg = {
			    	name: "Lemonade_Ponykeg",
			    	qty: document.getElementById("1lempkeg").value,
			    	price: "59.99",
			    };

			    var myObjArray = [];
			    myObjArray.push(Lemon_1);
			    myObjArray.push(Lemon_3);
			    myObjArray.push(Lemon_5);
			    myObjArray.push(Lemon_10);
			    myObjArray.push(Lemon_50);
			    myObjArray.push(Lemonade);
			    myObjArray.push(Lemon_Ice);
			    myObjArray.push(Lemonade_Icecubes);
			    myObjArray.push(Lemonade_Pitcher);
			    myObjArray.push(Lemonade_Ponykeg);		    


	/* for each input in the list, check if the value is > 0

		if value > 0

			total += value * myObjArray[i].value


	*/

		var total = 0;
		var taxRate = .08;
		var taxAmt = 0;
		var discountRate = .1;
		var discountTotal = 0;


		for(var i = 0; i < myObjArray.length; i++){

			total += parseFloat(myObjArray[i].qty * myObjArray[i].price);
			// price_arr[i]

			// arr[i].value 

			/* Build Shopping Cart Total*/
			// total += parseInt(arr[i].value);
		}
		taxAmt = taxRate * total;

		/* 10% before tax */
		discountTotal = discountRate*total

		total += taxAmt;

		if(discount.checked){
			total = total - discountTotal
			alert("Assuming 8% tax and 10% discount rate of retail: \n\nYour total is $" + round2Fixed(total));

		}	
		else{
			// continue, no discount applied
			alert("Assuming 8% tax, your total is $" + round2Fixed(total));

		}

		// document.getElementById('total').value = total;
	}

	function round2Fixed(value) {
		  value = +value;

		  if (isNaN(value))
		    return NaN;

		  // Shift
		  value = value.toString().split('e');
		  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + 2) : 2)));

		  // Shift back
		  value = value.toString().split('e');
		  return (+(value[0] + 'e' + (value[1] ? (+value[1] - 2) : -2))).toFixed(2);
	}

