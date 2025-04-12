import React from "react";
import { Book, Library } from "../components/book";
import ringimage from "../assets/Rings.gif";
import hobbitringimage from "../assets/Hobbit.jpg";
import gotimage from "../assets/GOT.jpg";
import mistimage from "../assets/Mistborn.jpg";
import narniaimage from "../assets/Narnia.jpg";
import eyeimage from "../assets/TheEye.jpg";
import "../App.css";

const booksData = [
  {
    id: 1,
    name: "The Lord of the Rings",
    img: ringimage,
    author_span: "Author:",
    author: "J. R. R. Tolkien",
    description_span: "Description:",
    description:
      "The Lord of the Rings is an epic fantasy novel by J.R.R. Tolkien. It follows Frodo Baggins, a hobbit tasked with destroying a powerful ring that could enslave Middle-earth. With allies from various races, he journeys through perilous lands, facing dark forces led by the Dark Lord Sauron.",
    genre_span: "Genre:",
    genre: ["High fantasy,", "Adventure"],
    collection: [
      "The Fellowship of the Ring",
      "The Two Towers",
      "The Return of the King",
    ],
  },
  {
    id: 2,
    name: "The Hobbit",
    img: hobbitringimage,
    author_span: "Author:",
    author: "J. R. R. Tolkien",
    description_span: "Description:",
    description:
      "The Hobbit by J.R.R. Tolkien is a fantasy adventure following Bilbo Baggins, a reluctant hobbit who joins a group of dwarves on a quest to reclaim their homeland from the dragon Smaug. Along the way, he faces trolls, goblins, and discovers a magical ring that changes his destiny.",
    genre_span: "Genre:",
    genre: ["High fantasy,", "Adventure"],
    collection: [
      "An Unexpected Journey",
      "The Desolation of Smaug",
      "The Battle of the Five Armies",
    ],
  },
  {
    id: 3,
    name: "A Song of Ice and Fire",
    img: gotimage,
    author_span: "Author:",
    author: "George R. R. Martin",
    description_span: "Description:",
    description:
      "“A Song of Ice and Fire” is an epic fantasy series by George R.R. Martin, set in the brutal world of Westeros. It weaves political intrigue, war, and magic through the lives of noble families vying for the Iron Throne. The story is rich, unpredictable, and full of unforgettable characters.",
    genre_span: "Genre:",
    genre: ["High fantasy"],
    collection: [
      "A Game of Thrones",
      "A Clash of Kings",
      "A Storm of Swords",
      "A Feast for Crows",
      "A Dance with Dragons",
      "The Winds of Winter",
      "A Dream of Spring",
    ],
  },
  {
    id: 4,
    name: "Mistborn",
    img: mistimage,
    author_span: "Author:",
    author: "Brandon Sanderson",
    description_span: "Description:",
    description:
      "Mistborn by Brandon Sanderson is a gripping fantasy novel set in a world shrouded in ash and ruled by a tyrant. It follows Vin, a street urchin who discovers she’s a powerful Mistborn, capable of magic through metals. She joins a rebellion to overthrow the oppressive Lord Ruler.",
    genre_span: "Genre:",
    genre: ["High fantasy"],
    collection: [
      "The Final Empire",
      "The Well of Ascension",
      "The Hero of Ages",
      "The Alloy of Law",
      "Shadows of Self",
      "The Bands of Mourning",
    ],
  },
  {
    id: 5,
    name: "The Wheel of Time",
    img: eyeimage,
    author_span: "Author:",
    author: "Robert Jordan",
    description_span: "Description:",
    description:
      "The Wheel of Time is an epic fantasy series by Robert Jordan, beginning with The Eye of the World. It follows Rand al’Thor and his friends as they’re swept into a battle between Light and Shadow. Rich in world-building, prophecy, and magic, the series explores destiny, heroism, and the eternal struggle between good and evil.",
    genre_span: "Genre:",
    genre: ["High fantasy"],
    collection: [
      "The Eye of the World",
      "The Great Hunt",
      "The Dragon Reborn",
      "The Shadow Rising",
      "The Fires of Heaven",
      "Lord of Chaos",
      "A Crown of Swords",
      "The Path of Daggers",
      "Winter's Heart",
      "Crossroads of Twilight",
      "Knife of Dreams",
      "The Gathering Storm",
      "Towers of Midnight",
      "A Memory of Light",
    ],
  },
  {
    id: 6,
    name: "The Chronicles of Narnia",
    img: narniaimage,
    author_span: "Author:",
    author: "C. S. Lewis",
    description_span: "Description:",
    description:
      "The Chronicles of Narnia by C.S. Lewis is a beloved fantasy series that follows children who discover a magical world called Narnia. Filled with talking animals, epic battles, and deep allegories, the books explore themes of bravery, friendship, and good versus evil across seven captivating adventures.",
    genre_span: "Genre:",
    genre: ["High fantasy,", "Adventure"],
    collection: [
      "The Lion, the Witch and the Wardrobe",
      "Prince Caspian",
      "The Voyage of the Dawn Treader",
      "The Silver Chair",
      "The Horse and His Boy",
      "The Magician's Nephew",
      "The Last Battle",
    ],
  },
];

const BooksPages = () => {
  function action(name, collection) {
    const numericCollection = collection.map(
      (i, index) => `${index + 1}. ${i}`
    );
    alert(
      `the collection in ${name} series are: \n${numericCollection.join("\n")}`
    );
    numericCollection.map((book) => console.log(book));
  }

  return (
    <Library title={"Fantasy books"}>
      {booksData.map((book) => (
        <Book
          key={book.id}
          name={book.name}
          img={book.img}
          author_span={book.author_span}
          author={book.author}
          description_span={book.description_span}
          description={book.description}
          genre_span={book.genre_span}
          genre={book.genre}
          collection={book.collection}
          action={action}
        />
      ))}
    </Library>
  );
};

export default BooksPages;
