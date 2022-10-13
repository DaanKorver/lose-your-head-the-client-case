import { writable, type Writable } from 'svelte/store';

interface EnterStore {
	entered: boolean;
	animated: boolean;
}

export const useEnter: Writable<EnterStore> = writable({
	entered: false,
	animated: false
});
