import cn from 'classnames'
import { Text } from 'shared/ui/Text/Text';
import cls from './PageError.module.scss'

export const PageError = () => {
  return <div className={cn(cls.errorPage)}>
   <Text>
      Произошла ошибка
   </Text>
  </div>;
};
