import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <h2>Why Choose Us?</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <h3>User-Friendly Design and Automation</h3>
                        <p>"Our CRM offers a user-friendly interface and powerful automation features, saving you time and enhancing productivity. Experience seamless workflow automation and mobile access for on-the-go management."</p>
                    </div>
                    <div className="feature-item">
                        <h3>Advanced Analytics and Integration</h3>
                        <p>"Transform data into insights with our advanced analytics and seamless integration capabilities. Make smarter business decisions with real-time reporting and custom analytics dashboards."</p>
                    </div>
                    <div className="feature-item">
                        <h3>Customization and Security</h3>
                        <p>"Enjoy unmatched customization and top-notch security with our CRM. Tailor workflows to your needs while protecting your data with industry-leading security protocols and compliance measures."</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
