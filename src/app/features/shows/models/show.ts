export interface Show{
    id?: number;
    url?: string;
    name?: string;
    type?: string;
    language?: string;
    genres?: string[];
    status?: string;
    runtime?: number;
    premiered?: string;
    officialSite?: string;
    schedule?: Schedule;
    rating?: Rating;
    weight?: number;
    network?: Network;
    webChannel?: string;
    externals?: Externals;
    image?: Image;
    summary?: string;
    updated?: number;
    _links: _Links;
}

interface Schedule{
    time?: string;
    days?: string[];
}

interface Rating{
    average?: number;
}

interface Network{
    id?: number;
    name?: string;
    country?: Country; 
}

interface Country{
    name?: string;
    code?: string;
    timezone?: string;
}

interface Externals{
    tvrage?: number;
    thetvdb?: number;
    imdb?: string;
}

interface Image{
    medium?: string;
    original?: string;
}

interface _Links{
    self?: Link;
    previousepisode?: Link;
}

interface Link{
    href?: string;
}