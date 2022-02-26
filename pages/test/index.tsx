import { Text, Image, Icon } from '@/base';
import { Dashboard, GreetingBox, Header } from '@/domain';

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
      <Text size={'01px'} color={'red'} bold>
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
        round
      />
      <br />
      Icon 컴포넌트
      <br />
      <Icon icon='share' size={20} color='gray' />
      <br />
      Dashboard
      <br />
      <Dashboard.Container>
        <Dashboard.InfoText textSize={'02px'} />
        <Dashboard.InfoBoard titleSize={'02px'} contentSize={'02px'} />
        <Dashboard.LinkText url={'/login'} textSize={'02px'}>
          마이리스트 보러가기
        </Dashboard.LinkText>
      </Dashboard.Container>
      <br />
      Greeting Box!
      <br />
      <GreetingBox
        textContents={['어서오세요', '오늘은 어떤 리스트를 공유해볼까요?']}
        textSizes={['02px', '02px']}
        isBold={[true, false]}
      />
      <br />
      Header!!
      <br />
      <Header />
    </>
  );
};

export default TestPage;
