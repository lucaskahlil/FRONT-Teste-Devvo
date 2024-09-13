
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export function Header() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row align-middle justify-between pt-6 pb-6 pl-20 pr-20 bg-transparent">
            <h1 className="font-pattaya text-white text-lg">Os anéis de poder</h1>
            <div className="flex gap-4">

                <Button
                    className="bg-transparent"
                    onClick={() => navigate('/')}
                >
                    Início
                </Button>

                <Button
                    className="bg-transparent"
                    onClick={() => navigate('/colection')}
                >
                    Coleção
                </Button>

                <Button
                    className="bg-transparent"
                    onClick={() => navigate('/forge')}
                >
                    Forja
                </Button>

            </div>
        </div>
    )
}
