🏋️‍♂️ HEALTHYCISE — AI-Driven Fitness & Nutrition Tracker
HEALTHYCISE is a modern, high-performance web application built with Next.js and Tailwind CSS designed to help users plan workouts, track daily nutrition with precise gram portions, and monitor active calorie burn through a sleek dark-themed glassmorphism interface and neon-blue accents.

🌐 Live Demo: https://healthycise.vercel.app/

📂 GitHub Repository: https://github.com/Mahathir003/Healthycise

✨ Features

1. 🏋️‍♂️ Workout & Burn Dashboard (/workouts)
   Workout Library Grid: Browse available exercises fetched dynamically from your API with category tags and image support.

Add for Today: Easily pin workouts from the library directly into your daily workout plan.

Interactive To-Do List: Mark scheduled workouts as completed to watch your Total Burned Calories update in real-time, complete with calorie targets and deletion controls.

Custom Workout Creation: Add custom exercises directly to your workout library using your custom asset (/customed-workout.png).

2. 🥗 Nutrition & Diet Calculator (/diet)
   Ingredients Library: Comprehensive ingredient dataset spanning multiple food categories (Meat & Poultry, Vegetables, Fruits, Grains, etc.) with search filtering and custom image fallback support (/customed-ingrediant.JPG).

Portion-Based Calorie Calculation: Enter exact portion weights in grams for any ingredient to dynamically auto-calculate total calories before adding items to your plan.

Diet for Today: Track consumed meals against your daily calorie target with live remaining-calorie metrics and completion toggles.

Custom Ingredient Management: Add custom ingredients with custom calories-per-100g directly into your local library.

🛠️ Tech Stack
Framework: Next.js (App Router, Client & Server Components)

Styling: Tailwind CSS

Icons: React Icons

Notifications: React Hot Toast

Version Control: Git & GitHub

📁 Project Structure
Plaintext
src/
├── app/
│ ├── workouts/
│ │ ├── page.jsx # Workout library & interactive To-Do list
│ │ └── [id]/
│ │ └── page.jsx # Dynamic workout single-item detail view
│ ├── diet/
│ │ └── page.jsx # Ingredient library & portion-based diet planner
│ ├── layout.jsx # Global root layout & providers
│ └── page.jsx # Home dashboard
public/
├── customed-workout.png # Custom user workout image asset
└── customed-ingrediant.JPG # Custom user ingredient image asset
🚀 Getting Started Locally
Prerequisites
Make sure you have Node.js installed on your machine.

Installation & Setup
Clone the repository:

Bash
git clone https://github.com/Mahathir003/Healthycise.git
cd Healthycise
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open your browser:
Navigate to http://localhost:3000 to view the application.
