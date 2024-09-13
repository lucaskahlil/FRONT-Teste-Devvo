import { Header } from "../../components/header"
import backgroundImage from "../../assets/BackgroundColection.png"
import { RingCarousel } from "../../components/carousels/RingCarousel"
import { IRingDTOSchema } from "../../types"

export function Colection() {
    const rings: IRingDTOSchema[] = [
        {
            id: 1,
            name: "Anel do Fogo",
            power: "Fogo",
            forger: "Gandalf",
            ringBearer: "Frodo",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSw3Zm06mTNt5FU675Ilp_awLBGWOLkYsww&s",
            type: "HUMAN"
        },
        {
            id: 2,
            name: "Anel do Fogo 2",
            power: "Fogo",
            forger: "Gandalf",
            ringBearer: "Frodo",
            image: "https://images.unsplash.com/photo-1621826081161-5b3f6c1f7d0b",
            type: "HUMAN"
        },
        {
            id: 3,
            name: "Anel do Fogo 3",
            power: "Fogo",
            forger: "Gandalf",
            ringBearer: "Frodo",
            image: "https://images.unsplash.com/photo-1621826081161-5b3f6c1f7d0b",
            type: "HUMAN"
        },
        {
            id: 4,
            name: "Anel do Fogo 4",
            power: "Fogo",
            forger: "Gandalf",
            ringBearer: "Frodo",
            image: "https://images.unsplash.com/photo-1621826081161-5b3f6c1f7d0b",
            type: "HUMAN"
        },
        {
            id: 5,
            name: "Anel do Fogo 5",
            power: "Fogo",
            forger: "Gandalf",
            ringBearer: "Frodo",
            image: "https://images.unsplash.com/photo-1621826081161-5b3f6c1f7d0b",
            type: "HUMAN"
        },
        {
            id: 6,
            name: "Anel do Fogo 6",
            power: "Fogo",
            forger: "Gandalf",
            ringBearer: "Frodo",
            image: "https://images.unsplash.com/photo-1621826081161-5b3f6c1f7d0b",
            type: "HUMAN"
        }
    ]

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
                    <RingCarousel rings={rings} />
                </section>
            </div>
        </div>
    )
}