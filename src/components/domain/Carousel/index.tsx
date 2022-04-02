import { ReactElement, useEffect, useRef, Children } from 'react';
import { StyledContainer, StyledCardContainer } from './styles';
import { Text } from '@/base';
import { ChannelCard } from '@/domain';
import Link from 'next/link';
import { FONT } from '@/constants';
import { useAppSelector } from '@/hooks';
import { format } from '@/utils';

const Carousel = (): ReactElement => {
  const { isLoggedIn, user, youtubeSubs } = useAppSelector(
    (state) => state.auth
  );

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
        <Link href={isLoggedIn ? '/list/subscriptions' : '/login'}>
          <a>
            <Text
              font={FONT.h3_bolder}
            >{`${user.nickname}님이 구독 중인 채널 >`}</Text>
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
          youtubeSubs.topChannels.map(
            ({ channelUrl, thumbnail, title, subscribers }) => (
              <ChannelCard
                url={channelUrl}
                size={'150px'}
                thumbnail={thumbnail.default.url}
                title={title}
                subTitle={subscribers ? format(subscribers) : 0}
              />
            )
          )
        )}
        <Link href={'/list/subscriptions'}>
          <a>
            {/* 더보기 UI */}
            <ChannelCard size={'150px'} />
          </a>
        </Link>
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default Carousel;
