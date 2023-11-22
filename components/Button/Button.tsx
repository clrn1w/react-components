import Link from "next/link";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  url?: string;
}

const Button: React.FC<ButtonProps> = ({ text, url = "/" }) => (
  <Link href={url}>
    <button className={styles.Button}>{text}</button>
  </Link>
);

export default Button;
