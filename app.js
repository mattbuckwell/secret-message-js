document.querySelector("form").addEventListener("submit", (event) => {
  // stops the page from submitting the form data to a backend
  event.preventDefault();
  // accessing the message input by the user
  const input = document.querySelector("input");
  console.log(input.value);
});
