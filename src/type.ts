export const enum Status {
  IS_CREATE,
  IS_DONE,
  IS_DELETE
}

export interface TodoItem {
  id: string;
  content: string;
  status: Status
}
