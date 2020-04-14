import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESEARCHERS_QUERY } from '../../graphql/queries';

function ResearcherListContainer() {
    const [researchers, setResearchers] = useState<[]>([]);
    const { error, loading, data } = useQuery(GET_RESEARCHERS_QUERY);

    useEffect(() => {
        if(!loading && data){
            setResearchers(data.getResearchers);
        }
    },[loading,data]);

    return (
        <div>
            
        </div>
    );
}

export default ResearcherListContainer;