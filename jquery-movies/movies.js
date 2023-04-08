$(function(){
    $('form').on('submit', function(e){
e.preventDefault();
let title = $("input").eq(0).val();
let rating = $("input").eq(1).val();
let addHTML = $(`<section> ${title} ${rating} </section>`)
const deleteBtn = $("<button>Delete</button>").on('click', function(evt){
    $(evt.target).parent().remove();
});;
$(addHTML).append(deleteBtn);
$('body').append(addHTML);
$('form')[0].reset();
});
})