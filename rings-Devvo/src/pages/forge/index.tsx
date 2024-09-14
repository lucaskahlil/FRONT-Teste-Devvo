import backgroundImage from '../../assets/BackgroundForja.png';
import RingForm from '../../components/forms/RingForm';
import { Header } from '../../components/header';

export function Forge() {
    return (
        <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Header />

            <div className="px-4 md:px-20 mt-6 mb-6 overflow-hidden">
                <h2 className="font-pattaya text-white text-4xl font-normal leading-tight text-center md:text-left">Forja</h2>
                <RingForm />
            </div>
        </div>
    );
}