import "regenerator-runtime/runtime";
import { useAsyncDebounce } from "react-table"; // new
import { useState } from "react";
export default function BaseSearch({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="flex justify-center p-4">
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className="w-8/12 rounded-xl border p-4 text-gray-500"
        type="search"
        placeholder="Search..."
      />
    </span>
  );
}
