function isPalindrome(text) {
    // Mengubah teks menjadi huruf kecil dan menghapus spasi
    // text = text.toLowerCase().replace(/\s/g, '');
  
    // Mengecek apakah teks merupakan palindrom
    for (let i = 0; i < text.length / 2; i++) {
      if (text[i] !== text[text.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  // Contoh penggunaan
  const text = "bubur";
  if (isPalindrome(text)) {
    console.log("Palindrom");
  } else {
    console.log("Bukan Palindrom");
  }

  

  function reverseWords(sentence) {
    // Memisahkan kalimat menjadi array kata-kata
    const words = sentence.split(' ');
  
    // Membalik urutan kata-kata dalam array
    const reversedWords = words.reverse();
  
    // Menggabungkan kembali kata-kata menjadi kalimat baru
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Contoh penggunaan
  const sentence = "Saya belajar Javascript";
  const reversedSentence = reverseWords(sentence);
  console.log(reversedSentence);
  