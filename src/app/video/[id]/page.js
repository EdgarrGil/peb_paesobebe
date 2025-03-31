"use client";
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { format, subDays } from 'date-fns';

// Mock data - would normally be fetched from an API
const getVideoData = (id) => {
  const videos = {
    '1': {
      id: '1',
      title: 'Latino Gang - Pa Eso Bebe [Official Video]',
      description: 'Latino Gang presents "Pa Eso Bebe" official music video. The track that inspired this platform, showcasing the vibrant Latin urban culture.',
      views: '1.2M',
      likes: '45K',
      date: format(new Date(), 'MMM dd, yyyy'),
      videoUrl: 'https://www.youtube.com/watch?v=8Y1GKpC2ZtQ',
      videoId: '8Y1GKpC2ZtQ',
      thumbnailUrl: '/placeholder-video.jpg', // Local image instead of external URL
    },
    '2': {
      id: '2',
      title: 'El Alfa - 4K (Video Oficial)',
      description: 'El Alfa El Jefe presents the official video for "4K" - one of the biggest Dominican dembow hits showcasing the vibrant energy and style of Dominican urban music.',
      views: '67M',
      likes: '1.2M',
      date: format(subDays(new Date(), 2), 'MMM dd, yyyy'),
      videoUrl: 'https://www.youtube.com/watch?v=NGX3yZbcO0k',
      videoId: 'NGX3yZbcO0k',
      thumbnailUrl: '/images/video2.jpg',
    },
    '3': {
      id: '3',
      title: 'Bachata Dominicana Mix 2023 | The Best of Dominican Bachata Music',
      description: 'Experience the soul of the Dominican Republic with this collection of the best bachata tracks. Featuring classic and contemporary bachata songs that capture the essence of this beautiful genre.',
      views: '5.7M',
      likes: '87K',
      date: format(subDays(new Date(), 3), 'MMM dd, yyyy'),
      videoUrl: 'https://www.youtube.com/watch?v=n2-_dGbBxN0',
      videoId: 'n2-_dGbBxN0',
      thumbnailUrl: '/images/video3.jpg',
    },
    '4': {
      id: '4',
      title: 'LA INSUPERABLE ❌ MARGARITA PRO - CUATRO COPAS [VIDEO OFICIAL 4K]',
      description: 'La Insuperable teams up with Margarita Pro for this powerful collaboration "Cuatro Copas". The video showcases the talent and unique style that has made Dominican artists increasingly popular worldwide.',
      views: '2.7M',
      likes: '72K',
      date: format(subDays(new Date(), 4), 'MMM dd, yyyy'),
      videoUrl: 'https://www.youtube.com/watch?v=lFfP-VhKxG0',
      videoId: 'lFfP-VhKxG0',
      thumbnailUrl: '/images/video4.jpg',
    },
    '5': {
      id: '5',
      title: 'ROCHY RD ❌ CHRISJUSTICE ❌ BELLAQUEO DOMINICANO (Video Oficial)',
      description: 'Rochy RD and Chrisjustice bring the authentic Dominican street sound with "Bellaqueo Dominicano". This collaboration represents the evolution of urban music in the DR.',
      views: '8.2M',
      likes: '127K',
      date: format(subDays(new Date(), 5), 'MMM dd, yyyy'),
      videoUrl: 'https://www.youtube.com/watch?v=e2X7vZXU_wo',
      videoId: 'e2X7vZXU_wo',
      thumbnailUrl: '/images/video5.jpg',
    },
    '6': {
      id: '6',
      title: 'Dominican Republic Travel Guide: Best Places to Visit',
      description: 'Explore the most beautiful destinations in the Dominican Republic in this comprehensive travel guide. From pristine beaches to mountain landscapes, discover the natural wonders of this Caribbean paradise.',
      views: '1.8M',
      likes: '43K',
      date: format(subDays(new Date(), 6), 'MMM dd, yyyy'),
      videoUrl: 'https://www.youtube.com/watch?v=QoIDwQRnTJc',
      videoId: 'QoIDwQRnTJc',
      thumbnailUrl: '/images/video6.jpg',
    },
    '7': {
      id: '7',
      title: 'Tradicional Merengue Dominicano Mix 2023 | Best Classic Merengue',
      description: 'A compilation of the most iconic traditional merengue songs from the Dominican Republic. Experience the rhythm and joy of this essential Dominican musical genre that has captivated the world.',
      views: '4.3M',
      likes: '78K',
      date: format(subDays(new Date(), 7), 'MMM dd, yyyy'),
      videoUrl: 'https://www.youtube.com/watch?v=l-HHMw0p-O0',
      videoId: 'l-HHMw0p-O0',
      thumbnailUrl: '/images/video7.jpg',
    },
    '8': {
      id: '8',
      title: 'LA MANTA - EL FAVORITO DEL PUEBLO - EL MAYOR CLASICO (VIDEO OFICIAL)',
      description: 'El May',
      views: '5.6M',
      likes: '89K',
      date: format(subDays(new Date(), 8), 'MMM dd, yyyy'),
      videoUrl: 'https://www.youtube.com/watch?v=ynH-CUBIWXw',
      videoId: 'ynH-CUBIWXw',
      thumbnailUrl: '/images/video8.jpg',
    },
    '9': {
      id: '9',
      title: 'La cultura dominicana: tradiciones y costumbres',
      description: 'An insightful documentary exploring the rich cultural heritage of the Dominican Republic. Discover the traditions, customs, and celebrations that form the identity of the Dominican people.',
      views: '345K',
      likes: '18K',
      date: format(subDays(new Date(), 9), 'MMM dd, yyyy'),
      videoUrl: 'https://www.youtube.com/watch?v=3p2jHbeumqQ',
      videoId: '3p2jHbeumqQ',
      thumbnailUrl: '/images/video9.jpg',
    },
    '10': {
      id: '10',
      title: 'Romeo Santos, Monchy & Alexandra - Años Luz (Official Video)',
      description: 'Romeo Santos collaborates with bachata legends Monchy & Alexandra for "Años Luz". This beautiful bachata track combines the talents of three of the most important figures in modern Dominican music.',
      views: '29M',
      likes: '412K',
      date: format(subDays(new Date(), 10), 'MMM dd, yyyy'),
      videoUrl: 'https://www.youtube.com/watch?v=1gX8FpjQRks',
      videoId: '1gX8FpjQRks',
      thumbnailUrl: '/images/video10.jpg',
    },
  };

  return videos[id] || videos['1']; // Default to first video if ID not found
};

// Mock comments - would normally be fetched from an API
const getComments = () => {
  return [
    {
      id: '1',
      username: 'latin_fan_123',
      avatar: '/images/avatar1.jpg',
      text: 'This video is incredible! The energy is amazing.',
      date: '9/10/23',
      likes: 45,
      isAnonymous: false,
    },
    {
      id: '2',
      username: 'Anonymous',
      avatar: null,
      text: 'Been waiting for this for so long! Did not disappoint!',
      date: '9/9/23',
      likes: 32,
      isAnonymous: true,
    },
    {
      id: '3',
      username: 'reggaeton_queen',
      avatar: '/images/avatar3.jpg',
      text: 'The production quality is top notch. Love everything about this.',
      date: '9/8/23',
      likes: 27,
      isAnonymous: false,
    },
  ];
};

export default function VideoPage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const videoData = getVideoData(id);
  const comments = getComments();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const videoRef = useRef(null);

  // Placeholder image until we have real video thumbnails
  const placeholderImage = videoData.thumbnailUrl || "https://via.placeholder.com/1280x720";

  const handlePlayPause = () => {
    // Simply toggle the playing state - no need for videoRef since we're using an iframe
    setIsPlaying(!isPlaying);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the comment to your backend
    console.log('Comment submitted:', { text: commentText, isAnonymous });
    // Clear the comment text
    setCommentText('');
    // Reset anonymous setting
    setIsAnonymous(false);
    // For demo purposes, you could add the comment to the local state
    // and display it immediately
  };

  return (
    <div className="bg-[var(--background)] min-h-screen">
      {/* Video Hero Section - Full Width */}
      <div className="bg-black w-full">
        <div className="max-w-7xl mx-auto relative">
          <div className="relative aspect-video"> {/* 16:9 Aspect Ratio */}
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {/* Blurred background for thumbnail */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
                  <div className="w-full h-full scale-110 blur-xl opacity-50"
                       style={{
                         backgroundImage: `url('https://img.youtube.com/vi/${videoData.videoId}/maxresdefault.jpg')`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                       }}>
                  </div>
                </div>
                
                {/* Actual thumbnail */}
                <div className="relative z-20 w-full h-full flex items-center justify-center">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <Image 
                    src={`https://img.youtube.com/vi/${videoData.videoId}/maxresdefault.jpg`}
                    alt={videoData.title}
                    width={1280}
                    height={720}
                    className="w-full h-full object-contain max-h-[80vh]"
                  />
                  <button 
                    onClick={handlePlayPause}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-24 h-24 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg transform transition-all group-hover:scale-110 group-hover:bg-[var(--primary-hover)]">
                      <svg className="w-12 h-12 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoData.videoId || '8Y1GKpC2ZtQ'}?autoplay=1`}
                title={videoData.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Info */}
            <div className="bg-[var(--background-alt)] rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="p-6">
                <h1 className="text-3xl font-bold text-[var(--text)] mb-4">{videoData.title}</h1>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-5 text-[var(--text-secondary)]">
                    <span className="flex items-center text-sm">
                      <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                      {videoData.views} views
                    </span>
                    <span className="h-5 w-[1px] bg-[var(--border)]"></span>
                    <span className="text-sm">{videoData.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center space-x-2 py-2 px-4 rounded-full transition ${
                        liked 
                          ? 'bg-[var(--primary)] text-white' 
                          : 'bg-[var(--background)] text-[var(--text-secondary)] hover:bg-[var(--border)]'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
                      </svg>
                      <span>{liked ? (parseInt(videoData.likes.replace(/[^\d]/g, '')) + 1).toLocaleString() + (videoData.likes.includes('K') ? 'K' : '') : videoData.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 py-2 px-4 rounded-full bg-[var(--background)] text-[var(--text-secondary)] hover:bg-[var(--border)] transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                      </svg>
                      <span>Share</span>
                    </button>
                    <button 
                      onClick={() => setSaved(!saved)}
                      className={`flex items-center space-x-2 py-2 px-4 rounded-full transition ${
                        saved 
                          ? 'bg-[var(--primary)] text-white' 
                          : 'bg-[var(--background)] text-[var(--text-secondary)] hover:bg-[var(--border)]'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                      </svg>
                      <span>{saved ? 'Saved' : 'Save'}</span>
                    </button>
                  </div>
                </div>
                <div className="border-t border-[var(--border)] pt-6">
                  <p className="text-[var(--text)] whitespace-pre-line leading-relaxed">{videoData.description}</p>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-[var(--background-alt)] rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center text-2xl font-bold text-[var(--text)] mb-4 group"
                  >
                    <span>{comments.length} Comments</span>
                    <svg 
                      className={`w-6 h-6 ml-2 transform transition-transform ${showComments ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                {showComments && (
                  <>
                    {/* Comment Form */}
                    <div className="flex space-x-4 mb-8 mt-4 bg-[var(--background)] p-4 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {isAnonymous ? "A" : "U"}
                      </div>
                      <div className="flex-grow">
                        <form onSubmit={handleCommentSubmit}>
                          <input
                            type="text"
                            placeholder="Add a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            className="w-full p-3 bg-transparent border-b border-[var(--border)] text-[var(--text)] focus:outline-none focus:border-[var(--primary)]"
                          />
                          <div className="flex justify-between mt-3">
                            <label className="flex items-center text-[var(--text-secondary)]">
                              <input
                                type="checkbox"
                                checked={isAnonymous}
                                onChange={(e) => setIsAnonymous(e.target.checked)}
                                className="mr-2"
                              />
                              Post anonymously
                            </label>
                            <div className="space-x-3">
                              <button
                                type="button"
                                onClick={() => setCommentText('')}
                                className="px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text)] transition"
                              >
                                CANCEL
                              </button>
                              <button
                                type="submit"
                                disabled={!commentText.trim()}
                                className={`px-4 py-2 rounded-full font-medium ${
                                  commentText.trim()
                                    ? 'bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white'
                                    : 'bg-[var(--background-alt)] text-[var(--text-secondary)]'
                                } transition`}
                              >
                                COMMENT
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    
                    {/* Comments List */}
                    <div className="space-y-6">
                      {comments.map((comment) => (
                        <div key={comment.id} className="flex space-x-4 bg-[var(--background)] p-4 rounded-lg hover:shadow-md transition">
                          <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden">
                            {comment.isAnonymous ? (
                              <div className="w-full h-full bg-gray-500 flex items-center justify-center text-white text-sm font-bold">
                                A
                              </div>
                            ) : (
                              <Image
                                src={comment.avatar || "https://via.placeholder.com/40"}
                                alt={comment.username}
                                width={40}
                                height={40}
                                className="object-cover"
                              />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <h4 className="text-[var(--text)] font-medium mr-2">{comment.username}</h4>
                              <span className="text-[var(--text-secondary)] text-sm">{comment.date}</span>
                            </div>
                            <p className="text-[var(--text)] mb-2">{comment.text}</p>
                            <div className="flex items-center space-x-4 text-[var(--text-secondary)]">
                              <button className="flex items-center space-x-1 hover:text-[var(--primary)] transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
                                </svg>
                                <span>{comment.likes}</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-[var(--primary)] transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2z" />
                                </svg>
                              </button>
                              <button className="hover:text-[var(--primary)] transition">REPLY</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Sidebar - Recommended Videos */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--background-alt)] rounded-lg shadow-lg overflow-hidden sticky top-4">
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text)] mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                  </svg>
                  Recommended Videos
                </h3>
                <div className="space-y-5">
                  {/* Recommended videos would be mapped from an API response */}
                  <Link href="/video/2" className="block group">
                    <div className="relative mb-2 overflow-hidden rounded-lg shadow-md aspect-video">
                      <Image
                        src="/images/video2.jpg"
                        alt="Thumbnail"
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition duration-300"></div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">4:35</div>
                    </div>
                    <h4 className="text-[var(--text)] group-hover:text-[var(--primary)] transition line-clamp-2 font-medium mb-1">
                      Exclusive Interview with Bad Bunny
                    </h4>
                    <p className="text-[var(--text-secondary)] text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                      512K views • 7/28/23
                    </p>
                  </Link>
                  <Link href="/video/3" className="block group">
                    <div className="relative mb-2 overflow-hidden rounded-lg shadow-md aspect-video">
                      <Image
                        src="/images/video3.jpg"
                        alt="Thumbnail"
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition duration-300"></div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">10:12</div>
                    </div>
                    <h4 className="text-[var(--text)] group-hover:text-[var(--primary)] transition line-clamp-2 font-medium mb-1">
                      Behind the Scenes: Making of &ldquo;La Última&rdquo;
                    </h4>
                    <p className="text-[var(--text-secondary)] text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                      168K views • 6/20/23
                    </p>
                  </Link>
                  <div className="pt-4 border-t border-[var(--border)]">
                    <button className="w-full py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-lg font-medium transition">
                      BROWSE MORE VIDEOS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 