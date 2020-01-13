$(document).ready(function(){ 
	 /* For category validation */
    $("#categoryv").validate({
    rules :{
        name: {
            required : true
        }
    },
    messages :{
        name : {
            required : 'Plase enter the category name.'
        }
    }
    });
   /* For first press space key desable */
    $(function() {
    	  $('body').on('keydown', 'input:text', function(e) {
    	    console.log(this.value);
    	    if( e.which === 32 && this.value === '' ) {
    	      return false;
    	    }         
    	               
    	  });
    	  
    	});
    
    
    /* For category validation add */
    $("#digital_board").validate({
    rules :{
    	title: {
            required : true
        },
        supplier: {
        required : true
       },
       supplier_contect: {
           required : true
          },
          supplier_url: {
              required : true,
              url: true

             },
             image: {
           required : true
          },
          posted_date: {
              required : true
             },
             category_id: {
                 required : true
                },
                user_type: {
                    required : true
                   }
    },
    messages :{
    	title : {
            required : 'Please enter dital board name.'
        },
        supplier : {
            required : 'Please enter supplier name.'
        },
        supplier_contect : {
            required : 'Please enter supplier number.'
        },
        supplier_url : {
            required : 'Please enter supplier url.'
        },
        image : {
            required : 'Please select the image.'
        },
        posted_date : {
            required : 'Please input the date.'
        },
        category_id : {
            required : 'Please select category.'
        },
        user_type : {
            required : 'Please select user.'
        }
    }
    });
    
    /* For category validation edit */
    $("#digital_board_edit").validate({
    rules :{
    	title: {
            required : true
        },
        supplier: {
        required : true
       },
       supplier_contect: {
           required : true
          },
          supplier_url: {
              required : true,
              url: true

             },
           posted_date: {
              required : true
             },
             category_id: {
                 required : true
                },
                user_type: {
                    required : true
                   }
    },
    messages :{
    	title : {
            required : 'Please enter dital board name.'
        },
        supplier : {
            required : 'Please enter supplier name.'
        },
        supplier_contect : {
            required : 'Please enter supplier number.'
        },
        supplier_url : {
            required : 'Please enter supplier url.'
        },
       
        posted_date : {
            required : 'Please input the date.'
        },
        category_id : {
            required : 'Please select category.'
        },
        user_type : {
            required : 'Please select user.'
        }
    }
    });
    
    /* for calender posted*/
    $( function() {
        $( "#datepicker" ).datepicker({
          changeMonth: true,
          changeYear: true
        });
      } );
    
    
    /* For add and edit CMS validation */
    $("#cms_page").validate({
    rules :{
    	page_title: {
            required : true
        },
        heading:{
        	required : true
        },
        slag_name:{
        	required : true
        },
        content:{
        	required : true
        }
    },
    messages :{
    	page_title : {
            required : 'Plsase enter the title page.'
        },
        heading : {
        	required : 'Please enter the heading of the page.'
        },
        slag_name : {
        	required : 'Please enter the slag.'
        },
        content : {
        	required : 'Please enter the content.'
        }
    }
    });
    
    /* For add feed  validation */
    $("#feeds_page").validate({
    rules :{
    	title: {
            required : true
        },
        categroy_id:{
        	required : true
        },
        posted_date:{
        	required : true
        },
        user_type:{
        	required : true
        },
        image:{
        	required : true
        },
        category_url:{
        	required : true,
                  url: true

        }
    },
    messages :{
    	title : {
            required : 'Plsase enter the title page.'
        },
        categroy_id : {
        	required : 'Please select the category.'
        },
        posted_date : {
        	required : 'Please enter the date.'
        },
        user_type : {
        	required : 'Please select the user.'
        },
        image:{
        	required : 'Please select the image.'
        },
        category_url:{
        	required : 'Please enter the url.'
        }
    }
    });
    
    
    /* For  edit feed validation */
    $("#edit_feeds_page").validate({
    rules :{
    	title: {
            required : true
        },
        categroy_id:{
        	required : true
        },
        posted_date:{
        	required : true
        },
        user_type:{
        	required : true
        },
       
        category_url:{
        	required : true,
                  url: true

        },
        discription:{
        	required : true
        }
    },
    messages :{
    	title : {
            required : 'Plsase enter the title page.'
        },
        categroy_id : {
        	required : 'Please select the category.'
        },
        posted_date : {
        	required : 'Please enter the date.'
        },
        user_type : {
        	required : 'Please select the user.'
        },
        
        category_url:{
        	required : 'Please enter the url.'
        }
    }
    });
    
    
    /* For  add article validation*/
    $("#add_article").validate({
    rules :{
    	posted_date: {
            required : true
        },
        title:{
        	required : true
        },
        categroy_id:{
        	required : true
        },
        user_type:{
        	required : true
        },
       
        supplier_url:{
        	required : true,
                  url: true

        },
        image:{
        	required : true
        },
        supplier:{
        	required : true
        },
        supplier_contect:{
        	required : true
        }
    },
    messages :{
    	posted_date : {
            required : 'Plsase enter date.'
        },
        title : {
        	required : 'Please enter the title.'
        },
        categroy_id : {
        	required : 'Please select the categroy.'
        },
        user_type : {
        	required : 'Please select the user.'
        },
        
        supplier_url:{
        	required : 'Please enter the url.'
        },
        image:{
        	required : 'Please select the image.'
        },
        supplier :{
        	required : 'Please enter the supplier name.'
        },
        supplier_contect:{
        	required : 'Please enter the phone number'
        }
    }
    });
    
    
    /* For  edit_article  validation  */
    $("#edit_article").validate({
    rules :{
    	posted_date: {
            required : true
        },
        title:{
        	required : true
        },
        categroy_id:{
        	required : true
        },
        user_type:{
        	required : true
        },
       
        supplier_url:{
        	required : true,
                  url: true

        },
      
        supplier:{
        	required : true
        },
        supplier_contect:{
        	required : true
        }
    },
    messages :{
    	posted_date : {
            required : 'Plsase enter date.'
        },
        title : {
        	required : 'Please enter the title.'
        },
        categroy_id : {
        	required : 'Please select the categroy.'
        },
        user_type : {
        	required : 'Please select the user.'
        },
        
        supplier_url:{
        	required : 'Please enter the url.'
        },
        
        supplier :{
        	required : 'Please enter the supplier name.'
        },
        supplier_contect:{
        	required : 'Please enter the phone number'
        }
    }
    });
    
    
});