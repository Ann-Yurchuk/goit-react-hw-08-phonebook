import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { useUser } from 'hooks';
import { Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useUser();
  return (
    <div>
      <p>Welcome, {user.name.toUpperCase()} </p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
