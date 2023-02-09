'use client'

import { FormEvent } from 'react'
import styles from './page.module.scss'
import { ViaCep } from './viacep'

export default function HomePage() {

  const handleButtonBuscar = async (event: FormEvent) => {
    event.preventDefault()
    const response = await ViaCep(68730000)

    if(response) {
      console.log(response)
      localStorage.setItem('cep', 'teste')
    }

  }


  return (
    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleButtonBuscar}>
        <input 
          type="number" 
          placeholder="Digite um cep para a pesquisa" />
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
