
################################################ Project Setup Backend ##########################################################

### **เป้าหมาย**
สร้างโปรเจกต์ที่มีสองส่วนหลัก:
1. **Frontend**: แอปพลิเคชัน React สำหรับส่วนติดต่อผู้ใช้ (UI)
2. **Backend**: API ที่พัฒนาด้วย Node.js และ Express เพื่อจัดการข้อมูลและ逻辑

---

### **ขั้นตอนการพัฒนา**

#### **1. เตรียมโครงสร้างโปรเจกต์**
- สร้างโฟลเดอร์ว่างบนเดสก์ท็อป แล้วเปิดใน VS Code
- สร้างสองโฟลเดอร์ย่อย:
  - `frontend` สำหรับแอป React
  - `backend` สำหรับ API

---

#### **2. สร้าง Frontend ด้วย React**
- เข้าไปในโฟลเดอร์ `frontend` ด้วยคำสั่ง `cd frontend` ในเทอร์มินัล
- รันคำสั่ง `npm create vite@latest .` เพื่อสร้างโปรเจกต์ React
  - เลือก **React** และ **JavaScript** (หรือ TypeScript ถ้าต้องการ แต่เลือก JavaScript เพื่อให้เหมาะกับผู้เริ่มต้น)
- ติดตั้ง dependencies ด้วย `npm install`
- รันแอปด้วย `npm run dev` เพื่อดูโค้ดเริ่มต้นจาก Vite
- หยุดการรันด้วย `Ctrl+C` เพื่อไปโฟกัสที่ backend ก่อน

---

#### **3. เตรียม Backend ด้วย Node.js และ Express**
- เข้าไปในโฟลเดอร์ `backend` ด้วย `cd backend`
- สร้างโปรเจกต์ Node.js ด้วย `npm init -y` (ได้ไฟล์ `package.json`)
- ติดตั้ง dependencies ที่จำเป็นในบรรทัดเดียว:
  - `npm install express mongoose dotenv jsonwebtoken bcryptjs cookie-parser cloudinary socket.io`
  - อธิบายการใช้งานแต่ละตัวเมื่อถึงขั้นตอนที่ใช้
- ติดตั้ง `nodemon` เป็น dev dependency ด้วย `npm install nodemon -D`
- สร้างโฟลเดอร์ `src` และย้ายไฟล์หลักไปไว้ในนั้น (แนวปฏิบัติที่ดี)

---

#### **4. สร้างไฟล์หลักของ Backend (`index.js`)**
- ใน `src/index.js`:
  - ใช้ไวยากรณ์ ES Modules โดยเพิ่ม `"type": "module"` ใน `package.json`
  - นำเข้า Express: `import express from 'express'`
  - สร้างแอป: `const app = express()`
  - ตั้งพอร์ต เช่น `app.listen(5001, () => console.log('Server is running on port 5001'))`
- อัปเดตสคริปต์ใน `package.json`: `"dev": "nodemon src/index.js"`
- รันด้วย `npm run dev` เพื่อทดสอบ (ดูที่ `localhost:5001`)

---

#### **5. จัดระเบียบโค้ด Backend**
- สร้างโฟลเดอร์ย่อยใน `src`:
  - `routes` (สำหรับกำหนดเส้นทาง)
  - `controllers` (สำหรับฟังก์ชันจัดการคำขอ)
  - `lib` และ `middleware` (สำหรับฟังก์ชันเพิ่มเติมในอนาคต)
- สร้างไฟล์เส้นทางสำหรับการยืนยันตัวตน:
  - ใน `src/routes/auth.route.js`:
    - นำเข้า `express`, สร้าง `router` ด้วย `express.Router()`
    - กำหนดเส้นทาง เช่น:
      - `router.post('/signup', signup)`
      - `router.post('/login', login)`
      - `router.post('/logout', logout)`
    - ส่งออก `router` ด้วย `export default router`
- เชื่อมเส้นทางใน `src/index.js`:
  - `import authRoutes from './routes/auth.route.js'`
  - ใช้ `app.use('/api/auth', authRoutes)`

---

#### **6. สร้างฟังก์ชันควบคุม (Controllers)**
- ใน `src/controllers/auth.controller.js`:
  - สร้างฟังก์ชันสำหรับจัดการคำขอ:
    - `export const signup = (req, res) => res.send('Signup route')`
    - `export const login = (req, res) => res.send('Login route')`
    - `export const logout = (req, res) => res.send('Logout route')`
- นำเข้าฟังก์ชันใน `auth.route.js`:
  - `import { signup, login, logout } from '../controllers/auth.controller.js'`
  - ใช้ฟังก์ชันในเส้นทาง (เช่น `router.post('/signup', signup)`)

---

#### **7. ทดสอบและปรับปรุง**
- รัน `npm run dev` เพื่อเริ่มเซิร์ฟเวอร์
- ทดสอบเส้นทาง เช่น:
  - `localhost:5001/api/auth/signup`
  - `localhost:5001/api/auth/login`
  - `localhost:5001/api/auth/logout`
- เปลี่ยนจาก `GET` เป็น `POST` สำหรับ `signup` และ `login` เพราะต้องส่งข้อมูล (เช่น อีเมล, รหัสผ่าน)

---

### **แผนต่อไป**
- เริ่มพัฒนา **signup** ก่อน แล้วตามด้วย **login** และ **logout**
- กลับไปที่ frontend เพื่อสร้าง UI และเชื่อมต่อกับ API เพื่อให้แอปแชทสมบูรณ์
### **หมายเหตุ**
- ใช้ `.js` ต่อท้ายไฟล์เมื่อนำเข้าภายในโปรเจกต์ เพราะใช้ `"type": "module"`
- Express เป็นเว็บเฟรมเวิร์กที่ช่วยจัดการ routes และ middlewares ได้ง่าย
- โค้ดถูกจัดระเบียบเพื่อให้ขยายต่อได้สะดวก

####################### Datebase setup ##################################


ต่อไปนี้คือสรุปเนื้อหาทั้งหมดจาก transcript ที่คุณให้มา โดยแบ่งเป็นขั้นตอนให้เข้าใจง่าย ๆ เป็นภาษาไทย:

---

### สรุปเนื้อหาและขั้นตอนการสร้างระบบสมัครสมาชิกด้วย MongoDB และ NodeJS

#### 1. เตรียมฐานข้อมูลด้วย MongoDB
- **เป้าหมาย**: สร้างฐานข้อมูลสำหรับแอปแชท
- **ขั้นตอน**:
  1. เปิดเบราว์เซอร์ (เช่น Chrome) และไปที่ mongodb.com
  2. เข้าสู่ระบบ (สมัครฟรีถ้ายังไม่มีบัญชี)
  3. สร้างโปรเจกต์ใหม่ ตั้งชื่อว่า "chat app tutorial" และกำหนดตัวเองเป็นเจ้าของ
  4. สร้างคลัสเตอร์ (cluster) โดยเลือกแผนฟรี ไม่ต้องเสียเงิน
  5. สร้างผู้ใช้ฐานข้อมูล (database user) และคัดลอกรหัสผ่าน
  6. เลือกวิธีเชื่อมต่อแบบ "drivers" เพื่อรับสตริงการเชื่อมต่อ (connection string)
  7. ไปที่ "Network Access" เพิ่ม IP ให้ "อนุญาตจากทุกที่" เพื่อป้องกันข้อผิดพลาดในการพัฒนา

#### 2. ตั้งค่าโปรเจกต์ใน VS Code
- **เป้าหมาย**: เตรียมสภาพแวดล้อมในโค้ดให้เชื่อมต่อกับ MongoDB
- **ขั้นตอน**:
  1. สร้างไฟล์ `.env` ที่ root ของโฟลเดอร์ backend
  2. ใส่ตัวแปรสตริงการเชื่อมต่อ `MongoDB_URI` จาก MongoDB (แทนรหัสผ่านในสตริง)
  3. เพิ่มชื่อฐานข้อมูลในสตริง เช่น `chatDB` (ก่อน `?` ในสตริง)
  4. เพิ่มตัวแปร `PORT=5001` ใน `.env` เพื่อกำหนดพอร์ตเซิร์ฟเวอร์
  5. ติดตั้งและใช้แพ็กเกจ `dotenv` โดยเพิ่มโค้ด:
     - `import dotenv from 'dotenv'`
     - `dotenv.config()`
  6. อ่านพอร์ตจาก `.env` ด้วย `process.env.PORT` และใช้ในเซิร์ฟเวอร์ (เช่น `app.listen(port)`)

#### 3. สร้างการเชื่อมต่อฐานข้อมูล
- **เป้าหมาย**: เชื่อมต่อแอปกับ MongoDB
- **ขั้นตอน**:
  1. สร้างไฟล์ `db.js` ในโฟลเดอร์ `lib`
  2. เขียนฟังก์ชัน `connectDB` โดยใช้แพ็กเกจ `mongoose`:
     - `import mongoose from 'mongoose'`
     - สร้างฟังก์ชัน async `connectDB` ด้วย try-catch
     - ใน try: `await mongoose.connect(process.env.MongoDB_URI)`
     - แสดงข้อความ "MongoDB connected successfully" พร้อม host
     - ใน catch: แสดงข้อผิดพลาดถ้ามี
  3. นำเข้าและเรียก `connectDB()` ในไฟล์หลัก (เช่น `index.js`) หลังจากเซิร์ฟเวอร์เริ่มรัน
  4. ทดสอบ: ถ้าเห็น "MongoDB connected" ในเทอร์มินัล แปลว่าเชื่อมต่อสำเร็จ

#### 4. สร้างโมเดลผู้ใช้ (User Model)
- **เป้าหมาย**: กำหนดโครงสร้างข้อมูลสำหรับผู้ใช้ในฐานข้อมูล
- **ขั้นตอน**:
  1. สร้างไฟล์ `User.js` ในโฟลเดอร์ `models`
  2. เขียนโค้ดโดยใช้ `mongoose`:
     - `import mongoose from 'mongoose'`
     - สร้าง `userSchema` ด้วย `new mongoose.Schema`
     - กำหนดฟิลด์:
       - `email`: string, required, unique
       - `fullName`: string, required
       - `password`: string, required, ความยาวขั้นต่ำ 6
       - `profilePic`: string, ไม่ต้องระบุ, ค่าเริ่มต้น ""
       - เพิ่ม `timestamps: true` เพื่อสร้าง `createdAt` และ `updatedAt` อัตโนมัติ
     - สร้างโมเดล: `const User = mongoose.model('User', userSchema)`
     - ส่งออก: `export default User`
  3. หมายเหตุ: ชื่อโมเดลต้องเป็นเอกพจน์และตัวแรกพิมพ์ใหญ่ (เช่น "User" ไม่ใช่ "users") MongoDB จะทำให้เป็นพหูพจน์อัตโนมัติ (เช่น "users")

#### 5. วางแผนโมเดลข้อความ (Message Model)
- **เป้าหมาย**: เตรียมโครงสร้างข้อมูลสำหรับข้อความ (ยังไม่ได้เขียนโค้ด)
- **ขั้นตอนในอนาคต**:
  - ฟิลด์ที่วางแผน:
    - `senderId`: ID ผู้ส่ง
    - `receiverId`: ID ผู้รับ
    - `content`: ข้อความ (string เช่น "สวัสดี")
    - `image`: รูปภาพ (อาจเป็น string สำหรับ URL)
  - จะสร้างคล้ายกับโมเดลผู้ใช้ในภายหลัง

#### 6. ทดสอบและตรวจสอบ
- **เป้าหมาย**: ตรวจสอบว่าทุกอย่างทำงานได้
- **ขั้นตอน**:
  1. รันเซิร์ฟเวอร์ (เช่น `node index.js`)
  2. ดูเทอร์มินัล: ต้องเห็น "Server is running on port 5001" และ "MongoDB connected"
  3. ไปที่ MongoDB Atlas > Clusters > Browse Collections เพื่อดูว่ามีคอลเลกชันหรือยัง (ตอนนี้ยังว่าง เพราะยังไม่ได้เพิ่มข้อมูล)

---

### ภาพรวม
- คุณได้ตั้งค่า MongoDB Atlas ด้วยฐานข้อมูลฟรีชื่อ "chatDB"
- เชื่อมต่อ NodeJS กับ MongoDB ผ่าน `mongoose`
- สร้างโมเดล `User` เพื่อเก็บข้อมูลผู้ใช้ (email, fullName, password, profilePic, timestamps)
- เตรียมพร้อมสำหรับขั้นตอนต่อไป เช่น การสร้างระบบสมัครสมาชิกใน auth controller


################################## Signup Backend ###########################################

### สรุปเนื้อหาและขั้นตอนการสร้างระบบสมัครสมาชิก (Signup Flow)

#### เป้าหมาย
สร้างระบบสมัครสมาชิก (signup) ในแอปพลิเคชัน โดยรับข้อมูลจากผู้ใช้ เช่น ชื่อเต็ม อีเมล และรหัสผ่าน จากนั้นบันทึกข้อมูลในฐานข้อมูลพร้อมแฮชรหัสผ่าน และสร้างโทเค็น (JWT) เพื่อรับรองตัวตน

---

### ขั้นตอนการพัฒนา

#### 1. อธิบายภาพรวมของระบบ
- **วัตถุประสงค์**: ผู้ใช้ส่งข้อมูล (ชื่อเต็ม, อีเมล, รหัสผ่าน) เพื่อสมัครสมาชิก
- **กระบวนการ**:
  - ผู้ใช้คลิก "สมัครสมาชิก" → ส่งคำขอไปที่ endpoint `/api/auth/signup`
  - สร้างผู้ใช้ในฐานข้อมูล → แฮชรหัสผ่าน → สร้างโทเค็น JWT → ส่งโทเค็นกลับในคุกกี้ → นำผู้ใช้ไปที่หน้าแรก
- **การตรวจสอบโทเค็น**: เมื่อผู้ใช้ส่งคำขออื่น (เช่น ส่งข้อความ) ระบบจะตรวจสอบโทเค็นในคุกกี้ว่าถูกต้องและยังไม่หมดอายุหรือไม่

---

#### 2. เตรียมโครงสร้างโค้ดในไฟล์ `authController`
- **เพิ่มมิดเดิลแวร์ใน `index.js`**:
  - ใช้ `app.use(express.json())` เพื่อดึงข้อมูล JSON จากคำขอ (request body)
- **ดึงข้อมูลจากผู้ใช้**:
  - ใช้ `req.body` เพื่อดึง `fullName`, `email`, และ `password`

---

#### 3. ตรวจสอบข้อมูลและจัดการข้อผิดพลาด
- **ใช้ try-catch**: ป้องกันโค้ดพังเมื่อเกิดข้อผิดพลาด
- **ตรวจสอบความยาวรหัสผ่าน**:
  - ถ้า `password` น้อยกว่า 6 ตัวอักษร → ส่งข้อผิดพลาด (status 400) "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"
- **ตรวจสอบอีเมลซ้ำ**:
  - ใช้ `User.findOne({ email })` เพื่อเช็คว่ามีอีเมลนี้ในฐานข้อมูลแล้วหรือไม่
  - ถ้ามี → ส่งข้อผิดพลาด (status 400) "อีเมลนี้มีอยู่แล้ว"
- **ตรวจสอบข้อมูลครบถ้วน**:
  - ถ้า `fullName`, `email`, หรือ `password` ว่าง → ส่งข้อผิดพลาด (status 400) "ต้องกรอกทุกช่อง"

---

#### 4. แฮชรหัสผ่าน
- **ใช้แพ็คเกจ `bcryptjs`**:
  - นำเข้า: `import bcrypt from 'bcryptjs'`
  - สร้าง salt: `const salt = await bcrypt.genSalt(10)`
  - แฮชรหัสผ่าน: `const hashedPassword = await bcrypt.hash(password, salt)`
- **เหตุผล**: เพื่อไม่ให้รหัสผ่านถูกบันทึกแบบข้อความธรรมดาในฐานข้อมูล (เพิ่มความปลอดภัย)

---

#### 5. สร้างผู้ใช้ใหม่
- **ใช้โมเดล `User`**:
  - นำเข้า: `import User from '../models/userModel.js'`
  - สร้างผู้ใช้: 
    ```javascript
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword
    });
    ```
- **บันทึก**: `await newUser.save()`
- **กรณีล้มเหลว**: ส่งข้อผิดพลาด (status 400) "ข้อมูลผู้ใช้ไม่ถูกต้อง"

---

#### 6. สร้างและส่งโทเค็น JWT
- **สร้างฟังก์ชัน `generateToken` ใน `utils.js`**:
  - นำเข้า: `import jwt from 'jsonwebtoken'`
  - กำหนดตัวแปรลับ: `JWT_SECRET` (เช่น "mySecretKey")
  - สร้างโทเค็น:
    ```javascript
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    ```
  - ส่งโทเค็นในคุกกี้:
    ```javascript
    res.cookie('jwt', token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 วันในมิลลิวินาที
      httpOnly: true, // ป้องกัน XSS
      sameSite: 'strict', // ป้องกัน CSRF
      secure: process.env.NODE_ENV !== 'development' // ใช้ HTTPS ในโปรดักชัน
    });
    ```
- **เรียกใช้ฟังก์ชัน**: `generateToken(newUser._id, res)`

---

#### 7. ส่งการตอบกลับเมื่อสำเร็จ
- **สถานะ 201**: หมายถึง "สร้างสำเร็จ"
- **ข้อมูลที่ส่งกลับ**:
  ```javascript
  res.status(201).json({
    _id: newUser._id,
    fullName: newUser.fullName,
    email: newUser.email,
    profilePic: newUser.profilePic
  });
  ```
- **กรณีเกิดข้อผิดพลาด**: ส่งสถานะ 500 "ข้อผิดพลาดภายในเซิร์ฟเวอร์" พร้อมข้อความข้อผิดพลาด

---

#### 8. ทดสอบระบบด้วย Postman
- **ตั้งค่า**:
  - วิธี: POST
  - URL: `http://localhost:5001/api/auth/signup`
  - Body (JSON): `{ "fullName": "John Doe", "email": "john@gmail.com", "password": "123456" }`
- **ผลลัพธ์**:
  - รหัสผ่าน < 6 → "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"
  - ช่องว่าง → "ต้องกรอกทุกช่อง"
  - สำเร็จ → ได้ข้อมูลผู้ใช้และคุกกี้ที่มี JWT (หมดอายุ 7 วัน)
- **ตรวจสอบฐานข้อมูล**: รหัสผ่านถูกแฮช, ผู้ใช้ถูกบันทึกในคอลเลกชัน `users`

---

### สรุปภาพรวม
1. รับข้อมูลจากผู้ใช้ (ชื่อ, อีเมล, รหัสผ่าน)
2. ตรวจสอบข้อมูล (ความยาว, ความซ้ำ, ความครบถ้วน)
3. แฮชรหัสผ่านด้วย `bcryptjs`
4. สร้างผู้ใช้ใหม่ในฐานข้อมูล
5. สร้างโทเค็น JWT และส่งในคุกกี้
6. ส่งการตอบกลับเมื่อสำเร็จ หรือจัดการข้อผิดพลาด
7. ทดสอบด้วย Postman เพื่อยืนยันการทำงาน


################################# Login & Logout & Update Profile ###########################################



### สรุปเนื้อหาและขั้นตอนการพัฒนา Authentication Routes ใน Back-end

เนื้อหานี้เกี่ยวกับการพัฒนาเส้นทาง (routes) สำหรับการยืนยันตัวตน (authentication) ในส่วน back-end ของแอปพลิเคชัน โดยใช้ Node.js, 
Express, MongoDB, JWT (JSON Web Token), Bcrypt และ Cloudinary สำหรับจัดการการสมัครสมาชิก (signup), ล็อกอิน (login), ล็อกเอาท์ (logout), 
อัปเดตโปรไฟล์ (update profile) และตรวจสอบสถานะการยืนยันตัวตน (check auth) โดยมีขั้นตอนดังนี้:

---

#### 1. การสร้างเส้นทาง Login
- **เป้าหมาย**: อนุญาตให้ผู้ใช้ล็อกอินด้วยอีเมลและรหัสผ่าน
- **ขั้นตอน**:
  1. รับข้อมูล `email` และ `password` จาก `request.body` โดยใช้ destructuring
  2. ใช้ฟังก์ชัน `async` และ `await` เพื่อค้นหาผู้ใช้ในฐานข้อมูลด้วย `User.findOne({ email })`
  3. ถ้าไม่พบผู้ใช้ ส่งรหัสสถานะ `400` พร้อมข้อความ "ข้อมูลรับรองไม่ถูกต้อง" (ไม่ระบุว่าอีเมลหรือรหัสผ่านผิด เพื่อความปลอดภัย)
  4. ถ้าพบผู้ใช้ ใช้ `bcrypt.compare` เพื่อเปรียบเทียบรหัสผ่านที่ผู้ใช้ส่งมากับรหัสผ่านที่ถูก hash ในฐานข้อมูล
  5. ถ้ารหัสผ่านไม่ถูกต้อง ส่งรหัส `400` พร้อมข้อความ "ข้อมูลรับรองไม่ถูกต้อง"
  6. ถ้าถูกต้อง สร้าง JWT token โดยใส่ `user._id` และส่งกลับไปพร้อมข้อมูลผู้ใช้ (เช่น `_id`, `fullName`, `email`, `profilePic`) ด้วยรหัสสถานะ `200`
  7. ใช้ `try-catch` เพื่อจัดการข้อผิดพลาด และส่งรหัส `500` ถ้ามีปัญหา

---

#### 2. การสร้างเส้นทาง Logout
- **เป้าหมาย**: ล้างคุกกี้เพื่อให้ผู้ใช้ล็อกเอาท์
- **ขั้นตอน**:
  1. ใช้ `res.cookie` เพื่อกำหนดคุกกี้ชื่อ `JWT` เป็นสตริงว่าง (`""`)
  2. ตั้งค่า `maxAge: 0` เพื่อให้คุกกี้หมดอายุทันที
  3. ส่งรหัสสถานะ `200` พร้อมข้อความ "ล็อกเอาท์สำเร็จ"
  4. ใช้ `try-catch` เพื่อจัดการข้อผิดพลาด และส่งรหัส `500` ถ้ามีปัญหา

---

#### 3. การทดสอบ Login และ Logout ใน Postman
- **เป้าหมาย**: ตรวจสอบว่า login และ logout ทำงานถูกต้อง
- **ขั้นตอน**:
  1. รัน back-end ด้วยคำสั่ง `npm run dev` และตรวจสอบว่าเชื่อมต่อ MongoDB ได้
  2. ใน Postman:
     - ทดสอบ **login** แบบ POST ด้วย endpoint `/login`
       - ใส่ `email` และ `password` ผิด → ได้ "ข้อมูลรับรองไม่ถูกต้อง"
       - ใส่ถูกทั้งคู่ → ได้รหัส `200` พร้อมข้อมูลผู้ใช้และโทเค็น
     - ทดสอบ **logout** แบบ POST ด้วย endpoint `/logout`
       - ไม่ต้องส่ง body → ได้ "ล็อกเอาท์สำเร็จ" และคุกกี้ถูกล้าง

---

#### 4. การสร้าง Middleware ProtectRoute
- **เป้าหมาย**: ป้องกันเส้นทางที่ต้องการการยืนยันตัวตน โดยตรวจสอบ JWT token
- **ขั้นตอน**:
  1. สร้างไฟล์ `auth.middleware.js` ในโฟลเดอร์ middleware
  2. นำเข้า `jsonwebtoken` (JWT) และ `User` model
  3. สร้างฟังก์ชัน `protectRoute` แบบ `async` รับ `req`, `res`, และ `next`
  4. ดึงโทเค็นจาก `req.cookies.jwt` (ต้องติดตั้ง `cookie-parser` ใน `index.js` ก่อน)
  5. ถ้าไม่มีโทเค็น ส่งรหัส `401` "ไม่ได้รับอนุญาต ไม่มีโทเค็น"
  6. ถ้ามีโทเค็น ใช้ `jwt.verify` ถอดรหัสด้วย `JWT_SECRET` จาก `.env`
  7. ถ้าโทเค็นไม่ถูกต้อง ส่งรหัส `401` "โทเค็นไม่ถูกต้อง"
  8. ถ้าถูกต้อง ค้นหาผู้ใช้ด้วย `User.findById` โดยใช้ `decoded.userId` และเลือกข้อมูลยกเว้น `password`
  9. ถ้าไม่พบผู้ใช้ ส่งรหัส `404`
  10. ถ้าพบ เพิ่ม `user` ลงใน `req` และเรียก `next()` เพื่อไปฟังก์ชันถัดไป
  11. ใช้ `try-catch` และส่งรหัส `500` ถ้ามีข้อผิดพลาด

---

#### 5. การกำหนดค่า Cloudinary สำหรับอัปโหลดรูปภาพ
- **เป้าหมาย**: ตั้งค่า Cloudinary เพื่อเก็บรูปโปรไฟล์
- **ขั้นตอน**:
  1. สมัคร/ล็อกอิน Cloudinary และดึง `cloud_name`, `api_key`, `api_secret` จาก dashboard
  2. ใส่ค่าเหล่านี้ในไฟล์ `.env` (เช่น `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`)
  3. สร้างไฟล์ `cloudinary.js` ในโฟลเดอร์ `lib`
  4. นำเข้า `cloudinary` และ `dotenv`
  5. กำหนดค่า `cloudinary.config` ด้วย `cloud_name`, `api_key`, `api_secret` จาก `.env`
  6. ส่งออก `cloudinary` เพื่อใช้งานในไฟล์อื่น

---

#### 6. การสร้างเส้นทาง Update Profile
- **เป้าหมาย**: อนุญาตให้ผู้ใช้ที่ยืนยันตัวตนแล้วอัปเดตรูปโปรไฟล์
- **ขั้นตอน**:
  1. ใช้ `router.put` กับ endpoint `/update-profile` และเรียก `protectRoute` เป็น middleware
  2. สร้างฟังก์ชัน `updateProfile` ใน controller
  3. ดึง `profilePic` จาก `req.body` และ `userId` จาก `req.user._id` (ได้จาก `protectRoute`)
  4. ถ้าไม่มี `profilePic` ส่งรหัส `400` "ต้องมีรูปโปรไฟล์"
  5. อัปโหลด `profilePic` ไป Cloudinary ด้วย `cloudinary.uploader.upload`
  6. อัปเดตผู้ใช้ในฐานข้อมูลด้วย `User.findByIdAndUpdate` โดยเปลี่ยน `profilePic` เป็น `uploadResponse.secureUrl` และตั้ง `new: true` เพื่อได้ข้อมูลล่าสุด
  7. ส่งรหัส `200` พร้อมข้อมูลผู้ใช้ที่อัปเดต
  8. ใช้ `try-catch` และส่งรหัส `500` ถ้ามีข้อผิดพลาด
  9. (หมายเหตุ: ทดสอบใน front-end เพราะ Postman อัปโหลดไฟล์ลำบาก)

---

#### 7. การสร้างเส้นทาง Check Auth
- **เป้าหมาย**: ตรวจสอบว่าผู้ใช้ยืนยันตัวตนอยู่หรือไม่
- **ขั้นตอน**:
  1. ใช้ `router.get` กับ endpoint `/check` และเรียก `protectRoute`
  2. สร้างฟังก์ชัน `checkAuth` (ไม่ต้อง `async`)
  3. ส่ง `req.user` กลับไปยัง client ด้วยรหัส `200`
  4. ใช้ `try-catch` และส่งรหัส `500` ถ้ามีข้อผิดพลาด
  5. ทดสอบใน Postman:
     - หลังล็อกเอาท์ → ได้ "ไม่ได้รับอนุญาต ไม่มีโทเค็น"
     - หลังล็อกอิน → ได้ข้อมูลผู้ใช้และรหัส `200`

---

### ผลลัพธ์
- สร้างระบบ authentication เสร็จสมบูรณ์ (login, logout, update profile, check auth)
- ใช้ middleware `protectRoute` เพื่อป้องกันเส้นทาง
- เชื่อมต่อ Cloudinary สำหรับอัปโหลดรูปภาพ
- ทดสอบทุกอย่างใน Postman (ยกเว้น update profile ที่รอ front-end)

---

### ขั้นตอนถัดไป
- สร้าง routes สำหรับ messages ในส่วนต่อไป

################################ Create Message Routes ########################################

1. create app.use("/api/message", messageRoutes); && import messageRoutes from "./routes/message.route.js"; (in server.js)
2. create message.route.js (routes/)

    import express from "express";
    import { protectRoute } from "../middleware/auth.middleware.js";
    import {
      getUserForSidebar,
      getMessage,
      sendMessage,
    } from "../controllers/message.controller.js";

    const router = express.Router();

    router.get("/user", protectRoute, getUserForSidebar);

    router.get("/:id", protectRoute, getMessage);
    router.post("/send/:id", protectRoute, sendMessage);

    export default router;

3. create message.controller.js && getUserForSidebar, getMessage , sendMessage 

    import User from "../models/user.model.js";
    import Message from "../models/message.model.js";
    

    // Link อธิบายการเขียนโค้ดนี้ "https://chatgpt.com/share/67f7c28d-3ad4-8011-94ee-03e5cb42b071"
    export const getUserForSidebar = async (req, res) => {
      try {
        const loggedInUserId = req.user._id;
        const filteredUser = await User.find({
          _id: { $ne: loggedInUserId },
        }).select("-password");

        res.status(200).json(filteredUser);
      } catch (error) {
        console.log("Error in getUserForSidebar controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
      }
    };
    // Link อธิบายการเขียนโค้ดนี้ "https://chatgpt.com/share/67f7c3c0-62c4-8011-a2f2-f85d7a2de482"
    export const getMessage = async (req, res) => {
      try {
        const { id: userToChatId } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
          $or: [
            { senderId: myId, receiverId: userToChatId },
            { senderId: userToChatId, receiverId: myId },
          ],
        });

        res.status(200).json(message);
      } catch (error) {
        console.log("Error in getMessage controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
      }
    };
    // Link อธิบายการเขียนโค้ดนี้ "https://chatgpt.com/share/67f7c496-2cf4-8011-8b09-df79df830fd3"
    export const sendMessage = async (req, res) => {
      try {
        const { text, image } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if (image) {
          // Upload base64 image to cloudinary
          const uploadResponse = await cloudinary.uploader.upload(image);
          imageUrl = uploadResponse.secure_url;

          const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
          });

          await newMessage.save();

          //todo : realtime functionality goes here => socket.io

          res.status(201).json(newMessage);
        }
      } catch (error) {
        console.log("Error in sendMessage Controller: ", error.message);
      }
    };


############################### Frontend Setup ########################################

### **ขั้นตอนที่ 1: การเตรียมการและเริ่มต้นแอปพลิเคชัน**
1. **ตรวจสอบเซิร์ฟเวอร์**  
   - เปิดเทอร์มินัลและรันคำสั่ง `npm run dev` เพื่อเชื่อมต่อฐานข้อมูลและเริ่มเซิร์ฟเวอร์ให้ทำงาน
2. **เข้าไปที่โฟลเดอร์ front-end**  
   - พิมพ์ `cd frontend` เพื่อเข้าไปยังส่วน front-end ของโปรเจกต์

---

### **ขั้นตอนที่ 2: การติดตั้งแพ็กเกจที่จำเป็น**
1. **ติดตั้ง React Router DOM**  
   - ติดตั้ง `react-router-dom` เพื่อจัดการหน้าและการกำหนดเส้นทางในแอปพลิเคชัน
2. **ติดตั้ง React Hot Toast**  
   - ติดตั้ง `react-hot-toast` เพื่อใช้แสดงการแจ้งเตือนในแอป
3. **ติดตั้งแพ็กเกจเพิ่มเติมในภายหลัง**  
   - ติดตั้ง `axios` (สำหรับส่งคำขอ HTTP) และ `zustand` (สำหรับจัดการสถานะแบบ global) ด้วยคำสั่ง `npm install axios zustand`
   - ติดตั้ง `lucide-react` (สำหรับไอคอน) ด้วยคำสั่ง `npm install lucide-react`

---

### **ขั้นตอนที่ 3: การตั้งค่า Tailwind CSS**
1. **เริ่มต้น Tailwind CSS**  
   - รันคำสั่ง `tailwindcss vite` เพื่อเริ่มต้นใช้งาน Tailwind CSS ในโปรเจกต์
   - คัดลอกคำสั่งจากเอกสารแล้ววางในเทอร์มินัลเพื่อติดตั้ง
2. **อัปเดตไฟล์ตั้งค่า**  
   - คัดลอกโค้ดการตั้งค่า Tailwind CSS วางลงในไฟล์ `tailwind.config.js` (ลบเนื้อหาเก่าทิ้งก่อน)
   - คัดลอกโค้ดสไตล์พื้นฐานวางในไฟล์ `index.css` ในโฟลเดอร์ `src` (ลบเนื้อหาเก่าทิ้ง)
3. **ลบไฟล์ที่ไม่จำเป็น**  
   - ลบไฟล์ `app.css` ออก เพราะไม่ใช้แล้ว
4. **ทดสอบ Tailwind CSS**  
   - แก้ไข `App.jsx` ให้เหลือโค้ดพื้นฐาน (เช่น "hello") และเพิ่มคลาส Tailwind เช่น `text-red-500` เพื่อทดสอบ
   - รัน `npm run dev` และตรวจสอบว่าข้อความเป็นสีแดง (แสดงว่า Tailwind ทำงาน)

---

### **ขั้นตอนที่ 4: การตั้งค่า DaisyUI**
1. **ติดตั้ง DaisyUI**  
   - คัดลอกคำสั่งติดตั้งจากเอกสาร DaisyUI วางในเทอร์มินัลในโฟลเดอร์ front-end
2. **เพิ่มใน Tailwind Config**  
   - เพิ่ม `import daisyUI from 'daisyui'` และใส่ `daisyUI` ในส่วน `plugins` ของไฟล์ `tailwind.config.js`
3. **ทดสอบคอมโพเนนต์**  
   - คัดลอกโค้ดปุ่มจาก DaisyUI วางใน `App.jsx` แล้วรันแอปเพื่อดูว่าทำงานได้ (เช่น โหมดมืดหรือสว่าง)

---

### **ขั้นตอนที่ 5: การตั้งค่า React Router DOM**
1. **ห่อแอปด้วย BrowserRouter**  
   - ใน `main.jsx` นำเข้า `BrowserRouter` จาก `react-router-dom` และห่อคอมโพเนนต์ทั้งหมด
2. **สร้างเส้นทางใน App.jsx**  
   - นำเข้า `Routes` และ `Route` จาก `react-router-dom`
   - เพิ่ม `Navbar` คอมโพเนนต์ด้านบน และกำหนดเส้นทาง เช่น:
     - `/` → `HomePage`
     - `/signup` → `SignUpPage`
     - `/login` → `LoginPage`
     - `/settings` → `SettingsPage`
     - `/profile` → `ProfilePage`
3. **สร้างโฟลเดอร์และไฟล์**  
   - สร้างโฟลเดอร์ `components` และ `pages` ใน `src`
   - สร้างไฟล์ `.jsx` เช่น `Navbar.jsx`, `HomePage.jsx`, `SignUpPage.jsx`, `LoginPage.jsx`, `SettingsPage.jsx`, `ProfilePage.jsx`
4. **ทดสอบการนำทาง**  
   - รันแอปและตรวจสอบว่า `Navbar` แสดงในทุกหน้า และเปลี่ยนเส้นทางได้ถูกต้อง

---

### **ขั้นตอนที่ 6: การตั้งค่า Axios**
1. **สร้าง Axios Instance**  
   - ในโฟลเดอร์ `src/lib` สร้างไฟล์ `axios.js`
   - นำเข้า `axios` และสร้าง `axiosInstance` โดยกำหนด `baseURL` เป็น `localhost:5001/api` และตั้งค่า `withCredentials: true` เพื่อส่งคุกกี้
2. **ใช้งาน Axios**  
   - ใช้ `axiosInstance` ส่งคำขอ เช่น `GET`, `POST` ได้ทั่วแอป

---

### **ขั้นตอนที่ 7: การตั้งค่า Zustand (Global State Management)**
1. **สร้าง Store**  
   - ในโฟลเดอร์ `src/store` สร้างไฟล์ `useAuthStore.js`
   - นำเข้า `create` จาก `zustand` และสร้าง `useAuthStore` ด้วยสถานะเริ่มต้น:
     - `authUser: null` (ผู้ใช้ที่ล็อกอิน)
     - `isCheckingAuth: true` (สถานะโหลดการตรวจสอบ)
     - `isSigningUp: false`, `isLoggingIn: false`, `isUpdatingProfile: false` (สถานะการทำงานอื่น ๆ)
2. **สร้างฟังก์ชันตรวจสอบการล็อกอิน**  
   - สร้างฟังก์ชัน `checkAuth` ใน `useAuthStore` ใช้ `axiosInstance.get('/auth/check')` เพื่อตรวจสอบผู้ใช้
   - ถ้าสำเร็จ ตั้งค่า `authUser` ด้วยข้อมูลจาก response ถ้าไม่ ตั้งเป็น `null` และปิด `isCheckingAuth`
3. **ใช้งานใน App.jsx**  
   - นำเข้า `useAuthStore` ใน `App.jsx` แยกโครงสร้าง `authUser` และ `isCheckingAuth`
   - เรียก `checkAuth` ใน `useEffect` เมื่อแอปเริ่ม

---

### **ขั้นตอนที่ 8: การจัดการ CORS และการป้องกันเส้นทาง**
1. **แก้ไข CORS ใน Back-end**  
   - ในโฟลเดอร์ back-end ไฟล์ `index.js` ติดตั้ง `cors` ด้วย `npm install cors`
   - นำเข้าและตั้งค่า `app.use(cors({ origin: 'localhost:5173', credentials: true }))`
2. **ป้องกันเส้นทางใน App.jsx**  
   - ถ้ามี `authUser`:
     - แสดง `HomePage`, `ProfilePage`
     - นำไป `HomePage` ถ้าพยายามเข้า `SignUpPage` หรือ `LoginPage`
   - ถ้าไม่มี `authUser`:
     - นำไป `LoginPage` ถ้าพยายามเข้า `HomePage` หรือ `ProfilePage`
     - แสดง `SignUpPage`, `LoginPage`, `SettingsPage`
3. **เพิ่มสถานะโหลด**  
   - ใน `App.jsx` ถ้า `isCheckingAuth` และยังไม่มี `authUser` แสดงไอคอนโหลด (ใช้ `Loader` จาก `lucide-react`)

---

### **ขั้นตอนที่ 9: การสร้าง SignUpPage**
1. **โครงสร้างพื้นฐาน**  
   - ใน `SignUpPage.jsx` วางแผนมี:
     - `Navbar` ด้านบน
     - ด้านซ้าย/ขวา (ตกแต่งด้วย skeleton)
     - 3 อินพุต: ชื่อเต็ม, อีเมล, รหัสผ่าน (สลับแสดง/ซ่อนรหัสผ่าน)
     - ปุ่มสมัคร และลิงก์ไป `LoginPage`
2. **เริ่มสร้างทีละส่วน**  
   - เริ่มจากเพิ่มโค้ดพื้นฐานใน `SignUpPage.jsx` และพัฒนาต่อในขั้นตอนถัดไป

---

### **สรุปภาพรวม**
- โปรเจกต์นี้ใช้ **React** กับ **Vite** เป็นฐาน
- ใช้ **Tailwind CSS v3** และ **DaisyUI v4** (ระวังเวอร์ชัน 5) สำหรับสไตล์
- จัดการเส้นทางด้วย **React Router DOM**
- ส่งคำขอ HTTP ด้วย **Axios**
- จัดการสถานะด้วย **Zustand**
- ป้องกันเส้นทางตามสถานะล็อกอิน และแก้ปัญหา CORS เพื่อเชื่อมต่อ front-end กับ back-end


############################### Login & Signup Page Frontend ########################################


### สรุปเนื้อหาและขั้นตอนการพัฒนาหน้า Signup และ Login

เนื้อหานี้เป็นการอธิบายการพัฒนาหน้า Signup และ Login สำหรับเว็บแอปพลิเคชัน โดยใช้ React, Tailwind CSS, React Hot Toast, และ Axios เพื่อจัดการการสมัครสมาชิก การล็อกอิน และการล็อกเอาท์ รวมถึงการสร้าง UI และ logic สำหรับตรวจสอบฟอร์มและการแจ้งเตือนผู้ใช้

---

### ขั้นตอนการพัฒนา

#### 1. **ตั้งค่า State และการจัดการข้อมูลฟอร์ม**
   - **หน้า Signup**:
     - สร้าง state สำหรับ `showPassword` (เริ่มต้นเป็น `false`) เพื่อควบคุมการแสดงรหัสผ่านเป็น text หรือ password
     - สร้าง state สำหรับ `formData` เพื่อเก็บข้อมูล `fullName`, `email`, และ `password` (เริ่มต้นเป็นสตริงว่าง)
     - สร้าง state สำหรับ `isSigningUp` เพื่อจัดการสถานะการโหลดเมื่อสมัครสมาชิก
   - **หน้า Login**:
     - สร้าง state สำหรับ `showPassword` (เหมือน Signup)
     - สร้าง state สำหรับ `formData` ที่เก็บ `email` และ `password` เท่านั้น
     - ใช้ state `isLoading` จาก auth store เพื่อจัดการสถานะการโหลดเมื่อล็อกอิน

#### 2. **สร้าง UI สำหรับหน้า Signup**
   - **โครงสร้างหน้า**:
     - ใช้ layout แบบ grid สำหรับหน้าจอใหญ่ แบ่งเป็นสองส่วน: ซ้าย (ฟอร์ม) และขวา (decorator)
     - ด้านซ้าย: มีโลโก้และฟอร์มสมัครสมาชิก
     - ด้านขวา: ใช้ component `AuthImagePattern` สำหรับแสดงกราฟิกตกแต่ง (reusable)
   - **ฟอร์มสมัครสมาชิก**:
     - มี input สำหรับ `fullName`, `email`, และ `password`
     - ช่องรหัสผ่านมีปุ่มสลับเพื่อแสดง/ซ่อนรหัสผ่าน (ใช้ icon จาก Lucide React)
     - ปุ่ม "Create Account" จะถูกปิดใช้งานและแสดง "Loading..." เมื่อ `isSigningUp` เป็น `true`
     - มีลิงก์ไปหน้า Login
   - **การจัดการ UI**:
     - ใช้ Tailwind CSS สำหรับจัดสไตล์ เช่น flexbox, padding, และ grid
     - ปิดการแจ้งเตือน ESLint เรื่อง PropTypes สำหรับ component `AuthImagePattern`

#### 3. **สร้าง Logic การตรวจสอบและสมัครสมาชิก**
   - **ฟังก์ชัน `validateForm`**:
     - ตรวจสอบว่ากรอก `fullName`, `email`, และ `password` ครบหรือไม่
     - ตรวจสอบรูปแบบอีเมลด้วย regular expression
     - ตรวจสอบว่ารหัสผ่านยาวอย่างน้อย 6 ตัวอักษร
     - ถ้าผิดพลาด แสดง toast error (ใช้ React Hot Toast) เช่น "Full name is required"
     - ถ้าผ่าน คืนค่า `true`
   - **ฟังก์ชัน `handleSubmit`**:
     - ป้องกันการรีเฟรชหน้า (`preventDefault`)
     - เรียก `validateForm` ถ้าผ่าน (ได้ `true`) เรียกฟังก์ชัน `signup` ด้วย `formData`
   - **ฟังก์ชัน `signup` (ใน auth store)**:
     - ส่ง POST request ไปที่ `/auth/signup` ด้วย Axios
     - ตั้ง `isSigningUp` เป็น `true` ก่อนส่ง
     - ถ้าสำเร็จ:
       - อัปเดต `authUser` ด้วยข้อมูลจาก response
       - แสดง toast success ว่า "Account created successfully"
     - ถ้าผิดพลาด:
       - แสดง toast error พร้อมข้อความจาก backend
     - ตั้ง `isSigningUp` เป็น `false` เมื่อเสร็จ
   - **การแจ้งเตือน**:
     - ใส่ `Toaster` component ที่ root (ใน `app.jsx`) เพื่อแสดง toast

#### 4. **สร้าง UI และ Logic สำหรับหน้า Login**
   - **โครงสร้างหน้า**:
     - คล้ายหน้า Signup มีโลโก้ ฟอร์ม และลิงก์ไปหน้า Signup
     - ฟอร์มมี input สำหรับ `email` และ `password`
     - ช่องรหัสผ่านมีปุ่มสลับแสดง/ซ่อน
     - ปุ่ม "Login" แสดง "Loading..." เมื่อ `isLoading` เป็น `true`
   - **ฟังก์ชัน `login` (ใน auth store)**:
     - ส่ง POST request ไปที่ `/auth/login` ด้วย `email` และ `password`
     - ตั้ง `isLoading` เป็น `true` ก่อนส่ง
     - ถ้าสำเร็จ:
       - อัปเดต `authUser` และแสดง toast success ว่า "Logged in successfully"
     - ถ้าผิดพลาด:
       - แสดง toast error เช่น "Invalid credentials"
     - ตั้ง `isLoading` เป็น `false` เมื่อเสร็จ

#### 5. **สร้างฟังก์ชัน Logout**
   - **ฟังก์ชัน `logout` (ใน auth store)**:
     - ส่ง POST request ไปที่ `/auth/logout`
     - ตั้ง `authUser` เป็น `null`
     - แสดง toast success ว่า "Logged out successfully"
     - ถ้าผิดพลาด แสดง toast error พร้อมข้อความจาก backend
   - **ไม่มี state สำหรับ loading**:
     - เพราะการ logout รวดเร็ว ไม่จำเป็นต้องมี state `isLoggingOut`

#### 6. **สร้าง Navbar**
   - **โครงสร้าง**:
     - มีโลโก้พาไปหน้า home
     - ถ้าไม่ได้ authenticate แสดง settings
     - ถ้า authenticate แสดงลิงก์ไปหน้า profile และปุ่ม logout
   - **การจัดการ**:
     - ใช้ `authUser` จาก auth store เพื่อเช็คว่าผู้ใช้ล็อกอินหรือไม่
     - ปุ่ม logout เรียกฟังก์ชัน `logout` เมื่อคลิก

#### 7. **ทดสอบการทำงาน**
   - **หน้า Signup**:
     - ลองกรอกข้อมูลไม่ครบ: แสดง toast error เช่น "Full name is required"
     - กรอกรหัสผ่านสั้นเกินไป: แสดง toast ว่า "Password must be at least 6 characters"
     - กรอกข้อมูลถูกต้อง: สร้างบัญชีสำเร็จ เปลี่ยนหน้าไป home และตั้ง cookie (HTTP only)
   - **หน้า Login**:
     - ใส่ข้อมูลผิด: แสดง toast ว่า "Invalid credentials"
     - ใส่ข้อมูลถูกต้อง: ล็อกอินสำเร็จ ไปหน้า home และมี cookie
   - **Logout**:
     - คลิก logout: ล้าง cookie และแสดง toast ว่า "Logged out successfully"
   - **การป้องกัน route**:
     - ถ้าล็อกอินแล้ว จะไม่สามารถเข้าหน้า login หรือ signup ได้ (ถูก redirect ไปหน้า home)

#### 8. **เตรียมสร้างหน้า Profile**
   - เนื้อหาจบที่การเตรียมพัฒนาหน้า profile ซึ่งจะทำต่อในขั้นตอนถัดไป

---

### หมายเหตุ
- **เครื่องมือที่ใช้**: React, Tailwind CSS, Lucide React (สำหรับ icon), React Hot Toast (สำหรับแจ้งเตือน), Axios (สำหรับ API), React Router Dom (สำหรับ navigation)
- **การจัดการ state**: ใช้ custom hook (`useAuthStore`) เพื่อจัดการ `authUser`, `isSigningUp`, `isLoading`, และฟังก์ชัน `signup`, `login`, `logout`
- **UI**: ออกแบบให้ responsive ด้วย Tailwind CSS และมีกราฟิกตกแต่ง (skeleton loading ด้วย `animate-pulse`)
- **การตรวจสอบ**: ใช้ regular expression สำหรับอีเมล และเช็ครหัสผ่านอย่างง่าย
- **ข้อผิดพลาด**: จัดการด้วย toast และข้อความจาก backend
- **โค้ดทั้งหมด**: สามารถคัดลอกจาก GitHub repo ที่ระบุใน transcript

---

สรุปนี้แบ่งขั้นตอนให้ชัดเจนและครอบคลุมทุกส่วนสำคัญของการพัฒนา ถ้าต้องการเน้นส่วนใดเพิ่มเติมหรืออธิบายบางขั้นตอนให้ลึกขึ้น แจ้งมาได้เลย!


######### Socket.io $##########

### สรุปเนื้อหาการพัฒนาฟีเจอร์เรียลไทม์ด้วย Socket.io

เนื้อหานี้เกี่ยวกับการเพิ่มฟีเจอร์การสื่อสารแบบเรียลไทม์ให้กับแอปพลิเคชันโดยใช้ **Socket.io** ร่วมกับ **Node.js**, **Express**, และ **React** โดยมีการอธิบายขั้นตอนการตั้งค่าเซิร์ฟเวอร์ Socket.io, การจัดการการเชื่อมต่อ, การส่งข้อความแบบเรียลไทม์, และการแสดงสถานะผู้ใช้ออนไลน์ รวมถึงการปรับปรุงและเพิ่มฟีเจอร์ เช่น การเลื่อนอัตโนมัติและตัวกรองผู้ใช้ออนไลน์

---

### ขั้นตอนการพัฒนา (แบ่งเป็นขั้นตอนง่ายๆ)

#### 1. **ทำความเข้าใจโครงสร้างแอปพลิเคชัน**
   - **เป้าหมาย**: เข้าใจสถานะปัจจุบันของแอปพลิเคชันก่อนเพิ่มฟีเจอร์เรียลไทม์
   - **รายละเอียด**:
     - แอปพลิเคชันมี REST API ที่สร้างด้วย Node.js และ Express สำหรับจัดการคำขอ HTTP (GET, POST, PUT, DELETE)
     - REST API ไม่รองรับการสื่อสารแบบเรียลไทม์
     - จะเพิ่มเซิร์ฟเวอร์ Socket.io เพื่อจัดการการสื่อสารแบบเรียลไทม์โดยใช้เหตุการณ์ (event-based)

#### 2. **ตั้งค่าเซิร์ฟเวอร์ Socket.io**
   - **เป้าหมาย**: สร้างเซิร์ฟเวอร์ Socket.io บนเซิร์ฟเวอร์ Express ที่มีอยู่
   - **ขั้นตอน**:
     - สร้างไฟล์ `socket.js` ในโฟลเดอร์ `src/lib`
     - นำเข้าโมดูลที่จำเป็น: `Server` จาก `socket.io`, `http` (โมดูลในตัวของ Node), และ `express`
     - สร้างแอป Express และเซิร์ฟเวอร์ HTTP ด้วย `http.createServer(app)`
     - สร้างเซิร์ฟเวอร์ Socket.io โดยส่งเซิร์ฟเวอร์ HTTP และกำหนด CORS (เช่น `origin: ["http://localhost:5173"]`)
     - ส่งออก `app`, `server`, และ `io` จากไฟล์ `socket.js`
     - ใน `index.js`, นำเข้า `server` จาก `socket.js` และใช้แทน `app` เดิม

#### 3. **จัดการการเชื่อมต่อและตัดการเชื่อมต่อ**
   - **เป้าหมาย**: รับฟังการเชื่อมต่อและตัดการเชื่อมต่อของผู้ใช้
   - **ขั้นตอน**:
     - ใน `socket.js`, ใช้ `io.on('connection')` เพื่อรับฟังเมื่อผู้ใช้เชื่อมต่อ
     - แสดง `console.log('a user connected')` พร้อม `socket.id`
     - ใช้ `socket.on('disconnect')` เพื่อรับฟังเมื่อผู้ใช้ตัดการเชื่อมต่อและแสดง `console.log('a user disconnected')`
     - สร้างตัวแปร `userSocketMap` (object) เพื่อเก็บข้อมูลผู้ใช้ออนไลน์ โดยใช้ `userId` เป็นคีย์และ `socketId` เป็นค่า

#### 4. **ติดตั้งและตั้งค่า Socket.io Client ในฝั่ง React**
   - **เป้าหมาย**: ทำให้ฝั่งไคลเอนต์ (React) สามารถเชื่อมต่อกับเซิร์ฟเวอร์ Socket.io
   - **ขั้นตอน**:
     - ในโฟลเดอร์ `front-end`, ติดตั้งแพ็กเกจด้วยคำสั่ง `npm install socket.io-client`
     - ในไฟล์ `authStore.js`, สร้าง state สำหรับ `socket` (เริ่มต้นเป็น `null`)
     - สร้างฟังก์ชัน `connectSocket`:
       - นำเข้า `io` จาก `socket.io-client`
       - สร้างการเชื่อมต่อด้วย `io(baseUrl)` (เช่น `http://localhost:5001`)
       - เพิ่มตัวเลือก query เพื่อส่ง `userId` (เช่น `query: { userId: authUser.id }`)
       - ตรวจสอบว่าไม่มีการยืนยันตัวตนหรือเชื่อมต่ออยู่แล้วก่อนสร้างการเชื่อมต่อ
       - อัปเดต state `socket` หลังเชื่อมต่อ
     - สร้างฟังก์ชัน `disconnectSocket` เพื่อตัดการเชื่อมต่อเมื่อล็อกเอาท์
     - เรียก `connectSocket` เมื่อล็อกอิน, สมัครสมาชิก, หรือตรวจสอบการยืนยันตัวตน (ใน `useEffect`)

#### 5. **จัดการสถานะผู้ใช้ออนไลน์**
   - **เป้าหมาย**: แสดงรายการผู้ใช้ออนไลน์แบบเรียลไทม์
   - **ขั้นตอน**:
     - ใน `socket.js`:
       - เมื่อผู้ใช้เชื่อมต่อ, อัปเดต `userSocketMap` ด้วย `userId` และ `socketId`
       - ใช้ `io.emit('getOnlineUsers', Object.keys(userSocketMap))` เพื่อแจ้งไคลเอนต์ทั้งหมด
       - เมื่อตัดการเชื่อมต่อ, ลบ `userId` จาก `userSocketMap` และ emit เหตุการณ์ `getOnlineUsers` อีกครั้ง
     - ใน `authStore.js`:
       - รับฟังเหตุการณ์ `getOnlineUsers` ด้วย `socket.on('getOnlineUsers')`
       - อัปเดต state `onlineUsers` ด้วย `userIds` ที่ได้รับ
     - ใน `App.jsx`, console.log state `onlineUsers` เพื่อตรวจสอบ
     - ใน `sidebar` และ `chat header`, ใช้ `onlineUsers` เพื่อแสดงตัวบ่งชี้สถานะออนไลน์/ออฟไลน์

#### 6. **ส่งและรับข้อความแบบเรียลไทม์**
   - **เป้าหมาย**: ส่งข้อความจากผู้ใช้หนึ่งไปยังอีกคนหนึ่งแบบเรียลไทม์
   - **ขั้นตอน**:
     - ใน `socket.js`:
       - สร้างฟังก์ชัน `getReceiverSocketId(userId)` เพื่อคืนค่า `socketId` จาก `userSocketMap`
     - ใน `message controller`:
       - หลังบันทึกข้อความลงฐานข้อมูล, ตรวจสอบว่า `receiver` ออนไลน์โดยใช้ `getReceiverSocketId`
       - ถ้าออนไลน์, ใช้ `io.to(receiverSocketId).emit('newMessage', newMessage)` เพื่อส่งข้อความไปยังผู้รับ
     - ใน `chatStore.js`:
       - สร้างฟังก์ชัน `subscribeToMessages`:
         - รับ `socket` จาก `useAuthStore`
         - รับฟังเหตุการณ์ `newMessage` ด้วย `socket.on('newMessage')`
         - อัปเดต state `messages` โดยเพิ่ม `newMessage` ถ้า `senderId` ตรงกับ `selectedUser.id`
       - สร้างฟังก์ชัน `unsubscribeFromMessages` โดยใช้ `socket.off('newMessage')`
     - ใน `chat container`:
       - เรียก `subscribeToMessages` เมื่อดึงข้อความ
       - เรียก `unsubscribeFromMessages` ใน cleanup ของ `useEffect`

#### 7. **เพิ่มการเลื่อนอัตโนมัติเมื่อมีข้อความใหม่**
   - **เป้าหมาย**: ทำให้หน้าจอแชทเลื่อนไปยังข้อความล่าสุดโดยอัตโนมัติ
   - **ขั้นตอน**:
     - ใน `chat container`:
       - สร้าง `useRef(messageRef)`
       - เพิ่ม `ref={messageRef}` ในคอมโพเนนต์ข้อความ
       - สร้าง `useEffect` ที่ทำงานเมื่อ `messages` เปลี่ยน
       - ถ้ามีข้อความ, ใช้ `messageRef.current.scrollIntoView({ behavior: 'smooth' })`

#### 8. **เพิ่มผู้ใช้ทดสอบในฐานข้อมูล**
   - **เป้าหมาย**: สร้างผู้ใช้ทดสอบเพื่อทดสอบฟีเจอร์
   - **ขั้นตอน**:
     - ใน `back-end/src/seeds`, สร้างไฟล์ `user.seed.js`
     - คัดลอกโค้ดจาก GitHub ซึ่งมีอาร์เรย์ของผู้ใช้ (~15 คน) พร้อมข้อมูล (อีเมล, ชื่อ, รหัสผ่าน, รูปโปรไฟล์)
     - นำเข้า `dotenv`, `connectDB`, และ `User model`
     - รันสคริปต์ด้วย `node src/seeds/user.seed.js` เพื่อเพิ่มผู้ใช้ลงใน MongoDB
     - ตรวจสอบใน MongoDB ว่ามีผู้ใช้ใหม่เพิ่มเข้ามา

#### 9. **แก้ไขปัญหาการอัปเดต UI**
   - **เป้าหมาย**: ป้องกันการอัปเดต UI เมื่อข้อความมาจากผู้ใช้ที่ไม่ได้เลือก
   - **ขั้นตอน**:
     - ใน `chatStore.js`:
       - ใน `subscribeToMessages`, เพิ่มการตรวจสอบว่า `newMessage.senderId === selectedUser.id`
       - ถ้าไม่ใช่, return เพื่อไม่ให้อัปเดต state `messages`

#### 10. **เพิ่มตัวกรองผู้ใช้ออนไลน์ใน Sidebar**
   - **เป้าหมาย**: เพิ่มตัวเลือกเพื่อแสดงเฉพาะผู้ใช้ออนไลน์ใน sidebar
   - **ขั้นตอน**:
     - ใน `sidebar component`:
       - สร้าง state `showOnlineOnly` (เริ่มต้นเป็น `false`)
       - สร้าง `filteredUsers` โดยกรอง `users` ถ้า `showOnlineOnly` เป็น `true` (ใช้ `onlineUsers.includes(user.id)`)
       - ใช้ `filteredUsers` ใน map แทน `users`
       - เพิ่ม UI สำหรับ checkbox เพื่อสลับ `showOnlineOnly`
       - แสดงจำนวนผู้ใช้ออนไลน์ (`onlineUsers.length - 1` เพื่อไม่นับตัวเอง)
       - ถ้า `filteredUsers.length === 0`, แสดงข้อความ “No online users”

#### 11. **ทดสอบและตรวจสอบ**
   - **เป้าหมาย**: ตรวจสอบว่าฟีเจอร์ทั้งหมดทำงานอย่างถูกต้อง
   - **ขั้นตอน**:
     - ทดสอบการเชื่อมต่อ/ตัดการเชื่อมต่อโดยดู log ในเทอร์มินัล
     - ทดสอบการส่งข้อความระหว่างผู้ใช้สองคนในโหมดปกติและโหมดไม่ระบุตัวตน
     - ตรวจสอบการอัปเดตสถานะผู้ใช้ออนไลน์ใน sidebar และ chat header
     - ตรวจสอบการเลื่อนอัตโนมัติเมื่อมีข้อความใหม่
     - ตรวจสอบตัวกรองผู้ใช้ออนไลน์ว่าทำงานถูกต้อง
     - ตรวจสอบว่า UI ไม่อัปเดตเมื่อข้อความมาจากผู้ใช้ที่ไม่ได้เลือก

#### 12. **เตรียมการสำหรับการ Deploy**
   - **เป้าหมาย**: เตรียมแอปพลิเคชันสำหรับการ deploy ในขั้นตอนถัดไป
   - **รายละเอียด**:
     - ตรวจสอบว่าโค้ดทั้งหมดทำงานได้ดี
     - ไฟล์หลักที่เกี่ยวข้อง: `socket.js`, `index.js`, `authStore.js`, `chatStore.js`, `sidebar`, `chat container`
     - เตรียมโครงสร้างสำหรับการ deploy (จะกล่าวถึงในส่วนถัดไป)

---

### สรุปสิ่งที่ทำได้
- สร้างเซิร์ฟเวอร์ Socket.io เพื่อจัดการการสื่อสารแบบเรียลไทม์
- จัดการการเชื่อมต่อ/ตัดการเชื่อมต่อและแสดงสถานะผู้ใช้ออนไลน์
- ส่งและรับข้อความแบบเรียลไทม์ในแชทส่วนตัว
- เพิ่มการเลื่อนอัตโนมัติเมื่อมีข้อความใหม่
- สร้างผู้ใช้ทดสอบเพื่อจำลองสถานการณ์จริง
- ป้องกันการอัปเดต UI ที่ไม่จำเป็น
- เพิ่มตัวกรองเพื่อแสดงเฉพาะผู้ใช้ออนไลน์
- เตรียมแอปพลิเคชันสำหรับการ deploy

หวังว่าการแบ่งขั้นตอนนี้จะช่วยให้เข้าใจง่ายและชัดเจน!