import BackgroundImage from './login.png'
import "@fontsource/kumbh-sans"; 

export default function Home() {
  const containerStyle = {
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={containerStyle} >
      <div className="flex flex-col items-center justify-center h-screen">

        <p style={{
          color: 'black',
          textAlign: 'right',
          fontFamily: "Kumbh Sans",
          fontSize: '35px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
          marginBottom: '1rem', 
        }}>
         welcome to flash dash
        </p>
        <a href="/api/auth/login">

        <div style={{
            backgroundColor: '#EFEFF7',
            textAlign: 'center',
            position: 'relative',
            width: '150px',
            height: '40px',
            marginTop: '1vh',
            borderRadius: '10px',
           }}>
          <p style={{
            color: 'black',
            fontFamily: '',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            marginBottom: '2rem',
            position: 'absolute',
            top: '50%',
            left: '50%', 
            transform: 'translate(-50%, -50%)',
          }}>
            login
          </p>
        </div>
        </a>
      </div>
    </main>
  );
}