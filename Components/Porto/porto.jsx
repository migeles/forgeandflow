import Portoslider from "./Portoslider";

export default function Porto() {
    return (
        <div className="w-full h-screen flex flex-col lg:flex-row bg-white px-6 pt-7 gap-5">
            <div className="">
                <h1 className="neue-medium text-xl">
                    Brands We Worked With
                </h1>
            </div>
            <div className="">
                <Portoslider />
            </div>
        </div>
    );
}