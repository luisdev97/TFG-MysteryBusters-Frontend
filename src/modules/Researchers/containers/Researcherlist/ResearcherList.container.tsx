import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESEARCHERS_QUERY } from '../../graphql/queries';
import { Researcher } from '../../models/entities/Researcher';
import ResearcherList from '../../components/ResearcherList/ResearcherList';

function ResearcherListContainer() {
    const [researchers, setResearchers] = useState<Researcher[]>([]);
    const { error, loading, data } = useQuery(GET_RESEARCHERS_QUERY);

    useEffect(() => {
        if(!loading && data){
            setResearchers(data.getResearchers);
        }
    },[loading,data]);

    return <ResearcherList researchers={researchers}/>

}

export default ResearcherListContainer;