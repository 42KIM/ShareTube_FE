import type { NextPage } from 'next';
import { GreetingBox, Dashboard, Carousel } from '@/domain';
import { COLOR, FONT } from '@/constants';
import { useAppSelector } from '@/hooks';

const Home: NextPage = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return (
    <>
      <GreetingBox
        textContents={[
          '어서오세요! 👋🏻',
          '오늘은 어떤 YouTube 채널을 공유해 볼까요?'
        ]}
        textFonts={[FONT.h1_bold, FONT.h2]}
        isBold={[false, false]}
      />
      <Dashboard.Container>
        <Dashboard.InfoText textFont={FONT.h2_bold} />
        <Dashboard.InfoBoard
          titleFont={FONT.h3_bold}
          contentFont={FONT.info_giant}
        />
        <Dashboard.LinkText
          url={isLoggedIn ? '/list/my' : '/login'}
          textFont={FONT.h4_bold}
          textColor={COLOR.white}
        >
          {isLoggedIn
            ? '마이 리스트 보러 가기 >'
            : '로그인하여 내 랭킹 확인하기'}
        </Dashboard.LinkText>
      </Dashboard.Container>
      <Carousel />
    </>
  );
};

export default Home;
