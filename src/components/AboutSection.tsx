"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 items-center">
          <div>
            <img
              src="https://placehold.co/600x500/8B4513/FFFFFF?text=Master+Barber+Tony"
              className="w-full rounded-2xl shadow-2xl"
              alt="Master Barber Tony"
            />
          </div>
          <div>
            <h2 className="text-4xl max-sm:text-3xl font-bold text-[#fff] mb-6">
              Meet Tony, Master Barber
            </h2>
            <p className="text-lg text-[#ccc] mb-6 leading-relaxed">
              With over 8 years of experience in the barbering industry, Tony
              brings traditional craftsmanship to modern styling. Trained in
              classic techniques and constantly evolving with contemporary
              trends, he ensures every client leaves looking and feeling their
              best.
            </p>
            <p className="text-lg text-[#ccc] mb-8 leading-relaxed">
              Located in the heart of Watertown, North Country Cuts has become
              the go-to destination for discerning gentlemen who appreciate
              quality, attention to detail, and exceptional service.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#2a2a2a] p-6 rounded-xl border border-[#444]">
                <h4 className="text-xl font-bold text-[#d4af37] mb-2">
                  Certified Professional
                </h4>
                <p className="text-[#ccc]">
                  Licensed barber with advanced training in classic and modern
                  techniques
                </p>
              </div>
              <div className="bg-[#2a2a2a] p-6 rounded-xl border border-[#444]">
                <h4 className="text-xl font-bold text-[#d4af37] mb-2">
                  Local Expertise
                </h4>
                <p className="text-[#ccc]">
                  Deep understanding of Northern NY style preferences and
                  climate considerations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
