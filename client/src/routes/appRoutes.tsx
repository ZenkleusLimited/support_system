import { Tasks, Users, Dashboard, Schools, AddUser, UsersLayout, AddSchool } from "../pages";
import View from "../components/View";
import { RouteType } from "./config";
import SchoolView from "../components/SchoolView";
import UserView from "../components/UserView";

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const appRoutes: RouteType[] = [
  {
    path: "dashboard",
    element: <Dashboard />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    }
  },
  {
    path:"/user/users",
    element: <UsersLayout />,
    state: "users",
    sidebarProps: {
      displayText: "Users",
      icon: <PeopleAltOutlinedIcon />
    },
    child: [
      {
        path: "/user/users/all",
        element: <Users />,
        state: "all",
        sidebarProps: {
          displayText: "All Users",
        }
      },
      {
        path: "/user/users/adduser",
        element: <AddUser />,
        state: "adduser",
        sidebarProps: {
          displayText: "Add User",
          icon: <PersonAddAltOutlinedIcon />
        }
      }
    ]
  },
  {
    path: "/user/schools",
    element: <UsersLayout />,
    state: "schools",
    sidebarProps: {
      displayText: "Schools",
      icon: <SchoolOutlinedIcon />
    },
    child: [
      {
        path: "/user/schools/all",
        element: <Schools />,
        state: "all",
        sidebarProps: {
          displayText: "All Schools",
        }
      },
      {
        path: "/user/schools/addschool",
        element: <AddSchool />,
        state: "all",
        sidebarProps: {
          displayText: "Add School",
        }
      }
    ]
  },
  {
    path: "tasks",
    element: <Tasks />,
    state: "tasks",
    sidebarProps: {
      displayText: "Tasks",
      icon: <AssignmentTurnedInOutlinedIcon />
    }
  },
  {
    path: "view/:type/:id",
    element: <View />,
    state: "view",
    sidebarProps: {
      displayText: ""
    }
  },
  {
    path: "userview/:id",
    element: <UserView />,
    state: "userview",
    sidebarProps: {
      displayText: ""
    }
  },
  {
    path: "schoolview/:id",
    element: <SchoolView />,
    state: "schoolview",
    sidebarProps: {
      displayText: ""
    }
  }
]

export default appRoutes