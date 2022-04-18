import './sidebar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">jossadmin</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color Options</div>
    </div>
  );
}
