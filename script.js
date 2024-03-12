const container = document.querySelector('.container');

const prevBtn = container.querySelector('.btn-prev');
const nextBtn = container.querySelector('.btn-next');
const circle = container.querySelectorAll('.circle');
const progressBar = container.querySelector('.progress-bar');

let currentCount = 0;

function moveToNext(){
    currentCount++;
    if(currentCount >= circle.length) currentCount = circle.length-1;
    update();
}

function moveToPrev(){
    currentCount--;
    if(currentCount < 0) currentCount = 0;
    update();
}

function update() {
    circle.forEach((round, index) => {
        if (currentCount === index) {
            round.classList.add('active');
        } 
        else {
            round.classList.remove('active');
        }
    });
    
    const active = container.querySelectorAll('.active');
    const progressWidth = (currentCount / (circle.length - 1)) * 100 + '%';
    progressBar.style.width = progressWidth;
    
    // toggles disabled btns
    if (currentCount === 0) {
        prevBtn.disabled = true;
    } 
    else if (currentCount === circle.length - 1) {
        nextBtn.disabled = true;
    } 
    else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

// EVENT LISTNERS
nextBtn.addEventListener('click', moveToNext);
prevBtn.addEventListener('click', moveToPrev);