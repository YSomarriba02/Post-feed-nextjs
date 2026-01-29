interface props {
  placeholder?: string;
  name: string;
  required?: boolean;
  min?: number;
  max?: number;
}

export default function InputElement({
  placeholder,
  name,
  required,
  max,
  min,
}: props) {
  return (
    <input
      maxLength={max}
      minLength={min}
      required={required}
      type="text"
      name={name}
      placeholder={placeholder}
      className="bg-zinc-700 w-full py-2 px-1.5 rounded-sm"
    />
  );
}
