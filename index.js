function fetchFilms() {
  const url = "https://api.npoint.io/12b5b9a3f8163e2267fb/films/";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const ul = document.getElementById('film-list');

      data.forEach(movie => {
        const li = document.createElement('li');
        li.classList.add('pointer', 'bold-italic-text');
        li.innerHTML = movie.title;

        li.addEventListener('click', () => {
          const div = document.getElementById('div');
          div.innerHTML = ""; // Clear previous movie details

          const filmCard = document.createElement('div');
          filmCard.classList.add('film-card');
          filmCard.innerHTML = `
            <img src="${movie.poster}" />
            <p class="bold-text">${movie.description}</p>
            <p><span class="highlight bold-text">Runtime: ${movie.runtime}</span></p>
            <p><span class="highlight bold-text">Showtime: ${movie.showtime}</span></p>
          `;
          // document.getElementById('minions').style.display = "none";

          const tickets = document.createElement("p");
          tickets.classList.add("tickets");
          tickets.innerHTML = `Available tickets: ${movie.capacity - movie.tickets_sold}`;
          filmCard.appendChild(tickets);

          const btn = document.createElement("button");
          btn.textContent = "Get ticket";
          btn.addEventListener('click', () => {
            if (parseInt(tickets.innerText.split(': ')[1]) === 0) {
              alert("Sorry, tickets are depleted.");
            } else {
              tickets.innerText = `Available tickets: ${parseInt(tickets.innerText.split(': ')[1]) - 1}`;
            }
          });
          filmCard.appendChild(btn);

          div.appendChild(filmCard);
        });

        ul.appendChild(li);
      });
    });
}

document.addEventListener('DOMContentLoaded', fetchFilms)