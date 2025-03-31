"use client";
import { useState, useEffect } from 'react';
import { format, subDays } from 'date-fns';
import Link from 'next/link';

const VideoGrid = () => {
  // Video data with Dominican/Spanish cultural content
  const videoData = [
    // Today's videos
    {
      id: 1,
      title: "Latino Gang - Pa Eso Bebe [Official Video]",
      thumbnail: `https://img.youtube.com/vi/8Y1GKpC2ZtQ/maxresdefault.jpg`,
      views: "1.2M",
      comments: "5.7K",
      duration: "3:45",
      creator: "Latino Gang",
      videoId: "8Y1GKpC2ZtQ",
      uploadDate: new Date() // Today
    },
    {
      id: 2,
      title: "El Alfa - 4K (Video Oficial)",
      thumbnail: `https://img.youtube.com/vi/NGX3yZbcO0k/maxresdefault.jpg`,
      views: "67M",
      comments: "8.4K",
      duration: "3:03",
      creator: "El Alfa El Jefe",
      videoId: "NGX3yZbcO0k",
      uploadDate: new Date() // Today
    },
    {
      id: 3,
      title: "Bachata Dominicana Mix 2023 | The Best of Dominican Bachata Music",
      thumbnail: `https://img.youtube.com/vi/n2-_dGbBxN0/maxresdefault.jpg`,
      views: "5.7M",
      comments: "2.3K",
      duration: "54:12",
      creator: "Latin Classics",
      videoId: "n2-_dGbBxN0",
      uploadDate: new Date() // Today
    },
    {
      id: 4,
      title: "LA INSUPERABLE ❌ MARGARITA PRO - CUATRO COPAS [VIDEO OFICIAL 4K]",
      thumbnail: `https://img.youtube.com/vi/lFfP-VhKxG0/maxresdefault.jpg`,
      views: "2.7M",
      comments: "1.5K",
      duration: "4:12",
      creator: "La Insuperable TV",
      videoId: "lFfP-VhKxG0",
      uploadDate: new Date() // Today
    },
    {
      id: 5,
      title: "ROCHY RD ❌ CHRISJUSTICE ❌ BELLAQUEO DOMINICANO (Video Oficial)",
      thumbnail: `https://img.youtube.com/vi/e2X7vZXU_wo/maxresdefault.jpg`,
      views: "8.2M",
      comments: "7.2K",
      duration: "3:37",
      creator: "Rochy RD",
      videoId: "e2X7vZXU_wo",
      uploadDate: new Date() // Today
    },
    {
      id: 6,
      title: "Dominican Republic Travel Guide: Best Places to Visit",
      thumbnail: `https://img.youtube.com/vi/QoIDwQRnTJc/maxresdefault.jpg`,
      views: "1.8M",
      comments: "1.1K",
      duration: "12:45",
      creator: "Mark Wiens",
      videoId: "QoIDwQRnTJc",
      uploadDate: new Date() // Today
    },
    {
      id: 7,
      title: "Tradicional Merengue Dominicano Mix 2023 | Best Classic Merengue",
      thumbnail: `https://img.youtube.com/vi/l-HHMw0p-O0/maxresdefault.jpg`,
      views: "4.3M",
      comments: "2.1K",
      duration: "1:02:20",
      creator: "Merengue Kings",
      videoId: "l-HHMw0p-O0",
      uploadDate: new Date() // Today
    },
    {
      id: 8,
      title: "LA MANTA - EL FAVORITO DEL PUEBLO - EL MAYOR CLASICO (VIDEO OFICIAL)",
      thumbnail: `https://img.youtube.com/vi/ynH-CUBIWXw/maxresdefault.jpg`,
      views: "5.6M",
      comments: "2.8K",
      duration: "3:41",
      creator: "El Mayor Clasico",
      videoId: "ynH-CUBIWXw",
      uploadDate: new Date() // Today
    },
    {
      id: 9,
      title: "La cultura dominicana: tradiciones y costumbres",
      thumbnail: `https://img.youtube.com/vi/3p2jHbeumqQ/maxresdefault.jpg`,
      views: "345K",
      comments: "1.7K",
      duration: "16:40",
      creator: "Cultura RD",
      videoId: "3p2jHbeumqQ",
      uploadDate: new Date() // Today
    },
    {
      id: 10,
      title: "Romeo Santos, Monchy & Alexandra - Años Luz (Official Video)",
      thumbnail: `https://img.youtube.com/vi/1gX8FpjQRks/maxresdefault.jpg`,
      views: "29M",
      comments: "8.9K",
      duration: "4:25",
      creator: "Romeo Santos",
      videoId: "1gX8FpjQRks",
      uploadDate: new Date() // Today
    },
    {
      id: 11,
      title: "Dembow Mix 2023 | Lo Mejor del Dembow Dominicano",
      thumbnail: `https://img.youtube.com/vi/8GQFXSZKEno/maxresdefault.jpg`,
      views: "6.7M",
      comments: "3.2K",
      duration: "25:30",
      creator: "Dembow RD",
      videoId: "8GQFXSZKEno",
      uploadDate: new Date() // Today
    },
    {
      id: 12,
      title: "Shakira, Ozuna - Monotonía (Official Video)",
      thumbnail: `https://img.youtube.com/vi/j5y6xLFdccI/maxresdefault.jpg`,
      views: "187M",
      comments: "156K",
      duration: "3:09",
      creator: "Shakira",
      videoId: "j5y6xLFdccI",
      uploadDate: new Date() // Today
    },
    
    // Yesterday's videos
    {
      id: 13,
      title: "Bad Bunny - MONACO (Official Video)",
      thumbnail: `https://img.youtube.com/vi/eIeX_GPhyTc/maxresdefault.jpg`,
      views: "112M",
      comments: "45K",
      duration: "4:02",
      creator: "Bad Bunny",
      videoId: "eIeX_GPhyTc",
      uploadDate: subDays(new Date(), 1) // Yesterday
    },
    {
      id: 14,
      title: "Los Mejores Lugares para Visitar en Santo Domingo",
      thumbnail: `https://img.youtube.com/vi/rH7eSGrtoEk/maxresdefault.jpg`,
      views: "445K",
      comments: "2.1K",
      duration: "18:45",
      creator: "Turismo RD",
      videoId: "rH7eSGrtoEk",
      uploadDate: subDays(new Date(), 1) // Yesterday
    },
    {
      id: 15,
      title: "J Balvin, Bad Bunny - QUE PRETENDES (Official Video)",
      thumbnail: `https://img.youtube.com/vi/iQEVguV71sI/maxresdefault.jpg`,
      views: "527M",
      comments: "87K",
      duration: "4:03",
      creator: "J Balvin",
      videoId: "iQEVguV71sI",
      uploadDate: subDays(new Date(), 1) // Yesterday
    },
    {
      id: 16,
      title: "Juan Luis Guerra 4.40 - Visa Para Un Sueño (Official Video)",
      thumbnail: `https://img.youtube.com/vi/oq_z4MH5a_M/maxresdefault.jpg`,
      views: "23M",
      comments: "5.5K",
      duration: "4:15",
      creator: "Juan Luis Guerra",
      videoId: "oq_z4MH5a_M",
      uploadDate: subDays(new Date(), 1) // Yesterday
    },
    {
      id: 17,
      title: "La Gastronomía Dominicana | Sabores y Tradiciones",
      thumbnail: `https://img.youtube.com/vi/8EXxFWMbnMg/maxresdefault.jpg`,
      views: "367K",
      comments: "1.8K",
      duration: "18:40",
      creator: "Cocina Dominicana",
      videoId: "8EXxFWMbnMg",
      uploadDate: subDays(new Date(), 1) // Yesterday
    },
    {
      id: 18,
      title: "Aventura - Dile Al Amor (Official HD Video)",
      thumbnail: `https://img.youtube.com/vi/yFKT_JEQZOU/maxresdefault.jpg`,
      views: "289M",
      comments: "58K",
      duration: "4:27",
      creator: "Aventura",
      videoId: "yFKT_JEQZOU",
      uploadDate: subDays(new Date(), 1) // Yesterday
    },
    {
      id: 19,
      title: "Comida Callejera en Santo Domingo 🇩🇴 Street Food Dominican Republic",
      thumbnail: `https://img.youtube.com/vi/kXyoQVLU6r4/maxresdefault.jpg`,
      views: "412K",
      comments: "2.0K",
      duration: "16:15",
      creator: "Food Ranger",
      videoId: "kXyoQVLU6r4",
      uploadDate: subDays(new Date(), 1) // Yesterday
    },
    {
      id: 20,
      title: "El Gran Poder de Dios - El Alfa El Jefe x Nicky Jam x Farruko (Video Oficial)",
      thumbnail: `https://img.youtube.com/vi/SFNhpsJ16Qc/maxresdefault.jpg`,
      views: "34M",
      comments: "15K",
      duration: "4:27",
      creator: "El Alfa El Jefe",
      videoId: "SFNhpsJ16Qc",
      uploadDate: subDays(new Date(), 1) // Yesterday
    },
    
    // Two days ago
    {
      id: 21,
      title: "Rauw Alejandro, Rosalía - Beso (Official Video)",
      thumbnail: `https://img.youtube.com/vi/hf8_Lm7x9_w/maxresdefault.jpg`,
      views: "32M",
      comments: "16K",
      duration: "2:45",
      creator: "Rauw Alejandro",
      videoId: "hf8_Lm7x9_w",
      uploadDate: subDays(new Date(), 2) // Two days ago
    },
    {
      id: 22,
      title: "Carnaval de La Vega 2023 | Dominican Republic's Biggest Carnival",
      thumbnail: `https://img.youtube.com/vi/FnZ0qmLBU9I/maxresdefault.jpg`,
      views: "2.7M",
      comments: "1.2K",
      duration: "15:22",
      creator: "Cultura Caribeña",
      videoId: "FnZ0qmLBU9I",
      uploadDate: subDays(new Date(), 2) // Two days ago
    },
    {
      id: 23,
      title: "Fefita La Grande - El Tiguerón (Merengue Típico)",
      thumbnail: `https://img.youtube.com/vi/PeDOA1sTSgw/maxresdefault.jpg`,
      views: "1.9M",
      comments: "892",
      duration: "3:33",
      creator: "Música Típica RD",
      videoId: "PeDOA1sTSgw",
      uploadDate: subDays(new Date(), 2) // Two days ago
    }
  ];

  // Group videos by date
  const groupVideosByDate = (videos) => {
    const groupedVideos = {};
    
    videos.forEach(video => {
      const dateKey = format(video.uploadDate, 'yyyy-MM-dd');
      if (!groupedVideos[dateKey]) {
        groupedVideos[dateKey] = {
          dateLabel: format(video.uploadDate, 'MMMM d, yyyy'),
          videos: []
        };
      }
      groupedVideos[dateKey].videos.push(video);
    });
    
    // Sort by date (newest first)
    return Object.keys(groupedVideos)
      .sort((a, b) => new Date(b) - new Date(a))
      .map(key => ({
        date: key,
        dateLabel: groupedVideos[key].dateLabel,
        videos: groupedVideos[key].videos,
        count: groupedVideos[key].videos.length
      }));
  };

  // Group the videos by date
  const videosByDate = groupVideosByDate(videoData);

  return (
    <div className="bg-[var(--background)] px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <div className="container mx-auto">
        {videosByDate.map((dayGroup) => (
          <div key={dayGroup.date} className="mb-16">
            {/* Day header with date and video count */}
            <div className="border-b border-[var(--border)] pb-2 mb-6">
              <h2 className="text-2xl font-bold text-[var(--text)]">
                {dayGroup.dateLabel}
                <span className="text-sm text-[var(--text-secondary)] ml-2">({dayGroup.count} videos)</span>
              </h2>
            </div>

            {/* Videos for this day */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {dayGroup.videos.map((video) => (
                <Link href={`/video/${video.id}`} key={video.id} className="group bg-[var(--background-alt)] rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Video thumbnail with duration */}
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all"></div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs text-white rounded-sm">
                      {video.duration}
                    </div>
                  </div>
                  
                  {/* Video info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[var(--text)] mb-1 line-clamp-2">{video.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--text-secondary)]">{video.creator}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-[var(--text-secondary)] flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                          </svg>
                          {video.views}
                        </span>
                        <span className="text-sm text-[var(--text-secondary)] flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                          </svg>
                          {video.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid; 