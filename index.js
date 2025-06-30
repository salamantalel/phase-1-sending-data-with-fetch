function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((response) => response.json())
    .then((object) => {
      //  This part adds the new ID to the DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = `New user ID: ${object.id}`;
      body.appendChild(p);
    })
    .catch((error) => {
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = error.message;
      body.appendChild(p);
    });
}
