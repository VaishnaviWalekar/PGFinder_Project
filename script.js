// //Function to open modal
// function openModal(id) {
//     document.getElementById(id).style.display = "block";
//   }
  
//   // Function to close modal
//   function closeModal(id) {
//     document.getElementById(id).style.display = "none";
//   }
  
//   // Function to toggle between Login and Signup modals
//   function toggleModal(openId) {
//     closeModal('loginModal');
//     closeModal('signupModal');
//     openModal(openId);
//   }
  
//   // Add event listeners to buttons
//   document.getElementById("loginBtn").addEventListener("click", function () {
//     openModal("loginModal");
//   });
  
//   document.getElementById("signupBtn").addEventListener("click", function () {
//     openModal("signupModal");
//   });
  
//   // Close modals when clicking outside
//   window.onclick = function (event) {
//     if (event.target.classList.contains("modal")) {
//       event.target.style.display = "none";
//     }
//   };

//   function selectCity(cityName) {
//     localStorage.setItem("selectedCity", cityName);
//     window.location.href = "hostels.html";
//   }
//   // function selectCity(city) {
//   //   localStorage.setItem("selectedCity", city);
//   //   window.location.href = "hostel.html";
//   // }

//   // Carousel Logic
// // ddocument.querySelectorAll('.pg-card').forEach(card => {
// //   let index = 0;
// //   const images = card.querySelectorAll('.carousel-img');
// //   const prev = card.querySelector('.prev');
// //   const next = card.querySelector('.next');

// //   const showImage = (i) => {
// //     images.forEach((img, idx) => {
// //       img.classList.toggle('active', idx === i);
// //     });
// //   };

// //   const nextImage = () => {
// //     index = (index + 1) % images.length;
// //     showImage(index);
// //   };

// //   // Manual controls
// //   prev.onclick = () => {
// //     index = (index - 1 + images.length) % images.length;
// //     showImage(index);
// //   };

// //   next.onclick = () => {
// //     index = (index + 1) % images.length;
// //     showImage(index);
// //   };

// //   // Start automatic slideshow
// //   showImage(index); // Show the first image
// //   setInterval(nextImage, 3000); // Change every 3 seconds
// // });

// document.querySelectorAll('.pg-card').forEach(card => {
//   let index = 0;
//   const images = card.querySelectorAll('.carousel-img');
//   const prev = card.querySelector('.prev');
//   const next = card.querySelector('.next');

//   const showImage = (i) => {
//     images.forEach((img, idx) => {
//       img.classList.toggle('active', idx === i);
//     });
//   };

//   const nextImage = () => {
//     index = (index + 1) % images.length;
//     showImage(index);
//   };

//   // Manual controls
//   if (prev && next) {
//     prev.onclick = () => {
//       index = (index - 1 + images.length) % images.length;
//       showImage(index);
//     };
//     next.onclick = () => {
//       index = (index + 1) % images.length;
//       showImage(index);
//     };
//   }

//   // Auto slideshow
//   showImage(index);
//   setInterval(nextImage, 3000);

//   // Like button logic
// //   const likeBtn = card.querySelector('.like-btn i');
// //   likeBtn.onclick = () => {
// //     likeBtn.classList.toggle('fa-regular');
// //     likeBtn.classList.toggle('fa-solid');
// //   };


// const likeButton = card.querySelector('.like-btn');

// likeButton.addEventListener('click', function() {
//   this.classList.toggle('liked');
// });
// });

// // document.addEventListener('DOMContentLoaded', function() {
// //   // Function to open modal
// //   function openModal(id) {
// //     const modal = document.getElementById(id);
// //     if (modal) {
// //       modal.style.display = "block";
// //     }
// //   }

// //   // Function to close modal
// //   function closeModal(id) {
// //     const modal = document.getElementById(id);
// //     if (modal) {
// //       modal.style.display = "none";
// //     }
// //   }

// //   // Function to toggle between Login and Signup modals
// //   function toggleModal(openId) {
// //     closeModal('loginModal');
// //     closeModal('signupModal');
// //     openModal(openId);
// //   }

// //   // Add event listeners to buttons
// //   const loginBtn = document.getElementById("loginBtn");
// //   if (loginBtn) {
// //     loginBtn.addEventListener("click", function () {
// //       openModal("loginModal");
// //     });
// //   }

// //   const signupBtn = document.getElementById("signupBtn");
// //   if (signupBtn) {
// //     signupBtn.addEventListener("click", function () {
// //       openModal("signupModal");
// //     });
// //   }

// //   // Close modals when clicking outside
// //   window.onclick = function (event) {
// //     if (event.target.classList.contains("modal")) {
// //       event.target.style.display = "none";
// //     }
// //   };

// //   // Function to select city and navigate to hostels page
// //   function selectCity(cityName) {
// //     localStorage.setItem("selectedCity", cityName);
// //     window.location.href = "hostels.html";
// //   }

// //   // Initialize all carousels
// //   document.querySelectorAll('.pg-card').forEach(card => {
// //     let index = 0;
// //     const images = card.querySelectorAll('.carousel-img');
// //     const prev = card.querySelector('.prev');
// //     const next = card.querySelector('.next');

// //     // Function to show the current image
// //     const showImage = (i) => {
// //       images.forEach((img, idx) => {
// //         img.classList.toggle('active', idx === i);
// //       });
// //     };

// //     // Function to move to the next image
// //     const nextImage = () => {
// //       index = (index + 1) % images.length;
// //       showImage(index);
// //     };

// //     // Manual controls
// //     if (prev && next) {
// //       prev.addEventListener('click', () => {
// //         index = (index - 1 + images.length) % images.length;
// //         showImage(index);
// //       });
// //       next.addEventListener('click', () => {
// //         index = (index + 1) % images.length;
// //         showImage(index);
// //       });
// //     }

// //     // Start automatic slideshow
// //     showImage(index); // Show the first image
// //     setInterval(nextImage, 3000); // Change every 3 seconds
// //   });

// //   // Event delegation for like buttons
// //   const pgContainer = document.querySelector('.pg-container');
// //   if (pgContainer) {
// //     pgContainer.addEventListener('click', function(event) {
// //       const likeButton = event.target.closest('.like-btn');
// //       if (likeButton) {
// //         likeButton.classList.toggle('liked');
// //         // console.log("liked");
// //         const icon = likeButton.querySelector('i');
// //         if (icon) {
// //           icon.classList.toggle('fa-regular');
// //           icon.classList.toggle('fa-solid');
// //         }
// //       }
// //     });
// //   }
// // });

// // ===== Signup Handling =====

// document.getElementById("signupForm").addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const data = {
//     fullName: this.elements["fullName"].value.trim(),
//     phone: this.elements["phone"].value.trim(),
//     email: this.elements["email"].value.trim(),
//     password: this.elements["password"].value,
//     college: this.elements["college"].value.trim()
//   };

//   if (!data.email || !data.password) {
//     alert("Email and password are required.");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:5000/api/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data)
//     });

//     const result = await res.json();
//     alert(result.message || "Signup completed.");
//     if (res.ok) {
//       closeModal("signupModal");
//       openModal("loginModal");
//     }
//   } catch (error) {
//     console.error("Signup error:", error);
//     alert("Something went wrong during signup.");
//   }
// });

// // ===== Login Handling =====

// document.getElementById("loginForm").addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const data = {
//     email: this.elements["loginEmail"].value.trim(),
//     password: this.elements["loginPassword"].value
//   };

//   if (!data.email || !data.password) {
//     alert("Email and password are required.");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data)
//     });

//     const result = await res.json();
//     if (res.ok) {
//       alert("Login successful!");
//       localStorage.setItem("token", result.token);
//       closeModal("loginModal");
//     } else {
//       alert(result.message || "Invalid credentials");
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     alert("Something went wrong during login.");
//   }
// });

// ================= Modal Handling =================
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function toggleModal(openId) {
  closeModal('loginModal');
  closeModal('signupModal');
  openModal(openId);
}

document.getElementById("loginBtn").addEventListener("click", () => openModal("loginModal"));
document.getElementById("signupBtn").addEventListener("click", () => openModal("signupModal"));

// Close modal on outside click
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// ============ City Selection ============
function selectCity(cityName) {
  localStorage.setItem("selectedCity", cityName);
  window.location.href = "hostels.html";
}

// ============ Load PGs on hostels.html ============
document.addEventListener("DOMContentLoaded", async function () {
  if (window.location.pathname.includes("hostels.html")) {
    const city = localStorage.getItem("selectedCity");

    if (!city) {
      document.querySelector(".pg-container").innerHTML = "<p>No city selected</p>";
      return;
    }

    try {
      const response = await fetch(`/api/hostels/${encodeURIComponent(city)}`);
      const pgList = await response.json();

      if (pgList.length === 0) {
        document.querySelector(".pg-container").innerHTML = "<p>No PGs found for this city.</p>";
        return;
      }

      displayPGs(pgList);
    } catch (error) {
      console.error("Error fetching PGs:", error);
      document.querySelector(".pg-container").innerHTML = "<p>Failed to load PGs. Try again later.</p>";
    }
  }
});

// ============ Display PG Cards with Carousel ============
function displayPGs(pgs) {
  const container = document.querySelector(".pg-container");
  container.innerHTML = "";

  pgs.forEach(pg => {
    const card = document.createElement("div");
    card.className = "pg-card";

    // Simple dummy carousel image logic (replace with actual URLs if you have image fields)
    const images = [
      "img/pg1.jpg", // Replace with pg.image1 if available
      "img/pg2.jpg",
      "img/pg3.jpg"
    ];

    card.innerHTML = `
      <div class="carousel">
        ${images.map((src, i) => `<img src="${src}" class="carousel-img ${i === 0 ? 'active' : ''}">`).join('')}
        <button class="prev">&#10094;</button>
        <button class="next">&#10095;</button>
      </div>
      <div class="pg-details">
        <h3>${pg["PG Name"] || "Unnamed PG"}</h3>
        <p>${pg["Address"] || "No address available"}</p>
        <p><strong>Rent:</strong> ₹${pg["Rent"] || "N/A"}</p>
        <div class="like-btn"><i class="fa-regular fa-heart"></i></div>
      </div>
    `;

    container.appendChild(card);
  });

  initCarousels();
}

// ============ Carousel + Like Button Logic ============
function initCarousels() {
  document.querySelectorAll('.pg-card').forEach(card => {
    let index = 0;
    const images = card.querySelectorAll('.carousel-img');
    const prev = card.querySelector('.prev');
    const next = card.querySelector('.next');

    const showImage = (i) => {
      images.forEach((img, idx) => img.classList.toggle('active', idx === i));
    };

    const nextImage = () => {
      index = (index + 1) % images.length;
      showImage(index);
    };

    // Manual controls
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

    // Auto slideshow
    showImage(index);
    setInterval(nextImage, 3000);

    // Like button logic
    const likeBtn = card.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => {
      const icon = likeBtn.querySelector('i');
      icon.classList.toggle('fa-regular');
      icon.classList.toggle('fa-solid');
    });
  });
}

// ============ Signup Form ============
document.getElementById("signupForm").addEventListener("submit", async function (e) {
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
    alert(result.message || "Signup completed.");
    if (res.ok) {
      closeModal("signupModal");
      openModal("loginModal");
    }
  } catch (error) {
    console.error("Signup error:", error);
    alert("Something went wrong during signup.");
  }
});

// ============ Login Form ============
document.getElementById("loginForm").addEventListener("submit", async function (e) {
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
      alert(result.message || "Invalid credentials");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong during login.");
  }
});
