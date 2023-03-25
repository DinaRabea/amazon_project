$('.logo').on('mousemove',function(){
    $(this).css('border','1px solid white');
})
$('.logo').on('mouseleave',function(){
    $(this).css('border','none');
})

$('.a1').on('mousemove',function(){
    $(this).css('border','1px solid white');
})
$('.a1').on('mouseleave',function(){
    $(this).css('border','none');
})

$('.btn1').on('mousemove',function(){
    $(this).css('backgroundColor','#cccccc');
})
$('.btn1').on('mouseleave',function(){
    $(this).css('backgroundColor','#f3f3f3');
})

$('.btn2').on('mousemove',function(){
    $(this).css('backgroundColor','#f08804');
})
$('.btn2').on('mouseleave',function(){
    $(this).css('backgroundColor','#eea23e');
})


$('.anchor').on('mousemove',function(){
    $(this).css('border','1px solid white');
})
$('.anchor').on('mouseleave',function(){
    $(this).css('border','none');
})

$('.img1').on('mousemove',function(){
    $(this).css('border','1px solid white');
})
$('.img1').on('mouseleave',function(){
    $(this).css('border','none');
})

$('.icon1').on('click',function(){
    $(this).css('border' ,'2px solid black')
    $(this).css('outline' ,'2px solid white')
})

$('.icon1').on('blur',function(){
    $(this).css('border' ,'none')
    $(this).css('outline' ,'none')
})

$('.signinBtn').on('mousemove',function(){
    $(this).css('backgroundColor','#e9972c');
})
$('.signinBtn').on('mouseleave',function(){
    $(this).css('backgroundColor','#eea23e');
})

$('.signinBtn').click(function(){
    location.assign('../registrarion&login/html/login.html')
})