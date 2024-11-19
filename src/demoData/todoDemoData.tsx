import { TodoStatusEnum } from '../pages/todos/update/update.types';

export const todoDemoData = [
  {
    id: '1',
    title: 'Clean Room',
    status: TodoStatusEnum.PENDING,
    date: '2024-11-14 09:50:18.770403'
  },
  {
    id: '2',
    title: 'Read Book',
    status: TodoStatusEnum.COMPLETED,
    date: '2024-11-14 09:49:04.399099'
  }
];

export const todoAddDemoData = { title: 'Add Task' };

export const todoUpdateDemoData = {
  ...todoAddDemoData,
  status: TodoStatusEnum.COMPLETED
};

export const errorResponseDemo = 'Error Occured';

export const deletionSuccessMessage = 'todo of ID: 1 successfully deleted';
