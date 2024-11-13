export default function Sidebar({ isOpen }) {
  const links = [
    {
      label: "Dashboard",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      label: "Skill Test",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      label: "Internship",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 z-10 border-r bg-white font-medium
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 pt-16
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="py-6 space-y-6">
        <nav className="space-y-2">
          {links.map(({ label, icon }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center px-6 py-4 transition-colors duration-200
                hover:bg-[#F4F6F8] hover:text-[#3B51DB] rounded-r-full w-56
                ${label === "Skill Test" ? "bg-[#F4F6F8] text-[#3B51DB]" : ""}`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={icon}
                />
              </svg>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
