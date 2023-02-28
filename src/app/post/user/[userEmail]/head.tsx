export default async function Head({ params }: { params: { userEmail: string } }) {
  const title = `Posts by user ${decodeURIComponent(params.userEmail)}`
  return <title>{title}</title>
}
