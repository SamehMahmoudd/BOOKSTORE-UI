import { useTranslation, Trans } from 'react-i18next';

// const lngs = {
//   en: { nativeName: 'English' },
//   ar: { nativeName: 'Arabic' }
// };

function Test() {
  
  const { t , i18n} = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App text-center m-5">
      <header className="App-header">
        {/* <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div> */}
        <button type="button" onClick={() => changeLanguage('ar')}>
          ar
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
        <p>
          <Trans i18nKey="description">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">{t('learn')}
        </a>
      </header>
    </div>
  );
}
export default Test;