import { Header } from "../../components/header"
import backgroundImage from "../../assets/BackgroundColection.png"
import { RingCarousel } from "../../components/carousels/RingCarousel"

export function Colection() {

    return (
        <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Header />
            <div>
                <section className="ml-20 mr-20 mt-6 mb-6">
                    <h2 className="font-pattaya text-white text-4xl font-normal leading-tight">Coleção</h2>
                </section>

                <section className=" mpt-6 pb-6 pt-6 w-full h-full flex align-middle justify-center overflow-hidden ">
                    <RingCarousel />
                </section>
            </div>
        </div>
    )
}