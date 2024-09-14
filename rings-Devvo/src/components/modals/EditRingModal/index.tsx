import { Modal } from "antd";
import { IEditRingModalProps } from "./interface";
import { EditRingForm } from "../../forms/EditRingForm";

export function EditRingModal({ RingId, isOpen, onClose, title = "Editar Anel" }: IEditRingModalProps) {

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={title}
            footer={false}
        >
            <EditRingForm ringId={RingId} onClose={onClose} />
        </Modal>
    )
}