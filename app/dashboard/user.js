import "@fontsource/kumbh-sans"; 
import { useUser } from '@auth0/nextjs-auth0/client';
import CalendarIcon from './calendar.png'
import Image from 'next/image'

export default function User() {
    const { user, error, isLoading } = useUser();

    return (
        
        <div
        style={{   
            backgroundColor: '#EFEFF7',
            textAlign: 'center',
            position: 'relative',
            width: '75vw',
            height: '17vh',
            marginTop: '21vh',
            borderRadius: '10px',
            display: 'flex',  // Use flexbox
            justifyContent: 'space-between',  // Align children with space between
            alignItems: 'center',  // Center children vertically
        }}>
            
            <div>
                <p style={{
                    color: '#3D3730',
                    textAlign: 'left',
                    fontFamily: "Kumbh Sans",
                    fontSize: '35px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                    marginTop: '2vh',
                    marginLeft: '2vw',
                    marginBottom: '0rem', 
                    flexShrink: '1',
                    }}>
                    welcome, {user.name.toLowerCase()}
                </p>
                <a>
                    <p style={{
                        color: '#3D3730',
                        textAlign: 'left',
                        fontFamily: "Kumbh Sans",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        marginTop: '1vh',
                        marginLeft: '2vw',
                        marginBottom: '1rem', 
                        flexShrink: '1',
                        }}>
                        account settings
                    </p>
                </a>

            </div>

           <div style={{
            marginTop: '1vh',
            marginLeft:'20vw',
           }}>
            <Image
                src={CalendarIcon}
                width={75}
                height={75}
                alt="Picture of the author"
                />
           </div>

           <div style={{
            marginRight:'3vw',
           }}>
                <p style={{
                color: '#3D3730',
                textAlign: 'left',
                fontFamily: "Kumbh Sans",
                fontSize: '20px',
                fontStyle: 'bold',
                fontWeight: 500,
                lineHeight: 'normal',
                marginTop: '3vh',
                marginLeft: '2vw',
                marginBottom: '1vh', 
                flexShrink: '1',
                }}>
                    5 day streak
                </p>

                <p style={{
                color: '#3D3730',
                textAlign: 'left',
                fontFamily: "Kumbh Sans",
                fontSize: '17px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                marginLeft: '2vw',
                marginBottom: '1rem', 
                flexShrink: '1',
                }}>
                    keep up the great work!
                </p>
           </div>

        </div>
        
    );
}