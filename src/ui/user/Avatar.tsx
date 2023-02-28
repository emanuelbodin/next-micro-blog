type Props = {
  src?: string
}

export default function Avatar({ src }: Props) {
  return (
    <div className="h-10 w-10">
      <img className="h-full w-full rounded-full object-cover object-center" src={src} alt="" />
    </div>
  )
}
