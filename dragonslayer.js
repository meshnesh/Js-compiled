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