var sec = 15;
    function pad ( val ) { return val > 9 ? val : "0" + val; }

    var yes;

    setInterval( function(){
        $("#seconds").html(pad(--sec%60));
        $("#minutes").html(pad(parseInt(sec/60,10)));
    }, 1000);
    if($("#correct").on( "click", function() 
    {
        $("#answer").text("Correct!");
        sec +=5 ;
        $("#Q1").addClass("invisible");
    }));
    if($("#incorrect").on( "click", function() 
    {
        $("#answer").text("Wrong!");
        sec -= 10;
    }));



    // if(yes)
    // {
    //     $("#answer").text("Correct!");
    // }
    // else if(!yes)
    // {
    //     $("#answer").text("Wrong!");
    // }


    