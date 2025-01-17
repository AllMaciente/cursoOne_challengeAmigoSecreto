let friendNames = [];

function updateFrontList() {
  const list = document.getElementById("listaAmigos");
  list.innerHTML = "";
  for (let i = 0; i < friendNames.length; i++) {
    const li = document.createElement("li");
    li.textContent = friendNames[i];
    list.appendChild(li);
  }
}

function sortearAmigo() {
  if (friendNames.length === 0) {
    alert("Adicione amigos antes de sortear.");
    return;
  }
  const randomIndex = parseInt(Math.random() * friendNames.length);
  const friendName = friendNames[randomIndex];
  friendNames.splice(randomIndex, 1);
  console.log(friendNames);
  const result = document.getElementById("resultado");
  result.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = `O amigo secreto é: ${friendName}`;
  result.appendChild(li);
}

function addFriend() {
  const name = document.getElementById("amigo").value;
  if (name === "") {
    alert("Por favor, insira um nome válido.");
  } else {
    friendNames.push(name);
    document.getElementById("amigo").value = "";
    console.log(friendNames);
    updateFrontList();
  }
}
