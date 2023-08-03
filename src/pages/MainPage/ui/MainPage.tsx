import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

const MainPage = () => {
  return <div>
    <Button theme={EButtonTheme.default}>
      Тест кнопки
    </Button>
    <Text>
      main page
    </Text>
  </div>;
};

export default MainPage;
