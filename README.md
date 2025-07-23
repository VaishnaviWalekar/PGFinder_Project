# PGFinder_Project
PG Finder is a web application that allows users to search and explore Paying Guest (PG) accommodations across various cities in Japan. It displays detailed PG listings, including images, amenities, prices, distances, and user ratings. Users can filter PGs by city and view each PG’s full details on a seperate page.
<br>
## 🔍 Features

- 🌆 Search PGs by city
- 🖼️ Image carousel for each PG
- 📍 View distance and location details
- ⭐ Display PG features: price, amenities, ratings
- 🔐 Login/Signup modal for user authentication
- 📄 Detailed property page for each PG
- 📦 Data stored in CSV and served using API endpoints
- <br>
## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS, JavaScript

**Backend:**
- Node.js with Express.js
- MongoDB (for user and booking data)
- CSV file (for PG data)

**APIs:**
- `/api/data` – Returns all PG listings
- `/api/hostels/:city` – Returns PG listings for a specific city
