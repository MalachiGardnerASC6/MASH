
function mash(){
    return(`You will live in ${getHome()}, and you will have ${getChildrenCount()}! You will get around with ${getCar()}, your favorite ASC staff member is ${getFavStaff()}, you have ${getFailures()} failures, and you ${getInternship()} get an internship from your mentor!`);
    
}
console.log(mash()) 

function getHome(){
    let homeList = ["a Mansion","an Apartment","a Shack","your Parent's Basement","ANIMELORD9999's house"];
    let houseDec = Math.random() * homeList.length;
    let houseLength = Math.floor(houseDec);
    let houseFin = homeList[houseLength];
    if (process.argv[3] == "Garrett"){
        return(homeList[4])
    }else{
    return(houseFin)
    }
}

function getChildrenCount(){
    let customAttempt = Math.floor(Math.random() * 2);
    let childDec = Math.random();
    let times100 = childDec * 100;
    let childFin = Math.floor(times100);
    if (customAttempt == 1) {
        return(childFin + " Kids")
    }else{
        return(process.argv[2] + " Kids: Your choice!")}
}

function getCar(){
    let carList = ["a Tesla", "a Box with Wheels", "Your feet", "a Smart Car", "a Minivan", "a Bike", "a Hoverboard", "a Lambo","the Animelord Mobile", "a Flintstones Car"];
    let carDec = Math.random() * carList.length;
    let carLength = Math.floor(carDec);
    let carFin = carList[carLength];
    return(carFin);
}

function getFavStaff(){
    let staffList = ["Navid","Kermina","Adednego","ANIMELORD9999","Abakir (Wherever he is)"]
    let staffDec = Math.random() * staffList.length;
    let staffLength = Math.floor(staffDec);
    let staffFin = staffList[staffLength];
    return(staffFin);
}

function getFailures(){
    let fail = Math.floor(Math.random()* 2);
    let failDec = Math.random();
    let failPsycho100 = failDec * 10000;
    let failFin = Math.floor(failPsycho100);
    return(failFin)
}

function getInternship(){
    let internship = ["WILL","will NOT"]
    let internshipDec = Math.random() * internship.length;
    let internshipLength = Math.floor(internshipDec);
    let internFin = internship[internshipLength];
    return(internFin);
}