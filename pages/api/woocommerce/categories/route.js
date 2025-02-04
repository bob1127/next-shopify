import axios from "axios";

// 允許的來源和方法
const allowedOrigins = ['https://www.starislandbaby.com']; // 可根據需要修改

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // 設置 CORS 標頭
  const origin = req.headers.origin || '*';
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  try {
    const {
      NEXT_PUBLIC_WP_API_BASE_URL,
      NEXT_PUBLIC_WC_CONSUMER_KEY,
      NEXT_PUBLIC_WC_CONSUMER_SECRET,
    } = process.env;

    if (!NEXT_PUBLIC_WP_API_BASE_URL || !NEXT_PUBLIC_WC_CONSUMER_KEY || !NEXT_PUBLIC_WC_CONSUMER_SECRET) {
      throw new Error("Missing required environment variables");
    }

    let allCategories = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      // 構建 API 請求 URL，設置 `per_page=100` 來獲取最多的數據
      const url = `${NEXT_PUBLIC_WP_API_BASE_URL}wp-json/wc/v3/products/categories?per_page=100&page=${page}&consumer_key=${NEXT_PUBLIC_WC_CONSUMER_KEY}&consumer_secret=${NEXT_PUBLIC_WC_CONSUMER_SECRET}`;

      console.log("Fetching categories:", url);

      const response = await axios.get(url);

      if (response.data.length > 0) {
        allCategories = [...allCategories, ...response.data];
        page++; // 取下一頁
      } else {
        hasMore = false; // 如果返回空數據，則停止請求
      }
    }

    res.status(200).json(allCategories);
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    console.error("Error stack:", error.stack);

    if (error.response) {
      console.error("Error response data:", error.response.data);
      res.status(error.response.status).json({
        error: "Failed to fetch categories",
        details: error.response.data,
      });
    } else {
      res.status(500).json({
        error: "Failed to fetch categories",
        details: error.message,
        stack: error.stack,
      });
    }
  }
}
