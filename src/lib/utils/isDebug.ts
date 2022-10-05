import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const isDebug = writable(browser ? window.location.search.includes('debug=true') : false);
