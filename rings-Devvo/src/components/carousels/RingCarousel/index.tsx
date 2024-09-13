import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick";
import { ErrorCard, RingCard } from "../../cards";
import { useGetAllRings } from "../../../hooks";
import { Loading } from '../../loading';

function NextArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-next-arrow`}
            style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-prev-arrow`}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

export function RingCarousel() {
    const { rings, loading, AllRingsError } = useGetAllRings();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    if (loading) {
        return <Loading />;
    }

    if (AllRingsError) {
        return <ErrorCard message={AllRingsError} />;
    }

    return (
        <>
            <Slider {...settings} className="overflow-hidden">
                {rings.map((ring) => (
                    <div key={ring.id} className="flex justify-center">
                        <RingCard ring={ring} />
                    </div>
                ))}
            </Slider>
        </>
    );
}
