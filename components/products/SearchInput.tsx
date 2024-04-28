import { useState } from "react";

interface SearchInputProps {
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  const [value, setValue] = useState("");

  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    onChange(inputValue);
  }

  return (
    <input
      type="text" value={value} onChange={HandleChange}
      placeholder="Search..."
      className="w-full h-[40px] rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-opacity-50 focus:ring-blue-500"
    />
  )
}

export default SearchInput;