// import type { APIRoute } from 'astro';

import type { Restaurant } from "@/lib/data";

// export const get = async () => {
//   console.log("API route /api/restaurants was called");
//   const response = await fetch("http://localhost:8080/api/restaurant");
//   const data = await response.json();

//   console.log(data);
//   return {
//     body: JSON.stringify(data)
//   };
// };

const API_URL = import.meta.env.PUBLIC_API_URL + "/restaurant";

export const getRestaurants = async () => {
  const result = await fetch(API_URL);
  const restaurants = (await result.json()) as Restaurant[];
  
  return restaurants;
};

export const getRestaurantById = async ({ id }: { id: string }) => {
  const result = await fetch(`${API_URL}/${id}`);
  
  const restaurant = (await result.json()) as Restaurant;
  return restaurant
};

// export const updateRestaurantById = async (restaurant: any, id: number) => {
export const updateRestaurantById = async (restaurant: any, id: any) => {
  // try {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurant),
  });

  return response;
  // }
  // catch (err) {
  //   console.log(`Error al enviar la solicitud: ${err}`);
  // }
};