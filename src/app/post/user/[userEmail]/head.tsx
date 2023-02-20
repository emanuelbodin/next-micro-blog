export default async function Head({ params }: { params: { userEmail: string } }) {
  return (
    <>
      <title>Posts by user {params.userEmail}</title>
    </>
  )
}
