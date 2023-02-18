import NavbarItem from "./NavbarItem";

const navbarItems = [
  { id: "navbarItem1", title: "Home", href: "/" },
  { id: "navbarItem2", title: "Posts", href: "/post" },
];

export default function Navbar() {
  return (
    <nav className="border-slate-600 border-b-2 bg-black	">
      <ul className="flex flex-row">
        {navbarItems.map((navbarItem) => (
          <NavbarItem
            key={navbarItem.id}
            title={navbarItem.title}
            href={navbarItem.href}
          />
        ))}
      </ul>
    </nav>
  );
}
