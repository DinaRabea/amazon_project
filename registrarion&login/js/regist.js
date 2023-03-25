$(document).on('mousemove','.mySection a',function(){
    $(this).css('text-decoration','underline');
    $(this).css('color','tomato');
})

$(document).on('mouseleave','.mySection a',function(){
    $(this).css('text-decoration','none');
    $(this).css('color','blue');
})

