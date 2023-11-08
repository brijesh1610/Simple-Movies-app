import SData from "./SData";
import Card from "./Card";


function Amazon() {
    return (
        <Card
            key={SData[4].id}
            img={SData[4].imgscr}
            title={SData[4].title}
            sname={SData[4].sname}
            link={SData[4].link}
        />
    );
}

export default Amazon;