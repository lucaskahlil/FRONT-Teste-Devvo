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
    const { data: rings, isLoading, isError, error } = useGetAllRings();

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

    if (isLoading) {
        return <Loading />;
    }

    if (isError && error instanceof Error) {
        return <ErrorCard message={error.message} />;
    }

    return (
        <>
            <Slider {...settings} className="overflow-hidden">
                {rings?.map((ring) => (
                    <div key={ring._id} className="flex justify-center">
                        <RingCard ring={ring} />
                    </div>
                ))}
            </Slider>
        </>
    );
}
