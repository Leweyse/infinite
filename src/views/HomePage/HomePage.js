import { Article } from "../../components";
import img from '../../assets/standing.gif';

function HomePage(props) {
    return (
        <section className="home">
            <Article src={img} />
        </section>
    )
}

export default HomePage;