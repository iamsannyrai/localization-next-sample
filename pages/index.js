import {Header} from '../components/header'
import {useTranslation} from 'react-i18next'


const HomePage = () => {
  const {t} = useTranslation()
  return (
    <>
      <Header/>
      <main>
        <h1>{t('greeting')}</h1>
      </main>
    </>
  )
}

export default HomePage
