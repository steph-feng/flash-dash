


export default function Card (props) {

    return (

        <div style={{
            backgroundColor: '#EFEFF7',
            width: '500px',
            height: '252px',

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
    );


}