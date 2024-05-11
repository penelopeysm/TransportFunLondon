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
};

export type Path = {
    start: Checkpoint;
    end: Checkpoint;
    midpoints: Checkpoint[];
    mode: string;
}

export const allCheckpoints: Checkpoint[] = [
    { name: 'British Library', lng: -0.126944, lat: 51.529444 },
    { name: 'Goose', lng: -0.2348763, lat: 51.4778406 },
    { name: 'Karl Marx', lat: 51.5661754, lng: -0.1451013 },
];

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
