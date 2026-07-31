import { Link } from "react-router-dom";

interface WorkCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  comingSoon?: boolean;
}

const WorkCard = ({ title, description, href, image, comingSoon }: WorkCardProps) => {
  return (
    <Link
      to={comingSoon ? "#" : href}
      className={`block group relative transition-all duration-500 hover:-translate-y-2 ${comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <div className="relative overflow-hidden rounded-[18px] bg-card shadow-subtle border border-border/40 flex flex-col h-full bg-white dark:bg-[#111111]">
        {/* Thumbnail Area */}
        <div className="aspect-[21/9] overflow-hidden relative">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={840}
            height={360}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {!image && !comingSoon && (
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 to-foreground flex items-center justify-center">
               <span className="text-[10px] text-background/20 uppercase tracking-widest font-medium">Preview</span>
            </div>
          )}
          {comingSoon && (
            <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] flex items-center justify-center">
              <span className="px-4 py-1.5 rounded-full bg-foreground text-background text-[10px] font-bold tracking-widest uppercase">
                COMING SOON
              </span>
            </div>
          )}
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col flex-1 relative z-10">
          <h3
            className="text-[17px] font-bold tracking-tight mb-1 text-foreground group-hover:text-foreground/80 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {title}
          </h3>
          <p className="text-[13px] leading-relaxed text-muted-foreground/80 line-clamp-2 font-medium">
            {description}
          </p>

          <div className="mt-auto pt-3 flex items-center gap-2 text-[10px] font-bold tracking-wider text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
            View Case Study
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
