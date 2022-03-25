import { IChannel } from '@/types';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

export async function getServerSideProps() {
  const router = useRouter();
  const { listId } = router.query;
  // const channels = dispatch(getListId의리스트채널)
  const DUMMY_CHANNELS = [] as IChannel[];
  return {
    props: {
      channels: DUMMY_CHANNELS
    }
  };
}

const PublicSharedPage = ({
  channels
}: {
  channels: IChannel[];
}): ReactElement => {
  return (
    <>
      {
        // channels.map(channle => 'Channel Item')
      }
    </>
  );
};

export default PublicSharedPage;
