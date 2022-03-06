import { Task } from '@models/Task.types';
export type PropsTodo = { [Props in keyof Task]: Task[Props] };
