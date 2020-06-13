import IncidentsPaperContainer from '../modules/Incidents/containers/IncidentsPaper/IncidentsPaper.container';
import ResearcherListContainer from '../modules/Researchers/containers/Researcherlist/ResearcherList.container';
import AnomaliesListContainer from '../modules/Anomalies/containers/AnomaliesList/AnomaliesList.container';
import AnomalyDetailContainer from '../modules/Anomalies/containers/AnomalyDetail.container';
import IncidentsFormContainer from '../modules/Incidents/containers/Form/IncidentsForm.container';
import ResearcherForm from '../modules/Researchers/containers/ResearcherForm.container';
import ResearcherFormContainer from '../modules/Researchers/containers/ResearcherForm.container';
import Home from '../modules/general/Home';

const routes = [
    {
        path: '/researchers',
        component: ResearcherListContainer,
        authRequired: false
    },
    {
        path: '/incidents',
        component: IncidentsPaperContainer,
        authRequired: false
    },
    {
        path: '/anomalies/:id',
        component: AnomalyDetailContainer,
        authRequired: false
    },
    {
        path: '/anomalies',
        component: AnomaliesListContainer,
        authRequired: false
    },
    {
        path: '/anomalies/:anomaly_id/form/:id',
        component: IncidentsFormContainer,
        authRequired: true
    },
    {
        path: '/anomalies/:anomaly_id/form',
        component: IncidentsFormContainer,
        authRequired: true
    }, {
        path: '/register',
        component: ResearcherFormContainer,
        authRequired: false
    }, {
        path: "/",
        component: Home,
        authRequired: false
    }


]

export default routes;
