import { writable, type Writable } from "svelte/store";
import { type Map } from "maplibre-gl";

export let map: Writable<Map | null> = writable(null);
