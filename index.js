// require("dotenv").config();
// const express = require("express");
// // const app = express();
// const cors = require("cors");
// const Note = require("./models/note");
// const { response } = require("express");

const app = require("./app");
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

// // app.use(express.static("build"));
// // app.use(cors());
// // app.use(express.json());

const server = http.createServer(app);

// const errorHandler = (error, request, response, next) => {
//   console.error(error.message);

//   if (error.name === "CastError") {
//     return response.status(400).send({ error: "malformatted id" });
//   } else if (error.name === "ValidationError") {
//     return response.status(400).json({ errror: error.message });
//   }
//   next(error);
// };

// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     date: "2019-05-30T17:30:31.098Z",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only Javascript",
//     date: "2019-05-30T18:39:34.091Z",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     date: "2019-05-30T19:20:14.298Z",
//     important: true,
//   },
// ];

// app.get("/", (request, response) => {
//   response.send("<h1>Hello World!</h1>");
// });

// app.get("/api/notes", (req, res) => {
//   Note.find({}).then((notes) => {
//     res.json(notes);
//   });
// });

// const generateId = () => {
//   const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
//   return maxId + 1;
// };

// app.post("/api/notes", (req, res, next) => {
//   const body = req.body;
//   if (body.content === undefined) {
//     return response.status(400).json({ error: "content missing" });
//   }

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//   });

//   note
//     .save()
//     .then((savedNote) => savedNote.toJSON())
//     .then((savedAndFormattedNote) => {
//       res.json(savedAndFormattedNote);
//     })
//     .catch((error) => next(error));

//   // notes = notes.concat(note);

//   // console.log(req.headers);
//   // res.json(note);
// });

// app.get("/api/notes/:id", (request, response, next) => {
//   Note.findById(request.params.id)
//     .then((note) => {
//       if (note) {
//         response.json(note);
//       } else {
//         response.status(404).end();
//       }
//     })
//     .catch((error) => next(error));
// });

// app.delete("/api/notes/:id", (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then((result) => {
//       response.status(204).end();
//     })
//     .catch((error) => next(error));
// });

// app.put("/api/notes/:id", (request, response, next) => {
//   const body = request.body;

//   const note = {
//     content: body.content,
//     important: body.important,
//   };

//   Note.findByIdAndUpdate(request.params.id, note, { new: true })
//     .then((updatedNote) => {
//       response.json(updatedNote);
//     })
//     .catch((error) => next(error));
// });

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: "unknown endpoint" });
// };

// app.use(unknownEndpoint);

// // this has to be the last loaded middleware.
// app.use(errorHandler);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
