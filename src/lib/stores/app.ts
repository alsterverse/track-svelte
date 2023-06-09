import { writable } from 'svelte/store';

export const currentSection = writable<number>(-1);
