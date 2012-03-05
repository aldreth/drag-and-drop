$(function() {

  $( make_draggable_and_droppable_and_deletable() );

  function make_draggable_and_droppable_and_deletable() {
    $('.this_is_draggable').draggable({
          helper: 'clone'
    });
    $('.this_is_droppable').droppable( {
          drop: drop_article
    });
    $(".delete-child_link").click(function() {
          deleteChildArticle(this.id);
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

  function deleteChildArticle( ChildArticleID ){
    $.ajax({
          type: "DELETE",
          url:  "/links/" + ChildArticleID,
          data: {link : {
                              id : ChildArticleID
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