export default eventHandler((event) => {
  // Normally in Nitro / Nuxt we access env-variables like this:
  const { mySecretToken } = useRuntimeConfig();

  // But possibly it needs to be done like this, e.g. within `drizzle.config.ts`:
  const mySecretToken2 = process.env.NITRO_MY_SECRET_TOKEN;

  return 'hello world!';
});
