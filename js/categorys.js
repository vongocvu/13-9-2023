function showCategory() {
  const CateData = [
    {
      image:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
      title: "Thời Trang Nam",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      title: "Điện Thoại & Phụ Kiện",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
      title: "Thiết Bị Điện Tử",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
      title: "Máy Tính & Laptop",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
      title: "Đồng Hồ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
      title: "Thời Trang Nam",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      title: "Điện Thoại & Phụ Kiện",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
      title: "Thiết Bị Điện Tử",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
      title: "Máy Tính & Laptop",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
      title: "Đồng Hồ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
      title: "Thời Trang Nam",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      title: "Điện Thoại & Phụ Kiện",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
      title: "Thiết Bị Điện Tử",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
      title: "Máy Tính & Laptop",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
      title: "Đồng Hồ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
      title: "Thời Trang Nam",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      title: "Điện Thoại & Phụ Kiện",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
      title: "Thiết Bị Điện Tử",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
      title: "Máy Tính & Laptop",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
      title: "Đồng Hồ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
      title: "Thời Trang Nam",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      title: "Điện Thoại & Phụ Kiện",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
      title: "Thiết Bị Điện Tử",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
      title: "Máy Tính & Laptop",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
      title: "Đồng Hồ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
      title: "Thời Trang Nam",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      title: "Điện Thoại & Phụ Kiện",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
      title: "Thiết Bị Điện Tử",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
      title: "Máy Tính & Laptop",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
      title: "Đồng Hồ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
      title: "Thời Trang Nam",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      title: "Điện Thoại & Phụ Kiện",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
      title: "Thiết Bị Điện Tử",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
      title: "Máy Tính & Laptop",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
      title: "Đồng Hồ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
      title: "Thời Trang Nam",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      title: "Điện Thoại & Phụ Kiện",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
      title: "Thiết Bị Điện Tử",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
      title: "Máy Tính & Laptop",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
      title: "Đồng Hồ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
      title: "Thời Trang Nữ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
    },
  ];

  const cate_row_1 = document.getElementById("cate_row_1");
  const cate_row_2 = document.getElementById("cate_row_2");
  const slides_cate = document.getElementById("slides_cate");
  const box_slider_cate = document.getElementById("box_slider_cate");

  const btn_prev_cate = document.getElementById("btn_prev_cate");
  const btn_next_cate = document.getElementById("btn_next_cate");

  const number_of_slides = 9;

  const numberTranslate = 4;

  const widthCardCate = slides_cate.offsetWidth / number_of_slides;
  let pxTranslate = 0;
  let countSlide = 0;

  pxTranslate = widthCardCate * numberTranslate;

  CateData.forEach((data, index) => {
    if (index < CateData.length / 2) {
      ShowRowCate(cate_row_1, data);
    } else {
      ShowRowCate(cate_row_2, data);
    }
  });

  function showBTN() {
    if (countSlide === 0) {
      btn_prev_cate.style.display = "none";
    } else {
      btn_prev_cate.style.display = "flex";
    }

    if (countSlide >= cate_row_1.children.length / numberTranslate - 2) {
      btn_next_cate.style.display = "none";
    } else {
      btn_next_cate.style.display = "flex";
    }
  }
  showBTN();

  btn_next_cate.addEventListener("click", () => {
    countSlide++;
    changeSlide();
  });

  btn_prev_cate.addEventListener("click", () => {
    countSlide--;
    if (countSlide <= 0) {
      countSlide = 0;
    }
    changeSlide();
  });

  function changeSlide() {
    showBTN();
    if (countSlide >= cate_row_1.children.length / numberTranslate - 2) {
      countSlide--;
      slides_cate.style.transform = `translateX(-${
        pxTranslate * countSlide -
        (box_slider_cate.getBoundingClientRect().right.toFixed(0) -
          cate_row_1.lastChild.getBoundingClientRect().right.toFixed(0))
      }px)`;
    } else {
      slides_cate.style.transform = `translateX(-${
        pxTranslate * countSlide
      }px)`;
    }
  }

  function ShowRowCate(location, data) {
    location.innerHTML += `
    <div
    class="slide_cate min-w-[${widthCardCate}px] max-w-[${widthCardCate}px] border-[1px] border-[#99999] flex flex-col hover:scale-[1.05] transition cursor-pointer bg-white"
    >
    <div class="min-w-full h-[100px] px-[20px] py-0">
      <img
        class="w-full h-full object-contain"
        src="${data.image}"
        alt=""
      />
    </div>
    <div class="text-center text-[14px] pb-[10px] px-[10px]">
      <h3>${data.title}</h3>
    </div>
    </div>`;
  }
}
