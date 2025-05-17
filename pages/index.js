import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <h1>Welcome to My Next.js App!</h1>
      <p>This is the homepage customized by [Your Name].</p>
      <Link href="/about">
        <button
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          About Page
        </button>
      </Link>
    </div>
  );
}