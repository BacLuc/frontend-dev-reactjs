import React from "react";
import renderer from "react-test-renderer";
import { DishDetail } from "./DishDetail";

const dish = {
  id: 0,
  name: "Uthappizza",
  image: "assets/images/uthappizza.png",
  category: "mains",
  label: "Hot",
  price: "4.99",
  description:
    "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
  comments: [
    {
      id: 0,
      rating: 5,
      comment: "Imagine all the eatables, living in conFusion!",
      author: "John Lemon",
      date: "2012-10-16T17:57:28.556094Z",
    },
    {
      id: 1,
      rating: 4,
      comment:
        "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
      author: "Paul McVites",
      date: "2014-09-05T17:57:28.556094Z",
    },
  ],
};

it("renders correctly", () => {
  const tree = renderer.create(<DishDetail dish={dish} />).toJSON();
  expect(tree).toMatchSnapshot();
});
