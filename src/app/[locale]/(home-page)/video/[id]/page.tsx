import Header from '@/app/[locale]/(home-page)/video/[id]/components/Header';
import RelatedProducts from '@/app/[locale]/(home-page)/video/[id]/components/RelatedProducts';
import VideoInfo from '@/app/[locale]/(home-page)/video/[id]/components/VideoInfo';
import VideoPreview from '@/app/[locale]/(home-page)/video/[id]/components/VideoPreview';

const videoInfo = {
  name: 'Name',
  socialHandle: 'socialhandle',
  avatar: '/assets/images/avatar.png',
  category: 'Apparel & Accessories',
  description:
    'Lörem ipsum pseudomevis vinterkräksjuka. Geofärade hemin och ask. Tetramure spessa. Geong äkrongen debel perstat. Lörem ipsum pseudomevis vinterkräksjuka. Geofärade hemin och ask. Tetramure spessa. Geong äkrongen debel perstat.',
  hashtags: Array.from({ length: 13 }, () => 'hashtag'),
  likes: 2,
  comments: 25.4,
  shares: 209.5,
  videoSales: 2.7,
  views: 1.9,
  erRate: 5.83,
};

const relatedProducts = Array.from({ length: 2 }, (_, i) => ({
  id: i.toString(),
  name: 'Product Name',
  description: 'Product Description',
  imageUrl: '/assets/images/placeHolder.png',
}));

export default function VideoDetail(props: { params: { id: string } }) {
  console.log(props.params.id);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="w-full gap-[16px] p-[24px]">
        <Header />
      </header>

      <main className="flex grow">
        <div className="w-2/5 p-4">
          <VideoPreview />
        </div>

        <div className="flex w-3/5 flex-col p-4">
          <div className="mb-4">
            <VideoInfo {...videoInfo} />
          </div>
          <div>
            <RelatedProducts products={relatedProducts} />
          </div>
        </div>
      </main>
    </div>
  );
}
