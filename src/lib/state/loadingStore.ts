import { writable, type Writable } from 'svelte/store';

interface LoadingStore {
	loaded: boolean;
}

export const useLoading: Writable<LoadingStore> = writable({ loaded: false });
