/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { MealList } from "./MealList";

export const RecipeSearch = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      // Simulamos un tiempo de carga mínimo para el loader (ej: 1 segundo)
      setTimeout(() => {
        setMeals(response.data.meals || []);
        setLoading(false);
      }, 3000);
    } catch (error) {
      setError("Error fetching data from TheMealDB");
      setLoading(false);
    }
  };

  const handleSearchByFirstLetter = async (letter) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
      );

      // Simulamos un tiempo de carga mínimo para el loader (ej: 1 segundo)
      setTimeout(() => {
        setMeals(response.data.meals || []);
        setLoading(false);
      }, 1000); // Ajusta el tiempo según tus necesidades (1000ms = 1s)
    } catch (error) {
      setError("Error fetching data from TheMealDB");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center -mt-64 md:-mt-20">
      <SearchBar
        onSearch={handleSearch}
        onSearchByFirstLetter={handleSearchByFirstLetter}
      />
      {loading && (
        <div>
          <div className="loader">
            <div className="panWrapper">
              <div className="pan">
                <div className="food"></div>
                <div className="panBase"></div>
                <div className="panHandle"></div>
              </div>
              <div className="panShadow"></div>
            </div>
          </div>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      <MealList meals={meals} />
    </div>
  );
};
