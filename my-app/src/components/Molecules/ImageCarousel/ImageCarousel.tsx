import ArrowButton from '@/components/Atoms/ArrowButton/ArrowButton';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Props {
  imageSources: string[];
}

export const ImageCarousel = ({ imageSources }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const { height, width } = useWindowSize();

  const mobile = width <= 768;

  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.transform = `translateX(-${
        currentImage * (mobile ? 200 : 250)
      }px)`;
    }
  }, [currentImage, mobile]);

  const handleChange = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      if (currentImage === 0) {
        setCurrentImage(imageSources.length - 1);
      } else {
        setCurrentImage((prev) => prev - 1);
      }
    }
    if (direction === 'right') {
      if (currentImage === imageSources.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage((prev) => prev + 1);
      }
    }
  };
  console.log(currentImage);
  return (
    <div className=" p-8 rounded-lg ">
      <div className="flex flex-row space-x-4">
        <ArrowButton variant="left" onClick={() => handleChange('left')} />
        <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] relative overflow-hidden z-10 ">
          <div
            className="flex flex-row absolute transition-all duration-300 ease-in-out  z-50"
            ref={imageRef}
          >
            {imageSources.map((source) => (
              <Image
                src={source}
                alt="test"
                key={source}
                width={250}
                height={250}
              />
            ))}
          </div>
        </div>
        <ArrowButton variant="right" onClick={() => handleChange('right')} />
      </div>
      <div className="flex flex-row w-full justify-between">
        {imageSources.map((source, index) => (
          <div
            className="relative h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
            key={source}
          >
            <Image
              src={source}
              alt="test"
              fill={true}
              objectFit="cover"
              className="rounded-full border border-gray-200 hover:cursor-pointer"
              onClick={() => setCurrentImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
