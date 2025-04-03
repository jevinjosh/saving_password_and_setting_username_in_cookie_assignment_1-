// Function to get a cookie by name
function getCookie(name) {
  let cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
      let [key, value] = cookie.split('=');
      if (key.trim() === name) return value;
  }
  return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to update visit count
function updateCounter() {
  let count = getCookie("visitCount");
  count = count ? parseInt(count) + 1 : 1;
  setCookie("visitCount", count, 365);

  let countDisplay = document.getElementById("countDisplay");
  if (countDisplay) {
      countDisplay.innerText = `Page visits: ${count}`;
  }
}

// Run counter update when page loads
document.addEventListener("DOMContentLoaded", updateCounter);
