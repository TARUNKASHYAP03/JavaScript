document.addEventListener('DOMContentLoaded', () => {
    // Game elements
    const guessForm = document.getElementById('guess-form');
    const guessInput = document.getElementById('guess-input');
    const previousGuesses = document.getElementById('previous-guesses');
    const guessesRemaining = document.getElementById('guesses-remaining');
    const hintMessage = document.getElementById('hint-message');
    const resetButton = document.getElementById('reset-btn');
    
    // Game state
    let targetNumber = generateRandomNumber();
    let guesses = [];
    let remainingGuesses = 10;
    let gameOver = false;
    
    // Initialize game
    updateGameDisplay();
    guessInput.focus();
    
    // Event listeners
    guessForm.addEventListener('submit', handleGuess);
    resetButton.addEventListener('click', resetGame);
    
    // Game functions
    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
    
    function handleGuess(e) {
        e.preventDefault();
        
        if (gameOver) return;
        
        const guess = parseInt(guessInput.value);
        
        if (validateGuess(guess)) {
            processGuess(guess);
        }
    }
    
    function validateGuess(guess) {
        if (isNaN(guess)) {
            showMessage('Please enter a valid number!', 'error');
            return false;
        }
        
        if (guess < 1 || guess > 100) {
            showMessage('Please enter a number between 1 and 100!', 'error');
            return false;
        }
        
        if (guesses.includes(guess)) {
            showMessage(`You've already guessed ${guess}! Try a different number.`, 'warning');
            return false;
        }
        
        return true;
    }
    
    function processGuess(guess) {
        guesses.push(guess);
        remainingGuesses--;
        
        if (guess === targetNumber) {
            endGame(true);
        } else if (remainingGuesses === 0) {
            endGame(false);
        } else {
            const hint = guess < targetNumber ? 'Too low!' : 'Too high!';
            showMessage(hint, 'warning');
            updateGameDisplay();
        }
        
        guessInput.value = '';
        guessInput.focus();
    }
    
    function updateGameDisplay() {
        previousGuesses.textContent = guesses.join(', ');
        guessesRemaining.textContent = remainingGuesses;
    }
    
    function showMessage(message, type) {
        hintMessage.textContent = message;
        hintMessage.className = 'hint-message';
        
        switch (type) {
            case 'success':
                hintMessage.classList.add('success-message');
                break;
            case 'error':
                hintMessage.classList.add('error-message');
                break;
            case 'warning':
                hintMessage.classList.add('warning-message');
                break;
        }
    }
    
    function endGame(isWin) {
        gameOver = true;
        
        if (isWin) {
            const attempts = guesses.length;
            const message = `🎉 Congratulations! You guessed the number in ${attempts} ${attempts === 1 ? 'try' : 'tries'}!`;
            showMessage(message, 'success');
        } else {
            const message = `💀 Game over! The number was ${targetNumber}. Better luck next time!`;
            showMessage(message, 'error');
        }
        
        guessInput.disabled = true;
        document.querySelector('.submit-btn').disabled = true;
    }
    
    function resetGame() {
        targetNumber = generateRandomNumber();
        guesses = [];
        remainingGuesses = 10;
        gameOver = false;
        
        guessInput.value = '';
        guessInput.disabled = false;
        document.querySelector('.submit-btn').disabled = false;
        
        hintMessage.textContent = '';
        hintMessage.className = 'hint-message';
        
        updateGameDisplay();
        guessInput.focus();
    }
});