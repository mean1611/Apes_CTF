import React from "react";

function Categoryfilter({ onSelectCategory }) {
  const categories = [
    { id: 0, name: "All" },
    { id: 1, name: "General Skills" },
    { id: 2, name: "Cryptography" },
    { id: 3, name: "Web/Mobile Exploitation" },
    { id: 4, name: "Forensics" },
    { id: 5, name: "Reverse Engineering" },
  ];

  return (
    <div>
      <h1 className="menu-title menu text-base-100">Category Filter</h1>
      <ul className="menu">
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory(category.id);
              }}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categoryfilter;
