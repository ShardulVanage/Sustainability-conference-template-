import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon, Info } from "lucide-react";
import RegistrationDialog from "./DialogBox";

const PricingCard = ({
  title,
  description,
  features = [],
  price,
  currency,
  ctaText,
  ctaLink,
  footerText,
  priceSubtext,
  isCustomPayment = false,
  theme = {
    primary: "green",
    secondary: "gray",
    accent: "white",
  },
  delay = 0,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const handlePayment = (method) => {
    if (isCustomPayment) {
      if (!customAmount || isNaN(customAmount) || parseFloat(customAmount) <= 0) {
        alert("Please enter a valid amount");
        return;
      }
      const totalAmount = (parseFloat(customAmount) * 1.06).toFixed(2); // Adding 6% tax
      console.log(`Processing custom payment of $${totalAmount} via ${method}`);
    } else {
      console.log(`Processing payment of $${price} via ${method}`);
    }
    setIsDialogOpen(false);
  };

  const renderPriceSection = () => {
    if (isCustomPayment) {
      return (
        <div className="mx-auto max-w-xs px-8">
          <p className="text-base font-semibold text-green-900">
            Custom Payment Amount
          </p>
          <div className="mt-6">
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3"
              min="0"
              step="0.01"
            />
            {customAmount && !isNaN(customAmount) && parseFloat(customAmount) > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                <p>Amount: ${parseFloat(customAmount).toFixed(2)}</p>
                <p>Tax (6%): ${(parseFloat(customAmount) * 0.06).toFixed(2)}</p>
                <p className="font-semibold">
                  Total: ${(parseFloat(customAmount) * 1.06).toFixed(2)}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="mx-auto max-w-xs px-8">
        <p className="text-base font-semibold text-green-900">
          Invest in our planet's future
        </p>
        <p className="mt-6 flex items-baseline justify-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-gray-900">
            ${price}
          </span>
          <span className="text-sm font-semibold leading-6 tracking-wide text-green-800">
            {currency}
          </span>
        </p>
      </div>
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        className="mx-auto relative mt-16 max-w-2xl rounded-3xl ring-1 bg-white ring-green-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
      >
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-green-900">
            {title}
          </h3>
          <p className="mt-6 text-base leading-7 text-gray-900">
            {description}
          </p>
          {features.length > 0 && (
            <>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-green-800">
                  What's included
                </h4>
                <div className="h-px flex-auto bg-green-700" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-x-3"
                  >
                    <CheckIcon
                      className="h-6 w-5 flex-none text-green-950"
                      aria-hidden="true"
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-green-50 py-10 text-center ring-1 ring-inset ring-green-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            {renderPriceSection()}
            <div className="mx-auto max-w-xs px-8">
              <button
                onClick={() => setIsDialogOpen(true)}
                className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                {isCustomPayment ? "Process Payment" : "Register Now"}
              </button>
              <p className="mt-6 text-xs leading-5 text-gray-900">
                {isCustomPayment ? (
                  <span className="flex items-center justify-center gap-1">
                    <Info className="w-4 h-4" />
                    6% tax will be added to the final amount
                  </span>
                ) : (
                  "5% of your fee goes directly to reforestation projects"
                )}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <RegistrationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={title}
        price={isCustomPayment ? customAmount : price}
        currency={currency}
        onPayment={handlePayment}
        isCustomPayment={isCustomPayment}
      />
    </>
  );
};

export default PricingCard;