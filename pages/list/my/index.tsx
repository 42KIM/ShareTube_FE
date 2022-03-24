import { ReactElement, useEffect, Children } from 'react';
import { List } from '@/domain';
import { useAppSelector } from '@/hooks';
import { useDispatch } from 'react-redux';
import { getMyLists } from '@/store';
import { listApi } from '@/apis';

const MylistPage = (): ReactElement => {
  const { totalCreatedListCount, createdList } = useAppSelector(
    (state) => state.list.my
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyLists());
  }, []);

  const handleDelete = () => {
    console.log('mylist delete!');
    listApi.deleteMyList();
    // alert창
  };

  return (
    <>
      <List.Tab />
      <List.InfoBox path={'/list/my'} listInfo={totalCreatedListCount} />
      <List.InnerContainer>
        <List.CreateButton />
        {Children.toArray(
          createdList.map(({ id, thumbnail, title, views }) => (
            <List.ListItem
              id={id}
              thumbnail={thumbnail}
              title={title}
              views={views}
            />
          ))
        )}
        <List.FloatButton handler={handleDelete} />
      </List.InnerContainer>
    </>
  );
};

export default MylistPage;
