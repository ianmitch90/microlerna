import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Divider,
  Drawer,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import {
  Dashboard,
  People,
  AccountBox,
  Settings,
  ShowChart,
  BarChart,
  Search,
  LocalShipping,
  TableChart,
  RemoveCircle,
  AddCircle,
  SyncAlt,
  Assignment,
  OutlinedFlag,
  LiveHelp,
  Face,
  AccountBalance,
  DeveloperBoard,
  QueryBuilder,
  Computer,
  PersonAdd,
  CreditCard,
  History,
  MonetizationOn,
  AccountBalanceWallet,
  CloudUpload,
  Build,
  AccountCircle,
  Folder,
  Business,
  FolderShared,
  Store,
  VideoLibrary,
  HelpOutline,
  Code
} from "@material-ui/icons";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { Profile, SidebarNav } from "./components";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)"
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const pages = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    subList: [
      {
        title: "Revenue Dashboard",
        href: "/dashboard",
        icon: <ShowChart />
      },
      {
        title: "Settlements Dashboard",
        href: "/dashboard",
        icon: <BarChart />
      },
      {
        title: "Revenue Search",
        href: "/dashboard",
        icon: <Search />
      }
    ]
  },
  {
    title: "Loads",
    icon: <LocalShipping />,
    subList: [
      {
        title: "Loadboard",
        href: "/dashboard",
        icon: <ShowChart />
      },
      {
        title: "Load Search",
        href: "/dashboard",
        icon: <Search />
      },
      {
        title: "EDI Load Tenders",
        href: "/dashboard",
        icon: <Search />
      },
      {
        title: "Shippers/Receivers",
        href: "/dashboard",
        icon: <SyncAlt />
      },
      {
        title: "Claims",
        href: "/dashboard",
        icon: <Assignment />
      },
      {
        title: "Holds",
        href: "/dashboard",
        icon: <RemoveCircle />
      },
      {
        title: "Old Loads",
        href: "/dashboard",
        icon: <OutlinedFlag />
      },
      {
        title: "New Load",
        href: "/dashboard",
        icon: <AddCircle />
      }
    ]
  },
  {
    title: "Customer",
    icon: <AccountBox />,
    subList: [
      {
        title: "Customers",
        href: "/dashboard",
        icon: <Face />
      },
      {
        title: "Prospects",
        href: "/dashboard",
        icon: <DeveloperBoard />
      },
      {
        title: "My Dormant Accounts",
        href: "/dashboard",
        icon: <OutlinedFlag />
      },
      {
        title: "Dormant Pool",
        href: "/dashboard",
        icon: <TableChart />
      },
      {
        title: "EDI Queue",
        href: "/dashboard",
        icon: <QueryBuilder />
      },
      {
        title: "Customer Logins",
        href: "/dashboard",
        icon: <Computer />
      },
      {
        title: "Enter Prospect Customer",
        href: "/dashboard",
        icon: <PersonAdd />
      },
      {
        title: "Enter New Customer",
        href: "/dashboard",
        icon: <PersonAdd />
      }
    ]
  },
  {
    title: "Accounting",
    icon: <AccountBalance />,
    subList: [
      {
        title: "Invoicing",
        href: "/dashboard",
        icon: <CreditCard />
      },
      {
        title: "Billing Queue",
        href: "/dashboard",
        icon: <QueryBuilder />
      },
      {
        title: "AP Calling Queue",
        href: "/dashboard",
        icon: <QueryBuilder />
      },
      {
        title: "Manage Accounting Groups",
        href: "/dashboard",
        icon: <People />
      },
      {
        title: "EFS History",
        href: "/dashboard",
        icon: <History />
      },
      {
        title: "Collections",
        href: "/dashboard",
        icon: <MonetizationOn />
      },
      {
        title: "Credit Insurance",
        href: "/dashboard",
        icon: <AccountBalance />
      },
      {
        title: "AR Calling Queue",
        href: "/dashboard",
        icon: <QueryBuilder />
      },
      {
        title: "Run Settlements",
        href: "/dashboard",
        icon: <AccountBalanceWallet />
      },
      {
        title: "Upload Tool",
        href: "/dashboard",
        icon: <CloudUpload />
      }
    ]
  },
  {
    title: "Admin",
    icon: <Settings />,
    subList: [
      {
        title: "Tools",
        href: "/dashboard",
        icon: <Build />
      },
      {
        title: "My Account",
        href: "/dashboard",
        icon: <AccountCircle />
      },
      {
        title: "Documents",
        href: "/dashboard",
        icon: <Folder />
      },
      {
        title: "All Offices",
        href: "/dashboard",
        icon: <Business />
      }
    ]
  },

  {
    title: "Help",
    icon: <LiveHelp />,
    subList: [
      {
        title: "Contact Directory",
        href: "/dashboard",
        icon: <FolderShared />
      },
      {
        title: "ATG Store - Merchandise",
        href: "/dashboard",
        icon: <Store />
      },
      {
        title: "ATG Store - Marketing",
        href: "/dashboard",
        icon: <Store />
      },
      {
        title: "Tutorial Videos",
        href: "/dashboard",
        icon: <VideoLibrary />
      },
      {
        title: "EDI FAQ",
        href: "/dashboard",
        icon: <HelpOutline />
      },
      {
        title: "Application Release Notes",
        href: "/dashboard",
        icon: <Code />
      }
    ]
  }
];

const navOptions = pages.reduce((acc, value) => {
  acc[value.title] = false;
  return acc;
}, {});

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;
  const classes = useStyles();
  const [openSublist, setOpenSublist] = React.useState(navOptions);

  const handleClick = title => {
    setOpenSublist({ ...openSublist, [title]: !openSublist[title] });
  };

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        {pages.map(listGroup => (
          <React.Fragment>
            <List component="nav" aria-labelledby="nested-list-subheader">
              <ListItem button onClick={() => handleClick(listGroup.title)}>
                <ListItemIcon>{listGroup.icon}</ListItemIcon>
                <ListItemText primary={listGroup.title} />
                {openSublist[listGroup.title] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={openSublist[listGroup.title]}
                timeout="auto"
                unmountOnExit
              >
                <SidebarNav className={classes.nav} pages={listGroup.subList} />
              </Collapse>
            </List>
          </React.Fragment>
        ))}
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
