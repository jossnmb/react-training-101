import './sidebar.scss';
import {
  DashboardIcon,
  PeopleIcon,
  InventoryIcon,
  BallotIcon,
  LocalShippingIcon,
  DataUsageIcon,
  NotificationsIcon,
  NotesIcon,
  SettingsIcon,
  AccountCircleIcon,
  LogoutIcon,
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
            <PeopleIcon />
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
            <DataUsageIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon />
            <span>Notifications</span>
          </li>
          <li>
            <NotesIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color Options</div>
    </div>
  );
}
