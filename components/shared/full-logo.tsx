import type { FullLogoProps } from "@/utils/types/shared.types";
import Image from "next/image";

export const FullLogo: React.FC<FullLogoProps> = ({
  className = "",
  size = 32,
}) => {
  return (
    <figure className={`flex items-center gap-2 text-xl ${className}`}>
      <Image
        src="/brand/logo.svg"
        alt="Lattice AI"
        width={size}
        height={size}
      />

      <figcaption className="font-semibold">Lattice AI</figcaption>
    </figure>
  );
};
