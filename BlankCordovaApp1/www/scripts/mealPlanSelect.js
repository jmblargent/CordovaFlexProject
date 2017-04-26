(function () {

    var flexMoney;

    document.getElementById('mealPlanSelectButton').addEventListener('click', function () {
        document.getElementById('flexPlanSelect').submit();

        localStorage.flexMoney = document.getElementById('flexPlanSelect')['flexPlan'].value;
        //alert(localStorage.flexMoney);

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
                break;
        }

        localStorage.weeklyTicketCount = localStorage.ticketCount;        
        window.location.assign("flexTracking.html");
    });
})();