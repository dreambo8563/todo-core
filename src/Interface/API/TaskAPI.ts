import fetch from 'node-fetch';
export interface ITaskAPI {
  createTask(content: string): Promise<{ id: string; body: string }>;
}

export class TaskAPI implements ITaskAPI {
  async createTask(content: string | URL) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: content.toString(),
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return await response.json();
  }
}
