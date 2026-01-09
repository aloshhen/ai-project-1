import Head from 'next/head';
import Header from '../components/Header';
import CarList from '../components/CarList';
import Footer from '../components/Footer';

export default function Home() {
  const cars = [
    {
      id: 1,
      model: 'Audi Q8 55 TFSI',
      price: 85000,
      year: 2023,
      engine: '3.0 TFSI V6',
      power: '340 HP',
      image: '/images/q8-1.jpg',
      description: 'Premium SUV with advanced technology and luxurious interior.'
    },
    {
      id: 2,
      model: 'Audi Q8 50 TDI',
      price: 82000,
      year: 2023,
      engine: '3.0 TDI V6',
      power: '286 HP',
      image: '/images/q8-2.jpg',
      description: 'Diesel version with excellent fuel economy and torque.'
    }
  ];

  return (
    <div className="container">
      <Head>
        <title>Audi Q8 Sales | Premium SUV</title>
        <meta name="description" content="Buy new Audi Q8 models at best prices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className="hero">
          <h1>Premium Audi Q8 Selection</h1>
          <p>Experience luxury and performance with our exclusive Audi Q8 models</p>
        </div>
        <CarList cars={cars} />
      </main>
      <Footer />

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
        }
        
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        main {
          flex: 1;
          padding: 2rem;
        }
        
        .hero {
          text-align: center;
          padding: 3rem 0;
          background-color: #f5f5f5;
          margin-bottom: 2rem;
        }
        
        .hero h1 {
          font-size: 2.5rem;
          color: #000;
          margin-bottom: 1rem;
        }
        
        .hero p {
          font-size: 1.2rem;
          color: #666;
        }
      `}</style>
    </div>
  );
}