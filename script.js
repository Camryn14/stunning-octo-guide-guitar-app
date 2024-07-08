// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "Hello World" );


    $('#btnLoadSports').on('click', function(){
        
        console.log(sportList);
        $('#sportlist').append(sportList);
       

    });


    $('#btnClearSports').on('click', function(){

        $('#sportlist').empty();

    });


});



let sportList = [

 "Basketball",
 "Baseball",
 "Football"

];


//var el;
//el.document.getElementByTagname('button')
//el.addEventListener('click', 

