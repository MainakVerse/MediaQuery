import React from "react";

const Testimonials = () => {
  return (
    <div className="my-6 font-[sans-serif] mt-20">
      <div className="mb- text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold">Testimonials</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
          <p className="text-sm text-center text-[#333] leading-relaxed">
            Codewave Technologies has been a game-changer for our business.
            Their team of experts seamlessly integrated cutting-edge solutions
            that transformed our operations and gave us a competitive edge in
            the market. We&apos;re thrilled with the results and highly recommend
            Codewave to any company looking to future-proof their technology.
          </p>
          <div className="flex flex-wrap items-center justify-center mt-8">
            <img
              src="https://readymadeui.com/profile_2.webp"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4 text-left">
              <p className="text-sm font-semibold">John Doe, CEO, Acme Corp</p>
              <p className="text-xs text-gray-400">johndoe23@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
          <p className="text-sm text-center text-[#333] leading-relaxed">
            As a fast-growing startup, we needed a technology partner that could
            keep up with our evolving needs. Codewave Technologies exceeded our
            expectations, delivering innovative solutions that scaled with our
            business. Their proactive approach and technical expertise have been
            invaluable in driving our success.
          </p>
          <div className="flex flex-wrap items-center justify-center mt-8">
            <img
              src="https://readymadeui.com/profile_3.webp"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4 text-left">
              <p className="text-sm font-semibold">
                Sarah Lee, Founder, Innovate Inc.
              </p>
              <p className="text-xs text-gray-400">mark23@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
          <p className="text-sm text-center text-[#333] leading-relaxed">
            Codewave Technologies has been an indispensable partner in our
            digital transformation journey. Their deep understanding of our
            industry and commitment to delivering tailored solutions have been
            instrumental in streamlining our processes, enhancing customer
            experience, and driving measurable results. We couldn&apos;t be more
            satisfied with their services.
          </p>
          <div className="flex flex-wrap items-center justify-center mt-8">
            <img
              src="https://readymadeui.com/profile_4.webp"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4 text-left">
              <p className="text-sm font-semibold">
                Michael Chen, CIO, Global Enterprises
              </p>
              <p className="text-xs text-gray-400">simon23@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
