import {useTranslation} from 'react-i18next'

const changeLanguage = (i18n, language) => {
  window.localStorage.setItem('MY_LANGUAGE', language)
  i18n.changeLanguage(language)
}

const languages = [
  {code: 'en', translateKey: 'english'},
  {code: 'np', translateKey: 'nepali'},
]

export const Header = () => {
  const {t, i18n} = useTranslation()
  return (
    <header>
      <div>
        {languages.map((language) => (
          <button
            data-id={`${language.code}-button`}
            className={i18n.language === language.code ? 'active' : undefined}
            onClick={() => changeLanguage(i18n, language.code)}
            key={language.code}
          >
            {t(language.translateKey)}
          </button>
        ))}
      </div>
    </header>
  )
}
