import styles from "./BubbleText.module.scss";

interface BubbleTextProps {
  children: string;
}

const BubbleText: React.FC<BubbleTextProps> = ({ children }) => {
  return (
    <h2 className={styles.BubbleText}>
      {children.split("").map((letter, idx) => (
        <span className={styles.HoverText} key={idx}>
          {letter}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
