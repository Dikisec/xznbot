<div align="center">
<img src="https://telegra.ph/file/0e9f55fefc50ff85ab663.jpg" alt="MyBot" width="300" />

# MyBot

>
>
>

<p align="center">
  <a href="https://github.com/zainudinafgan"><img title="Author" src="https://img.shields.io/badge/Author-ZainudinAnggara-red.svg?style=for-the-badge&logo=github" /></a>
</p>

<p align="center">
  <a href="https://github.com/zainudinafgan#thanks-to">Thanks to</a>
</p>
</div>


---



# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [Libwebp](https://developers.google.com/speed/webp/download)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases)
* [Visual Code](https://code.visualstudio.com)

# Instalasi
## Clone Repo & Instalasi dependencies
```bash
> git clone https://github.com/xznsenpai/xznbot
> cd xznbot
> bash install.sh / npm install
> node udin
```
## For Termux
```bash
> termux-setup-storage
> apt update && apt upgrade
> pkg install nodejs
> pkg install git
> pkg install bash
> git clone https://github.com/xznsenpai/xznbot
> cd xznbot
> bash install.sh
> node udin
```

## Installing the FFmpeg
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```


## Installing the libwebp
* Unduh salah satu versi libwebp yang tersedia dengan mengklik [di sini](https://developers.google.com/speed/webp/download).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `libwebp`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\libwebp\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal libwebp, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> webpmux -version
```

## Menjalankan bot
```bash
> node udin
atau bisa juga
> npm start
```

 Setelah itu, akan ada QR-CODE, buka WhatsApp-mu yg ingin dijadikan bot, lalu scan code-qr nya!

## Bot Tidak jalan
- Jika bot tidak jalan, coba ganti versi baileys
```bash
> npm i @adiwajshing/baileys@3.4.1
> atau
> npm i @adiwajshing/baileys@3.3.0
```
- Serah aja 

## Okelah
- ©[XM] XHIRO MHONSHINE
- Xᴢɴ々Bᴏᴛ
```

*Xᴢɴ々Bᴏᴛ*
```
# Thanks to
* [`Baileys`](https://github.com/adiwajshing/Baileys)
* [`Aqulzz`](https://github.com/zennn08)
* [`Xzn`](https://github.com/xznsenpai)

# Base Ori Dari
* [`Lord Aqul`](https://github.com/zennn08/BaseSelfBot)

# Rest api gratis
[`xznapi`](https://xzn-apikey.herokuapp.com)