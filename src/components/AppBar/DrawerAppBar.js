import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { UserNav } from '../UserNav/UserNav';
import { useUser } from 'hooks';
import { Header } from './DrawerAppBar.styled';

const DrawerAppBar = () => {
  const { isLoggedIn } = useUser();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <UserNav />}
    </Header>
  );
};
export default DrawerAppBar;
