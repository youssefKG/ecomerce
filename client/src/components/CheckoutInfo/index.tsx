import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import "react-phone-input-2/lib/style.css";
import "./index.css";
import { ChangeEvent } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Divider } from "@mui/material";
import ErrorMessage from "../../components/Commons/ErrorMessage";
import { CheckoutInfoErrorsType, CheckoutInfoDataType } from "../../types";

const countrys: string[] = ["Maroc", "French", "USA"];

interface CheckoutInfoPropsI {
  checkoutInfoErrors: CheckoutInfoErrorsType;
  checkoutInfoData: CheckoutInfoDataType | null;
  handleInputChange: (e: ChangeEvent) => void;
  countryChange: (country: "Maroc" | "USA" | "French") => void;
}

const CheckoutInfo = ({
  checkoutInfoData,
  checkoutInfoErrors,
  handleInputChange,
  countryChange,
}: CheckoutInfoPropsI) => {
  return (
    <div className="flex flex-col gap-6 max-w-3xl border p-2 sm:p-6 border-gray-200 rounded-md w-full border-solid">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-sm text-gray-600 ">
          Select Shipping Country*
        </p>
        <Listbox value={checkoutInfoData?.country} onChange={countryChange}>
          <ListboxButton className="text-start text-gray-600 border font-semibold rounded-md text-sm border-gray-200 border-solid p-1 px-4">
            <p>
              {checkoutInfoData?.country ? checkoutInfoData?.country : "Maroc"}
            </p>
            <ChevronDownIcon
              className="group pointer-events-none absolute text-gray-600 top-2.5 right-2.5 size-4 fill-black"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions
            className="border-solid border border-gray-200 border-collapse
          font-semibold text-gray-700 text-sm shadow"
          >
            {countrys.map((country: string) => (
              <ListboxOption
                className="hover:bg-gray-50 cursor-pointer transition duration-200 p-2"
                value={country}
              >
                {country}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
      <Divider />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-gray-600 ">Phone number*</p>
          <input
            className="border-solid w-full border outline-none border-gray-200 p-1
          font-medium text-sm rounded-md px-2"
            placeholder="Phone number"
            name="phoneNumber"
            onChange={handleInputChange}
            value={checkoutInfoData?.phoneNumber}
          />
          <ErrorMessage message={checkoutInfoErrors?.phoneNumber} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-gray-600 ">
            Adress Shipping*
          </p>
          <input
            className="border-solid w-full border outline-none border-gray-200 p-1
          font-medium text-sm rounded-md px-2"
            placeholder="Adress shipping"
            name="adressShipping"
            onChange={handleInputChange}
            value={checkoutInfoData?.adressShipping}
          />
          <ErrorMessage message={checkoutInfoErrors?.adress} />
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col flex-1 gap-2">
            <p className="font-semibold text-sm text-gray-600 ">
              Email adress*
            </p>
            <input
              className="border-solid w-full border outline-none border-gray-200 p-1
          font-medium text-sm rounded-md px-2"
              placeholder="Email adress"
              name="email"
              onChange={handleInputChange}
              value={checkoutInfoData?.email}
            />
            <ErrorMessage message={checkoutInfoErrors?.email} />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <p className="font-semibold text-sm text-gray-600 ">
              Confirm adress*
            </p>
            <input
              className="border-solid w-full border outline-none border-gray-200 p-1
          font-medium text-sm rounded-md px-2"
              placeholder="Confirm email adress"
              name="confirmEmail"
              onChange={handleInputChange}
              value={checkoutInfoData?.confirmEmail}
            />
            <ErrorMessage message={checkoutInfoErrors?.confirmEmail} />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="flex flex-col flex-1 gap-2">
            <p className="font-semibold text-sm text-gray-600 ">City*</p>
            <input
              className="border-solid w-full border outline-none border-gray-200 p-1 font-medium text-sm rounded-md px-2"
              placeholder="City"
              name="city"
              onChange={handleInputChange}
              value={checkoutInfoData?.city}
            />
            <ErrorMessage message={checkoutInfoErrors?.city} />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <p className="font-semibold text-sm text-gray-600 ">Postal code*</p>
            <input
              className="border-solid w-full border outline-none border-gray-200 p-1
          font-medium text-sm rounded-md px-2"
              placeholder="Postal code"
              onChange={handleInputChange}
              value={checkoutInfoData?.postalCode}
              name="postalCode"
            />
            <ErrorMessage message={checkoutInfoErrors?.postalCode} />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <p className="font-semibold text-sm text-gray-600 ">
            Street name and house number*
          </p>
          <input
            className="border-solid w-full border outline-none border-gray-200 p-1
          font-medium text-sm rounded-md px-2"
            placeholder="Street name and house number"
            name="adress"
            onChange={handleInputChange}
            value={checkoutInfoData?.adress}
          />
          <ErrorMessage message={checkoutInfoErrors?.adress} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
