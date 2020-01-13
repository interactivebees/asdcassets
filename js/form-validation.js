jQuery('#locumLogin').validate({
        rules: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
            return true;
        }
    });
jQuery('#practicLogin').validate({
        rules: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
            return true;
        }
    });

jQuery('#refer_form').validate({
        rules: {
            refer_email: {
                required: true
            }
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
            return true;
        }
    });

jQuery('#locumSignup').validate({
        rules: {
            username: {
                required: true,
				maxlength: 6,
                remote: {
                     url: BASE_URL+"home/usernamexist", 
                     type : "post"
                 }
            },
			email: {
                required: true,
                remote: {
                     url: BASE_URL+"home/emailexist", 
                     type : "post"
                 }
            },
			mobile: {
                required: true
                },
			password: {
                minlength: 6,
                required: true
                },
            repassword: {
                required: true,
                minlength: 6,
                equalTo: "#password"
                }
        },
         messages:{
		 username: {
                    required: "Please enter your username.", 
		    maxlength: "Username should be maximum 6 character!",
                    remote: "Username already in use!"
                },
               email: {
                    required: "Please enter your email address.", 
                    remote: "Email already in use!"
                }    
		  },
        submitHandler: function (form) { // for demo
            return true;
        }
    });
    
 
jQuery('#practicSignup').validate({
        rules: {
            username: {
                required: true,
				maxlength: 6,
                remote: {
                     url: BASE_URL+"home/usernamexist", 
                     type : "post"
                 }
            },
			email: {
                required: true, 
                remote: {
                     url: BASE_URL+"home/emailexist", 
                     type : "post"
                 }
               
            },
			mobile: {
                required: true
                },
			pname: {
                required: true
                },
			postcode: {
                required: true,
				maxlength: 8,
				ukpostcode: true
                },
			password: {
                minlength: 6,
                required: true
                },
            repassword: {
                required: true,
                minlength: 6,
                equalTo: "#practicSignup #password"
                }
        },
         messages:{
		      username: {
                    required: "Please enter your username.", 
                    maxlength: "Username should be maximum 6 character!",
                    remote: "Username already in use!"
                },
               email: {
                    required: "Please enter your email address.", 
                    remote: "Email already in use!"
                }   
		  },
        submitHandler: function (form) { // for demo
            return true;
        }
    });

jQuery('#contactPage').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
				email: true
            },
            phone: {
                required: true
            },
            msg: {
                required: true
            }
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
            return true;
        }
    });
    
  jQuery('#verifymail').validate({
        rules: {
            user_activation: {
                required: true,
                 number:true     
            } 
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
            return true;
        }
    }); 
 
 // Start Post a Job validation
 
   jQuery('#postajobform').validate({
        rules: {
            job_title: {
                required: true
            },
            jobspeciality: {
                required: true
            },
            description: {
                required: true
            },
            job_no: {
                required: true
            },
           jobtype: {
                required: true
            },
            salary: {
                required: true,
                number:true                        
            },
            start_date: {
                required: true
            },
            expiry_date: {
                required: true
            }
            
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
            return true;
        }
    }); 
 
 // End Post a Job validation 


 // Start Practices profile validation
 
   jQuery('#practices_profile').validate({
        rules: {
          
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            mobile: {
                required: true
            },
            how_u_hear: {
                required: true
            },
            company_name: {
                required: true
            },
          
            company_registered: {
                required: true
            },
            website: {
                required: true
            },
            address1: {
                required: true
            },
            city: {
                required: true
            },
            zipcode: {
                required: true,
				maxlength: 8,
				ukpostcode: true
            },
            google_link: {
                required: true
            }
            
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
            return true;
        }
    }); 
 
 // End Practices profile validation


// Start Locum Basic profile validation 

   jQuery('#locumProfileBasic').validate({
        rules: {
                
           profile_img: {
                required: true
            },
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            basic_first_line_address: {
                required: true
            } ,
            basic_zipcode: {
                required: true,
				maxlength: 8,
		        ukpostcode: true
            },
            basic_town:{
                    required:true
            }
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
	        
                 $('#ajaxLoaderImg').show();
                 var basicFormData = $('#locumProfileBasic').serialize();
                 $.ajax({
                                  type:'post',
                                  url: form.action,
                                  async: true,
                                  data: new FormData($('form')[0]),
                                  processData: false,
                                  contentType: false,
                                  dataType:'json',
                                  success: function(data) {
                                         if(data.status){
                                                  $.alert(data.msg, {
                                                   closeTime: 3 * 1000,
                                                    autoClose: true,
                                                    position: 'top-right',
                                                    withTime: false,
                                                    type: 'success',
                                                    isOnly: true
                                                });
                                                 $('#ajaxLoaderImg').hide();
                                                // $('.showmsg').show().text(data.msg).fadeOut(5000);;
                                                 $("#personalLi").css({"pointer-events": "auto", "cursor": "pointer"});
                                                 $("#tabUlProfile li").removeClass('active');
                                                 $('#personalLi').addClass('active');
                                                 $('.tab-pane').removeClass('in active');
                                                 $('#p_info').addClass('in active');
                                                 $('html, body').animate({ scrollTop: 0 }, 'slow');
                                         }
                                        },
                                  error: function(jqXHR, textStatus, err){
                                           alert('text status '+textStatus+', err '+err);
                                   }

				 });
		
            return false;
        }
    }); 

   jQuery('#personalInfoLocumProfile').validate({
        rules: {
            
            job_category: {
                required: true
            }
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
	        $('#ajaxLoaderImg').show();
                var basicFormData = $('#personalInfoLocumProfile').serialize();
                 $.ajax({
                                  type:'post',
                                  url: form.action,
                                  async: true,
                                  data: new FormData($('form')[1]),
                                  processData: false,
                                  contentType: false,
                                  dataType:'json',
                                  success: function(data) {
                                         if(data.status){
                                                   $.alert(data.msg, {
                                                   closeTime: 3 * 1000,
                                                    autoClose: true,
                                                    position: 'top-right',
                                                    withTime: false,
                                                    type: 'success',
                                                    isOnly: true
                                                });
                                                $('#ajaxLoaderImg').hide();
                                                $("#advanceLi").css({"pointer-events": "auto", "cursor": "pointer"});
                                                $("#tabUlProfile li").removeClass('active');
	                                        $('#advanceLi').addClass('active');
					        $('.tab-pane').removeClass('in active');
	                                        $('#a_info').addClass('in active');
					        $('html, body').animate({ scrollTop: 0 }, 'slow');
                                         }
                                        },
                                  error: function(jqXHR, textStatus, err){
                                           alert('text status '+textStatus+', err '+err);
                                   }

				 });
		
            return false;
        }
    }); 

   jQuery('#advanceInfoLocumProfile').validate({
        rules: {
                
            company_name: {
                required: true
            },
            company_reg_number: {
                required: true
            },
            advance_first_line_address: {
                required: true
            },
            
           advance_town: {
                required: true
            },
            advance_zip: {
                required: true,
                maxlength: 8,
                ukpostcode: true
            },
           bank_name: {
                required: true
            },
            account_no: {
                required: true
            } ,
            short_code: {
                required: true
            }
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
	        $('#ajaxLoaderImg').show();
                var basicFormData = $('#advanceInfoLocumProfile').serialize();
                 $.ajax({
                                  type:'post',
                                  url: form.action,
                                  async: true,
                                  data: new FormData($('form')[2]),
                                  processData: false,
                                  contentType: false,
                                  dataType:'json',
                                  success: function(data) {
                                         if(data.status){
                                                   $.alert(data.msg, {
                                                   closeTime: 3 * 1000,
                                                    autoClose: true,
                                                    position: 'top-right',
                                                    withTime: false,
                                                    type: 'success',
                                                    isOnly: true
                                                });
                                            $('#ajaxLoaderImg').hide();     
                                            $("#searchLi").css({"pointer-events": "auto", "cursor": "pointer"});
                                            $("#tabUlProfile li").removeClass('active');
	                                    $('#searchLi').addClass('active');
					    $('.tab-pane').removeClass('in active');
	                                    $('#s_info').addClass('in active');
                                            $('.showmsg').show().text(data.msg).fadeOut(5000);
					    $('html, body').animate({ scrollTop: 0 }, 'slow');      
                                         }
                                        },
                                  error: function(jqXHR, textStatus, err){
                                           alert('text status '+textStatus+', err '+err);
                                   }

				 });
		
            return false;
        }
    }); 


 jQuery('#searchFilterInfoLocumProfile').validate({
        rules: {
           job_criteria: {
                required: true
            }
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
	        $('#ajaxLoaderImg').show();
                var basicFormData = $('#searchFilterInfoLocumProfile').serialize();
                 $.ajax({
                                  type:'post',
                                  url: form.action,
                                  async: true,
                                  data: new FormData($('form')[3]),
                                  processData: false,
                                  contentType: false,
                                  dataType:'json',
                                  success: function(data) {
                                         if(data.status){
                                                   $.alert(data.msg, {
                                                   closeTime: 3 * 1000,
                                                    autoClose: true,
                                                    position: 'top-right',
                                                    withTime: false,
                                                    type: 'success',
                                                    isOnly: true
                                                });
                                                  $('#ajaxLoaderImg').hide();
                      $('.showmsg').show().text(data.msg).fadeOut(5000);
					  $('html, body').animate({ scrollTop: 0 }, 'slow');
					  setTimeout(function(){window.location.href=BASE_URL;},3000);
                                         }
                                        },
                                  error: function(jqXHR, textStatus, err){
                                           alert('text status '+textStatus+', err '+err);
                                   }

				 });
		
            return false;
        }
    }); 
 
 // End Post a Job validation 

   jQuery('#comment_form').validate({
        rules: {
            comment_description: {
                required: true
            },
            star: {
                required: true
            }
                
        },
         messages:{
		
		  },
        submitHandler: function (form) { // for demo
	  
               /* var basicFormData = $('#comment_form').serialize();
                $.ajax({
                                  type:'post',
                                  url: form.action,
                                  async: true,
                                  data: basicFormData,
                                  dataType:'json',
                                  success: function(data) {
                                          if(data.status){
                                                   $.alert(data.msg, {
                                                   closeTime: 3 * 1000,
                                                    autoClose: true,
                                                    position: 'top-right',
                                                    withTime: false,
                                                    type: 'success',
                                                    isOnly: true
                                                });
                                                  $('.showmsg').show().text(data.msg).fadeOut(5000);
                                            }
                                          },
                                  error: function(jqXHR, textStatus, err){
                                           alert('text status '+textStatus+', err '+err);
                                   }

			 });*/
		
            return true;
        }
    }); 
 

 function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }
