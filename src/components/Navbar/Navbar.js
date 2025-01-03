'use client';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// logotype
import logotype from '../../assets/images/logotype.png';

// components
import Image from 'next/image';
import Link from 'next/link';

// hooks
import { useState } from 'react';

export function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="navbar">
      <FontAwesomeIcon
        icon={showMobileNav ? faXmark : faBars}
        className={
          showMobileNav
            ? 'fontawesome-icon navbar__bars-icon'
            : 'fontawesome-icon navbar__x-icon'
        }
        onClick={
          showMobileNav
            ? () => setShowMobileNav(false)
            : () => setShowMobileNav(true)
        }
      />

      <ul className="navbar__list">
        <li className="navbar__list_item ">
          <Link href="/">Strona Główna</Link>
        </li>

        <li className="navbar__list_item ">
          <Link href="/products">Produkty</Link>
        </li>
      </ul>

      <div className="navbar__logotype">
        <Image
          className="navbar__logotype_img"
          src={logotype}
          alt="Logotype of Epoxy Desing"
          width={175}
          height={35}
        />
      </div>

      <ul className="navbar__list">
        <li className="navbar__list_item ">
          <Link href="/design">Warianty</Link>
        </li>

        <li className="navbar__list_item ">
          <Link href="/order">Zamówienie Specjalne</Link>
        </li>
      </ul>

      {/* MOBILE LIST */}
      {showMobileNav && (
        <ul className="navbar__list navbar__list--mobile">
          <li className="navbar__list_item">
            <Link href="/" onClick={() => setShowMobileNav(false)}>
              Strona Główna
            </Link>
          </li>

          <li className="navbar__list_item">
            <Link href="/products" onClick={() => setShowMobileNav(false)}>
              Produkty
            </Link>
          </li>

          <li className="navbar__list_item ">
            <Link href="/design" onClick={() => setShowMobileNav(false)}>
              Warianty
            </Link>
          </li>

          <li className="navbar__list_item ">
            <Link href="/order" onClick={() => setShowMobileNav(false)}>
              Zamówienie Specjalne
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
