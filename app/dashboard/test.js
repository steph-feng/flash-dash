import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export default function ResponsiveCarousel() {
  
  return (
    <div>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
      >
                         <h1 style={{
                    fontSize: '300px',
                    color: "red",
                    backgroundColor:'blue'
                 }}>hi</h1>
                 <h1 style={{
                    fontSize: '300px',
                    color: "red",
                 }}>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
      </Carousel>
    </div>
  );
}