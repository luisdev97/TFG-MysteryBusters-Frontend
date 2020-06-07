import { SemanticICONS } from 'semantic-ui-react';
export const SideBarItems: SideBarItemType[] = [
    {
        title: "Investigadores",
        icon: "detective",
        to: "/researchers"
    },
    {
        title: "Anomalías",
        icon: "snapchat ghost",
        to: "/anomalies"
    },
    {
        title: "Incidentes",
        icon: "newspaper outline",
        to: "/incidents"
    }
]

export type SideBarItemType = {
        title: string,
        icon: SemanticICONS,
        to: string
}



