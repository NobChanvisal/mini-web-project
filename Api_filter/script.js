document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const mealResultsDiv = document.getElementById("meal-results");
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", () => {
    const filterContainer = document.querySelector(".filter-buttons");

    filterContainer.classList.toggle("activeIocon");
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      fetchMealsByCategory(category);
    });
  });

  async function fetchMealsByCategory(category) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    mealResultsDiv.innerHTML = "<p>Loading meals...</p>";

    try {
      const response = await fetch(url);
      const data = await response.json();

      displayMeals(data.meals);
    } catch (error) {
      console.error("Error fetching meals:", error);
      mealResultsDiv.innerHTML =
        "<p>Failed to load meals. Please try again.</p>";
    }
  }

  function displayMeals(meals) {
    mealResultsDiv.innerHTML = "";

    if (!meals || meals.length === 0) {
      mealResultsDiv.innerHTML = "<p>No meals found for this category.</p>";
      return;
    }

    const mealCardsHTML = meals
      .map((meal) => {
        return `
                <div class="meal-card">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h3>${meal.strMeal}</h3>
                    </div>
            `;
      })
      .join("");
    mealResultsDiv.innerHTML = mealCardsHTML;
  }
});
