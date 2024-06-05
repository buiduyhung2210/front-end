// ModalCardProductMenuPageData.js

const productDescriptions = {
    1: "This is a description for product 1.",
    2: "Dom Pérignon Vintage 2002 là một loại champagne cao cấp từ Moët & Chandon, sản xuất từ nho Chardonnay và Pinot Noir. Được coi là một trong những sản phẩm xuất sắc nhất từ năm thu hoạch 2002 ở Champagne, Pháp, với hương vị phức tạp của trái cây đỏ chín và hoa quả sấy khô, cùng với kết thúc dài và đầy đặn.",
    3: "This is a description for product 3.",
    // Add more descriptions as needed for your products
  };
  
  // Function to get product description based on product id
  export const getProductDescription = (productId) => {
    return productDescriptions[productId] || "No description available";
  };
  