import { DropdownMenu, DropdownItem } from 'reactstrap';
import { useCurrentUser } from '../../lib/hooks';
import Link from 'next/link';

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
      <Link href="/sizes" passHref>
        <DropdownItem>
          Sizes
        </DropdownItem>
      </Link>
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