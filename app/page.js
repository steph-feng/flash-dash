import BackgroundImage from './login-bg.png'

export default function Home() {
  const containerStyle = {
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={containerStyle}>
      <div className="flex flex-col items-center justify-center h-screen">

        <p style={{
          color: '#3D3730',
          textAlign: 'right',
          fontFamily: 'Lora, serif',
          fontSize: '35px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
          marginBottom: '2rem', 
        }}>
         Welcome to SmartFlash
        </p>

        <div style={{ textAlign: 'center', position: 'relative' }}>
          <p style={{
            color: '#3D3730',
            fontFamily: 'Lora, serif',
            fontSize: '25px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            marginBottom: '2rem',
            position: 'absolute',
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
          }}>
            Login
          </p>

          <a
            href="/api/auth/login"
            style={{
              width: '250px',
              height: '60px',
              flexShrink: '0',
              margin: 'auto',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="321" height="60" viewBox="0 0 321 60" fill="none">
              <path d="M0 20C0 8.9543 8.9543 0 20 0H301C312.046 0 321 8.95431 321 20V40C321 51.0457 312.046 60 301 60H20C8.9543 60 0 51.0457 0 40V20Z" fill="#D2CBBB"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
