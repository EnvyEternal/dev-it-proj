const Parser = require('rss-parser')
const parser = new Parser({timeout: 1000});
const cron = require('node-cron');
const parseString = require('xml2js').parseString;
const {Rsses} = require('../db/models')

module.exports.RssPusher = async () => {  
       const feed = await parser.parseURL('https://lifehacker.com/rss');
        feed.items.forEach(item => {
            parseString(item.content, async(err, result) => {
                try{
                        img = (result.img.$.src)
                        const data = {...item, img}
                        const rsspush =  await Rsses.create(data)
                    }
                catch(e){
                    console.log(e)
                    }  
                }
            )  
        }
    )
};
