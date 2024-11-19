import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mealIngredients, setMealIngredients] = useState({});
  const [selectedMealId, setSelectedMealId] = useState(null);

  useEffect(() => {
    if (ingredient) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => response.json())
        .then(data => {
          setMeals(data.meals || []);
          setLoading(false);
          if (data.meals) {
            data.meals.forEach(meal => {
              fetchMealIngredients(meal.idMeal);
            });
          }
        })
        .catch(error => {
          console.error('Error fetching meal ideas:', error);
          setLoading(false);
        });
    }
  }, [ingredient]);

  const fetchMealIngredients = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => response.json())
      .then(data => {
        setMealIngredients(prev => ({
          ...prev,
          [mealId]: data.meals[0],
        }));
      })
      .catch(error => {
        console.error('Error fetching meal ingredients:', error);
      });
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-white">Meal Ideas</h2>
      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : meals.length === 0 ? (
        <p className="text-gray-400">No meal ideas found for {ingredient}</p>
      ) : (
        <>
          <p className="text-gray-300 mb-4">Here are some meal ideas using {ingredient}:</p>
          <ul>
            {meals.map(meal => (
              <li key={meal.idMeal} className="mb-2">
                <button 
                  className="font-semibold text-left inline-block bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors"
                  onClick={() => setSelectedMealId(meal.idMeal)}
                >
                  {meal.strMeal}
                </button>
                {selectedMealId === meal.idMeal && mealIngredients[meal.idMeal] && (
                  <div className="mt-2 text-white">
                    <h4 className="font-semibold text-orange-400">Ingredients needed:</h4>
                    <ul className="ml-4 list-disc text-sm">
                      {Object.keys(mealIngredients[meal.idMeal])
                        .filter(key => key.startsWith('strIngredient') && mealIngredients[meal.idMeal][key]) 
                        .map((key, index) => (
                          <li key={index} className="text-gray-300">
                            {mealIngredients[meal.idMeal][key]} - {mealIngredients[meal.idMeal][`strMeasure${index + 1}`]}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MealIdeas;
