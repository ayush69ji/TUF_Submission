# 📅 TUF Frontend Engineering Challenge – Interactive Calendar + Notes App

## 🎯 Solution

This project is a solution to the **TUF Frontend Engineering Challenge – Interactive Calendar + Notes App**.
The goal was to transform a static design inspiration (wall calendar) into a fully functional, responsive, and interactive web component using modern frontend technologies.
This project strictly follows the challenge constraint of being **frontend-only**, without any backend or database integration.
All interactions are handled on the client side.

---

## 🚀 Live Demo

🔗 https://tuf-submission-nine.vercel.app/

---

## 🎥 Video Demonstration

📺 https://youtu.be/42QhgDm0Al8?si=Xh-a_jCjaG528fN5

---

## 🧠 Inspiration & Design Approach

The UI is inspired by a **physical wall calendar**, focusing on:

* Clean layout and visual hierarchy
* A **hero image** acting as a visual anchor
* Clearly structured calendar grid
* Integrated notes section

The design balances **aesthetics + usability**, ensuring users can interact with the calendar intuitively.

---

## 🛠 Core Features Implemented

### 🖼️ Wall Calendar Aesthetic

* Dedicated hero image section
* Image changes according to the month
* Calendar grid aligned with visual layout
* Clean and minimal design inspired by real-world calendars

---

### 📆 Day Range Selector

* Users can select:
  * Start date
  * End date
* Visual states for:
  * Start date
  * End date
  * In-between range
* Handles edge cases:
  * Same start & end date
  * Smooth interaction flow

---

### 📝 Integrated Notes Section

* Notes panel included in UI
* Users can:
  * Add general notes
  * Notes with selected range of dates
* Designed for quick and simple interaction
* Dot on dates with notes 
* User can delete the notes

---

### 📱 Fully Responsive Design

#### 💻 Desktop

* Structured layout (image + calendar + notes)
* Maintains visual balance similar to inspiration

#### 📱 Mobile

* Layout stacks vertically
* Calendar remains touch-friendly
* Notes and selection remain fully usable

---

## ✨ Creative Enhancements

To go beyond the baseline requirements:

* Modular component architecture
* Clean UI/UX improvements
* Smooth selection experience
* Different images according to the month
* Manipulate notes

---

## 🛠️ Tech Stack

* React / Next.js
* JavaScript (ES6+)
* CSS / Tailwind CSS
* date-fns (for date manipulation)

---

## 📂 Project Structure

src/
└── components/
├── Calendar/
│   ├── CalendarHeader.jsx
│   ├── CalendarGrid.jsx
│   ├── DayCell.jsx
├── Hero/
│   ├── HeroImage.jsx
├── Notes/
│   ├── NotesPanel.jsx

---

## ⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/ayush69ji/TUF_Submission.git
cd TUF_Submission

Install dependencies:

npm install
npm install date-fns

Run the development server:

npm run dev

---

## 💡 Implementation Details

* Built using reusable React components for scalability
* Managed state efficiently for date selection logic
* Used date-fns for date calculations and formatting
* Focused on UX for smooth date selection
* Designed with responsive CSS techniques
* No backend everything is stored locally

---

## 📦 Submission Contents

This submission includes:

* ✅ Source Code (GitHub Repository)
* ✅ Video Demonstration (YouTube)
* ✅ Live Deployment (Vercel)

---

## 🎯 Evaluation Focus (Addressed)

This project demonstrates:

* Clean component architecture
* Strong frontend fundamentals
* Responsive design implementation
* Thoughtful UI/UX decisions
* Efficient state management

---

## 🙌 Author

**Ayush Birthray**

---
