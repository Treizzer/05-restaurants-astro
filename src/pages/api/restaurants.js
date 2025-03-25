// import type { APIRoute } from 'astro';

// export const get = async () => {
//   console.log("API route /api/restaurants was called");
//   const response = await fetch("http://localhost:8080/api/restaurant");
//   const data = await response.json();

//   console.log(data);
//   return {
//     body: JSON.stringify(data)
//   };
// };

export const get = async () => {
  console.log("API route handler triggered!");
  return {
    body: JSON.stringify({ message: "API is working!" }),
  };
};
