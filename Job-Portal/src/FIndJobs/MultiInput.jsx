// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const groceries = [
//   "🍎 Apples",
//   "🍌 Bananas",
//   "🥦 Broccoli",
//   "🥕 Carrots",
//   "🍫 Chocolate",
// ];

// const MultiInput = () => {
//   const [data, setData] = useState(groceries);
//   const [search, setSearch] = useState("");
//   const [value, setValue] = useState([]);
//   const [open, setOpen] = useState(false);

//   const toggleDropdown = () => setOpen(!open);

//   const handleValueSelect = (val) => {
//     setSearch("");

//     if (val === "$create") {
//       setData((current) => [...current, search]);
//       setValue((current) => [...current, search]);
//     } else {
//       setValue((current) =>
//         current.includes(val)
//           ? current.filter((v) => v !== val)
//           : [...current, val]
//       );
//     }
//   };

//   const handleValueRemove = (val) =>
//     setValue((current) => current.filter((v) => v !== val));

//   const filtered = data.filter((item) =>
//     item.toLowerCase().includes(search.trim().toLowerCase())
//   );

//   const exactOptionMatch = data.some((item) => item === search);

//   return (
//     <div className="d-flex justify-content-center align-items-center">
//       <div className="mb-0">
//         {/* Input field with pills */}
//         <div
//           className="form-control d-flex flex-wrap align-items-center"
//           style={{ cursor: "text", border: "none" }}
//           onClick={toggleDropdown}
//         >
//           {value.map((item) => (
//             <span
//               key={item}
//               className="badge border me-1 mb-1 d-flex align-items-center"
//               style={{ background: "transparent", color: "#000" }}
//             >
//               {item}
//               <button
//                 type="button"
//                 className="btn-close btn-sm ms-2"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleValueRemove(item);
//                 }}
//               ></button>
//             </span>
//           ))}

//           <input
//             className="flex-grow-1 border-0"
//             style={{
//               outline: "none",
//               boxShadow: "none",
//               background: "transparent",
//               width: "100%",
//             }}
//             placeholder="Search values"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             onFocus={() => setOpen(true)}
//             onBlur={() => setTimeout(() => setOpen(false), 200)}
//           />
//         </div>

//         {/* Dropdown menu */}
//         {open && (
//           <ul className="list-group mt-1 shadow-sm border-0">
//             {filtered.map((item) => (
//               <li
//                 key={item}
//                 className="list-group-item d-flex align-items-center"
//                 style={{
//                   cursor: "pointer",
//                   border: "none",
//                   background: value.includes(item) ? "#2d2d2d" : "#2d2d2d",
//                 }}
//                 onClick={() => handleValueSelect(item)}
//               >
//                 {value.includes(item) && (
//                   <span className="me-2 text-success border-0">✔</span>
//                 )}
//                 {item}
//               </li>
//             ))}

//             {/* Create option */}
//             {!exactOptionMatch && search.trim().length > 0 && (
//               <li
//                 className="list-group-item text-success"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => handleValueSelect("$create")}
//               >
//                 + Create {search}
//               </li>
//             )}

//             {/* Nothing found */}
//             {exactOptionMatch &&
//               search.trim().length > 0 &&
//               filtered.length === 0 && (
//                 <li className="list-group-item text-muted">Nothing found</li>
//               )}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MultiInput;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const groceries = [
  "🍎 Apples",
  "🍌 Bananas",
  "🥦 Broccoli",
  "🥕 Carrots",
  "🍫 Chocolate",
];

const MultiInput = () => {
  const [data, setData] = useState(groceries);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState([]); // removed string[] type
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleValueSelect = (val) => {
    setSearch("");

    if (val === "$create") {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val)
          ? current.filter((v) => v !== val)
          : [...current, val]
      );
    }
  };

  const handleValueRemove = (val) =>
    setValue((current) => current.filter((v) => v !== val));

  const filtered = data.filter((item) =>
    item.toLowerCase().includes(search.trim().toLowerCase())
  );

  const exactOptionMatch = data.some((item) => item === search);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div style={{ minWidth: "100%" }}>
        {/* Input field with pills */}
        <div
          className="form-control d-flex flex-wrap align-items-center"
          style={{ cursor: "text", border: "none" }}
          onClick={toggleDropdown}
        >
          {value.map((item) => (
            <span
              key={item}
              className="badge bg-dark me-1 mb-1 d-flex align-items-center"
              style={{ background: "transparent", color: "#b0b0b0" }}
            >
              {item}
              <button
                type="button"
                className="btn-close btn-close-white btn-sm ms-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleValueRemove(item);
                }}
              ></button>
            </span>
          ))}

          <input
            className="border-0 flex-grow-1"
            placeholder="Search values"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 200)}
          />
        </div>

        {/* Dropdown menu */}
        {open && (
          <ul className="list-group mt-1 shadow-sm">
            {filtered.map((item) => (
              <li
                key={item}
                className={`list-group-item d-flex align-items-center ${
                  value.includes(item) ? "active text-white" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => handleValueSelect(item)}
              >
                {value.includes(item) && <span className="me-2">✔</span>}
                {item}
              </li>
            ))}

            {/* Create option */}
            {!exactOptionMatch && search.trim().length > 0 && (
              <li
                className="list-group-item text-success"
                style={{ cursor: "pointer" }}
                onClick={() => handleValueSelect("$create")}
              >
                + Create {search}
              </li>
            )}

            {/* Nothing found */}
            {exactOptionMatch &&
              search.trim().length > 0 &&
              filtered.length === 0 && (
                <li className="list-group-item text-muted">Nothing found</li>
              )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultiInput;
