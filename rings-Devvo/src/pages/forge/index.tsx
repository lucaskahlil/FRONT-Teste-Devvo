import backgroundImage from '../../assets/BackgroundForja.png';
import { RingForm } from '../../components/forms';
import { Header } from '../../components/header';

export function Forge() {
    return (
        <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Header />

            <div className="ml-20 mr-20 mt-6 mb-6 overflow-hidden">
                <h2 className="font-pattaya text-white text-4xl font-normal leading-tight">Forja</h2>
                <RingForm />
            </div>
        </div>
    )
}