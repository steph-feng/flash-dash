import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import AddIcon from './add-icon.png'
import Image from 'next/image'
import { useState } from 'react'
export default function Cards() {

    // const [elastic, setElastic] = useState([
    //     { id: 1, title: 'Card 1' },
    //     { id: 2, title: 'Card 2' },
    //     // Add more initial cards as needed
    // ]);
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
      };
    // const addNewCard = () => {
    //     const newCard = {
    //         id: elastic.length + 1,
    //         title: `Card ${elastic.length + 1}`,
    //         imageUrl: 'url_to_new_image',
    //     };

    //     setElastic(prevState => [...prevState, newCard]);
    // };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            {/* <div>
                <h1>study cards</h1>
                <button onClick={addNewCard}>Add New Card</button>
            </div> */}
            <div style={{
                    marginTop: '10vh',
                }}>
                <Carousel showArrows='true' >

                    {/* <Card/> */}

                    <button onClick={incrementCount}>
                        <div style={{
                            backgroundColor: '#F5F5FE',
                            borderWidth: '1px',
                            borderStyle: 'dashed',
                            borderColor: '#3D3730',
                            borderRadius: '10px',
                            width: '500px',
                            height: '252px',
                            display: 'flex',  // Use flexbox
                            justifyContent: 'space-between',  // Align children with space between
                            alignItems: 'center',  // Center children vertically
                            justifyContent: 'space-between',  // Align children with space between
                            alignItems: 'center',  // Center children vertically
                        }}>
                            <div style={{
                                marginLeft:'12vw',
                                marginTop:'0.5vh',
                            }}>

                            <Image
                                src={AddIcon}
                                width={32}
                                height={32}
                                alt=""
                                />
                            </div>

                            <p style={{
                                color: '#3D3730',
                                textAlign: 'center',
                                fontFamily: "Kumbh Sans",
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: 'normal',
                                marginRight:'13vw',
                            }}>create new set</p>
                        </div>
                    </button>
                </Carousel>
            </div>
            



            
        </div>
    );
}

