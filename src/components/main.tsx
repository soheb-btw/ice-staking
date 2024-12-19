import Description from "./description";
import Highlights from "./highlights";
import Projects from "./projects";
import Resources from "./resources";

const Main = () => {
    return (
        <div className="mx-10 sm-lg:mx-auto gap-10 sm-lg:max-w-[850px] flex flex-col sm-lg:gap-[120px]">
            <Description />
            <Highlights />
            <Projects />
            <Resources />
        </div>
    )
}

export default Main;