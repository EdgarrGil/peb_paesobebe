export default function AboutPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[var(--background-alt)] shadow-lg rounded-sm overflow-hidden">
          <div className="p-8 sm:p-12">
            <h1 className="text-4xl font-extrabold text-center text-[var(--text)] mb-10">ABOUT US</h1>
            
            <div className="space-y-8 text-[var(--text)]">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold border-b-2 border-[var(--primary)] inline-block pb-1">Our Mission</h2>
                <p className="text-lg">
                  PaEsoBebe is dedicated to celebrating and showcasing the vibrant creativity of the Latin urban community. 
                  Our mission is to provide a platform where Spanish-speaking artists, creators, and visionaries can share their work, 
                  tell their stories, and represent our culture—raw, authentic, and unapologetically real.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold border-b-2 border-[var(--primary)] inline-block pb-1">Our Story</h2>
                <p className="text-lg">
                  PaEsoBebe started as a simple idea inspired by a passion for Latin urban culture and a desire to create 
                  something unique for our community. The name comes from a saying that reminds us to embrace life&apos;s 
                  moments and enjoy them to the fullest: &ldquo;Pa&apos; eso bebe!&rdquo;
                </p>
                <p className="text-lg">
                  This platform was born from the realization that while other spaces celebrate different cultures, 
                  there wasn&apos;t a dedicated place for us—a space that truly represents the creativity, energy, and stories 
                  of Spanish-speaking people. PaEsoBebe was created to fill that gap, to amplify our voices, and to shine 
                  a spotlight on the diversity and brilliance of our community.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold border-b-2 border-[var(--primary)] inline-block pb-1">What We Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[var(--background)] p-6 rounded-sm">
                    <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">A Platform for Creators</h3>
                    <p>We provide a space where artists and creators can upload their videos and share their work with the world.</p>
                  </div>
                  <div className="bg-[var(--background)] p-6 rounded-sm">
                    <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">A Celebration of Culture</h3>
                    <p>From music to dance, and everything in between, we celebrate the essence of Latin urban culture in its most authentic form.</p>
                  </div>
                </div>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold border-b-2 border-[var(--primary)] inline-block pb-1">Join Us</h2>
                <p className="text-lg">
                  Whether you&apos;re an artist, a fan, or someone who loves Latin urban culture, PaEsoBebe invites you to be part of our growing community. 
                  Share your talent, discover new creators, and help us continue to showcase the beauty and power of our culture.
                </p>
                <div className="flex justify-center mt-8">
                  <a 
                    href="/upload" 
                    className="px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold rounded-sm transition"
                  >
                    SUBMIT YOUR VIDEO
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 