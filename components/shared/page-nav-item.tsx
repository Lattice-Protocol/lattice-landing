"use client";

import type {
  MainItemType,
  IconItemType,
  MenuItemType,
} from "fumadocs-ui/layouts/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PageNavItemProps } from "utils/types/shared.types";

export const PageNavItem: React.FC<PageNavItemProps> = ({ item }) => {
  const pathname = usePathname();

  const hasUrl = (
    item: PageNavItemProps["item"]
  ): item is MainItemType | IconItemType => {
    return "url" in item && typeof item.url === "string";
  };

  const active = hasUrl(item) ? pathname.includes(item.url) : false;

  const COMMON_STYLES = {
    container: "flex items-center gap-2 transition-colors text-sm",
    icon: "flex w-4 h-4 mr-1",
    text: "text-foreground/70 hover:text-foreground",
    primary: "text-primary",
    dropdown:
      "absolute hidden group-hover:block top-full left-0 mt-2 w-48 bg-[#211b19] rounded-lg shadow-lg p-2",
    dropdownItem: "p-2 hover:bg-[#2a211f] rounded",
  };

  const renderIcon = (icon?: React.ReactNode) =>
    icon ? <span className={COMMON_STYLES.icon}>{icon}</span> : null;

  const renderText = (text: React.ReactNode) => <span>{text}</span>;

  const renderLinkContent = (
    item: MainItemType | IconItemType | MenuItemType
  ) => (
    <>
      {renderIcon(item.icon)}
      {renderText(item.text)}
    </>
  );

  const renderButtonContent = (
    icon?: React.ReactNode,
    text?: React.ReactNode
  ) => (
    <>
      {renderIcon(icon)}
      {renderText(text)}
    </>
  );

  const getTextColorClass = (isSecondary?: boolean) => {
    if (isSecondary) return COMMON_STYLES.text;
    return active ? COMMON_STYLES.primary : COMMON_STYLES.text;
  };

  switch (item.type) {
    case "custom":
      return <>{item.children}</>;

    case "menu":
      return (
        <div className="relative group">
          <button
            className={`${COMMON_STYLES.container} ${COMMON_STYLES.text}`}
          >
            {renderLinkContent(item)}
          </button>

          <div className={COMMON_STYLES.dropdown}>
            {item.items.map((subItem, index) => (
              <div key={index} className={COMMON_STYLES.dropdownItem}>
                <PageNavItem item={subItem} />
              </div>
            ))}
          </div>
        </div>
      );

    case "icon":
      return (
        <Link
          href={item.url}
          className={`${COMMON_STYLES.container} ${COMMON_STYLES.text}`}
          aria-label={item.label}
        >
          {renderLinkContent(item)}
        </Link>
      );

    case "button":
      return (
        <button
          className={`${COMMON_STYLES.container} ${getTextColorClass(item.secondary)}`}
        >
          {renderButtonContent(item.icon, item.text)}
        </button>
      );

    default:
      return (
        <Link
          href={item.url}
          className={`${COMMON_STYLES.container} ${getTextColorClass()}`}
        >
          {renderLinkContent(item)}
        </Link>
      );
  }
};
