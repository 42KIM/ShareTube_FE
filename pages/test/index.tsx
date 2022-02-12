import Text from '../../src/components/base/Text';
import Button from '../../src/components/base/Button';

const TestPage = () => {
  return (
    <>
      <Text size={'01px'} color={'red'} bold>
        hello world
      </Text>
      <Button size='lg' color='red' floatPosition={80} boxShadow>
        click me
      </Button>
    </>
  );
};

export default TestPage;
