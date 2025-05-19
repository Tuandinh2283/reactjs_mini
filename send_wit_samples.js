const axios = require("axios");
const fs = require("fs");

// Đọc dữ liệu JSON từ file text.json
const raw = fs.readFileSync("text.json", "utf8");
let data = JSON.parse(raw);

// Kiểm tra và lấy đúng mảng expressions
if (data.expressions && Array.isArray(data.expressions)) {
  data = data.expressions;
} else {
  console.error("❌ Dữ liệu trong text.json không phải là mảng expressions!");
  process.exit(1);
}

// Thay YOUR_WIT_SERVER_ACCESS_TOKEN_HERE bằng token thật của bạn
const WIT_TOKEN = "FHAIQYSANCQ3AJLYSUTMZP4FT7N4HMVI";
const WIT_API_URL = "https://api.wit.ai/samples?v=20230518";

async function sendSample(sample) {
  try {
    const res = await axios.post(
      WIT_API_URL,
      [sample], // Gửi mảng mẫu (ở đây mỗi lần 1 mẫu)
      {
        headers: {
          Authorization: `Bearer ${WIT_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`✅ Đã gửi: "${sample.text}" -> intent: ${sample.intent}`);
  } catch (error) {
    console.error("❌ Lỗi khi gửi mẫu:", sample.text);
    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

(async () => {
  console.log(`✅ Đã đọc dữ liệu từ text.json, số mẫu: ${data.length}`);

  for (const item of data) {
    const sample = {
      text: item.text,
      entities: item.entities || [],
      traits: [], // nếu có traits thì thêm vào
      intent: item.intent,
    };
    await sendSample(sample);
    // Delay 200ms tránh rate limit
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  console.log("🎉 Đã gửi hết mẫu dữ liệu lên Wit.ai!");
})();
