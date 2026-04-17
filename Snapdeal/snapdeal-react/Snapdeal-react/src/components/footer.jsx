import "../style.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Section 1 */}
      <div className="footer-links-grid">
        <div className="footer-col">
          <h4>Policy Info</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Sale</a>
          <a href="#">Terms of Use</a>
          <a href="#">Report Abuse & Takedown Policy</a>
          <a href="#">Know Your BIS Standard</a>
          <a href="#" className="red-link">Products Under Compulsory BIS Certification</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Sitemap</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-col">
          <h4>Snapdeal Business</h4>
          <a href="#">Shopping App</a>
          <a href="#">Sell on Snapdeal</a>
          <a href="#">Media Enquiries</a>
        </div>

        <div className="footer-col">
          <h4>Popular Links</h4>
          <a href="#">Lehenga</a>
          <a href="#">Kid's Clothing</a>
          <a href="#">Sarees</a>
          <a href="#">Winter Wear</a>
          <a href="#">Sweatshirts</a>
        </div>
      </div>

      {/* Section 2 */}
      <div className="footer-payment-connect" >
        <div className="payment-section">
          <h4>Payment</h4>
          <div className="payment-icons" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="pay-img" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="pay-img" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Maestro_logo.png" alt="Maestro" className="pay-img" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg" alt="Diners Club" className="pay-img" />

            <div className="pay-pill"><span>₹</span> Cash on Delivery</div>
            <div className="pay-pill">🏦 Net Banking</div>
          </div>
        </div>

        <div className="connect-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon-img" /></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X" className="social-icon-img" /></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon-img" /></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="social-icon-img" /></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="social-icon-img" /></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="social-icon-img" /></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="social-icon-img" /></a>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="seo-footer-links-wrapper">
        <div className="seo-footer-links">

          <p><strong>Men:</strong> Shirts for Men / Casual Shirts for Men / Formal Shirts for Men / Hoodies for Men</p>

          <p><strong>Women:</strong> Tops for Women / Kurti / Cotton Sarees / Dresses for Women</p>

          <p><strong>Footwear:</strong> Men's Footwear / Casual Shoes / Formal Shoes / Sandals</p>

          <p><strong>Home & Kitchen:</strong> Wall Painting / Wall Stickers / Clock / Lamp</p>

          <p><strong>Watch:</strong> Watch For Men / Womens Watches / Smart Watch</p>

          <p><strong>Home Furnishing:</strong> Bed Sheet / Curtains / Blanket / Carpet</p>

          <p><strong>Electronics:</strong> Bluetooth Speakers / Headphones / Trimmer / Kettle</p>

          <p><strong>Mobile Accessories:</strong> Mobile Covers / Tempered Glass</p>

        </div>
      </div>

      {/* Section 4 */}
      <div className="about-snapdeal-wrapper">
        <div className="about-snapdeal">
          <p>
            Snapdeal is India's leading pure-play value Ecommerce platform. Founded in 2010,
            Snapdeal brings together a wide assortment of good quality and value-priced merchandise.
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <div className="copyright-bar">
        <div className="copyright-bar-inner">
          <div className="copyright-text">
            © 2021 AceVector Limited. All Rights Reserved.
          </div>
          <div className="made-for-bharat">
            Made for Bharat <span>❤️</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;