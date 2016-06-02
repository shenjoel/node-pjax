  jQuery(document).ready(function($) {
	
	var typewidthval = jQuery.cookie("ts_cookie_typewidthval");
	if(typewidthval=="fullwidth-skin"){
		var fullwidthselected = 'selected="selected"';
		var fixedselected = "";
	}else{
		var fullwidthselected = '';
		var fixedselected = 'selected="selected"';
	}
	
	var styleswitcherstr = ' \
	<div id="style-switcher"> \
	<form id="style-switcher-form">\
	  <div class="switchercontainer"> \
		  <span>Type Width</span> \
		  <div id="typewidthcontainer"> \
		  	<select id="typewidth" name="typewidth"> \
				<option value="fullwidth-skin" '+fullwidthselected+'>Full Width</option> \
				<option value="fixed-skin" '+fixedselected+'>Fixed Width</option> \
			</select> \
		  </div> \
		  <div class="clear"></div> \
	  </div> \
	  <div class="switchercontainer"> \
		  <a href="#" id="switcher-reset">Reset</a> \
		  <div class="clear"></div> \
	  </div> \
	</form>\
	</div> \
	';
	
	jQuery("body").prepend( styleswitcherstr );
	
	jQuery('#typewidth').change(function(e){
		var typewidthval = jQuery(this).val();
		jQuery("#layoutcss").attr("href","styles/"+typewidthval+".css");
		
		
		jQuery.cookie("ts_cookie_typewidthval", typewidthval);
	});
    
	
  var typewidthval		= jQuery.cookie("ts_cookie_typewidthval");
  
  
  if (typewidthval) {
      jQuery("#layoutcss").attr("href","styles/"+typewidthval+".css");
  } 
  
  
  jQuery("#switcher-reset").click(function(){
		
		var typewidthval = "fullwidth-skin";
		jQuery("#layoutcss").attr("href","styles/"+typewidthval+".css");
		jQuery.cookie("ts_cookie_typewidthval",typewidthval);
		
		jQuery("#typewidth").val("fullwidth-skin");
		 
  });
         
});