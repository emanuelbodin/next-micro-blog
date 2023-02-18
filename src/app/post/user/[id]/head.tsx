export default async function Head({ params }: { params: { id: string } }) {
  return (
    <>
      <title>Posts by user {params.id}</title>
    </>
  );
}
