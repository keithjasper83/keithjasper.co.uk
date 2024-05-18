import { InputProps } from "@/components/forms/interface";

export interface TextFieldProps extends InputProps {
  type?: string;
}
export const FormText = ({
  label,
  name,
  placeholder,
  type = "text",
  autocomplete = "off",
  className,
  value,
  labelDisplay = true,
}: TextFieldProps) => {
  return (
    <>
      {labelDisplay === true && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        autoComplete={autocomplete}
        className={className}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};
