import { Button } from "../../ui/button";
import { Card, CardContent, CardDescription } from "../../ui/card";
import { IRingCardProps } from "./interface";
import { GiClawHammer } from "react-icons/gi";
import { BsTrash3 } from "react-icons/bs";
import { DeleteRingModal, EditRingModal } from "../../modals";
import { useState } from "react";


export function RingCard({ ring }: IRingCardProps) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const openModalDelete = () => { setIsDeleteModalOpen(true) };
    const closeModalDelete = () => { setIsDeleteModalOpen(false) };

    const openModalEdit = () => { setIsEditModalOpen(true) };
    const closeModalEdit = () => { setIsEditModalOpen(false) };

    return (
        <>
            <Card className="w-96 border border-gray-900 rounded-xl bg-zinc-950">

                <CardContent className="border border-gray-300 rounded-xl flex flex-col gap-5 p-0">
                    <img src={ring.image} alt="Imagem do anel" className="h-[270px] rounded-t-xl" />
                    <div className="flex flex-row justify-center gap-4">
                        <Button variant={"ghost"} onClick={openModalEdit}><GiClawHammer className="text-yellow-100 text-[24px]" /></Button>
                        <Button variant={"ghost"} onClick={openModalDelete}><BsTrash3 className="text-red-400 text-[24px]" /></Button>
                    </div>
                    <CardDescription className="font-inter text-[16px] font-normal leading-[22.4px] text-left text-yellow-100 flex flex-col gap-3 pl-4 pb-3 pr-4 pt-3">
                        <p><strong>Nome:</strong> {ring.name}</p>
                        <p><strong>Poder:</strong> {ring.power}</p>
                        <p><strong>Portador:</strong> {ring.ringBearer}</p>
                        <p><strong>Forjador:</strong> {ring.forger}</p>
                        <p><strong>Tipo:</strong> {ring.type}</p>
                    </CardDescription>
                </CardContent >
            </Card >

            <DeleteRingModal
                isOpen={isDeleteModalOpen}
                onClose={closeModalDelete}
                RingId={ring._id}
                RingName={ring.name}
            />

            <EditRingModal
                isOpen={isEditModalOpen}
                onClose={closeModalEdit}
                RingId={ring._id}
            />
        </>
    );
}