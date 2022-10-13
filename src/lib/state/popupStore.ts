import { writable, type Writable } from 'svelte/store';

interface PopupStore {
	popup: boolean;
}

export const usePopup: Writable<PopupStore> = writable({
	popup: false
});
