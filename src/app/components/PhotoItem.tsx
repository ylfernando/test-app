import { Photo } from "@/types/Photo";

type Props = {
  photo: Photo;
  onClick: () => void;
};

export const PhotoItem = ({ photo, onClick }: Props) => {
  return (
    <div className="cursor-pointer hover:opacity-80">
      <img src={`/assets/${photo.url}`} className="w-full"></img>
    </div>
  );
};
