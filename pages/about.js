import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      
      <div>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Page</h1>
        <p>This page is all about our Next.js project.</p>
        <p>This page is all about our Next.js project.</p>
        <p>This page is all about our Next.js project.</p>
        <p>This page is all about our Next.js project.</p>
      </div>

      
      <div style={{ marginBottom: '3rem' }}>
        <button
          onClick={() => router.push('/')}
          style={{
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
          Go to Home
        </button>
      </div>
    </div>
  );
}
