import Image, { getImageProps } from "next/image";
import type { Project } from "@/lib/content";

type Props = { project: Project; variant: "desktop" | "mobile"; className?: string; sizes: string };

/**
 * Art-directed project image. The Framer site ships a different crop per breakpoint,
 * so the desktop variant switches between the ≥1920px and 1200–1919px exports with <picture>.
 */
export function ProjectImage({ project, variant, className, sizes }: Props) {
  const alt = `${project.name} website shown on a laptop mockup`;

  if (variant === "mobile") {
    return <Image {...project.images.mobile} alt={alt} sizes={sizes} quality={85} className={className} />;
  }

  const xl = getImageProps({ ...project.images.xl, alt, sizes, quality: 85 }).props;
  const { props } = getImageProps({ ...project.images.desktop, alt, sizes, quality: 85 });

  return (
    <picture>
      <source media="(min-width: 1920px)" srcSet={xl.srcSet} sizes={sizes} />
      <img {...props} alt={alt} className={className} />
    </picture>
  );
}
