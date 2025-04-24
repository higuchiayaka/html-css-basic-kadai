const today = new Date();  // 現在の日付と時刻を取得

const year = today.getFullYear();   // 年を取り出す
const month = today.getMonth() + 1; // 月を取り出す（0〜11だから+1する）
const date = today.getDate();       // 日を取り出す

console.log(`${year}年${month}月${date}日`); // 文字列として出力