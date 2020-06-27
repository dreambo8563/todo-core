import fetch from 'node-fetch';
export interface ITaskAPI {
  createTask(content: string | URL): Promise<{ id: string; body: string }>;
}

export class TaskAPI implements ITaskAPI {
  //* Singleton pattern - Lazy initialization
  private static instance: TaskAPI | null = null;
  private constructor() {}
  static getInstance() {
    if (null === this.instance) {
      this.instance = new TaskAPI();
    }
    return this.instance;
  }
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
