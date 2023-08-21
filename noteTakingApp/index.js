const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const noteList = document.getElementById("noteList");

addNoteBtn.addEventListener("click", addNote);
clearAllBtn.addEventListener("click", clearAllNotes);
noteList.addEventListener("click", handleNoteActions);

function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    const noteElement = createNoteElement(noteText);
    noteList.appendChild(noteElement);
    noteInput.value = "";
  }
}

function createNoteElement(text) {
  const noteElement = document.createElement("li");
  noteElement.className = "note";

  const textSpan = document.createElement("span");
  textSpan.textContent = text;
  noteElement.appendChild(textSpan);

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";
  noteElement.appendChild(deleteButton);

  const timestampSpan = document.createElement("span");
  timestampSpan.className = "timestamp";
  timestampSpan.textContent = getFormattedTimestamp();
  noteElement.appendChild(timestampSpan);

  return noteElement;
}

function getFormattedTimestamp() {
  const now = new Date();
  return now.toLocaleString();
}

function handleNoteActions(event) {
  if (event.target.classList.contains("delete-btn")) {
    const shouldDelete = confirm("Are you sure you want to delete this note?");
    if (shouldDelete) {
      event.target.closest(".note").remove();
    }
  }
}

function clearAllNotes() {
  const shouldClearAll = confirm("Are you sure you want to clear all notes?");
  if (shouldClearAll) {
    while (noteList.firstChild) {
      noteList.removeChild(noteList.firstChild);
    }
  }
}
