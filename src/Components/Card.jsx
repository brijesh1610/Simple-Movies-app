import Images from "./Images";
import Heading from "./Heading";

export default function Card(props) {

    return (
        <>
            <div className="cards">
                <div className="card">
                    <Images img={props.img} />
                    <div className="card_info ">
                        <span className="card_category ">{props.title}</span>
                        <Heading sname={props.sname} />
                        <a href={props.link}>
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}