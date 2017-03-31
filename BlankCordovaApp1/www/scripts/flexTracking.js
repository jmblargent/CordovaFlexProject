(function () {
    var temp;
    var flexBalance = localStorage.mealPlan;
    document.getElementById("flexBalance").innerHTML = flexBalance;

    document.getElementById("flexChangeButton").addEventListener('click', function () {
        document.getElementById("flexBalanceChange").submit();
        temp = document.getElementById("flexBalanceChange")['flexChange'].value;
        if (localStorage.mealPlan - temp <= 0)
            localStorage.mealPlan = 0;
        else
            localStorage.mealPlan = localStorage.mealPlan - temp;
        document.getElementById("flexBalance").innerHTML = flexBalance;
    });

    document.getElementById("backToStart").addEventListener('click', function () {
        window.location.assign("mealPlanSelectPage.html");
    });
})();