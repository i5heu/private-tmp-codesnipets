
/*BEGIN #### LOADINGFUNCTION FOR SETTINGS AND QUICKADD*/


//loading the HTML for the settings popup - also managin the loading icon
//id is the id without #
function loadSettingsJS(url,id){
  console.log( "##### Load of " + id + " ####################" );
  $( "#"+ id ).append( '<i id="' + id + 'loading" class="fa fa-cog fa-spin fa-3x fa-fw"></i>' );

  $.cachedScript( url ).done(function( script, textStatus ) {
    console.log( textStatus );
    console.log( "##### Load of " + id + ".js was performed. #####" );
    $( '#' + id + 'loading' ).hide();
  });
  
}



//this is a load function for cached script laods
jQuery.cachedScript = function( url, options ) {
   // Allow user to set any option except for dataType, cache, and url
  options = $.extend( options || {}, {
    dataType: "script",
    cache: true,
    url: url
  });
 
  // Use $.ajax() since it is more flexible than $.getScript
  // Return the jqXHR object so we can chain callbacks
  return jQuery.ajax( options );
};
 


/*END ###### LOADINGFUNCTION FOR SETTINGS AND QUICKADD*/
