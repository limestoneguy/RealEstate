import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Face.scss';



export default function Face() {
    return (
        <div className="container mx-auto mt-20 grid sm:grid-cols-2 gap-x-8 px-3 ">
            <div className="sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 items-center w-full grid grid-cols-2 gap-3">
                <div className="row-span-2">
                    <Card image_url="https://via.placeholder.com/500" />
                </div>
                <Card image_url="https://via.placeholder.com/500" />
                <Card image_url="https://via.placeholder.com/500" />
            </div>
            <div className="mt-16 sm:mt-0">
                <h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-4xl text-dark font-bold">Find Your Best <br /> Smart Real <br /> Estate</h1>
                <p className="mt-5 font-bold text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam nisi esse facere, ea impedit a nihil harum eos laboriosam, cumque perspiciatis.</p>
                <div className="p-3 rounded-xl flex items-center bg-white mt-6 justify-items-stretch gap-x-2">
                    <div className="text-gray-400">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input className="bg-transparent w-full px-1" placeholder="Search for location" type="text" />
                    <button className="rounded-xl bg-green-400 min-w-max py-2 px-4 text-sm text-dark font-bold">Find Now</button>
                </div>
                <div className="flex items-center gap-10 mt-10 font-bold text-dark">
                    <div className="flex gap-2">
                        <h2 className="text-4xl">25+</h2>
                        <p className="text-sm align-text-top ">Years of <br />Experience</p>
                    </div>
                    <p className="text-3xl">|</p>
                    <div className="flex gap-2">
                        <h2 className="text-4xl">10+</h2>
                        <p className="text-sm align-text-top">Awards<br />Won</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Card(prop: { image_url: string }) {
    return (
        <div className="wrapper p-4 rounded-xl border-white border-2 overflow-hidden w-full ml-auto">
            <img src={prop.image_url} className="rounded-xl bg-cover" alt="" />
        </div>
    );
}