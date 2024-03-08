import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

import http from "k6/http";

export const options = {
    vus: 10000, // 가상 사용자 수
    duration: "10m", // 테스트 시간
  };
  
  

  
export default function () {
  http.get("서버주소");
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }
  
// k6 run --out influxdb=http://localhost:8086/myk6db script.js