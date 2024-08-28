import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Info from './components/Info/Info';

export default function NewCampaign(props: { searchParams: { type: any } }) {
  return (
    <>
      <Header />
      {props.searchParams.type ? <Content /> : <Info />}
    </>
  );
}
