const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewNote,
  validateNote,
} = require("../lib/notes");
const { notes } = require("../data/animals");
const { TestWatcher } = require("jest");

//test out without effecting json file
jest.mock("fs");

test("create a note object", () => {
  const note = createNewNote({ title: "some notes", id: "7" }, notes);

  expect(note.title).toBe("some notes");
  expect(note.id).toBe("7");
});

test("filters by query", () => {
  const startingNote = [
    {
      id: "1",
      title: "Monday",
      text: "Go to meeting",
    },
    {
      id: "2",
      title: "Wednesday",
      text: "Lunch meeting",
    },
  ];

  const updatedNotes = filterByQuery({ text: "Lunch meeting" }, startingNotes);

  expect(updatedNotes.length).toEqual(1);
});

test("finds by id", () => {
  const startingNotes = [
    {
      id: "1",
      title: "Monday",
      text: "Go to meeting",
    },
    {
      id: "2",
      title: "Wednesday",
      text: "Lunch meeting",
    },
  ];

  const result = findById("2", startingNotes);

  expect(result.title).toBe("Lunch meeting");
});

test("validates notes", () => {
  const note = {
    id: "2",
    title: "Wednesday",
    text: "Lunch meeting",
  };

  const invalidNote = {
    id: "2",
    title: "Wednesday",
    text: "Lunch meeting",
  };

  const result = validateNote(note);
  const result2 = validateNote(invalidNote);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
