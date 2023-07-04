

window.onload = function() {
    const movieBar = document.getElementById('movie-bar');
    const ticketsForm = document.getElementById('movies-form');
    const ticketsInput = document.getElementById('movies');
    const votee = document.getElementById('vote-count')
    const url = "http://localhost:3000/films"
    
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => {
        data.forEach(character => {
          const characterNameElement = document.createElement('h3');
          movieNameElement.textContent = movie.name;
          movieNameElement.addEventListener('click', () => {
            moviePoster.src = movie.poster;
            moviePoster.alt = movie.name;
            movieName.textContent = movie.name;
          });
          movieBar.appendChild(characterNameElement);
  
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    moviesForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the form from automatic submission
  
      const ticketsForm = document.createElement('p');
      const ticketsFormValue = parseInt(votesInput.value);
      const ticketsFormCount = ticketsFormValue || 0;
  
      if (characterVotesValue) {
        votee.textContent = characterVotesValue;
      }
  
      votesInput.value = '';
    });
  };