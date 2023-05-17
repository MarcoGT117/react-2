const url = "https://jsonplaceholder.typicode.com/users";

// Peticion GET
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

// Peticion POST
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer AcaDebeIrUnTokenDeAutorizacion",
  },
  body: JSON.stringify({
    name: "Marco",
    website: "google.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// POST con async/await
const fn = async ()=>{
   const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer AcaDebeIrUnTokenDeAutorizacion",
        },
        body: JSON.stringify({
          name: "Jose",
          website: "bing.com",
        }),
      })
const data = await response.json();
console.log(data);
}

fn();