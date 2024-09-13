import { IErrorCardProps } from "./interface";

export function ErrorCard({ message }: IErrorCardProps) {
    return (
        <div className="flex justify-center items-center h-40">
            <h1 className="text-red-500">{message}</h1>
        </div>
    );
}