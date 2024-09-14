interface NewsPageProps {
  params: {
    id: string;
  };
}
export default function NewsPage({ params }: NewsPageProps) {
  return <h1>Single News id: {params.id}</h1>;
}
