
import 'app/global.scss'
import styles from './layout.module.scss'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html>
      <head />
      <body>

        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.header__info}>
              <strong>ViaCEP</strong>
            </div>
          </header>

          <main className={styles.main}>
            {children}
          </main>
          
        </div>


      </body>
    </html>
  )
}
