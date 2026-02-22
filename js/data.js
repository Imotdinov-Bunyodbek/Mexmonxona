// =============================================
// MEHMONXONA MA'LUMOTLARI BAZASI (LocalStorage)
// =============================================

const DB = {
  // --- Default Ma'lumotlar ---
  defaultHotels: [
    {
      id: 1,
      name: "Hilton Tashkent City",
      city: "Toshkent",
      stars: 5,
      rating: 4.9,
      reviews: 1284,
      description: "Toshkent markazida joylashgan hashamatli 5 yulduzli mehmonxona. Zamonaviy dizayn va yuqori darajali xizmat.",
      address: "1 Islom Karimov ko'chasi, Toshkent",
      phone: "+998 71 900-5555",
      email: "info@hilton-tashkent.uz",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600"
      ],
      amenities: ["Wi-Fi", "Hovuz", "Spa", "Restorant", "Fitnes", "Parking", "Bar", "Konferents-zal"],
      rooms: [
        { id: 101, type: "Standart", price: 350000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 102, type: "Delyuks", price: 550000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 103, type: "Lyuks", price: 800000, capacity: 4, available: false, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400" },
        { id: 104, type: "Prezident Suite", price: 1500000, capacity: 4, available: true, image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400" }
      ]
    },
    {
      id: 2,
      name: "Hyatt Regency Tashkent",
      city: "Toshkent",
      stars: 5,
      rating: 4.8,
      reviews: 967,
      description: "Hyatt brendining premium mehmonxonasi. Ajoyib manzara va professional xizmat bilan taniqli.",
      address: "1A Amir Temur shoh ko'chasi, Toshkent",
      phone: "+998 71 207-1234",
      email: "tashkent.regency@hyatt.com",
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600"
      ],
      amenities: ["Wi-Fi", "Hovuz", "Spa", "Restorant", "Fitnes", "Parking", "Tennis", "Biznes-markaz"],
      rooms: [
        { id: 201, type: "Standart", price: 380000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 202, type: "Delyuks", price: 580000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 203, type: "Grand Suite", price: 950000, capacity: 3, available: true, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400" }
      ]
    },
    {
      id: 3,
      name: "Radisson Blu Hotel Tashkent",
      city: "Toshkent",
      stars: 5,
      rating: 4.7,
      reviews: 831,
      description: "Radisson Blu - Toshkentdagi eng nufuzli mehmonxonalardan biri. Biznes va dam olish uchun ideal.",
      address: "47 Movarounnahr ko'chasi, Toshkent",
      phone: "+998 71 120-4900",
      email: "info@radissonblu-tashkent.com",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600"
      ],
      amenities: ["Wi-Fi", "Restorant", "Fitnes", "Parking", "Bar", "Konferents-zal", "Dorix"],
      rooms: [
        { id: 301, type: "Superior", price: 320000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 302, type: "Biznes", price: 500000, capacity: 2, available: false, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 303, type: "Suite", price: 750000, capacity: 3, available: true, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400" }
      ]
    },
    {
      id: 4,
      name: "Registan Plaza Hotel",
      city: "Samarqand",
      stars: 4,
      rating: 4.6,
      reviews: 524,
      description: "Registon maydoniga yaqin joylashgan tarixiy mehmonxona. O'zbek milliy me'morligini his eting.",
      address: "5 Registon ko'chasi, Samarqand",
      phone: "+998 66 233-1122",
      email: "info@registanplaza.uz",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600"
      ],
      amenities: ["Wi-Fi", "Restorant", "Parking", "Bog'", "Transfer"],
      rooms: [
        { id: 401, type: "Standart", price: 200000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 402, type: "Delyuks", price: 300000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 403, type: "Suite", price: 450000, capacity: 4, available: true, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400" }
      ]
    },
    {
      id: 5,
      name: "Bukhara Palace Hotel",
      city: "Buxoro",
      stars: 4,
      rating: 4.5,
      reviews: 412,
      description: "Buxoroning antik qo'rg'oniga yaqin joylashgan hashamatli mehmonxona. Sharq uslubidagi bezaklar.",
      address: "12 Ark Maydoni, Buxoro",
      phone: "+998 65 224-5566",
      email: "stay@bukharapalace.uz",
      image: "https://images.unsplash.com/photo-1618245318763-453825cd2d81?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600"
      ],
      amenities: ["Wi-Fi", "Restorant", "Hovli", "Transfer", "Ekskursiya"],
      rooms: [
        { id: 501, type: "Standart", price: 180000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 502, type: "Delyuks", price: 280000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" }
      ]
    },
    {
      id: 6,
      name: "InterContinental Tashkent",
      city: "Toshkent",
      stars: 5,
      rating: 4.7,
      reviews: 743,
      description: "Jahon standartlarida qurilgan premium mehmonxona. Iш va turizmga oid barcha xizmatlar mavjud.",
      address: "88 Amir Temur shoh ko'chasi, Toshkent",
      phone: "+998 71 187-0000",
      email: "tashkent@intercontinental.com",
      image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600"
      ],
      amenities: ["Wi-Fi", "Hovuz", "Spa", "Restorant", "Fitnes", "Parking", "Bar", "Klub"],
      rooms: [
        { id: 601, type: "Classic", price: 400000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 602, type: "Delyuks", price: 600000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 603, type: "Suite", price: 900000, capacity: 3, available: false, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400" }
      ]
    },
    {
      id: 7,
      name: "Lotte City Hotel Tashkent Palace",
      city: "Toshkent",
      stars: 4,
      rating: 4.5,
      reviews: 618,
      description: "Koreya brendining premium mehmonxonasi. Zamonaviy texnologiya va qulay muhit.",
      address: "35 Buyuk Turon ko'chasi, Toshkent",
      phone: "+998 71 235-5500",
      email: "info@lottetashkent.com",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600"
      ],
      amenities: ["Wi-Fi", "Restorant", "Fitnes", "Parking", "Konferents-zal"],
      rooms: [
        { id: 701, type: "Standart", price: 280000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 702, type: "Delyuks", price: 420000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" }
      ]
    },
    {
      id: 8,
      name: "Silk Road Hotel",
      city: "Navoiy",
      stars: 3,
      rating: 4.2,
      reviews: 215,
      description: "Ipak yo'li bo'yida joylashgan qulay va arzon mehmonxona. Sayohatchilar uchun ideal.",
      address: "7 Mustaqillik ko'chasi, Navoiy",
      phone: "+998 79 223-1100",
      email: "info@silkroadhotel.uz",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      gallery: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600"
      ],
      amenities: ["Wi-Fi", "Restorant", "Parking"],
      rooms: [
        { id: 801, type: "Standart", price: 120000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 802, type: "Delyuks", price: 180000, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" }
      ]
    }
  ],

  defaultTours: [
    {
      id: 1,
      name: "Samarqand - Buxoro Ekskursiyasi",
      duration: "3 kun / 2 kecha",
      price: 850000,
      includes: ["Mehmonxona", "Transport", "Gid", "Nonushta"],
      image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600",
      description: "O'zbekistonning eng tarixiy shaharlari bo'ylab sayohat. Registon, Bibi-Xonim va Ark ko'rkam yodgorliklarini ziyorat qiling.",
      cities: ["Samarqand", "Buxoro"]
    },
    {
      id: 2,
      name: "Toshkent Premium Tur",
      duration: "2 kun / 1 kecha",
      price: 650000,
      includes: ["5* Mehmonxona", "Airport Transfer", "Shahar turu", "Nonushta"],
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600",
      description: "Toshkentning zamonaviy va tarixiy joylarini kashf eting. Chorsu bozori, metro va milliy muzeylar.",
      cities: ["Toshkent"]
    },
    {
      id: 3,
      name: "O'zbekiston Grand Tur",
      duration: "7 kun / 6 kecha",
      price: 2200000,
      includes: ["Mehmonxona", "Aviabilet", "Transport", "Gid", "3 mahal ovqat"],
      image: "https://images.unsplash.com/photo-1524824267900-2b50a8a46e9c?w=600",
      description: "O'zbekistonning barcha asosiy shaharlarini aylanib chiqing. To'liq all-inclusive tur paketi.",
      cities: ["Toshkent", "Samarqand", "Buxoro", "Xiva"]
    },
    {
      id: 4,
      name: "Xiva - Afrosiyob Safari",
      duration: "4 kun / 3 kecha",
      price: 1100000,
      includes: ["Mehmonxona", "Transport", "Gid", "Nonushta", "Kechki ovqat"],
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600",
      description: "Ichon-qala va qadimiy Xiva shahriga safari. Milliy hunarmandchilik bilan tanishing.",
      cities: ["Xiva", "Urganch"]
    }
  ],

  defaultBlogPosts: [
    {
      id: 1,
      title: "O'zbekistonning eng go'zal 10 joyi",
      category: "Sayohat",
      date: "2026-02-20",
      author: "Aziz Karimov",
      image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600",
      excerpt: "O'zbekiston - Ipak yo'lining qalbida joylashgan sirli mamlakat. Bu yerda tarix va zamonaviylik uyg'un...",
      content: "O'zbekiston - Markaziy Osiyoning durdonasi. Bu mamlakatda ming yillik tarix va zamonaviy madaniyat bir-biriga qo'shilib ketgan..."
    },
    {
      id: 2,
      title: "Mehmonxona tanlashda e'tibor bering",
      category: "Maslahat",
      date: "2026-02-18",
      author: "Nilufar Toshmatova",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
      excerpt: "Safaringizni rejalashtirish uchun to'g'ri mehmonxona tanlash juda muhim. Bir necha muhim omillarni...",
      content: "To'g'ri mehmonxona tanlov sayohatingizni mukammal qiladi. Narx, joylashuv, xizmat sifati - barchasi muhim..."
    },
    {
      id: 3,
      title: "Samarqand - Sharqning durdonasi",
      category: "Shahar",
      date: "2026-02-15",
      author: "Bobur Yusupov",
      image: "https://images.unsplash.com/photo-1524824267900-2b50a8a46e9c?w=600",
      excerpt: "Samarqand - dunyodagi eng qadimiy shaharlardan biri. Registon majmuasi, Bibi-Xonim...",
      content: "Samarqand tarixi 2700 yildan ortiq. Sohibqiron Amir Temur poytaxti bo'lgan bu shahar..."
    },
    {
      id: 4,
      title: "Mehmonxonada tejamkorlik sirlari",
      category: "Maslahat",
      date: "2026-02-10",
      author: "Zulfiya Razzaqova",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
      excerpt: "Premium mehmonxonalarda arzon qolish mumkinmi? Ha, agar siz kerakli maslahatlarni bilsangiz...",
      content: "Off-season vaqtida bron qilish, loyalty programmalarga qo'shilish va advance booking - barchasi tejashga yordam beradi..."
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
        name: "Admin",
        email: "admin@mexmonxona.uz",
        password: "admin123",
        role: "admin",
        phone: "+998 90 123-4567",
        createdAt: new Date().toISOString()
      }];
      localStorage.setItem('users', JSON.stringify(adminUser));
    }
    if (!localStorage.getItem('payments')) {
      localStorage.setItem('payments', JSON.stringify([]));
    }
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
    // To'lov qo'shish
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
DB.init();
