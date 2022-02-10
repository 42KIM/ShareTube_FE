import Text from '../../src/components/base/Text';
import Image from '../../src/components/base/Image';

const TestPage = () => {
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
    </>
  );
};

export default TestPage;
