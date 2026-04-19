async function FetchModels() {
  const response = await fetch("https://car-rental-api.up.railway.app/car");
  const data = await response.json();
  return data.data;
}

async function RenderModels() {
  const modelsList = document.querySelector("#models-list");
  const spinner = document.querySelector("#models-spinner");

  if (spinner) spinner.style.display = "flex";

  try {
    const modelsSort = document.querySelector(".models__header__sort").value;

    const models = await FetchModels();

    if (modelsSort === "RATING") {
      models.sort((a, b) => b.rating - a.rating);
    } else if (modelsSort === "LOW_TO_HIGH") {
      models.sort((a, b) => a.per_day_price - b.per_day_price);
    } else if (modelsSort === "HIGH_TO_LOW") {
      models.sort((a, b) => b.per_day_price - a.per_day_price);
    }

    const modelsHTML = models.map((model) => {
      return `
        <div class="model">
          <img src="https://car-rental-api.up.railway.app/${model.image}" alt="${model.make} ${model.model}" class="model__img" />
          <div class="model__details model__details-1">
            <h3 class="model__details__name">${model.make} ${model.model}</h3>
            <h4 class="model__details__price">
              $${Math.floor(model.per_day_price)}
              <span class="model__details__price__span">per day</span>
            </h4>
          </div>
          <div class="model__details model__details-2">
            <div class="model__detail model__detail__rating">
              <i class="model__detail__icon fa-solid fa-star"></i>
              <span class="model__detail__text">${model.rating} / 5</span>
            </div>
            <div class="model__detail model__detail-right">
              <i class="model__detail__icon fa-solid fa-gas-pump"></i>
              <span class="model__detail__text">${model.fuel}</span>
            </div>
            <div class="model__detail">
              <i class="model__detail__icon fa-solid fa-car"></i>
              <span class="model__detail__text">${model.make}</span>
            </div>
            <div class="model__detail model__detail-right">
              <i class="model__detail__icon fa-solid fa-gears"></i>
              <span class="model__detail__text">${model.transmission}</span>
            </div>
          </div>
          <button class="model__btn">
            <span class="model__btn__span">Book Ride</span>
            <i class="fa-regular fa-circle-check model__btn__icon"></i>
          </button>
        </div>
      `;
    }).join("");

    modelsList.innerHTML = modelsHTML;

  } catch (error) {
    console.error(error);
    modelsList.innerHTML = `<p>Failed to load models.</p>`;
  } finally {
    if (spinner) spinner.style.display = "none";
  }
}

RenderModels();