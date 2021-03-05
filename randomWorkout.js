
//Random Workout Generator

//Variables 
const excercies = ['Lunges', 'Pushups', 'Squats', 'Standing overhead dumbbell presses', 'Dumbbell rows', 'Plank', 'Glute bridge'];
const rest = 10;

//Function
const randomWorkout = () => {
    console.log("Random 7 minute workout! \n");  
    let workoutTime = 0;
    while (workoutTime != 420){
       let excerciseTime = 10 * Math.floor(Math.random()*6+1);
       workoutTime += excerciseTime + rest;
       if (workoutTime > 420){
           workoutTime -= (excerciseTime + rest);
           excerciseTime = 420 - workoutTime;
           workoutTime += excerciseTime;
           console.log(`${excercies[Math.floor(Math.random()*excercies.length)]}: ${excerciseTime} sec`)
       } else{
       console.log(`${excercies[Math.floor(Math.random()*excercies.length)]}: ${excerciseTime} sec\nRest: ${rest} sec\n`)
        };
    }; 
  
};

//Call Function
randomWorkout();
