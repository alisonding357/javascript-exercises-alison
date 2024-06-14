const findTheOldest = function(people) {
    let max = 0;
    let answer;
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    for(const person of people) {
        let yoB = person.yearOfBirth;
        let yoD = person.yearOfDeath;
        if(yoD == undefined) yoD = currentYear;
        if(yoD - yoB > max){
            max = yoD - yoB;
            answer = person; 
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = findTheOldest;
