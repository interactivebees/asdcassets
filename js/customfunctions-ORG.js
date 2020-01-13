
$("#frm_enquiry").submit(function(event) {
     $("#msg_contact_id").show();
      $.ajax({
                           type: "POST",
                           url: siteurl+'pages/savedata',
                           data: $("#frm_enquiry").serialize(),
                           beforeSend: function()
                           {
                            
                             $("#msg_contact_id").html('<p class="error">Please wait...</p>');
                           },
                           success: function(data)
                           {
                            var obj = JSON.parse(data);
                            var status = obj.status;
                            var datamsg = obj.message;
                            if(status)
                            {
                              $('#frm_enquiry').trigger("reset");
                             
                            }
                            
                            $("#msg_contact_id").html(datamsg).fadeOut(5000);

                           }
        });

      return false;

});

$("#frm_newsletter").submit(function(event) {
  $("#msg_newsletter").show();
   $.ajax({
                        type: "POST",
                        url: siteurl+'pages/newsletter',
                        data: $("#frm_newsletter").serialize(),
                        beforeSend: function()
                        {
                         
                          $("#msg_newsletter").html('<p class="error">Please wait...</p>');
                        },
                        success: function(data)
                        {
                         var obj = JSON.parse(data);
                         var status = obj.status;
                         var datamsg = obj.message;
                         if(status)
                         {
                           $('#frm_newsletter').trigger("reset");
                          
                         }
                         
                         $("#msg_newsletter").html(datamsg).fadeOut(5000);

                        }
     });

   return false;

});


$(".tabtype").click(function(){
  var tabtype = $(this).attr('data');
  $("#tabtype").val(tabtype);
});

function load_value(field_type)
{
   if(field_type=='scheme_name')
   {
      var scheme_name = $("#scheme_name").val();
      if(scheme_name=='OTHERS')
      {
         $("#scheme_li").show();
         $("#scheme_name_other").attr('required',true);
      }
      else
      {
        $("#scheme_li").hide();
        $("#scheme_name_other").attr('required',false);
      }
   }
   else
   {
     var issue_related = $("#issue_related").val();
     if(issue_related=='OTHERS')
      {
         $("#issue_li").show();
         $("#issue_related_other").attr('required',true);
      }
      else
      {
        $("#issue_li").hide();
        $("#issue_related_other").attr('required',false);
      }
   }
}

/* filtered Nos data */

$("#frm_filter").submit(function(event) {
   var loaderimg = siteurl+'images/loader.gif';
   $(".domainlist").removeClass('active');
   $.ajax({
                        type: "POST",
                        url: siteurl+'pages/filterednos',
                        data: $("#frm_filter").serialize(),
                        beforeSend: function()
                        {
                         
                          ///$("#resultslist").html('<p class="error">Please Wait...</p>');
                          $("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');
                          $("#resultslist").addClass('loader');
                        },
                        success: function(data)
                        {
                          $("#resultslist").html(data);
                          $("#resultslist").removeClass('loader');

                          var totalrecord = $("#totalrecord").val();
                         // alert(totalrecord);
                         if(totalrecord >25)
                         {
                            setTimeout(function(){ 
                              $('#tpdatas').loadMoreResults({
                                tag: {
                                    name: 'li',
                                  'class': 'viw'
                                },
                                displayedItems: 25,
                                showItems:50,
                                });
                            
                            }, 1000);
                         }
                         

                          
                        
                        }
     });

   return false;

});

$("#frm_filterdomain").submit(function(event) {
  var loaderimg = siteurl+'images/loader.gif';

  $("#keywords").val('');
  $("#SubSector").val('');
  $("#level").val('');
  $.ajax({
                       type: "POST",
                       url: siteurl+'pages/filterednos',
                       data: $("#frm_filterdomain").serialize(),
                       beforeSend: function()
                       {
                        
                         ///$("#resultslist").html('<p class="error">Please Wait...</p>');
                         $("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');
                         $("#resultslist").addClass('loader');
                       },
                       success: function(data)
                       {
                         $("#resultslist").html(data);
                         $("#resultslist").removeClass('loader');

                         var totalrecord = $("#totalrecord").val();
                        // alert(totalrecord);
                        if(totalrecord >25)
                        {
                           setTimeout(function(){ 
                             $('#tpdatas').loadMoreResults({
                               tag: {
                                   name: 'li',
                                 'class': 'viw'
                               },
                               displayedItems: 25,
                               showItems:50,
                               });
                           
                           }, 1000);
                        }
                        

                         
                       
                       }
    });

  return false;

});

$("#frm_grievance").submit(function(event) {
  $("#msg_contact_id").show();
   $.ajax({
                        type: "POST",
                        url: siteurl+'pages/savegrivance',
                        data: $("#frm_grievance").serialize(),
                        beforeSend: function()
                        {
                         
                          $("#msg_contact_id").html('<p class="error">Please wait...</p>');
                        },
                        success: function(data)
                        {
                         var obj = JSON.parse(data);
                         var status = obj.status;
                         var datamsg = obj.message;
                         if(status)
                         {
                           $('#frm_grievance').trigger("reset");
                          
                         }
                         
                         $("#msg_contact_id").html(datamsg).fadeOut(5000);

                        }
     });

   return false;

});

$("#frm_totprogram").submit(function(event) {
  $("#msg_contact_id").show();
   $.ajax({
                        type: "POST",
                        url: siteurl+'pages/saveprograms',
                        data: $("#frm_totprogram").serialize(),
                        beforeSend: function()
                        {
                         
                          $("#msg_contact_id").html('<p class="error">Please wait...</p>');
                        },
                        success: function(data)
                        {
                         var obj = JSON.parse(data);
                         var status = obj.status;
                         var datamsg = obj.message;
                         if(status)
                         {
                           $('#frm_totprogram').trigger("reset");
                          
                         }
                         $('html, body').animate({
                          scrollTop: $("#msg_contact_id").offset().top
                         }, 2000);
                         
                         $("#msg_contact_id").html(datamsg).fadeOut(5000);

                        }
     });

   return false;

});

function Loadpage()
{
  location.reload();
}

function LoadpageUrl(pageurl)
{
  window.location.href=pageurl;
}

function Load_District(stateid)
{
      $.ajax({
        type: "POST",
        url: siteurl+'pages/district',
        data: { stateid: stateid, districtid:0},
        beforeSend: function(){
          $("#District").html('<p class="error">Please wait...</p>');
        },
        success: function(data)
        {
          $("#District").html(data);
        }
    });
}


$("#frm_filtertrainer").submit(function(event) {
  var loaderimg = siteurl+'images/loader.gif';
  $.ajax({
                       type: "POST",
                       url: siteurl+'pages/filteretrainer',
                       data: $("#frm_filtertrainer").serialize(),
                       beforeSend: function()
                       {
                        
                         ///$("#resultslist").html('<p class="error">Please Wait...</p>');
                         $("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');
                         $("#resultslist").addClass('loader');
                       },
                       success: function(data)
                       {
                         $("#resultslist").html(data);
                         $("#resultslist").removeClass('loader');

                         var totalrecord = $("#totalrecord").val();
                        // alert(totalrecord);
                        if(totalrecord >25)
                        {
                           setTimeout(function(){ 
                             $('#tpdatas').loadMoreResults({
                               tag: {
                                   name: 'li',
                                 'class': 'viw'
                               },
                               displayedItems: 25,
                               showItems:50,
                               });
                           
                           }, 1000);
                        }
                        

                         
                       
                       }
    });

  return false;

});

$("#frm_assessors").submit(function(event) {
  var loaderimg = siteurl+'images/loader.gif';
  $.ajax({
                       type: "POST",
                       url: siteurl+'pages/filterassessors',
                       data: $("#frm_assessors").serialize(),
                       beforeSend: function()
                       {
                        
                         ///$("#resultslist").html('<p class="error">Please Wait...</p>');
                         $("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');
                         $("#resultslist").addClass('loader');
                       },
                       success: function(data)
                       {
                         $("#resultslist").html(data);
                         $("#resultslist").removeClass('loader');

                         var totalrecord = $("#totalrecord").val();
                        // alert(totalrecord);
                        if(totalrecord >25)
                        {
                           setTimeout(function(){ 
                             $('#tpdatas').loadMoreResults({
                               tag: {
                                   name: 'li',
                                 'class': 'viw'
                               },
                               displayedItems: 25,
                               showItems:50,
                               });
                           
                           }, 1000);
                        }
                        

                         
                       
                       }
    });

  return false;

});

$("#frm_assessorscertified").submit(function(event) {
  var loaderimg = siteurl+'images/loader.gif';
  $.ajax({
                       type: "POST",
                       url: siteurl+'pages/filtercertifiedassessors',
                       data: $("#frm_assessorscertified").serialize(),
                       beforeSend: function()
                       {
                        
                         ///$("#resultslist").html('<p class="error">Please Wait...</p>');
                         $("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');
                         $("#resultslist").addClass('loader');
                       },
                       success: function(data)
                       {
                         $("#resultslist").html(data);
                         $("#resultslist").removeClass('loader');

                         var totalrecord = $("#totalrecord").val();
                        // alert(totalrecord);
                        if(totalrecord >25)
                        {
                           setTimeout(function(){ 
                             $('#tpdatas').loadMoreResults({
                               tag: {
                                   name: 'li',
                                 'class': 'viw'
                               },
                               displayedItems: 25,
                               showItems:50,
                               });
                           
                           }, 1000);
                        }
                        

                         
                       
                       }
    });

  return false;

});

function show_hidetp(showval)
{
 
  if(showval=='YES')
  {
    $("#tp_li").show();
    $("#TPName").attr('required',true);
  }
  else
  {
    $("#tp_li").hide();
    $("#TPName").attr('required',false);
  }
}

/* Save candidate / employer */

$("#frm_canemp").submit(function(event) {
  $("#msg_contact_id").show();
   $.ajax({
                        type: "POST",
                        url: siteurl+'pages/savedataemp',
                        data: $("#frm_canemp").serialize(),
                        beforeSend: function()
                        {
                         
                          $("#msg_contact_id").html('<p class="error">Please wait...</p>');
                        },
                        success: function(data)
                        {
                         var obj = JSON.parse(data);
                         var status = obj.status;
                         var datamsg = obj.message;
                         if(status)
                         {
                           $('#frm_canemp').trigger("reset");
                          
                         }
                         
                         $("#msg_contact_id").html(datamsg).fadeOut(5000);

                        }
     });

   return false;

});

function FilterDomain(formid,fieldid,val,srn)
{
  //alert(fieldid);
  $(".domainlist").removeClass('active');
  $("#domainlist"+srn).addClass('active');
  $("#"+fieldid).val(val);
  $("#"+formid).submit();
}