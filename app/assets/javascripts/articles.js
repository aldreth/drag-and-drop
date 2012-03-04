$(document).ready(function() {
    
  $( make_draggable_and_droppable() );
  $( "delete-child_link" ).click(function() {
    console.log('delete');
    refresh();
    make_draggable_and_droppable();
  });

  function refresh() {
      $("#edit-article-children").load(location.href+" #edit-article-children>*");
  }
   
  function make_draggable_and_droppable() {
    $('.this_is_draggable').draggable({
          helper: 'clone'
    });
    $('.this_is_droppable').droppable( {
          drop: drop_article
    } );
    console.log('drag drop');
  }
   
  function drop_article( event, ui ) {
    createChildArticle( this.id, ui.draggable.attr('id') );
  }

  function createChildArticle( parent_id, child_id ) {
    $.ajax({
          type: "POST",
          url:    "/links/",
          data: {link : {
                          parent_id : parent_id,
                          child_id : child_id
                        }
                },
          datatype: "script",
          remote: "true",  
          success: function(){
            console.log('here');
            on_success();
          }     
    });
  }

  function on_success() {
    console.log('success');
    refresh();
    make_draggable_and_droppable();
  }

//closing document ready tag
});