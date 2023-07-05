const MainData = [
  {
    id: "0DT125",
    name: "Trà Sen Vàng Củ Năng Nóng",
    price: "49000",
    describe:
      "Từ Ô Long kết hợp với hương sen thanh mát, thêm nguyên liệu củ năng giòn ngọt và lớp kem mềm mại.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/trasenvangcunang.png?alt=media&token=141d4d3c-9f49-4e68-9fda-0670639359f2",
    attribute: "Tea",
  },
  {
    id: "00DJ46",
    name: "Cà Phê Lon",
    price: "20000",
    describe: "",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/loncapheden.png?alt=media&token=98dd9afe-0841-412a-b9c1-3d53461a8c00",
    attribute: "otherdrinks",
  },
  {
    id: "0FC111",
    name: "Bánh Chuối",
    price: "29000",
    describe:
      "Món bánh truyền thống quen thuộc, với nguyên liệu 100% từ chuối tươi và nước cốt dừa nguyên chất.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: true,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/banhchuoi.png?alt=media&token=2728ba92-22e6-4e01-a718-16ae3b823ed9",
    attribute: "cake",
  },
  {
    id: "0DF112",
    name: "Phin Đen Đá",
    price: "35000",
    describe:
      "Ly Cà phê được pha hoàn toàn từ Phin, thêm đường đá nhưng vẫn cực đậm vị cà phê.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: true,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/caphetruyenthong.png?alt=media&token=318ff0c1-782f-4f6d-8b23-0b99fa43b2d1",
    attribute: "Traditional coffee",
  },
  {
    id: "00DF09",
    name: "Espresso",
    price: "49000",
    describe:
      "Ly cà phê với công thức rang xay và pha chế đẳng cấp chuyên gia, nguyên liệu Robusta và Arabica hảo hạng.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/espresso.png?alt=media&token=4b7aa917-9d93-414c-871b-1678655aa79e",
    attribute: "Machine coffee",
  },
  {
    id: "00DR30",
    name: "Freeze Trà Xanh",
    price: "59000",
    describe:
      "Món ngon mát lạnh từ vị trà xanh thêm thạch giòn thơm và kem béo ngậy. Phần trang trí có thể bị ảnh hưởng khi vẫn chuyển.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: true,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/matchafreeze.png?alt=media&token=67c5d0b9-25b4-4ce8-b39e-dfe296f1ff20",
    attribute: "Freeze",
  },
  {
    id: "0DF192",
    name: "Phindi Choco",
    price: "49000",
    describe:
      "Cà phê Phin kết hợp cùng Choco ngọt tan mang đến hương vị đắng nhẹ mà ngọt dịu.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: true,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/latteda.png?alt=media&token=d69e63d8-776a-48dd-ace9-38055e9e3b4a",
    attribute: "PhinDi",
  },
  {
    id: "0DT178",
    name: "Trà Tuyết Phúc Bồn Tử",
    price: "59000",
    describe:
      "Trà tuyết cực mát lạnh với lớp đá tuyết độc đáo cùng trái cây tươi thơm ngon và thạch giòn dai!",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/tratuyetphucbontu.png?alt=media&token=29152ef9-69e3-4103-b76f-667d5c2a9b2f",
    attribute: "Tea",
  },
  {
    id: "0DF175",
    name: "Bạc Xỉu Đá",
    price: "35000",
    describe:
      'Lựa chọn cho bạn "nhẹ đô" cà phê. Giảm nhẹ độ đắng cà phê, tăng thêm độ ngọt từ sữa đặc',
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/bacxiuda.png?alt=media&token=7b8ba7e9-2f52-4219-8275-293c3bbdfe8a",
    attribute: "Traditional coffee",
  },
  {
    id: "0DF178",
    name: "Bạc Xỉu Nóng",
    price: "35000",
    describe:
      'Lựa chọn cho bạn "nhẹ đô" cà phê. Giảm nhẹ độ đắng cà phê, tăng thêm độ ngọt từ sữa đặc',
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/bacxiunong.png?alt=media&token=e5b7355b-a0db-4688-acb9-f5f436b326a7",
    attribute: "Traditional coffee",
  },
  {
    id: "00DF25",
    name: "Phin Đen Nóng",
    price: "35000",
    describe:
      "Nóng hổi ! Chắt lọc từng giọt cà phê ngon từ Phin, mang đến sự nóng ấm đậm đà cà phê !",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/phindennong.png?alt=media&token=d55efc5d-890c-4f9d-88bf-763ca72f417d",
    attribute: "Traditional coffee",
  },
  {
    id: "00DF115",
    name: "Phin Sữa Đá",
    price: "35000",
    describe:
      "Ly cà phê với nguyên liệu số 1 từ hạt Robusta thêm Arabica, hoà quyện cùng sữa và đá vừa phải.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/phinsuada.png?alt=media&token=5613235d-50c7-40ab-b873-a9d55cd24a81",
    attribute: "Traditional coffee",
  },
  {
    id: "00DF26",
    name: "Phin Sữa Nóng",
    price: "35000",
    describe:
      "Nóng hổi! Dậy hương cà phê Robusta thêm Arabica, vừa nóng ấm, vừa đậm đà chất cà phê Phin.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/bacxiunong.png?alt=media&token=e5b7355b-a0db-4688-acb9-f5f436b326a7",
    attribute: "Traditional coffee",
  },
  {
    id: "00DF01",
    name: "Americano Nóng",
    price: "49000",
    describe: "Cà phê espresso cùng độ ấm nóng hoàn hảo, thơm ngọt vừa vị.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/americanonong.png?alt=media&token=0e64c560-a122-45ef-8b11-3dddc1a76812",
    attribute: "Machine coffee",
  },
  {
    id: "00DF54",
    name: "Caramel Macchiato Đá",
    price: "75000",
    describe:
      "Hương vị của cà phê espresso đắng đắng và sữa tươi ngon dịu. Tạo hình trang trí tỉ mỉ bằng lớp bọt sữa.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/caramelmachiatoda.png?alt=media&token=d56734e4-940c-419e-aa02-906fd39d2b74",
    attribute: "Machine coffee",
  },
  {
    id: "00DF18",
    name: "Cappuccino Đá",
    price: "69000",
    describe:
      "Cà phê sữa đậm đà, vị cà phê đậm hơn Latte. Thêm sữa tươi và bọt sữa trang trí tỉ mỉ.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/bacxiuda.png?alt=media&token=7b8ba7e9-2f52-4219-8275-293c3bbdfe8a",
    attribute: "Machine coffee",
  },
  {
    id: "00DF77",
    name: "Latte Nóng",
    price: "69000",
    describe:
      'Ấm nóng và "nhẹ đô" cà phê. Ly cà phê sữa ngọt ngào, thêm sữa tươi và lớp trang trí bọt sữa đậm chất nghệ thuật.',
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/lattenong.png?alt=media&token=9ad9301a-158c-435c-8a24-459eb68462bc",
    attribute: "Machine coffee",
  },
  {
    id: "00DF89",
    name: "Mocha Nóng",
    price: "75000",
    describe:
      "Cà phê ấm nóng với sự hào quyện giữa vị đắng cà phê espresso và sốt sô cô la, thêm ngọt ngào từ sữa tươi và nghệ thuật tạo hình trang trí đẳng cấp.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/mochanong.png?alt=media&token=b99c0991-e509-46dc-bac8-e304b9b3e3ec",
    attribute: "Machine coffee",
  },
  {
    id: "00DF85",
    name: "Cappuccino Nóng",
    price: "69000",
    describe:
      "Cà phê sữa ấm nóng, vị cà phê đậm hơn Latte. Thêm sữa tươi và bọt sữa trang trí tỉ mỉ.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/capunong.png?alt=media&token=e89a7d9d-c1aa-44cb-8950-366bc23b3ba3",
    attribute: "Machine coffee",
  },
  {
    id: "00DF78",
    name: "Latte Đá",
    price: "69000",
    describe:
      'Lựa chọn cho bạn "nhẹ đô" cà phê. Ly cà phê sữa ngọt ngào, thêm sữa tươi và bọt sữa trang trí tỉ mỉ.',
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/latteda.png?alt=media&token=d69e63d8-776a-48dd-ace9-38055e9e3b4a",
    attribute: "Machine coffee",
  },
  {
    id: "00DF90",
    name: "Mocha Đá",
    price: "75000",
    describe:
      "Sự hào quyện giữa vị đắng cà phê espresso và sốt sô cô la, thêm ngọt ngào từ sữa tươi và nghệ thuật tạo trang trí đẳng cấp.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/phinsuada.png?alt=media&token=5613235d-50c7-40ab-b873-a9d55cd24a81",
    attribute: "Machine coffee",
  },
  {
    id: "00DF15",
    name: "Americano Đá",
    price: "49000",
    describe:
      "Cà phê espresso cùng tỉ lệ đá thích hợp, mát lạnh nhưng vẫn đậm đà vị cà phê.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: true,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/caphetruyenthong.png?alt=media&token=318ff0c1-782f-4f6d-8b23-0b99fa43b2d1",
    attribute: "Machine coffee",
  },
  {
    id: "00DF52",
    name: "Caramel Macchiato Nóng",
    price: "75000",
    describe:
      "Hương vị của cà phê espresso ấm nóng, đắng đắng và sữa tươi ngọt dịu. Tạo hình trang trí tỉ mỉ bằng lớp bọt sữa.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/caramelmacchiatonong.png?alt=media&token=8d660888-f1d4-4b78-a800-0a4deff8e212",
    attribute: "Machine coffee",
  },
  {
    id: "0DT176",
    name: "Trà Tuyết Xoài Đào",
    price: "59000",
    describe:
      "Trà tuyết cực mát lạnh với lớp đá tuyết độc đáo cùng trái cây tươi thơm ngon và thạch giòn dai!",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/tratuyetxoaidao.png?alt=media&token=a0cf7960-f279-4ae7-8468-b9c340b9cad1",
    attribute: "Tea",
  },
  {
    id: "0DT137",
    name: "Trà Xanh Đậu Đỏ Nóng",
    price: "49000",
    describe:
      "Trà ấm nóng và vẫn giữ trọn vị trà xanh cùng hạt đậu đỏ thơm mềm, ngọt dịu.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/traxanhdaudonong.png?alt=media&token=85b9a117-212f-4d4d-b5bc-8310c4d60938",
    attribute: "Tea",
  },
  {
    id: "00DT29",
    name: "Trà Thạch Đào",
    price: "49000",
    describe:
      "Sự hoà quyện của hương thơm đào và độ thơm béo của sữa. Thêm ngon cùng topping miếng đào và thạch đào dai giòn.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: true,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/trathachdao.png?alt=media&token=29bc02f7-cb89-4aec-8d60-b592b2a6dc41",
    attribute: "Tea",
  },
  {
    id: "00DT32",
    name: "Trà Sen Vàng Củ Năng",
    price: "49000",
    describe:
      "Từ Ô Long kết hợp với hương sen thanh mát, thêm nguyên liệu củ năng giòn ngọt và lớp kem mềm mại.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/trasenvangcunang.png?alt=media&token=141d4d3c-9f49-4e68-9fda-0670639359f2",
    attribute: "Tea",
  },
  {
    id: "0DT150",
    name: "Trà Sen Vàng Nóng",
    price: "49000",
    describe:
      "Trà Ô Long kết hợp với hương sen thanh mát, thêm đậm vị sen bằng hạt sen dẻo thơ và lớp kem mềm mại",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/trasenvangnong.png?alt=media&token=2ef6288b-f959-4033-bd2f-d26e83acddb4",
    attribute: "Tea",
  },
  {
    id: "0DT147",
    name: "Trà Sen Vàng",
    price: "49000",
    describe:
      "Trà Ô Long kết hợp với hương sen thanh mát, thêm đậm vị sen bằng hạt sen dẻo thơm và lớp kem mềm mại.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: true,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/trasenvangnong.png?alt=media&token=2ef6288b-f959-4033-bd2f-d26e83acddb4",
    attribute: "Tea",
  },
  {
    id: "00DT62",
    name: "Trà Xanh Đậu Đỏ",
    price: "49000",
    describe:
      "Vị trà xanh đắng đắng thơm ngát, thêm độ ngọt vừa và mềm mại của đậu đỏ. Ngon ngọt nhưng không ngấy.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/traxanhdaudonong.png?alt=media&token=85b9a117-212f-4d4d-b5bc-8310c4d60938",
    attribute: "Tea",
  },
  {
    id: "0DT128",
    name: "Trà Thạch Đào Nóng",
    price: "49000",
    describe:
      "Trà ấm nóng và vẫn giữ trọn vị trà thạch đào. Thêm ngon cùng topping miếng đào và thạch đào dai ngon.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/trathachdao.png?alt=media&token=29bc02f7-cb89-4aec-8d60-b592b2a6dc41",
    attribute: "Tea",
  },
  {
    id: "00DT30",
    name: "Trà Thanh Đào",
    price: "49000",
    describe:
      "Sự hài hoà giữa vị trà cao cấp, những miếng đào ngọt giòn thêm chút hương thanh mát của sả, thoải mãn vị giác 100%.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/trathanhdao%20(2).png?alt=media&token=77eac825-1cda-4bc3-a0a6-f263a39cc425",
    attribute: "Tea",
  },
  {
    id: "00DT59",
    name: "Trà Thạch Vải",
    price: "49000",
    describe:
      "Sự kết hợp giữa quả vải mọng nước cùng trà đen và thạch vải giòn thơm hương vải.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/trathachvai.png?alt=media&token=cd1d0b7f-aabd-48c8-9c73-fc1cd9c61459",
    attribute: "Tea",
  },
  {
    id: "0DT131",
    name: "Trà Thanh Đào Nóng",
    price: "49000",
    describe:
      "Trà ấm nóng và vẫn giữ trọn vị trà thanh đào. Hương trà thơm ngát, miếng đào mọng nước, thanh mát vị sả.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/trathanhdao%20(2).png?alt=media&token=77eac825-1cda-4bc3-a0a6-f263a39cc425",
    attribute: "Tea",
  },
  {
    id: "0DT134",
    name: "Trà Thạch Vải Nóng",
    price: "49000",
    describe:
      "Trà ấm nóng và vẫn giữ trọn vị trà thạch vải. Thơm hương trà, ngọt vị trái vải, thạch mềm dai giòn!",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/trathachvai.png?alt=media&token=cd1d0b7f-aabd-48c8-9c73-fc1cd9c61459",
    attribute: "Tea",
  },
  {
    id: "0DF186",
    name: "PhinDi Hạnh Nhân",
    price: "49000",
    describe:
      "Cà phê Phin với độ đậm cà phê vừa phải, đặc biệt thêm Hạnh Nhân thơm bùi.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/caramelmachiatoda.png?alt=media&token=d56734e4-940c-419e-aa02-906fd39d2b74",
    attribute: "PhinDi",
  },
  {
    id: "0DF183",
    name: "PhinDi Kem Sữa",
    price: "49000",
    describe:
      "Cà phê Phin với độ đậm cà phê vừa phải, đặc biệt thêm Kem Sữa thơm béo.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/latteda.png?alt=media&token=d69e63d8-776a-48dd-ace9-38055e9e3b4a",
    attribute: "PhinDi",
  },
  {
    id: "0DF122",
    name: "Classic Phin Freeze",
    price: "59000",
    describe:
      "Sự kết hợp giữa cà phê đá xay và caramel nhưng nhấn mạnh vào vị cà phê đậm đà. Phần kem có thể bị ảnh hưởng khi vận chuyển.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/classicphinfreeze.png?alt=media&token=ea780f47-5e97-49f5-b711-adcdc1620731",
    attribute: "Freeze",
  },
  {
    id: "00DR19",
    name: "Cookies & Cream",
    price: "59000",
    describe:
      "Mát lạnh và không có cà phê ư? Có ngay sự kết hợp giữa bánh Oreo, sữa tươi và whipping cream! Phần kem có thể bị ảnh hưởng khi vận chuyển.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/cookiescream.png?alt=media&token=72e5fd8a-12bb-43f8-bf5a-8b1a6f75ca74",
    attribute: "Freeze",
  },
  {
    id: "0DF118",
    name: "Caramel Phin Freeze",
    price: "59000",
    describe:
      "Sự cộng hưởng của hương cà phê đá xay và caramel, thêm kem sữa rưới sốt caramel bên trên. Phần kem có thể bị ảnh hưởng khi vận chuyển.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/classicphinfreeze.png?alt=media&token=ea780f47-5e97-49f5-b711-adcdc1620731",
    attribute: "Freeze",
  },
  {
    id: "00DR34",
    name: "Freeze Sô Cô La",
    price: "59000",
    describe:
      "Thêm lạ khẩu vị cùng vị đăng đắng của Sô-cô-la trong Freeze Sô-cô-la. Phần trang trí có thể bị ảnh hưởng khi vẫn chuyển.",
    VAT: "Giá đã bao gồm 10% VAT.",
    BestSelling: false,
    img: "https://firebasestorage.googleapis.com/v0/b/upload-getlink.appspot.com/o/freezesocola.png?alt=media&token=d278d3a8-6d21-4c0e-874c-2bc49e301e89",
    attribute: "Freeze",
  },
  // {id:'',name:'',price:'',describe:'',VAT:'Giá đã bao gồm 10% VAT.',BestSelling:false,img:'',attribute:'cake'},
];

export default MainData;
