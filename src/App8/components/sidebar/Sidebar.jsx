import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import BallotIcon from '@mui/icons-material/Ballot';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotesIcon from '@mui/icons-material/Notes';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

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
