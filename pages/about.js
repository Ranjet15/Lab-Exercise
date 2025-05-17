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
      }}
    >
      {/* Top Section with Text */}
      <div>
        <h1>About Page</h1>
        <p>This page is all about our Next.js project.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <p>Amet consectetur adipiscing elit quisque faucibus ex sapien.</p>
        <p>Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
        <p>Vitae pellentesque sem placerat in id cursus mi.</p>
      </div>

      {/* Bottom Centered Button */}
      <div style={{ marginBottom: '2rem' }}>
        <button
          onClick={() => router.push('/')}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
