import yournameData from './data.js'
import YourName from './YourName.js'

let profileIndex = 0
let currentProfile = new YourName(yournameData[profileIndex])
let likedProfiles = [];


const container = document.getElementById('profile-container')
const dingSound = new Audio('/sounds/ding.mp3')
const buzzSound = new Audio('/sounds/buzz.mp3')

function renderProfile() {
    container.innerHTML = currentProfile.getYourNameHtml()
}

// Handle swipes
function handleSwipe(isLiked) {
    currentProfile.setMatchStatus(isLiked)

    const badge = document.getElementById('badge-img')
    badge.src = isLiked ? 'images/badge-like.png' : 'images/badge-nope.png'
    badge.classList.remove('hidden')

    // When liking a profile, store both name and emoji + play sound
    if (isLiked) {
        dingSound.play()
        likedProfiles.push({
            name: currentProfile.name,
            emoji: currentProfile.emoji
        });

    const likeBtn = document.getElementById('like-btn')
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('img')
        heart.src = 'images/icon-heart.png'
        heart.classList.add('floating-heart')

        // Random offset so the hearts don't all stack
        heart.style.left = `${10 + i * 20}px`

        likeBtn.appendChild(heart)

        // Remove after animation
        setTimeout(() => heart.remove(), 1000)
    }
    } else {
        buzzSound.play()
    }

    // Add a slight delay to show the badge before moving to the next profile
    setTimeout(() => {
    const card = document.querySelector('.card')
    card.classList.add(isLiked ? 'swipe-right' : 'swipe-left')

    // ✅ Move to next profile after the animation
    setTimeout(() => {
        profileIndex++
        if (profileIndex < yournameData.length) {
            currentProfile = new YourName(yournameData[profileIndex])
            renderProfile()
        } else {
            const iphoneFrame = document.querySelector('.iphone-frame')
            
            const likedListHtml = likedProfiles.length > 0
                    ? `<ul class="emoji-list">${likedProfiles.map(profile => `<li>${profile.emoji} ${profile.name}</li>`).join('')}</ul>`
                    : '';

                    const noMatchesMessage = likedProfiles.length === 0 
                    ? `<h4>No matches found — maybe take another look?</h4>` 
                    : '';

            iphoneFrame.innerHTML = `
                <header class="app-header">
                    <div class="header-left">
                        <img src="images/icon-profile.png" class="icon" alt="Profile">
                    </div>
                    <div class="header-center">
                        <img src="images/logo.png" class="logo" alt="Logo">
                    </div>
                    <div class="header-right">
                        <img src="images/icon-chat.png" class="icon" alt="Chat">
                    </div>
                </header>
        
                <div class="final-card">
                <div class="my-emoji">
                <img src="images/yourname-emoji.png" alt="YourName emoji">
            </div>
                    <h2>Here are the profiles you liked:</h2>
                    ${likedListHtml}
                    <h3>Connect with your Candidate Match on LinkedIn</h3>
    
                    <a href="https://www.linkedin.com/" target="_blank" class="connect-btn">Connect on LinkedIn</a> 
                    ${noMatchesMessage}
                    <button class="review-btn" id="review-btn">🔁 Review Candidate Profiles Again</button>
                </div>
            `;
        }
    }, 1000) // this delay keeps the current DOM on screen a little longer
 }, 800) // Delay to show the badge before the animation starts
}


// Button event listeners
document.getElementById('like-btn').addEventListener('click', () => handleSwipe(true))
document.getElementById('reject-btn').addEventListener('click', () => handleSwipe(false))

// Review candidate profiles again
document.addEventListener('click', (e) => {
    if (e.target.id === 'review-btn') {
        window.location.reload() // Reload the page to reset the profile index and start over
    }
})

// Initial render
renderProfile()
