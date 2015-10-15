'use strict';

/**
 * @ngdoc function
 * @name habitmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the habitmanApp
 */
angular.module('habitmanApp')
    .controller('MainCtrl', function($scope) {
    	//jobtitles
    var titles = [
        'Bagging Clerk',
        'Bakery Clerk',
        'Barber',
        'Bartender',
        'Bicycle Repairman',
        'Bingo Caller',
        'Blackjack Dealer',
        'Bus Driver',
        'Grocery Store Cashier',
        'Darkroom Attendant',
        'Data Entry Clerk',
        'Deli Counter Clerk',
        'Fast Food Cook',
        'Hair Dresser',
        'Housekeeper',
        'Janitor',
        'Line Cook',
        'Mail Clerk',
        'Manicurist',
        'Packaging Machine Operator',
        'Physical Therapy Attendant',
        'Restaurant Greeter',
        'Retail Cashier',
        "Teacher's Aide",
        'Bank Teller',
        'Valet',
        'Veterinary Assistant',
        'Academic Advisor',
        'Accountant',
        'Aircraft Painter',
        'Animal Groomer And Bather',
        'Entry-Level Architect',
        'Artist',
        'Athletic Trainer',
        'Automobile Estimator',
        'Bakery Manager',
        'Bankruptcy Specialist',
        'Billing Specialist',
        'Bingo Supervisor',
        'Biochemist',
        'Biologist',
        'Bookkeeper',
        'Bricklayer',
        'Cad Drafter',
        'Carpenter',
        'Catering Manager',
        'Chauffeur',
        'Chemical Technician',
        'Computer Operator',
        'Consumer Loan Officer',
        'Cook',
        'Copywriter',
        'Correctional Officer',
        'Court Clerk',
        'Packer',
        'Credit Card Fraud Analyst',
        'Dental Assistant',
        'Diesel Engine Mechanic',
        'Drywall Installer',
        'Electrical Engineering Technician',
        'Engineering Aide',
        'Farm Equipment Mechanic',
        'Field Operator',
        'Fire Fighter',
        'Fitness Instructor',
        'Flight Medic',
        'Floor Assembler',
        'Fork Lift Operator',
        'Geologist',
        'Glasswasher',
        'Health Inspector',
        'Highway Patrol',
        'Hyperbaric Technician',
        'Biology Instructor',
        'Janitor',
        'Land Surveyor',
        'Locksmith',
        'Logger',
        'Machinist',
        'Mechanical Engineering Technician',
        'Medical Assistant',
        'Microbiologist',
        'Painter',
        'Phlebotomist',
        'Pharmacy Technician',
        'Pipefitter',
        'Radio Mechanic',
        'Railroad Worker',
        'Ranch Manager',
        'Receptionist',
        'Registrar Assistant',
        'Reporter',
        'Renal Dialysis Technician',
        'Roofer',
        'Sales Agent',
        'Sales Assistant',
        'Scheduler',
        'Secretary',
        'Shipping Clerk',
        'Solderer',
        'Statistician',
        'Storekeeper',
        'Taxi Driver',
        'Trader',
        'Traffic Clerk',
        'Watchmaker',
        'Welder',
        'Writer',
        'Accountant Executive',
        'Aircraft Electrician',
        'Airport Engineer',
        'Senior Architect',
        'Associate Professor',
        'Atm Manager',
        'Automotive Mechanic',
        'Billing Supervisor',
        'Bingo Manager',
        'Senior Biologist',
        'Biophysicist',
        'Entry Level Statistician',
        'Bookkeeping Manager',
        'Botanist',
        'Senior Bricklayer',
        'Senior Cad Drafter',
        'Call Center Scheduling Supervisor',
        'Campus Recruiter',
        'Cardiac Catheterization Technologist',
        'Ceramics Engineer',
        'Chemical Engineer',
        'Chemist',
        'Civil Engineer',
        'Clinical Programmer',
        'Cytotechnologist',
        'Dental Hygienist',
        'Diabetes Educator',
        'Dietician',
        'Electrical Designer',
        'Senior Electrician',
        'Equipment Engineer',
        'Executive Chef',
        'Financial Aid Director',
        'Fire Inspector',
        'Fleet Manager',
        'Flight Attendant',
        'Food Scientist',
        'Forester',
        'Gas Scheduler',
        'Geologist',
        'Geophysicist',
        'Histology Technician',
        'Immigration Specialist',
        'Industrial Designer',
        'Investment Analyst',
        'Lactation Consultant',
        'University Librarian',
        'Licensing Manager',
        'Loan Examiner',
        'Logistics Analyst',
        'Market Research Analyst',
        'Materials Engineer',
        'Medical Writer',
        'Merchandise Buyer',
        'Metallurgical Engineer',
        'Senior Microbiologist',
        'Model Maker',
        'Mine Engineer',
        'Mri Technologist',
        'Network Engineer',
        'Nuclear Engineer',
        'Nurse Recruiter',
        'Occupational Therapist',
        'Office Manager',
        'Oilwell Pumper',
        'Online Banking Manager',
        'Packaging Engineer',
        'Paralegal',
        'Pc Maintenance Technician',
        'Personal Trainer',
        'Photographer',
        'Physical Therapist',
        'Physician Recruiter',
        'Physicist',
        'Senior Pipefitter',
        'Senior Plumber',
        'Police Sargeant',
        'Portfolio Manager',
        'Power Scheduler',
        'Private Banker',
        'Process Associate',
        'Web Producer',
        'Process Engineer',
        'Product Marketing Analyst',
        'Production Team Leader',
        'Professor',
        'Project Administrator',
        'Quality Control Supervisor',
        'Recruiter',
        'Registrar',
        'Reinsurance Specialist',
        'Reliability Engineer',
        'Religious Educator',
        'Academic Researcher',
        'Risk Analyst',
        'Safety Representative',
        'Sales Analyst',
        'Sales Engineer',
        'Software Developer',
        'Software Engineer',
        'Soil Scientist',
        'Speech And Language Pathologist',
        'Staff Nurse',
        'Strategic Planning Analyst',
        'Supply Chain Analyst',
        'Student Activities Director',
        'High School Teacher',
        'Technical Writer',
        'Ultrasound Technologist',
        'Web Designer',
        'Senior Welder',
        'Senior Account Executive',
        'Senior Actuary',
        'Adult Day Care Director',
        'Senior Appliations Engineer',
        'Asset/Liability Manager',
        'Senior Biologist',
        'Budget Analyst',
        'Commodity Manager',
        'Construction Loan Officer',
        'Contracts Administrator',
        'Corporate Insurance Manager',
        'Data Architect',
        'Dean Of Students',
        'Development Director',
        'Drilling Engineer',
        'Senior Engineer',
        'Helicopter Pilot',
        'It Project Coordinator',
        'Senior Java Developer',
        'Senior Mechnical Engineer',
        "Men's Athletics Director",
        'Merchandise Buyer',
        'Nuclear Laboratory Technologist Supervisor',
        'Operations Manager',
        'Product Manager',
        'Professor',
        'Recruiting Manager',
        'Risk Analyst',
        'Senior Sales Engineer',
        'School Principal',
        'Senior Technical Writer',
        'Web Site Manager',
        'Actuarial Fellow',
        'Senior Aerospace Engineer',
        'Aircraft Maintenance Manager',
        'Applications Engineer',
        'Architectural Director',
        'Attorney',
        'Aviation Manager',
        'Senior Biostatistician',
        'Pilot In Command (Large Jet)',
        'Cardio-Pulmonary Perfusionist',
        'Cardiology Director',
        'Chancellor',
        'Channel Sales Manager',
        'Chief Financial Officer',
        'Chief Executive Officer',
        'Chief Helicopter Pilot',
        'Chief Information Technology Officer',
        'Chief Of Staff',
        'Clinical Research Director',
        'Collateral Manager',
        'College President',
        'Commercial Loan Manager',
        'Configuration Analyst',
        'Construction Manager',
        'Creative Director',
        'Critical Care Director',
        'Credit Risk Manager',
        'Data Architect',
        'Data Warehousing Director',
        'Database Analyst',
        'Dean Of Business',
        'Head Of Nursing',
        'It Controller',
        'Senior Industrial Engineer',
        'Judge',
        'Senior Lending Officer',
        'Medical Records Director',
        'Neurology Director',
        'Senior Nuclear Engineer',
        'Optometrist',
        'Orthodontist',
        'Pharmacist',
        'Physician',
        'Surgical Physician Assistant',
        'Senior Power Trader',
        'Senior Private Banker',
        'Senior Process Engineer',
        'Senior Project Manager',
        'Quality Assurance Director',
        'Provost',
        'Radiation Physicist',
        'Real Estate Attorney',
        'Research And Development Manager',
        'Sales Manager',
        'Biotech Scientist',
        'Software Architect',
        'Surgeon',
        'Tax Attorney',
        'Technical Support Manager',
        'Top Sales Executive',
        'Top Recruiting Executive',
        'Elon Musk'
    ];

    var sleep = 20, exercise = 20, diet = 20, goals = 20, determination = 30;
    var stress = 0;
    var sleepSkill = 20, exerSkill = 20, dietSkill = 20, goalSkill = 20, detSkill = 20;
    var prod = 20;
    var joblevel = 0;
    var wage = 7.5;
    $scope.habitpower = 10;
    $scope.jobtitle = titles[joblevel];
    $scope.age = 14;
    $scope.weeklyHours = 40;
    $scope.hourlyWage = wage;
    $scope.lifeSavings = 1;
    $scope.prodStatus = function() {
    	if (prod > 100) {
    		prod = 0;
    		joblevel++;
    		$scope.jobtitle = titles[joblevel];
    		wage = Math.round(100*(wage + wage * .05))/100;
    		$scope.hourlyWage = wage;
            stress++;
    	}
    	if (prod < 0) {
    		prod = 0;
    	}
     return "width: " + prod + "%;";
    };
    $scope.sleepStatus = function() {
    	if (sleep > 100) {
    		sleep = 100;
    	}
    	if (sleep < 0) {
    		sleep = 0;
    	}
    	if (sleep > 50) {
    		$scope.sleepImage = 'sleep.png';
    	} else {
    		$scope.sleepImage = 'nosleep.png';
    	}
     return "width: " + sleep + "%;";
    };
    $scope.exerStatus = function() {
    	if (exercise > 100) {
    		exercise = 100;
    	}
    	if (exercise < 0) {
    		exercise = 0;
    	}
    	if (exercise > 50) {
    		$scope.exerImage = 'exer.png';
    	} else {
    		$scope.exerImage = 'noexer.png';
    	}

        return "width: " + exercise + "%;";
    };
    $scope.dietStatus = function() {
    	if (diet > 100) {
    		diet = 100;
    	}
    	if (diet < 0) {
    		diet = 0;
    	}
    	if (diet > 50) {
    		$scope.dietImage = 'diet.png';
    	} else {
    		$scope.dietImage = 'nodiet.png';
    	}

        return "width: " + diet + "%;";
    };
    $scope.goalStatus = function() {
    	if (goals > 100) {
    		goals = 100;
    	}
    	if (goals < 0) {
    		goals = 0;
    	}
    	if (goals > 50) {
    		$scope.goalImage = 'goals.png';
    	} else {
    		$scope.goalImage = 'nogoals.png';
    	}
        return "width: " + goals + "%;";
    };
    $scope.detStatus = function() {
    	if (determination > 100) {
    		determination = 100;
    	}
    	if (determination < 0) {
    		determination = 0;
    	}
    	if (determination > 50) {
    		$scope.detImage = 'determine.png';
    	} else {
    		$scope.detImage = 'nodetermine.png';
    	}
        return "width: " + determination + "%;";
    };
    $scope.nap = function() {
        sleep += sleepSkill - stress * $scope.weeklyHours / 100;
    }
    $scope.walk = function() {
        exercise += exerSkill - stress * $scope.weeklyHours / 100;
    }
    $scope.snack = function() {
        diet += dietSkill - stress * $scope.weeklyHours / 100;
    }
    $scope.plan = function() {
        goals += goalSkill - stress * $scope.weeklyHours / 100;
    }
    $scope.focus = function() {
        determination += detSkill - stress * $scope.weeklyHours / 100;
    }
    $scope.rotateHours = function() {
        $scope.weeklyHours += 20;
        if ($scope.weeklyHours > 110) {
            $scope.weeklyHours = 20;
        }
    }
    var oneSecond = function() {
        $scope.lifeSavings = Math.round($scope.lifeSavings + $scope.hourlyWage * $scope.weeklyHours / 8.3);
        $scope.age = Math.round(10000 * ($scope.age + .0024)) / 10000;
        $scope.sleepPercent = $scope.sleepPercent + 1;
        //add variance & add stress
        sleep = sleep + 2 - 4*Math.random() - stress * $scope.weeklyHours / 100  + sleepSkill / 20;
        determination = determination + 2 - 4*Math.random() - stress * $scope.weeklyHours / 100  + detSkill / 20;
        diet = diet + 2 - 4*Math.random() - stress * $scope.weeklyHours / 100  + dietSkill / 20;
        exercise = exercise + 2  - 4*Math.random() - stress * $scope.weeklyHours / 100  + exerSkill / 20;
        goals = goals + 2  - 4*Math.random() - stress * $scope.weeklyHours / 100 + goalSkill / 20;
        //calculate productivity
        prod = prod + sleep / 100 + diet / 100 + exercise / 100 + determination / 100 + goals / 100 - 2.5;
        $scope.$apply();
    }
    setInterval(function() {
        oneSecond();
    }, 500);
});
