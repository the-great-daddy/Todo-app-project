import "../style/style.css";
import styles from "./inlineComponent.module.css";
const styleForSecondHeading = {
  color: "crimson",
  style: "bold",
};

export default function InlineComponents() {
  return (
    <div>
      <h1 style={{ color: "seagreen", fontSize: "100px" }}>
        This is a Inline Component!!
      </h1>
      <h1 style={styleForSecondHeading}>This is the second heading!!!</h1>
      <h2 className="header">This another heading!!</h2>
      <h2 className={styles.heading}>
        This is the heading for module styling!!!
      </h2>
    </div>
  );
}
