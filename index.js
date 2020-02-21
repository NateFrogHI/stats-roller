function getThreeHighestRolls(){
    let lowestRoll;
    const rolls = [];
    for (let index = 0; index < 4; index++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        if(!lowestRoll){
            lowestRoll = roll;
        } else if (roll > lowestRoll) {
            rolls.push(roll);
        } else {
            rolls.push(lowestRoll);
            lowestRoll = roll;
        }
    }

    return rolls[0] + rolls[1] + rolls[2];
}

function diceRolls() {
    const roll = [];
    let total = 0;
    for (let index = 0; index < 6; index++) {
        roll[index] = getThreeHighestRolls();
        total += roll[index];
        document.getElementById(index.toString()).innerHTML = `Roll ${index + 1}: ${roll[index]}`;
    }
    document.getElementById('total').innerHTML = `Total: ${total}`;
}