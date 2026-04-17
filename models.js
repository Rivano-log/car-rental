const API_BASE = "https://car-rental-api.up.railway.app";

async function FetchModels() {
  const response = await fetch(`${API_BASE}/car`);
  const data = await response.json();
  return data.data;
}

async function renderModels() {
  const models = await FetchModels();
  const modelsList = document.querySelector("#models-list");

  if (!modelsList) {
    console.error("Element #models-list niet gevonden in HTML");
    return;
  }

 modelsList.innerHTML = models.map(model => `
  <div class="model">
    <img src="${API_BASE}/${model.image}" alt="" class="model__img" />
    
    <div class="model__details model__details-1">
      <h3 class="model__details__name">${model.make} ${model.model}</h3>
      <h4 class="model__details__price">
        $${model.per_day_price}
        <span class="model__details__price__span">per day</span>
      </h4>
    </div>

    <div class="model__details model__details-2">
      <div class="model__detail">
        <i class="fa-solid fa-star"></i>
        <span>${model.rating} / 5</span>
      </div>
      <div class="model__detail model__detail-right">
        <i class="fa-solid fa-gas-pump"></i>
        <span>${model.fuel}</span>
      </div>
      <div class="model__detail">
        <i class="fa-solid fa-gears"></i>
        <span>${model.transmission}</span>
      </div>
      <div class="model__detail model__detail-right">
        <i class="fa-solid fa-user"></i>
        <span>${model.seating}</span>
      </div>
    </div>

    <button class="model__btn">
      <span>Book Ride</span>
      <i class="fa-regular fa-circle-check"></i>
    </button>
  </div>
`).join("");
}

renderModels();