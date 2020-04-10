import Researchers from './Researchers';
import IncidentsPaper from '../components/incidents/IncidentsPaper/IncidentsPaper';
const routes = [
    {
        path: '/researchers',
        component: Researchers
    },
    {
        path: '/incidents',
        component: IncidentsPaper
    }
]


export default routes;
        /*
        
    {
        path: '/anomalies',
        render: '<div className="bg-error">Anomalies</div>'
    },
    {
        path: '/incidents',
        render: '<div className="bg-success">Incidents</div>'
    },
   
        {
    path: "/users",
    layout: DefaultLayout,
    component: CustomTable,
    props: {
      title: "users.title",
      tableTitle: "usersTable.tableTitle",
      tableType: "users",
      query: GET_USERS,
      entity: "user",
      createLink: "/user"
    }
  },*/