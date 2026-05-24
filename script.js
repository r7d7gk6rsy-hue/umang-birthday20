function navigateTo(currentId, targetId) {
    document.getElementById(currentId).classList.remove('active');
    document.getElementById(targetId).classList.add('active');

    const video = document.querySelector('#screen-praise video');
    if (targetId === 'screen-praise') {
        video.play();
    } else {
        video.pause();
        video.currentTime = 0;
    }
}

document.getElementById('btn-login-continue').addEventListener('click', () => {
    if (document.getElementById('password-input').value === '200609' && document.getElementById('captcha-check').checked) {
        navigateTo('screen-password', 'screen-question');
    } else {
        alert('Password must be 200609 and box checked!');
    }
});

document.getElementById('btn-yes').addEventListener('click', () => navigateTo('screen-question', 'screen-praise'));
document.getElementById('btn-no').addEventListener('click', () => navigateTo('screen-question', 'screen-angry'));
document.getElementById('btn-back').addEventListener('click', () => navigateTo('screen-angry', 'screen-question'));
document.getElementById('btn-praise-click').addEventListener('click', () => navigateTo('screen-praise', 'screen-birthday'));
