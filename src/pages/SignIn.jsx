import React from "react";
import InputFeild from "../components/InputFeild";

const SignIn = () => {
  return (
    <section className="bg-white pb-5">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to POSH
            </h1>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <InputFeild type="First Name" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <InputFeild type="Last Name" />
              </div>

              <div className="col-span-6">
                <InputFeild type="Email" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <InputFeild type="Password" />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-xs"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="/tc" className="text-gray-700 underline">
                    {" "}
                    terms and conditions{" "}
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:flex-col sm:items-center sm:gap-4">
                <button className="w-full inline-block shrink-0 bg-black px-12 py-3 text-sm font-medium text-white transition focus:ring-3 focus:outline-hidden">
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="/login" className="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignIn;
