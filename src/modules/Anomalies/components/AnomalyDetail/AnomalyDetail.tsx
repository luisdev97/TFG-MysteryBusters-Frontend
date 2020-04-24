import React from 'react';
import { AnomalyDetailProps } from '../../props/Anomalies';
import './AnomalyDetail.css';
import IncidentsMap from './IncidentsMap';

function AnomalyDetail ({ anomaly }: AnomalyDetailProps) {
    return (
        <div className="anomaly-detail-container mx-auto" >
            <IncidentsMap/>
        </div>
    );
};

export default AnomalyDetail;