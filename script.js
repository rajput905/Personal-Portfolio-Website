// Non-functional contact form: validates input and shows a confirmation.
// To make it work, connect the form to a service such as Formspree or Netlify Forms.
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Please enter a valid email address.";
    return;
  }

  status.textContent = `Thanks, ${name}. This demo form does not send messages yet.`;
  form.reset();
});