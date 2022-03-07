import { Text, Image, Icon, TextButton } from '@/base';
import { COLOR, FONT, ICONS } from '@/constants';
import {
  Carousel,
  ChannelCard,
  Dashboard,
  GreetingBox,
  Header
} from '@/domain';

const TestPage = () => {
  const dropContent = [
    {
      link: '/drop1',
      text: 'menu1'
    },
    {
      link: '/drop2',
      text: 'menu2'
    },
    {
      link: '/drop3',
      text: 'menu3'
    }
  ];

  return (
    <>
      Text 컴포넌트
      <br />
      <Text font={FONT.h1_bold} color={COLOR.black}>
        hello world
      </Text>
      <br />
      Image 컴포넌트
      <br />
      <Image
        src={
          'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg'
        }
        width={200}
        height={200}
        borderRadius={30}
      />
      <br />
      Icon 컴포넌트
      <br />
      <Icon icon={'heart'} size={20} color={COLOR.red} />
      <br />
      Dashboard
      <br />
      <Dashboard.Container>
        <Dashboard.InfoText textFont={FONT.title} />
        <Dashboard.InfoBoard titleFont={FONT.title} contentFont={FONT.title} />
        <Dashboard.LinkText url={'/login'} textFont={FONT.h4_bold}>
          마이리스트 보러가기
        </Dashboard.LinkText>
      </Dashboard.Container>
      <br />
      Greeting Box!
      <br />
      <GreetingBox
        textContents={['어서오세요', '오늘은 어떤 리스트를 공유해볼까요?']}
        textFonts={[FONT.h1_bold, FONT.h2]}
        isBold={[true, false]}
      />
      <br />
      Header!!
      <br />
      <Header />
      <br />
      채널 카드
      <br />
      <ChannelCard
        url={'http://www.youtube.com'}
        direction={'vertical'}
        size={'200px'}
        thumbnail={
          'https://yt3.ggpht.com/ytc/AKedOLTi6w4E6985-QdVBbovBSsnCeTETyj0WomjM5IY8Q=s900-c-k-c0x00ffffff-no-rj'
        }
        title={'침착맨가다나나아다다앙아다아아다아아'}
        subTitle={'12.5'}
      />
      <br />
      캐러셀 슬라이드
      <br />
      <Carousel />
      <br />
      로그인 버튼
      <br />
      <Image src={'/images/googleLogin.png'} width={'190px'} height={'45px'} />
      <br />
      텍스트 버튼
      <br />
      <TextButton font={'18px Pretendard-SemiBold'} width={'150px'}>
        눌러주세요
      </TextButton>
    </>
  );
};

export default TestPage;
