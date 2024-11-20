"use client";

import React, { forwardRef } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { ChevronDown, Phone } from "lucide-react";

// Add props for value and onChange
const PhoneNumberInput = ({ value, onChange, required = false }) => {
  return (
    <div className="space-y-2" dir="ltr">
      <label 
        htmlFor="input-46" 
        className="block text-sm font-medium text-gray-700"
      >
        Phone number input
      </label>
      <RPNInput.default
        className="flex rounded-lg shadow-sm"
        international
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={PhoneInputComponent}
        id="input-46"
        placeholder="Enter phone number"
        value={value}
        onChange={onChange}
        required={required}
        defaultCountry="us"
      />
    </div>
  );
}

export default PhoneNumberInput;

const PhoneInputComponent = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={`w-full px-3 py-2 border border-gray-300 rounded-none -ml-px
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
        focus:z-10 ${className || ""}`}
      ref={ref}
      type="tel"
      {...props}
    />
  );
});

PhoneInputComponent.displayName = "PhoneInputComponent";

const CountrySelect = ({ disabled, value, onChange, options }) => {
  const handleSelect = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="relative inline-flex items-center self-stretch rounded-l-lg 
      border border-gray-300 bg-white py-2 px-3 text-gray-600
      transition-shadow focus-within:z-10 focus-within:border-blue-500 
      focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500/30 
      hover:bg-gray-50 hover:text-gray-900 
      disabled:pointer-events-none disabled:opacity-50">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-gray-400">
          <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value || ""}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0"
        aria-label="Select country"
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label} {option.value && `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  );
};

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? <Flag title={countryName} /> : <Phone size={16} aria-hidden="true" />}
    </span>
  );
};