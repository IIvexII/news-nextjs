interface NewsLayoutProps {
  modal: React.ReactNode;
  children: React.ReactNode;
}

export default function NewsLayout({ children, modal }: NewsLayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
