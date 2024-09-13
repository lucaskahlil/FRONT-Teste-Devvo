export interface IEditRingModalProps {
  RingId: number;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  maxWidth?: number;
  style?: React.CSSProperties;
}
