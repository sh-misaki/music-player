export interface IProps {
  color?: "primary" | "secondary" | "error";
  variant?: 'dot';
  badgeContent: number;
  max: number;
  showZero?: boolean;
  invisible?: boolean;
  isShow?: boolean;
}
