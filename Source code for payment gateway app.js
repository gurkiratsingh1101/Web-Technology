
const destinations = [
  { id: 1, name: "Manali", location: "Himachal Pradesh, India", category: "mountains", rating: 4.8, description: "Snow-capped mountains, pine forests and adventure experiences.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/MANALI_MOUNTAINS.jpg" },
  { id: 2, name: "Goa", location: "Goa, India", category: "beaches", rating: 4.7, description: "Beaches, sunsets and a relaxed coastal atmosphere.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" },
  { id: 3, name: "Amritsar", location: "Punjab, India", category: "culture", rating: 4.9, description: "The Golden Temple, heritage streets and famous Punjabi food.", image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Golden_Temple_%28Amritsar%29.jpg" },
  { id: 4, name: "Jaipur", location: "Rajasthan, India", category: "culture", rating: 4.6, description: "Royal palaces, forts and colourful local culture.", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80" },
  { id: 5, name: "Kerala", location: "Kerala, India", category: "nature", rating: 4.8, description: "Backwaters, greenery and peaceful landscapes.", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80" },
  { id: 6, name: "Ladakh", location: "Ladakh, India", category: "adventure", rating: 4.9, description: "High mountain passes, dramatic landscapes and road adventures.", image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=900&q=80" },
  { id: 7, name: "Chandigarh", location: "Chandigarh, India", category: "city", rating: 4.7, description: "Sukhna Lake, Rock Garden, green spaces and modern architecture.", image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Sukhna_Lake%2C_Chandigarh.jpg" },
  { id: 8, name: "Shimla", location: "Himachal Pradesh, India", category: "mountains", rating: 4.8, description: "Hill views, Mall Road, colonial charm and cool mountain air.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg/1280px-Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg" },
  { id: 9, name: "Delhi", location: "Delhi, India", category: "culture", rating: 4.6, description: "Historic monuments, markets, food streets and city experiences.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Delhi%2C_India%2C_India_Gate.jpg" }
];

const hotels = [
  { id: 1, destination: "Manali", name: "Snow Valley Retreat", rating: 4.6, price: 3500, features: ["Breakfast", "Wi-Fi", "Mountain View"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80" },
  { id: 2, destination: "Manali", name: "The Himalayan Stay", rating: 4.8, price: 5200, features: ["Breakfast", "Parking", "Spa"], image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80" },
  { id: 3, destination: "Goa", name: "Palm Coast Resort", rating: 4.7, price: 4200, features: ["Pool", "Breakfast", "Beach Access"], image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80" },
  { id: 4, destination: "Goa", name: "Sea Breeze Rooms", rating: 4.5, price: 2900, features: ["Wi-Fi", "Pool", "Breakfast"], image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80" },
  { id: 5, destination: "Amritsar", name: "Heritage Grand", rating: 4.6, price: 2800, features: ["Breakfast", "Wi-Fi", "Parking"], image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80" },
  { id: 6, destination: "Amritsar", name: "Golden City Stay", rating: 4.5, price: 2200, features: ["Wi-Fi", "Breakfast", "City Centre"], image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80" },
  { id: 7, destination: "Jaipur", name: "Pink City Palace", rating: 4.7, price: 3900, features: ["Breakfast", "Pool", "Wi-Fi"], image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80" },
  { id: 16, destination: "Jaipur", name: "Amber Courtyard Inn", rating: 4.5, price: 3100, features: ["Wi-Fi", "Breakfast", "Heritage Area"], image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80" },
  { id: 8, destination: "Kerala", name: "Backwater Haven", rating: 4.8, price: 4500, features: ["Breakfast", "Lake View", "Wi-Fi"], image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80" },
  { id: 17, destination: "Kerala", name: "Coconut Grove Retreat", rating: 4.6, price: 3700, features: ["Garden", "Breakfast", "Lake View"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80" },
  { id: 9, destination: "Ladakh", name: "Mountain Base Camp", rating: 4.5, price: 3200, features: ["Breakfast", "Parking", "Mountain View"], image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80" },
  { id: 18, destination: "Ladakh", name: "Indus Valley Lodge", rating: 4.6, price: 3900, features: ["Heating", "Breakfast", "Mountain View"], image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80" },
  { id: 10, destination: "Chandigarh", name: "The City View", rating: 4.6, price: 3200, features: ["Breakfast", "Wi-Fi", "Parking"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80" },
  { id: 11, destination: "Chandigarh", name: "Lakefront Comfort", rating: 4.7, price: 4100, features: ["Breakfast", "Pool", "City View"], image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80" },
  { id: 12, destination: "Shimla", name: "Hillside Residency", rating: 4.7, price: 3600, features: ["Breakfast", "Mountain View", "Wi-Fi"], image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80" },
  { id: 13, destination: "Shimla", name: "Pine Crest Hotel", rating: 4.6, price: 4300, features: ["Breakfast", "Parking", "Heating"], image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80" },
  { id: 14, destination: "Delhi", name: "Central City Hotel", rating: 4.5, price: 3400, features: ["Breakfast", "Wi-Fi", "Metro Nearby"], image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80" },
  { id: 15, destination: "Delhi", name: "Capital Residency", rating: 4.7, price: 4600, features: ["Breakfast", "Pool", "Parking"], image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80" }
];

const defaults = {
  Manali: [8000, 17500, 7500, 4000],
  Goa: [7000, 15000, 7000, 5000],
  Amritsar: [3500, 9000, 4500, 2500],
  Jaipur: [5000, 11000, 5000, 3000],
  Kerala: [9000, 18000, 7500, 4500],
  Ladakh: [12000, 16000, 7000, 5000],
  Chandigarh: [3000, 8000, 4000, 2500],
  Shimla: [5000, 12000, 5500, 3000],
  Delhi: [4500, 11000, 5500, 3500]
};

let favorites = [];
try {
  favorites = JSON.parse(localStorage.getItem("travelFavorites")) || [];
} catch {
  favorites = [];
}

let onlyFav = false;
let step = 0;
let selectedHotel = null;

const $ = id => document.getElementById(id);
const money = n => new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
}).format(n);

function renderDestinations() {
  const q = $("destinationSearch").value.toLowerCase().trim();
  const c = $("categoryFilter").value;

  const list = destinations.filter(d =>
    (d.name.toLowerCase().includes(q) || d.location.toLowerCase().includes(q)) &&
    (c === "all" || d.category === c) &&
    (!onlyFav || favorites.includes(d.id))
  );

  $("destinationGrid").innerHTML = list.length
    ? list.map(d => `
      <div class="col-md-6 col-lg-4">
        <article class="destination-card">
          <div class="destination-image">
            <img src="${d.image}" alt="${d.name}" loading="lazy">
            <button class="favorite-button ${favorites.includes(d.id) ? "active" : ""}"
              onclick="toggleFavorite(${d.id})" aria-label="Toggle favorite">
              <i class="bi ${favorites.includes(d.id) ? "bi-heart-fill" : "bi-heart"}"></i>
            </button>
          </div>
          <div class="destination-content">
            <div class="destination-top">
              <span class="destination-category">${d.category}</span>
              <span class="destination-rating"><i class="bi bi-star-fill"></i> ${d.rating}</span>
            </div>
            <h3>${d.name}</h3>
            <p class="destination-location"><i class="bi bi-geo-alt"></i> ${d.location}</p>
            <p>${d.description}</p>
            <button class="btn btn-outline-primary w-100"
              onclick="selectDestination('${d.name}')">Plan this trip</button>
          </div>
        </article>
      </div>`).join("")
    : `<div class="col-12"><div class="empty"><div>
        <i class="bi bi-search"></i><p>No destinations found.</p>
      </div></div></div>`;
}

function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter(x => x !== id)
    : [...favorites, id];

  localStorage.setItem("travelFavorites", JSON.stringify(favorites));
  renderDestinations();
  toast(favorites.includes(id) ? "Destination saved to favorites." : "Destination removed.");
}

function renderHotels(destination) {
  const list = hotels.filter(h => h.destination === destination);

  $("hotelGrid").innerHTML = list.map(h => `
    <div class="col-md-6 col-lg-4">
      <article class="hotel-card">
        <div class="hotel-image">
          <img src="${h.image}" alt="${h.name}" loading="lazy">
          <span class="hotel-badge"><i class="bi bi-star-fill"></i> ${h.rating}</span>
        </div>
        <div class="hotel-content">
          <h3>${h.name}</h3>
          <div class="hotel-meta">
            <span class="hotel-price">${money(h.price)} <small>/ night</small></span>
            <span>${destination}</span>
          </div>
          <div class="hotel-features">${h.features.map(x => `<span>${x}</span>`).join("")}</div>
          <button class="btn btn-primary w-100" onclick="selectHotel(${h.id})">
            View Rooms & Select
          </button>
        </div>
      </article>
    </div>`).join("");
}

function renderPlannerHotels() {
  const destination = $("plannerDestination").value;
  const list = hotels.filter(h => h.destination === destination);

  if (!selectedHotel || !list.some(h => h.id === selectedHotel)) {
    selectedHotel = list[0]?.id ?? null;
  }

  $("plannerHotels").innerHTML = list.map(h => `
    <label class="planner-hotel-option ${selectedHotel === h.id ? "selected" : ""}"
      onclick="chooseHotel(${h.id})">
      <img src="${h.image}" alt="${h.name}" loading="lazy">
      <div><strong>${h.name}</strong>
        <span>${money(h.price)} / night · ${h.rating} ★</span>
      </div>
    </label>`).join("");
}

function chooseHotel(id) {
  selectedHotel = id;
  renderPlannerHotels();
  updatePaymentSummary();
}

function selectHotel(id) {
  const hotel = hotels.find(h => h.id === id);
  if (!hotel) return;

  $("plannerDestination").value = hotel.destination;
  $("hotelDestination").value = hotel.destination;
  $("budgetDestination").value = hotel.destination;
  selectedHotel = id;

  renderHotels(hotel.destination);
  renderPlannerHotels();
  loadDefaults(hotel.destination);
  updatePaymentSummary();
  $("planner").scrollIntoView({ behavior: "smooth" });
  toast(`${hotel.name} selected for your plan.`);
}

function selectDestination(destination) {
  $("plannerDestination").value = destination;
  $("hotelDestination").value = destination;
  $("budgetDestination").value = destination;
  selectedHotel = null;

  renderHotels(destination);
  renderPlannerHotels();
  loadDefaults(destination);
  updatePaymentSummary();
  $("planner").scrollIntoView({ behavior: "smooth" });
}

function updateStep() {
  $("prevStep").style.visibility = step === 0 ? "hidden" : "visible";
  $("nextStep").classList.toggle("d-none", step === 2);
  $("generatePlan").classList.toggle("d-none", step !== 2);

  document.querySelectorAll(".pstep").forEach((element, index) =>
    element.classList.toggle("active-step", index === step)
  );

  document.querySelectorAll(".steps span").forEach((element, index) =>
    element.classList.toggle("active", index <= step)
  );
}

function days() {
  const start = new Date($("startDate").value);
  const end = new Date($("endDate").value);
  return Math.ceil((end - start) / 86400000);
}

function createPlan() {
  const destination = $("plannerDestination").value;
  const travelers = +$("travelers").value;
  const tripDays = days();
  const style = document.querySelector('input[name="style"]:checked').value;
  const hotel = hotels.find(h => h.id === selectedHotel);

  if (!$("startDate").value || !$("endDate").value || tripDays <= 0) {
    return toast("Please enter valid travel dates.");
  }

  if (tripDays > 30) {
    return toast("For this demo, choose a trip of 30 days or fewer.");
  }

  const activities = {
    balanced: [
      "Arrival and local exploration",
      "Popular sightseeing and local food",
      "Cultural attraction and market visit",
      "Scenic experience and free time",
      "Shopping and evening activity",
      "Departure and final breakfast"
    ],
    relaxed: [
      "Arrival and check-in",
      "Slow morning and local cafe",
      "Peaceful sightseeing",
      "Local food and free time",
      "Relaxed evening walk",
      "Departure and final breakfast"
    ],
    adventure: [
      "Arrival and local exploration",
      "Adventure activity",
      "Scenic outdoor experience",
      "Outdoor exploration",
      "Adventure and sightseeing",
      "Departure and final breakfast"
    ],
    luxury: [
      "Arrival and premium stay",
      "Guided sightseeing experience",
      "Fine dining and local culture",
      "Relaxing experience and shopping",
      "Premium evening activity",
      "Departure and final breakfast"
    ]
  }[style];

  const base = defaults[destination];
  const stay = hotel ? hotel.price * tripDays : base[1];
  const total = Math.round((base[0] + stay + base[2] + base[3]) * Math.max(1, travelers / 2));

  window.currentTrip = {
    destination,
    travelers,
    days: tripDays,
    style,
    hotel,
    amount: total,
    start: $("startDate").value,
    end: $("endDate").value
  };

  $("planSummary").className = "plan-summary";
  $("planSummary").innerHTML = `
    <h4>${destination} Travel Plan</h4>
    <p class="text-muted">${tripDays} days · ${travelers} traveler${travelers > 1 ? "s" : ""} · ${style}</p>
    <div class="summary-line"><span><i class="bi bi-building"></i> Stay</span>
      <strong>${hotel?.name || "Selected stay"}</strong></div>
    <div class="summary-line"><span><i class="bi bi-wallet2"></i> Estimated budget</span>
      <strong>${money(total)}</strong></div>
    <div class="itinerary-list">
      ${Array.from({ length: tripDays }, (_, i) => `
        <div class="itinerary-day"><strong>Day ${i + 1}</strong>
          <span>${activities[i % activities.length]}</span>
        </div>`).join("")}
    </div>
    <button type="button" class="btn btn-primary w-100 mt-3" id="proceedToPayment">
      Proceed to Payment <i class="bi bi-arrow-right"></i>
    </button>`;

  updatePaymentSummary();

  $("proceedToPayment").addEventListener("click", () => {
    $("payment").scrollIntoView({ behavior: "smooth" });
  });

  toast("Your travel plan has been created.");
}

function updatePaymentSummary() {
  const trip = window.currentTrip;
  const hotel = trip?.hotel || hotels.find(h => h.id === selectedHotel);
  const destination = trip?.destination || $("plannerDestination").value;
  const amount = trip?.amount || (hotel ? hotel.price * 5 : 0);

  $("paymentTotal").textContent = money(amount);
  $("paymentBookingSummary").innerHTML = `
    <div class="summary-line"><span>Destination</span><strong>${destination}</strong></div>
    <div class="summary-line"><span>Hotel</span><strong>${hotel ? hotel.name : "Choose a hotel"}</strong></div>
    <div class="summary-line"><span>Dates</span>
      <strong>${trip ? `${trip.start} – ${trip.end}` : "5-night estimate"}</strong></div>
    <div class="summary-line"><span>Travelers</span><strong>${trip ? trip.travelers : 2}</strong></div>
    <div class="summary-line"><span>Payment type</span><strong>Demo checkout</strong></div>`;

  const qrData = `SMART TRAVEL PLANNER DEMO ONLY | Destination: ${destination} | Hotel: ${hotel ? hotel.name : "Not selected"} | Amount: INR ${amount} | NOT A REAL PAYMENT`;
  $("paymentQr").src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + encodeURIComponent(qrData);
}

function showPaymentMethod(method) {
  document.querySelectorAll(".payment-tab").forEach(button =>
    button.classList.toggle("active", button.dataset.method === method)
  );

  $("cardPayment").classList.toggle("d-none", method !== "card");
  $("upiPayment").classList.toggle("d-none", method !== "upi");
  $("paymentSuccess").classList.add("d-none");
}

function confirmDemoPayment(method) {
  $("cardPayment").classList.add("d-none");
  $("upiPayment").classList.add("d-none");
  $("paymentSuccess").classList.remove("d-none");

  const reference = "STP-DEMO-" + Math.random().toString(36).slice(2, 8).toUpperCase();

  $("confirmationReference").innerHTML = `
    <div class="payment-reference">
      Reference: ${reference}<br>
      Method: ${method}<br>
      Status: Simulated only
    </div>`;

  toast("Demo confirmation created. No money was charged.");
}

function loadDefaults(destination) {
  const values = defaults[destination];
  ["transportation", "accommodation", "food", "activities"].forEach((id, index) => {
    $(id).value = values[index];
  });
  budget();
}

function budget() {
  const ids = ["transportation", "accommodation", "food", "activities"];
  const values = ids.map(id => Math.max(0, +$(id).value || 0));
  const total = values.reduce((sum, value) => sum + value, 0);
  const destination = $("budgetDestination").value;
  const tripDays = +$("budgetDays").value || 1;
  const travelers = +$("budgetTravelers").value || 1;

  ids.forEach((id, index) => {
    $(id + "Total").textContent = money(values[index]);
  });

  $("budgetTotal").textContent = money(total);
  $("budgetLabel").textContent =
    `${destination} · ${tripDays} day${tripDays > 1 ? "s" : ""} · ${travelers} traveler${travelers > 1 ? "s" : ""}`;
}

function toast(message) {
  $("toastMessage").textContent = message;
  bootstrap.Toast.getOrCreateInstance($("toast"), { delay: 2200 }).show();
}

// Destination search and favorites
$("destinationSearch").addEventListener("input", renderDestinations);
$("categoryFilter").addEventListener("change", renderDestinations);

$("favoritesButton").addEventListener("click", () => {
  onlyFav = !onlyFav;
  $("favoritesButton").innerHTML = onlyFav
    ? '<i class="bi bi-heart-fill"></i> Show All'
    : '<i class="bi bi-heart"></i> Favorites';
  renderDestinations();
});

$("hotelDestination").addEventListener("change", event => {
  renderHotels(event.target.value);
});

// Keep the planner, hotel list and budget destination in sync
$("plannerDestination").addEventListener("change", event => {
  const destination = event.target.value;
  selectedHotel = null;
  renderPlannerHotels();
  $("hotelDestination").value = destination;
  $("budgetDestination").value = destination;
  renderHotels(destination);
  loadDefaults(destination);
  updatePaymentSummary();
});

document.querySelectorAll('input[name="style"]').forEach(radio => {
  radio.addEventListener("change", () => {
    document.querySelectorAll(".style").forEach(element => element.classList.remove("selected"));
    radio.closest(".style").classList.add("selected");
  });
});

// Planner steps
$("nextStep").addEventListener("click", () => {
  if (step < 2) {
    step++;
    updateStep();
    renderPlannerHotels();
  }
});

$("prevStep").addEventListener("click", () => {
  if (step > 0) {
    step--;
    updateStep();
  }
});

$("travelPlanForm").addEventListener("submit", event => {
  event.preventDefault();
  createPlan();
});

// Budget calculator
["transportation", "accommodation", "food", "activities", "budgetDays", "budgetTravelers"]
  .forEach(id => $(id).addEventListener("input", budget));

$("budgetDestination").addEventListener("change", event => loadDefaults(event.target.value));

// Hero search
$("heroSearchButton").addEventListener("click", () => {
  $("destinationSearch").value = $("heroSearch").value.trim();
  renderDestinations();
  $("destinations").scrollIntoView({ behavior: "smooth" });
});

$("heroSearch").addEventListener("keydown", event => {
  if (event.key === "Enter") $("heroSearchButton").click();
});

// Date helper
$("startDate").addEventListener("change", () => {
  const start = $("startDate").value;
  if (start) {
    const date = new Date(start + "T12:00:00");
    date.setDate(date.getDate() + 4);
    $("endDate").value = date.toISOString().split("T")[0];
  }
});

// Demo payment methods
document.querySelectorAll(".payment-tab").forEach(button => {
  button.addEventListener("click", () => showPaymentMethod(button.dataset.method));
});

$("cardNumber").addEventListener("input", event => {
  const digits = event.target.value.replace(/\D/g, "").slice(0, 16);
  event.target.value = digits.replace(/(.{4})/g, "$1 ").trim();
});

$("cardExpiry").addEventListener("input", event => {
  let value = event.target.value.replace(/\D/g, "").slice(0, 4);
  if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
  event.target.value = value;
});

$("cardCvv").addEventListener("input", event => {
  event.target.value = event.target.value.replace(/\D/g, "").slice(0, 4);
});

$("cardPaymentForm").addEventListener("submit", event => {
  event.preventDefault();

  if ($("cardNumber").value.replace(/\D/g, "").length < 12) {
    return toast("Enter a demo card number with at least 12 digits.");
  }

  if ($("cardCvv").value.length < 3) {
    return toast("Enter a demo CVV.");
  }

  confirmDemoPayment("Card (simulated)");
});

$("simulateUpiPayment").addEventListener("click", () => {
  confirmDemoPayment("UPI QR (simulated)");
});

$("backToPayment").addEventListener("click", () => showPaymentMethod("card"));

// Initial setup
$("year").textContent = new Date().getFullYear();
renderDestinations();
renderHotels("Manali");
renderPlannerHotels();
loadDefaults("Manali");
updateStep();
updatePaymentSummary();
