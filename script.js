// Initialize vote counts
let votes = {
    afan: 0,
    vishwas: 0
};

// Check if there are saved votes in localStorage
const savedVotes = localStorage.getItem('ufcVotes');
if (savedVotes) {
    votes = JSON.parse(savedVotes);
    updateVoteDisplay();
}

// Function to handle voting
function vote(fighter) {
    // Check if user has already voted
    if (localStorage.getItem('hasVoted')) {
        alert('You have already voted!');
        return;
    }

    // Increment vote count
    votes[fighter]++;

    // Save vote to localStorage
    localStorage.setItem('ufcVotes', JSON.stringify(votes));
    localStorage.setItem('hasVoted', 'true');

    // Update the display
    updateVoteDisplay();

    // Show thank you message
    alert('Thank you for voting!');
}

// Function to update vote display
function updateVoteDisplay() {
    document.getElementById('afan-votes').textContent = `${votes.afan} votes`;
    document.getElementById('vishwas-votes').textContent = `${votes.vishwas} votes`;
}

// Ensure initial display on page load
updateVoteDisplay();
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.setProperty('--x', (Math.random() * 200 - 100) + 'px');
    sparkle.style.setProperty('--y', (Math.random() * 200 - 100) + 'px');
    document.querySelector('.fireworks-container').appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 2000);
}

setInterval(createSparkle, 100);
