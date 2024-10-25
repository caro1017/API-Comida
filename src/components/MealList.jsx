/* eslint-disable react/prop-types */
import { CardBar } from "./CardBar";

export const MealList = ({ meals }) => {
  if (meals.length === 0) {
    return <p>No hay recetas para mostrar.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center mt-4">
      {meals.map((meal) => (
        <CardBar key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};
