$(function() {

  $( make_draggable_and_droppable_and_deletable() );

// You can do this if you put
// format.js { head :ok }
// in the delete part of the controller
// But you must just have
// format.js
// for delete.js.erb
// to be called
  // $('.delete-child-link').on('ajax:success', function(){
  //   console.log('ajax:success in articles.js')
  // });

  function make_draggable_and_droppable_and_deletable() {
    $('.this_is_draggable').draggable({
          helper: 'clone',
          snap: '.this_is_droppable',
          cursor: 'move'
    });
    $('.this_is_droppable').droppable( {
          drop: drop_article
    });
  }

  function drop_article(event,ui) {
    $.ajax({
          type: 'POST',
          url:    '/links/',
          data: {link : {
                          parent_id : this.id,
                          child_id : ui.draggable.attr('id')
                        }
                },
          remote: 'true',  
          success: function(){
          }     
    });
  }
//closing document ready tag
});