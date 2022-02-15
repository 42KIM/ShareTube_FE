import Text from '../../src/components/base/Text';
import Dropdown from '../../src/components/base/Dropdown';

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
      <Text size={'01px'} color={'red'} bold>
        hello world
      </Text>
      <Dropdown size={'sm'}>
        <Text size={'02px'} color={'black'}>
          Drop Down!
        </Text>
        {'Menu'}
      </Dropdown>
    </>
  );
};

export default TestPage;
