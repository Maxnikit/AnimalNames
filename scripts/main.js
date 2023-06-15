function AnswerCheck(AnimalInput, RightAnswer){
    let result = (AnimalInput === RightAnswer);
    return result;
}
console.log(AnswerCheck('Свинья', 'Свинья'));
console.log(AnswerCheck('Боров', 'Свинья'));
if ((AnswerCheck('Свинья', 'Свинья')) === true){console.log("Да")}else{console.log("Нет")}