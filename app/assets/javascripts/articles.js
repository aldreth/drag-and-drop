$(function() {

  $( make_draggable_and_droppable_and_deletable() );

  function make_draggable_and_droppable_and_deletable() {
    $('.this_is_draggable').draggable({
          helper: 'clone',
          snap: '.this_is_droppable',
          cursor: 'move'
    });
    $('.this_is_droppable').droppable( {
          drop: drop_article
    });
    $(".delete-child-link").on('ajax:success', function(){
          refresh();
    });
  }

  function refresh() {
      $("#edit-article-children").load(location.href+" #edit-article-children>*", function (){
          make_draggable_and_droppable_and_deletable();
      });
    }

  function drop_article(event,ui) {
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
            refresh();
          }     
    });
  }
//closing document ready tag
});