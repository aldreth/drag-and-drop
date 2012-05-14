$(function() {

  $( make_draggable_and_droppable() );

  function make_draggable_and_droppable() {
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
    dataType: 'script',
    remote: 'true',
    success: function(){
    }
  });
  }
//closing document ready tag
});