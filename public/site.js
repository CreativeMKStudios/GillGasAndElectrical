const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

toggle?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  document.body.classList.toggle("nav-open", Boolean(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  });
});

const filters = document.querySelectorAll("[data-filter]");
const shots = document.querySelectorAll("[data-shot]");
filters.forEach((button) => {
  button.addEventListener("click", () => {
    const tag = button.getAttribute("data-filter");
    filters.forEach((item) => item.setAttribute("aria-pressed", item === button ? "true" : "false"));
    shots.forEach((shot) => {
      const show = tag === "all" || shot.getAttribute("data-shot") === tag;
      shot.toggleAttribute("hidden", !show);
    });
  });
});

const form = document.querySelector("[data-quote-form]");
form?.addEventListener("submit", (event) => {
  const data = new FormData(form);
  if (String(data.get("website") || "").trim()) {
    event.preventDefault();
    return;
  }
  event.preventDefault();
  const lines = [
    `Name: ${data.get("name") || ""}`,
    `Phone: ${data.get("phone") || ""}`,
    `Email: ${data.get("email") || ""}`,
    `Postcode: ${data.get("postcode") || ""}`,
    `Job: ${data.get("service") || ""}`,
    "",
    String(data.get("message") || ""),
  ];
  const href = `mailto:gillgaselectrical@gmail.com?subject=${encodeURIComponent("Quote request from the website")}&body=${encodeURIComponent(lines.join("\n"))}`;
  const sent = form.querySelector("[data-sent]");
  if (sent) sent.hidden = false;
  window.location.href = href;
});
