const https = require('https');

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
      console.log(`Bucket ${bucket}: ${res.statusCode} - ${data}`);
    });
  });

  req.on('error', (e) => console.error(e));
  req.end();
});
