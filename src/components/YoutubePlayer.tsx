// YouTubePlayer.tsx
import React from "react";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  author?: string;    
}

export default function YouTubePlayer({ videoId, title, author }: YouTubePlayerProps) {
  return (
    <div className="w-full sm:max-w-3xl lg:max-w-6xl mx-auto">
      {title && (
        <h2 className="text-2xl font-bold text-center mb-10 h2-temas">
          {title}
        </h2>
      )}

      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video
                   transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl 
                   hover:shadow-red-500/20"
      >
        <iframe
          className="absolute top-0 left-0 min-w-full min-h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-center mt-5">Créditos: <br /> {author}</p>
    </div>
  );
}
