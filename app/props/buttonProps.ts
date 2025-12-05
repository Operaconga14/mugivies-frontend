export interface ButtonProps {
  text?: string;
  classname?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}
