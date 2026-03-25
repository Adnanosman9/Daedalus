const https = require('https');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'diagnostic_log.json');
fs.writeFileSync(logFile, '[]');

const bucketsToCheck = ['travel-proofs', 'travel_proofs', 'Travel-Proofs', 'travelproofs'];

bucketsToCheck.forEach(bucket => {
  const options = {
    hostname: 'uzfbwdjhzpreglutabdo.supabase.co',
    port: 443,
    path: `/storage/v1/bucket/${bucket}`,
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
      const logs = JSON.parse(fs.readFileSync(logFile));
      logs.push({ bucket, statusCode: res.statusCode, data: data.toString() });
      fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
      console.log(`Checked ${bucket}`);
    });
  });

  req.on('error', (e) => console.error(e));
  req.end();
});
