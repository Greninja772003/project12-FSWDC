document.addEventListener('DOMContentLoaded', (event) => {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;
    const circle1 = document.querySelector('.circle1');
    const circle3 = document.querySelector('.circle3');
    const circle4 = document.querySelector('.circle4');
    const circle5 = document.querySelector('.circle5');
    const circle6 = document.querySelector('.circle6');
    const circle7 = document.querySelector('.circle7');
    const circle9 = document.querySelector('.circle9');
    const Circle1 = document.querySelector('.Circle1');
    const Circle3 = document.querySelector('.Circle3');
    const Circle4 = document.querySelector('.Circle4');
    const Circle5 = document.querySelector('.Circle5');
    const Circle6 = document.querySelector('.Circle6');
    const Circle7 = document.querySelector('.Circle7');
    const Circle9 = document.querySelector('.Circle9');
    const refreshButton = document.querySelector('.refreshButton');
    refreshButton.addEventListener('click', () => {
        location.reload();
    });
    
    if (random1 === 1) {
        circle5.style.backgroundColor = 'white';
    } else if (random1 === 2) {
        circle4.style.backgroundColor = 'white';
        circle6.style.backgroundColor = 'white';
    } else if (random1 === 3) {
        circle1.style.backgroundColor = 'white';
        circle5.style.backgroundColor = 'white';
        circle9.style.backgroundColor = 'white';
    } else if (random1 === 4) {
        circle1.style.backgroundColor = 'white';
        circle3.style.backgroundColor = 'white';
        circle7.style.backgroundColor = 'white';
        circle9.style.backgroundColor = 'white';
    } else if (random1 === 5) {
        circle1.style.backgroundColor = 'white';
        circle3.style.backgroundColor = 'white';
        circle5.style.backgroundColor = 'white';
        circle7.style.backgroundColor = 'white';
        circle9.style.backgroundColor = 'white';
    } else if (random1 === 6) {
        circle1.style.backgroundColor = 'white';
        circle3.style.backgroundColor = 'white';
        circle4.style.backgroundColor = 'white';
        circle6.style.backgroundColor = 'white';
        circle7.style.backgroundColor = 'white';
        circle9.style.backgroundColor = 'white';
    }
    if (random2 === 1) {
        Circle5.style.backgroundColor = 'white';
    } else if (random2 === 2) {
        Circle4.style.backgroundColor = 'white';
        Circle6.style.backgroundColor = 'white';
    } else if (random2 === 3) {
        Circle1.style.backgroundColor = 'white';
        Circle5.style.backgroundColor = 'white';
        Circle9.style.backgroundColor = 'white';
    } else if (random2 === 4) {
        Circle1.style.backgroundColor = 'white';
        Circle3.style.backgroundColor = 'white';
        Circle7.style.backgroundColor = 'white';
        Circle9.style.backgroundColor = 'white';
    } else if (random2 === 5) {
        Circle1.style.backgroundColor = 'white';
        Circle3.style.backgroundColor = 'white';
        Circle5.style.backgroundColor = 'white';
        Circle7.style.backgroundColor = 'white';
        Circle9.style.backgroundColor = 'white';
    } else if (random2 === 6) {
        Circle1.style.backgroundColor = 'white';
        Circle3.style.backgroundColor = 'white';
        Circle4.style.backgroundColor = 'white';
        Circle6.style.backgroundColor = 'white';
        Circle7.style.backgroundColor = 'white';
        Circle9.style.backgroundColor = 'white';
    }
    if (random1 > random2) {
        document.querySelector('.result').innerHTML = 'You Win';
    } else if (random1 < random2) {
        document.querySelector('.result').innerHTML = 'CPU Wins';
    } else {
        document.querySelector('.result').innerHTML = 'Draw!';
    }
});
