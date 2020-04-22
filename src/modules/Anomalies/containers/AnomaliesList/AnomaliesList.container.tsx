import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANOMALIES_QUERY } from '../../graphql/queries/anomalies';
import { Anomaly } from '../../models/entities/Anomaly';
import AnomaliesList from '../../components/AnomaliesList/AnomaliesList';

function AnomaliesListContainer() {
    const { error, loading, data } = useQuery(GET_ANOMALIES_QUERY)
    const [ anomalies, setAnomalies ] = useState<Anomaly[]>([])

    useEffect(() => {
        if(!loading && data){
            setAnomalies(data.getAnomalies)
        }
    },[loading, data]);

    if (loading) return <p>Loading :</p>;
    if (error) return <p>Error :</p>;

    return <AnomaliesList anomalies={ anomalies }/>
};

export default AnomaliesListContainer;