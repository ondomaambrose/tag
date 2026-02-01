// load-test.js
import http from "k6/http";
import { check, sleep } from "k6";

// Configuration: Simulate 50 users arriving over 30 seconds
export const options = {
  stages: [
    { duration: "10s", target: 20 }, // Ramp up to 20 users
    { duration: "30s", target: 50 }, // Stay at 50 users
    { duration: "10s", target: 0 }, // Ramp down to 0
  ],
};

export default function () {
  // 1. Replace this with your actual deployed URL (e.g., Netlify or Firebase Hosting)
  const res = http.get("https://tag-aldc.vercel.app/");

  // 2. Check if the server replied with "200 OK"
  check(res, { "status was 200": (r) => r.status == 200 });

  // 3. Wait 1 second before this "user" hits the site again
  sleep(1);
}
