import backgroundImage from "../../assets/BackgroundInicial.png"
import { Header } from "../../components/header"
import { Button } from "../../components/ui/button"

export function Home() {
    return (
        <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Header />
            <div className="max-w-[600px] pl-20 flex flex-col align-middle gap-6">
                <h2 className="font-pattaya text-white text-4xl font-normal leading-tight">Início</h2>
                <p className="font-inter text-[16px] font-medium leading-[28px] text-justify text-white">Aventureiro, está pronto para forjar seus próprios Anéis de Poder? Embarque na jornada de um mestre ourives e crie artefatos lendários, imbuídos com magia e força! Cada anel é único, forjado com suor, coragem e a chama da aventura. Escolha seus materiais, defina seus poderes e escreva sua própria lenda! Só os mais ousados conseguem controlar o poder que criam. Você está preparado?</p>
                <Button className="bg-yellow-100 text-black hover:text-white">Forjar Agora</Button>
            </div>
        </div>
    )
}