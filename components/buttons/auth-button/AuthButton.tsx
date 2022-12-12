import { useContext } from 'react';
import AuthContext from '../../../context/auth/AuthContext';

export interface IAuthButton extends React.ComponentPropsWithoutRef<'button'> {}

const AuthButton: React.FC<IAuthButton> = ({ className, ...buttonProps }) => {
  const { authenticated, login, logOut } = useContext(AuthContext);

  return (
    <button
      onClick={authenticated ? logOut : login}
      className="btn-primary"
      {...buttonProps}
    >
      {authenticated ? 'Sign Out' : 'Sign In'}
    </button>
  );
};

export default AuthButton;
