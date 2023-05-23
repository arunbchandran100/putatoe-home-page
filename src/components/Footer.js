// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>© {new Date().getFullYear()} Your Website. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            {/* Additional footer content, such as links or social media icons */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
