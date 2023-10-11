import globalTranslation from '../translations/Global.translation';
import homeTranslation from '../translations/Home.translation';
import listTranslation from '../translations/List.translation';
import orderTranslation from '../translations/Order.translation';
import useApp from './App.hook';

function useTranslation() {
  const [state] = useApp();
  const {language} = state;

  const t = {
    global: globalTranslation[language],
    home: homeTranslation[language],
    list: listTranslation[language],
    order: orderTranslation[language],
  };

  return {t, language};
}

export default useTranslation;
