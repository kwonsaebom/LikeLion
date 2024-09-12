const form = document.querySelector(".form");
const cancel = document.querySelector(".cancel");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const NAME = document.querySelector("#name").value;
  const PHONE = document.querySelector("#phone").value;
  const JOB = document.querySelector("#job").value;

  result.innerHTML = `Name: ${NAME}<br>Phone: ${PHONE}<br>Job: ${JOB}`;
});
