let audioElement = new Audio();
let masterplay = document.getElementById('masterplay');
let gif_2 = document.getElementById('gif_2');
let mortals = document.getElementById('mortals');
let elec = document.getElementById('elec');
let cartoon = document.getElementById('cartoon');
let john = document.getElementById('john');
let valence = document.getElementById('valence');
let mortals_2 = document.getElementById('mortals');
let elec_2 = document.getElementById('elec');
let cartoon_2 = document.getElementById('cartoon');
let john_2 = document.getElementById('john');
let valence_2 = document.getElementById('valence');



let songs = [{song: "mortals" , filepath: "Warriyo, Rameses B - Mortals (Rameses B Remix) [NCS Release].mp3" },
             {song: "elec" , filepath: "elec.mp3" },
             {song: "cartoon" , filepath: "cartoon.mp3" },
             {song: "john" , filepath: "john.mp3" },
             {song: "valence" , filepath: "valence.mp3" },
             {song: "mortals_2" , filepath: "Warriyo, Rameses B - Mortals (Rameses B Remix) [NCS Release].mp3" },
             {song: "elec_2" , filepath: "elec.mp3" },
             {song: "cartoon_2" , filepath: "cartoon.mp3" },
             {song: "john_2" , filepath: "john.mp3" },
             {song: "valence_2" , filepath: "valence.mp3" },
             
             
 ];

 audioElement.src = songs[0].filepath ;
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



    }


})

mortals.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <=0)
    {
   
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



    
    }

    else {
        audioElement.src = songs[0].filepath ;
        audioElement.pause();
        mortals.classList.add('fa-play');
        mortals.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        masterplay.classList.remove('fa-pause');
        gif_2.style.opacity = 0;
        audioElement.currentTime = 0;




    }


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




    


})







