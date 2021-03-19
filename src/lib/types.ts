export type Item = {
    id: string;
    domain: string;
    url: string;
    title: string;
    type: string;
    time_ago: string;
    points: string;
    user: string;
    comments_count: number;
    content: string;
    comments: Comment[];
};

export type Comment = {
    deleted: boolean;
    user: string;
    time_ago: string;
    comments: Comment[];
    content: string;
};

export type User = {
    id: string;
    created: string;
    karma: string;
    about: string;
};
