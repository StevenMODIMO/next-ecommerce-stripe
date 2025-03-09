import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Completed",
};

export default function PaymentCompleted() {
  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        <p className="text-center text-gray-800 font-medium text-xl">
          Your payment was completed successfully
        </p>
      </div>
    </div>
  );
}
