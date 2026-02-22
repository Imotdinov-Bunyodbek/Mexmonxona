// =============================================
// ACCOR O'ZBEKISTON — MA'LUMOTLAR BAZASI
// Accor S.A. | accor.com | Euronext: AC
// =============================================

const DB = {
  // --- Default Ma'lumotlar ---
  defaultHotels: [
    {
      id: 1,
      name: "Sofitel Tashkent Palace",
      brand: "Sofitel",
      city: "Toshkent",
      stars: 5,
      rating: 4.9,
      reviews: 1284,
      description: "Sofitel — Accor guruhining eng nufuzli luxury brendida, Toshkent markazida joylashgan hashamatli 5 yulduzli mehmonxona. So Spa va zamonaviy fransuz uslubidagi dizayn.",
      address: "1 Islom Karimov ko'chasi, Toshkent",
      phone: "+998 71 900-5555",
      email: "H8766@sofitel.com",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600"
      ],
      amenities: ["Wi-Fi", "So Spa", "Hovuz", "Le Bar", "Restorant", "Fitnes", "Parking", "Konferents-zal"],
      rooms: [
        { id: 101, type: "Luxury Room", price: 350000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 102, type: "Prestige Suite", price: 650000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 103, type: "Grand Suite", price: 950000, capacity: 4, available: false, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400" },
        { id: 104, type: "Le Royal Suite", price: 1800000, capacity: 4, available: true, image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400" }
      ]
    },
    {
      id: 2,
      name: "Pullman Tashkent",
      brand: "Pullman",
      city: "Toshkent",
      stars: 5,
      rating: 4.8,
      reviews: 967,
      description: "Pullman — biznes va sayohat uchun yaratilgan premium hotel. Infiinity hovuz, zamonaviy konferents-markaz va ajoyib Toshkent manzaralari.",
      address: "1A Amir Temur shoh ko'chasi, Toshkent",
      phone: "+998 71 207-1234",
      email: "h7722-re@accor.com",
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600"
      ],
      amenities: ["Wi-Fi", "Infinity Hovuz", "Spa", "Restorant", "Fitnes", "Parking", "Biznes-markaz", "Bar"],
      rooms: [
        { id: 201, type: "Superior Room", price: 380000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 202, type: "Deluxe Room", price: 580000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 203, type: "Executive Suite", price: 1100000, capacity: 3, available: true, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400" }
      ]
    },
    {
      id: 3,
      name: "Novotel Tashkent City",
      brand: "Novotel",
      city: "Toshkent",
      stars: 4,
      rating: 4.7,
      reviews: 831,
      description: "Novotel — oila va biznes sayohatchilari uchun ideal. Qulay joylashuv, zamonaviy xonalar va Accor standartidagi mukammal xizmat.",
      address: "47 Movarounnahr ko'chasi, Toshkent",
      phone: "+998 71 120-4900",
      email: "H5532@accor.com",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600"
      ],
      amenities: ["Wi-Fi", "Restorant", "Fitnes", "Parking", "Bar", "Konferents-zal", "Bolalar hududi"],
      rooms: [
        { id: 301, type: "Standard Room", price: 280000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 302, type: "Superior Room", price: 420000, capacity: 2, available: false, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 303, type: "Suite", price: 680000, capacity: 3, available: true, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400" }
      ]
    },
    {
      id: 4,
      name: "Mövenpick Hotel Samarkand",
      brand: "Mövenpick",
      city: "Samarqand",
      stars: 5,
      rating: 4.8,
      reviews: 624,
      description: "Mövenpick — Registon maydoniga yaqin joylashgan hashamatli 5 yulduzli mehmonxona. Autentik me'morlik va Accor luxury standartlari birligida.",
      address: "5 Registon ko'chasi, Samarqand",
      phone: "+998 66 233-1122",
      email: "hotel.samarkand@movenpick.com",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600"
      ],
      amenities: ["Wi-Fi", "Hovuz", "Spa", "Restorant", "Parking", "Bog'", "Transfer", "Ekskursiya"],
      rooms: [
        { id: 401, type: "Deluxe Room", price: 320000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 402, type: "Heritage Suite", price: 520000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 403, type: "Royal Suite", price: 850000, capacity: 4, available: true, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400" }
      ]
    },
    {
      id: 5,
      name: "MGallery Bukhara",
      brand: "MGallery",
      city: "Buxoro",
      stars: 4,
      rating: 4.7,
      reviews: 512,
      description: "MGallery — unikal va individual mehmonxonalar kolleksiyasi. Buxoroning antik atmosferasiga singib ketgan bu boutique hotel Accor premium segmentida.",
      address: "12 Ark Maydoni, Buxoro",
      phone: "+998 65 224-5566",
      email: "stay@mgallery-bukhara.com",
      image: "https://images.unsplash.com/photo-1618245318763-453825cd2d81?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600"
      ],
      amenities: ["Wi-Fi", "Restorant", "Hovli", "Transfer", "Ekskursiya", "Artisan Spa"],
      rooms: [
        { id: 501, type: "Signature Room", price: 220000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 502, type: "Deluxe Suite", price: 380000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" }
      ]
    },
    {
      id: 6,
      name: "Grand Mercure Tashkent",
      brand: "Grand Mercure",
      city: "Toshkent",
      stars: 5,
      rating: 4.7,
      reviews: 743,
      description: "Grand Mercure — Accorning premium upper-scale brendida ajoyib mehmonxona. Iş va turizmga oid barcha xizmatlar, premium restaurant va spa.",
      address: "88 Amir Temur shoh ko'chasi, Toshkent",
      phone: "+998 71 187-0000",
      email: "tashkent@grandmercure.com",
      image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600"
      ],
      amenities: ["Wi-Fi", "Hovuz", "Spa", "Restorant", "Fitnes", "Parking", "Bar", "Club Lounge"],
      rooms: [
        { id: 601, type: "Grand Room", price: 400000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 602, type: "Deluxe Room", price: 600000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 603, type: "Grand Suite", price: 950000, capacity: 3, available: false, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400" }
      ]
    },
    {
      id: 7,
      name: "Mercure Tashkent",
      brand: "Mercure",
      city: "Toshkent",
      stars: 4,
      rating: 4.5,
      reviews: 618,
      description: "Mercure — har bir shahardagi mahalliy xususiyatlarni aks ettiruvchi Accor brendi. Zamonaviy texnologiya va qulay muhit.",
      address: "35 Buyuk Turon ko'chasi, Toshkent",
      phone: "+998 71 235-5500",
      email: "H7711@accor.com",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600"
      ],
      amenities: ["Wi-Fi", "Restorant", "Fitnes", "Parking", "Konferents-zal"],
      rooms: [
        { id: 701, type: "Classic Room", price: 220000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 702, type: "Superior Room", price: 340000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" }
      ]
    },
    {
      id: 8,
      name: "ibis Tashkent",
      brand: "ibis",
      city: "Navoiy",
      stars: 3,
      rating: 4.2,
      reviews: 315,
      description: "ibis — Accorning iqtisodiy mehmonxona brendi. Qulay, arzon va ishonchli. Sayohatchilar uchun ideal tanlov.",
      address: "7 Mustaqillik ko'chasi, Navoiy",
      phone: "+998 79 223-1100",
      email: "H7788@accor.com",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600"
      ],
      amenities: ["Wi-Fi", "Restorant", "Parking"],
      rooms: [
        { id: 801, type: "Standard Room", price: 130000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 802, type: "Twin Room", price: 160000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" }
      ]
    }
  ],

  defaultTours: [
    {
      id: 1,
      name: "Samarqand — Buxoro Accor Paketi",
      duration: "3 kun / 2 kecha",
      price: 950000,
      includes: ["Mövenpick / MGallery", "Transport", "Gid", "Nonushta"],
      image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600",
      description: "Samarqand va Buxoro bo'ylab Accor luxury mehmonxonalarida sayohat. Registon, Bibi-Xonim va Ark qal'asini ziyorat qiling.",
      cities: ["Samarqand", "Buxoro"]
    },
    {
      id: 2,
      name: "Toshkent Sofitel & Pullman Tur",
      duration: "2 kun / 1 kecha",
      price: 750000,
      includes: ["5★ Sofitel yoki Pullman", "Airport Transfer", "Shahar turu", "Nonushta"],
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600",
      description: "Toshkentning zamonaviy va tarixiy joylarini Accor luxury comfort bilan kashf eting. Chorsu bozori, metro va milliy muzeylar.",
      cities: ["Toshkent"]
    },
    {
      id: 3,
      name: "Accor O'zbekiston Grand Tour",
      duration: "7 kun / 6 kecha",
      price: 2800000,
      includes: ["Barcha Accor mehmonxonalar", "Aviabilet", "Transport", "Gid", "3 mahal ovqat"],
      image: "https://images.unsplash.com/photo-1524824267900-2b50a8a46e9c?w=600",
      description: "O'zbekistonning barcha asosiy shaharlarida Accor mehmonxonalarida to'ling, to'liq All-in Accor turizmini his eting.",
      cities: ["Toshkent", "Samarqand", "Buxoro", "Xiva"]
    },
    {
      id: 4,
      name: "Silk Road Accor Safari",
      duration: "4 kun / 3 kecha",
      price: 1250000,
      includes: ["MGallery / Mövenpick", "Transport", "Gid", "Nonushta", "Kechki ovqat"],
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600",
      description: "Ipak Yo'lining qadimiy Xiva va Buxorosida safari. Milliy hunarmandchilik va Accor premium xizmat bilan tanishing.",
      cities: ["Xiva", "Urganch"]
    }
  ],

  defaultBlogPosts: [
    {
      id: 1,
      title: "Accor O'zbekistonga keng qadam qo'ymoqda",
      category: "Yangilik",
      date: "2026-02-20",
      author: "Accor Uzbekistan",
      image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600",
      excerpt: "Accor S.A. O'zbekistonning turizm salohiyatini kengaytirishda muhim o'rin egallaydi. Sofitel, Pullman va Novotel brandlari...",
      content: "Accor S.A. — 110 dan ortiq mamlakatda faoliyat yurituvchi jahonning eng yirik mehmonxona operatori. O'zbekistonda Sofitel Tashkent Palace, Pullman Tashkent va Mövenpick Hotel Samarkand bilan xizmat ko'rsatib kelmoqda..."
    },
    {
      id: 2,
      title: "ALL — Accor Live Limitless nima?",
      category: "Xizmat",
      date: "2026-02-18",
      author: "Nilufar Toshmatova",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
      excerpt: "Accorning \"ALL\" loyallik dasturi orqali har bir brondan ball to'plang, premium xizmatlarga ega bo'ling...",
      content: "ALL — Accor Live Limitless — Accorning global loyallik dasturi. Har bir brondan nuqtalar to'playdi, ularni bepul tunashlar uchun ishlating. Silver, Gold, Platinum va Diamond darajalari mavjud..."
    },
    {
      id: 3,
      title: "Sofitel: Fransuz Luxury O'zbekistonda",
      category: "Brendlar",
      date: "2026-02-15",
      author: "Bobur Yusupov",
      image: "https://images.unsplash.com/photo-1524824267900-2b50a8a46e9c?w=600",
      excerpt: "Sofitel Tashkent Palace — Markaziy Osiyodagi eng nufuzli Accor biznis va luxury mehmonxonasi. So Spa, Le Bar...",
      content: "Sofitel — Accorning eng prestigious luxury brendida. Har bir Sofitel mehmonxonasida fransuz estetikasi va mahalliy madaniyat uyg'unlashadi. Sofitel Tashkent Palace So Spa bilan taniqli..."
    },
    {
      id: 4,
      title: "Mövenpick: Swiss Luxury Samarqandda",
      category: "Brendlar",
      date: "2026-02-10",
      author: "Zulfiya Razzaqova",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
      excerpt: "Mövenpick Hotel Samarkand — Swiss hospitality va O'zbek me'morligining uyg'unligida noyob Accor tajribasi...",
      content: "Mövenpick — Accor premium brendida shveytsariya miqyosida taniqli. Samarqandda Registon manzarasini o'zida aks ettirgan bu mehmonxona O'zbekiston turizmining to'g'iri..."
    }
  ],

  // --- LocalStorage Operatsiyalari ---
  init() {
    if (!localStorage.getItem('hotels')) {
      localStorage.setItem('hotels', JSON.stringify(this.defaultHotels));
    }
    if (!localStorage.getItem('tours')) {
      localStorage.setItem('tours', JSON.stringify(this.defaultTours));
    }
    if (!localStorage.getItem('blogPosts')) {
      localStorage.setItem('blogPosts', JSON.stringify(this.defaultBlogPosts));
    }
    if (!localStorage.getItem('bookings')) {
      localStorage.setItem('bookings', JSON.stringify([]));
    }
    if (!localStorage.getItem('users')) {
      const adminUser = [{
        id: 1,
        name: "Accor Admin",
        email: "admin@accor.uz",
        password: "accor2026",
        role: "admin",
        phone: "+998 71 200-00-00",
        createdAt: new Date().toISOString()
      }];
      localStorage.setItem('users', JSON.stringify(adminUser));
    }
    if (!localStorage.getItem('payments')) {
      localStorage.setItem('payments', JSON.stringify([]));
    }
  },

  // LocalStorage ni qayta boshlash (brend o'zgartirish uchun)
  reset() {
    localStorage.removeItem('hotels');
    localStorage.removeItem('tours');
    localStorage.removeItem('blogPosts');
    localStorage.removeItem('users');
    this.init();
  },

  getHotels() { return JSON.parse(localStorage.getItem('hotels')) || []; },
  getTours() { return JSON.parse(localStorage.getItem('tours')) || []; },
  getBlogPosts() { return JSON.parse(localStorage.getItem('blogPosts')) || []; },
  getBookings() { return JSON.parse(localStorage.getItem('bookings')) || []; },
  getUsers() { return JSON.parse(localStorage.getItem('users')) || []; },
  getPayments() { return JSON.parse(localStorage.getItem('payments')) || []; },

  saveHotels(hotels) { localStorage.setItem('hotels', JSON.stringify(hotels)); },
  saveBookings(bookings) { localStorage.setItem('bookings', JSON.stringify(bookings)); },
  saveUsers(users) { localStorage.setItem('users', JSON.stringify(users)); },
  savePayments(payments) { localStorage.setItem('payments', JSON.stringify(payments)); },

  addBooking(booking) {
    const bookings = this.getBookings();
    booking.id = Date.now();
    booking.createdAt = new Date().toISOString();
    booking.status = "Tasdiqlandi";
    bookings.push(booking);
    this.saveBookings(bookings);
    const payments = this.getPayments();
    payments.push({
      id: Date.now() + 1,
      bookingId: booking.id,
      amount: booking.totalPrice,
      method: booking.paymentMethod || "Naqd",
      status: "To'langan",
      date: new Date().toISOString(),
      guestName: booking.guestName
    });
    this.savePayments(payments);
    return booking;
  },

  getCurrentUser() {
    const userId = localStorage.getItem('currentUser');
    if (!userId) return null;
    return this.getUsers().find(u => u.id == userId) || null;
  },

  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', user.id);
      return user;
    }
    return null;
  },

  logout() { localStorage.removeItem('currentUser'); },

  register(userData) {
    const users = this.getUsers();
    if (users.find(u => u.email === userData.email)) return null;
    userData.id = Date.now();
    userData.role = "user";
    userData.createdAt = new Date().toISOString();
    users.push(userData);
    this.saveUsers(users);
    localStorage.setItem('currentUser', userData.id);
    return userData;
  },

  updateHotelRoom(hotelId, roomId, updates) {
    const hotels = this.getHotels();
    const hotel = hotels.find(h => h.id === hotelId);
    if (hotel) {
      const room = hotel.rooms.find(r => r.id === roomId);
      if (room) Object.assign(room, updates);
      this.saveHotels(hotels);
    }
  },

  addHotel(hotel) {
    const hotels = this.getHotels();
    hotel.id = Date.now();
    hotel.rooms = hotel.rooms || [];
    hotels.push(hotel);
    this.saveHotels(hotels);
    return hotel;
  },

  formatPrice(price) {
    return new Intl.NumberFormat('uz-UZ').format(price) + " so'm";
  },

  getDailyRevenue() {
    const payments = this.getPayments();
    const today = new Date().toDateString();
    return payments
      .filter(p => new Date(p.date).toDateString() === today)
      .reduce((sum, p) => sum + p.amount, 0);
  },

  getMonthlyRevenue() {
    const payments = this.getPayments();
    const now = new Date();
    return payments
      .filter(p => {
        const d = new Date(p.date);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      })
      .reduce((sum, p) => sum + p.amount, 0);
  }
};

// Ilovani ishga tushirishda init qilish
// Agar brend o'zgartirilgan bo'lsa, localStorage ni tozalaymiz
if (!localStorage.getItem('accorBrand')) {
  localStorage.clear();
  localStorage.setItem('accorBrand', '1');
}
DB.init();
