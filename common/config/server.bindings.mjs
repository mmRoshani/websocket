import env from "dotenv";
env.config();

export const SERVER_BINDINGS = () => {
  const port = process.env.PORT ?? 3333;
  return {
    port,
  };
};
