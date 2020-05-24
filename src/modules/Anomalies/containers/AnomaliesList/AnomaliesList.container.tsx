import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ANOMALIES_QUERY } from '../../graphql/queries/anomalies';
import { Anomaly } from '../../models/entities/Anomaly';
import AnomaliesList from '../../components/AnomaliesList/AnomaliesList';
import { CREATE_ANOMALY_MUTATION, DELETE_ANOMALY_MUTATION } from '../../graphql/mutations/anomalies';

function AnomaliesListContainer() {
    const { error, loading, data } = useQuery(GET_ANOMALIES_QUERY)
    const [createAnomaly] = useMutation(CREATE_ANOMALY_MUTATION);
    const [deleteAnomaly] = useMutation(DELETE_ANOMALY_MUTATION);

    const [ anomalies, setAnomalies ] = useState<Anomaly[]>([])

    useEffect(() => {
        if(!loading && data){
            setAnomalies(data.getAnomalies)
        }
    },[loading, data]);

    if (loading) return <p>Loading :</p>;
    if (error) return <p>Error :</p>;

    return <AnomaliesList anomalies={ anomalies } create={ createAnomaly } remove={ deleteAnomaly } update={ deleteAnomaly}/>
};

export default AnomaliesListContainer;