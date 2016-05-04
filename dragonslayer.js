var slaying = true;
var youHitThat = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHitThat){
        console.log("Boy, don't you know I am slaying?");
        totalDamage = totalDamage + damageThisRound;
        if(totalDamage >= 4){
            console.log("You owned that dragon. Yeah, you made it your !@#$%");
            slaying= false;
        }
        else {
            youHitThat = Math.floor(Math.random() * 2);
        }
    }
    else {
        console.log("Dude, you're dead. You're so dead. Problem is, I slay so hard you don't even know you're dead.");
    }
    slaying= false;
}


// var project = readline();

switch(youHitThat) {
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