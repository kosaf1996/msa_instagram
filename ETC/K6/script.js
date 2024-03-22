import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

import http from "k6/http";

export const options = {
    vus: 10, // 가상 사용자 수
    duration: "1m", // 테스트 시간
  };
  
  

  
export default function () {
  http.get("서버 주소");
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }
  
// k6 run --out influxdb=http://localhost:8086/myk6db script.js