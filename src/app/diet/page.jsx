"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaUtensils,
  FaFire,
  FaPlus,
  FaCheckCircle,
  FaCalendarPlus,
  FaTrashAlt,
  FaAppleAlt,
  FaSearch,
  FaWeightHanging,
} from "react-icons/fa";

export default function DietPage() {
  // Ingredients dataset loaded from your JSON
  const [ingredientsLibrary, setIngredientsLibrary] = useState([
    {
      id: "ING001",
      name: "Chicken Breast",
      category: "Meat & Poultry",
      calories_per_100g: 165,
      image_url:
        "https://www.themealdb.com/images/ingredients/Chicken%20Breast.png",
    },
    {
      id: "ING002",
      name: "Beef",
      category: "Meat & Poultry",
      calories_per_100g: 250,
      image_url: "https://www.themealdb.com/images/ingredients/Beef.png",
    },
    {
      id: "ING003",
      name: "Pork",
      category: "Meat & Poultry",
      calories_per_100g: 242,
      image_url: "https://www.themealdb.com/images/ingredients/Pork.png",
    },
    {
      id: "ING004",
      name: "Lamb",
      category: "Meat & Poultry",
      calories_per_100g: 294,
      image_url: "https://www.themealdb.com/images/ingredients/Lamb.png",
    },
    {
      id: "ING005",
      name: "Bacon",
      category: "Meat & Poultry",
      calories_per_100g: 541,
      image_url: "https://www.themealdb.com/images/ingredients/Bacon.png",
    },
    {
      id: "ING006",
      name: "Salmon",
      category: "Seafood",
      calories_per_100g: 208,
      image_url: "https://www.themealdb.com/images/ingredients/Salmon.png",
    },
    {
      id: "ING007",
      name: "Tuna",
      category: "Seafood",
      calories_per_100g: 132,
      image_url: "https://www.themealdb.com/images/ingredients/Tuna.png",
    },
    {
      id: "ING008",
      name: "Prawns",
      category: "Seafood",
      calories_per_100g: 99,
      image_url:
        "https://www.themealdb.com/images/ingredients/King%20Prawns.png",
    },
    {
      id: "ING009",
      name: "Eggs",
      category: "Dairy & Eggs",
      calories_per_100g: 155,
      image_url: "https://www.themealdb.com/images/ingredients/Eggs.png",
    },
    {
      id: "ING010",
      name: "Greek Yogurt",
      category: "Dairy & Eggs",
      calories_per_100g: 59,
      image_url:
        "https://www.themealdb.com/images/ingredients/Greek%20Yogurt.png",
    },
    {
      id: "ING011",
      name: "Milk",
      category: "Dairy & Eggs",
      calories_per_100g: 61,
      image_url: "https://www.themealdb.com/images/ingredients/Milk.png",
    },
    {
      id: "ING012",
      name: "Cheddar Cheese",
      category: "Dairy & Eggs",
      calories_per_100g: 402,
      image_url:
        "https://www.themealdb.com/images/ingredients/Cheddar%20Cheese.png",
    },
    {
      id: "ING013",
      name: "Butter",
      category: "Dairy & Eggs",
      calories_per_100g: 717,
      image_url: "https://www.themealdb.com/images/ingredients/Butter.png",
    },
    {
      id: "ING014",
      name: "Paneer",
      category: "Dairy & Eggs",
      calories_per_100g: 265,
      image_url: "https://www.themealdb.com/images/ingredients/Paneer.png",
    },
    {
      id: "ING015",
      name: "Cucumber",
      category: "Vegetables",
      calories_per_100g: 15,
      image_url: "https://www.themealdb.com/images/ingredients/Cucumber.png",
    },
    {
      id: "ING016",
      name: "Tomatoes",
      category: "Vegetables",
      calories_per_100g: 18,
      image_url: "https://www.themealdb.com/images/ingredients/Tomatoes.png",
    },
    {
      id: "ING017",
      name: "Spinach",
      category: "Vegetables",
      calories_per_100g: 23,
      image_url: "https://www.themealdb.com/images/ingredients/Spinach.png",
    },
    {
      id: "ING018",
      name: "Broccoli",
      category: "Vegetables",
      calories_per_100g: 34,
      image_url: "https://www.themealdb.com/images/ingredients/Broccoli.png",
    },
    {
      id: "ING019",
      name: "Carrots",
      category: "Vegetables",
      calories_per_100g: 41,
      image_url: "https://www.themealdb.com/images/ingredients/Carrots.png",
    },
    {
      id: "ING020",
      name: "Potatoes",
      category: "Vegetables",
      calories_per_100g: 77,
      image_url: "https://www.themealdb.com/images/ingredients/Potatoes.png",
    },
    {
      id: "ING021",
      name: "Sweet Potatoes",
      category: "Vegetables",
      calories_per_100g: 86,
      image_url:
        "https://www.themealdb.com/images/ingredients/Sweet%20Potatoes.png",
    },
    {
      id: "ING022",
      name: "Onions",
      category: "Vegetables",
      calories_per_100g: 40,
      image_url: "https://www.themealdb.com/images/ingredients/Onions.png",
    },
    {
      id: "ING023",
      name: "Garlic",
      category: "Vegetables",
      calories_per_100g: 149,
      image_url: "https://www.themealdb.com/images/ingredients/Garlic.png",
    },
    {
      id: "ING024",
      name: "Ginger",
      category: "Vegetables",
      calories_per_100g: 80,
      image_url: "https://www.themealdb.com/images/ingredients/Ginger.png",
    },
    {
      id: "ING025",
      name: "Red Pepper",
      category: "Vegetables",
      calories_per_100g: 31,
      image_url:
        "https://www.themealdb.com/images/ingredients/Red%20Pepper.png",
    },
    {
      id: "ING026",
      name: "Mushrooms",
      category: "Vegetables",
      calories_per_100g: 22,
      image_url: "https://www.themealdb.com/images/ingredients/Mushrooms.png",
    },
    {
      id: "ING027",
      name: "Lettuce",
      category: "Vegetables",
      calories_per_100g: 15,
      image_url: "https://www.themealdb.com/images/ingredients/Lettuce.png",
    },
    {
      id: "ING028",
      name: "Zucchini",
      category: "Vegetables",
      calories_per_100g: 17,
      image_url: "https://www.themealdb.com/images/ingredients/Zucchini.png",
    },
    {
      id: "ING029",
      name: "Cauliflower",
      category: "Vegetables",
      calories_per_100g: 25,
      image_url:
        "https://pngimg.com/uploads/cauliflower/cauliflower_PNG99309.png",
    },
    {
      id: "ING030",
      name: "Aubergine (Eggplant)",
      category: "Vegetables",
      calories_per_100g: 25,
      image_url: "https://www.themealdb.com/images/ingredients/Aubergine.png",
    },
    {
      id: "ING031",
      name: "Avocado",
      category: "Fruits",
      calories_per_100g: 160,
      image_url: "https://www.themealdb.com/images/ingredients/Avocado.png",
    },
    {
      id: "ING032",
      name: "Banana",
      category: "Fruits",
      calories_per_100g: 89,
      image_url: "https://www.themealdb.com/images/ingredients/Banana.png",
    },
    {
      id: "ING033",
      name: "Apples",
      category: "Fruits",
      calories_per_100g: 52,
      image_url: "https://www.themealdb.com/images/ingredients/Apples.png",
    },
    {
      id: "ING034",
      name: "Strawberries",
      category: "Fruits",
      calories_per_100g: 32,
      image_url:
        "https://www.themealdb.com/images/ingredients/Strawberries.png",
    },
    {
      id: "ING035",
      name: "Blueberries",
      category: "Fruits",
      calories_per_100g: 57,
      image_url: "https://www.themealdb.com/images/ingredients/Blueberries.png",
    },
    {
      id: "ING036",
      name: "Lemon",
      category: "Fruits",
      calories_per_100g: 29,
      image_url: "https://www.themealdb.com/images/ingredients/Lemon.png",
    },
    {
      id: "ING037",
      name: "Orange",
      category: "Fruits",
      calories_per_100g: 47,
      image_url: "https://www.themealdb.com/images/ingredients/Orange.png",
    },
    {
      id: "ING038",
      name: "Rice (Raw White)",
      category: "Grains & Legumes",
      calories_per_100g: 365,
      image_url: "https://www.themealdb.com/images/ingredients/Rice.png",
    },
    {
      id: "ING039",
      name: "Rolled Oats",
      category: "Grains & Legumes",
      calories_per_100g: 389,
      image_url:
        "https://www.themealdb.com/images/ingredients/Rolled%20Oats.png",
    },
    {
      id: "ING040",
      name: "Quinoa (Raw)",
      category: "Grains & Legumes",
      calories_per_100g: 368,
      image_url: "https://www.themealdb.com/images/ingredients/Quinoa.png",
    },
    {
      id: "ING041",
      name: "Lentils (Raw)",
      category: "Grains & Legumes",
      calories_per_100g: 352,
      image_url: "https://www.themealdb.com/images/ingredients/Lentils.png",
    },
    {
      id: "ING042",
      name: "Chickpeas (Raw)",
      category: "Grains & Legumes",
      calories_per_100g: 364,
      image_url: "https://www.themealdb.com/images/ingredients/Chickpeas.png",
    },
    {
      id: "ING043",
      name: "Kidney Beans",
      category: "Grains & Legumes",
      calories_per_100g: 333,
      image_url:
        "https://www.themealdb.com/images/ingredients/Kidney%20Beans.png",
    },
    {
      id: "ING044",
      name: "Tofu",
      category: "Grains & Legumes",
      calories_per_100g: 76,
      image_url: "https://www.themealdb.com/images/ingredients/Tofu.png",
    },
    {
      id: "ING045",
      name: "Flour",
      category: "Grains & Legumes",
      calories_per_100g: 364,
      image_url: "https://www.themealdb.com/images/ingredients/Flour.png",
    },
    {
      id: "ING046",
      name: "Almonds",
      category: "Nuts, Seeds & Oils",
      calories_per_100g: 579,
      image_url: "https://www.themealdb.com/images/ingredients/Almonds.png",
    },
    {
      id: "ING047",
      name: "Walnuts",
      category: "Nuts, Seeds & Oils",
      calories_per_100g: 654,
      image_url: "https://www.themealdb.com/images/ingredients/Walnuts.png",
    },
    {
      id: "ING048",
      name: "Peanut Butter",
      category: "Nuts, Seeds & Oils",
      calories_per_100g: 588,
      image_url:
        "https://www.themealdb.com/images/ingredients/Peanut%20Butter.png",
    },
    {
      id: "ING049",
      name: "Olive Oil",
      category: "Nuts, Seeds & Oils",
      calories_per_100g: 884,
      image_url: "https://www.themealdb.com/images/ingredients/Olive%20Oil.png",
    },
    {
      id: "ING050",
      name: "Honey",
      category: "Sweeteners",
      calories_per_100g: 304,
      image_url: "https://www.themealdb.com/images/ingredients/Honey.png",
    },
  ]);

  // User's active Diet for Today plan list
  const [dietToday, setDietToday] = useState([
    {
      id: "diet-1",
      title: "Chicken Breast (150g)",
      category: "Meat & Poultry",
      calories: Math.round(150 * (165 / 100)),
      completed: true,
    },
    {
      id: "diet-2",
      title: "Rolled Oats (80g)",
      category: "Grains & Legumes",
      calories: Math.round(80 * (389 / 100)),
      completed: false,
    },
  ]);

  // Track user portion input per ingredient item (keyed by ingredient id, default to 100g)
  const [portions, setPortions] = useState({});

  // Search filter state for the library
  const [searchTerm, setSearchTerm] = useState("");

  // Custom ingredient form state
  const [customTitle, setCustomTitle] = useState("");
  const [customCalories100g, setCustomCalories100g] = useState("150");
  const [customCategory, setCustomCategory] = useState("Vegetables");

  const filteredIngredients = ingredientsLibrary.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handlePortionChange = (id, value) => {
    setPortions({ ...portions, [id]: value });
  };

  // Add ingredient to "Diet for Today" with auto-calculated calories based on custom portion
  const handleAddForToday = (item) => {
    const gramAmount = parseFloat(portions[item.id]) || 100;
    const calculatedCalories = Math.round(
      gramAmount * (item.calories_per_100g / 100),
    );

    const newItem = {
      id: String(Date.now()),
      title: `${item.name} (${gramAmount}g)`,
      category: item.category,
      calories: calculatedCalories,
      completed: false,
    };

    setDietToday([newItem, ...dietToday]);
    toast.success(`Added ${item.name} (${gramAmount}g) to Diet for Today!`);
  };

  // Add custom ingredient directly to library using /customed-ingrediant.JPG
  const handleAddCustomLibrary = (e) => {
    e.preventDefault();
    if (!customTitle.trim()) return;

    const newLibraryItem = {
      id: `ING-CUSTOM-${Date.now()}`,
      name: customTitle.trim(),
      category: customCategory,
      calories_per_100g: parseInt(customCalories100g) || 150,
      image_url: "/customed-ingrediant.JPG",
    };

    setIngredientsLibrary([newLibraryItem, ...ingredientsLibrary]);
    setCustomTitle("");
    toast.success("Custom ingredient added to library!");
  };

  const handleDeleteFromDietToday = (id) => {
    setDietToday(dietToday.filter((item) => item.id !== id));
    toast.success("Removed from today's diet plan.");
  };

  const toggleDietComplete = (id) => {
    setDietToday(
      dietToday.map((item) => {
        if (item.id === id) {
          const updated = !item.completed;
          toast(
            updated ? `Eaten: ${item.title}! 🍽️` : `Unmarked: ${item.title}`,
            {
              icon: updated ? "✅" : "ℹ️",
            },
          );
          return { ...item, completed: updated };
        }
        return item;
      }),
    );
  };

  // Calorie calculations
  const dailyTargetCalories = 2000;
  const totalCaloriesConsumed = dietToday
    .filter((item) => item.completed)
    .reduce((acc, curr) => acc + (curr.calories || 0), 0);
  const caloriesRemaining = Math.max(
    0,
    dailyTargetCalories - totalCaloriesConsumed,
  );

  return (
    <div className="min-h-screen bg-[#030816] text-white px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto bg-[#05112B]/90 border border-sky-800/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,163,255,0.15)] backdrop-blur-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#00A3FF] font-semibold">
            NUTRITION & DIET
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Track Ingredients & Portions 🥗
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
            Specify exact portion weights in grams to auto-calculate calories,
            add items to your Diet for Today, and monitor daily intake.
          </p>
        </div>

        {/* Live Consumed Counter Pill */}
        <div className="bg-[#03091B] border border-sky-800/60 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-[0_0_20px_rgba(0,163,255,0.2)]">
          <div className="w-12 h-12 rounded-xl bg-[#061536] border border-sky-700/50 flex items-center justify-center text-[#00A3FF] text-xl">
            <FaUtensils />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">
              Total Consumed (Eaten)
            </p>
            <p className="text-2xl font-black text-white">
              {totalCaloriesConsumed}{" "}
              <span className="text-xs font-normal text-slate-400">kcal</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Ingredients Library Grid */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaAppleAlt className="text-[#00A3FF]" />
              <span>Ingredients Library</span>
            </h3>

            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <FaSearch className="absolute left-3.5 top-3 text-slate-500 text-xs" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search ingredients..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#05112B] border border-sky-950 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00A3FF] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-[650px] overflow-y-auto pr-1">
            {filteredIngredients.map((item) => {
              const currentPortion =
                portions[item.id] !== undefined ? portions[item.id] : 100;
              const calculatedCal = Math.round(
                currentPortion * (item.calories_per_100g / 100),
              );

              return (
                <div
                  key={item.id}
                  className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-200 flex flex-col justify-between shadow-[0_0_20px_rgba(0,163,255,0.08)] hover:border-[#00A3FF]"
                >
                  {/* Image Header with Fallback on Error */}
                  <div className="relative w-full h-32 bg-[#03091B] flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/customed-ingrediant.JPG";
                      }}
                      className="max-h-full max-w-full object-contain opacity-90 hover:scale-105 transition duration-300"
                    />
                    <span className="absolute top-3 left-3 text-[9px] font-mono uppercase font-bold text-[#00A3FF] bg-[#03091B]/80 px-2.5 py-1 rounded-full border border-sky-900 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm text-white line-clamp-1">
                        {item.name}
                      </h4>
                      <span className="text-[11px] font-mono text-[#00A3FF] font-bold">
                        {calculatedCal} kcal
                      </span>
                    </div>

                    {/* Portion Input Field */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                        <FaWeightHanging className="text-[#00A3FF]" /> Portion
                        (grams):
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="2000"
                        value={currentPortion}
                        onChange={(e) =>
                          handlePortionChange(item.id, e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition font-mono"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddForToday(item)}
                      className="w-full py-2.5 rounded-xl bg-[#061536] hover:bg-[#00A3FF] border border-sky-800/50 hover:border-[#00A3FF] text-xs font-bold text-slate-200 hover:text-white transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FaCalendarPlus className="text-xs text-[#00A3FF]" />
                      <span>Add to Diet for Today</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Diet for Today & Custom Ingredient Form */}
        <div className="lg:col-span-5 space-y-6">
          {/* Diet for Today Card */}
          <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-[0_0_30px_rgba(0,163,255,0.1)]">
            <div className="flex items-center justify-between border-b border-sky-950 pb-4">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                  <FaCheckCircle className="text-[#00A3FF]" />
                  <span>Diet for Today</span>
                </h3>
                <p className="text-[11px] text-slate-400 pt-1 font-mono">
                  Calories remaining:{" "}
                  <strong className="text-[#00A3FF]">
                    {caloriesRemaining} kcal
                  </strong>{" "}
                  (Goal: {dailyTargetCalories} kcal)
                </p>
              </div>
              <span className="text-xs text-slate-400 font-mono bg-[#03091B] px-3 py-1.5 rounded-xl border border-sky-950">
                {dietToday.filter((i) => i.completed).length} /{" "}
                {dietToday.length} eaten
              </span>
            </div>

            <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
              {dietToday.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-6">
                  No items added to today's diet yet. Select portions from the
                  library!
                </p>
              ) : (
                dietToday.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition ${
                      item.completed
                        ? "bg-[#03091B]/50 border-sky-950 opacity-75"
                        : "bg-[#03091B] border-sky-900/40"
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono uppercase font-bold text-[#00A3FF]">
                        {item.category}
                      </span>
                      <p
                        className={`font-bold text-xs ${item.completed ? "line-through text-slate-400" : "text-white"}`}
                      >
                        {item.title}
                      </p>
                      <p className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                        <FaFire className="text-[#00A3FF]" /> {item.calories}{" "}
                        kcal
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleDietComplete(item.id)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition cursor-pointer shrink-0 ${
                          item.completed
                            ? "bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                            : "bg-[#061536] border border-sky-800 text-slate-500 hover:text-white"
                        }`}
                      >
                        <FaCheckCircle className="text-xs" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteFromDietToday(item.id)}
                        className="w-7 h-7 rounded-full bg-[#061536] border border-sky-900 text-slate-500 hover:text-rose-400 flex items-center justify-center transition cursor-pointer shrink-0"
                        title="Remove"
                      >
                        <FaTrashAlt className="text-[10px]" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Add Custom Ingredient Form */}
          <div className="bg-[#05112B]/85 border border-sky-800/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-[0_0_30px_rgba(0,163,255,0.1)]">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <FaPlus className="text-[#00A3FF]" />
              <span>Add Custom Ingredient (to Library)</span>
            </h3>

            <form onSubmit={handleAddCustomLibrary} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Ingredient Name
                </label>
                <input
                  type="text"
                  required
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g. Secret Recipe Shake"
                  className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-[#00A3FF] transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Category
                  </label>
                  <select
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  >
                    <option value="Meat & Poultry">Meat & Poultry</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Dairy & Eggs">Dairy & Eggs</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Grains & Legumes">Grains & Legumes</option>
                    <option value="Nuts, Seeds & Oils">
                      Nuts, Seeds & Oils
                    </option>
                    <option value="Sweeteners">Sweeteners</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Calories per 100g
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={customCalories100g}
                    onChange={(e) => setCustomCalories100g(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#03091B] border border-sky-950 text-white text-xs focus:outline-none focus:border-[#00A3FF] transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#00A3FF] text-white font-bold text-xs uppercase tracking-wide hover:bg-[#008fe3] transition shadow-[0_0_20px_rgba(0,163,255,0.45)] cursor-pointer"
              >
                Add to Library
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
