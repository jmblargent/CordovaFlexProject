(function () {
    var temp;
    var flexBalance = localStorage.flexMoney;
    var ticketBalance = localStorage.ticketCount;
    var monthlyFlag = localStorage.monthlyFlag;
    document.getElementById("flexBalance").innerHTML = flexBalance;
    document.getElementById("ticketBalance").innerHTML = ticketBalance;

    document.getElementById("flexChangeButton").addEventListener('click', function () {
        document.getElementById("flexBalanceChange").submit();

        temp = document.getElementById("flexBalanceChange")['flexChange'].value;
        if (localStorage.flexMoney - Math.abs(temp) <= 0)
            localStorage.flexMoney = 0;
        else
            localStorage.flexMoney = localStorage.flexMoney - Math.abs(temp);
        document.getElementById("flexBalance").innerHTML = flexBalance;
    });

    document.getElementById("ticketChangeButton").addEventListener('click', function () {

        if (ticketBalance - 1 < 0)
            ticketBalance = 0;
        else
            ticketBalance = ticketBalance - 1;
        localStorage.ticketCount = ticketBalance;

        document.getElementById("ticketBalance").innerHTML = ticketBalance;
    });


    document.getElementById("backToStart").addEventListener('click', function () {
        window.location.assign("mealPlanSelectPage.html");
    });
})();