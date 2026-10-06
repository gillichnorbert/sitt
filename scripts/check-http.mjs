import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
const server=spawn(process.execPath,['dist/sitt-transport/server/server.mjs'],{env:{...process.env,PORT:'4179'},stdio:['ignore','pipe','pipe']});
try {
 await new Promise((resolve,reject)=>{const timeout=setTimeout(()=>reject(Error('Server startup timeout')),10000);server.stdout.once('data',()=>{clearTimeout(timeout);resolve()});server.once('error',reject)});
 for(const path of ['/','/araink','/szolgaltatasok/sittszallitas','/kalkulator','/tudastar','/tudastar/tehertaxi-rendeles','/nincs-ilyen-oldal']){
   const response=await fetch('http://localhost:4179'+path);const html=await response.text();
   assert.equal(response.status,['/kalkulator','/tudastar','/tudastar/tehertaxi-rendeles','/nincs-ilyen-oldal'].includes(path)?404:200,path);
   if(response.status===404) assert.match(html,/noindex, follow/); else assert.ok(html.includes('href="https://terramove.hu'+path+'"'));
   assert.equal(response.headers.get('cache-control'),'no-cache');console.log('PASS',response.status,path);
 }
 for (const [path,target] of [['/kezdolap?utm_source=test','/?utm_source=test'],['/araink/','/araink']]) {
   const response=await fetch('http://localhost:4179'+path,{redirect:'manual'});assert.equal(response.status,301);assert.equal(response.headers.get('location'),target);console.log('PASS 301',path);
 }
 for (const path of ['/llms.txt','/ai-catalog.json','/.well-known/ai-catalog.json','/.well-known/ard.json']) {
   const response = await fetch('http://localhost:4179' + path);
   assert.equal(response.status, 200, path);
   const content = await response.text();
   assert.ok(!content.trimStart().startsWith('<'), path + ' must not return HTML');
   if (path.endsWith('.txt')) {
     assert.match(response.headers.get('content-type'), /text\/plain/);
     assert.match(content, /^# TerraMove/m);
     assert.match(content, /\[[^\]]+\]\(https:\/\/terramove\.hu/);
   } else {
     assert.match(response.headers.get('content-type'), /application\/json/);
     const manifest = JSON.parse(content);
     assert.equal(manifest.specVersion, '1.0');
     assert.ok(Array.isArray(manifest.entries));
     assert.equal(manifest.host.displayName, 'TerraMove');
   }
   console.log('PASS discovery document + Content-Type:', path);
 }
} finally {server.kill()}
