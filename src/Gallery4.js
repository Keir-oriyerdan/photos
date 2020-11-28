import React from "react";
import "./Gallery2.css";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: "01.jpg",
    thumbnail: "01.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "02.jpg",
    thumbnail: "02.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "01.jpg",
    thumbnail: "01.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];

render(<Gallery images={IMAGES} />, document.getElementById("example-0"));
