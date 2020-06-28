import fetch from 'node-fetch';
jest.mock('node-fetch');

function mockRes(res: object) {
  return (fetch as any).mockReturnValue(
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => {
        return res;
      },
    })
  );
}

export default mockRes;
