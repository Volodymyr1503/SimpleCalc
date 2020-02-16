$(document).ready(function() {
	//it is to change row background!!!
	//Start 
	$('input[type="checkbox"]').change(function(e) {
		if($(this).is(":checked")) {
			$(this).closest("tr").addClass("background-row");
		} else {
			$(this).closest("tr").removeClass("background-row");
		}
	});
	//End
	//***********************************************************
	//It is for sum calculator
	//Start
	var sum_1 = 0;
	var sum_2 = 0;
	var sum_3 = 0;
	var number_1 = document.querySelector(".number1");
	var number_2 = document.querySelector(".number2");
	var number_3 = document.querySelector(".number3");
	var number_4 = document.querySelector(".number4");
	var number_5 = document.querySelector(".number5");
	var number_6 = document.querySelector(".number6");
	var number_7 = document.querySelector(".number7");
	var number_8 = document.querySelector(".number8");
	var number_9 = document.querySelector(".number9");

	var sum = document.querySelector(".sum");
	sum.addEventListener("click", function() {
		sum_1 = +number_1.value + +number_2.value + +number_3.value;
		sum_2 = +number_4.value + +number_5.value + +number_6.value;
		sum_3 = +number_7.value + +number_8.value + +number_9.value;
		document.querySelector(".result1").innerHTML = sum_1;
		document.querySelector(".result2").innerHTML = sum_2;
		document.querySelector(".result3").innerHTML = sum_3;
	});
	var multiply = document.querySelector(".multiply");
	multiply.addEventListener("click", function() {
		multpl_1 = number_1.value*number_2.value*number_3.value;
		multpl_2 = number_4.value*number_5.value*number_6.value;
		multpl_3 = number_7.value*number_8.value*number_9.value;
		document.querySelector(".result1").innerHTML = multpl_1;
		document.querySelector(".result2").innerHTML = multpl_2;
		document.querySelector(".result3").innerHTML = multpl_3;
	})

/*	var stotal=0;
	var sum = document.querySelector(".sum");
	sum.addEventListener("click", function() {
		$('table tr').each(function(){
		    $(this)
		    .find('input[type=text]')
		    .each(function(){
		        stotal+=parseInt($(this).val());
		    });
		    $(this).find('td:last').html(stotal);    
		});
	});
	var mtotal = 0
	var multpl = document.querySelector(".multiply");
	multpl.addEventListener("click", function() {
		$('table tr').each(function(){
		    $(this)
		    .find('input[type=text]')
		    .each(function(){
		        mtotal+=parseInt($(this).val());
		    });
		    $(this).find('td:last').html(mtotal);    
		});
	})*/
});

