
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>

      <form className={styles.form}>
        <input type="number" placeholder="Digite um cep para a pesquisa" />
        <button type='submit'>BUSCAR</button>
      </form>

      <main className={styles.main}>
        <div className={styles.tabela__info}>
          <span>RUA</span>
          <span>BAIRRO</span>
          <span>CIDADE</span>
          <span>UF</span>
          <span>COMPLEMENTO</span>
          <span>DDD</span>
        </div>
      </main>

    </div>
  )
}
