jQuery('#frm').validate({
	rules:{
		firstname:"required",
    lastname:"required",
    office:"required",
		email:{
			required:true,
			email:true
		},
		password:{
			required:true,
			minlength:5
		},
    cpassword:{
			required:true,
			minlength:5,
      equalTo: "#password",
		},
    phone:{
      required:true,
			number:true,
      minlength:10,
      maxlength:10,
		},
    office:{
      required:true,
			number:true,
      minlength:10,
      maxlength:10,
		}
  
	},messages:{
		firstname:"Please enter your name",
		email:{
			required:"Please enter email",
			email:"Please enter valid email",
		},
		password:{
			required:"Please enter your password",
			minlength:"Password must be 8 char long"
		},
    cpassword:{
			required:"Please enter your password",
			minlength:"Password must be 8 char long",     
		},
    phone:{
			required:"Please enter your Phone number",
      
		},
	},
  
	submitHandler:function(form){
		form.submit();
	}
});

