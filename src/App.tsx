import "./App.css";

/* // WarmUp exercise: elements
export default function App() {
  return (
    <>
      <li>Hello there </li>
      <li>My</li>
      <li>Friends !</li>
    </>
  ) 
}
*/

/* // WarmUp exercise: objects and root
import ZeroTwo from "./assets/ZeroTwo.jpg";
export default function App() {
  // Idea : is that we should not make the url directly in the attribute only in Next Image not in DOM Elements
  // return <img src={"./assets/ZeroTwo.jpg"} height={200} /> 
  return (
    <>
      <h1>Anime:</h1>
      <img src={ZeroTwo} height={200} width={"auto"} />
    </>
  );
}
*/

/* // WarmUp exercise: functions and components as tsx
import ZeroTwo from "./assets/ZeroTwo.jpg";
function Card() {
  return (
    <>
      <h2>Anime: </h2>
      <img src={ZeroTwo} height={200} width={"auto"} />
      <p>bla bla bla</p>
    </>
  );
}
export default function App() {
  return <Card />;
}
  */
/* // WarmUp exercise: files and components as tsx 
import Card from "./Card"; 
  
export default function App() {
  return <Card />;
}
 */

/* // WarmUp exercise: arrays in tsx
 function Cars() {
 // first we have data as array we need to show it
  const cars = [
    "Ford", // 0 or -1
    "Tesla", // 1 or -2
    "Volvo", // 2 or -3
    "BMW", // 3 or -4
    "Mercedes", // 4 or -5
  ];
  // ----- how we think here:
  // Link: https://www.w3schools.com/jsref/jsref_map.asp
  // We seing it like this
  //  return (
  //    <p>Ford</p>
  //    <p>Tesla</p>
  //    ...
  //  )
  // them we seing it like this
  //   return (
  //    <>
  //      <p>{cars[0]}</p>
  //      <p>{cars[1]}</p>
  //      <p>{cars[2]}</p>
  //      <p>{cars[3]}</p>
  //      <p>{cars[4]}</p>
  //    </>
  //  )
  // then we do this :
  //   return (
  //    <>
  //      <p>{cars.map((car) => car)}</p>
  //    </>
  // );
  // then instead of putting string as return of map we return an element
  //  return (
  //    <>
  //      {cars.map((car) => (
  //        <p>car</p>
  //      ))}
  //    </>
  //  );
  // now we should make it return the string of every single element not a spicifique string
  //  return (
  //    <>
  //      {cars.map((car) => (
  //        <p>{car}</p>
  //      ))}
  //    </>
  //  );
  // -----
  // for better practice we can slice this code to be more cleaner by
  const carPtags = cars.map((car) => <p>{car}</p>);
  return <>{carPtags}</>;
}
export default function App() {
  return <Cars />;
}
 */
// WarmUp exercise: object mapping in tsx

/* function PersonDetails() {
  const person = {
    name: "Iron Man",
    age: 30,
    occupation: "Superhero",
    hobby: "Building Suits",
  };

  return (
    <>
      {Object.entries(person).map(([key, value]) => {
        return (
          <div key={key}>
            <h4>{key}</h4>
            <p>{value}</p>
          </div>
        );
      })}
    </>
  );
}

export default function App() {
  return <PersonDetails />;
}
 */
/* // WarmUp exercise: objects in arrays in tsx
function People() {
  const people = [
    { name: "Iron Man", age: 30 },
    { name: "Eren Yeager", age: 18 },
    { name: "Elon Musk", age: 28 },
  ];
  //  this how we should think:
  //  return (
  //  <h1>
  //      <h3>name</h3>
  //      <p>age</p>
  //    </h1>
  //  );
  return (
    <>
      {people.map((person) => {
        return (
          <div>
            <h3>{person.name}</h3>
            <p>{person.age}</p>
          </div>
        );
      })}
    </>
  );
}
export default function App() {
  return <People />;
}
*/
