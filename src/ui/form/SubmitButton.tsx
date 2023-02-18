import { Button } from "../Button";

type Props = {
  label: string;
  onClick: (e: FormDataEvent) => void;
};

export default function SubmitButton({ label, onClick }: Props) {
  return <Button intent="primary" label={label} onClick={onClick} />;
}
