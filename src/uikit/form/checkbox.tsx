import { ChangeEvent } from "react";

const Checkbox = ({ label = "remember me", name, id, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onChange({ target: { name, value: checked } });
  };
  return (
    <div className="flex items-center transition-all">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={value}
        onChange={handleChange}
        hidden
      />

      <label
        htmlFor={id}
        className="flex items-center gap-2 cursor-pointer font-inika text-black text-sm"
      >
        <span
          className={`flex items-center p-1 justify-center w-5 h-5 rounded-md ${value === true ? "bg-gray-200" : "bg-white border-2 border-gray-200"}`}
        >
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={value === true ? "" : "hidden"}
          >
            <path
              d="M1.45752 4.79637L6.04047 9.4806L14.0606 1.2832"
              stroke="#9E9E9E"
              stroke-width="1.6102"
            />
          </svg>
        </span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
