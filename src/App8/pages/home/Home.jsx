import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer"></div>
    </div>
  );
}
