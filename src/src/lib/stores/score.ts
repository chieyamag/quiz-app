// src/lib/stores/score.ts
import { writable, type Writable } from 'svelte/store';

// スコアを管理する「箱」で、型は number（数字）
export const score: Writable<number> = writable(0);