import { ReactElement, useEffect, useRef, Children } from 'react';
import { StyledContainer } from './styles';
import { ChannelCard } from '@/domain';
import Link from 'next/link';

// DUMMY
const channel = {
  url: 'http://www.youtube.com',
  thumbnail:
    'https://yt3.ggpht.com/ytc/AKedOLTi6w4E6985-QdVBbovBSsnCeTETyj0WomjM5IY8Q=s900-c-k-c0x00ffffff-no-rj',
  title: '침착맨',
  subTitle: '11.1'
};

const Carousel = (): ReactElement => {
  // from store.
  // top 10 channels
  // IChannel 타입 필요
  let topChannels = [
    channel,
    channel,
    channel,
    channel,
    channel,
    channel,
    channel,
    channel
  ];

  const wheelRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: WheelEvent): void => {
    event.preventDefault();
    if (wheelRef.current) {
      if (
        wheelRef.current.scrollLeft + event.deltaY < 0 ||
        wheelRef.current.scrollLeft + event.deltaY >
          wheelRef.current.offsetWidth
      )
        return;

      wheelRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    wheelRef.current?.addEventListener('wheel', handleWheel);
    return () => wheelRef.current?.removeEventListener('wheel', handleWheel);
  });

  return (
    <StyledContainer ref={wheelRef}>
      {Children.toArray(
        topChannels.map((channel) => (
          <ChannelCard
            url={channel.url}
            size={'150px'}
            thumbnail={channel.thumbnail}
            title={channel.title}
            subTitle={channel.subTitle}
          />
        ))
      )}
      <Link href={'/list'}>
        <a>
          <ChannelCard size={'150px'} />
        </a>
      </Link>
    </StyledContainer>
  );
};

export default Carousel;
