import { Header } from '@/components/Molecules/Header/Header';

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
