export function moveLastToFirst(arr) {
  if (arr.length === 0) return arr; // Kiểm tra mảng rỗng
  const lastValue = arr.pop(); // Lấy và xóa phần tử cuối
  arr.unshift(lastValue); // Thêm phần tử đó vào đầu mảng
  return arr;
}

export function moveFirstToLast(arr) {
  if (arr.length === 0) return arr; // Kiểm tra mảng rỗng
  const firstValue = arr.shift(); // Lấy và xóa phần tử đầu
  arr.push(firstValue); // Thêm phần tử đó vào cuối mảng
  return arr;
}
