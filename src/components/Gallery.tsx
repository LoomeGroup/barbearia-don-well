import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";
import { galleryImages } from "../data/content";

export default function Gallery() {
  return (
    <section id="galeria" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="O ambiente"
          title="Galeria"
          description="Um espaço desenhado nos mínimos detalhes: couro, madeira escura e metais dourados sob luz âmbar."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {galleryImages.map((image) => (
            <ImagePlaceholder
              key={image.label}
              label={image.label}
              aspect={image.ratio}
              className={image.ratio === "landscape" ? "col-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
