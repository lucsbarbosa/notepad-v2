const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = "./data/data.json";

app.set("json spaces", 2);
app.use(express.json());
app.use(cors());

app.get("/:username", (req, res) => {
  const params = req.params.username;
  const password = req.query.password;
  fs.readFile(path, (err, file) => {
    if (err) {
      res.json({ error: 400 });
      return;
    }
    const data = JSON.parse(file);
    data.forEach((user) => {
      if (user.username == params && user.password == password) {
        res.json({ id: user.id, username: user.username, notes: user.notes });
        return;
      }
    });
  });
});

app.post("/:userId", (req, res) => {
  const id = req.params.userId;
  const note = req.body.note;

  fs.readFile(path, (err, file) => {
    if (err) {
      res.json({ error: 400 });
      return;
    }
    const data = JSON.parse(file);
    data.forEach((user) => {
      if (user.id == id) {
        user.notes.push(note);
      }
    });
  });
});

app.put("/:userId", (req, res) => {
  const id = req.params.userId;
  const noteId = req.query.noteId;
  const update = req.body.update;

  fs.readFile(path, (err, file) => {
    if (err) {
      res.json({ error: 400 });
      return;
    }
    const data = JSON.parse(file);

    data.forEach((user) => {
      if (user.id == id) {
        user.notes.forEach((note) => {
          if (note.noteId == noteId) {
            note = { ...note, ...update };
          }
        });
      }
    });
  });
});

app.delete("/:userId", (req, res) => {
  const id = req.params.userId;
  const noteId = req.query.noteId;

  fs.readFile(path, (err, file) => {
    if (err) {
      res.json({ error: 400 });
      return;
    }
    const data = JSON.parse(file);

    data.forEach((user) => {
      if (user.id == id) {
        let noteIndex;
        for (let i = 0; i < user.notes.length; i++) {
          if (user.notes[i].noteId == noteId) {
            noteIndex = i;
          }
        }
        user.notes.splice(noteId, 1);
      }
    });
  });
});

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});
