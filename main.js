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
var img = document.querySelector('img');
var messageSection = document.querySelector('#message')

// Event Listeners:
submitButton.addEventListener('click', storeUserSelection);

// Event Handlers:

function storeUserSelection() {
    if (affirmationButton.checked) {
        userSelection = 'affirmation';
    } else if (mantraButton.checked) {
        userSelection = 'mantra';
    }

    randomMessage(userSelection);
}

function getRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
}

function randomMessage(userSelection) {
    img.classList.add('hidden');

    if (userSelection === 'affirmation') {
        var randomIndex = getRandomIndex(affirmations);
        messageSection.innerHTML = `<p>${affirmations[randomIndex]}</p>`;
    } else  if (userSelection === 'mantra') {
        var randomIndex = getRandomIndex(mantras);
        messageSection.innerHTML = `<p>${mantras[randomIndex]}</p>`;
    }
}

// event handler
    // hide meditation icon DONE
    // store selection DONE
    // conditional
        // if userSelection === affirmation
        // display random index from affirmations array
        // add it to innerHTML of #message

        // if userSelection === mantra
        // display random index from mantra array
         // add it to innerHTML of #message