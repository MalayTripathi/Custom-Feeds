let Parser = require('rss-parser');
let parser = new Parser();
let R = require('ramda');
const NewsModel = require('./news/models/news.model');
const _links = R.pluck('link');

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.feed1);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log(e)
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.feed2);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log(e)
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.feed3);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log(e)
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.feed4);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log(e)
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.feed5);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log(e)
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.feed6);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log(e)
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.feed7);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log(e)
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.feed8);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log(e)
		}
}, 60000);