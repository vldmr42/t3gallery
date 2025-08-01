import FullPageImageView from "~/components/full-image-page";

type Props = { params: { id: string } };

export default function PhotoModal({ params }: Props) {
  const { id } = params;
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return <FullPageImageView id={id} />;
}
