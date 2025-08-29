
# JavaScript Questions Explained

## 1. getElementById, getElementsByClassName, querySelector / querySelectorAll এর পার্থক্য

- **getElementById("id")** → একটি নির্দিষ্ট ID-র এলিমেন্টকে খুঁজে বের করে। সবসময় **একটা এলিমেন্ট** দেয়।  
- **getElementsByClassName("class")** → সেই class-এর সব এলিমেন্ট ধরে রাখে এবং **লাইভ HTMLCollection** হিসেবে দেয়। মানে একাধিক এলিমেন্ট।  
- **querySelector("selector")** → CSS সিলেক্টরের মতো কাজ করে এবং **প্রথম ম্যাচ করা এলিমেন্ট** রিটার্ন করে।  
- **querySelectorAll("selector")** → CSS সিলেক্টরের মতো কাজ করে এবং **সব ম্যাচ করা এলিমেন্ট** NodeList হিসেবে দেয়।  

---

## 2. নতুন এলিমেন্ট তৈরি এবং DOM-এ ঢোকানো


* **createElement()** → নতুন এলিমেন্ট তৈরি করে।
* **appendChild()** → নতুন এলিমেন্টকে DOM-এ যোগ করে।
* **insertBefore()** → নির্দিষ্ট এলিমেন্টের আগে নতুন এলিমেন্ট ঢোকাতে পারে।

---

## 3. Event Bubbling

* ইভেন্ট সাধারণত **ছোট এলিমেন্ট থেকে বড় এলিমেন্টের দিকে ছড়ায়**।
* উদাহরণ: `<button>` ক্লিক করলে প্রথমে button-এর ইভেন্ট চলে, তারপর parent `<div>`-এর ইভেন্টে যায়।
* এটি ডিফল্ট আচরণ, DOM-এর hierarchy অনুসারে ইভেন্ট ট্রিগার হয়।

---

## 4. Event Delegation

* **Event Delegation** হলো parent এলিমেন্টে listener বসিয়ে child এলিমেন্টগুলোর ইভেন্ট handle করা।
* উদাহরণ: যদি অনেকগুলো button থাকে, প্রতিটিতে আলাদা listener না দিয়ে parent div-এ listener বসানো।
* **উপকারিতা:**

  * কম মেমরি ব্যবহার হয়
  * ডাইনামিকলি নতুন এলিমেন্ট handle করা যায়

---

## 5. preventDefault() vs stopPropagation()

* **preventDefault()** → ব্রাউজারের default behavior বন্ধ করে।

  * উদাহরণ: `<a>` link ক্লিক করলে page reload বন্ধ করা।
* **stopPropagation()** → ইভেন্ট bubbling বা capturing থামায়।

  * উদাহরণ: parent element-এ ইভেন্ট পৌঁছানো বন্ধ করা।

````


