const form = document.getElementById("chatForm");
const chatBox = document.getElementById("chatBox");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = username.value;
  const text = message.value;

  showMessage(user + ": " + text, "user");

  await fetch("/send-message", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ user, message: text })
  });

  message.value = "";
  loadMessages();
});

function showMessage(text, type) {
  const div = document.createElement("div");
  div.className = `msg ${type}`;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function loadMessages() {
  const res = await fetch("/messages");
  const data = await res.json();
  chatBox.innerHTML = "";

  data.forEach(m => {
    showMessage(m.user + ": " + m.message, "support");
  });
}

loadMessages();
