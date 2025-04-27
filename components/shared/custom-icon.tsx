import { BulbIcon, ChatIcon } from "@/public/icons";
import type { CustomIconProps } from "@/utils/types/shared.types";

export const CustomIcon: React.FC<CustomIconProps> = ({
  className = "",
  iconName,
}) => {
  let icon: React.ReactNode | null = null;

  switch (iconName) {
    case "bulb-icon":
      icon = <BulbIcon className={className} />;
      break;
    case "chat-icon":
      icon = <ChatIcon className={className} />;
      break;
  }

  if (!icon) {
    return null;
  }

  return <span className={className}>{icon}</span>;
};
