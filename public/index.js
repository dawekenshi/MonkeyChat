fetch('https://api.waifu.pics/sfw/pat').then((response) => {
    return response.json();
}).then((response) => {
    document.getElementById("wrapper").style.backgroundImage = `linear-gradient(rgb(0,0,0,0.95), rgb(0,0,0,0.95)),url(${response.url})`;
})

let username = prompt("Pon tu user mamayema: ");

const socket = io('http://localhost:8000');
document.getElementById("msgbtn").addEventListener("click", (event) => {
    event.preventDefault();
    let msg = document.getElementById("msginp").value;
    if (msg.length > 0) {
        msg = `${username}: ${msg}`
        document.getElementById("msginp").value = "";
        socket.emit("received", msg);
    }
})

socket.on("setmsg", (msg) => {
    let numsg = document.createElement("h1");
    numsg.textContent = msg;
    document.getElementById("msgzone").append(numsg);
    document.getElementById("msgzone").scrollTop = document.getElementById("msgzone").scrollHeight;
})

document.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        document.getElementById("msgbtn").click();
    }
});