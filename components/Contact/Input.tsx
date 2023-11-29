// components/contactForm/Input.tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    error?: boolean;
    errorMessage?: string;
  }
  const Input = ({
    id,
    name,
    
    placeholder,
    error = false,
    errorMessage = "",
    ...props
  }: InputProps) => {   
    return (
      <div className="mt-4 block">
       
        <input
          {...props}
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        />
        {error && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>}
      </div>
    );
  };
  export default Input;