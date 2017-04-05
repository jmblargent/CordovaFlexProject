(function () {
    var temp;
    var flexBalance = localStorage.flexMoney;
    document.getElementById("flexBalance").innerHTML = flexBalance;

    document.getElementById("flexChangeButton").addEventListener('click', function () {
        document.getElementById("flexBalanceChange").submit();
        temp = document.getElementById("flexBalanceChange")['flexChange'].value;
        if (localStorage.flexMoney - Math.abs(temp) <= 0)
            localStorage.flexMoney = 0;
        else
            localStorage.mealPlan = localStorage.mealPlan - Math.abs(temp);
        document.getElementById("flexBalance").innerHTML = flexBalance;
    });

    document.getElementById("backToStart").addEventListener('click', function () {
        window.location.assign("mealPlanSelectPage.html");
    });
})();