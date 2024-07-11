import MainMap from '@/components/map';
import PageWrapper from '@/components/page-wrapper';
import PinButton from '@/components/pin-button';

export default function Home() {
  return (
    <PageWrapper>
      <MainMap />
      <PinButton />
    </PageWrapper>
  );  
}
