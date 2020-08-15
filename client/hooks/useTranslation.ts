import { useContext } from 'react'
import { LocaleContext } from '../context/LocaleContext'
import { defaultLocale } from '../translations/config'

export default function useTranslation() {
  const { locale } = useContext(LocaleContext)

  function t(value: any, key: string) {

    const translationLocal = value[`${key}_${locale}`];

    if (!translationLocal) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`)
    }

    return translationLocal || value[`${key}_${defaultLocale}`] || '';
  }

  return {
    t,
    locale
  }
}