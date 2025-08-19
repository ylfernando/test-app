type Props = {
  image: string;
  closeModal: () => void;
};

export const Modal = ({ image, closeModal }: Props) => {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
    >
      <img
        src={`assets/${image}`}
        alt="Imagem selecionada"
        className="max-w-full max-h-full rounded-lg shadow-lg"
      />
    </div>
  );
};
