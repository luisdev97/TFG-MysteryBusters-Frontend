import IncidentsPaperContainer from '../modules/Incidents/containers/IncidentsPaper/IncidentsPaper.container';
import ResearcherListContainer from '../modules/Researchers/containers/Researcherlist/ResearcherList.container';
import AnomaliesListContainer from '../modules/Anomalies/containers/AnomaliesList/AnomaliesList.container';
import AnomalyDetailContainer from '../modules/Anomalies/containers/AnomalyDetail.container';
import IncidentsForm from '../modules/Incidents/components/Form/IncidentsForm';
import IncidentsFormContainer from '../modules/Incidents/containers/Form/IncidentsForm.container';

const routes = [
    {
        path: '/researchers',
        component: ResearcherListContainer
    },
    {
        path: '/incidents',
        component: IncidentsPaperContainer,
    },
    {
        path: '/anomalies/:id',
        component: AnomalyDetailContainer
    },
    {
        path: '/anomalies',
        component: AnomaliesListContainer
    },
    {
        path: '/form',
        component: IncidentsFormContainer
    }
    
]

export default routes;
 