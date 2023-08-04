import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <Button theme={EButtonTheme.default}>{t('test')}</Button>

      <Button onClick={changeLanguage}>{t('changeLanguage')}</Button>
      <Text>main page</Text>
    </div>
  );
};

export default MainPage;
