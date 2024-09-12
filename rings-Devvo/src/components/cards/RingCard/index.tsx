import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { IRingCardProps } from "./interface";

export function RingCard({ ring }: IRingCardProps) {
    return (
        <Card className="max-w-52">
            <CardHeader>
                <CardTitle>{ring.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <img src={ring.image} alt="Imagem do anel" />
                <CardDescription>
                    <p>Power: {ring.power}</p>
                    <p>Bearer: {ring.ringBearer}</p>
                    <p>Forger: {ring.forger}</p>
                </CardDescription>
            </CardContent>
        </Card>
    );
}