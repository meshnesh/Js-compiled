var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHit){
        console.log("Nice shot");
        totalDamage = totalDamage + damageThisRound;
        if(totalDamage >= 4){
            console.log("You killed the beast");
            slaying= false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else {
        console.log("you know your dead");
    }
    slaying= false;
}


var project = prompt("Which project have you done 1, 2, 3.");

switch(project) {
    case '1':
        console.log("this is how you will not graduate!");
        break;
    case '2':
        console.log("eenh you will sleep for 2 more hours b4 you work!");
        break;
    case '3':
        console.log("see yah dont wana be yah");
        break;
    // Add your code here!
    default:
        console.log("go home and hide under the bed frank is gonna kill you!")
}