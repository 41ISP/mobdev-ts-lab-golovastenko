import { TCategory } from "./types";

export const CATEGORY_LABELS: Record<TCategory, {label: string}> = {
    video: {label: 'Видео и музыка'},
    apps: {label: 'Приложения'},
    mobile: {label: 'Связь'},
    learning: {label: 'Обучение'},
    other: {label: 'Другое'}
}

export const CATEGORY_LIST = Object.keys(CATEGORY_LABELS) as TCategory[]