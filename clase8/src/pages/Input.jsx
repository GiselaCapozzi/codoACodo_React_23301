import styles from '../styles/input.module.css';

const Input = () => {

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        name=""
        id=""
        placeholder="Buscar..." />
    </div>
  )
}

export default Input