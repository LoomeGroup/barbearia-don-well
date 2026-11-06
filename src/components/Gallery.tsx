import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";
import { galleryImages } from "../data/content";

const aspectClasses = {
  square: "aspect-square",
  portrait: "aspect-3/4",
  landscape: "aspect-4/3",
} as const;

export default function Gallery() {
  return (
    <section id="galeria" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="O ambiente"
          title="Galeria"
          description="Um espaço desenhado nos mínimos detalhes: couro, madeira escura e metais dourados sob luz âmbar."
        />

        <div
          className={`mx-auto mt-16 grid gap-4 sm:gap-6 ${
            galleryImages.length > 1 ? "max-w-2xl grid-cols-2" : "max-w-sm grid-cols-1"
          }`}
        >
          {galleryImages.map((image) =>
            image.src ? (
              <div
                key={image.label}
                className={`group relative overflow-hidden rounded-sm border border-gold/15 transition-colors duration-300 hover:border-gold/50 ${aspectClasses[image.ratio]} ${
                  image.ratio === "landscape" ? "col-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            ) : (
              <ImagePlaceholder
                key={image.label}
                label={image.label}
                aspect={image.ratio}
                className={image.ratio === "landscape" ? "col-span-2" : ""}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
