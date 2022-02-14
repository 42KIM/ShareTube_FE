import Text from '../../src/components/base/Text';
import Dropdown from '../../src/components/base/Dropdown';

const TestPage = () => {
  const dropContent = [
    {
      link: '/drop1',
      text: 'drop1'
    },
    {
      link: '/drop2',
      text: 'drop2'
    },
    {
      link: '/drop3',
      text: 'drop3'
    }
  ];

  return (
    <>
      <Text size={'01px'} color={'red'} bold>
        hello world
      </Text>
      <Dropdown size={'sm'} color='gray' content={dropContent}>
        Drop Menu!
      </Dropdown>
    </>
  );
};

export default TestPage;
