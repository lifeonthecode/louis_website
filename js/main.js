
// video play and paused 
const play_btn = document.getElementById('play');
const pause_btn = document.getElementById('pause');
const video = document.getElementById('video');



play_btn.addEventListener('click', () => {
    play_btn.classList.add('active');
    pause_btn.classList.add('active');
    
    // video paused 
    video.pause();
})
pause_btn.addEventListener('click', () => {
    play_btn.classList.remove('active');
    pause_btn.classList.remove('active');

    // video paused 
    video.play();
})


// sound of and sound on 
const btn_muted = document.querySelector('.muted');
const btn_sound = document.querySelector('.sound');


btn_muted.addEventListener('click', () => {
    btn_muted.classList.add('muted_of');
    btn_sound.classList.add('sound_on');

    // video muted 
    video.muted = false;

});

btn_sound.addEventListener('click', () => {
    btn_muted.classList.remove('muted_of');
    btn_sound.classList.remove('sound_on');

    // video muted 
    video.muted = true;
});





// follow click to follow section show 
const follow_btn = document.getElementById('follow');
const footer_middle = document.getElementById('footer_middle');
const close_btn = document.getElementById('footer_middle_close');
follow_btn.addEventListener('click', () => {
    footer_middle.classList.add('active');
})
close_btn.addEventListener('click', () => {
    footer_middle.classList.remove('active');
})


