type Props = {
  id: string;
  label: string;
  onChange: (value: string) => void;
  value: string;
};

export default function TextAreaInput({ id, label, onChange, value }: Props) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        value={value}
        rows={5}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
