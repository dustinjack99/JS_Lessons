const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const food = [
  {
    route: "mushroom-burger",
    name: "Mushroom burger",
    type: "Sandwich",
    side: "Fries",
    cost: 11.5,
  },
  {
    route: "fried-chicken",
    name: "Fried chicken",
    type: "Platter",
    side: "Mashed potatoes",
    cost: 14.5,
  },
  {
    route: "bean-burrito",
    name: "Bean burrito",
    type: "Wrap",
    side: "Chips and salsa",
    cost: 12.5,
  },
];
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "hw.html"));
});

app.get("/api/foods/:food", (req, res) => {
  console.log(req.params.food);

  for (let i = 0; i < food.length; i++) {
    if (req.params.food === food[i].route) {
      return res.json(food[i]);
    }
  }

  return res.status(404).send("No Character!");
});

app.post("/api/foods", (req, res) => {
  const newfood = req.body;

  console.log(newfood);

  foods.push(newfood);

  res.json(newfood);
});

app.get("/api/foods", (req, res) => {
  res.json(foods);
});

app.listen(port, () => console.log(`App is running on port: ${port}`));
