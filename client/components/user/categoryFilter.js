import React from "react";

function Categoryfilter({ onSelectCategory }) {
  const categories = [
    { id: 0, name: <h1 className="text-cate text-lg">All Categories</h1> },
    { id: 1, name: <h1 className="text-cate text-lg">General Skills</h1> },
    { id: 2, name: <h1 className="text-cate text-lg">Cryptography</h1> },
    { id: 3, name: <h1 className="text-cate text-lg">Web/Mobile Exploitation</h1> },
    { id: 4, name: <h1 className="text-cate text-lg">Forensics</h1> },
    { id: 5, name: <h1 className="text-cate text-lg">Reverse Engineering</h1> },
  ];

  return (
    <div>
      <h1 className="text-cate menu-title menu text-base-100 text-lg">Category Filter</h1>
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
