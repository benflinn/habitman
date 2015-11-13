"use strict";var app=angular.module("habitmanApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","LocalStorageModule"]).config(["localStorageServiceProvider",function(a){a.setPrefix("ls")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html"}).when("/upgrade",{templateUrl:"views/upgrade.html",controller:"UpgradeCtrl",controllerAs:"upgd"}).when("/howtoplay",{templateUrl:"views/howtoplay.html"}).when("/training",{templateUrl:"views/training.html",controller:"TrainCtrl",controllerAs:"train"}).otherwise({redirectTo:"/"})}]);angular.module("habitmanApp").controller("MainCtrl",["$scope","sharedProperties","userStats","localStorageService",function(a,b,c,d){function e(){var a=Math.random();a>.5?h.familyMembers[Object.keys(h.familyMembers).length+1]="boy":h.familyMembers[Object.keys(h.familyMembers).length+1]="girl",d.set("gameData",h)}var f=b.getTitles(),g=d.get("gameData"),h=g||c.getStats(),i=b.getTrans(),j=b.getSalary(),k=b.getTransPrices(),l=b.getHomes(),m=b.getHomesPrices(),n=b.getHouseNames(),o=0;h.date?a.taxStart=!0:(h.date=Date.now(),a.welcomeback=!0);var p=Date.now()-h.date;p>208e4&&(p=208e4);var q=p/500*(h.wage*h.weeklyHours/8.3-h.familyBudget/8),r=p/500*.0024,s=p/500*(h.wage*h.weeklyHours/20);h.age+=r,h.lifeSavings+=q,h.taxOwed+=s,r=r.toFixed(2),a.aged=r,a.earned=q,a.taxAdded=s,a.habitpower=h.habitpower,a.jobtitle=f[h.joblevel],a.hourlyWage=h.wage,a.lifeSavings=h.lifeSavings,a.age=h.age,a.weeklyHours=h.weeklyHours,a.transport=i[h.vehicleLevel],a.transPrice=k[h.vehicleLevel],a.tax=h.taxOwed,a.currentHouseName=n[h.homeLevel],a.nextHome=l[h.homeLevel],a.homePrice=m[h.homeLevel],a.familyTime=h.familyTime,a.familyMembers=h.familyMembers,a.familyBudget=h.familyBudget,h.homeLevel>3&&(a.family=!0),a.currentHome="Park bench",h.homeLevel>0&&(a.upgradedHome=!0,a.currentHome=l[h.homeLevel-1]),0==h.vehicleLevel?a.transportation="Legs":a.transportation=i[h.vehicleLevel-1],h.wage>10&&(a.taxStart=!0),a.reset=function(){localStorage.clear(),location.reload()},a.prodStatus=function(){return h.prod>100&&h.joblevel<312?(h.prod=20,h.joblevel++,a.jobtitle=f[h.joblevel],h.wage=j[h.joblevel]/2,a.hourlyWage=h.wage,h.stress+=h.stressMultiplier,h.sleep=0,h.exercise=0,h.diet=0,h.goals=0,h.determination=0,h.wage>10&&(a.taxStart=!0),d.set("gameData",h)):312==h.joblevel&&(h.prod=100),h.prod<0&&(h.prod=0),"width: "+h.prod+"%;"},a.sleepStatus=function(){return h.sleep>100&&(h.sleep=100),h.sleep<0&&(h.sleep=0),h.sleep>50?a.sleepImage=!0:a.sleepImage=!1,"width: "+h.sleep+"%;"},a.exerStatus=function(){return h.exercise>100&&(h.exercise=100),h.exercise<0&&(h.exercise=0),h.exercise>50?a.exerImage=!0:a.exerImage=!1,"width: "+h.exercise+"%;"},a.dietStatus=function(){return h.diet>100&&(h.diet=100),h.diet<0&&(h.diet=0),h.diet>50?a.dietImage=!0:a.dietImage=!1,"width: "+h.diet+"%;"},a.goalStatus=function(){return h.goals>100&&(h.goals=100),h.goals<0&&(h.goals=0),h.goals>50?a.goalImage=!0:a.goalImage=!1,"width: "+h.goals+"%;"},a.detStatus=function(){return h.determination>100&&(h.determination=100),h.determination<0&&(h.determination=0),h.determination>50?a.detImage=!0:a.detImage=!1,"width: "+h.determination+"%;"},a.buyTrans=function(){h.lifeSavings>k[h.vehicleLevel]&&(h.lifeSavings-=k[h.vehicleLevel],a.transportation=i[h.vehicleLevel],h.vehicleLevel++,a.transport=i[h.vehicleLevel],a.transPrice=k[h.vehicleLevel],d.set("gameData",h))},a.nap=function(){h.sleep+=20*h.sleepSkill-h.stress*h.weeklyHours/100},a.walk=function(){h.exercise+=20*h.exerSkill-h.stress*h.weeklyHours/100},a.snack=function(){h.diet+=20*h.dietSkill-h.stress*h.weeklyHours/100},a.plan=function(){h.goals+=20*h.goalSkill-h.stress*h.weeklyHours/100},a.focus=function(){h.determination+=20*h.detSkill-h.stress*h.weeklyHours/100},a.rotateHours=function(){h.weeklyHours+=20,h.weeklyHours>110&&(h.weeklyHours=20),a.weeklyHours=h.weeklyHours,d.set("gameData",h)},a.payTax=function(){h.lifeSavings>h.taxOwed?(h.lifeSavings-=h.taxOwed,h.taxOwed=0,a.tax=h.taxOwed,a.lifeSavings=h.lifeSavings):h.lifeSavings>0&&(h.taxOwed-=h.lifeSavings,h.lifeSavings=0,a.tax=h.taxOwed,a.lifeSavings=h.lifeSavings),d.set("gameData",h)},a.changeFamilyBudget=function(){h.familyBudget+=400,h.familyBudget>2e3&&(h.familyBudget=200),a.familyBudget=h.familyBudget,d.set("gameData",h)},a.upgradeHome=function(){m[h.homeLevel]<h.lifeSavings&&(h.lifeSavings-=m[h.homeLevel],a.currentHome=l[h.homeLevel],h.homeLevel++,a.nextHome=l[h.homeLevel],a.homePrice=m[h.homeLevel],h.homeLevel>3&&(a.family=!0),h.homeLevel>0&&(a.upgradedHome=!0),a.currentHouseName=n[h.homeLevel],d.set("gameData",h))},a.rotateFamilyHours=function(){h.familyTime+=10,h.familyTime>55&&(h.familyTime=10),a.familyTime=h.familyTime,d.set("gameData",h)};var t=function(){o++,o%5==0&&(h.date=Date.now(),d.set("gameData",h)),h.lifeSavings=Math.round(h.lifeSavings+h.wage*h.weeklyHours/8.3-h.familyBudget/8),a.lifeSavings=h.lifeSavings,h.familyIndex=h.familyIndex+h.familyTime*h.familyBudget,h.familyIndex>2e7&&(e(),h.familyIndex=0),a.taxStart&&(h.taxOwed=Math.round(h.taxOwed+h.wage*h.weeklyHours/20),a.tax=h.taxOwed),h.age=h.age+.0024,a.age=h.age.toFixed(2),h.sleep=h.sleep+2-4*Math.random()-h.tier*h.stress*h.weeklyHours/150+h.sleepSkill,h.determination=h.determination+2-4*Math.random()-h.tier*h.stress*h.weeklyHours/150+h.detSkill,h.diet=h.diet+2-4*Math.random()-h.tier*h.stress*h.weeklyHours/150+h.dietSkill,h.exercise=h.exercise+2-4*Math.random()-h.tier*h.stress*h.weeklyHours/150+h.exerSkill,h.goals=h.goals+2-4*Math.random()-h.tier*h.stress*h.weeklyHours/150+h.goalSkill,h.prod=h.prod+(h.sleep/1e3+h.diet/1e3+h.exercise/1e3+h.determination/1e3+h.goals/1e3)*(.8*h.vehicleLevel+1)-.25,a.$apply()},u=setInterval(function(){t()},500);a.$on("$destroy",function(){clearInterval(u)})}]),angular.module("habitmanApp").controller("UpgradeCtrl",["$scope","userStats","sharedProperties","localStorageService",function(a,b,c,d){function e(){g.spentHP++,a.spentHP=g.spentHP,g.spentHP>g.nextTierlevel&&(a.disabled=""),d.set("gameData",g)}var f=d.get("gameData"),g=f||b.getStats(),h=c.getTips();a.habitpower=g.habitpower,a.spentHP=0,a.nextTier=g.nextTierlevel+1,a.sleepSkill=g.sleepSkill,a.exerSkill=g.exerSkill,a.dietSkill=g.dietSkill,a.goalSkill=g.goalSkill,a.detSkill=g.detSkill,a.prevsleeplabel=h[0][(g.sleepSkill-1)%10],a.sleeplabel=h[0][g.sleepSkill%10],a.prevexerlabel=h[1][(g.exerSkill-1)%10],a.exerlabel=h[1][g.exerSkill%10],a.prevdietlabel=h[2][(g.dietSkill-1)%10],a.dietlabel=h[2][g.dietSkill%10],a.prevgoalslabel=h[3][(g.goalSkill-1)%10],a.goalslabel=h[3][g.goalSkill%10],a.prevdetlabel=h[4][(g.detSkill-1)%10],a.detlabel=h[4][g.detSkill%10],a.currentTier=g.tier,a.disabled="disabled",g.spentHP>g.nextTierlevel&&(a.disabled=""),a.upgradeTier=function(){g.spentHP>g.nextTierlevel&&(g.tier++,a.currentTier=g.tier,g.nextTierlevel+=30,a.nextTier=g.nextTierlevel+1,a.disabled="disabled",g.stress=0,d.set("gameData",g))},a.upgradesleep=function(){g.habitpower>0&&g.sleepSkill<10*g.tier&&(g.sleepSkill++,g.habitpower--,a.habitpower=g.habitpower,a.sleepSkill=g.sleepSkill,a.prevsleeplabel=h[0][(g.sleepSkill-1)%10],a.sleeplabel=h[0][g.sleepSkill%10],e())},a.upgradeexer=function(){g.habitpower>0&&g.exerSkill<10*g.tier&&(g.exerSkill++,g.habitpower--,a.habitpower=g.habitpower,a.exerSkill=g.exerSkill,a.prevexerlabel=h[1][(g.exerSkill-1)%10],a.exerlabel=h[1][g.exerSkill%10],e())},a.upgradediet=function(){g.habitpower>0&&g.dietSkill<10*g.tier&&(g.dietSkill++,g.habitpower--,a.habitpower=g.habitpower,a.dietSkill=g.dietSkill,a.prevdietlabel=h[2][(g.dietSkill-1)%10],a.dietlabel=h[2][g.dietSkill%10],e())},a.upgradegoals=function(){g.habitpower>0&&g.goalSkill<10*g.tier&&(g.goalSkill++,g.habitpower--,a.habitpower=g.habitpower,a.goalSkill=g.goalSkill,a.prevgoalslabel=h[3][(g.goalSkill-1)%10],a.goalslabel=h[3][g.goalSkill%10],e())},a.upgradedet=function(){g.habitpower>0&&g.detSkill<10*g.tier&&(g.detSkill++,g.habitpower--,a.habitpower=g.habitpower,a.detSkill=g.detSkill,a.prevdetlabel=h[4][(g.detSkill-1)%10],a.detlabel=h[4][g.detSkill%10],e())}}]),angular.module("habitmanApp").controller("TrainCtrl",["$scope","userStats","sharedProperties","localStorageService",function(a,b,c,d){var e=d.get("gameData"),f=e||b.getStats(),g=c.getTips(),h=c.getProblems();a.hpEarned=0,a.HPmultiplier=f.homeLevel+1;var i=function(){d.set("gameData",f);for(var b=Math.floor(5*Math.random()),c=Math.floor(10*Math.random()),e=Math.floor(10*Math.random());c==e;)var e=Math.floor(10*Math.random());a.symptom=h[b][c],a.symptom2=h[b][e];var j=[],k=[];k.push(b);for(var l=0;4>l;l++){for(var m=Math.floor(5*Math.random());-1!=k.indexOf(m);)var m=Math.floor(5*Math.random());var n=Math.floor(10*Math.random());j.push(g[m][n]),k.push(m)}var o=Math.floor(4*Math.random()),p=Math.floor(10*Math.random());j[o]=g[b][p],a.choices=j,a.response=function(b){b==o?(f.habitpower+=f.homeLevel+1,a.hpEarned+=f.homeLevel+1,i(),$("*:focus").blur()):(f.habitpower-=f.homeLevel+1,a.hpEarned-=f.homeLevel+1,d.set("gameData",f))}};i()}]),app.service("sharedProperties",function(){var a=["Bagging Clerk","Bakery Clerk","Barber","Bartender","Bicycle Repairman","Bingo Caller","Blackjack Dealer","Bus Driver","Grocery Store Cashier","Darkroom Attendant","Data Entry Clerk","Deli Counter Clerk","Fast Food Cook","Hair Dresser","Housekeeper","Janitor","Line Cook","Mail Clerk","Manicurist","Packaging Machine Operator","Physical Therapy Attendant","Restaurant Greeter","Retail Cashier","Teacher's Aide","Bank Teller","Valet","Veterinary Assistant","Academic Advisor","Accountant","Aircraft Painter","Animal Groomer And Bather","Entry-Level Architect","Artist","Athletic Trainer","Automobile Estimator","Bakery Manager","Bankruptcy Specialist","Billing Specialist","Bingo Supervisor","Biochemist","Biologist","Bookkeeper","Bricklayer","Cad Drafter","Carpenter","Catering Manager","Chauffeur","Chemical Technician","Computer Operator","Consumer Loan Officer","Cook","Copywriter","Correctional Officer","Court Clerk","Packer","Credit Card Fraud Analyst","Dental Assistant","Diesel Engine Mechanic","Drywall Installer","Electrical Engineering Technician","Engineering Aide","Farm Equipment Mechanic","Field Operator","Fire Fighter","Fitness Instructor","Flight Medic","Floor Assembler","Fork Lift Operator","Geologist","Glasswasher","Health Inspector","Highway Patrol","Hyperbaric Technician","Biology Instructor","Janitor","Land Surveyor","Locksmith","Logger","Machinist","Mechanical Engineering Technician","Medical Assistant","Microbiologist","Painter","Phlebotomist","Pharmacy Technician","Pipefitter","Radio Mechanic","Railroad Worker","Ranch Manager","Receptionist","Registrar Assistant","Reporter","Renal Dialysis Technician","Roofer","Sales Agent","Sales Assistant","Scheduler","Secretary","Shipping Clerk","Solderer","Statistician","Storekeeper","Taxi Driver","Trader","Traffic Clerk","Watchmaker","Welder","Writer","Accountant Executive","Aircraft Electrician","Airport Engineer","Senior Architect","Associate Professor","Atm Manager","Automotive Mechanic","Billing Supervisor","Bingo Manager","Senior Biologist","Biophysicist","Entry Level Statistician","Bookkeeping Manager","Botanist","Senior Bricklayer","Senior Cad Drafter","Call Center Scheduling Supervisor","Campus Recruiter","Cardiac Catheterization Technologist","Ceramics Engineer","Chemical Engineer","Chemist","Civil Engineer","Clinical Programmer","Cytotechnologist","Dental Hygienist","Diabetes Educator","Dietician","Electrical Designer","Senior Electrician","Equipment Engineer","Executive Chef","Financial Aid Director","Fire Inspector","Fleet Manager","Flight Attendant","Food Scientist","Forester","Gas Scheduler","Geologist","Geophysicist","Histology Technician","Immigration Specialist","Industrial Designer","Investment Analyst","Lactation Consultant","University Librarian","Licensing Manager","Loan Examiner","Logistics Analyst","Market Research Analyst","Materials Engineer","Medical Writer","Merchandise Buyer","Metallurgical Engineer","Senior Microbiologist","Model Maker","Mine Engineer","Mri Technologist","Network Engineer","Nuclear Engineer","Nurse Recruiter","Occupational Therapist","Office Manager","Oilwell Pumper","Online Banking Manager","Packaging Engineer","Paralegal","Pc Maintenance Technician","Personal Trainer","Photographer","Physical Therapist","Physician Recruiter","Physicist","Senior Pipefitter","Senior Plumber","Police Sargeant","Portfolio Manager","Power Scheduler","Private Banker","Process Associate","Web Producer","Process Engineer","Product Marketing Analyst","Production Team Leader","Professor","Project Administrator","Quality Control Supervisor","Recruiter","Registrar","Reinsurance Specialist","Reliability Engineer","Religious Educator","Academic Researcher","Risk Analyst","Safety Representative","Sales Analyst","Sales Engineer","Software Developer","Software Engineer","Soil Scientist","Speech And Language Pathologist","Staff Nurse","Strategic Planning Analyst","Supply Chain Analyst","Student Activities Director","High School Teacher","Technical Writer","Ultrasound Technologist","Web Designer","Senior Welder","Senior Account Executive","Senior Actuary","Adult Day Care Director","Senior Appliations Engineer","Asset/Liability Manager","Senior Biologist","Budget Analyst","Commodity Manager","Construction Loan Officer","Contracts Administrator","Corporate Insurance Manager","Data Architect","Dean Of Students","Development Director","Drilling Engineer","Senior Engineer","Helicopter Pilot","It Project Coordinator","Senior Java Developer","Senior Mechnical Engineer","Men's Athletics Director","Merchandise Buyer","Nuclear Laboratory Technologist Supervisor","Operations Manager","Product Manager","Professor","Recruiting Manager","Risk Analyst","Senior Sales Engineer","School Principal","Senior Technical Writer","Web Site Manager","Actuarial Fellow","Senior Aerospace Engineer","Aircraft Maintenance Manager","Applications Engineer","Architectural Director","Attorney","Aviation Manager","Senior Biostatistician","Pilot In Command (Large Jet)","Cardio-Pulmonary Perfusionist","Cardiology Director","Chancellor","Channel Sales Manager","Chief Financial Officer","Chief Executive Officer","Chief Helicopter Pilot","Chief Information Technology Officer","Chief Of Staff","Clinical Research Director","Collateral Manager","College President","Commercial Loan Manager","Configuration Analyst","Construction Manager","Creative Director","Critical Care Director","Credit Risk Manager","Data Architect","Data Warehousing Director","Database Analyst","Dean Of Business","Head Of Nursing","It Controller","Senior Industrial Engineer","Judge","Senior Lending Officer","Medical Records Director","Neurology Director","Senior Nuclear Engineer","Optometrist","Orthodontist","Pharmacist","Physician","Surgical Physician Assistant","Senior Power Trader","Senior Private Banker","Senior Process Engineer","Senior Project Manager","Quality Assurance Director","Provost","Radiation Physicist","Real Estate Attorney","Research And Development Manager","Sales Manager","Biotech Scientist","Software Architect","Surgeon","Tax Attorney","Technical Support Manager","Top Sales Executive","Top Recruiting Executive","Elon Musk"],b=["Old Broomstick","Scooter","Antique Bicycle","Skateboard","Barrel","Baby Carriage","Push Cart","Conveyor Belt","Stroller","Sleigh","Tricycle","Raft","Longboard","Stronger Legs","Unicycle","Dray","Dog Cart","Toboggan","Mountain Bike","Wheelbarrow","Fixie Bicycle","Dugout Canoe","Life Raft","Oxcart","Wheelchair","Canoe","Kayak","Donkey Cart","Pedal Boat","Dogsled","Rowboat","Hay Wagon","Road Bicycle","Umiak","Outrigger Canoe","Covered Wagon","Dinghy","Caravel","Surrey","Caravan","Jalopy","Dirt Bike","Diving Bell","Parachute","Chariot","Go-Cart","Pro Bicycle","Segway","Buggy","Boxcar","Ice Boat","Carriage","Hang Glider","Vespa","1999 TDI VW Jetta","Hovercraft","Fishing Boat","Golf Cart","Snowmobile","Hot Rod","Used Olympic Bobsled","Compact Car","Jet Ski","Yawl","Zamboni","Tractor","Delivery Van","Ultralight Craft","Caboose","Minivan","Velotilt Bicycle","Taxi","Camper","Hatchback","Town Car","Model T","Sedan","Motorcycle","Sailboat","Delivery Truck","Station Wagon","Jeep","Two-Door","Narrowboat","School Bus","Van","Speedboat","Coupe","Subcompact Car","Snowplow","Lorry","Hybrid","Hot Air Balloon","Steamboat","Hearse","Rv","Suv","Flatbed Truck","Minibus","Limo","Convertible","Pick-Up Truck","Riverboat","Sports Car","Bionic Legs","Garbage Truck","Bus","Bulldozer","Eighteen-Wheeler","Biplane","Crop Duster","Armored Car","Bathyscaphe","Electric Car","Stretch Limo","Police Car","Tow Truck","Seaplane","Plane","Stock Car","Ambulance","Humvee","Amphibious Vehicle","Jet Pack","Dump Truck","Houseboat","Combine","Racecar","Blimp","Cabin Cruiser","Motor Home","Hydroplane","Helicopter","Crane","Galleon","Submersible","Fireboat","Tugboat","Earth Mover","Barge","Personal Ski Lift","Fire Engine","Clipper Ship","Yacht","Tank","Gondola","Locomotive","Cargo Ship","U-Boat","Forklift","SR-21","Zeppelin","Rocket","Tanker","Oil Tanker","Jetliner","Personal Monorail","Satellite","Ferry","Submarine","Battleship","Frigate","Personal Subway System","Jumbo Jet","Ocean Liner","Cruise Ship","Bomber","Private Jet","Destroyer","Mars Rover","Warship","Personal Maglev","Space Shuttle","Aircraft Carrier","Bullet Train","Magic Carpet","Space Ship"],c=[15,25,25,30,35,50,50,55,65,80,80,80,85,95,100,120,120,120,120,150,200,250,300,350,350,350,350,450,500,500,550,550,600,650,650,650,700,700,750,800,800,1050,1200,1400,1500,1500,2e3,3e3,3e3,3e3,3e3,3500,3600,5e3,5e3,5500,6e3,6e3,8e3,8e3,9e3,9e3,9e3,1e4,1e4,12e3,12e3,12e3,12500,13e3,15e3,15e3,15e3,15e3,15e3,15e3,15e3,16e3,2e4,2e4,2e4,22e3,28e3,3e4,3e4,3e4,3e4,33e3,34e3,34e3,35e3,37e3,4e4,4e4,42e3,42e3,45e3,5e4,5e4,55e3,55e3,56e3,57e3,58e3,65e3,65e3,65e3,65e3,65e3,7e4,8e4,85e3,85e3,85e3,85e3,86e3,98e3,105e3,12e4,125e3,133e3,14e4,155e3,176e3,185e3,24e4,25e4,25e4,3e5,3e5,3e5,305e3,4e5,45e4,5e5,6e5,681e3,7e5,805e3,835e3,845e3,1e6,135e4,2e6,43e5,5e6,5e6,1e7,35e6,4e7,43e6,55e6,57e6,58e6,6e7,6e7,95e6,15e7,2e8,2e8,209e6,215e6,3e8,357e6,36e7,45e7,55e7,563e6,1843e6,25e8,3e9,8e9,9e9,13e9,98e9,1e11,1e12],d=[15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,28,29,30,30.25,30.5,30.75,31,31.25,31.5,31.75,32,32.25,32.5,32.75,33,33.25,33.5,33.75,34,34.25,34.5,34.75,35,35.25,35.5,35.75,36,36.25,36.5,36.75,37,37.25,37.5,37.75,38,38.25,38.5,38.75,39,39.25,39.5,39.75,40,40.25,40.5,40.75,41,41.25,41.5,41.75,42,42.25,42.5,42.75,43,43.25,43.5,43.75,44,44.25,44.5,44.75,45,45.25,45.5,45.75,46,46.25,46.5,46.75,47,47.25,47.5,47.75,48,48.25,48.5,48.75,49,49.25,49.5,49.75,50,50.25,50.5,50.75,51,51.25,51.5,51.75,52,52.25,52.5,52.75,53,53.25,53.5,53.75,54,54.25,54.5,54.75,55,55.25,55.5,55.75,56,56.25,56.5,56.75,57,57.25,57.5,57.75,58,58.25,58.5,58.75,59,59.25,59.5,59.75,60,60.25,60.5,60.75,61,61.25,61.5,61.75,62,62.25,62.5,62.75,63,63.25,63.5,63.75,64,64.25,64.5,64.75,65,65.25,65.5,65.75,66,66.25,66.5,66.75,67,67.25,67.5,67.75,68,68.25,68.5,68.75,69,69.25,69.5,69.75,70,70.25,70.5,70.75,71,71.25,71.5,71.75,72,72.25,72.5,72.75,73,73.25,73.5,73.75,74,74.25,74.5,74.75,75,75.25,75.5,75.75,76,76.25,76.5,76.75,77,77.25,77.5,77.75,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,9999999],e=[["Take a short nap","Maintain a regular sleep schedule","Avoid eating 2 hours before bed","Get sunshine in the morning","Use the free program flux","Keep a cool bedroom","Don't drink alcohol before bed","Don't drink caffeine after noon","Read before bed","Don't stay up on the weekend"],["Maintain a regular exercise schedule","Set realistic exercise goals","Work out with a buddy","Enjoy working out! Be happy!","Take the stairs","Make excuses to walk & do stairs","Keep an exercise log","Do exercises you love!","Follow youtube exercise videos!","Exercise every day!"],["Stay hydrated & fed","Don't eat after dinner","Eat protein with every meal","Stock up on healthy, convenient foods","Eat more veggies","Always have breakfast","Lose weight slowly","Keep a food diary","Use lots of spices!","Eat lots of healthy, filling food"],["Make specific goals","Make measurable goals","Make accountable goals","Make realistic goals","Estimate the necessary time frame","Make firm decisions","Organize priorities","Write down goals","Make an action plan","Track progress"],["Find your true purpose","Free yourself of energy vampires",'Learn to say "no" to futility',"Save yourself, not the whole world","Meditate on your purpose","Focus on your well-being","Focus on your happiness","Remember who you are","Be positive","Be grateful"]],f=[["You feel tired.","You are exhausted.","Your short-term memory is poor.","You fall asleep randomly during the day.","You feel irritable.","You feel stupid.","You were almost in an accident.","You can fall asleep within 5 minutes of laying down.","You drink extra coffee to stay alert.","You need more sleep."],["Your muscles feel tight.","Your joints hurt.","You have low energy.","You feel anxious.","You need more exercise.","You haven't been outside in three days.","You're not tired enough to fall asleep at night.","You are losing muscle mass.","Your kids can outrun you.","You want to become strong."],["Your diet sucks.","You crave sugary foods.","You are dehydrated.","You feel weak and hungry.","You are gaining weight.","You are heavy.","You eat fast food a lot.","Your body needs better nutrition.","You eat ice cream all day.","You don't know what spinach tastes like."],["You work aimlessly.","You don't work.","You feel like your work never ends.","You prefer games because they are rewarding","You don't have priorities.","You are overwhelmed with stuff to do.","You play video games all day and still feel good about yourself.","Your projects rarely succeed.","You are easily distracted.","You spend a lot of time on social media."],["You feel depressed.","You are unmotivated.","You don't care about your work.","You don't have anything you really care about.","You don't have any idea what to do with your life.","You feel unmotivated","You never feel like singing.",'You don’t say "thank you"',"You hate everything.","You want to lay in bed all day."]],g=["Hut","Hovel","Fancy Treehouse","Small House","Large House","Mansion","Operahouse","Castle","Private Island"],h=[1e3,3e3,5e3,2e4,1e5,5e5,2e6,1e7,3e7],i=["bench","hut","hovel","treehouse","smallhouse","largehouse","mansion","operahouse","castle","island"];return{getTitles:function(){return a},getTrans:function(){return b},getSalary:function(){return d},getTransPrices:function(){return c},getTips:function(){return e},getProblems:function(){return f},getHomes:function(){return g},getHomesPrices:function(){return h},getHouseNames:function(){return i}}}),app.service("userStats",function(){var a={sleep:20,exercise:20,diet:20,goals:20,determination:30,stress:0,sleepSkill:1,exerSkill:1,dietSkill:1,goalSkill:1,detSkill:1,prod:20,joblevel:0,wage:7.5,habitpower:5,age:14,weeklyHours:40,hourlyWage:7.5,lifeSavings:1,vehicleLevel:0,taxOwed:0,stressMultiplier:1,homeLevel:0,tier:1,spentHP:0,familyTime:0,familyMembers:{1:"wife"},familyBudget:0,familyIndex:0,nextTierlevel:29,date:0};return{getStats:function(){return a}}}),angular.module("habitmanApp").run(["$templateCache",function(a){a.put("views/about.html",'<nav class="navbar navbar-default navbar-static-top"> <div class="container-fluid"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header"> <a class="navbar-brand" href="#/home">Habit Man</a> <p class="navbar-text"><i>Start a new working life and learn great habits!</i></p><p> </p></div> <!-- Collect the nav links, forms, and other content for toggling --> <ul class="nav navbar-nav"> <li><a href="#/about">About</a></li> <li><a href="#/howtoplay">How to Play</a></li> </ul> </div><!-- /.container-fluid --> </nav> <div id="about" class="container-fluid"> <div class="row"> <div class="col-lg-push-2 col-lg-8"> <div class="panel panel-default panel-transparent"> <div class="panel-heading"> <h3 class="panel-title">About</h3> </div> <div class="panel-body"> <h2>Habit Man is an idle game designed help people improve their daily habits. </h2> <p>This game will be an effective tool to condition users to build better daily habits:</p> <ol> <li>The user will associate specific external cues with an appropriate remedy.</li> <li>In life, we can\'t learn lifestyle habits quickly because the process is slow. This game allows for quick repetition to facilitate this process</li> <li>Using "upgrades" in this idle game will keep the user interested, along with interesting game content.</li> </ol> <p>GOOD LUCK AND MAY YOUR HABITS LEAD YOU TO UNREASONABLE WEALTH!</p> </div> </div> </div> </div> </div>'),a.put("views/home.html",'<nav class="navbar navbar-default navbar-static-top"> <div class="container-fluid"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header"> <a class="navbar-brand" href="#/home">Habit Man</a> <p class="navbar-text"><i>Start a new working life and learn great habits!</i> </p><p> </p></div> <!-- Collect the nav links, forms, and other content for toggling --> <ul class="nav navbar-nav"> <li><a href="#/about">About</a></li> <li><a href="#/howtoplay">How to Play</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li class="navbar-text"> <button ng-click="reset()" class="btn">Reset all Progress</button> </li> </ul> </div> <!-- /.container-fluid --> </nav> <div class="container-fluid"> <div class="row"> <div class="col-sm-12"> <div class="panel panel-default panel-transparent text-center" ng-hide="welcomeback"> <div class="panel-heading"> <h3 class="panel-title">Welcome back!</h3> </div> <div class="panel-body"> <h3>You were away for {{aged}} years.</h3> <h3>You worked hard!</h3> <h3>You managed to save {{earned|currency}} for your life\'s savings.</h3> <h3>{{taxAdded|currency}} was added to your tax bill.</h3> <button class="btn btn-lg" ng-click="welcomeback=true">Great!</button> </div> </div> </div> <div class="col-lg-5 col-lg-push-1"> <div class="panel panel-default panel-transparent"> <div class="panel-heading"> <h3 class="panel-title">Your Body</h3> </div> <div class="panel-body"> <div class="row"> <div class="col-md-9 margin20"> <img class="img-responsive layer" ng-src="images/goals.87e1ca0f.png" ng-show="goalImage"> <img class="img-responsive layer" ng-src="images/nogoals.80de0f65.png" ng-hide="goalImage"> <img class="img-responsive layer" ng-src="images/determine.e641bbb6.png" ng-show="detImage"> <img class="img-responsive layer" ng-src="images/nodetermine.1faca508.png" ng-hide="detImage"> <img class="img-responsive layer" ng-src="images/exer.75b382ff.png" ng-show="exerImage"> <img class="img-responsive layer" ng-src="images/noexer.c4a9cc32.png" ng-hide="exerImage"> <img class="img-responsive layer" ng-src="images/diet.909aafc7.png" ng-show="dietImage"> <img class="img-responsive layer" ng-src="images/nodiet.ed5bb570.png" ng-hide="dietImage"> <img class="img-responsive layer" ng-src="images/sleep.7ff1718d.png" ng-show="sleepImage"> <img class="img-responsive layer" ng-src="images/nosleep.dce30f64.png" ng-hide="sleepImage"> <img class="img-responsive" src="images/blank.a7f3f341.png"> </div> </div> </div> </div> <div class="panel panel-default panel-transparent"> <div class="panel-heading"> <p class="panel-title">Progress</p> </div> <div class="panel-body"> <table class="table"> <tbody> <tr> <td>Age:</td> <td><span class="" id="agelabel">{{age}}</span></td> </tr> <tr> <td>Weekly hours:</td> <td><span class="" id="hourslabel">{{weeklyHours}}</span> <button title="More hours, more money, more stress" type="button" ng-click="rotateHours()" class="btn">Change hours <span class="glyphicon glyphicon-time"></span></button> </td> </tr> <tr> <td>Life savings:</td> <td><span class="text-success" id="moneylabel">{{lifeSavings | currency}}</span></td> </tr> <tr> <td>Job title:</td> <td><span class="" id="joblabel">{{jobtitle}}</span></td> </tr> <tr> <td>Hourly wage:</td> <td><span class="text-success" id="wagelabel">{{hourlyWage | currency}}</span></td> </tr> <tr> <td>Transportation:</td> <td><span class="" id="transLabel">{{transportation}}</span></td> </tr> <tr> <td>Home:</td> <td><span class="">{{currentHome}}</span></td> </tr> </tbody> </table> <div class="progress"> <div class="progress-bar" style="{{prodStatus()}}"> <p class="progress-text">Productivity</p> </div> </div> </div> </div> </div> <div class="col-lg-5 col-lg-push-1"> <div class="panel panel-default panel-transparent"> <div class="panel panel-default panel-transparent" ng-show="family"> <div class="panel-heading"> <h3 class="panel-title">Your family</h3> </div> <div class="panel-body"> <div class="row"> <div class="col-md-12"> <p>Weekly family time: <span class="">{{familyTime}}</span> <button class="btn" ng-click="rotateFamilyHours()">Change family hours</button> </p> </div> <div class="col-md-12"> <p>Weekly family budget: <span class="">{{familyBudget | currency}}</span> <button class="btn" ng-click="changeFamilyBudget()">Change family budget</button> </p> </div> <div class="col-md-12"> <div class="col-md-3 col-sm-4 col-xs-6" ng-repeat="member in familyMembers"> <img src="../images/blankkid.2a1b83f8.png" class="family margintop30" ng-class="member"> </div> </div> </div> </div> </div> </div> <div class="panel panel-default panel-transparent"> <div class="panel-heading"> <h3 class="panel-title">Status</h3> </div> <div class="panel-body"> <div class="row"> <div class="col-md-3"> <button title="Click this as much as you want" class="full-width btn btn-lg" ng-click="nap()">Nap</button> </div> <div class="col-md-9"> <div class="progress"> <div class="progress-bar" style="{{sleepStatus()}}"> <p class="progress-text">Sleep</p> </div> </div> </div> <div class="col-md-3"> <button title="Click this as much as you want" title="Click this as much as you want" class="full-width btn btn-lg" ng-click="walk()">Walk</button> </div> <div class="col-md-9"> <div class="progress"> <div class="progress-bar" style="{{exerStatus()}}"> <p class="progress-text">Exercise</p> </div> </div> </div> <div class="col-md-3"> <button title="Click this as much as you want" class="full-width btn btn-lg" ng-click="snack()">Snack</button> </div> <div class="col-md-9"> <div class="progress"> <div class="progress-bar" style="{{dietStatus()}}"> <p class="progress-text">Diet</p> </div> </div> </div> <div class="col-md-3"> <button title="Click this as much as you want" class="full-width btn btn-lg" ng-click="plan()">Plan</button> </div> <div class="col-md-9"> <div class="progress"> <div class="progress-bar" style="{{goalStatus()}}"> <p class="progress-text">Goals</p> </div> </div> </div> <div class="col-md-3"> <button title="Click this as much as you want" class="full-width btn btn-lg" ng-click="focus()">Focus</button> </div> <div class="col-md-9"> <div class="progress"> <div class="progress-bar" style="{{detStatus()}}"> <p class="progress-text">Determination</p> </div> </div> </div> </div> <div class="row"> <div class="col-md-6"> <a href="#/upgrade"> <button title="Invest your habit power here by upgrading habits" class="btn full-width btn-lg">Upgrade<img src="images/arrow.aa1463ee.png"></button> </a> </div> <div class="col-md-6"> <a href="#/training"> <button title="Earn habit power here" class="btn full-width btn-lg">Training <img src="images/weight.0b98bbe0.png"></button> </a> </div> </div> <div class="row"> <div class="col-md-12"> <h3></h3> <p class="text-center"><span class="">{{ habitpower }}</span> Habit Power ready to be invested</p> </div> </div> </div> </div> <!-- /.col-sm-4 --> <div class="panel panel-default panel-transparent"> <div class="panel-heading"> <p class="panel-title">Store</p> </div> <div class="panel-body"> <p ng-show="upgradedHome">Transportation Upgrade: <button title="Transportation upgrades increase the acceleration of your productivity" ng-click="buyTrans()" type="button" class="btn btn-lg">{{transport}} for {{transPrice | currency}}</button> </p> <p>Home Upgrade: <button title="Improved housing increases your habit power multiplier" class="btn btn-lg" ng-click="upgradeHome()">{{nextHome}} for {{homePrice | currency}}</button> </p> <p ng-show="taxStart">Pay Taxes: <button title="Currently, paying taxes does absolutely nothing" ng-click="payTax()" type="button" class="btn btn-lg">{{tax | currency}}</button> </p> </div> </div> <div class="panel panel-default panel-transparent"> <div class="panel-heading"> <h3 class="panel-title">Your Home <button ng-click="hidehome=!hidehome" class="btn">Show/hide</button></h3> </div> <div class="panel-body" ng-hide="hidehome"> <img src="../images/homes/hut.b6dd79db.jpg" class="img-responsive" ng-class="currentHouseName"> </div> </div> </div> </div> </div>'),
a.put("views/howtoplay.html",'<nav class="navbar navbar-default navbar-static-top"> <div class="container-fluid"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header"> <a class="navbar-brand" href="#/home">Habit Man</a> <p class="navbar-text"><i>Start a new working life and learn great habits!</i></p><p> </p></div> <!-- Collect the nav links, forms, and other content for toggling --> <ul class="nav navbar-nav"> <li><a href="#/about">About</a></li> <li><a href="#/howtoplay">How to Play</a></li> </ul> </div><!-- /.container-fluid --> </nav> <div id="instruct" class="container-fluid"> <div class="row"> <div class="col-lg-push-2 col-lg-8"> <div class="panel panel-default panel-transparent"> <div class="panel-heading"> <h3 class="panel-title">How to Play</h3> </div> <div class="panel-body centered"> <h3>Click things that are <button class="btn btn-lg">blue</button> </h3> <h3>Earn Habit Power by clicking <button class="btn btn-lg">Training<img src="images/weight.0b98bbe0.png"></button> </h3> <h3>Invest your Habit Power by clicking <button class="btn btn-lg">Upgrade<img src="images/arrow.aa1463ee.png"></button>.</h3> <h3>You get promoted when your productivity bar fills up all the way.</h3> <h3>Transportation upgrades make your productivity accelerate faster.</h3> <h3>Home upgrades increase your Habit Power earned per correct answer in the Training mode.</h3> <h3>Ascend to the next tier in the Upgrade section in order to reset your stress levels to zero. Unfortunately, this also increases how fast stress accumulates in the future.</h3> <h3>Working more hours per week makes more money, but increases your stress levels.</h3> <h3>Your goal is to buy a really nice house, have a huge family, and make a ridiculous amount of money.</h3> </div> </div> </div> </div> </div>'),a.put("views/training.html",'<div id="instruct" class="container-fluid"> <div class="row"> <div class="col-md-8 col-md-offset-2"> <div class="panel panel-default panel-transparent"> <div class="panel-heading"> <h3 class="panel-title">Training</h3> </div> <div class="panel-body centered"> <h4>During your daily work, you notice two symptoms:</h4> <h3>{{symptom}}</h3> <h3>{{symptom2}}</h3> <h4 class="margintop30">Which health tip addresses these problems?</h4> <div class="row"> <div class="col-md-6" ng-repeat="choice in choices track by $index"> <button class="btn btn-lg margintop30" ng-click="response($index)">{{choice}}</button> </div> </div> <h3 class="margintop30">{{hpEarned}} Habit power earned!!</h3> <p>HP multiplier: {{HPmultiplier}}</p> <a href="#/home"><button href="#/" class="btn btn-lg">Back</button></a> </div> </div> </div> </div> </div>'),a.put("views/upgrade.html",'<div id="upgradehabits" class="container-fluid"> <div class="row"> <div class="col-md-8 col-md-offset-2"> <div class="panel panel-default panel-transparent"> <div class="panel-heading"> <h3 class="panel-title">Upgrade Habits</h3> </div> <div class="panel-body centered"> <h3>Available Habit Power: <span class="label label-color">{{habitpower}}</span></h3> <h3>Habit Power Spent: <span class="label label-color">{{spentHP}}</span></h3> <h3>Next Tier Level: <span class="label label-color">{{nextTier}}</span></h3> <div class="row"> <div class="col-md-6 margintop30"> <h3>Sleep habits</h3> <p>Skill Level: <span class="label label-color">{{sleepSkill}}</span></p> <p>Latest habit learned:</p> <p class="label label-color">{{prevsleeplabel}}</p> <p><button class="btn btn-lg margintop30" ng-click="upgradesleep()"> <p>Upgrade to level {{sleepSkill+1}}:</p> <p>{{sleeplabel}}</p> </button></p> </div> <div class="col-md-6 margintop30"> <h3>Exercise habits</h3> <p>Skill Level: <span class="label label-color">{{exerSkill}}</span></p> <p>Latest habit learned:</p> <p class="label label-color">{{prevexerlabel}}</p> <p><button class="btn btn-lg margintop30" ng-click="upgradeexer()"> <p>Upgrade to level {{exerSkill+1}}:</p> <p>{{exerlabel}}</p> </button></p> </div> <div class="col-md-6 margintop30"> <h3>Diet habits</h3> <p>Skill Level: <span class="label label-color">{{dietSkill}}</span></p> <p>Latest habit learned:</p> <p class="label label-color">{{prevdietlabel}}</p> <p><button class="btn btn-lg margintop30" ng-click="upgradediet()"> <p>Upgrade to level {{dietSkill+1}}:</p> <p>{{dietlabel}}</p> </button></p> </div> <div class="col-md-6 margintop30"> <h3>Goal habits</h3> <p>Skill Level: <span class="label label-color">{{goalSkill}}</span></p> <p>Latest habit learned:</p> <p class="label label-color">{{prevgoalslabel}}</p> <p><button class="btn btn-lg margintop30" ng-click="upgradegoals()"> <p>Upgrade to level {{goalSkill+1}}:</p> <p>{{goalslabel}}</p> </button></p> </div> <div class="col-md-6 margintop30"> <h3>Determination habits</h3> <p>Skill Level: <span class="label label-color">{{detSkill}}</span></p> <p>Latest habit learned:</p> <p class="label label-color">{{prevdetlabel}}</p> <p> <button class="btn btn-lg margintop30" ng-click="upgradedet()"> <p>Upgrade to level {{detSkill+1}}:</p> <p>{{detlabel}}</p> </button></p> </div> <div class="col-md-6 margintop30"> <h3>Upgrade to Higher Tier</h3> <p>Current tier: <span class="label label-color">{{currentTier}}</span></p> <p>Spend 30 habit power to enable ascension!</p> <button class="btn btn-lg margintop30" ng-class="disabled" ng-click="upgradeTier()"> <h3>Ascend to Tier {{currentTier + 1}}!</h3> </button> </div> </div> <div class="col-md-12 margintop30"> <a href="#/home"> <button href="#/" class="btn btn-lg">Back</button> </a> </div> </div> </div> </div> </div> </div>  ')}]);