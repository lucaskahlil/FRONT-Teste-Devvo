export interface IDeleteRingModalProps {
  RingName?: string;
  RingId: string;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  maxWidth?: number;
}
