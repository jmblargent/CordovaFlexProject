var mealPlan;
(function () {
    document.getElementById('mealPlanSelectButton').addEventListener('click', function () {
        document.getElementById('flexPlanSelect').submit();
        mealPlan = document.getElementById('flexPlanSelect')['flexPlan'].value;
        localStorage.mealPlan = mealPlan;
        console.log(mealPlan);
        window.location.assign("flexTracking.html");
    });
})();