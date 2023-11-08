import "./App.css";
import Card from "./Components/Card";
import SData from "../src/Components/SData";
import Netflix from "./Components/Netflix";
import Amazon from "./Components/Amazon";

// const favSeries = "netflix";
//chosing from here
// const FavS = () => {
//   if (favSeries == "netflix") {
//     return <Netflix />;
//   } else {
//     return <Amazon />;
//   }
// };

function App() {
  return (
    <div>
      <div className="heading_style">
        <h1>Movies</h1>
      </div>
      {SData.map(
        (
          item,
          index //using html use()
        ) => (
          <Card
            key={item.id}
            img={item.imgscr}
            title={item.title}
            sname={item.sname}
            link={item.link}
          />
        )
      )}
      {/* {favSeries == "netflix" ? <Netflix /> : <Amazon />} */}
    </div>
  );
}

export default App;

/* 
{
   <Card
        img={SData[0].imgscr}
        title={SData[0].title}
        sname={SData[0].sname}
        link={SData[0].link}
      />

   <Card
        img={SData[1].imgscr}
        title={SData[1].title}
        sname={SData[1].sname}
        link={SData[1].link}
      />
      <Card
        img={SData[2].imgscr}
        title={SData[2].title}
        sname={SData[2].sname}
        link={SData[2].link}
      />
      <Card
        img={SData[3].imgscr}
        title={SData[3].title}
        sname={SData[3].sname}
        link={SData[3].link}
      />
}
*/
