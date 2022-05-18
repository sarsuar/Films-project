'use strict';

let numberOfFilms ;


function start() {
    numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?','');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?','');
    }
}
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : {},
    private : false
};

start(); 

function remeberMyFilms(){
    for(let i = 0 ; i < 2 ; i++){
        let a = prompt('Один из последних фильмов?','').trim(),
              b = prompt('На сколько вы его оцените?','').trim();
        if(a!=null && b != null && a !='' && b!=''&& a.length<50){
            personalMovieDB.movies[a] = b;
            console.log("Movie Pushed");
        } else{
            console.log("Error: Movie Push");
            i--;
        }
    }
}

remeberMyFilms();



function showMyDB(hidden){
    if (!hidden ){
        console.log(personalMovieDB);
    }else{
        console.log("Access not granted");
    }
}

showMyDB(personalMovieDB.private);


function writeYourGenres(){
    for(let i = 1 ; i < 4; i++){
        let g = prompt(`Введите ваш любимый жанр ${i}`);
        if (g != '' || g != null || NaN(g)){
            personalMovieDB.genres[i-1] = g;
        }
    }
}

writeYourGenres();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count > 30 ){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

