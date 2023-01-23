import Link from 'next/link';

import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/">Home</Link>
      <Link href="/stuff">Stuff</Link>
      <Link href="/photos">Photos</Link>
      <Link href="/contact">Contact</Link>
    </NavStyles>
  );
}
