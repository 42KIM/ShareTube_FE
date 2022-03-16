import { ReactElement, useEffect, useState, Children } from 'react';
import { Icon, Text } from '@/base';
import { List } from '@/domain';
import { FONT, ICON_SIZE } from '@/constants';

// from store
let myListItems = [
  {
    id: 11,
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLTi6w4E6985-QdVBbovBSsnCeTETyj0WomjM5IY8Q=s900-c-k-c0x00ffffff-no-rj',
    title: '우울할 때 보는 리스트1',
    views: 123
  },
  {
    id: 22,
    thumbnail:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
    title: '우울할 때 보는 리스트2',
    views: 345
  }
];
let sharedListItems = [
  {
    id: 33,
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLTi6w4E6985-QdVBbovBSsnCeTETyj0WomjM5IY8Q=s900-c-k-c0x00ffffff-no-rj',
    title: '친구가 공유해준 거!',
    views: 42
  }
];
let mylistTotal = 2;
let savedSharedListTotal = 1;

const MylistPage = (): ReactElement => {
  const [tab, setTab] = useState<{
    firstTabSelected: boolean;
    // list interface 필요
    listItems: any[];
  }>({ firstTabSelected: true, listItems: [] });

  // 최초에는 마이리스트 렌더
  useEffect(() => {
    setTab((initialState) => {
      return {
        ...initialState,
        listItems: myListItems
      };
    });
  }, []);

  const handleTab = () => {
    if (tab.firstTabSelected) {
      setTab({
        firstTabSelected: false,
        listItems: sharedListItems
      });
    } else {
      setTab({
        firstTabSelected: true,
        listItems: myListItems
      });
    }
  };

  // mylist 삭제하기 api 호출
  const deleteList = () => console.log('delete!');

  return (
    <>
      <List.Tab tabState={tab} tabHandler={handleTab} />
      <List.InfoBox
        tabState={tab}
        listInfo={tab.firstTabSelected ? mylistTotal : savedSharedListTotal}
      />
      <List.InnerContainer>
        <List.CreateButton />
        {Children.toArray(
          tab.listItems.map(({ id, thumbnail, title, views }) => (
            <List.ListItem
              id={id}
              thumbnail={thumbnail}
              title={title}
              views={views}
            />
          ))
        )}
        <List.FloatButton handler={deleteList}>
          <Icon icon={'listDelete'} size={ICON_SIZE.md} />
          <Text font={FONT.h1_bold}>리스트 삭제하기</Text>
        </List.FloatButton>
      </List.InnerContainer>
    </>
  );
};

export default MylistPage;
