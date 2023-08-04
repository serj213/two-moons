import cn from 'classnames'
import { Text } from 'shared/ui/Text/Text';
import cls from './PageError.module.scss'

const PageError = () => {
  return <div className={cn(cls.errorPage)}>
   <Text>
      Произошла ошибка
   </Text>
  </div>;
};

export default PageError;
