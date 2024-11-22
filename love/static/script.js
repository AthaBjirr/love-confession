document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgMusic');
    const revealBtn = document.getElementById('revealBtn');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const confession = document.querySelector('.confession');
    const message = document.querySelector('.message');
    const typingText = document.querySelector('.typing-text');

    // Click Me Button with Music
    revealBtn.addEventListener('click', () => {
        audio.play();  // Start playing music
        message.style.display = 'none';
        confession.style.display = 'block';
        typeMessage("I've liked you for a while now... Would you like to go out with me? 💕");
    });

    // Yes Button
    yesBtn.addEventListener('click', () => {
        typingText.innerHTML = "You've made me the happiest person alive! 🎉💖";
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    });

    // No Button - Makes it run away
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Typing Effect
    function typeMessage(text) {
        let index = 0;
        typingText.innerHTML = '';
        const typing = setInterval(() => {
            if (index < text.length) {
                typingText.innerHTML += text.charAt(index);
                index++;
            } else {
                clearInterval(typing);
            }
        }, 50);
    }
});