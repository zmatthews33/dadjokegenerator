const jokeButton = document.querySelector
('.getJoke');
const jokeHolder = document.querySelector
('joke p');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];
async function fetchJoke() {
  // turn loader on
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  // turn the loader off
  loader.classList.add('hidden');
  return data;
}

