
	
	$(document).ready(function(){
		$(".next_btn").click(function(){
		$('#firstname').prop('required',true);
		$('#lastname').prop('required',true);
		$('#phone').prop('required',true);
		$('#office').prop('required',true);
		$('#email').prop('required',true);
		$('#password').prop('required',true);
		$('#cpassword').prop('required',true);
		//var sex = $("input[@name=radio]:checked").val();
		// if (sex === ""){
        //     alert("Please enter your sex.");
        // }
		if ((!($('#gender_male').prop('checked'))) || (!($('#gender_female').prop('checked')))) {
			$("#radio_error").html("please select a gender");  
			console.log(99);
        }
        else {
			$("#radio_error").html("");  
		}

		if ((!($('#checkbox').prop('checked'))) || (!($('#checkbox1').prop('checked'))) || (!($('#checkbox2').prop('checked')))) {
			$("#check_error").html("please select a checkbbbbbox");  
			console.log(99);
        }
        else {
			$("#check_error").html("");  
		}
		
		});

		$('#phone').keyup(function () {
			var syntax = /^[0-9]+$/;
			if((!syntax.test(this.value))){
                $("#phone_erroe").html("Please enter number only");		
			}else if(!(this.value.length == 10)){
				$("#phone_erroe").html("Please enter 10 digit only");
			}
			else{
				$("#phone_erroe").html("");	
			} 
		 });

		 $('#office').keyup(function () {
			var syntax = /^[0-9]+$/;
			if((!syntax.test(this.value))){
				$("#office_error").html("Please enter number only");		
			}else if(!(this.value.length == 10)){
				$("#office_error").html("Please enter 10 digit only");
			}
			else{
				$("#office_error").html("");	
			} 
		 });

		 $('#email').keyup(function () {
			
			var syntax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if((!syntax.test(this.value))){
				$("#email_error").html("Invalid Format");		
			}
			else{
				$("#email_error").html("");	
			} 
		 });

		 $('#password').keyup(function () {
			
			var syntax = /^[a-zA-Z0-9]*$/;
			if((!syntax.test(this.value))){
				$("#password_error").html("Invalid Format");		
			}else if(this.value.length < 8 || this.value.length >16){
				$("#password_error").html("Password should be 8-16 digit");
			}
			else{
				$("#password_error").html("");	
			} 
		 });
         
		 $('#cpassword').keyup(function () {
			
			var syntax = /^[a-zA-Z0-9]*$/;
			if((!syntax.test(this.value))){
				$("#cpassword_error").html("Invalid Format");		
			}else if(this.value.length < 8 || this.value.length >16){
				$("#cpassword_error").html("Password should be 8-16 digit");
			}
			else{
				$("#cpassword_error").html("");	
			} 
		 });


		 $('#date').click(function () {
			
		 var date = $('#day').val();
		 var month = $('#month').val();
		 var year = $('#year').val();

		 const birth = new Date(year, month - 1, date);
         const now = new Date();
		 if(birth<now){
			const diff = new Date(now.valueOf() - birth.valueOf());
			$('#age').val((Math.abs(diff.getFullYear() - 1970))+' years old');
		 }
		 
		 });

		//  var x = $("#radio").val();  
		//  console.log(x)
        //      if(x.length>0)  
        //      {  
        //         $("#radio_error").text("please select a course");  
                   
        //      }  
        //      else {  
        //             $("#radio_error").text("");  
                     
        //      }  
        // if ((!($('#gender_male').prop('checked'))) || (!($('#gender_female').prop('checked')))) {
		// 	$("#radio_error").html("please select a course");  
		// 	console.log(99);
        // }
        // else {
		// 	$("#radio_error").html("");  
		// }
        

	  });	


























// jQuery('#frm').validate({
// 	rules:{
// 		firstname:"required",
//     lastname:"required",
//     office:"required",
// 		email:{
// 			required:true,
// 			email:true
// 		},
// 		password:{
// 			required:true,
// 			minlength:5
// 		},
//     cpassword:{
// 			required:true,
// 			minlength:5,
//       equalTo: "#password",
// 		},
//     phone:{
//       required:true,
// 			number:true,
//       minlength:10,
//       maxlength:10,
// 		},
//     office:{
//       required:true,
// 			number:true,
//       minlength:10,
//       maxlength:10,
// 		}
  
// 	},messages:{
// 		firstname:"Please enter your name",
// 		email:{
// 			required:"Please enter email",
// 			email:"Please enter valid email",
// 		},
// 		password:{
// 			required:"Please enter your password",
// 			minlength:"Password must be 8 char long"
// 		},
//     cpassword:{
// 			required:"Please enter your password",
// 			minlength:"Password must be 8 char long",     
// 		},
//     phone:{
// 			required:"Please enter your Phone number",
      
// 		},
// 	},
  
// 	submitHandler:function(form){
// 		form.submit();
// 	}
// });

