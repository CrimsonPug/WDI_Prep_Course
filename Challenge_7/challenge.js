
//magic eightball

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

   
if (choice=1){
    console.log("It is certain");
}
else if (choice=2){
    console.log("It is decidedly so");
}
else if (choice=3){
    console.log("Without a doubt");
}
else if (choice=4){
    console.log("Meh");
}
else if (choice=5){
    console.log("Don't Count on it");
}
else{
    console.log("Please try again");
}

    

    console.log(choice=2);
}

ask();

