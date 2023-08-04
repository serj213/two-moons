import { Loader } from 'shared/ui/Loader/Loader';
import cls from './LoaderPage.module.scss';

export const LoaderPage = () => {
  return (
    <div className={cls.loaderPage}>
      <Loader />
    </div>
  );
};
