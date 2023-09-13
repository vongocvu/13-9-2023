function showBannerHotWord() {
  const dataBanner = [
    {
      image: "https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi",
      title: "Khung Giờ Săn Sale",
    },
    {
      image:
        "https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi",
      title: "Miễn Phí Ship - Có Shopee",
    },
    {
      image:
        "https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi",
      title: "Voucher Giảm Đến 500.000Đ",
    },
    {
      image:
        "https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi",
      title: "Hàng Hiệu Outlet Giảm 50%",
    },
    {
      image:
        "https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi",
      title: "Mã Giảm Giá",
    },
    {
      image: "			https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi",
      title: "Gì Cũng Rẻ - Deal Sốc 9.000Đ",
    },
    {
      image: "https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi",
      title: "Nạp Thẻ, Dịch Vụ & Khách Sạn",
    },
    {
      image: "https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi",
      title: "Hàng Quốc Tế",
    },
    {
      image:
        "https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi",
      title: "Bắt Trend - Giá Sốc",
    },
  ];

  const show_banner_hotword = document.getElementById("show_banner_hotword");

  dataBanner.forEach((data) => {
    show_banner_hotword.innerHTML += `
      <div class="col-span-1 items-center transition hover:translate-y-[-3px] cursor-pointer">
      <div class="flexCenter">
        <img
          class="w-[50%]"
          src="${data.image}"
          alt=""
        />
      </div>
      <div class="text-center text-[13px] mt-[5px] leading-[17px]">
      ${data.title}
      </div>
    </div>
    `;
  });
}
