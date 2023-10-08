function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function resetPosition(event) {
  const item = event.target;
  const unrankedDropZone = document.getElementById('unranked-drop-zone');
  unrankedDropZone.appendChild(item);
}