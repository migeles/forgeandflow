import Footerimage from "./Footerimage";
import Footercontent from "./Footercontent";

export default function Footer() {
    return (
        <div className="w-full h-full flex flex-col bg-black mt-32 lg:mt-64">
            <div className="h-[30vh] md:h-[60vh]">
                <Footerimage/>
            </div>
            <div className="h-full">
                <Footercontent/>
            </div>
        </div>
    );
}