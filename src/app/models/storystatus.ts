export enum StoryStatus {
    'backlog' = '-1',
    'To-Do' = '1',
    'Progress' = '2',
    'Review' = '3',
    'Done' = '4'

}


export function GetStatusses() {
    return Object.keys(StoryStatus).filter(o => StoryStatus[o] !== StoryStatus.backlog);
}