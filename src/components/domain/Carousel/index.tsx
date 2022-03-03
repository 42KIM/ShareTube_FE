import { ReactElement, useEffect, useRef, Children } from 'react';
import { StyledContainer, StyledCardContainer } from './styles';
import { Text } from '@/base';
import { ChannelCard } from '@/domain';
import Link from 'next/link';
import { FONT } from '@/constants';

// DUMMY
const channel = {
  url: 'http://www.youtube.com',
  thumbnail:
    'https://yt3.ggpht.com/ytc/AKedOLTi6w4E6985-QdVBbovBSsnCeTETyj0WomjM5IY8Q=s900-c-k-c0x00ffffff-no-rj',
  title: '킹받네KG받드라슈어쩔티비저쩔티비',
  subTitle: '11.1'
};

const Carousel = (): ReactElement => {
  // from store.
  let isLoggedIn = false;
  let username = 'User';
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
          wheelRef.current.scrollWidth - wheelRef.current.offsetWidth
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
    <StyledContainer>
      {isLoggedIn ? (
        <Link href={'/list'}>
          <a>
            <Text
              font={FONT.h3_bolder}
            >{`${username}님이 구독 중인 채널 >`}</Text>
          </a>
        </Link>
      ) : (
        <Link href={'/login'}>
          <a>
            <Text font={FONT.h3_bolder}>{'구독 중인 채널 목록 >'}</Text>
          </a>
        </Link>
      )}
      <StyledCardContainer ref={wheelRef}>
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
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default Carousel;
