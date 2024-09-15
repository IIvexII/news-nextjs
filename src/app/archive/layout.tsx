interface ArchivePageProps {
  archive: React.ReactNode;
  latest: React.ReactNode;
}

export default function ArchiveLayout({ archive, latest }: ArchivePageProps) {
  return (
    <div className='mt-8'>
      <section>{archive}</section>
      <hr className='my-8' />
      <section>{latest}</section>
    </div>
  );
}
