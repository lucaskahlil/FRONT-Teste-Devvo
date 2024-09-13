export interface IDeleteRingModalProps {
  RingId: number;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  maxWidth?: number;
}
