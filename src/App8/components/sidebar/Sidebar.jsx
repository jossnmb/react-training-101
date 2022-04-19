import './sidebar.scss';
import {
  DashboardIcon,
  AccountCircleIcon,
  InventoryIcon,
  BallotIcon,
  LocalShippingIcon,
} from '@mui/icons-material/Dashboard';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">jossadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <AccountCircleIcon />
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon />
            <span>Products</span>
          </li>
          <li>
            <BallotIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <li>
            <span>Stats</span>
          </li>
          <li>
            <span>Notifications</span>
          </li>
          <li>
            <span>Logs</span>
          </li>
          <li>
            <span>Settings</span>
          </li>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color Options</div>
    </div>
  );
}
