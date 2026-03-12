import Image from "next/image";

const projects = [
  {
    id: 1,
    location: "VENICE BEACH",
    title: "Coastal Modern Loft",
    description:
      "Removing load-bearing walls to create a seamless indoor-outdoor flow.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    location: "BEVERLY HILLS",
    title: "Mid-Century Restoration",
    description:
      "Removing load-bearing walls to create a seamless indoor-outdoor flow.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    location: "SANTA MONICA",
    title: "Open Concept Living",
    description:
      "Removing load-bearing walls to create a seamless indoor-outdoor flow.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function SelectedWorks() {
  return (
    <section id="selected-works" className="w-full bg-white flex flex-col gap-10">
      {/* Section Header */}
      <div className="flex flex-col gap-3 pt-16 px-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-px bg-atlas-charcoal" />
          <span className="font-mono text-sm font-medium tracking-[0.1em] text-atlas-charcoal uppercase">
            selected works
          </span>
        </div>
        <h2 className="font-nineties text-[44px] leading-[1.2] text-atlas-dark">
          Spaces that inspire.
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="flex h-[600px] gap-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex-1 overflow-hidden group cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #000000BB 8%, #00000000 100%)",
              }}
            />
            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
              <span className="font-mono text-xs font-medium tracking-[0.25em] text-[#ecece3cc]">
                {project.location}
              </span>
              <h3 className="font-nineties text-[32px] leading-[1.2] text-[#ecece3]">
                {project.title}
              </h3>
              <p className="font-mono text-sm leading-[1.5] text-[#ecece3cc] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
