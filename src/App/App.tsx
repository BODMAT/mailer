import { Header } from '../Header/Header'
import { MailBlock } from '../MailBlock/MailBlock'
import './App.scss'

export function App() {
  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <Header />
        <MailBlock />
      </div>
    </div>
  )
}
