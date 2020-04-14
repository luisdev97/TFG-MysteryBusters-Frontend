import IncidentsPaperContainer from '../modules/Incidents/containers/IncidentsPaper/IncidentsPaper.container';
import ResearcherListContainer from '../modules/Researchers/containers/Researcherlist/ResearcherList.container';

const routes = [
    {
        path: '/researchers',
        component: ResearcherListContainer
    },
    {
        path: '/incidents',
        component: IncidentsPaperContainer,
    },
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