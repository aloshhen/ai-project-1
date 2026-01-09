export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Premium Audi Q8 dealership with the best selection of luxury SUVs.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@audiq8sales.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Audi Q8 Sales. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background-color: #000;
          color: #fff;
          padding: 2rem 0;
          margin-top: 2rem;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-around;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          flex-wrap: wrap;
        }
        
        .footer-section {
          flex: 1;
          min-width: 250px;
          margin-bottom: 1.5rem;
        }
        
        .footer-section h3 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        
        .footer-section p {
          margin: 0.5rem 0;
          color: #ccc;
        }
        
        .copyright {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid #333;
          margin-top: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}