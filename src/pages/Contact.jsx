import React from "react";
import InputFeild from "../components/InputFeild";

const Contact = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Contact
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              We’d love to hear from you!
            </p>

            <p className="mt-4 leading-relaxed text-gray-500">
              Whether you have questions about our products, need assistance
              with your order, or just want to say hello, feel free to reach
              out. Our dedicated team is here to help you with any inquiries you
              may have.
            </p>

            <p className="mt-4 leading-relaxed text-gray-500">
              You can contact us via email or fill out the form below, and we’ll
              get back to you as soon as possible.
            </p>

            <p className="mt-4 leading-relaxed text-gray-500">
              Thank you for choosing CAVAYA!
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-6">
                <InputFeild type="Your Name" />
              </div>

              <div className="col-span-6">
                <InputFeild type="Email" />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <textarea
                  type="text"
                  id="text"
                  name="text"
                  placeholder="Message"
                  className="mt-1 w-full pt-2 pl-3 pb-16  border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="w-full inline-block shrink-0 bg-black px-12 py-3 text-sm font-medium text-white transition focus:ring-3 focus:outline-hidden">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Contact;
