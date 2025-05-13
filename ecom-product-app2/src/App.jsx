import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';

function App() {
  const [products] = useState([
    { id: 1, name: "Schecter Hellraiser C-1 Electric Guitar", price: "$1,099", description: "The Schecter Hellraiser C-1 is a high-performance electric guitar designed for players seeking powerful tone and exceptional playability. Featuring a mahogany body with a quilted maple top and a 3-piece mahogany neck, it delivers rich sustain and stability. Equipped with EMG active pickups and a TonePros bridge with string-through-body design, the Hellraiser C-1 offers versatile sound and reliable tuning, making it suitable for various musical styles." },
    { id: 2, name: "Marshall MG50GFX 1 x 12-inch 50-watt Combo Amp with Effects", price: "$399", description: "The Marshall MG50GFX is a 50-watt combo amp with a 12 inch speaker, offering classic Marshall tone and four versatile channels. It includes built-in digital effects like reverb, delay, and chorus for added depth. Ideal for practice or live gigs, it's compact yet powerful." },
    { id: 3, name: "Breedlove Organic Performer Pro Concert Thinline CE", price: "$949", description: "The Breedlove Performer Pro Concert Thinline CE is a lightweight acoustic-electric guitar with a slim body and rich, balanced tone. It features solid tonewoods and Fishman electronics for great sound on stage or in the studio. Comfortable and gig-ready, it comes with a hardshell case." },
  ]);
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default App