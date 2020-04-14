import React from 'react';
import { ResearcherCardProps } from '../../props/Researcher';
import './ResearcherCard.css'

function ResearcherCard({ researcher }: ResearcherCardProps) {
    return (
        <div className="researcher-card bg-info mt-5 mx-auto">
            {researcher.id}
        </div>
    );
};

export default ResearcherCard;