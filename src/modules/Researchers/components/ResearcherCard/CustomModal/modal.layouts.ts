export const ModalLayouts: any = {

    competencie: {
        buttonText: "Competencies",
        buttonIcon: "tasks",
        modalHeader: "Competencies",
        dataKey: "competencies",
        valueKey: "type"
    },
    anomaly: {
        buttonText: "Posted anomalies",
        buttonIcon: "pencil",
        modalHeader: "Posted anomalies",
        dataKey: "posted_anomalies",
        valueKey: "description"
    },
    incident: {
        buttonText: "Resolved incidents",
        buttonIcon: "trophy",
        modalHeader: "Resolved incidents",
        dataKey: "assigned_incidents",
        valueKey: "description"
    }

}

export type modalType = 'competencie' | 'anomaly' | 'incident';


