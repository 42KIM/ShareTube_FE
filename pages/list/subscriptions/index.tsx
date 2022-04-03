import { ReactElement, useEffect, Children, useState } from 'react';
import { List } from '@/domain';
import { useAppSelector } from '@/hooks';
import { useDispatch } from 'react-redux';
import { getSubscriptions } from '@/store';
import { format } from '@/utils';
import { listApi } from '@/apis';
import { IChannel } from '@/types';

const SubscriptionsPage = (): ReactElement => {
  const [drawerOn, setDrawerOn] = useState(false);
  const [channels, setChannels] = useState<IChannel[]>([]);
  // const [selectedChannels, setSelectedChannels] = useState([]);
  const { totalSubscriptions, channelDetails } = useAppSelector(
    (state) => state.subscription
  );
  console.log('hi', channels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscriptions());
  }, []);

  useEffect(() => {
    // 여기 channelDetails 대신, 검색에 일치하는 애들
    setChannels(channelDetails);
  }, [channelDetails]);

  const handleSearch = (keyword: string) => {
    // debounce 적용하기

    if (keyword === '') {
      setChannels(channelDetails);
      return;
    }

    const nextResult = channelDetails.filter(
      // 여기 정규표현식으로, 일치하는 채널들 다 추가하기
      (channel) => channel.title === keyword
    );
    setChannels(nextResult);
  };

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
        <List.SearchInput onChange={handleSearch} />
        {Children.toArray(
          channels.map(({ channelUrl, id, thumbnail, title, subscribers }) => (
            <List.ChannelItem
              id={id}
              thumbnail={thumbnail.default.url}
              title={title}
              subscribers={subscribers ? format(subscribers) : 0}
              url={channelUrl}
            />
          ))
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
