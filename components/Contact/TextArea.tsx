// components/contactForm/TextArea.tsx
interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    error?: boolean;
    errorMessage?: string;
  }
  const TextArea = ({
    id,
    name,
    placeholder,
    error,
    errorMessage,
    ...props
  }: TextAreaProps) => {
    return (
      <div className="mt-4 block">
        
        <textarea
          {...props}
          id={id}
          name={name}
          rows={5}
          placeholder={placeholder}
          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        ></textarea>
        {error && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>}
      </div>
    );
  };
  export default TextArea;