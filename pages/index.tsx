import type { NextPage } from 'next';
import { Header, GreetingBox, Dashboard, Carousel } from '@/domain';
import { COLOR, FONT } from '@/constants';

const Home: NextPage = () => {
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
          url={'/login'}
          textFont={FONT.h4_bold}
          textColor={COLOR.white}
        >
          로그인하여 내 랭킹 확인하기
        </Dashboard.LinkText>
      </Dashboard.Container>
      <Carousel />
    </>
  );
};

export default Home;
