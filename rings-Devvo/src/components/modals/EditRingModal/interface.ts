export interface IEditRingModalProps {
  RingId: string;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  maxWidth?: number;
  style?: React.CSSProperties;
}
