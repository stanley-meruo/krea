"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode; // Custom icon JSX
  label: string;
  className?: string; // Styles for the whole Link
  iconWrapperClassName?: string; // Styles only for the icon wrapper
  showTooltip?: boolean;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  icon,
  label,
  className = "",
  iconWrapperClassName = "",
  showTooltip = true,
  mobile = false,
  onClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  if (mobile) {
    // Mobile drawer style
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`flex items-center gap-2 font-semibold ${
          isActive
            ? "text-black dark:text-white"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <span className={`p-1.5 rounded-lg grid size-8 text-white ${iconWrapperClassName}`}>{icon}</span>
        {label}
      </Link>
    );
  }

  // Desktop style
  return (
    <Link
      href={href}
      className={`relative group grid h-10 w-12 p-1 rounded-xl cursor-pointer transition ${className} ${
        isActive
          ? "bg-white shadow dark:bg-white dark:text-black"
          : "bg-transparent text-black dark:bg-transparent dark:text-white"
      }`}
    >
      <span className={`m-auto ${iconWrapperClassName}`}>{icon}</span>

      {showTooltip && (
        <span
          className="absolute top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs 
                         text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-lg 
                         opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
        >
          {label}
        </span>
      )}
    </Link>
  );
};

export default NavLink;
