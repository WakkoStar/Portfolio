import { useEffect, useState } from 'react';
import './index.css';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'; // adapte l'alias si nécessaire

const slides = [
  {
    id: 1,
    title: 'SKATE RIDER',
    image: '/icons/skate-rider.png',
    subtitle: 'Jeu de plateforme et skate',
    colors: ['#FEFD3A', '#1A3523'],
    links: [
      {
        name: 'App Store',
        url: 'https://apps.apple.com/fr/app/skate-rider/id1660363826',
      },
      {
        name: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.Carbone.SkateRider&hl=fr',
      },
    ],
  },
  {
    id: 2,
    title: 'MUSIQUE',
    image: '/icons/music.png',
    subtitle: 'Pour écouter mes sons',
    colors: ['#DD0C66', '#711945'],
    links: [
      {
        name: 'Soundcloud',
        url: 'https://soundcloud.com/blacephalone', // corrigé
      },
      {
        name: 'Spotify',
        url: 'https://open.spotify.com/intl-fr/artist/7iAlKJDENBhkat3ChvyrVy',
      },
    ],
  },
  {
    id: 3,
    title: 'MES RESEAUX',
    image: '/icons/blace.png',
    subtitle: 'Suivre mes projets sur Instagram',
    colors: ['#F7F7F7', '#202020'],
    links: [
      {
        name: 'Skate Rider',
        url: 'https://www.instagram.com/blacephalone/',
      },
      {
        name: 'Musique',
        url: 'https://www.instagram.com/blace_music/',
      },
    ],
  },
  {
    id: 4,
    title: 'UNIVERSALIS',
    image: '/icons/saturn.png',
    subtitle: 'Carte 3D en temps réel du ciel',
    colors: ['#1A2957', '#F43D3D'],
    links: [
      {
        name: 'App Store',
        url: 'https://apps.apple.com/fr/app/universalis-3d/id1660394625',
      },
    ],
  },
];

function DiamondRow({ style }) {
  return (
    <div className={`flex justify-center -mt-1`}>
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="w-8 h-8 bg-[#092448] transform rotate-45 shadow-sm m-1.5 shrink-0"
          style={style}
          aria-hidden
        />
      ))}
    </div>
  );
}

export const ProjectCards = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    setSlideIndex(api.selectedScrollSnap());

    api.on('select', () => {
      setSlideIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative flex items-center flex-col gap-4 justify-center p-6 inset-0 min-h-[100dvh]">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10  overflow-hidden transition duration-300"
        style={{ backgroundColor: slides[slideIndex].colors[0] }}
      >
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute -inset-10 blur-3xl">
          <div
            className="rounded-full h-[600px] w-[600px] absolute -top-32 -right-32 bg-[#1A2957] transition duration-300"
            style={{ backgroundColor: slides[slideIndex].colors[1] }}
          />
          <div
            className="rounded-full h-[600px] w-[600px] absolute -bottom-32 -left-32 bg-[#1A2957] transition duration-300"
            style={{ backgroundColor: slides[slideIndex].colors[1] }}
          />
        </div>
      </div>

      {/* Carousel */}
      <Carousel className="max-w-[340px] px-2" setApi={setApi}>
        <CarouselContent className="max-w-[340px]">
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div
                className="w-full h-[520px] shadow-xl overflow-hidden relative"
                style={{ backgroundColor: slide.colors[1] }}
              >
                {/* top navy band */}
                <div
                  className="h-32 flex items-center justify-center px-4 gap-2 w-full "
                  style={{ backgroundColor: slide.colors[0] }}
                >
                  {/* left circles */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: slide.colors[1] }}
                    />
                    <div
                      className="w-10 h-10 rounded-full"
                      style={{ backgroundColor: slide.colors[1] }}
                    />
                  </div>

                  {/* central planet image */}
                  <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  </div>

                  {/* right circles */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-full"
                      style={{ backgroundColor: slide.colors[1] }}
                    />
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: slide.colors[1] }}
                    />
                  </div>
                </div>

                {/* first diamond stripe */}
                <div className="pt-1 pb-1">
                  <DiamondRow style={{ backgroundColor: slide.colors[0] }} />
                </div>

                {/* content area */}
                <div className="px-6 py-[60px] text-white flex flex-col justify-between gap-10">
                  <div>
                    <h3 className="text-2xl font-extrabold leading-6 font-title">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-white/80 font-description">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* dynamic buttons */}
                  <div className="flex gap-4 flex-wrap">
                    {slide.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shadow-none font-links inline-flex items-center border border-black/80 gap-2 px-3 py-2 text-xs font-medium drop-shadow-[-4px_4px_0px_rgba(0,0,0,0.75)]"
                        style={{
                          backgroundColor: slide.colors[1],
                          color: 'white',
                        }}
                      >
                        <span>{link.name.toUpperCase()}</span>
                        <span className="font-medium">▸</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* second diamond stripe */}
                <div className="pt-1 pb-1">
                  <DiamondRow style={{ backgroundColor: slide.colors[0] }} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* pagination dots (statique) */}
      <div className="flex items-center gap-3 z-10">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition duration-150  ${
              idx === slideIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
