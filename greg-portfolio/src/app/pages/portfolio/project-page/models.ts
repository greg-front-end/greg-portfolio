export interface CardListI {
    label: string;
    description: string;
}

export interface CardImplementationI {
    label: string;
    list: string[];
}

export interface CardI {
    pageSectionName: string;
    img?: string;
    url?: string;
    overview?: string;
    technologyStackTitle?: string;
    technologyStack?: CardListI[];
    problemSolvedTitle?: string;
    problemSolved?: string;
    featuresTitle?: string;
    features?: CardListI[];
    implementationDetailsTitle?: string;
    implementationDetails?: CardImplementationI[];
}