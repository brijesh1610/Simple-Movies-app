import SData from "./SData";
import Card from "./Card";

const Netflix = () => {
    return (
        <Card
            key={SData[1].id}
            img={SData[1].imgscr}
            title={SData[1].title}
            sname={SData[1].sname}
            link={SData[1].link}
        />
    );
}


export default Netflix