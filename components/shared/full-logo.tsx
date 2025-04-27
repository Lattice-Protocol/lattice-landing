import type { FullLogoProps } from "@/utils/types/shared.types";
import Image from "next/image";

export const FullLogo: React.FC<FullLogoProps> = ({ className = "" }) => {
  return (
    <figure className={`flex items-center gap-2 ${className}`}>
      <Image src="/brand/logo.svg" alt="Lattice AI" width={32} height={32} />

      <figcaption className="font-semibold text-xl font-plex font-plex">
        Lattice AI
      </figcaption>
    </figure>
  );
};
