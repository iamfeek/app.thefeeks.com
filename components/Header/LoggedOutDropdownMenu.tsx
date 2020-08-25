import { DropdownMenu, DropdownItem } from 'reactstrap';
import Link from 'next/link';

export const LoggedOutDropdownMenu = () => {
  return (
    <DropdownMenu right>
      <Link href="/login" passHref>
        <DropdownItem>
          Login
      </DropdownItem>
      </Link>
    </DropdownMenu>
  )
}