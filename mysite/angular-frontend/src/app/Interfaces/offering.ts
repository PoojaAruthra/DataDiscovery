class Tag {
    id:string = '';
    name:string = '';
    type:string = '';
}

class Recommendation {
    id:string = '';
    reason: string = '';
    score = '';
}

export interface Offering {
    id: string;
    name: string;
    description: string;
    access_url: string;
    documentation_url: string;
    is_recommended: boolean;
    image_name: string;
    sas: string;
    tags: Tag[];
    recommendations: Recommendation[];
    tag_completeness_score : number;
    tag_improvement_string: string
}
