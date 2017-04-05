var flexMoney;
var monthlyFlag;
(function () {
    document.getElementById('mealPlanSelectButton').addEventListener('click', function () {
        document.getElementById('flexPlanSelect').submit();
        flexMoney = document.getElementById('flexPlanSelect')['flexPlan'].value;
        localStorage.flexMoney = flexMoney;
        console.log(flexMoney);

        switch(flexMoney){

            case 400:
                localStorage.ticketCount = 10;
                break;
            case 150:
                localStorage.ticketCount = 15;
                break;
            case 35:
                localStorage.ticketCount = 19;
                break;
            case 350:
                localStorage.ticketCount = 100;

                //if there is a way to handle allowing them to reset their weekly ticket
                //balance we need to track that they cant do it with this plan
                monthlyFlag = true;
                break;
        }

        window.location.assign("flexTracking.html");
    });
})();