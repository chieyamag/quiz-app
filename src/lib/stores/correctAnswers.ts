import { writable, type Writable } from 'svelte/store';

export const correctAnswers: Writable<boolean[]> = writable([]);

