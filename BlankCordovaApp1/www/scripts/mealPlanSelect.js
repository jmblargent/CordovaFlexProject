(function () {

    var flexMoney;
    var monthlyFlag;

    document.getElementById('mealPlanSelectButton').addEventListener('click', function () {
        document.getElementById('flexPlanSelect').submit();

        localStorage.flexMoney = document.getElementById('flexPlanSelect')['flexPlan'].value;

        //using switch statement to correlate the flex cash to the amount of meal tickets they have.
        switch(localStorage.flexMoney){

            case "400":
                localStorage.ticketCount = 10;
                monthlyFlag = false;
                break;
            case "150":
                localStorage.ticketCount = 15;
                monthlyFlag = false;
                break;
            case "35":
                localStorage.ticketCount = 19;
                monthlyFlag = false;
                break;
            case "350":
                localStorage.ticketCount = 100;

                //if there is a way to handle allowing them to reset their weekly ticket
                //balance we need to track that they cant do it with this plan
                monthlyFlag = true;
                break;
        }

        localStorage.weeklyTicketCount = localStorage.ticketCount;        
        localStorage.monthlyFlag = monthlyFlag;
        window.location.assign("flexTracking.html");
    });
})();