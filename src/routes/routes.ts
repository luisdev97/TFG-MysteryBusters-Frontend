import Researchers from './Researchers';
import IncidentsPaper from '../modules/Incidents/components/IncidentsPaper/IncidentsPaper';
import { INCIDENTS_QUERY } from '..//modules/Incidents/graphql/queries';

const routes = [
    {
        path: '/researchers',
        component: Researchers
    },
    {
        path: '/incidents',
        component: IncidentsPaper,
        props : {
            query: INCIDENTS_QUERY
        }
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