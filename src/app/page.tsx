import { EmojiRating } from "@/app/components/emojiRating";
export const app = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <EmojiRating rating={4} />
    </div>
  );
};
export default app;
