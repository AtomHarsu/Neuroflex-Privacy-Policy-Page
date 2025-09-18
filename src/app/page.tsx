export default function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>🧠 NeuroFlex</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>Fun Gaming Experience</p>
      <div style={{ marginTop: '40px' }}>
        <a 
          href="/privacy-policy" 
          style={{ 
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#667eea',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '16px'
          }}
        >
          View Privacy Policy
        </a>
      </div>
    </div>
  )
}