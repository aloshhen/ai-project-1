import Link from 'next/link';

export default function CarList({ cars }) {
  return (
    <div className="car-list">
      <h2>Available Models</h2>
      <div className="grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.model} className="car-image" />
            <div className="car-info">
              <h3>{car.model}</h3>
              <p>{car.year} | {car.engine} | {car.power}</p>
              <p className="price">${car.price.toLocaleString()}</p>
              <p className="description">{car.description}</p>
              <Link href={`/cars/${car.id}`} className="btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .car-list {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .car-list h2 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2rem;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .car-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .car-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .car-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .car-info {
          padding: 1.5rem;
        }
        
        .car-info h3 {
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }
        
        .price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #0066cc;
          margin: 0.5rem 0;
        }
        
        .description {
          margin: 1rem 0;
          color: #666;
        }
        
        .btn {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          background-color: #000;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        
        .btn:hover {
          background-color: #333;
        }
      `}</style>
    </div>
  );
}