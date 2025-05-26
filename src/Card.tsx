import ZeroTwo from "./assets/ZeroTwo.jpg";
// We have created this file as component where we can use it in each other files by importing it
// the actually creation of component by declaring function and make it exported normally or as Default function of tsx component

export default function Card() {
  return (
    <>
      <h2>Anime: </h2>
      <img src={ZeroTwo} height={200} width={"auto"} />
      <p>bla bla bla</p>
    </>
  );
}
// if we export function without default it when we re use the function outside the file we gonna name it correctly in curly braces import {Card} from "..."