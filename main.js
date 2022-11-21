function createGame(player1, hour, player2) {
  return `
<li>
  <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
  <strong>${hour}</strong>
  <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
</li>
`
}

let delay = -0.2
let date = 19
function createCard(day, game) {
  if (date >= 30) date = 0
  date += 1
  delay += 0.2
  return `
  <div class="card" style = "animation-delay: ${delay}s">
          <h2>${date}/11 <span>${day}</span></h2>
          <ul>
            ${game}
          </ul>
        </div>
  `
}

document.querySelector(".cards").innerHTML =
  createCard("Domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "Segunda",
    createGame("englad", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("usa", "16:00", "wales")
  ) +
  createCard(
    "terça",
    createGame("argentina", "07:00", "saudi") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "quarta",
    createGame("marocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "sexta",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("englad", "16:00", "usa")
  ) +
  createCard(
    "sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "saudi") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "domingo",
    createGame("japan", "07:00", "costa") +
      createGame("belgium", "10:00", "marocco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "terça ",
    createGame("ecuador", "07:00", "senegal") +
      createGame("netherlands", "10:00", "qatar") +
      createGame("iran", "13:00", "usa") +
      createGame("wales", "16:00", "englad")
  ) +
  createCard(
    "quarta",
    createGame("tunisia", "07:00", "france") +
      createGame("australia", "10:00", "denmark") +
      createGame("poland", "13:00", "argentina") +
      createGame("saudi", "16:00", "mexico")
  ) +
  createCard(
    "quinta",
    createGame("croatia", "07:00", "belgium") +
      createGame("canada", "10:00", "marocco") +
      createGame("japan", "13:00", "spain") +
      createGame("costa", "16:00", "germany")
  ) +
  createCard(
    "sexta",
    createGame("korea", "07:00", "portugal") +
      createGame("ghana", "10:00", "uruguay") +
      createGame("serbia", "13:00", "switzerland") +
      createGame("cameroo", "16:00", "brazil")
  )
