// script.js

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/players');
        if (!response.ok) {
            throw new Error('Failed to fetch players');
        }
        const players = await response.json();
        const playerProfiles = document.getElementById('player-profiles');

        players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card');
            playerCard.innerHTML = `
                <h3>${player.name}</h3>
                <p>Racket: <span>${player.equipment.racket}</span></p>
                <p>Shoes: <span>${player.equipment.shoes}</span></p>
                <p>Attire: <span>${player.equipment.attire}</span></p>
                <!-- Add more equipment details here -->
            `;
            playerProfiles.appendChild(playerCard);
        });
    } catch (error) {
        console.error('Error fetching players:', error);
    }
});