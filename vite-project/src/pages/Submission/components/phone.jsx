"use client";

import React, { forwardRef, useEffect, useState } from "react";
import * as RPNInput from "react-phone-number-input";
import { ChevronDown } from "lucide-react";

const PhoneNumberInput = ({ value, onChange, required = false }) => {
  const [internalValue, setInternalValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("US");
  
  // Function to format the phone number with country code
  const formatPhoneWithCountry = (phoneNumber, country) => {
    if (!phoneNumber) return "";
    // Clean the phone number to only digits
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    // Get country code
    const countryCode = country ? RPNInput.getCountryCallingCode(country) : "";
    return countryCode ? `${countryCode}${cleanNumber}` : cleanNumber;
  };

  // Handle internal value change
  const handleChange = (newValue, country) => {
    setInternalValue(newValue);
    if (country) {
      setSelectedCountry(country);
    }
    // Pass formatted number with country code to parent
    if (onChange) {
      onChange(formatPhoneWithCountry(newValue, selectedCountry));
    }
  };

  // Custom country select component that tracks country changes
  const CustomCountrySelect = (props) => {
    const handleCountryChange = (newCountry) => {
      setSelectedCountry(newCountry);
      props.onChange(newCountry);
      // Update the full number when country changes
      handleChange(internalValue, newCountry);
    };
    
    return <CountrySelect {...props} onChange={handleCountryChange} />;
  };

  // Update internal value if external value changes
  useEffect(() => {
    if (value && value !== formatPhoneWithCountry(internalValue, selectedCountry)) {
      setInternalValue(value);
    }
  }, [value]);

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
        countrySelectComponent={CustomCountrySelect}
        inputComponent={PhoneInputComponent}
        id="input-46"
        placeholder="Enter phone number"
        value={internalValue}
        onChange={handleChange}
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
        <span className="text-sm">+{value ? RPNInput.getCountryCallingCode(value) : ""}</span>
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
              {option.value} +{RPNInput.getCountryCallingCode(option.value)}
            </option>
          ))}
      </select>
    </div>
  );
};