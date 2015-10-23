app.service('userStats', function() {

    var user = {
        sleep: 20,
        exercise: 20,
        diet: 20,
        goals: 20,
        determination: 30,
        stress: 0,
        sleepSkill: 20,
        exerSkill: 20,
        dietSkill: 20,
        goalSkill: 20,
        detSkill: 20,
        prod: 20,
        joblevel: 0,
        wage: 7.5,
        habitpower: 10,
        age: 14,
        weeklyHours: 40,
        hourlyWage: 7.5,
        lifeSavings: 1,
        vehicleLevel: 0,
        taxOwed: 0
    }

    return {
        getStats: function() {
            return user;
        }
    }
});
