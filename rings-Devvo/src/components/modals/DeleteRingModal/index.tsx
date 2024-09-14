import { Button, Modal } from 'antd';
import { IDeleteRingModalProps } from './interface';
import { useDeleteRing, useGetRingById } from '../../../hooks';
import { Loading } from '../../loading';
import { ErrorCard } from '../../cards';

export function DeleteRingModal({
    RingId,
    isOpen,
    onClose,
    title = "Deletar Anel",
}: IDeleteRingModalProps) {
    const { ring, isloadingRing, errorRing } = useGetRingById(RingId);
    const { deleteRing, isDeleteloading } = useDeleteRing();

    const handleDelete = async () => {
        try {
            await deleteRing(RingId);
            if (onClose) {
                onClose();
            }
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={title}
            footer={false}
        >
            {errorRing ? (
                <ErrorCard message={errorRing} />
            ) : isloadingRing ? (
                <Loading />
            ) : (
                <>Tem Certeza que deseja excluir o anel <strong>{ring?.name}</strong>?</>
            )}
            <div className='w-full flex flex-row justify-end mt-6 gap-3'>
                <Button disabled={isDeleteloading} onClick={onClose}>Cancelar</Button>
                <Button disabled={!!errorRing} loading={isDeleteloading} onClick={handleDelete}>Excluir</Button>
            </div>
        </Modal>
    )
}