const https = require('https');

const options = {
  hostname: 'uzfbwdjhzpreglutabdo.supabase.co',
  port: 443,
  path: '/storage/v1/bucket',
  method: 'GET',
  headers: {
    'apikey': 'sb_publishable_9cpzLJVHH2EgGN8bPsvxGQ_RG3lyJy2',
    'Authorization': 'Bearer sb_publishable_9cpzLJVHH2EgGN8bPsvxGQ_RG3lyJy2'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (d) => { data += d; });
  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
