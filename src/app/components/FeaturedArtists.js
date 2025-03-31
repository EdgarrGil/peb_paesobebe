"use client";
import Image from 'next/image';
import Link from 'next/link';

const FeaturedArtists = () => {
  // Example artist data
  const artists = [
    {
      id: 1,
      name: "Dua Lipa",
      image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&q=80&w=200&h=200",
      genre: "Pop",
      followers: "13.5M",
      latestRelease: "Illusion"
    },
    {
      id: 2,
      name: "Kendrick Lamar",
      image: "https://images.unsplash.com/photo-1539035104074-dee66086b5e3?auto=format&fit=crop&q=80&w=200&h=200",
      genre: "Hip-Hop",
      followers: "18.2M",
      latestRelease: "Not Like Us"
    },
    {
      id: 3,
      name: "Rosalía",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=200&h=200",
      genre: "Flamenco Pop",
      followers: "9.7M",
      latestRelease: "LLYLM"
    },
    {
      id: 4,
      name: "The Weeknd",
      image: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?auto=format&fit=crop&q=80&w=200&h=200",
      genre: "R&B",
      followers: "20.1M",
      latestRelease: "Popular"
    },
    {
      id: 5,
      name: "Billie Eilish",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
      genre: "Alternative",
      followers: "15.8M",
      latestRelease: "LUNCH"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Artists</h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Check out these trending artists and their latest releases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="group">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 relative shadow-md">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-full"></div>
              </div>
              
              <div className="text-center">
                <h3 className="font-bold text-xl mb-1 group-hover:text-indigo-600 transition-colors">
                  {artist.name}
                </h3>
                <p className="text-indigo-600 text-sm font-medium">{artist.genre}</p>
                <p className="text-gray-500 text-sm mt-2">{artist.followers} followers</p>
                <div className="mt-3">
                  <span className="inline-flex items-center bg-gray-100 px-2.5 py-1 rounded-full text-xs font-medium text-gray-800">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                    Latest: {artist.latestRelease}
                  </span>
                </div>
                <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists; 