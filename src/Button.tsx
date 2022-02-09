import styles from "./Button.module.css"

const Button = ({text}: { text: string }) => (
    <button className={styles.btn}>
        {text}
    </button>
)

export default Button;