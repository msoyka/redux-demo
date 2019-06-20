function mockProfileFetch(forceReject = false, timeoutDuration = 1000): Promise<any> {
  return new Promise((resolve, reject) => {
    const responseData = {
      username: 'msoyka',
      firstName: 'Matthew',
      lastName: 'Soyka',
      avatarURL: 'https://picsum.photos/200/300?random=1',
    };
    setTimeout(() => {
      if (forceReject) {
        reject('Error: mockFetch was forced to fail.');
      }
      resolve(responseData);
    }, timeoutDuration);
  });
}

export default mockProfileFetch;
