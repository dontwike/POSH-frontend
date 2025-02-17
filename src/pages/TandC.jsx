import React from "react";

const TandC = () => {
  const termsData = [
    {
      title: "General Information",
      points: [
        "These Terms and Conditions govern your use of the website and services provided by CANVAA.",
        "The website is operated by the company registered at the address stated on the website.",
      ],
    },
    {
      title: "Products and Availability",
      points: [
        "All products are subject to availability. CANVAA reserves the right to discontinue or modify items without prior notice.",
        "We strive to ensure accurate product descriptions, dimensions, and images, slight variations may occur.",
      ],
    },
    {
      title: "Pricing and Payments",
      points: [
        "All prices are listed in the currency specified on the website and include applicable taxes unless stated otherwise.",
        "Full payment is required at the time of purchase. Accepted payment methods are listed on the website.",
        "CANVAA reserves the right to correct pricing errors and will notify customers prior to order processing in such cases.",
      ],
    },
    {
      title: "Shipping and Delivery",
      points: [
        "Delivery timelines are estimates and may vary based on location and product availability.",
        "CANVAA is not liable for delays caused by factors beyond our control, such as weather or carrier issues.",
        "Customers must ensure the delivery address is accessible for our delivery team.",
      ],
    },
    {
      title: "Returns and Refunds",
      points: [
        "Returns are accepted within the period specified on the website, provided the item is unused, undamaged, and in its original packaging.",
        "Customized or made-to-order items are non-refundable unless they are defective.",
        "Refunds will be processed to the original payment method within the timeframe specified on the website.",
      ],
    },
    {
      title: "Warranty",
      points: [
        "Products are covered under the warranty period stated on the website against manufacturing defects.",
        "The warranty does not cover normal wear and tear, misuse, or accidental damage.",
      ],
    },
    {
      title: "Intellectual Property",
      points: [
        "All content on this website, including images, text, and logos, is the property of CANVAA and is protected by copyright laws.",
        "Unauthorized reproduction, distribution, or use of our content is prohibited.",
      ],
    },
    {
      title: "Limitation of Liability",
      points: [
        "CANVAA is not liable for any indirect, incidental, or consequential damages resulting from the use of our products or services.",
        "Our maximum liability is limited to the total cost of the purchased item.",
      ],
    },
    {
      title: "Privacy Policy",
      points: [
        "Personal information collected during transactions is handled in accordance with our privacy policy, available on the website.",
      ],
    },
    {
      title: "Governing Law",
      points: [
        "These Terms are governed by the laws of the jurisdiction stated on the website.",
        "Any disputes arising from these Terms will be resolved in the courts of that jurisdiction.",
      ],
    },
    {
      title: "Changes to Terms and Conditions",
      points: [
        "CANVAA reserves the right to update or modify these Terms at any time without prior notice.",
        "Continued use of the website constitutes acceptance of the revised Terms.",
      ],
    },
    {
      title: "Contact Information",
      points: [
        "For any questions or concerns, please contact us via the contact information provided on our website.",
      ],
    },
  ];

  return (
    <div className="max-w-4xl p-8 text-gray-900 ">
      <h1 className="text-3xl font-extrabold uppercase mb-4">
        TERMS & CONDITION
      </h1>
      <p className="mb-4">
        Welcome to CAAVYA! By using our website and services, you agree to the
        following Terms and Conditions. Please read them carefully.
      </p>
      {termsData.map((data, index) => (
        <section className="mb-6">
          <h2 className="font-bold text-lg">
            {index + 1}. {data.title}
          </h2>
          {data.points.map((point, index) => (
            <p>{point}</p>
          ))}
        </section>
      ))}
    </div>
  );
};

export default TandC;
