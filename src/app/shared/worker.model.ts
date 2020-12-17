export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  type: number;
  bool: boolean;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', type: 0, bool: true, },
  { id: 2, name: 'Петр', surname: 'Петров', type: 1, bool: true, },
  { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2, bool: true, },
  { id: 4, name: 'Василий', surname: 'Васильев', type: 3, bool: true, },
];
