
$(function () {
	
    $('#tablecategory').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : true
    })
  });

  
  $(".del").on('click',function(){ 
    if (!confirm("Do you want to delete")){
      return false;
    }
  });