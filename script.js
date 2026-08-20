let audioElement = new Audio();
let masterplay = document.getElementById('masterplay');
let gif_2 = document.getElementById('gif_2');
let mortals = document.getElementById('mortals');
let elec = document.getElementById('elec');
let cartoon = document.getElementById('cartoon');
let john = document.getElementById('john');
let valence = document.getElementById('valence');
let mortals_2 = document.getElementById('mortals_2');
let elec_2 = document.getElementById('elec_2');
let cartoon_2 = document.getElementById('cartoon_2');
let john_2 = document.getElementById('john_2');
let valence_2 = document.getElementById('valence_2');




let songs = [{song: "mortals" , filepath: "mortals.mp3" },
             {song: "elec" , filepath: "elec.mp3" },
             {song: "cartoon" , filepath: "cartoon.mp3" },
             {song: "john" , filepath: "john.mp3" },
             {song: "valence" , filepath: "valence.mp3" },
             {song: "mortals_2" , filepath: "mortals.mp3" },
             {song: "elec_2" , filepath: "elec.mp3" },
             {song: "cartoon_2" , filepath: "cartoon.mp3" },
             {song: "john_2" , filepath: "john.mp3" },
             {song: "valence_2" , filepath: "valence.mp3" },
             
             
 ];

 audioElement.src = songs[0].filepath ;
 audioElement.preload = "metadata";
 let songIndex = 0;


 masterplay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <=0)
    {
   
     audioElement.play();
     console.log(audioElement.currentTime);
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;

     if(songIndex === 0) {

        mortals.classList.remove('fa-play');
     mortals.classList.add('fa-pause');

     }

     if(songIndex === 1) {

        elec.classList.remove('fa-play');
     elec.classList.add('fa-pause');

     }

     if(songIndex === 2) {

     cartoon.classList.remove('fa-play');
     cartoon.classList.add('fa-pause');

     }

     if(songIndex === 3) {

     john.classList.remove('fa-play');
     john.classList.add('fa-pause');

     }

     if(songIndex === 4) {

     valence.classList.remove('fa-play');
     valence.classList.add('fa-pause');

     }

     if(songIndex === 5) {

     mortals_2.classList.remove('fa-play');
     mortals_2.classList.add('fa-pause');

     }

     if(songIndex === 6) {

     elec_2.classList.remove('fa-play');
     elec_2.classList.add('fa-pause');

     }

     if(songIndex === 7) {

     cartoon_2.classList.remove('fa-play');
     cartoon_2.classList.add('fa-pause');

     }

     if(songIndex === 8) {

     john_2.classList.remove('fa-play');
     john_2.classList.add('fa-pause');

     }

     if(songIndex === 9) {

     valence_2.classList.remove('fa-play');
     valence_2.classList.add('fa-pause');

     }





    
    }

    else {
        audioElement.pause();
        masterplay.classList.add('fa-play');
        masterplay.classList.remove('fa-pause');
        gif_2.style.opacity = 0;
        mortals.classList.add('fa-play');
        mortals.classList.remove('fa-pause');
        elec.classList.add('fa-play');
        elec.classList.remove('fa-pause');
        cartoon.classList.add('fa-play');
        cartoon.classList.remove('fa-pause');
        john.classList.add('fa-play');
        john.classList.remove('fa-pause');
        valence.classList.add('fa-play');
        valence.classList.remove('fa-pause');
        mortals_2.classList.add('fa-play');
        mortals_2.classList.remove('fa-pause');
        elec_2.classList.add('fa-play');
        elec_2.classList.remove('fa-pause');
        cartoon_2.classList.add('fa-play');
        cartoon_2.classList.remove('fa-pause');
        john_2.classList.add('fa-play');
        john_2.classList.remove('fa-pause');
        valence_2.classList.add('fa-play');
        valence_2.classList.remove('fa-pause');




    }


})

 mortals.addEventListener('click', () => {


   
     songIndex=0;
     audioElement.src = songs[0].filepath ;
     audioElement.play();
     console.log(audioElement.currentTime);
     mortals.classList.remove('fa-play');
     mortals.classList.add('fa-pause');
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;
     cartoon.classList.add('fa-play');
     cartoon.classList.remove('fa-pause');
     elec.classList.add('fa-play');
     elec.classList.remove('fa-pause');
     mortals_2.classList.add('fa-play');
     mortals_2.classList.remove('fa-pause');
     john.classList.add('fa-play');
     john.classList.remove('fa-pause');
     valence.classList.add('fa-play');
     valence.classList.remove('fa-pause');
     cartoon_2.classList.add('fa-play');
     cartoon_2.classList.remove('fa-pause');
     elec_2.classList.add('fa-play');
     elec_2.classList.remove('fa-pause');
     john_2.classList.add('fa-play');
     john_2.classList.remove('fa-pause');
     valence_2.classList.add('fa-play');
     valence_2.classList.remove('fa-pause');
     
    


    

    

})

elec.addEventListener('click', () => {

    
     songIndex = 1;
     audioElement.src = songs[1].filepath ;
     audioElement.play();
     console.log(audioElement.currentTime);
     elec.classList.remove('fa-play');
     elec.classList.add('fa-pause');
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;
     cartoon.classList.add('fa-play');
     cartoon.classList.remove('fa-pause');
     mortals.classList.add('fa-play');
     mortals.classList.remove('fa-pause');
     john.classList.add('fa-play');
     john.classList.remove('fa-pause');
     valence.classList.add('fa-play');
     valence.classList.remove('fa-pause');
     cartoon_2.classList.add('fa-play');
     cartoon_2.classList.remove('fa-pause');
     mortals_2.classList.add('fa-play');
     mortals_2.classList.remove('fa-pause');
     john_2.classList.add('fa-play');
     john_2.classList.remove('fa-pause');
     valence_2.classList.add('fa-play');
     valence_2.classList.remove('fa-pause');
     elec_2.classList.add('fa-play');
     elec_2.classList.remove('fa-pause');



    


})

cartoon.addEventListener('click', () => {

    
     songIndex = 2;
     audioElement.src = songs[2].filepath ;
     audioElement.play();
     console.log(audioElement.currentTime);
     cartoon.classList.remove('fa-play');
     cartoon.classList.add('fa-pause');
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;
     mortals.classList.add('fa-play');
     mortals.classList.remove('fa-pause');
     john.classList.add('fa-play');
     john.classList.remove('fa-pause');
     valence.classList.add('fa-play');
     valence.classList.remove('fa-pause');
     elec.classList.add('fa-play');
     elec.classList.remove('fa-pause');
     mortals_2.classList.add('fa-play');
     mortals_2.classList.remove('fa-pause');
     john_2.classList.add('fa-play');
     john_2.classList.remove('fa-pause');
     valence_2.classList.add('fa-play');
     valence_2.classList.remove('fa-pause');
     elec_2.classList.add('fa-play');
     elec_2.classList.remove('fa-pause');
     cartoon_2.classList.add('fa-play');
     cartoon_2.classList.remove('fa-pause');




    


})

john.addEventListener('click', () => {

    
     songIndex = 3;
     audioElement.src = songs[3].filepath ;
     audioElement.play();
     console.log(audioElement.currentTime);
     john.classList.remove('fa-play');
     john.classList.add('fa-pause');
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;
     mortals.classList.add('fa-play');
     mortals.classList.remove('fa-pause');
     valence.classList.add('fa-play');
     valence.classList.remove('fa-pause');
     elec.classList.add('fa-play');
     elec.classList.remove('fa-pause');
     cartoon.classList.add('fa-play');
     cartoon.classList.remove('fa-pause');
     mortals_2.classList.add('fa-play');
     mortals_2.classList.remove('fa-pause');
     valence_2.classList.add('fa-play');
     valence_2.classList.remove('fa-pause');
     elec_2.classList.add('fa-play');
     elec_2.classList.remove('fa-pause');
     cartoon_2.classList.add('fa-play');
     cartoon_2.classList.remove('fa-pause');
     john_2.classList.add('fa-play');
     john_2.classList.remove('fa-pause');




    


})


valence.addEventListener('click', () => {

    
     songIndex = 4;
     audioElement.src = songs[4].filepath ;
     audioElement.play();
     console.log(audioElement.currentTime);
     valence.classList.remove('fa-play');
     valence.classList.add('fa-pause');
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;
     mortals.classList.add('fa-play');
     mortals.classList.remove('fa-pause');
     elec.classList.add('fa-play');
     elec.classList.remove('fa-pause');
     cartoon.classList.add('fa-play');
     cartoon.classList.remove('fa-pause');
     john.classList.add('fa-play');
     john.classList.remove('fa-pause');
     mortals_2.classList.add('fa-play');
     mortals_2.classList.remove('fa-pause');
     elec_2.classList.add('fa-play');
     elec_2.classList.remove('fa-pause');
     cartoon_2.classList.add('fa-play');
     cartoon_2.classList.remove('fa-pause');
     john_2.classList.add('fa-play');
     john_2.classList.remove('fa-pause');
     valence_2.classList.add('fa-play');
     valence_2.classList.remove('fa-pause');





    


})


mortals_2.addEventListener('click', () => {

    
     songIndex = 5;
     audioElement.src = songs[5].filepath ;
     audioElement.play();
     console.log(audioElement.currentTime);
     mortals_2.classList.remove('fa-play');
     mortals_2.classList.add('fa-pause');
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;
     cartoon.classList.add('fa-play');
     cartoon.classList.remove('fa-pause');
     mortals.classList.add('fa-play');
     mortals.classList.remove('fa-pause');
     john.classList.add('fa-play');
     john.classList.remove('fa-pause');
     valence.classList.add('fa-play');
     valence.classList.remove('fa-pause');
     cartoon_2.classList.add('fa-play');
     cartoon_2.classList.remove('fa-pause');
     elec_2.classList.add('fa-play');
     elec_2.classList.remove('fa-pause');
     john_2.classList.add('fa-play');
     john_2.classList.remove('fa-pause');
     valence_2.classList.add('fa-play');
     valence_2.classList.remove('fa-pause');
     elec.classList.add('fa-play');
     elec.classList.remove('fa-pause');


})

elec_2.addEventListener('click', () => {

    
     songIndex = 6;
     audioElement.src = songs[6].filepath ;
     audioElement.play();
     console.log(audioElement.currentTime);
     elec_2.classList.remove('fa-play');
     elec_2.classList.add('fa-pause');
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;
     cartoon.classList.add('fa-play');
     cartoon.classList.remove('fa-pause');
     mortals.classList.add('fa-play');
     mortals.classList.remove('fa-pause');
     john.classList.add('fa-play');
     john.classList.remove('fa-pause');
     valence.classList.add('fa-play');
     valence.classList.remove('fa-pause');
     cartoon_2.classList.add('fa-play');
     cartoon_2.classList.remove('fa-pause');
     mortals_2.classList.add('fa-play');
     mortals_2.classList.remove('fa-pause');
     john_2.classList.add('fa-play');
     john_2.classList.remove('fa-pause');
     valence_2.classList.add('fa-play');
     valence_2.classList.remove('fa-pause');
     elec.classList.add('fa-play');
     elec.classList.remove('fa-pause');



    


})

cartoon_2.addEventListener('click', () => {

    
     songIndex = 7;
     audioElement.src = songs[7].filepath ;
     audioElement.play();
     console.log(audioElement.currentTime);
     cartoon_2.classList.remove('fa-play');
     cartoon_2.classList.add('fa-pause');
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;
     mortals.classList.add('fa-play');
     mortals.classList.remove('fa-pause');
     john.classList.add('fa-play');
     john.classList.remove('fa-pause');
     valence.classList.add('fa-play');
     valence.classList.remove('fa-pause');
     elec.classList.add('fa-play');
     elec.classList.remove('fa-pause');
     mortals_2.classList.add('fa-play');
     mortals_2.classList.remove('fa-pause');
     john_2.classList.add('fa-play');
     john_2.classList.remove('fa-pause');
     valence_2.classList.add('fa-play');
     valence_2.classList.remove('fa-pause');
     elec_2.classList.add('fa-play');
     elec_2.classList.remove('fa-pause');
     cartoon.classList.add('fa-play');
     cartoon.classList.remove('fa-pause');





    


})

john_2.addEventListener('click', () => {

    
     songIndex = 8;
     audioElement.src = songs[8].filepath ;
     audioElement.play();
     console.log(audioElement.currentTime);
     john_2.classList.remove('fa-play');
     john_2.classList.add('fa-pause');
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;
     mortals.classList.add('fa-play');
     mortals.classList.remove('fa-pause');
     valence.classList.add('fa-play');
     valence.classList.remove('fa-pause');
     elec.classList.add('fa-play');
     elec.classList.remove('fa-pause');
     cartoon.classList.add('fa-play');
     cartoon.classList.remove('fa-pause');
     mortals_2.classList.add('fa-play');
     mortals_2.classList.remove('fa-pause');
     valence_2.classList.add('fa-play');
     valence_2.classList.remove('fa-pause');
     elec_2.classList.add('fa-play');
     elec_2.classList.remove('fa-pause');
     cartoon_2.classList.add('fa-play');
     cartoon_2.classList.remove('fa-pause');
     john.classList.add('fa-play');
     john.classList.remove('fa-pause');



    


})


valence_2.addEventListener('click', () => {

    
     songIndex = 9;
     audioElement.src = songs[9].filepath ;
     audioElement.play();
     console.log(audioElement.currentTime);
     valence_2.classList.remove('fa-play');
     valence_2.classList.add('fa-pause');
     masterplay.classList.remove('fa-play');
     masterplay.classList.add('fa-pause');
     gif_2.style.opacity = 1;
     mortals.classList.add('fa-play');
     mortals.classList.remove('fa-pause');
     elec.classList.add('fa-play');
     elec.classList.remove('fa-pause');
     cartoon.classList.add('fa-play');
     cartoon.classList.remove('fa-pause');
     john.classList.add('fa-play');
     john.classList.remove('fa-pause');
     mortals_2.classList.add('fa-play');
     mortals_2.classList.remove('fa-pause');
     elec_2.classList.add('fa-play');
     elec_2.classList.remove('fa-pause');
     cartoon_2.classList.add('fa-play');
     cartoon_2.classList.remove('fa-pause');
     john_2.classList.add('fa-play');
     john_2.classList.remove('fa-pause');
     valence.classList.add('fa-play');
     valence.classList.remove('fa-pause');




    


})






