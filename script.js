
const gun = Gun();

const chat = gun.get("rootzero-chat");

chat.map().on((data, id) => {
  if (data) {
    const div = document.createElement("div");
    div.textContent = data.message;
    document.getElementById("messages").appendChild(div);
  }
});

function send() {
  const input = document.getElementById("msg");
  const message = input.value.trim();
  if (message) {
    chat.set({ message });
    input.value = "";
  }
}
