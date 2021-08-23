/*case dan api gratis
di bantu oleh bumblee bee vr*/

case 'glitchx':
txt1 = args[0]
txt2 = args[1]
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker?text=${txt1}&text2=${txt2}&theme=glitch&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'googlex':
txt1 = args[0]
txt2 = args[1]
txt3 = args[2]
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker?text=${txt1}&text2=${txt2}&text3=${txt3}&theme=google-suggestion&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'pubgx':
txt1 = args[0]
txt2 = args[1]
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/game?text=${txt1}&text2=${txt2}&theme=pubg&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'battlefieldx':
txt1 = args[0]
txt2 = args[1]
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/game?text=${txt1}&text2=${txt2}&theme=battlefield&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'coffeecupx':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/senja?text=${arg}&theme=coffee-cup&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'coffeecup2x':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/senja?text=${arg}&theme=coffee-cup2&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'neonx':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/metallic?text=${arg}&theme=neon&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'metallicx':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/metallic?text=${arg}&theme=glow&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'summerx':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/alam?text=${arg}&theme=summer&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'flowerx':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/alam?text=${arg}&theme=flower&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'burnx':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/random?text=${arg}&theme=text-burn&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'artquotex':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/random?text=${arg}&theme=art-quote&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'boarchx':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/roses?text=${arg}&theme=wooden-boarch&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'goldenx':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/textmaker/roses?text=${arg}&theme=golden&apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
//maker//
case 'maker':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker2':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker2?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker3':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker3?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker4':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker4?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker5':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker3d?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker6':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker3d/no2?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker7':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker3d/no3?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker8':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker3d/no4?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker9':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker3d?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker10':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker3d/no2?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker11':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker3d/no3?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker12':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker3d/no4?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'maker13':
anu = await fetchJson(`
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'tranformer':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker/special/transformer?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
case 'sertifikatepep':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/maker/special/epep?text=${arg}&apikey=lucilfer`)
xzn = await getBuffer(anu.result.results)
udin.sendMessage(from, xzn, image, {quoted: qul})
break
//random//
case 'kisahnabi':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/kisahnabi?nabi=${arg}&apikey=lucilfer`)
buff = await getBuffer(anu.result.nabi.image)
teks = `*HASIL*\n\n*Nama Nabi :* ${anu.result.nabi.nabi}\n*Lahir :* ${anu.result.nabi.lahir}\n*Umur :* ${anu.result.nabi.umur}\n*Tempat :* ${anu.result.nabi.tempat}\n*Kisah :* ${anu.result.nabi.kisah}`
udin.sendMessage(from, buff, image, {quoted: qul, caption: teks})
break
case 'wallpaper':
anu = await fetchJson(`https://xzn-apikey.herokuapp.com/api/random/wallpaper?apikey=lucilfer`)
xzn = await getBuffer(anu.result.url)
udin.sendMessage(from, xzn, image, {quoted: flokasi})
break
case 'darkjokes':
data = fs.readFileSync('./noapi/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
udin.sendMessage(from, hasil, image, {quoted: qul})
break