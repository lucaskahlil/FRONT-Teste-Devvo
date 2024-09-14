export interface IDeleteRingModalProps {
  RingId: string;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  maxWidth?: number;
}
