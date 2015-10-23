app.service('userStats', function() {

    var user = {
        sleep: 20,
        exercise: 20,
        diet: 20,
        goals: 20,
        determination: 30,
        stress: 0,
        sleepSkill: 1,
        exerSkill: 1,
        dietSkill: 1,
        goalSkill: 1,
        detSkill: 1,
        prod: 20,
        joblevel: 0,
        wage: 7.5,
        habitpower: 5,
        age: 14,
        weeklyHours: 40,
        hourlyWage: 7.5,
        lifeSavings: 1,
        vehicleLevel: 0,
        taxOwed: 0,
        stressMultiplier: 1,
        homeLevel: 0
    }

    return {
        getStats: function() {
            return user;
        }
    }
});
