/* ================================================================
   TASTY BAKERY & CAFE — MENU DATA
   ----------------------------------------------------------------
   This is the ONLY file you need to edit to change the menu.

   • Change a price      → edit the number after  price:
   • Rename an item      → edit am: (Amharic) or en: (English)
   • Add an item         → copy one { ... } line, paste it, edit it
   • Remove an item      → delete its { ... } line
   • Description (small grey text) → desc: "..."   (optional)
   • Add a new section   → copy a whole { id: ..., items: [...] }
                           block. icon can be one of:
                           breakfast, salad, soup, traditional,
                           fish, pizza, wrap, burger, drinks

   Keep the commas between items. After saving, push to GitHub
   and the live site updates automatically.
   ================================================================ */

window.TASTY_MENU = {
  currency: "ETB",

  categories: [
    {
      id: "breakfast",
      title: "Breakfast",
      icon: "breakfast",
      items: [
        { am: "ቴስቲ እስፔሻል ቁርስ", en: "Tasty Special Break Fast", price: 500 },
        { am: "ኖርማል ፉል", en: "Normal Full", price: 260 },
        { am: "እስፔሻል ፉል", en: "Special Full", price: 300 },
        { am: "ጨጨብሳ", en: "Chechebsa", price: 260 },
        { am: "እስፔሻል ጨጨብሳ", en: "Special Chechebsa", price: 280 },
        { am: "እንቁላል ፍርፍር", en: "Scrambled Egg(Egg Sils)", price: 260 },
        { am: "እንቁላል በስጋ", en: "Egg With Meat", price: 300 },
        { am: "ኦምሌት", en: "Omlet", price: 260 },
        { am: "እስፔሻል ኦምልት", en: "Special Omlet", price: 380 },
        { am: "ቲማቲም ስልስ", en: "Tomato Silce", price: 240 },
        { am: "ኖርማል ፈጢራ", en: "Normal Fetira", price: 260 },
        { am: "እስፔሻል ፈጢራ", en: "Special Fetira", price: 280 },
        { am: "ሃፍ ቂንጬ በጥብስ ፍርፍር", en: "Half Qinche With Tibs Firfir", price: 370 },
        { am: "ሃፍ ፍርፍር በእንቁላል በፍርፍር", en: "Half Scrambled Egg With Firfir", price: 350 },
        { am: "ሃፍ ቂንጬ በእንቁላል", en: "Half Qinche With Egg", price: 290 },
        { am: "ሃፍ ቂንጬ በፍርፍር", en: "Half Qinche With Firfir", price: 290 },
        { am: "ሃፍ ቂንጬ በጨጨብሳ", en: "Half Qinche With Chechebsa", price: 290 }
      ]
    },

    {
      id: "salad",
      title: "Salad",
      icon: "salad",
      items: [
        { am: "ቱና ሳላድ", en: "Tuna Salad", price: 340 },
        { am: "ዶሮ ሳላድ", en: "Chicken Salad", price: 380 },
        { am: "እስፔሻል ሳላድ", en: "Special Salad", price: 480 },
        { am: "ሚክስድ ሳላድ", en: "Mixed Salad", price: 280 }
      ]
    },

    {
      id: "soup",
      title: "Soup",
      icon: "soup",
      items: [
        { am: "አትክልት ሾርባ", en: "Vegetable Soup", price: 200 },
        { am: "የአሳ ሾርባ", en: "Fish Soup", price: 260 },
        { am: "የዶሮ ሾርባ", en: "Chicken Soup", price: 250 }
      ]
    },

    {
      id: "traditional",
      title: "Traditional Food",
      icon: "traditional",
      items: [
        { am: "የፆም ፍርፍር", en: "Fasting Firfir", price: 260 },
        { am: "ፍርፍር በቱና", en: "Firfir With Tuna", price: 450 },
        { am: "እስፔሻል የፆም ፍርፍር", en: "Special Fasting Firfir", price: 480 },
        { am: "ጥብስ ፍርፍር", en: "Tibs Firfir", price: 480 },
        { am: "ጭቅና ጥብስ", en: "Filet Tibs(Chikna)", price: 540 },
        { am: "ሽሮ", en: "Shiro", price: 250 },
        { am: "ቦዘና ሽሮ", en: "Bozena Shiro", price: 350 },
        { am: "ቲማቲም ለብለብ", en: "Timatim Lebleb", price: 310 },
        { am: "ሽሮ በጎመን", en: "Shiro With Gomen", price: 380 },
        { am: "በየአይነት", en: "Beyaynet", price: 320 },
        { am: "የፆም ኮንቦ", en: "Fasting Combo", price: 500 },
        { am: "የፍስክ ኮንቦ", en: "Non Fasting Combo", price: 620 },
        { am: "ስፔሻል ጥብስ ፍርፍር", en: "Special Tibs Firfir", price: 680 },
        { am: "ጭቅና ጥብስ ተፈርሾ", en: "Filet (Chikina)Tibs Tefersho", price: 580 },
        { am: "ቋንጣ ፍርፍር", en: "Quanta Firfir", price: 520 },
        { am: "ሽሮ በቅቤ", en: "Shiro With Butter", price: 290 },
        { am: "ዱለት", en: "Dulet", price: 430 },
        { am: "ሽሮ እና ሰላጣ", en: "Shiro With Salad", price: 320 },
        {
          am: "ሃፍ ሀፍ", en: "Half Half", price: 330,
          desc: "(half shiro with suf fitfit)(half shiro with firfir )(half shiro with tomato)(half shiro with rice)(half shiro with pasta)"
        }
      ]
    },

    {
      id: "fish",
      title: "Fish",
      icon: "fish",
      items: [
        { am: "አሳ ለብለብ", en: "Fish Lebleb", price: 460 },
        { am: "አሳ ኮተሌት", en: "Fish Cotelit", price: 520, desc: "salad, rice or chips and served with bread" },
        { am: "አሳ ጉላሽ", en: "Fish Gulash", price: 520, desc: "salad, rice or chips and served with bread" },
        { am: "አሳ ኮምቦ", en: "Fish Combo", price: 600 },
        { am: "አሳ ዱለት", en: "Fish Dulet", price: 460 }
      ]
    },

    {
      id: "pizza",
      title: "Pizza",
      icon: "pizza",
      items: [
        { am: "ቴስቲ እስፔሻል ፒዛ", en: "Tasty Special Pizza", price: 780, desc: "Special Sauce, Mozzarella Cheese, Beef, Chicken, onion, Tuna, Olive, Mushroom, Ham and Egg" },
        { am: "ላርጅ እስፔሻል ፒዛ", en: "Large Special Pizza", price: 840 },
        { am: "ማርጋሪታ ፒዛ", en: "Margarita Pizza", price: 500, desc: "Special Sauce, Mozzarella Cheese, onion" },
        { am: "ላርጅ ማርጋርታ ፒዛ", en: "Large Margarita Pizza", price: 570 },
        { am: "ቢፍ ፒዛ", en: "Beef Pizza", price: 520, desc: "Special Sauce, Beef, Mozzarella Cheese, Onion and Peper" },
        { am: "ላርጅ ቢፍ ፒዛ", en: "Large Beef Pizza", price: 590 },
        { am: "ችክን ፒዛ", en: "Chicken Pizza", price: 580, desc: "Special Sauce, Mozzarella, Cheese, Chicken, Onion" },
        { am: "ላርጅ ችክን ፒዛ", en: "Large Chicken Pizza", price: 650 },
        { am: "ቱና ፒዛ", en: "Tuna pizza", price: 670, desc: "Special Sauce, Tuna, Mozzarella Cheese, Onion, Peper" },
        { am: "ላርጅ ቱና ፒዛ", en: "Large Tuna Pizza", price: 730 },
        { am: "የፆም ቱና ፒዛ", en: "Fasting Tuna Pizza", price: 560, desc: "Special Souce, Tuna, Peper, Onion" },
        { am: "አትክልት ፒዛ", en: "Vegetable Pizza", price: 390, desc: "Special Sauce, Cooked Vegitable, Onion and Peper" },
        { am: "አትክልት በ ቱና ፒዛ", en: "Vegetable With Tuna Pizza", price: 580, desc: "Special Sauce With Cooked Vegetable, Tuna, Onion and Peper" }
      ]
    },

    {
      id: "wrap",
      title: "Wrap",
      icon: "wrap",
      items: [
        { am: "ችክን ራፕ", en: "Chicken Wrap", price: 500 },
        { am: "አትክልት ራፕ", en: "Vegetable Wrap", price: 380 },
        { am: "ቢፍ ራፕ", en: "Beef Wrap", price: 420 },
        { am: "ቱና ራፕ", en: "Tuna Wrap", price: 560 }
      ]
    },

    {
      id: "burger",
      title: "Burger",
      icon: "burger",
      items: [
        { am: "ቴስቲ እስፔሻል በርገር", en: "Tasty seScial Burger", price: 490, desc: "Two Beef Slice, Two Slice Cheese, Egg, Mayonnaise, Tomato, Onion, Salad, Served with French Fries" },
        { am: "ስጋ በርገር", en: "Beef Burger", price: 320, desc: "Beef Slice, Mayonnaise, Tomato, Onion, Salad, Served with French Fries" },
        { am: "ደብል ስጋ በርገር", en: "Double Beef Burger", price: 370, desc: "Two Beef Slice, Mayonnaise, Tomato, Onion, Salad, Served with French Fries" },
        { am: "ቺዝ በርገር", en: "Cheese Burger", price: 350, desc: "Beef Slice, Slice Cheese, Mayonnaise, Tomato, Onion, Salad, Served With French Fries" },
        { am: "ደብል ቺዝ በርገር", en: "Double Cheese Burger", price: 480, desc: "Two Chicken Slice, Two Slice Cheese, Mayonnaise, Tomato, Onion, Salad, Served With French Fries" },
        { am: "ሃም በርገር", en: "Ham Burger", price: 350, desc: "Beef Slice, Slice Ham, Mayonnaise, Tomato, Onion, Salad, Served With French Fries" },
        { am: "ደብል ሃም በርገር", en: "Double Ham Burger", price: 430, desc: "Two Beef Slice, Two Slice Ham, Mayonnaise, Tomato, Onion, Salad, Served With French Fries" },
        { am: "ጃቦ በርገር", en: "Jambo Burger", price: 550, desc: "Three Beef Slice, Two Slice Cheese, Slice Ham, Egg, Mayonnaise, Tomato, Onion, Salad, Served With French Fries" },
        { am: "እንቁላል በርገር", en: "Egg Burger", price: 350, desc: "Beef Slice, Egg, Mayonnaise, Tomato, Onion, Salad, Served With French Fries" },
        { am: "ቺክን በርገር", en: "Chicken Burger", price: 390, desc: "Chicken Slice, Mayonnaise, Tomato, Onion, Salad, Served With French Fries" },
        { am: "ደብል ቺክን በርገር", en: "Double Chicken Burger", price: 450, desc: "Chicken Two Slice Cheese, Mayonnaise, Tomato, Onion, Salad, Served With French Fries" },
        { am: "እስፔሻል ቺክን በርገር", en: "Special Chicken Burger", price: 520, desc: "Two Chicken Slice, Two Slice Cheese, Egg, Mayonnaise, Tomato, Onion, Salad, Served With French Fries" },
        { am: "እንቁላል በቺዝ በርገር", en: "Egg With Cheese Burger", price: 390, desc: "Beef Slice, Egg, Slice Cheese, Mayonnaise, Tomato, Onion, Salad, Served With French Fries" }
      ]
    },

    {
      id: "drinks",
      title: "Drinks",
      icon: "drinks",
      items: [
        { am: "ሞይቶ", en: "Mojito", price: 230 }
      ]
    }
  ]
};
