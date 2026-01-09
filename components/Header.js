import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Audi Q8 Sales</Link>
      </div>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #000;
          color: #fff;
        }
        
        .logo a {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
        }
        
        .nav {
          display: flex;
          gap: 1.5rem;
        }
        
        .nav a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .nav a:hover {
          color: #ccc;
        }
      `}</style>
    </header>
  );
}