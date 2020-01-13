$("#frm_enquiry").submit(function(event){$("#msg_contact_id").show();$.ajax({type:"POST",url:siteurl+'pages/savedata',data:$("#frm_enquiry").serialize(),beforeSend:function()
{ $("#cont_submit").attr('disabled', 'disabled'); $("#msg_contact_id").html('<p class="error">Please wait...</p>');},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;if(status)
{$('#frm_enquiry').trigger("reset");  $("#cont_submit").removeAttr('disabled');}
$("#msg_contact_id").html(datamsg).fadeOut(5000);}});return false;});$("#frm_newsletter").submit(function(event){$("#msg_newsletter").show();$.ajax({type:"POST",url:siteurl+'pages/newsletter',data:$("#frm_newsletter").serialize(),beforeSend:function()
{$("#msg_newsletter").html('<p class="error">Please wait...</p>');},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;if(status)
{$('#frm_newsletter').trigger("reset");}
$("#msg_newsletter").html(datamsg).fadeOut(5000);}});return false;});$(".tabtype").click(function(){var tabtype=$(this).attr('data');$("#tabtype").val(tabtype);});function load_value(field_type)
{if(field_type=='scheme_name')
{var scheme_name=$("#scheme_name").val();if(scheme_name=='OTHERS')
{$("#scheme_li").show();$("#scheme_name_other").attr('required',true);}
else
{$("#scheme_li").hide();$("#scheme_name_other").attr('required',false);}}
else
{var issue_related=$("#issue_related").val();if(issue_related=='OTHERS')
{$("#issue_li").show();$("#issue_related_other").attr('required',true);}
else
{$("#issue_li").hide();$("#issue_related_other").attr('required',false);}}}
$("#frm_filter").submit(function(event){var loaderimg=siteurl+'images/loader.gif';$(".domainlist").removeClass('active');$.ajax({type:"POST",url:siteurl+'pages/filterednos',data:$("#frm_filter").serialize(),beforeSend:function()
{$("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');$("#resultslist").addClass('loader');},success:function(data)
{$("#resultslist").html(data);$("#resultslist").removeClass('loader');var totalrecord=$("#totalrecord").val();if(totalrecord>25)
{setTimeout(function(){$('#tpdatas').loadMoreResults({tag:{name:'li','class':'viw'},displayedItems:25,showItems:20,});},1000);}}});return false;});$("#frm_filterdomain").submit(function(event){var loaderimg=siteurl+'images/loader.gif';$("#keywords").val('');$("#SubSector").val('');$("#level").val('');$.ajax({type:"POST",url:siteurl+'pages/filterednos',data:$("#frm_filterdomain").serialize(),beforeSend:function()
{$("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');$("#resultslist").addClass('loader');},success:function(data)
{$("#resultslist").html(data);$("#resultslist").removeClass('loader');var totalrecord=$("#totalrecord").val();if(totalrecord>25)
{setTimeout(function(){$('#tpdatas').loadMoreResults({tag:{name:'li','class':'viw'},displayedItems:25,showItems:50,});},1000);}}});return false;});$("#frm_grievance").submit(function(event){$("#msg_contact_id").show();$.ajax({type:"POST",url:siteurl+'pages/savegrivance',data:$("#frm_grievance").serialize(),beforeSend:function()
{$("#msg_contact_id").html('<p class="error">Please wait...</p>');},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;if(status)
{$('#frm_grievance').trigger("reset");}
$("#msg_contact_id").html(datamsg).fadeOut(5000);}});return false;});$("#frm_totprogram").submit(function(event){$("#msg_contact_id").show();$.ajax({type:"POST",url:siteurl+'pages/saveprograms',data:$("#frm_totprogram").serialize(),beforeSend:function()
{$("#msg_contact_id").html('<p class="error">Please wait...</p>');$('html, body').animate({scrollTop:$("#msg_contact_id").offset().top-100},2000);},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;if(status)
{$('#frm_totprogram').trigger("reset");}
$("#msg_contact_id").html(datamsg).fadeOut(5000);}});return false;});function Loadpage()
{location.reload();}
function LoadpageUrl(pageurl)
{window.location.href=pageurl;}
function Load_District(stateid)
{$.ajax({type:"POST",url:siteurl+'pages/district',data:{stateid:stateid,districtid:0},beforeSend:function(){$("#District").html('<option value="">Please wait...</option>');},success:function(data)
{$("#District").html(data);}});}
$("#frm_filtertrainer").submit(function(event){var loaderimg=siteurl+'images/loader.gif';$.ajax({type:"POST",url:siteurl+'pages/filteretrainer',data:$("#frm_filtertrainer").serialize(),beforeSend:function()
{$("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');$("#resultslist").addClass('loader');},success:function(data)
{$("#resultslist").html(data);$("#resultslist").removeClass('loader');var totalrecord=$("#totalrecord").val();if(totalrecord>25)
{setTimeout(function(){$('#tpdatas').loadMoreResults({tag:{name:'li','class':'viw'},displayedItems:25,showItems:50,});},1000);}}});return false;});$("#frm_assessors").submit(function(event){var loaderimg=siteurl+'images/loader.gif';$.ajax({type:"POST",url:siteurl+'pages/filterassessors',data:$("#frm_assessors").serialize(),beforeSend:function()
{$("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');$("#resultslist").addClass('loader');},success:function(data)
{$("#resultslist").html(data);$("#resultslist").removeClass('loader');var totalrecord=$("#totalrecord").val();if(totalrecord>25)
{setTimeout(function(){$('#tpdatas').loadMoreResults({tag:{name:'li','class':'viw'},displayedItems:25,showItems:50,});},1000);}}});return false;});$("#frm_assessorscertified").submit(function(event){var loaderimg=siteurl+'images/loader.gif';$.ajax({type:"POST",url:siteurl+'pages/filtercertifiedassessors',data:$("#frm_assessorscertified").serialize(),beforeSend:function()
{$("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');$("#resultslist").addClass('loader');},success:function(data)
{$("#resultslist").html(data);$("#resultslist").removeClass('loader');var totalrecord=$("#totalrecord").val();if(totalrecord>25)
{setTimeout(function(){$('#tpdatas').loadMoreResults({tag:{name:'li','class':'viw'},displayedItems:25,showItems:50,});},1000);}}});return false;});function show_hidetp(showval)
{if(showval=='YES')
{$("#tp_li").show();$("#TPName").attr('required',true);}
else
{$("#tp_li").hide();$("#TPName").attr('required',false);}}
$("#frm_canemp").submit(function(event){$("#msg_contact_id").show();$.ajax({type:"POST",url:siteurl+'pages/savedataemp',data:$("#frm_canemp").serialize(),beforeSend:function()
{$("#msg_contact_id").html('<p class="error">Please wait...</p>');},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;if(status)
{$('#frm_canemp').trigger("reset");}
$("#msg_contact_id").html(datamsg).fadeOut(5000);}});return false;});function FilterDomain(formid,fieldid,val,srn)
{$(".domainlist").removeClass('active');$("#domainlist"+srn).addClass('active');$("#"+fieldid).val(val);$("#"+formid).submit();}
function Getexamdate(cityname)
{$.ajax({type:"POST",url:siteurl+'trainings/getexamdates',data:{cityname:cityname},beforeSend:function(){$("#examdate").html('<option>Please wait...</option>');},success:function(data)
{$("#examdate").html(data);$("#datelist").show();}});}
function Managefield(optiontype)
{if(optiontype=='Yes')
{$(".yesbatch").show();$(".notbatch").hide();$("#batchid").attr('required',true);$("#cityname").attr('required',false);$("#cityname").val('');$("#examdate").attr('required',false);$("#examdate").val('');}else{$(".yesbatch").hide();$(".notbatch").show();$("#batchid").attr('required',false);$("#batchid").val('');$("#cityname").attr('required',true);$("#examdate").attr('required',true);}}
$("#frm_filtercandidate").submit(function(event){var loaderimg=siteurl+'images/loader.gif';$.ajax({type:"POST",url:siteurl+'candidate/getcandidate',data:$("#frm_filtercandidate").serialize(),beforeSend:function()
{$("#resultslist").html('<img src="'+loaderimg+'" alt="loader" style="text-align:center;"/>');$("#resultslist").addClass('loader');},success:function(data)
{$("#resultslist").html(data);$("#resultslist").removeClass('loader');var totalrecord=$("#totalrecord").val();if(totalrecord>25)
{setTimeout(function(){$('#tpdatas').loadMoreResults({tag:{name:'li','class':'viw'},displayedItems:25,showItems:50,});},1000);}}});return false;});function Load_states(jobroleid)
{$.ajax({type:"POST",url:siteurl+'candidate/get_statelist',data:{jobroleid:jobroleid},beforeSend:function(){$("#State").html('<option value="">Please wait...</option>');$("#District").html('<option value="">Select District</option>');},success:function(data)
{$("#State").html(data);}});}
function Load_District_candidate(jobroleid)
{var stateid=$("#State").val();var jobroleid=$("#jobroleid").val();$.ajax({type:"POST",url:siteurl+'candidate/get_districtlist',data:{jobroleid:jobroleid,stateid:stateid},beforeSend:function(){$("#District").html('<option value="">Please wait...</option>');},success:function(data)
{$("#District").html(data);}});}
$("#frm_automotive").submit(function(event){$("#msg_automotive").show();var organizationstatus=$("#organizationstatus").val();if(organizationstatus==1)
{$("#orgmsg").html('');$.ajax({type:"POST",url:siteurl+'articles/saveautomotive',data:$("#frm_automotive").serialize(),beforeSend:function()
{$('html, body').animate({scrollTop:$("#msg_automotive").offset().top-100},2000);$("#msg_automotive").html('<p class="error">Please wait...</p>');$(".submit").attr('disabled',true);},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;if(status)
{$('#frm_automotive').trigger("reset");}
var datamsg2show='<p class="success" style="color:green">'+datamsg+'</p>';$("#msg_automotive").html(datamsg2show).fadeOut(25000);$(".submit").attr('disabled',false);}});}
else
{$("#orgmsg").html('Invalid Organization');}
return false;});function GetCity(pincode)
{if(pincode)
{$.ajax({type:"POST",url:siteurl+'articles/getcity',data:{pincode:pincode},beforeSend:function()
{$("#cityname").attr('readonly',true);$('#pinmsg').html('');},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;if(status)
{$("#cityname").val(datamsg);$("#cityname").attr('readonly',true);$('#pinmsg').html('');}
else
{$("#cityname").attr('readonly',false);$("#cityname").val('');$('#pinmsg').html('Invalid Pincode');}}});}}
$("#frm_login").submit(function(event){$("#msg_login").show();$.ajax({type:"POST",url:siteurl+'users/login',data:$("#frm_login").serialize(),beforeSend:function()
{$("#msg_login").html('<p class="error">Please wait...</p>');},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;$("#msg_login").html(datamsg).fadeOut(10000);if(status)
{setTimeout(function(){location.reload();},5000);}}});return false;});$("#frm_signup").submit(function(event){$("#msg_signup").show();$.ajax({type:"POST",url:siteurl+'users/signup',data:$("#frm_signup").serialize(),beforeSend:function()
{$("#msg_signup").html('<p class="error">Please wait...</p>');},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;$("#msg_signup").html(datamsg).fadeOut(10000);if(status)
{$(".popup-inside").addClass('longheight');setTimeout(function(){location.reload();},5000);}}});return false;});$("#frm_forgot").submit(function(event){$("#msg_forgot").show();$.ajax({type:"POST",url:siteurl+'users/forgotpassword',data:$("#frm_forgot").serialize(),beforeSend:function()
{$("#msg_forgot").html('<p class="error">Please wait...</p>');},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;$("#msg_forgot").html(datamsg).fadeOut(10000);if(status)
{setTimeout(function(){jQuery('#back-login')[0].click();},5000);}}});return false;});function LoadNext(jobid,level,jobrole_counter)
{let nextlevel=parseInt(level)+parseInt(jobrole_counter);let qplevelid='qplevel'+nextlevel;let currentqpid='qplevel'+level;let qplen=$("#"+qplevelid).length;let last_level=$("#last_level").val();for(var i=parseInt(nextlevel)+1;i<=last_level;i++)
{$("#chartdetail"+i).hide();}
$("#current_level").val(nextlevel);$.ajax({type:"POST",url:siteurl+'articles/qplist',data:{jobid:jobid,nextlevel:nextlevel},beforeSend:function()
{},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var data=obj.data;if(status)
{$("#"+qplevelid).html(data);if(last_level==nextlevel)
{var url2go=siteurl+'job-roles';var forclickevtn='chartdetail'+nextlevel;$('#'+forclickevtn).attr('onClick',`LoadpageUrl('`+url2go+`');`);}}
else{$("#"+qplevelid).html(data);}}});}
$("#frm_annual").submit(function(event){$("#msg_automotive").show();var organizationstatus=$("#organizationstatus").val();if(organizationstatus==1)
{$("#orgmsg").html('');$.ajax({type:"POST",url:siteurl+'articles/saveconclave',data:$("#frm_annual").serialize(),beforeSend:function()
{$('html, body').animate({scrollTop:$("#msg_automotive").offset().top-100},2000);$("#msg_automotive").html('<p class="error">Please wait...</p>');$(".submit").attr('disabled',true);},success:function(data)
{var obj=JSON.parse(data);var status=obj.status;var datamsg=obj.message;if(status)
{$('#frm_annual').trigger("reset");}
var datamsg2show='<p class="success" style="color:green">'+datamsg+'</p>';$("#msg_automotive").html(datamsg2show).fadeOut(25000);$(".submit").attr('disabled',false);}});}
else
{$("#orgmsg").html('Invalid Organization');}
return false;});

/* Skill Development */
$("#frm_skill").submit(function(event) {
    $("#msg_automotive").show();
        $.ajax({
            type: "POST",
            url: siteurl + 'articles/saveskill',
            data: $("#frm_skill").serialize(),
            beforeSend: function() {
                $('html, body').animate({
                    scrollTop: $("#msg_automotive").offset().top - 100
                }, 2000);
                $("#msg_automotive").html('<p class="error">Please wait...</p>');
                $(".submit").attr('disabled', true);
            },
            success: function(data) {
                var obj = JSON.parse(data);
                var status = obj.status;
                var datamsg = obj.message;
                if (status) {
                    $('#frm_skill').trigger("reset");
                }
                var datamsg2show = '<p class="success" style="color:green">' + datamsg + '</p>';
                $("#msg_automotive").html(datamsg2show).fadeOut(25000);
                $(".submit").attr('disabled', false);
            }
        });

    return false;
});