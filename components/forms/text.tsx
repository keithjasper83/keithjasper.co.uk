"use server";
import { InputProps } from "@/components/forms/interface";
import { Tai_Heritage_Pro } from "next/font/google";

export interface TextFieldProps extends InputProps {
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
}
export const FormText = ({
  label,
  name,
  placeholder,
  type = "text",
  autocomplete = "off",
  className = "block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6",
  value,
  labelDisplay = true,
  onChange, // Receive onChange prop
}: TextFieldProps) => {
  return (
    <>
      <div className=" items-center flex gap-[1.25em] mt-2">
        {labelDisplay === true && (
          <label htmlFor={name} className="w-[200px] align-middle	">
            {label}
          </label>
        )}
        <input
          type={type}
          autoComplete={autocomplete}
          className={className}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange} // Add onChange handler
        />
      </div>
    </>
  );
};
