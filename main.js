const urlInput = document.querySelector("#input-url");
const numberInput = document.querySelector("#input-number");
const checkbox = document.querySelector("#checkbox");
const button = document.querySelector("#button");
const error = document.querySelector("#error");
const menu = document.querySelector("#menu");

const urlRequest = "https://ulink.imgabe.me";

if (window.location.hash !== "") {
  const hash = window.location.hash.substr(1);
  window.location.replace(urlRequest + hash);
}

/**
 * append error messages in `div#error`
 * @param {string[]} errors array with error messages
 */
const appendErrors = (errors) => {
  error.innerHTML = null;

  errors.map((errorMessage) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = errorMessage;

    error.appendChild(item);
  });
};

/**
 * create `div.item` and append in `div#menu`
 * @param {object} shortenerURL json with `id` and duration `field`
 */
const appendItem = ({ id, duration }) => {
  const item = document.createElement("div");
  item.classList.add("item");

  // create anchor element set href to add #id in current url
  const anchor = document.createElement("a");
  anchor.href = `${window.location.href}#${id}`;
  anchor.target = "_blank";

  // create code element to standard size of ids
  const code = document.createElement("code");
  code.innerText = id;
  anchor.appendChild(code);

  // create span element with duration if input is enable else "Forever"
  const spanDuration = document.createElement("span");
  if (!numberInput.disabled) {
    const date = new Date();
    date.setSeconds(date.getSeconds() + duration);
    spanDuration.innerText = date.toLocaleTimeString();
  } else {
    spanDuration.innerText = "Forever";
  }

  // create span element and add click event to copy the shortener url
  const spanCopy = document.createElement("span");
  spanCopy.classList.add("copy");
  spanCopy.innerText = "Copy";
  spanCopy.onclick = async () => {
    const url = `${window.location.href}#${id}`;
    await navigator.clipboard.writeText(url).catch(console.error);
  };

  // append elements in item element
  item.appendChild(anchor);
  item.appendChild(spanDuration);
  item.appendChild(spanCopy);
  // append item in menu element
  menu.appendChild(item);
};

/**
 * Check types errors in `url` and `duration`
 * @param {string} url url shortener
 * @param {number} duration url duration
 * @returns errors array length
 */
const filterError = (url, duration) => {
  const errors = [];

  // check if have content in url
  if (!url) errors.push("The URL field is empty.");
  // check if input is enable and content is a positive integer
  if (!numberInput.disabled && Math.sign(duration) !== 1)
    errors.push("Use only integers and positives.");

  appendErrors(errors);

  return errors.length;
};

// disable number input by default
numberInput.disabled = true;

checkbox.addEventListener(
  "change",
  () => (numberInput.disabled = !numberInput.disabled)
);

button.addEventListener("click", async () => {
  const url = urlInput.value;
  const duration = Math.trunc(numberInput.value) || null;

  // if have any error stop here
  if (filterError(url, duration)) return;

  // POST in `urlRequest` to save in database
  await fetch(urlRequest, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify({ url, duration }),
  })
    .then((res) => res.json())
    .then(appendItem)
    .catch(() => appendErrors(['Not is possible to connect with server']));
});
