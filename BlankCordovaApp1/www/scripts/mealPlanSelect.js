(function () {

    var flexMoney;
    var monthlyFlag = false;

    document.getElementById('mealPlanSelectButton').addEventListener('click', function () {
        document.getElementById('flexPlanSelect').submit();

        localStorage.flexMoney = document.getElementById('flexPlanSelect')['flexPlan'].value;
        alert(localStorage.flexMoney);

        switch(localStorage.flexMoney){

            case "400":
                localStorage.ticketCount = 10;
                break;
            case "150":
                localStorage.ticketCount = 15;
                break;
            case "35":
                localStorage.ticketCount = 19;
                break;
            case "350":
                localStorage.ticketCount = 100;

                //if there is a way to handle allowing them to reset their weekly ticket
                //balance we need to track that they cant do it with this plan
                monthlyFlag = true;
                break;
        }

        localStorage.monthlyFlag = monthlyFlag;
        window.location.assign("flexTracking.html");
    });
})();