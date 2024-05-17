export function getEnvironment() {
  const enviro = process.env.NODE_ENV;
  if (enviro === "production") {
    return "https://tbc-accelerator-project.vercel.app/";
  } else {
    return "http://localhost:3000/";
  }
}
