import { Button } from '@/components/Atoms/Button/Button';
import { ImageCarousel } from '@/components/Molecules/ImageCarousel/ImageCarousel';
import Image from 'next/image';

interface Props {
  imageSources: string[];
  productId: string;
  productPrice: string;
  productDescription: string;
}

export const Product = ({
  imageSources,
  productId,
  productPrice,
  productDescription,
}: Props) => {
  return (
    <div className="flex md:flex-row flex-col w-full h-full items-center  px-4">
      <ImageCarousel imageSources={imageSources} />
      <div className="flex flex-col space-y-4">
        <p className="w-fit md:w-[300px] lg:w-[500px] font-poppins">
          {productDescription}
        </p>
        <p className="text-lg font-poppins">£{productPrice}</p>
        <div className="flex flex-col md:flex-row w-full  justify-start space-y-2 md:space-y-0 md:space-x-4">
          <Button primary={false} label="Add to basket" />
          <Button primary={true} label="Buy now" />
        </div>
      </div>
    </div>
  );
};
