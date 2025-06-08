type Props = {
  rating: number;
};
export const EmojiRating = ({ rating }: Props) => {
  if (rating > 5) rating = 5;
  if (rating < 0) rating = 0;

  const rateInt = Math.floor(rating);
  const stars = "$".repeat(rateInt) + "#".repeat(5 - rateInt);

  return (
    <div className="flex items-center text-6xl">
      <div>{rating.toFixed(1)}</div>
      <div>{stars}</div>
    </div>
  );
};
