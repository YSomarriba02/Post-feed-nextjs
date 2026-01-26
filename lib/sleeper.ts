export default async function sleeper(time: number) {
  return await new Promise((resolve) => setTimeout(resolve, time));
}
