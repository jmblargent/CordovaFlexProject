﻿(function () {
    var temp;
    var flexBalance = localStorage.flexMoney;
    var ticketBalance = localStorage.ticketCount;
    var weeklyTicketBalance = localStorage.weeklyTicketCount;

    document.getElementById("flexBalance").innerHTML = flexBalance;
    document.getElementById("ticketBalance").innerHTML = ticketBalance;

    //this script handles the submit button for subtracting a given value from flex cash balance
    document.getElementById("flexChangeButton").addEventListener('click', function () {
        document.getElementById("flexBalanceChange").submit();

        temp = document.getElementById("flexBalanceChange")['flexChange'].value;
        if (localStorage.flexMoney - Math.abs(temp) <= 0)
            localStorage.flexMoney = 0;
        else
            localStorage.flexMoney = localStorage.flexMoney - Math.abs(temp);
        document.getElementById("flexBalance").innerHTML = flexBalance;
    });

    //this script handles the button that decriments the ticket balance
    document.getElementById("ticketChangeButton").addEventListener('click', function () {

        //handling negative counting
        if (ticketBalance - 1 < 0)
            ticketBalance = 0;
        else
            ticketBalance = ticketBalance - 1;
        localStorage.ticketCount = ticketBalance;

        document.getElementById("ticketBalance").innerHTML = ticketBalance;
    });

    //this script handles the button that will reset the weekly balance of meal tickets
    document.getElementById("ticketResetButton").addEventListener('click', function () {

        //checking to see if user wants to reset meal ticket balance.
        if (confirm("Are you sure you want to reset your meal ticket balance count?\n\nTap \"OK\" for yes and \"Cancel\" for no."))
            ticketBalance = weeklyTicketBalance;
        
        document.getElementById("ticketBalance").innerHTML = ticketBalance;
    });


    document.getElementById("backToStart").addEventListener('click', function () {
        window.location.assign("mealPlanSelectPage.html");
    });
})();