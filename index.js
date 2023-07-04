const url ="https://api.npoint.io/e8d1576c65bfd8f7e62e/films/"
fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
    }); data.forEach(movie => {
      const li = document.createElement('li');
      li.classList.add('pointer', 'bold-italic-text');
      li.innerHTML = movie.title;
      
      const filmCard = document.createElementbyClass;
      filmCard.classList.add('film-card');
      filmCard.innerHTML = `
        <img src="${movie.poster}" />
        <p class="bold-text">${movie.description}</p>
        <p><span class="highlight bold-text">Runtime: ${movie.runtime}</span></p>
        <p><span class="highlight bold-text">Showtime: ${movie.showtime}</span></p>
      `;
      document.getElementById('minions').style.display= "none"
      // initate p tag element to show number of tickets
      const tickets = document.createElement("p");
      tickets.classList.add()
      tickets.innerHTML = `Available tickets: ${(movie.capacity) - (movie.tickets_sold)}`;
      // append the p tag 
      filmCard.appendChild(tickets);
   
      const btn = document.createElement("button");
      btn.textContent = "Get ticket";
      // event listener to decrement ticket on dom
      btn.addEventListener('click', () => {
        //check if tickets are sold out then print alert
        if (parseInt(tickets.innerText.split(': ')[1]) === 0) {
          alert("sorry ticket deplited");
        } else {
          //reduce number of tickets 
          tickets.innerText = `Available tickets: ${parseInt(tickets.innerText.split(': ')[1]) - 1}`;
        }
      });
      filmCard.appendChild(btn);

      li.addEventListener('click', () => {
        div.innerText=""
        div.appendChild(filmCard);
         if (!filmCard.classList.contains('active')) {
          filmCard.classList.add('active');  
          div.appendChild(filmCard);

        }
        
      });
      ul.appendChild(li);
    });
  
  fetchFilms();
  