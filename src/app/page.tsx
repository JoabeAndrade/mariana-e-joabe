"use client";

import { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";

const dancin = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-embed",
});

export default function Home() {
  const images = [
    "/img/img1.jpeg",
    "/img/img2.jpeg",
    "/img/img3.jpeg",
    "/img/img4.jpeg",
    "/img/img5.jpeg",
    "/img/img6.jpeg",
    "/img/img7.jpeg",
    "/img/img8.jpeg",
    "/img/img9.jpeg",
    "/img/img10.jpeg",
    "/img/img11.jpeg",
    "/img/img12.jpeg",
    "/img/img13.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  // Função que retorna a URL do vídeo incorporado com autoplay e mute
  const getEmbedUrl = (url: string): string => {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^&]+)/
    );
    const videoId = videoIdMatch ? videoIdMatch[1] || videoIdMatch[2] : null;

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
      : "";
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex justify-center items-center w-full h-auto mt-4 mb-4">
      <div className="flex justify-center items-center w-[400px] bg-white rounded overflow-auto">
        <div className="max-w-[300px] flex flex-col justify-center items-center">
          <h1
            className={`text-[#602D0E] text-3xl font-medium ${dancin.className} mt-4 mb-4`}
          >
            Te amo ❤️
          </h1>
          <div className="w-[300px] h-[400px] border border-[#602D0E] rounded overflow-hidden relative">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  currentImageIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
          <p
            className={`text-[#602D0E] text-base font-medium ${dancin.className} text-justify mt-4 mb-4`}
          >
            Nesse 1 ano de namoro aconteceu muitas coisas, mas nessa data
            especial que agradecer a Deus por ter você ao meu lado. Dizer que
            você é a mulher que eu quero compartilhar todos os meus momentos ao
            seu lado. Até a eternidade ❤️❤️❤️
          </p>

          <div className="mt-4 pb-4">
            <iframe
              width="100%"
              height="200"
              src={getEmbedUrl(videoUrl)}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
