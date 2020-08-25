import { DropdownMenu, DropdownItem } from 'reactstrap';
import { useCurrentUser } from '../../lib/hooks';

export const LoggedInDropdownMenu = () => {
  const [, { mutate }] = useCurrentUser();

  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);
  };

  return (
    <DropdownMenu right>
      <DropdownItem>
        Option 1
      </DropdownItem>
      <DropdownItem>
        Option 2
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem onClick={handleLogout}>
        Logout
      </DropdownItem>
    </DropdownMenu>
  )
}