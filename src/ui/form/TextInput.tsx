type Props = {
  id: string;
  label: string;
  onChange: (value: string) => void;
  value: string;
};

export default function TextInput({ id, label, onChange, value }: Props) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} onChange={(e) => onChange(e.target.value)} />
    </>
  );
}
