import { Card, CardContent, CardDescription } from "../../ui/card";
import { IRingCardProps } from "./interface";

export function RingCard({ ring }: IRingCardProps) {
    return (
        <Card className="w-96 border border-gray-900 rounded-xl bg-zinc-950">

            <CardContent className="border border-gray-300 rounded-xl flex flex-col gap-5 p-0">
                < img src={ring.image} alt="Imagem do anel" className="h-[270px] rounded-t-xl" />
                <CardDescription className="font-inter text-[16px] font-normal leading-[22.4px] text-left text-yellow-100 flex flex-col gap-3 pl-4 pb-3 pr-4 pt-3">
                    <p><strong>Nome:</strong> {ring.name}</p>
                    <p><strong>Poder:</strong> {ring.power}</p>
                    <p><strong>Portador:</strong> {ring.ringBearer}</p>
                    <p><strong>Forjador:</strong> {ring.forger}</p>
                    <p><strong>Tipo:</strong> {ring.type}</p>
                </CardDescription>
            </CardContent >
        </Card >
    );
}