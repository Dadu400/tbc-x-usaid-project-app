export function getEnvironment() {
  const environment = process.env.NODE_ENV;
  if (environment === "production") {
    return "https://tbc-x-usaid-project-app.vercel.app";
  } else {
    return "http://localhost:3000";
  }
}
