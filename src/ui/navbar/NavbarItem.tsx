import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

export default function NavbarItem({ href, title }: Props) {
  return (
    <li>
      <Link href={href} className="block py-2 px-4 text-white">
        {title}
      </Link>
    </li>
  );
}
