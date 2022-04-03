import { ReactElement, useEffect, Children } from 'react';
import { List } from '@/domain';
import { useAppSelector } from '@/hooks';
import { useDispatch } from 'react-redux';
import { getSharedLists } from '@/store';
import { listApi } from '@/apis';

const MylistPage = (): ReactElement => {
  const { totalSharedListCount, sharedLists } = useAppSelector(
    (state) => state.list.shared
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSharedLists());
  }, []);

  const handleDelete = () => {
    console.log('sharedList delete!');
    listApi.deleteSharedList();
    // alert창
  };

  return (
    <>
      <List.Tab />
      <List.InfoBox path={'/list/shared'} listInfo={totalSharedListCount} />
      <List.InnerContainer>
        <List.CreateButton />
        {Children.toArray(
          sharedLists.map(({ id, thumbnail, title, views }) => (
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
