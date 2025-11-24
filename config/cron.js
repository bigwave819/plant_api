import cron from 'cron';
import https from 'https';

const job = new cron.CronJob('*/14 * * * *', function () {
    https
        .get('https://plant-api-0yg7.onrender.com/api/plants', (res) => {
            if(res.statusCode === 200) console.log('GET request sent successfully');
            else console.log('GET request failed', res.statusCode)
        })
        .on('error', (e) => console.error('error while sending the request', e))
});

export default job