import {
    type Point,
    type Feature,
    type FeatureCollection,
    type LineString
} from 'geojson';

export type Checkpoint = {
    name: string;
    lng: number;
    lat: number;
    victoria: boolean;
    district: boolean;
    handc: boolean;
};

export type Path = {
    start: Checkpoint;
    end: Checkpoint;
    midpoints: Checkpoint[];
    mode: string;
}

export const allCheckpoints: Checkpoint[] = [
    {
        "name": "British Library",
        "lng": -0.127676,
        "lat": 51.529972,
        "victoria": false,
        "district": false,
        "handc": false
    },
    {
        "name": "IKEA",
        "lng": -0.2284194,
        "lat": 51.4939611,
        "victoria": false,
        "district": false,
        "handc": false
    },
    {
        "name": "Acton Town",
        "lng": -0.280302696832724,
        "lat": 51.50307098636339,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Aldgate East",
        "lng": -0.07300146242073956,
        "lat": 51.515081505698724,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Baker Street",
        "lng": -0.15690419298618452,
        "lat": 51.52312936605881,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Barbican",
        "lng": -0.09772157809050226,
        "lat": 51.520215126107836,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Barking",
        "lng": 0.08083161040306543,
        "lat": 51.53952124839739,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Barons Court",
        "lng": -0.21343014241789163,
        "lat": 51.490228334902,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Becontree",
        "lng": 0.12688029269359377,
        "lat": 51.53958561974398,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Blackfriars",
        "lng": -0.10299538462450546,
        "lat": 51.511586761695014,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Blackhorse Road",
        "lng": -0.039625711465052844,
        "lat": 51.58577656484627,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Bow Road",
        "lng": -0.02435959063268143,
        "lat": 51.52704176950966,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Brixton",
        "lng": -0.11455209682922837,
        "lat": 51.46273661697816,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Bromley-by-Bow",
        "lng": -0.011682374353045397,
        "lat": 51.524840183700945,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Cannon Street",
        "lng": -0.09025052641503478,
        "lat": 51.51136194370192,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Chiswick Park",
        "lng": -0.2677369179922983,
        "lat": 51.494370277942714,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Dagenham East",
        "lng": 0.16583343330916664,
        "lat": 51.54418761328958,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Dagenham Heathway",
        "lng": 0.14767972147400332,
        "lat": 51.54121203550144,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Ealing Broadway",
        "lng": -0.3020103761336258,
        "lat": 51.51486148277942,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Ealing Common",
        "lng": -0.2871514131053222,
        "lat": 51.510248187933655,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Earl's Court",
        "lng": -0.19431380709514257,
        "lat": 51.49135635619762,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "East Ham",
        "lng": 0.051516293480576195,
        "lat": 51.53924625194368,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Edgware Road",
        "lng": -0.16766825265117855,
        "lat": 51.519997771093394,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Elm Park",
        "lng": 0.19725268428342685,
        "lat": 51.54912490990794,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Embankment",
        "lng": -0.1223673356621198,
        "lat": 51.50731229694681,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Euston",
        "lng": -0.13329647081915122,
        "lat": 51.528664114832,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Euston Square",
        "lng": -0.13534448844269154,
        "lat": 51.525468382999584,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Farringdon",
        "lng": -0.10484306131676423,
        "lat": 51.52019551919777,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Finsbury Park",
        "lng": -0.10588148552890234,
        "lat": 51.564635274841386,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Gloucester Road",
        "lng": -0.18354355757159108,
        "lat": 51.494499259625194,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Goldhawk Road",
        "lng": -0.2274040032488232,
        "lat": 51.502076596636755,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Great Portland Street",
        "lng": -0.14396142408109036,
        "lat": 51.52378856271794,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Green Park",
        "lng": -0.1424775744225331,
        "lat": 51.50676025371464,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Gunnersbury",
        "lng": -0.27516413141625035,
        "lat": 51.49186296322991,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Hammersmith",
        "lng": -0.2228609258853042,
        "lat": 51.49181941355715,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Highbury and Islington",
        "lng": -0.10408213923935299,
        "lat": 51.54649533884997,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Hornchurch",
        "lng": 0.21892699941117588,
        "lat": 51.55435547079002,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Kensington (Olympia)",
        "lng": -0.2103792397678828,
        "lat": 51.497879357125825,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Kew Gardens",
        "lng": -0.28538100667617433,
        "lat": 51.476788671230366,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "King's Cross St. Pancras",
        "lng": -0.12387212868703427,
        "lat": 51.53031226194627,
        "victoria": true,
        "district": false,
        "handc": true
    },
    {
        "name": "Ladbroke Grove",
        "lng": -0.21019816989179294,
        "lat": 51.51721033175281,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Latimer Road",
        "lng": -0.21745966331724165,
        "lat": 51.51395774487751,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Liverpool Street",
        "lng": -0.08224962188885442,
        "lat": 51.51759813225402,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Mansion House",
        "lng": -0.09419765724378423,
        "lat": 51.5120915984511,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Mile End",
        "lng": -0.0326660842711517,
        "lat": 51.525310919564504,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Monument",
        "lng": -0.0861883132610571,
        "lat": 51.51063027735101,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Moorgate",
        "lng": -0.08901768741961913,
        "lat": 51.51843699583112,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Oxford Circus",
        "lng": -0.1408361701333405,
        "lat": 51.51522317440166,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Paddington",
        "lng": -0.17573675026577226,
        "lat": 51.51539350022652,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Pimlico",
        "lng": -0.13310825739138485,
        "lat": 51.48955264664939,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Plaistow",
        "lng": 0.017780641996985185,
        "lat": 51.53128836681778,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Ravenscourt Park",
        "lng": -0.23596922986014346,
        "lat": 51.494067596546,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Richmond",
        "lng": -0.30173912870492936,
        "lat": 51.46323239395917,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Royal Oak",
        "lng": -0.18882367154685417,
        "lat": 51.5182940459234,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Seven Sisters",
        "lng": -0.07246682251889108,
        "lat": 51.58336204399537,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Shepherd's Bush Market",
        "lng": -0.22740049041020913,
        "lat": 51.50588033819017,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Sloane Square",
        "lng": -0.15648885605702362,
        "lat": 51.492359510480554,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "South Kensington",
        "lng": -0.17392302133763954,
        "lat": 51.494071083255236,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "St. James's Park",
        "lng": -0.13387875434112476,
        "lat": 51.49960957772611,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Stamford Brook",
        "lng": -0.24524630602792208,
        "lat": 51.49444956856966,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Stepney Green",
        "lng": -0.04738252319485509,
        "lat": 51.521995758615454,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Stockwell",
        "lng": -0.12284630335652602,
        "lat": 51.47215905711563,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Temple",
        "lng": -0.11372574953125439,
        "lat": 51.51104042360467,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Tottenham Hale",
        "lng": -0.06018782248556836,
        "lat": 51.58799768229062,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Tower Hill",
        "lng": -0.07670119812097691,
        "lat": 51.51039415022928,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Turnham Green",
        "lng": -0.2545245642842539,
        "lat": 51.49518152685563,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Upminster",
        "lng": 0.2514008048009922,
        "lat": 51.558763771001516,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Upminster Bridge",
        "lng": 0.23454189192904223,
        "lat": 51.55771918780094,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Upney",
        "lng": 0.10153174466413689,
        "lat": 51.53840581666546,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Upton Park",
        "lng": 0.03454183972360732,
        "lat": 51.536628259878114,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Vauxhall",
        "lng": -0.12382995197041927,
        "lat": 51.48573560145266,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Victoria",
        "lng": -0.14392070512630392,
        "lat": 51.49642371956767,
        "victoria": true,
        "district": true,
        "handc": false
    },
    {
        "name": "Walthamstow Central",
        "lng": -0.019940545005550973,
        "lat": 51.58301808337606,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "Warren Street",
        "lng": -0.13827833053848032,
        "lat": 51.524579764761874,
        "victoria": true,
        "district": false,
        "handc": false
    },
    {
        "name": "West Ham",
        "lng": 0.005317393832787913,
        "lat": 51.528525530726974,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "West Kensington",
        "lng": -0.20620369221802679,
        "lat": 51.490109027210565,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Westbourne Park",
        "lng": -0.20088251281474612,
        "lat": 51.520988514909256,
        "victoria": false,
        "district": false,
        "handc": true
    },
    {
        "name": "Westminster",
        "lng": -0.1250020783467796,
        "lat": 51.501401389193255,
        "victoria": false,
        "district": true,
        "handc": false
    },
    {
        "name": "Whitechapel",
        "lng": -0.05942048498810923,
        "lat": 51.5195876908872,
        "victoria": false,
        "district": true,
        "handc": true
    },
    {
        "name": "Wood Lane",
        "lng": -0.22447260570993852,
        "lat": 51.5096578296917,
        "victoria": false,
        "district": false,
        "handc": true
    }
]

export function pointToGJ(pt: Checkpoint): Feature<Point> {
    return {
        "type": "Feature",
        "properties": {
            "name": pt.name,
        },
        "geometry": {
            "type": "Point",
            "coordinates": [pt.lng, pt.lat]
        }
    }
}

export function pathToGJ(path: Path): Feature<LineString> {
    const coords = [
        [path.start.lng, path.start.lat],
        ...path.midpoints.map(pt => [pt.lng, pt.lat]),
        [path.end.lng, path.end.lat]
    ];
    return {
        "type": "Feature",
        "properties": {
            "start_name": path.start.name,
            "mode": path.mode,
            "end_name": path.end.name,
        },
        "geometry": {
            "type": "LineString",
            "coordinates": coords
        }
    }
}

export function pathsToGJ(paths: Path[]): FeatureCollection<LineString> {
    return {
        "type": "FeatureCollection",
        "features": paths.map(pathToGJ)
    }
}

export function pointsToGJ(points: Checkpoint[]): FeatureCollection<Point> {
    return {
        "type": "FeatureCollection",
        "features": points.map(pointToGJ)
    }
}

export function modeToColor(mode: string): string {
    if (mode === "walk") {
        return "#3a3a3a";
    } else if (mode === "victoria") {
        return "#00a0df";
    } else if (mode === "district") {
        return "#007934";
    } else if (mode === "handc") {
        return "#ec9bad";
    } else {
        console.error("Unknown mode: " + mode);
        return "#000000";
    }
}
