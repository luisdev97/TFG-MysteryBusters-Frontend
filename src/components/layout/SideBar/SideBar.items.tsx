import { SemanticICONS } from 'semantic-ui-react';
export const SideBarItems: SideBarItemType[] = [
    {
        title: "Researchers",
        icon: "detective",
        to: "/researchers"
    },
    {
        title: "Anomalies",
        icon: "snapchat ghost",
        to: "/anomalies"
    },
    {
        title: "Incidents",
        icon: "newspaper outline",
        to: "/incidents"
    }
]

export type SideBarItemType = {
        title: string,
        icon: SemanticICONS,
        to: string
}



