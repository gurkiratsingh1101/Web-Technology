const destinations = [
  {
    id: 1,
    name: "Manali",
    location: "Himachal Pradesh, India",
    category: "mountains",
    rating: 4.8,
    description: "A beautiful mountain destination known for valleys, snow and adventure.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Goa",
    location: "Goa, India",
    category: "beaches",
    rating: 4.7,
    description: "Relax on beautiful beaches and enjoy the lively coastal atmosphere.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Amritsar",
    location: "Punjab, India",
    category: "culture",
    rating: 4.9,
    description: "Explore the Golden Temple, local food and the rich culture of Punjab.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Jaipur",
    location: "Rajasthan, India",
    category: "culture",
    rating: 4.6,
    description: "Discover royal palaces, historic forts and colourful Rajasthani culture.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    name: "Kerala",
    location: "Kerala, India",
    category: "nature",
    rating: 4.8,
    description: "Experience peaceful backwaters, greenery and beautiful natural landscapes.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Ladakh",
    location: "Ladakh, India",
    category: "adventure",
    rating: 4.9,
    description: "Explore high mountain passes, unique landscapes and adventurous roads.",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=900&q=80"
  }
];

let favorites = JSON.parse(localStorage.getItem("travelFavorites")) || [];
let showFavoritesOnly = false;

const destinationGrid = document.getElementById("destinationGrid");
const destinationSearch = document.getElementById("destinationSearch");
const categoryFilter = document.getElementById("categoryFilter");
const favoritesButton = document.getElementById("favoritesButton");

function renderDestinations() {
  const searchTerm = destinationSearch.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchTerm) ||
      destination.location.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      destination.category === selectedCategory;

    const matchesFavorite =
      !showFavoritesOnly ||
      favorites.includes(destination.id);

    return matchesSearch && matchesCategory && matchesFavorite;
  });

  if (filteredDestinations.length === 0) {
    destinationGrid.innerHTML = `
      <div class="col-12">
        <div class="empty-state">
          <i class="bi bi-search"></i>
          <h4>No destinations found</h4>
          <p>Try changing your search or filter.</p>
        </div>
      </div>
    `;
    return;
  }

  destinationGrid.innerHTML = filteredDestinations
    .map((destination) => {
      const isFavorite = favorites.includes(destination.id);

      return `
        <div class="col-md-6 col-lg-4">
          <div class="destination-card">
            <div class="destination-image">
              <img src="${destination.image}" alt="${destination.name}">
              <button
                class="favorite-button ${isFavorite ? "active" : ""}"
                onclick="toggleFavorite(${destination.id})"
                aria-label="Add ${destination.name} to favorites"
              >
                <i class="bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}"></i>
              </button>
            </div>

            <div class="destination-content">
              <div class="destination-top">
                <span class="destination-category">
                  ${destination.category}
                </span>
                <span class="destination-rating">
                  <i class="bi bi-star-fill"></i>
                  ${destination.rating}
                </span>
              </div>

              <h3>${destination.name}</h3>

              <p class="destination-location">
                <i class="bi bi-geo-alt"></i>
                ${destination.location}
              </p>

              <p>${destination.description}</p>

              <button
                class="btn btn-outline-primary w-100"
                onclick="selectDestination('${destination.name}')"
              >
                Plan Trip
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function toggleFavorite(destinationId) {
  if (favorites.includes(destinationId)) {
    favorites = favorites.filter((id) => id !== destinationId);
  } else {
    favorites.push(destinationId);
  }

  localStorage.setItem("travelFavorites", JSON.stringify(favorites));

  renderDestinations();
  updateFavoritesButton();
}

function updateFavoritesButton() {
  if (showFavoritesOnly) {
    favoritesButton.innerHTML = `
      <i class="bi bi-heart-fill"></i>
      Show All
    `;
  } else {
    favoritesButton.innerHTML = `
      <i class="bi bi-heart"></i>
      Favorites
    `;
  }
}

function selectDestination(destinationName) {
  const plannerDestination = document.getElementById("plannerDestination");

  if (plannerDestination) {
    plannerDestination.value = destinationName;
  }

  document.getElementById("planner").scrollIntoView({
    behavior: "smooth"
  });
}

destinationSearch.addEventListener("input", renderDestinations);

categoryFilter.addEventListener("change", renderDestinations);

favoritesButton.addEventListener("click", () => {
  showFavoritesOnly = !showFavoritesOnly;

  updateFavoritesButton();
  renderDestinations();
});

renderDestinations();
updateFavoritesButton();
