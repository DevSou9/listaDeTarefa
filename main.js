$('document').ready(function (){
   

$('form').on('submit', function(e){
    e.preventDefault();

    const Novatarefa = $('input').val();
    const tarefa = `<li>${Novatarefa}</li>`
    $('#ulTarefa').append(tarefa);

    $('input').val('');
})

$('#ulTarefa').on('click', 'li', function() {
    $(this).toggleClass('liRiscado');
});

})




