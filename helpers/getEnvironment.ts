export function getEnvironment() {
  const enviro = process.env.NODE_ENV;
  if (enviro === "production") {
    return "https://tbc-x-usaid-project-app.vercel.app";
  } else {
    return "http://localhost:3000";
  }
}
