
const gun = Gun();
const chat = gun.get("rootzero-chat-v3");

chat.map().on((data, id) => {
  if (data && data.message) {
    const div = document.createElement("div");
    div.classList.add("msg");
    const time = new Date(data.time).toLocaleTimeString();
    div.innerHTML = `<strong>${data.name || 'Anonymous'}:</strong> ${data.message} <br><small>${time}</small>`;
    document.getElementById("messages").appendChild(div);
    document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
  }
});

function send() {
  const input = document.getElementById("msg");
  const nameInput = document.getElementById("username");
  const message = input.value.trim();
  const name = nameInput.value.trim() || "Anonymous";

  if (message) {
    chat.set({
      name,
      message,
      time: Gun.state()
    });
    input.value = "";
  }
}
