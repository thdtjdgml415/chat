export default function Page({ params }: { params: { slug: string[] } }) {
  console.log(params);
  return (
    <>
      <h1>Docs Page</h1>
      <h2>{JSON.stringify(params.slug, null, 2)}</h2>
    </>
  );
}
