function preloadKiranaProducts() {
  const items = [
    "आटा", "चावल", "बाजरा", "ज्वार", "मक्का", "सूजी", "मैदा", "बेसन", "दलिया", "रागी",
    "अरहर दाल", "मूंग दाल", "मसूर दाल", "उड़द दाल", "चना दाल", "राजमा", "छोले", "लोबिया", "हरी मटर", "तुअर दाल",
    "हल्दी", "धनिया", "जीरा", "लाल मिर्च", "काली मिर्च", "हींग", "गरम मसाला", "तेज पत्ता", "मेथी", "सरसों",
    "लौंग", "इलायची", "दालचीनी", "चक्र फूल", "जायफल", "जावित्री", "कसूरी मेथी", "सौंठ",
    "सरसों का तेल", "सूरजमुखी का तेल", "मूंगफली का तेल", "तिल का तेल", "घी", "जैतून का तेल", "नारियल का तेल", "वनस्पति",
    "दूध", "दही", "पनीर", "मक्खन", "चीज़", "मलाई", "छाछ", "खोया",
    "बिस्कुट", "नमकीन", "चिप्स", "नूडल्स", "पॉपकॉर्न", "चॉकलेट", "भुजिया", "खट्टा मीठा", "समोसा",
    "चाय", "कॉफी", "चीनी", "ग्रीन टी", "सॉफ्ट ड्रिंक्स", "शरबत", "जूस", "ऊर्जा पेय", "मिल्क पाउडर", "छाछ पेय",
    "सेब", "केले", "संतरे", "आलू", "प्याज", "टमाटर", "गाजर", "खीरे", "पत्तागोभी", "फूलगोभी"
  ];

  items.forEach((name, i) => {
    products.push({
      name,
      mrp: (50 + (i % 10) * 10).toString(),
      discounted: (40 + (i % 10) * 5).toString(),
      image: "https://via.placeholder.com/150?text=" + encodeURIComponent(name),
      shopkeeper: currentUser.username,
      location: currentUser.shopLocation
    });
  });

  localStorage.setItem("products", JSON.stringify(products));
  showShopkeeperProducts();
  alert("Preloaded Kirana products added!");
}

// 🔓 Un-comment this line once to run, then comment again to avoid duplicate insertions:
// preloadKiranaProducts();
