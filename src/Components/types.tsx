export type SoundRecord = {
    speaker: string,
    topic: string,
    link: string
}

export interface GridSystemProps {
    data: SoundRecord[]
}

export interface FormRowProps {
    rowNum: number
}

export enum Display{
    SHORT,
    FULL
}