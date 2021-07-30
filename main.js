const urlInput = document.querySelector("#input-url");
const numberInput = document.querySelector("#input-number");
const error = document.querySelector("#error");
const menu = document.querySelector("#menu");
const btn = document.querySelector("#btn");

const urlRequest = "https://ec2-18-222-205-41.us-east-2.compute.amazonaws.com/";

if (window.location.hash !== "") {
  const hash = window.location.hash.substr(1);
  window.location.replace(urlRequest + hash);
}

const appendErro = (errors) => {
  error.innerHTML = null;

  errors.map((errorMessage) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = errorMessage;

    error.appendChild(item);
  });
};

const appendItem = ({ id, duration }) => {
  const item = document.createElement("div");
  item.classList.add("item");

  const anchor = document.createElement("a");
  anchor.href = `${window.location.href}#${id}`;
  anchor.innerText = id;
  anchor.target = "_blank";

  const spanDuration = document.createElement("span");
  const date = new Date();
  date.setSeconds(date.getSeconds() + duration);
  spanDuration.innerText = date.toLocaleTimeString();

  const spanCopy = document.createElement("span");
  spanCopy.classList.add("copy");
  spanCopy.innerText = "Copy";
  spanCopy.onclick = async () => {
    const url = `${window.location.href}#${id}`;
    await navigator.clipboard.writeText(url).catch(console.error);
  };

  item.appendChild(anchor);
  item.appendChild(spanDuration);
  item.appendChild(spanCopy);
  menu.appendChild(item);
};

const filterError = (url, duration) => {
  const errors = [];

  if (!url) errors.push("The URL field is empty.");
  duration ?? errors.push("The duration field is empty.");

  if (Math.sign(duration) !== 1)
    errors.push("Use only integers and positives.");

  appendErro(errors);

  return errors.length;
};

btn.addEventListener("click", async () => {
  const url = urlInput.value;
  const duration = Math.trunc(numberInput.value);

  if (filterError(url, duration)) return;

  await fetch(urlRequest, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify({ url, duration }),
  })
    .then((res) => res.json())
    .then(appendItem)
    .catch(console.error);
});
