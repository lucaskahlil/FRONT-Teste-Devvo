import { Modal } from "antd";
import { IEditRingModalProps } from "./interface";
import { Loading } from "../../loading";
import { ErrorCard } from "../../cards";
import { useGetRingById } from "../../../hooks";
import { EditRingForm } from "../../forms/EditRingForm";

export function EditRingModal({ RingId, isOpen, onClose, title = "Editar Anel" }: IEditRingModalProps) {
    const { ring, isloadingRing, errorRing } = useGetRingById(RingId || 0);

    if (isloadingRing) {
        return <Loading />
    }

    if (errorRing) {
        return <ErrorCard message={errorRing} />
    }
    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={title}
            footer={false}
        >
            <div>Tem Certeza que deseja excluir o anel <strong>{ring?.name}</strong></div>
            <EditRingForm ringId={RingId} onClose={onClose} />
        </Modal>
    )
}