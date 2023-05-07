// DATA MODEL:

const affirmations = [
    'I forgive myself and set myself free.',
    'I believe I can be all that I want to be.',
    'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.',
    'My possibilities are endless.',
    'I am worthy of my dreams.',
    'I am enough.',
    'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.',
    'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.'
];

const mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don\’t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
    'I am free from sadness.',
    'I am enough.',
    'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.',
    'Yesterday is not today.',
    'The only constant is change.',
    'Onward and upward.',
    'I am the sky, the rest is weather.'
];

let userSelection;

// Variables:

const affirmationButton = document.querySelector('#affirmation');
const mantraButton = document.querySelector('#mantra');
const submitButton = document.querySelector('button');
const errorBox = document.querySelector('.error-box');
const img = document.querySelector('img');
const messageSection = document.querySelector('#message-box');
const message = document.querySelector('.message');
const clearButton = document.querySelector('.clear-button');
const radioButtonBox = document.querySelector('.radio-buttons');

// Event Listeners:

submitButton.addEventListener('click', function() {
    if (affirmationButton.checked || mantraButton.checked) {
        storeUserSelection();  
        fade(radioButtonBox);
        fade(submitButton);
    } else {
        errorBox.classList.remove('invisible');
    };
});

submitButton.addEventListener('animationend', function() {
    resetAnimation(radioButtonBox);
    resetAnimation(submitButton);
});

clearButton.addEventListener('click', clearMessage);

// Functions:

function show(element) {
    element.classList.remove('hidden');
};

function hide(element) {
    element.classList.add('hidden');
};

function storeUserSelection() {
    if (affirmationButton.checked) {
        userSelection = 'affirmation';
        generateRandomMessage(userSelection);
    } else if (mantraButton.checked) {
        userSelection = 'mantra';
        generateRandomMessage(userSelection);
    } 
};

function getRandomIndex(array) {
    const randomIndex = Math.floor(Math.random() * (array.length - 1));
    return randomIndex;
};

function generateRandomMessage(userSelection) {
    errorBox.classList.add('invisible');

    let randomIndex = getRandomIndex(userSelection);
    let randomMessage;

    if (userSelection === 'affirmation') {
        randomMessage = affirmations[randomIndex];
    } else if (userSelection === 'mantra') {
        randomMessage = mantras[randomIndex];
    };

    setTimeout(displayMessage, 2000, randomMessage);
};

function displayMessage(randomMessage) {
    fadeIn(message);
    fadeIn(clearButton);
    hide(img);
    show(message);
    show(clearButton);
    message.innerText = randomMessage;
};

function clearMessage() {
    hide(message);
    hide(clearButton);
    show(img);
};

function startAnimation(element, animation) {
    element.classList.remove('reset');
    element.classList.remove('pause');
    element.classList.add(animation); 
};

function resetAnimation(element) {
    element.classList.add('reset');
};

function fadeIn(element) {
    startAnimation(element, 'fadein');
};

function fadeOut(element) {
    startAnimation(element, 'fadeout');
};

function fade(element) {
    startAnimation(element, 'fade');
};