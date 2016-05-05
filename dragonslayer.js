// var slaying = true;
// var youHitThat = Math.floor(Math.random() * 2);
// var damageThisRound = Math.floor(Math.random() * 5 + 1);
// var totalDamage = 0;
//
// while(slaying){
//     if(youHitThat){
//         console.log("Boy, don't you know I am slaying?");
//         totalDamage = totalDamage + damageThisRound;
//         if(totalDamage >= 4){
//             console.log("You owned that dragon. Yeah, you made it your !@#$%");
//             slaying= false;
//         }
//         else {
//             youHitThat = Math.floor(Math.random() * 2);
//         }
//     }
//     else {
//         console.log("Dude, you're dead. You're so dead. Problem is, I slay so hard you don't even know you're dead.");
//     }
//     slaying= false;
// }


 var youHitThat = prompt("What do you wana do?1:Go back to sleep and dream you rich? " +
     "2:go for vacation to the bahamas?" +
    "3:Realise your goals and tke them? ");

switch (youHitThat) {
    case '1':
        console.log("You will have the best time but once you wake up is when it will hit you you a failure in life");
        break;
    case '2':
        console.log("stop sleeping start working then and you will go anywhere you like");
        break;
    case '3':
        console.log("Put in extra hours because this is just a journey that you have started needs alot of commitment and unrest");
        break;
    default:
        console.log("Gotta choose between 1, 2 or 3")
}