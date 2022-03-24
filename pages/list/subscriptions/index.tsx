import { ReactElement, useEffect, Children, useState } from 'react';
import { List } from '@/domain';
import { useAppSelector } from '@/hooks';
import { useDispatch } from 'react-redux';
import { getSubscriptions } from '@/store';
import { listApi } from '@/apis';

const SubscriptionsPage = (): ReactElement => {
  const [drawerOn, setDrawerOn] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const { totalSubscriptions, channelDetails } = useAppSelector(
    (state) => state.subscription
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscriptions());
  }, []);

  const handleDrawer = () => {
    console.log('create new list!');
    setDrawerOn(true);
  };

  const handleDrawerClose = () => {
    setDrawerOn(false);
  };

  const handleDrawerSubmit = () => {
    console.log('submit!');
  };

  const handleBackgroundClick = () => {
    setDrawerOn(false);
  };

  return (
    <>
      <List.Tab />
      <List.InfoBox
        path={'/list/subscriptions'}
        listInfo={totalSubscriptions}
      />
      <List.InnerContainer>
        <List.SearchInput onChange={() => {}} />
        {Children.toArray(
          channelDetails.map(
            ({ channelUrl, id, thumbnail, title, subscribers }) => (
              <List.ChannelItem
                id={id}
                thumbnail={thumbnail.default.url}
                title={title}
                subscribers={subscribers}
                url={channelUrl}
              />
            )
          )
        )}
        <List.FloatButton handler={handleDrawer} />
      </List.InnerContainer>
      <List.Drawer
        visible={drawerOn}
        onClose={handleDrawerClose}
        onSubmit={() => {
          handleDrawerSubmit();
        }}
        onBackgroundClick={handleBackgroundClick}
      />
    </>
  );
};
export default SubscriptionsPage;
