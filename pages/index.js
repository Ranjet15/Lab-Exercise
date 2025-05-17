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
        backgroundColor: '#f0f2f5',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to My Next.js App!
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#555' }}>
        This is the homepage customized by [Your Name].
      </p>

      <Link href="/about">
        <button
          style={{
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0059c1')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#0070f3')}
        >
          About Page
        </button>
      </Link>
    </div>
  );
}
