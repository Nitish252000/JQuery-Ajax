//from simple in javascript
/*var para1=document.getElementById('para1');
para1.innerHTML="welcome";
*/


//from jquery
//$('#para1').html('welcome');

//if you want yo hide this
//$('#para1').hide();

//if you want to fetched the width
//$('para1').width(100);

//if you want to change text
//$('#para1').text('welcome');

//if you want to change all p tag
//$('p').html("welcome");


//Modifying CSS using Query

$('p').css('color','grey');
$('p').css('fontSize','30px');

$('div').css({
    width:"100px",
    height:"100px",
    backgroundColor:"cyan"
});

//Event Handling Using JQuery

/*$('div').click(function(){
    alert("Div clicked")
});*/

//another way to handle the event
$('div').on('click',function(){
    var elelment=$(this);
    elelment.width(elelment.width()+10+"px");
    //alert('Div Clicked');
});

$('a').on('click',function(event){
    event.preventDefault(); //means not goto website
    alert(' Anchor tag Clicked');
});