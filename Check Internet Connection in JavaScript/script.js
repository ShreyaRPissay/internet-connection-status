let message = document.getElementById("message");

let messageOnline = () => {
  message.textContent = "Internet Connection Available";
  message.style.cssText = "background-color: #86d9f0; color: #22255e";
};
let messageOffline = () => {
  message.textContent = "Internet Connection Lost";
  message.style.cssText = "background-color: #ffdde0; color: #d32f2f";
};

if (window.navigator.onLine) {
  messageOnline();
} else {
  messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);