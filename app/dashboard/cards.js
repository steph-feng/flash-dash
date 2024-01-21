
import Card from './card.jsx'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

export default function Cards() {

    // const [elastic, setElastic] = useState([
    //     { id: 1, title: 'Card 1' },
    //     { id: 2, title: 'Card 2' },
    //     // Add more initial cards as needed
    // ]);

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
            <div>
                <Carousel breakPoints={breakPoints}>
                 <h1 style={{
                    fontSize: '300px',
                    color: "red",
                 }}>hi</h1>
                 <h1 style={{
                    fontSize: '300px',
                    color: "red",
                 }}>hi</h1>
                </Carousel>
            </div>
            



            
        </div>
    );
}

