'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">Ajit Sivakumar</Link>
        </div>
        <ul className="nav-menu">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link 
                href={href} 
                className={pathname === href ? 'nav-link active' : 'nav-link'}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="nav-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}