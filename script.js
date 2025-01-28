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
