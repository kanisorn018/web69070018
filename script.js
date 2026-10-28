const foods = [
  { name: "ข้าวมันไก่",   desc: "น้ำซุปใสๆ หอมกลิ่นขิง ไก่นุ่มเนื้อแน่น", price: "50-65 บาท", image: "mungai.jpg" },
  { name: "ผัดกะเพราหมูสับ", desc: "เผ็ดหอมใบกะเพรา ราดไข่ดาวกรอบๆ",       price: "55-70 บาท", image: "moosub.jpg" },
  { name: "ต้มยำกุ้ง",     desc: "รสจัดจ้าน เปรี้ยวเผ็ด กุ้งตัวโต",         price: "120-180 บาท", image: "yumkung.jpg" },
  { name: "ส้มตำไทย",     desc: "กรอบสดใหม่ เปรี้ยวหวานเผ็ดกำลังดี",       price: "40-60 บาท", image: "somtum.jpg" },
  { name: "ข้าวขาหมู",     desc: "ขาหมูพะโล้ตุ๋นนุ่ม ราดน้ำพะโล้หอมๆ",      price: "60-80 บาท", image: "khamoo.jpg" }
];

const photoEl = document.getElementById("photo");
const nameEl  = document.getElementById("name");
const descEl  = document.getElementById("desc");
const priceEl = document.getElementById("price");
let lastIndex = -1;

function showFood(food) {
  nameEl.textContent  = food.name;
  descEl.textContent  = food.desc;
  priceEl.textContent = "ราคา " + food.price;

  photoEl.textContent = "";
  const img = document.createElement("img");
  img.alt = food.name;
  img.src = food.image;
  photoEl.appendChild(img);
}

function randomFood() {
  let i;
  do { i = Math.floor(Math.random() * foods.length); } while (i === lastIndex);
  lastIndex = i;
  showFood(foods[i]);
}

document.getElementById("randomBtn").addEventListener("click", randomFood);
randomFood();
