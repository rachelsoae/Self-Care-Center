    // DATA MODEL:

var affirmations = [
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

var mantras = [
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
]

var userSelection;

// Variables:
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var submitButton = document.querySelector('button');
var errorBox = document.querySelector('.error-box');
var img = document.querySelector('img');
var messageSection = document.querySelector('#message-box');
var message = document.querySelector('.message');
var clearButton = document.querySelector('.clear-button');
var radioButtonBox = document.querySelector('.radio-buttons');

// Event Listeners:
submitButton.addEventListener('click', function() {
    storeUserSelection();
    fadeButtons();
});
clearButton.addEventListener('click', clearMessage);

// Event Handlers:

function show(element) {
    element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}

function storeUserSelection() {
    if (affirmationButton.checked) {
        userSelection = 'affirmation';
        generateRandomMessage(userSelection);
    } else if (mantraButton.checked) {
        userSelection = 'mantra';
        generateRandomMessage(userSelection);
    } else {
        errorBox.classList.remove('invisible');
    }
}

function getRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * (array.length - 1));
    return randomIndex;
}

function generateRandomMessage(userSelection) {
    errorBox.classList.add('invisible');

    if (userSelection === 'affirmation') {
        var randomIndex = getRandomIndex(affirmations);
        var randomMessage = affirmations[randomIndex];
    } else  if (userSelection === 'mantra') {
        var randomIndex = getRandomIndex(mantras);
        var randomMessage = mantras[randomIndex];
    }

    setTimeout(displayMessage, 4000, randomMessage);
}

function displayMessage(randomMessage) {
    hide(img);
    show(message);
    show(clearButton);
   
    message.innerText = randomMessage;
}

function clearMessage() {
    hide(message);
    hide(clearButton);
    show(img);
}

function fadeButtons() {
    if (affirmationButton.checked || mantraButton.checked) {
        startAnimation(radioButtonBox, 'fade');
        startAnimation(submitButton, 'fade');
    }
}

function startAnimation(element, animation) {
    element.classList.remove('pause');
    element.classList.add(animation);
}