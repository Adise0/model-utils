/**
 * Waits the specified time in `ms`
 * @param ms The ms to wait for
 * @returns The awaitable promise
 */
const wait = (ms: number): Promise<void> =>
  new Promise<void>((r) => {
    setTimeout(() => r(), ms);
  });

export default wait;
