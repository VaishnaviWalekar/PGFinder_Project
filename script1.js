// ================= Modal Handling =================
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "block";
  }
  
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
  }
  
  function toggleModal(openId) {
    closeModal("loginModal");
    closeModal("signupModal");
    openModal(openId);
  }
  
  document.getElementById("loginBtn")?.addEventListener("click", () => openModal("loginModal"));
  document.getElementById("signupBtn")?.addEventListener("click", () => openModal("signupModal"));
  
  // Close modal on outside click
  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  };
  
  // ================= City Selection =================
  function selectCity(cityName) {
    localStorage.setItem("selectedCity", cityName);
    window.location.href = "hostels.html";
  }
  
  // Make it accessible globally if using inline onclick
  window.selectCity = selectCity;
  
  // ================= Load PGs on hostels.html =================
  document.addEventListener("DOMContentLoaded", async () => {
    if (window.location.pathname.includes("hostels.html")) {
      const city = localStorage.getItem("selectedCity");
      const container = document.querySelector(".pg-container");
  
      if (!city) {
        container.innerHTML = "<p>No city selected.</p>";
        return;
      }
  
      try {
        const res = await fetch(`/api/hostels/${encodeURIComponent(city)}`);
        const data = await res.json();
  
        if (!res.ok) throw new Error(data.message || "Failed to fetch PG data.");
  
        if (data.length === 0) {
          container.innerHTML = `<p>No PGs found in ${city}.</p>`;
        } else {
          displayPGs(data);
        }
      } catch (err) {
        console.error("Error fetching PGs:", err);
        document.querySelector(".pg-container").innerHTML = "<p>Failed to load PGs. Try again later.</p>";
      }
    }
  });
  
  // ================= Display PG Cards =================
  function displayPGs(pgs) {
    const container = document.querySelector(".pg-container");
    container.innerHTML = "";
  
    pgs.forEach(pg => {
      const card = document.createElement("div");
      card.className = "pg-card";
  
      // Dummy images – replace with pg.image1, pg.image2, etc. if available
      const images = ["img/pg1.jpg", "img/pg2.jpg", "img/pg3.jpg"];
  
      card.innerHTML = `
        <div class="carousel">
          ${images.map((src, i) => `<img src="${src}" class="carousel-img ${i === 0 ? 'active' : ''}" />`).join("")}
          <button class="prev">&#10094;</button>
          <button class="next">&#10095;</button>
        </div>
        <div class="pg-details">
          <h3>${pg["hostel.name"] || "Unnamed PG"}</h3>
          <p>${pg.City || "No city provided"}</p>
          <p><strong>Rent:</strong> ₹${pg["price.from"] || "N/A"}</p>
          <p><strong>Distance:</strong> ${pg.Distance || "N/A"} km</p>
          <p><strong>Rating:</strong> ${pg["summary.score"] || "N/A"} / 10 (${pg["rating.band"] || "Unrated"})</p>
          <div class="like-btn"><i class="fa-regular fa-heart"></i></div>
        </div>
      `;
  
      container.appendChild(card);
    });
  
    initCarousels();
  }
  
  // ================= Carousel + Like Button =================
  function initCarousels() {
    document.querySelectorAll(".pg-card").forEach(card => {
      let index = 0;
      const images = card.querySelectorAll(".carousel-img");
      const prev = card.querySelector(".prev");
      const next = card.querySelector(".next");
  
      const showImage = i => {
        images.forEach((img, idx) => img.classList.toggle("active", idx === i));
      };
  
      const nextImage = () => {
        index = (index + 1) % images.length;
        showImage(index);
      };
  
      if (prev && next) {
        prev.onclick = () => {
          index = (index - 1 + images.length) % images.length;
          showImage(index);
        };
        next.onclick = () => {
          index = (index + 1) % images.length;
          showImage(index);
        };
      }
  
      showImage(index);
      setInterval(nextImage, 3000);
  
      // Like button toggle
      const likeBtn = card.querySelector(".like-btn");
      likeBtn.addEventListener("click", () => {
        const icon = likeBtn.querySelector("i");
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");
      });
    });
  }
  
  // ================= Signup Form Handling =================
  document.getElementById("signupForm")?.addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const data = {
      fullName: this.elements["fullName"].value.trim(),
      phone: this.elements["phone"].value.trim(),
      email: this.elements["email"].value.trim(),
      password: this.elements["password"].value,
      college: this.elements["college"].value.trim()
    };
  
    if (!data.email || !data.password) {
      alert("Email and password are required.");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
  
      const result = await res.json();
      alert(result.message || "Signup successful.");
      if (res.ok) {
        closeModal("signupModal");
        openModal("loginModal");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong during signup.");
    }
  });
  
  // ================= Login Form Handling =================
  document.getElementById("loginForm")?.addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const data = {
      email: this.elements["loginEmail"].value.trim(),
      password: this.elements["loginPassword"].value
    };
  
    if (!data.email || !data.password) {
      alert("Email and password are required.");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
  
      const result = await res.json();
      if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("token", result.token);
        closeModal("loginModal");
      } else {
        alert(result.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong during login.");
    }
  });
  











  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const params = new URLSearchParams(window.location.search);
    const hostelName = params.get('name');
    const city = params.get('city');
    const price = params.get('price');
  
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const contact = document.querySelector('input[name="contact"]').value;
  
    fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hostelName, city, price, name, email, date, contact })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      window.location.href = '/';
    })
    .catch(err => {
      console.error(err);
      alert('Failed to confirm booking');
    });
  });
  
























  








  


























  // server.js or app.js
const express = require('express');
const app = express();

// Import other routes
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
const hostelRoutes = require('./routes/hostels'); // Import the new hostels route

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/hostel', hostelRoutes); // Use the new hostel route

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});




 