import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import { IRingCardProps } from "./interface";

export function RingCard({ ring }: IRingCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{ring.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <p>Ring of Power</p>
                    <p>Bearer: Frodo Baggins</p>
                    <p>Forger: Sauron</p>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <p>Power: 1000</p>
            </CardFooter>
        </Card>
    );
}