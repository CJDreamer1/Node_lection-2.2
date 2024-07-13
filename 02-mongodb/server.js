import express from "express";

import { initDBConnection } from "./db.js";
import { Student } from "./models/student.js";

const app = express();

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find(); //метод .find потрібен, щоб викликати всі елементи колекції
    res.send(students);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    const user = await Student.findById(studentId);
    console.log({ user });
    if (user === null) {
      return res.status(404).send({ status: 404, message: "User not found" });
    }
    res.send({ status: 200, data: user });
  } catch (error) {
    console.error(error);
  }
});

async function bootstrap() {
  try {
    await initDBConnection();

    app.listen(8080, () => {
      console.log("server started on port 8080");
    });
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
